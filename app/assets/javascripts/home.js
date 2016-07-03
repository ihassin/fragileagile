var allButtons = ['Resilience', 'AB Testing', 'MVP', 'Code', 'Fragile', 'SCM', 'TBD', 'Automation', 'CI', 'Stable', 'TDD', 'Small batches', 'BDD', 'Regression', 'CD', 'Economical', 'Semantic Monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Performant', 'Feature Teams', 'You build it, you run it' , 'agile', 'Emergent Arch'];
var mvpButtons = ['SCM','AB Testing', 'Code', 'TBD', 'Automation', 'CI', 'TDD', 'Small batches', 'BDD', 'Regression', 'CD', 'Semantic Monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature Teams', 'You build it, you run it', 'Emergent Arch', 'Resilience'];
var fragileButtons = ['Resilience', 'AB Testing', 'SCM', 'TBD', 'Automation', 'CI', 'Stable', 'TDD', 'Small batches', 'BDD', 'Regression', 'CD', 'Economical', 'Semantic Monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Performant', 'Feature Teams', 'You build it, you run it' , 'agile', 'Emergent Arch'];
var cdDimButtons = ['Code', 'MVP', 'SCM', 'TBD', 'Automation', 'CI'];
var clDimButtons = ['BDD', 'Regression', 'CD', 'TDD', 'Emergent Arch', 'Small batches'];

var canvas;
var context;

const CANVAS_WIDTH = 1400;
const CANVAS_HEIGHT = 800;

$(document).ready(function() {
    canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');
    context.strokeStyle="Blue";

    hide(mvpButtons);

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

function subjectClick(title, comment) {

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
            show(['Code', 'Feature Teams', 'MVP', 'Semantic Monitoring'])
            hide(['Resilience', 'AB Testing', 'SCM', 'TBD', 'Automation', 'CI', 'Stable', 'TDD', 'Small batches', 'BDD', 'Regression', 'CD', 'Economical', 'CL', 'Lean PMO', 'Stabilize WIP', 'Performant', 'You build it, you run it' , 'agile', 'Emergent Arch']);
            connectMVP();
            break;

        case 'Resilience':
            show(['MVP', 'Resilience', 'Code', 'Performant', 'agile'])
            hide(['Semantic Monitoring', 'AB Testing', 'SCM', 'TBD', 'Automation', 'CI', 'Stable', 'TDD', 'Small batches', 'BDD', 'Regression', 'CD', 'Economical', 'CL', 'Lean PMO', 'Stabilize WIP', 'Performant', 'You build it, you run it' , 'Emergent Arch']);
            connectResilience();
            break;

        case 'Lean PMO':
            show(['Fragile', 'Code', 'SCM', 'Automation', 'Semantic Monitoring', 'Lean PMO', 'BDD', 'Stabilize WIP'])
            hide(['Resilience', 'AB Testing', 'CL', 'CD', 'Small batches', 'Emergent Arch', 'TDD', 'Regression', 'TBD', 'CI', 'agile', 'Stable', 'Economical', 'Performant', 'Feature Teams', 'You build it, you run it'])
            connectPMO();
            break;

        case 'Code':
            show(['Code', 'SCM', 'Fragile', 'Emergent Arch', 'Small batches'])
            hide(['Resilience', 'AB Testing', 'agile', 'Stable', 'Economical', 'Performant', 'TBD', 'Automation', 'CI', 'TDD', 'BDD', 'Regression', 'CD', 'Semantic Monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature Teams', 'You build it, you run it'])
            connectCode();
            break;

        case 'SCM':
            show(['SCM', 'Code', 'TBD', 'Automation', 'Fragile'])
            hide(['Resilience', 'Emergent Arch', 'Small batches', 'AB Testing', 'Economical', 'Performant', 'Stable', 'agile', 'Semantic Monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature Teams', 'You build it, you run it', 'CI', 'TDD', 'BDD', 'Regression', 'CD'])
            connectSCM();
            break;

        case 'TBD':
            show(['Resilience', 'Automation', 'TBD', 'Code', 'CI', 'SCM', 'Fragile'])
            hide(['Stable','AB Testing', 'agile', 'Economical', 'Performant', 'TDD', 'Emergent Arch', 'Small batches', 'BDD', 'Regression', 'CD', 'Semantic Monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature Teams', 'You build it, you run it'])
            connectTBD();
            break;

        case 'CI':
            show(['CI', 'SCM', 'Code', 'CD', 'Stable', 'Automation', 'TBD'])
            hide(['Resilience', 'Fragile', 'Economical','AB Testing', 'agile', 'Performant', 'TDD', 'Emergent Arch', 'Regression', 'Small batches', 'BDD', 'Semantic Monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature Teams', 'You build it, you run it'])
            connectCI();
            break;

        case 'Automation':
            show(['TBD', 'Automation', 'SCM', 'Code', 'TDD', 'BDD', 'Regression', 'CI', 'Fragile'])
            hide(['Resilience', 'Stable','AB Testing', 'CD', 'CL', 'Emergent Arch', 'Small batches', 'agile', 'Economical', 'Performant', 'Semantic Monitoring', 'Stabilize WIP', 'Lean PMO', 'Feature Teams', 'You build it, you run it'])
            connectAutomation();
            break;

        case 'TDD':
            show(['Code', 'SCM', 'TDD', 'Fragile', 'Automation', 'Emergent Arch', 'Regression'])
            hide(['Resilience', 'AB Testing', 'TBD', 'CI', 'CD', 'agile', 'Stable', 'Economical', 'Performant', 'Small batches', 'BDD', 'Semantic Monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature Teams', 'You build it, you run it'])
            connectTDD();
            break;

        case 'BDD':
            show(['BDD', 'Code', 'SCM', 'Automation', 'Regression', 'Emergent Arch', 'Fragile', 'Semantic Monitoring'])
            hide(['Resilience', 'AB Testing', 'TDD', 'TBD', 'CI', 'CD', 'agile', 'Stable', 'Economical', 'Performant', 'Small batches', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature Teams', 'You build it, you run it'])
            connectBDD();
            break;

        case 'Regression':
            show(['CI', 'Small batches', 'Code', 'SCM', 'Regression', 'Automation', 'CD', 'TDD', 'Fragile', 'BDD'])
            hide(['Resilience', 'Economical','AB Testing', 'TBD', 'agile', 'Stable', 'Performant', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature Teams', 'You build it, you run it', 'Emergent Arch', 'Semantic Monitoring'])
            connectRegression();
            break;

        case 'Emergent Arch':
            show(['Code', 'Emergent Arch', 'BDD', 'Automation', 'Small batches', 'TDD', 'SCM', 'Fragile'])
            hide(['Resilience', 'AB Testing', 'Regression', 'TBD', 'CI', 'CD', 'agile', 'Stable', 'Economical', 'Performant', 'Semantic Monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature Teams', 'You build it, you run it'])
            connectEmergent();
            break;

        case 'Small batches':
            show(['Regression', 'CI', 'Automation', 'TDD', 'Small batches', 'Emergent Arch', 'Code', 'SCM', 'CD', 'Fragile'])
            hide(['Resilience', 'Economical', 'BDD','AB Testing', 'TBD', 'agile', 'Stable', 'Performant', 'Semantic Monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature Teams', 'You build it, you run it'])
            connectBatches();
            break;

        case 'CD':
            show(['Feature Teams', 'Code', 'SCM', 'CD', 'CL', 'CI', 'Small batches', 'Regression', 'Economical', 'Stable', 'TBD', 'Automation', 'BDD', 'TDD', 'Emergent Arch'])
            hide(['Resilience', 'AB Testing', 'Fragile', 'Performant', 'agile', 'Semantic Monitoring', 'Lean PMO', 'Stabilize WIP', 'You build it, you run it'])
            dim(cdDimButtons);
            connectCD();
            break;

        case 'Semantic Monitoring':
            show(['Code', 'SCM', 'Automation', 'Semantic Monitoring', 'Fragile', 'BDD', 'Stabilize WIP','AB Testing'])
            hide(['Resilience', 'CL', 'CD', 'Small batches', 'Emergent Arch', 'TDD', 'Regression', 'TBD', 'CI', 'agile', 'Stable', 'Economical', 'Performant', 'Lean PMO', 'Feature Teams', 'You build it, you run it'])
            connectSemantic();
            break;

        case 'CL':
            show(['You build it, you run it', 'Stabilize WIP', 'Code', 'SCM', 'CL','AB Testing', 'agile', 'Economical', 'Semantic Monitoring', 'Performant', 'TBD', 'CI', 'CD', 'Small batches', 'Automation', 'TDD', 'Emergent Arch', 'BDD', 'Regression'])
            hide(['Resilience', 'Stable', 'Fragile', 'Lean PMO', 'Feature Teams'])
            dim(cdDimButtons);
            dim(clDimButtons);
            connectCL();
            break;

        case 'Stabilize WIP':
            show(['CL', 'Performant', 'agile', 'Fragile', 'Semantic Monitoring', 'Automation', 'SCM', 'Code', 'Lean PMO', 'BDD', 'Stabilize WIP', 'You build it, you run it'])
            hide(['Resilience', 'Feature Teams', 'AB Testing', 'CD', 'Small batches', 'Emergent Arch', 'TDD', 'Regression', 'TBD', 'CI', 'Stable', 'Economical'])
            connectWIP();
            break;

        case 'Feature Teams':
            show(['CD', 'Fragile', 'Feature Teams', 'You build it, you run it'])
            hide(['Resilience', 'Performant', 'CL', 'AB Testing', 'agile', 'CI', 'Stable', 'Code', 'SCM', 'agile', 'Automation', 'TBD', 'Economical', 'TDD', 'Emergent Arch', 'Regression', 'Small batches', 'BDD', 'Semantic Monitoring', 'Lean PMO', 'Stabilize WIP'])
            connectTeams();
            break;

        case 'You build it, you run it':
            show(['Stabilize WIP', 'CL', 'agile', 'Fragile', 'Feature Teams', 'You build it, you run it'])
            hide(['Resilience', 'AB Testing', 'CI', 'CD', 'Performant', 'Stable', 'Code', 'SCM', 'Automation', 'TBD', 'Economical', 'TDD', 'Emergent Arch', 'Regression', 'Small batches', 'BDD', 'Semantic Monitoring', 'Lean PMO'])
            connectBuildIt();
            break;

        case'AB Testing':
            show(['CD', 'SCM', 'Code', 'CL', 'AB Testing', 'Fragile', 'Semantic Monitoring', 'Automation', 'BDD'])
            hide(['Resilience', 'Performant', 'agile', 'Economical', 'Small batches', 'TDD', 'Emergent Arch', 'CI', 'TBD', 'Regression', 'Stable', 'Stabilize WIP', 'Lean PMO', 'Feature Teams', 'You build it, you run it'])
            connectAB();
            break;

        case 'Fragile':
            show(['Code', 'Fragile'])
            hide(fragileButtons);
            connectFragile();
            break;

        case 'Stable':
            show(['Stable', 'Code', 'SCM', 'TBD', 'Automation', 'CI'])
            hide(['Resilience', 'CL', 'CD', 'Emergent Arch','AB Testing', 'TDD', 'BDD', 'Small batches', 'Regression', 'Economical', 'Fragile', 'Performant', 'agile', 'Semantic Monitoring', 'Lean PMO', 'Stabilize WIP', 'Feature Teams', 'You build it, you run it'])
            connectStable();
            break;

        case 'Economical':
            show(['Feature Teams', 'Code', 'SCM', 'CI', 'Small batches', 'Regression', 'Economical', 'TBD', 'Automation', 'BDD', 'TDD', 'Emergent Arch', 'CD'])
            hide(['Resilience', 'CL', 'AB Testing', 'Fragile', 'Performant', 'agile', 'Semantic Monitoring', 'Stable', 'Lean PMO', 'Stabilize WIP', 'You build it, you run it'])
            connectEconomical();
            break;

        case 'Performant':
            show(['Resilience', 'AB Testing', 'Feature Teams', 'Semantic Monitoring', 'MVP', 'Lean PMO', 'Stabilize WIP', 'Performant', 'Code', 'SCM', 'CL', 'CI', 'Small batches', 'Regression', 'TBD', 'Automation', 'BDD', 'TDD', 'Emergent Arch', 'CD'])
            hide(['Fragile', 'Economical', 'agile', 'Stable', 'You build it, you run it'])
            connectPerformant();
            break;

        case 'agile':
            show(['Resilience', 'AB Testing', 'You build it, you run it', 'agile', 'Feature Teams', 'Semantic Monitoring', 'MVP', 'Lean PMO', 'Stabilize WIP', 'Code', 'SCM', 'CL', 'CI', 'Small batches', 'Regression', 'TBD', 'Automation', 'BDD', 'TDD', 'Emergent Arch', 'CD'])
            hide(['Economical', 'Stable', 'Performant', 'Fragile'])
            connectAgile();
            break;
    }
}

function MVPCode() {
    drawObject(gon["MVP"], gon["Code"]);
}

function MVPTeams() {
    drawObject(gon["MVP"], gon["Feature Teams"]);
}

function CodeSCM() {
    drawObject(gon["Code"], gon["SCM"]);
}

function SCMAuto() {
    drawObject(gon["SCM"], gon["Automation"]);
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
    MVPCode();
    CodeSCM();
}

function connectCI() {
    MVPCode();
    CodeSCM();
    SCMTBD();
    TBDCI();
    SCMAuto();

    drawObject(gon["Automation"], gon["CI"]);
    drawObject(gon["CI"], gon["Stable"]);
    drawObject(gon["CI"], gon["CD"]);
}

function connectSCM() {
    MVPCode();
    CodeSCM();
    SCMTBD();
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

    SCMTBD();
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
    drawObject(gon["Stabilize WIP"], gon["Performant"]);
    drawObject(gon["Resilience"], gon["Performant"]);
}

function connectAgile() {
    MVPCode();
    CodeSCM();
    MVPTeams();

    SCMTBD();
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

    drawObject(gon["Feature Teams"], gon["Feature Teams"]);

    setOpacity("Fragile", 0.25);
    setOpacity("Stable", 0.45);
    setOpacity("Economical", 0.65);
    setOpacity("Performant", 0.75);

    drawObject(gon["Stabilize WIP"], gon["agile"]);
    drawObject(gon["Feature Teams"], gon["agile"]);
    drawObject(gon["Resilience"], gon["agile"]);
}

function connectCD() {
    MVPCode();
    CodeSCM();

    SCMTBD();
    SCMAuto();

    drawObject(gon["SCM"], gon["Emergent Arch"], true);
    drawObject(gon["SCM"], gon["Small batches"], true);

    drawObject(gon["Small batches"], gon["CD"]);
    drawObject(gon["Regression"], gon["CD"]);

    drawObject(gon["CI"], gon["CD"]);

    drawObject(gon["CD"], gon["Economical"]);
    drawObject(gon["CD"], gon["CL"]);

    TBDCI();

    AutoOut();
    drawObject(gon["Automation"], gon["Regression"], true);

    drawObject(gon["TDD"], gon["Regression"]);
    drawObject(gon["TDD"], gon["Emergent Arch"]);

    drawObject(gon["BDD"], gon["Regression"]);
    drawObject(gon["BDD"], gon["Emergent Arch"]);

    drawObject(gon["Emergent Arch"], gon["Small batches"], true);
    drawObject(gon["Feature Teams"], gon["CD"]);
}

function connectAB() {
    MVPCode();
    CodeSCM();

    drawObject(gon["MVP"], gon["Semantic Monitoring"]);

    SCMAuto();

    drawObject(gon["Automation"], gon["BDD"]);

    drawObject(gon["Semantic Monitoring"], gon["AB Testing"]);
    drawObject(gon["CD"], gon["CL"]);
    drawObject(gon["AB Testing"], gon["CL"]);
    drawObject(gon["BDD"], gon["Semantic Monitoring"]);

}

function connectCL() {
    MVPCode();
    CodeSCM();

    drawObject(gon["MVP"], gon["Semantic Monitoring"]);

    SCMTBD();
    SCMAuto();

    drawObject(gon["SCM"], gon["Emergent Arch"], true);
    drawObject(gon["SCM"], gon["Small batches"], true);
    drawObject(gon["SCM"], gon["TBD"]);

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
    drawObject(gon["Stabilize WIP"], gon["Performant"]);
    drawObject(gon["CL"], gon["agile"]);
    drawObject(gon["You build it, you run it"], gon["agile"]);

}

function connectTDD() {
    MVPCode();
    CodeSCM();

    SCMAuto();

    drawObject(gon["Automation"], gon["TDD"]);
    drawObject(gon["TDD"], gon["Emergent Arch"]);
    drawObject(gon["TDD"], gon["Regression"]);
}

function connectBDD() {
    MVPCode();
    CodeSCM();

    SCMAuto();

    drawObject(gon["Automation"], gon["BDD"]);

    drawObject(gon["BDD"], gon["Semantic Monitoring"]);
    drawObject(gon["BDD"], gon["Emergent Arch"]);
    drawObject(gon["BDD"], gon["Regression"]);
}

function connectRegression() {
    MVPCode();
    CodeSCM();

    SCMAuto();

    drawObject(gon["Automation"], gon["Regression"], true);

    drawObject(gon["BDD"], gon["Regression"]);
    drawObject(gon["TDD"], gon["Regression"]);

    drawObject(gon["Regression"], gon["CD"]);
    drawObject(gon["Small batches"], gon["CD"]);
    drawObject(gon["CI"], gon["CD"]);
}

function connectEmergent() {
    MVPCode();
    CodeSCM();

    SCMAuto();
    drawObject(gon["Code"], gon["Emergent Arch"], true);

    drawObject(gon["Automation"], gon["TDD"]);
    drawObject(gon["Automation"], gon["BDD"]);

    drawObject(gon["TDD"], gon["Emergent Arch"]);
    drawObject(gon["BDD"], gon["Emergent Arch"]);

    drawObject(gon["Emergent Arch"], gon["Small batches"], true);
}

function connectBatches()
{
    MVPCode();
    CodeSCM();

    drawObject(gon["Code"], gon["Small batches"], true);
    drawObject(gon["Code"], gon["Emergent Arch"], true);

    drawObject(gon["SCM"], gon["Automation"]);
    drawObject(gon["Automation"], gon["TDD"]);
    drawObject(gon["TDD"], gon["Emergent Arch"]);

    drawObject(gon["Emergent Arch"], gon["Small batches"], true);
    drawObject(gon["CI"], gon["CD"]);
    drawObject(gon["Small batches"], gon["CD"]);
    drawObject(gon["Regression"], gon["CD"]);
}

function connectSemantic() {
    MVPCode();
    CodeSCM();
    SCMAuto();

    drawObject(gon["Automation"], gon["BDD"]);
    drawObject(gon["BDD"], gon["Semantic Monitoring"]);
    drawObject(gon["MVP"], gon["Semantic Monitoring"]);
    drawObject(gon["Semantic Monitoring"], gon["Stabilize WIP"]);

    drawObject(gon["Semantic Monitoring"], gon["AB Testing"]);
}

function connectWIP() {
    MVPCode();
    CodeSCM();
    SCMAuto();

    drawObject(gon["Automation"], gon["BDD"]);
    drawObject(gon["BDD"], gon["Semantic Monitoring"]);
    drawObject(gon["MVP"], gon["Semantic Monitoring"]);
    drawObject(gon["Semantic Monitoring"], gon["Stabilize WIP"]);
    drawObject(gon["Lean PMO"], gon["Stabilize WIP"]);

    drawObject(gon["CL"], gon["Performant"]);

    drawObject(gon["Stabilize WIP"], gon["Performant"]);
    drawObject(gon["Stabilize WIP"], gon["agile"]);
    drawObject(gon["You build it, you run it"], gon["agile"]);
}

function connectPMO() {
    MVPCode();
    CodeSCM();
    SCMAuto();

    drawObject(gon["Automation"], gon["BDD"]);
    drawObject(gon["BDD"], gon["Semantic Monitoring"]);
    drawObject(gon["MVP"], gon["Semantic Monitoring"]);
    drawObject(gon["Semantic Monitoring"], gon["Stabilize WIP"]);
    drawObject(gon["Lean PMO"], gon["Stabilize WIP"]);
}

function connectAutomation() {
    MVPCode();
    CodeSCM();
    SCMAuto();

    AutoOut();
    drawObject(gon["Automation"], gon["Regression"]);

    drawObject(gon["TBD"], gon["CI"]);
}

function connectTBD() {
    MVPCode();
    CodeSCM();
    SCMTBD();

    TBDCI();
    drawObject(gon["Automation"], gon["CI"]);
}

function connectMVP() {
    MVPTeams();
    MVPCode();
    drawObject(gon["MVP"], gon["Semantic Monitoring"]);
}

function connectResilience() {
    MVPCode();
    drawObject(gon["Code"], gon["Resilience"]);
    drawObject(gon["Resilience"], gon["Performant"]);
    drawObject(gon["Resilience"], gon["agile"]);
}

function connectBuildIt() {
    MVPTeams();
    drawObject(gon["Feature Teams"], gon["You build it, you run it"]);
    drawObject(gon["Feature Teams"], gon["agile"]);
    drawObject(gon["agile"], gon["Stabilize WIP"]);
    drawObject(gon["agile"], gon["CL"]);
}

function connectTeams() {
    MVPTeams();
    drawObject(gon["Feature Teams"], gon["CD"]);
    drawObject(gon["Feature Teams"], gon["You build it, you run it"]);
}

function dim(buttons) {
    buttons.map(function (button) {
        setOpacity(button, 0.4)
    } )
}

function comments(obj) {
    document.getElementById('comments').value = obj.title + ': ' + obj.comments;
}

function undim(buttons) {
    buttons.map(function (button) {
        setOpacity(button, 1)
    } )
}

function setOpacity(button, value) {
    document.getElementById(button).style.opacity = value;
}

function show(buttons) {
    buttons.map(function (button) {
        if(document.getElementById(button).style.opacity < 1) {
            elem = "#" + button

            $(elem).hide();
            setOpacity(button, 1)
            $(elem).fadeIn(1000);
        }

    } )
}

function hide(buttons) {
    buttons.map(function (button) {
        setOpacity(button, 0.125)
    } )
}

function drawObject(fromObj, toObj, dotted) {
    drawLine(fromObj.x, fromObj.y, toObj.x, toObj.y, dotted)
}

function drawLine(fromX, fromY, toX, toY, dotted) {
    if (dotted) {
        context.setLineDash([2,10]);
    } else {
        context.setLineDash([]);
    }
    context.beginPath();

    context.moveTo(fromX + (110/2), fromY + 12);
    context.lineTo(toX   + (110/2), toY + 12);

    midX = (fromX + toX)/2;
    midY = (fromY + toY)/2;
    d = Math.sqrt(Math.pow((midX - current.x), 2) + Math.pow((midY - current.y),2));

    // debugger
    // console.log(d);

    a = 1 - (Math.sqrt(d) / 40);

    a = Math.max(a, 0.125)
    context.strokeStyle = "rgba(0,0,255,"+a+")";
    context.stroke();
}
