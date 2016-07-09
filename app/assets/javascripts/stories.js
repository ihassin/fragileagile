var allButtons = ['Value proposition', 'Clear goals', 'Common language', 'Discussion', 'Epics', 'Story map', 'Features', 'INVEST', 'End-to-end', 'Rapid deployment', 'Meaningful feedback', 'Monitoring'];
var dimButtons = ['Clear goals', 'Common language', 'Value proposition', 'Discussion'];

var canvas;
var context;

const CANVAS_WIDTH = 1400;
const CANVAS_HEIGHT = 800;

var current = null;
var gon;

$(document).ready(function() {
    canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');
    context.strokeStyle = "Blue";

    hide(allButtons);

    if(window.location.hash == '#stories') {
        subjectClick("Stories", "comment")
    }

    canvas.onmousedown = function() {
        current = null;
        context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        show(allButtons);
    }

} )

function storyDblClick(title, comment) {
    switch(title) {
        case 'Value proposition':
            context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            window.location = 'https://docs.google.com/presentation/d/1lv9e0zPmNHfs9J1DLerLTEr2O2jGOM-BiwCJOSA-CXs/edit#slide=id.g126a8a42dc_0_41'
            break;
    }
}

function storyInit(s) {
    gon = s
}

function storyClick(title, comment) {

    if(current == gon[title]) {
        return;
    }
    current = gon[title];

    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    undim(dimButtons);

    comments(gon[title]);

    switch(title) {
        case 'Value proposition':
        case 'Clear goals':
        case 'Common language':
            show(['Value proposition', 'Clear goals', 'Common language', 'Discussion'])
            hide(['Epics', 'Story map', 'Features', 'INVEST', 'End-to-end', 'Rapid deployment', 'Meaningful feedback', 'Monitoring']);
            connectValue();
            break;

        case 'Discussion':
        case 'Epics':
        case 'Story map':
        case 'Features':
            show(['Value proposition', 'Clear goals', 'Common language', 'Discussion', 'Epics', 'Story map', 'Features', 'INVEST'])
            hide(['End-to-end', 'Rapid deployment', 'Meaningful feedback', 'Monitoring']);
            connectDiscussion();
            break;

        case 'INVEST':
            show(['INVEST', 'End-to-end', 'Value proposition', 'Clear goals', 'Common language', 'Discussion', 'Epics', 'Story map', 'Features'])
            hide(['Rapid deployment', 'Meaningful feedback', 'Monitoring']);
            connectInvest();
            break;

        case 'End-to-end':
            show(['Rapid deployment', 'End-to-end', 'INVEST', 'Value proposition', 'Clear goals', 'Common language', 'Discussion', 'Epics', 'Story map', 'Features'])
            hide(['Meaningful feedback', 'Monitoring']);
            connectEndToEnd();
            break;

        case 'Rapid deployment':
            show(['Meaningful feedback', 'Monitoring', 'Rapid deployment', 'End-to-end', 'INVEST', 'Value proposition', 'Clear goals', 'Common language', 'Discussion', 'Epics', 'Story map', 'Features'])
            connectRapid();
            break;

        case 'Monitoring':
            show(['Meaningful feedback', 'Monitoring', 'Rapid deployment', 'End-to-end', 'INVEST', 'Value proposition', 'Clear goals', 'Common language', 'Discussion', 'Epics', 'Story map', 'Features'])
            connectSemantic();
            break;

        case 'Meaningful feedback':
            show(['Meaningful feedback', 'Monitoring', 'Rapid deployment', 'End-to-end', 'INVEST', 'Value proposition', 'Clear goals', 'Common language', 'Discussion', 'Epics', 'Story map', 'Features'])
            connectSemantic();
            break;
    }
}

function connectValue() {
    drawObject(gon["Value proposition"], gon["Discussion"]);
    drawObject(gon["Clear goals"], gon["Discussion"]);
    drawObject(gon["Common language"], gon["Discussion"]);
}

function connectDiscussion() {
    connectValue();
    drawObject(gon["Discussion"], gon["Epics"]);
    drawObject(gon["Discussion"], gon["Story map"]);
    drawObject(gon["Discussion"], gon["Features"]);
    drawObject(gon["Discussion"], gon["INVEST"]);
}

function connectInvest() {
    connectValue();
    connectDiscussion();
    drawObject(gon["INVEST"], gon["End-to-end"]);
}

function connectEndToEnd() {
    connectValue();
    drawObject(gon["INVEST"], gon["End-to-end"]);
    drawObject(gon["End-to-end"], gon["Rapid deployment"]);
    drawObject(gon["INVEST"], gon["Discussion"]);
    drawObject(gon["Value proposition"], gon["Discussion"]);
    drawObject(gon["Clear goals"], gon["Discussion"]);
    drawObject(gon["Common language"], gon["Discussion"]);
}

function connectRapid() {
    drawObject(gon["Rapid deployment"], gon["End-to-end"]);
    drawObject(gon["Rapid deployment"], gon["Monitoring"]);
    drawObject(gon["Rapid deployment"], gon["Meaningful feedback"]);
    drawObject(gon["INVEST"], gon["End-to-end"]);
    drawObject(gon["INVEST"], gon["Discussion"]);
    drawObject(gon["Value proposition"], gon["Discussion"]);
    drawObject(gon["Clear goals"], gon["Discussion"]);
    drawObject(gon["Common language"], gon["Discussion"]);
    dim(dimButtons);
}

function connectSemantic() {
    drawObject(gon["Rapid deployment"], gon["End-to-end"]);
    drawObject(gon["Rapid deployment"], gon["Monitoring"]);
    drawObject(gon["INVEST"], gon["End-to-end"]);
    drawObject(gon["INVEST"], gon["Discussion"]);
    drawObject(gon["Value proposition"], gon["Discussion"]);
    drawObject(gon["Clear goals"], gon["Discussion"]);
    drawObject(gon["Common language"], gon["Discussion"]);

    drawObject(gon["Monitoring"], gon["Meaningful feedback"]);
    drawObject(gon["Rapid deployment"], gon["Meaningful feedback"]);
    dim(dimButtons);
}
