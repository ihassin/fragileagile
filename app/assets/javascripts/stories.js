var allButtons = ['Unbiased change', 'Flexible planning', 'Right size', 'Small changes', 'Business stressors', 'Value proposition', 'Clear goals', 'Common language', 'Discussion', 'Epics', 'Story map', 'Features', 'INVEST', 'End to end', 'Rapid deployment', 'Meaningful feedback', 'Monitoring'];
var dimButtons = [];

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

    storyClick("Clear goals")

    if(window.location.hash == 'value') {
        subjectClick("Value proposition")
    }

    canvas.onmousedown = function() {
        current = null;
        context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        show(allButtons);
    }

} )

function jumpto(title, location) {
    window.location = location
    window.open(gon[title].url)
}

function storyDblClick(title) {
    switch(title) {
        case 'Flexible planning':
            jumpto(title, '#ap')
            break;

        case 'Rapid deployment':
            jumpto(title, '#rapid')
            break;

        case 'Monitoring':
            jumpto(title, '#semantic')
            break;

        case 'End to end':
            jumpto(title, '#endtoend')
            break;

        case 'Meaningful feedback':
            jumpto(title, '#feedback')
            break;
    }
}

function storyInit(s) {
    gon = s
}

function storyClick(title) {

    if(current == gon[title]) {
        return;
    }
    current = gon[title];

    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    undim(dimButtons);
    comments(gon[title]);

    switch(title) {
        case 'Clear goals':
            hide(['Epics', 'Features', 'Story map', 'INVEST', 'End to end', 'Small changes', 'Right size', 'Rapid deployment', 'Monitoring', 'Flexible planning', 'Unbiased change', 'Meaningful feedback' ]);
            show(['Clear goals', 'Common language', 'Business stressors', 'Discussion']);
            connectGoals();
            break;

        case 'Common language':
        case 'Business stressors':
        case 'Discussion':
            hide(['Clear goals', 'Small changes', 'Right size', 'Rapid deployment', 'Monitoring', 'Flexible planning', 'Unbiased change', 'Meaningful feedback' ]);
            show(['Common language', 'Business stressors', 'Discussion', 'Epics', 'Features', 'Story map', 'INVEST', 'End to end']);
            connectValue();
            break;

        case 'Epics':
        case 'Features':
        case 'Story map':
        case 'INVEST':
        case 'End to end':
            hide(['End to end', 'Epics', 'Features', 'Story map', 'Common language', 'Business stressors', 'Discussion', 'Clear goals', 'Rapid deployment', 'Monitoring', 'Flexible planning', 'Unbiased change', 'Meaningful feedback' ]);
            show(['Small changes', 'Right size', 'INVEST']);
            connectInvest();
            break;

        case 'Small changes':
            hide(['INVEST', 'Right size', 'End to end', 'Epics', 'Features', 'Story map', 'Common language', 'Business stressors', 'Discussion', 'Clear goals', 'Flexible planning', 'Unbiased change', 'Meaningful feedback' ]);
            show(['Small changes', 'Rapid deployment', 'Monitoring' ]);
            connectSmall();
            break;

        case 'Right size':
            hide(['Small changes', 'Rapid deployment', 'INVEST', 'End to end', 'Epics', 'Features', 'Story map', 'Common language', 'Business stressors', 'Discussion', 'Clear goals', 'Monitoring', 'Unbiased change', 'Meaningful feedback' ]);
            show(['Right size', 'Flexible planning']);
            connectSize();
            break;

        case 'Rapid deployment':
        case 'Monitoring':
            hide(['Small changes', 'INVEST', 'End to end', 'Epics', 'Features', 'Story map', 'Common language', 'Business stressors', 'Discussion', 'Clear goals' ]);
            show(['Rapid deployment', 'Monitoring', 'Unbiased change', 'Meaningful feedback']);
            connectMonitoring();
            break;

        case 'Meaningful feedback':
            hide(['Right size', 'Rapid deployment', 'Monitoring', 'Unbiased change', 'Small changes', 'INVEST', 'End to end', 'Epics', 'Features', 'Story map', 'Common language', 'Business stressors', 'Discussion', 'Clear goals' ]);
            show(['Meaningful feedback', 'Flexible planning']);
            connectSemantic();
            break;

        case 'Flexible planning':
            show(['Right size', 'Meaningful feedback', 'Flexible planning', 'Rapid deployment', 'Monitoring', 'Unbiased change', 'Small changes', 'INVEST', 'End to end', 'Epics', 'Features', 'Story map', 'Common language', 'Business stressors', 'Discussion', 'Clear goals' ]);
            connectBack();
            break;
    }
}

function connectGoals() {
    drawObject(gon["Clear goals"], gon["Common language"]);
    drawObject(gon["Clear goals"], gon["Business stressors"]);
    drawObject(gon["Clear goals"], gon["Discussion"]);
}

function connectValue() {
    drawObject(gon["Common language"], gon["Features"]);

    drawObject(gon["Discussion"], gon["Epics"]);
    drawObject(gon["Discussion"], gon["Features"]);
    drawObject(gon["Discussion"], gon["Story map"]);
    drawObject(gon["Discussion"], gon["INVEST"]);
    drawObject(gon["Discussion"], gon["End to end"]);

    drawObject(gon["Business stressors"], gon["End to end"]);
}

function connectInvest() {
    drawObject(gon["INVEST"], gon["Small changes"]);
    drawObject(gon["INVEST"], gon["Right size"]);
}

function connectSmall() {
    drawObject(gon["Small changes"], gon["Rapid deployment"]);
    drawObject(gon["Small changes"], gon["Monitoring"]);
}

function connectSize() {
    drawObject(gon["Right size"], gon["Flexible planning"]);
}

function connectMonitoring() {
    drawObject(gon["Rapid deployment"], gon["Meaningful feedback"]);
    drawObject(gon["Rapid deployment"], gon["Unbiased change"]);
}

function connectSemantic() {
    drawObject(gon["Meaningful feedback"], gon["Flexible planning"]);
}

function connectBack() {
    connectGoals();
    connectValue();
    connectInvest();
    connectSmall();
    connectMonitoring();
    connectSemantic();
}

