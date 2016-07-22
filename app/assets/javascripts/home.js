var allButtons = ['IaC', 'Adaptive planning', 'Feature Toggles', 'Stories', 'Resilience', 'AB Testing', 'MVP', 'Code', 'Fragile', 'SCM', 'TBD', 'Automation', 'CI', 'Stable', 'TDD', 'Small batches', 'BDD', 'Regression', 'CD', 'Economical', 'Semantic Monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Performant', 'Feature Teams', 'You build it, you run it' , 'agile', 'Emergent Arch'];
var mvpButtons = ['IaC', 'Adaptive planning', 'Feature Toggles', 'Stories', 'SCM','AB Testing', 'Code', 'TBD', 'Automation', 'CI', 'TDD', 'Small batches', 'BDD', 'Regression', 'CD', 'Semantic Monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature Teams', 'You build it, you run it', 'Emergent Arch', 'Resilience'];
var fragileButtons = ['Feature Toggles', 'Stories', 'Resilience', 'AB Testing', 'SCM', 'TBD', 'Automation', 'CI', 'Stable', 'TDD', 'Small batches', 'BDD', 'Regression', 'CD', 'Economical', 'Semantic Monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Performant', 'Feature Teams', 'You build it, you run it' , 'agile', 'Emergent Arch'];
var cdDimButtons = ['Feature Toggles', 'Stories', 'Code', 'MVP', 'SCM', 'TBD', 'Automation', 'CI'];
var clDimButtons = ['Feature Toggles', 'Stories', 'BDD', 'Regression', 'CD', 'TDD', 'Emergent Arch', 'Small batches'];

var canvas;
var context;

const CANVAS_WIDTH = 1400;
const CANVAS_HEIGHT = 800;

$(document).ready(function() {
    canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');
    context.strokeStyle = "Blue";

    hide(mvpButtons);

    switch(window.location.hash) {
        case '#stories':
            subjectClick("Stories")
            break;

        case '#rapid':
            subjectClick("CD")
            break;

        case '#semantic':
            subjectClick("Semantic Monitoring")
            break;

        case '#cl':
            subjectClick("CL")
            break;

        case '#tdd':
            subjectClick("TDD")
            break;
    }

    canvas.onmousedown = function() {
        current = null;
        context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        show(allButtons);
    }

} )

var current = null;
var gon;

function homeInit(s) {
    gon = s
}

function subjectDblClick(title, comment) {
    switch(title) {
        case 'Stories':
            window.location = '#stories';
            window.open('/stories');
            break;

        case 'SCM':
        case 'TBD':
        case 'Feature Toggles':
        case 'CD':
        case 'CI':
            window.open(gon[title].url);
            break;
    }
}

function subjectClick(title) {

    if(current == gon[title]) {
        return;
    }
    current = gon[title];

    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    undim(cdDimButtons);
    undim(clDimButtons);

    comments(gon[title]);

    switch(title) {
        case 'MVP':
            show(['Stories', 'Code', 'Feature Teams', 'MVP', 'Semantic Monitoring'])
            hide(['IaC', 'Adaptive planning', 'Feature Toggles', 'Resilience', 'AB Testing', 'SCM', 'TBD', 'Automation', 'CI', 'Stable', 'TDD', 'Small batches', 'BDD', 'Regression', 'CD', 'Economical', 'CL', 'Lean PMO', 'Stabilize WIP', 'Performant', 'You build it, you run it' , 'agile', 'Emergent Arch']);
            connectMVP();
            break;

        case 'Resilience':
            show(['MVP', 'Resilience', 'Code', 'Performant', 'agile'])
            hide(['IaC', 'Adaptive planning', 'Feature Toggles', 'Stories', 'Feature Teams', 'Semantic Monitoring', 'AB Testing', 'SCM', 'TBD', 'Automation', 'CI', 'Stable', 'TDD', 'Small batches', 'BDD', 'Regression', 'CD', 'Economical', 'CL', 'Lean PMO', 'Stabilize WIP', 'Performant', 'You build it, you run it' , 'Emergent Arch']);
            dim(cdDimButtons);
            connectResilience();
            break;

        case 'Lean PMO':
            show(['Fragile', 'Semantic Monitoring', 'Lean PMO', 'Stabilize WIP'])
            hide(['IaC', 'Adaptive planning', 'MVP', 'BDD', 'Code', 'SCM', 'Automation', 'Feature Toggles', 'Stories', 'Resilience', 'AB Testing', 'CL', 'CD', 'Small batches', 'Emergent Arch', 'TDD', 'Regression', 'TBD', 'CI', 'agile', 'Stable', 'Economical', 'Performant', 'Feature Teams', 'You build it, you run it'])
            connectPMO();
            break;

        case 'Code':
            show(['MVP', 'Feature Toggles', 'Code', 'SCM', 'Fragile', 'Emergent Arch', 'Small batches'])
            hide(['IaC', 'Adaptive planning', 'Stories', 'Resilience', 'AB Testing', 'agile', 'Stable', 'Economical', 'Performant', 'TBD', 'Automation', 'CI', 'TDD', 'BDD', 'Regression', 'CD', 'Semantic Monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature Teams', 'You build it, you run it'])
            connectCode();
            break;

        case 'SCM':
            show(['MVP', 'TBD', 'SCM', 'Code', 'Automation', 'Fragile'])
            hide(['IaC', 'Adaptive planning', 'Feature Toggles', 'Stories', 'Resilience', 'Emergent Arch', 'Small batches', 'AB Testing', 'Economical', 'Performant', 'Stable', 'agile', 'Semantic Monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature Teams', 'You build it, you run it', 'CI', 'TDD', 'BDD', 'Regression', 'CD'])
            connectSCM();
            break;

        case 'Feature Toggles':
            show(['Feature Toggles', 'TBD', 'Code', 'Fragile'])
            hide(['IaC', 'Adaptive planning', 'MVP', 'SCM', 'CI', 'Automation', 'Stories', 'Resilience', 'Stable','AB Testing', 'agile', 'Economical', 'Performant', 'TDD', 'Emergent Arch', 'Small batches', 'BDD', 'Regression', 'CD', 'Semantic Monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature Teams', 'You build it, you run it'])
            connectFeatures();
            break;

        case 'TBD':
            show(['Feature Toggles', 'TBD', 'CI', 'SCM', 'Fragile'])
            hide(['IaC', 'Adaptive planning', 'MVP', 'Automation', 'Code', 'Stories', 'Resilience', 'Stable','AB Testing', 'agile', 'Economical', 'Performant', 'TDD', 'Emergent Arch', 'Small batches', 'BDD', 'Regression', 'CD', 'Semantic Monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature Teams', 'You build it, you run it'])
            connectTBD();
            break;

        case 'CI':
            show(['MVP', 'Feature Toggles', 'CI', 'SCM', 'Code', 'CD', 'Stable', 'Automation', 'TBD'])
            hide(['IaC', 'Adaptive planning', 'Stories', 'Resilience', 'Fragile', 'Economical','AB Testing', 'agile', 'Performant', 'TDD', 'Emergent Arch', 'Regression', 'Small batches', 'BDD', 'Semantic Monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature Teams', 'You build it, you run it'])
            connectCI();
            break;

        case 'Automation':
            show(['IaC', 'TBD', 'Automation', 'SCM', 'TDD', 'BDD', 'Regression', 'CI', 'Fragile'])
            hide(['Adaptive planning', 'MVP', 'Code', 'Feature Toggles', 'Stories', 'Resilience', 'Stable','AB Testing', 'CD', 'CL', 'Emergent Arch', 'Small batches', 'agile', 'Economical', 'Performant', 'Semantic Monitoring', 'Stabilize WIP', 'Lean PMO', 'Feature Teams', 'You build it, you run it'])
            connectAutomation();
            break;

        case 'TDD':
            show(['IaC', 'Stories', 'TDD', 'Fragile', 'Automation', 'Emergent Arch', 'Regression'])
            hide(['Adaptive planning', 'MVP', 'Code', 'SCM', 'Feature Toggles', 'Resilience', 'AB Testing', 'TBD', 'CI', 'CD', 'agile', 'Stable', 'Economical', 'Performant', 'Small batches', 'BDD', 'Semantic Monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature Teams', 'You build it, you run it'])
            connectTDD();
            break;

        case 'BDD':
            show(['IaC', 'Stories', 'BDD', 'Automation', 'Regression', 'Emergent Arch', 'Fragile', 'Semantic Monitoring'])
            hide(['Adaptive planning', 'MVP', 'Code', 'SCM', 'Feature Toggles', 'Resilience', 'AB Testing', 'TDD', 'TBD', 'CI', 'CD', 'agile', 'Stable', 'Economical', 'Performant', 'Small batches', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature Teams', 'You build it, you run it'])
            connectBDD();
            break;

        case 'Stories':
            show(['Semantic Monitoring', 'MVP', 'Stories', 'BDD', 'Automation'])
            hide(['IaC', 'Adaptive planning', 'Code', 'SCM', 'Feature Toggles', 'Regression', 'Emergent Arch', 'Resilience', 'AB Testing', 'TDD', 'TBD', 'CI', 'CD', 'agile', 'Stable', 'Economical', 'Performant', 'Small batches', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature Teams', 'You build it, you run it'])
            connectStories();
            break;

        case 'Regression':
            show(['CI', 'Small batches', 'Regression', 'Automation', 'CD', 'TDD', 'Fragile', 'BDD'])
            hide(['IaC', 'Adaptive planning', 'MVP', 'Code', 'SCM', 'Feature Toggles', 'Stories', 'Resilience', 'Economical','AB Testing', 'TBD', 'agile', 'Stable', 'Performant', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature Teams', 'You build it, you run it', 'Emergent Arch', 'Semantic Monitoring'])
            connectRegression();
            break;

        case 'Emergent Arch':
            show(['Code', 'Emergent Arch', 'BDD', 'Small batches', 'TDD', 'Fragile'])
            hide(['IaC', 'Adaptive planning', 'MVP', 'SCM', 'Automation', 'Feature Toggles', 'Stories', 'Resilience', 'AB Testing', 'Regression', 'TBD', 'CI', 'CD', 'agile', 'Stable', 'Economical', 'Performant', 'Semantic Monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature Teams', 'You build it, you run it'])
            connectEmergent();
            break;

        case 'Small batches':
            show(['Code', 'Regression', 'CI', 'Small batches', 'Emergent Arch', 'CD', 'Fragile'])
            hide(['IaC', 'Adaptive planning', 'MVP', 'SCM', 'Automation', 'TDD', 'Feature Toggles', 'Stories', 'Resilience', 'Economical', 'BDD','AB Testing', 'TBD', 'agile', 'Stable', 'Performant', 'Semantic Monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature Teams', 'You build it, you run it'])
            connectBatches();
            break;

        case 'Semantic Monitoring':
            show(['Adaptive planning', 'Stories', 'MVP', 'Semantic Monitoring', 'Fragile', 'BDD', 'Stabilize WIP','AB Testing'])
            hide(['IaC', 'Code', 'SCM', 'Automation', 'Feature Toggles', 'Resilience', 'CL', 'CD', 'Small batches', 'Emergent Arch', 'TDD', 'Regression', 'TBD', 'CI', 'agile', 'Stable', 'Economical', 'Performant', 'Lean PMO', 'Feature Teams', 'You build it, you run it'])
            connectSemantic();
            break;

        case 'CD':
            show(['Feature Toggles', 'Stories', 'Feature Teams', 'Code', 'SCM', 'CD', 'CL', 'CI', 'Small batches', 'Regression', 'Economical', 'Stable', 'TBD', 'Automation', 'BDD', 'TDD', 'Emergent Arch'])
            hide(['IaC', 'Adaptive planning', 'MVP', 'Resilience', 'AB Testing', 'Fragile', 'Performant', 'agile', 'Semantic Monitoring', 'Lean PMO', 'Stabilize WIP', 'You build it, you run it'])
            dim(cdDimButtons);
            connectCD();
            break;

        case 'CL':
            show(['Adaptive planning', 'Feature Toggles', 'Stories', 'You build it, you run it', 'Code', 'SCM', 'CL','AB Testing', 'agile', 'Economical', 'Semantic Monitoring', 'Performant', 'TBD', 'CI', 'CD', 'Small batches', 'Automation', 'TDD', 'Emergent Arch', 'BDD', 'Regression'])
            hide(['IaC', 'Stabilize WIP', 'MVP', 'Resilience', 'Stable', 'Fragile', 'Lean PMO', 'Feature Teams'])
            dim(cdDimButtons);
            dim(clDimButtons);
            connectCL();
            break;

        case 'Stabilize WIP':
            show(['Adaptive planning', 'Semantic Monitoring', 'Lean PMO', 'Stabilize WIP'])
            hide(['IaC', 'You build it, you run it', 'MVP', 'BDD', 'Automation', 'SCM', 'Code', 'Feature Toggles', 'Stories', 'Resilience', 'Feature Teams', 'AB Testing', 'CD', 'Small batches', 'Emergent Arch', 'TDD', 'Regression', 'TBD', 'CI', 'Stable', 'Economical', 'CL', 'Performant', 'agile', 'Fragile'])
            connectWIP();
            break;

        case 'Adaptive planning':
            show(['Semantic Monitoring', 'Feature Teams', 'You build it, you run it', 'CL', 'Adaptive planning', 'Stabilize WIP', 'Performant', 'agile', 'Fragile'])
            hide(['IaC', 'Lean PMO', 'MVP', 'BDD', 'Automation', 'SCM', 'Code', 'Feature Toggles', 'Stories', 'Resilience', 'AB Testing', 'CD', 'Small batches', 'Emergent Arch', 'TDD', 'Regression', 'TBD', 'CI', 'Stable', 'Economical'])
            connectAdaptive();
            break;

        case 'Feature Teams':
            show(['MVP', 'CI', 'Regression', 'Small batches', 'CD', 'Fragile', 'Feature Teams', 'You build it, you run it'])
            hide(['IaC', 'Adaptive planning', 'Feature Toggles', 'Stories', 'Resilience', 'Performant', 'CL', 'AB Testing', 'agile', 'Stable', 'Code', 'SCM', 'agile', 'Automation', 'TBD', 'Economical', 'TDD', 'Emergent Arch', 'BDD', 'Semantic Monitoring', 'Lean PMO', 'Stabilize WIP'])
            connectTeams();
            break;

        case 'You build it, you run it':
            show(['IaC', 'Adaptive planning', 'CL', 'agile', 'Fragile', 'Feature Teams', 'You build it, you run it'])
            hide(['Stabilize WIP', 'MVP', 'Feature Toggles', 'Stories', 'Resilience', 'AB Testing', 'CI', 'CD', 'Performant', 'Stable', 'Code', 'SCM', 'Automation', 'TBD', 'Economical', 'TDD', 'Emergent Arch', 'Regression', 'Small batches', 'BDD', 'Semantic Monitoring', 'Lean PMO'])
            connectBuildIt();
            break;

        case 'IaC':
            show(['Automation', 'TDD', 'BDD', 'IaC', 'Fragile', 'Feature Teams', 'You build it, you run it'])
            hide(['Adaptive planning', 'CL', 'agile', 'Stabilize WIP', 'MVP', 'Feature Toggles', 'Stories', 'Resilience', 'AB Testing', 'CI', 'CD', 'Performant', 'Stable', 'Code', 'SCM', 'TBD', 'Economical', 'Emergent Arch', 'Regression', 'Small batches', 'Semantic Monitoring', 'Lean PMO'])
            connectIaC();
            break;

        case'AB Testing':
            show(['Feature Toggles', 'CD', 'CL', 'AB Testing', 'Fragile', 'Semantic Monitoring'])
            hide(['IaC', 'Adaptive planning', 'MVP', 'BDD', 'Automation', 'SCM', 'Code', 'Stories', 'Resilience', 'Performant', 'agile', 'Economical', 'Small batches', 'TDD', 'Emergent Arch', 'CI', 'TBD', 'Regression', 'Stable', 'Stabilize WIP', 'Lean PMO', 'Feature Teams', 'You build it, you run it'])
            connectAB();
            break;

        case 'Fragile':
            show(['Code', 'Fragile'])
            hide(fragileButtons);
            connectFragile();
            break;

        case 'Stable':
            show(['MVP', 'Feature Toggles', 'Stable', 'Code', 'SCM', 'TBD', 'Automation', 'CI'])
            hide(['IaC', 'Stories', 'Resilience', 'CL', 'CD', 'Emergent Arch','AB Testing', 'TDD', 'BDD', 'Small batches', 'Regression', 'Economical', 'Fragile', 'Performant', 'agile', 'Semantic Monitoring', 'Lean PMO', 'Stabilize WIP', 'Feature Teams', 'You build it, you run it'])
            connectStable();
            break;

        case 'Economical':
            show(['MVP', 'Feature Toggles', 'Stories', 'Feature Teams', 'Code', 'SCM', 'CI', 'Small batches', 'Regression', 'Economical', 'TBD', 'Automation', 'BDD', 'TDD', 'Emergent Arch', 'CD'])
            hide(['IaC', 'Adaptive planning', 'Resilience', 'CL', 'AB Testing', 'Fragile', 'Performant', 'agile', 'Semantic Monitoring', 'Stable', 'Lean PMO', 'Stabilize WIP', 'You build it, you run it'])
            connectEconomical();
            break;

        case 'Performant':
            show(['Adaptive planning', 'MVP', 'Feature Toggles', 'Stories', 'Resilience', 'AB Testing', 'Feature Teams', 'Semantic Monitoring', 'MVP', 'Lean PMO', 'Stabilize WIP', 'Performant', 'Code', 'SCM', 'CL', 'CI', 'Small batches', 'Regression', 'TBD', 'Automation', 'BDD', 'TDD', 'Emergent Arch', 'CD'])
            hide(['IaC', 'Fragile', 'Economical', 'agile', 'Stable', 'You build it, you run it'])
            connectPerformant();
            break;

        case 'agile':
            show(['IaC', 'Adaptive planning', 'MVP', 'Feature Toggles', 'Stories', 'Resilience', 'AB Testing', 'You build it, you run it', 'agile', 'Feature Teams', 'Semantic Monitoring', 'MVP', 'Lean PMO', 'Stabilize WIP', 'Code', 'SCM', 'CL', 'CI', 'Small batches', 'Regression', 'TBD', 'Automation', 'BDD', 'TDD', 'Emergent Arch', 'CD'])
            hide(['Economical', 'Stable', 'Performant', 'Fragile'])
            connectAgile();
            break;
    }
}

function MVPCode() {
    drawObject(gon["MVP"], gon["Code"]);
}

function MVPStories() {
    drawObject(gon["MVP"], gon["Stories"]);
}

function MVPTeams() {
    drawObject(gon["MVP"], gon["Feature Teams"]);
}

function SCMAuto() {
    drawObject(gon["SCM"], gon["Automation"]);
}

function CodeSCM() {
    drawObject(gon["Code"], gon["SCM"]);
}

function SCMTBD() {
    drawObject(gon["SCM"], gon["TBD"]);
}

function TBDCI() {
    drawObject(gon["TBD"], gon["CI"]);
}

function AutoOut() {
    drawObject(gon["Automation"], gon["TDD"]);
    drawObject(gon["Automation"], gon["BDD"]);
    drawObject(gon["Automation"], gon["CI"]);
}

function connectCode() {
    drawObject(gon["Code"], gon["Fragile"]);
    drawObject(gon["Code"], gon["Emergent Arch"]);
    drawObject(gon["Code"], gon["Small batches"]);
    drawObject(gon["Code"], gon["Feature Toggles"]);
    MVPCode();
    CodeSCM();
}

function connectSCM() {
    MVPCode();
    CodeSCM();
    drawObject(gon["SCM"], gon["TBD"]);
    SCMAuto();
}

function connectFragile() {
    drawObject(gon["Code"], gon["Fragile"]);
    setOpacity("Stable", 0.3);

    MVPCode();
}

function connectStable() {
    MVPCode();
    CodeSCM();
    drawObject(gon["Code"], gon["Feature Toggles"]);
    drawObject(gon["Feature Toggles"], gon["TBD"]);

    SCMAuto();
    SCMTBD();

    TBDCI();
    drawObject(gon["Automation"], gon["CI"]);
    drawObject(gon["CI"], gon["Stable"]);

    setOpacity("Economical", 0.3);
}

function connectEconomical() {
    MVPCode();
    CodeSCM();
    drawObject(gon["Code"], gon["Feature Toggles"]);
    drawObject(gon["Feature Toggles"], gon["TBD"]);
    MVPStories();
    drawObject(gon["Stories"], gon["BDD"]);

    SCMTBD();
    SCMAuto();
    drawObject(gon["SCM"], gon["Emergent Arch"], true);
    drawObject(gon["SCM"], gon["Small batches"], true);

    drawObject(gon["Small batches"], gon["CD"]);
    drawObject(gon["Regression"], gon["CD"]);

    drawObject(gon["CI"], gon["CD"]);

    drawObject(gon["CD"], gon["Economical"]);
    drawObject(gon["Feature Teams"], gon["CD"]);
    TBDCI();

    AutoOut();
    drawObject(gon["Automation"], gon["Regression"], true);

    drawObject(gon["TDD"], gon["Emergent Arch"]);
    drawObject(gon["TDD"], gon["Regression"]);

    drawObject(gon["BDD"], gon["Regression"]);
    drawObject(gon["BDD"], gon["Emergent Arch"]);

    drawObject(gon["Emergent Arch"], gon["Small batches"], true);
    setOpacity("Performant", 0.3);
}

function connectPerformant() {
    MVPCode();
    CodeSCM();
    MVPTeams();
    MVPStories();
    drawObject(gon["Stories"], gon["BDD"]);

    SCMTBD();
    drawObject(gon["Code"], gon["Feature Toggles"]);
    drawObject(gon["Feature Toggles"], gon["TBD"]);

    SCMAuto();

    drawObject(gon["Code"], gon["Emergent Arch"], true);
    drawObject(gon["Code"], gon["Small batches"], true);
    drawObject(gon["Code"], gon["Resilience"]);

    drawObject(gon["Small batches"], gon["CD"]);
    drawObject(gon["Regression"], gon["CD"]);
    drawObject(gon["CI"], gon["CD"]);
    drawObject(gon["CD"], gon["CL"]);
    TBDCI();

    AutoOut();
    drawObject(gon["Automation"], gon["Regression"], true);

    drawObject(gon["TDD"], gon["Emergent Arch"]);
    drawObject(gon["TDD"], gon["Regression"]);

    drawObject(gon["BDD"], gon["Regression"]);
    drawObject(gon["BDD"], gon["Emergent Arch"]);
    drawObject(gon["BDD"], gon["Semantic Monitoring"]);

    drawObject(gon["Emergent Arch"], gon["Small batches"], true);

    drawObject(gon["CL"], gon["Performant"]);
    drawObject(gon["Lean PMO"], gon["Stabilize WIP"]);

    drawObject(gon["Semantic Monitoring"], gon["AB Testing"]);
    drawObject(gon["Semantic Monitoring"], gon["Stabilize WIP"]);

    drawObject(gon["AB Testing"], gon["CL"]);

    drawObject(gon["MVP"], gon["Semantic Monitoring"]);

    drawObject(gon["Feature Teams"], gon["Performant"]);
    drawObject(gon["Stabilize WIP"], gon["Adaptive planning"]);
    drawObject(gon["Adaptive planning"], gon["Performant"]);
    drawObject(gon["Resilience"], gon["Performant"]);
}

function connectAgile() {
    MVPCode();
    CodeSCM();
    MVPTeams();
    MVPStories();
    drawObject(gon["Stories"], gon["BDD"]);

    SCMTBD();
    drawObject(gon["Code"], gon["Feature Toggles"]);
    drawObject(gon["Feature Toggles"], gon["TBD"]);
    SCMAuto();

    drawObject(gon["Code"], gon["Resilience"]);
    drawObject(gon["SCM"], gon["Emergent Arch"], true);
    drawObject(gon["SCM"], gon["Small batches"], true);

    drawObject(gon["Small batches"], gon["CD"]);
    drawObject(gon["Regression"], gon["CD"]);
    drawObject(gon["CI"], gon["CD"]);
    drawObject(gon["CD"], gon["CL"]);

    drawObject(gon["CL"], gon["agile"]);
    TBDCI();

    AutoOut();
    drawObject(gon["Automation"], gon["Regression"], true);

    drawObject(gon["TDD"], gon["Emergent Arch"]);
    drawObject(gon["TDD"], gon["Regression"]);

    drawObject(gon["BDD"], gon["Regression"]);
    drawObject(gon["BDD"], gon["Emergent Arch"]);
    drawObject(gon["BDD"], gon["Semantic Monitoring"]);

    drawObject(gon["Emergent Arch"], gon["Small batches"], true);

    drawObject(gon["Lean PMO"], gon["Stabilize WIP"]);

    drawObject(gon["Semantic Monitoring"], gon["AB Testing"]);
    drawObject(gon["Semantic Monitoring"], gon["Stabilize WIP"]);

    drawObject(gon["AB Testing"], gon["CL"]);

    drawObject(gon["MVP"], gon["Semantic Monitoring"]);

    drawObject(gon["IaC"], gon["You build it, you run it"]);

    setOpacity("Fragile", 0.25);
    setOpacity("Stable", 0.45);
    setOpacity("Economical", 0.65);
    setOpacity("Performant", 0.75);

    drawObject(gon["Stabilize WIP"], gon["Adaptive planning"]);
    drawObject(gon["Adaptive planning"], gon["agile"]);
    drawObject(gon["Feature Teams"], gon["agile"]);
    drawObject(gon["Resilience"], gon["agile"]);
}

function connectAB() {
    drawObject(gon["CD"], gon["CL"]);
    drawObject(gon["AB Testing"], gon["CL"]);

    drawObject(gon["Semantic Monitoring"], gon["AB Testing"]);
    drawObject(gon["Feature Toggles"], gon["AB Testing"]);

}

function connectCI() {
    MVPCode();
    CodeSCM();
    SCMTBD();
    TBDCI();
    SCMAuto();

    drawObject(gon["Code"], gon["Feature Toggles"]);
    drawObject(gon["Feature Toggles"], gon["TBD"]);
    drawObject(gon["CI"], gon["Stable"]);
    drawObject(gon["CI"], gon["CD"]);
    drawObject(gon["Automation"], gon["CI"]);
}

function connectCD() {
    MVPCode();
    CodeSCM();
    MVPStories();
    drawObject(gon["Code"], gon["Feature Toggles"]);
    drawObject(gon["Feature Toggles"], gon["TBD"]);
    drawObject(gon["Stories"], gon["BDD"]);

    SCMTBD();
    SCMAuto();

    drawObject(gon["Small batches"], gon["Emergent Arch"]);

    drawObject(gon["CD"], gon["Economical"]);
    drawObject(gon["CD"], gon["CL"]);

    TBDCI();

    AutoOut();

    drawObject(gon["TDD"], gon["Regression"]);
    drawObject(gon["TDD"], gon["Emergent Arch"]);

    drawObject(gon["BDD"], gon["Regression"]);
    drawObject(gon["BDD"], gon["Emergent Arch"]);

    drawObject(gon["Small batches"], gon["CD"]);
    drawObject(gon["Regression"], gon["CD"]);
    drawObject(gon["CI"], gon["CD"]);
    drawObject(gon["Feature Teams"], gon["CD"]);
}

function connectCL() {
    MVPCode();
    CodeSCM();
    MVPStories();
    drawObject(gon["Stories"], gon["BDD"]);
    drawObject(gon["Code"], gon["Feature Toggles"]);
    drawObject(gon["Feature Toggles"], gon["TBD"]);


    drawObject(gon["MVP"], gon["Semantic Monitoring"]);

    SCMTBD();
    SCMAuto();

    drawObject(gon["SCM"], gon["Emergent Arch"], true);
    drawObject(gon["SCM"], gon["Small batches"], true);

    TBDCI();

    AutoOut();
    drawObject(gon["Automation"], gon["Regression"], true);

    drawObject(gon["BDD"], gon["Semantic Monitoring"]);
    drawObject(gon["BDD"], gon["Emergent Arch"]);
    drawObject(gon["BDD"], gon["Regression"]);

    drawObject(gon["TDD"], gon["Emergent Arch"]);
    drawObject(gon["TDD"], gon["Regression"]);

    drawObject(gon["Emergent Arch"], gon["Small batches"], true);
    drawObject(gon["Small batches"], gon["CD"]);

    drawObject(gon["Regression"], gon["CD"]);
    drawObject(gon["CI"], gon["CD"]);

    drawObject(gon["Semantic Monitoring"], gon["AB Testing"]);

    drawObject(gon["AB Testing"], gon["CL"]);
    drawObject(gon["CD"], gon["CL"]);

    drawObject(gon["CL"], gon["Performant"]);
    drawObject(gon["Adaptive planning"], gon["Performant"]);
    drawObject(gon["CL"], gon["agile"]);
    drawObject(gon["You build it, you run it"], gon["agile"]);

}

function connectTDD() {
    drawObject(gon["Stories"], gon["TDD"]);
    drawObject(gon["Automation"], gon["TDD"]);
    drawObject(gon["TDD"], gon["Emergent Arch"]);
    drawObject(gon["TDD"], gon["Regression"]);
    drawObject(gon["TDD"], gon["IaC"]);
}

function connectBDD() {
    drawObject(gon["Automation"], gon["BDD"]);
    drawObject(gon["Stories"], gon["BDD"]);

    drawObject(gon["BDD"], gon["Semantic Monitoring"]);
    drawObject(gon["BDD"], gon["Emergent Arch"]);
    drawObject(gon["BDD"], gon["Regression"]);
    drawObject(gon["BDD"], gon["IaC"]);

}

function connectStories() {
    MVPStories();

    drawObject(gon["Automation"], gon["BDD"]);
    drawObject(gon["Stories"], gon["BDD"]);
    drawObject(gon["Stories"], gon["Semantic Monitoring"]);
}

function connectRegression() {
    drawObject(gon["Automation"], gon["Regression"]);

    drawObject(gon["BDD"], gon["Regression"], true);
    drawObject(gon["TDD"], gon["Regression"], true);

    drawObject(gon["Regression"], gon["CD"]);
    drawObject(gon["Small batches"], gon["CD"]);
    drawObject(gon["CI"], gon["CD"]);
}

function connectEmergent() {
    drawObject(gon["Code"], gon["Emergent Arch"], true);
    drawObject(gon["Code"], gon["Small batches"], true);

    drawObject(gon["TDD"], gon["Emergent Arch"]);
    drawObject(gon["BDD"], gon["Emergent Arch"]);

    drawObject(gon["Emergent Arch"], gon["Small batches"], true);
}

function connectBatches()
{
    drawObject(gon["Code"], gon["Small batches"], true);
    drawObject(gon["Code"], gon["Emergent Arch"], true);

    drawObject(gon["Emergent Arch"], gon["Small batches"]);
    drawObject(gon["CI"], gon["CD"]);
    drawObject(gon["Small batches"], gon["CD"]);
    drawObject(gon["Regression"], gon["CD"]);
}

function connectSemantic() {
    drawObject(gon["BDD"], gon["Semantic Monitoring"]);
    drawObject(gon["MVP"], gon["Semantic Monitoring"]);
    drawObject(gon["Semantic Monitoring"], gon["Stabilize WIP"]);
    drawObject(gon["Semantic Monitoring"], gon["Adaptive planning"]);

    drawObject(gon["Stories"], gon["Semantic Monitoring"]);
    drawObject(gon["Semantic Monitoring"], gon["AB Testing"]);
}

function connectWIP() {
    drawObject(gon["Semantic Monitoring"], gon["Stabilize WIP"]);
    drawObject(gon["Lean PMO"], gon["Stabilize WIP"]);
    drawObject(gon["Stabilize WIP"], gon["Adaptive planning"]);
    setOpacity("Fragile", 1);
}

function connectAdaptive() {
    drawObject(gon["Stabilize WIP"], gon["Adaptive planning"]);
    drawObject(gon["Semantic Monitoring"], gon["Adaptive planning"]);
    drawObject(gon["Adaptive planning"], gon["Performant"]);
    drawObject(gon["Adaptive planning"], gon["agile"]);
    drawObject(gon["CL"], gon["Performant"]);
    drawObject(gon["Feature Teams"], gon["Performant"]);
    drawObject(gon["You build it, you run it"], gon["agile"]);
}

function connectPMO() {
    drawObject(gon["Semantic Monitoring"], gon["Stabilize WIP"]);
    drawObject(gon["Lean PMO"], gon["Stabilize WIP"]);
}

function connectAutomation() {
    SCMAuto();

    AutoOut();
    drawObject(gon["Automation"], gon["Regression"]);
    drawObject(gon["Automation"], gon["IaC"]);

    drawObject(gon["TBD"], gon["CI"]);
}

function connectTBD() {
    SCMTBD();

    TBDCI();
    drawObject(gon["Feature Toggles"], gon["TBD"]);
}

function connectFeatures() {
    drawObject(gon["Code"], gon["Feature Toggles"]);
    drawObject(gon["Feature Toggles"], gon["TBD"]);
}

function connectMVP() {
    MVPTeams();
    MVPCode();
    MVPStories();
    drawObject(gon["MVP"], gon["Semantic Monitoring"]);
}

function connectResilience() {
    MVPCode();
    drawObject(gon["Code"], gon["Resilience"]);
    drawObject(gon["Resilience"], gon["Performant"]);
    drawObject(gon["Resilience"], gon["agile"]);
    setOpacity("Fragile", 1);
    setOpacity("Peformant", 1);

}

function connectBuildIt() {
    drawObject(gon["IaC"], gon["You build it, you run it"]);
    drawObject(gon["Feature Teams"], gon["You build it, you run it"]);
    drawObject(gon["Feature Teams"], gon["agile"]);
    drawObject(gon["Adaptive planning"], gon["agile"]);
    drawObject(gon["agile"], gon["CL"]);
}

function connectIaC() {
    drawObject(gon["BDD"], gon["IaC"]);
    drawObject(gon["TDD"], gon["IaC"]);
    drawObject(gon["Code"], gon["IaC"], 1);
    drawObject(gon["Automation"], gon["IaC"]);
    drawObject(gon["IaC"], gon["You build it, you run it"]);
    drawObject(gon["Feature Teams"], gon["You build it, you run it"]);
}

function connectTeams() {
    MVPTeams();
    drawObject(gon["CI"], gon["CD"]);
    drawObject(gon["Small batches"], gon["CD"]);
    drawObject(gon["Regression"], gon["CD"]);
    drawObject(gon["Feature Teams"], gon["CD"]);

    drawObject(gon["Feature Teams"], gon["You build it, you run it"]);
}

