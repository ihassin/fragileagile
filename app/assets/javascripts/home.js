var allButtons = ['VSM', 'Risk controls', 'Circuit breaker', 'SOA', 'Relinquish control', 'IaC', 'Adaptive planning', 'Feature toggles', 'Stories', 'Resilience', 'AB testing', 'MVP', 'Code', 'Fragile', 'SCM', 'TBD', 'Automation', 'CI', 'Stable', 'TDD', 'Small batches', 'BDD', 'Regression', 'CD', 'Economical', 'Semantic monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Performant', 'Feature teams', 'You build it, you run it' , 'agile', 'Emergent arch']
var mvpButtons = ['VSM', 'Risk controls', 'Circuit breaker', 'SOA', 'Relinquish control', 'IaC', 'Adaptive planning', 'Feature toggles', 'Stories', 'SCM','AB testing', 'Code', 'TBD', 'Automation', 'CI', 'TDD', 'Small batches', 'BDD', 'Regression', 'CD', 'Semantic monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature teams', 'You build it, you run it', 'Emergent arch', 'Resilience']
var fragileButtons = ['VSM', 'Circuit breaker', 'Risk controls', 'SOA', 'Relinquish control', 'IaC', 'Adaptive planning', 'Feature toggles', 'Stories', 'Resilience', 'AB testing', 'SCM', 'TBD', 'Automation', 'CI', 'Stable', 'TDD', 'Small batches', 'BDD', 'Regression', 'CD', 'Economical', 'Semantic monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Performant', 'Feature teams', 'You build it, you run it' , 'agile', 'Emergent arch']
var cdDimButtons = ['Feature toggles', 'Stories', 'Code', 'MVP', 'SCM', 'TBD', 'Automation', 'CI']
var clDimButtons = ['SOA', 'Feature toggles', 'Stories', 'BDD', 'Regression', 'CD', 'TDD', 'Emergent arch', 'Small batches']

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
        case '#bdd':
            subjectClick("BDD");
            break;

        case '#stories':
            subjectClick("Stories");
            break;

        case '#rapid':
            subjectClick("CD");
            break;

        case '#semantic':
            subjectClick("Semantic monitoring");
            break;

        case '#cl':
            subjectClick("CL");
            break;

        case '#ap':
            subjectClick("Adaptive planning");
            break;

        case '#tdd':
            subjectClick("TDD");
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

        case 'BDD':
            window.location = '#BDD';
            window.open(gon[title].url);
            break;

        case 'TDD':
            window.location = '#TDD';
            window.open('/tdd');
            break;

        case 'SCM':
        case 'TBD':
        case 'Feature toggles':
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
            show(['Stories', 'Code', 'Feature teams', 'MVP', 'Semantic monitoring', 'Lean PMO']);
            hide(['VSM', 'Risk controls', 'Circuit breaker', 'SOA', 'Relinquish control', 'IaC', 'Adaptive planning', 'Feature toggles', 'Resilience', 'AB testing', 'SCM', 'TBD', 'Automation', 'CI', 'Stable', 'TDD', 'Small batches', 'BDD', 'Regression', 'CD', 'Economical', 'CL', 'Stabilize WIP', 'Performant', 'You build it, you run it' , 'agile', 'Emergent arch'])
            connectMVP();
            break;

        case 'Circuit breaker':
            show(['Circuit breaker', 'Code', 'Resilience']);
            hide(['VSM', 'Risk controls', 'MVP', 'Stories', 'Semantic monitoring', 'Lean PMO', 'Feature teams', 'SOA', 'Relinquish control', 'IaC', 'Adaptive planning', 'Feature toggles', 'AB testing', 'SCM', 'TBD', 'Automation', 'CI', 'Stable', 'TDD', 'Small batches', 'BDD', 'Regression', 'CD', 'Economical', 'CL', 'Stabilize WIP', 'Performant', 'You build it, you run it' , 'agile', 'Emergent arch'])
            connectCircuit();
            break;

        case 'SOA':
            show(['SOA', 'Emergent arch', 'Resilience', 'Circuit breaker']);
            hide(['VSM', 'Risk controls', 'Performant', 'agile', 'Relinquish control', 'MVP', 'IaC', 'Adaptive planning', 'Feature toggles', 'Stories', 'Feature teams', 'Semantic monitoring', 'AB testing', 'SCM', 'TBD', 'Automation', 'CI', 'Stable', 'TDD', 'Small batches', 'BDD', 'Regression', 'CD', 'Economical', 'CL', 'Lean PMO', 'Stabilize WIP', 'Performant', 'You build it, you run it']);
            connectSOA();
            break;

        case 'Resilience':
            show(['IaC', 'SOA', 'Emergent arch', 'Resilience', 'Circuit breaker', 'Performant', 'agile']);
            hide(['VSM', 'Risk controls', 'Code', 'Relinquish control', 'MVP', 'Adaptive planning', 'Feature toggles', 'Stories', 'Feature teams', 'Semantic monitoring', 'AB testing', 'SCM', 'TBD', 'Automation', 'CI', 'Stable', 'TDD', 'Small batches', 'BDD', 'Regression', 'CD', 'Economical', 'CL', 'Lean PMO', 'Stabilize WIP', 'Performant', 'You build it, you run it']);
            connectResilience();
            break;

        case 'Lean PMO':
            show(['MVP', 'Fragile', 'Semantic monitoring', 'Lean PMO', 'Stabilize WIP']);
            hide(['VSM', 'Risk controls', 'Circuit breaker', 'SOA', 'Relinquish control', 'IaC', 'Adaptive planning', 'BDD', 'Code', 'SCM', 'Automation', 'Feature toggles', 'Stories', 'Resilience', 'AB testing', 'CL', 'CD', 'Small batches', 'Emergent arch', 'TDD', 'Regression', 'TBD', 'CI', 'agile', 'Stable', 'Economical', 'Performant', 'Feature teams', 'You build it, you run it'])
            connectPMO();
            break;

        case 'Code':
            show(['MVP', 'Feature toggles', 'Code', 'SCM', 'Fragile', 'Emergent arch', 'Small batches']);
            hide(['VSM', 'Risk controls', 'Circuit breaker', 'SOA', 'Relinquish control', 'MVP', 'IaC', 'Adaptive planning', 'Stories', 'Resilience', 'AB testing', 'agile', 'Stable', 'Economical', 'Performant', 'TBD', 'Automation', 'CI', 'TDD', 'BDD', 'Regression', 'CD', 'Semantic monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature teams', 'You build it, you run it'])
            connectCode();
            break;

        case 'SCM':
            show(['Code', 'TBD', 'SCM', 'Automation', 'Fragile', 'Feature toggles']);
            hide(['MVP', 'VSM', 'Risk controls', 'Circuit breaker', 'SOA', 'Relinquish control', 'IaC', 'Adaptive planning', 'Stories', 'Resilience', 'Emergent arch', 'Small batches', 'AB testing', 'Economical', 'Performant', 'Stable', 'agile', 'Semantic monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature teams', 'You build it, you run it', 'CI', 'TDD', 'BDD', 'Regression', 'CD'])
            connectSCM();
            break;

        case 'Feature toggles':
            show(['SCM', 'Stories', 'AB testing', 'Feature toggles', 'TBD', 'Code', 'Fragile']);
            hide(['VSM', 'Risk controls', 'Circuit breaker', 'SOA', 'Relinquish control', 'IaC', 'Adaptive planning', 'MVP', 'CI', 'Automation', 'Resilience', 'Stable', 'agile', 'Economical', 'Performant', 'TDD', 'Emergent arch', 'Small batches', 'BDD', 'Regression', 'CD', 'Semantic monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature teams', 'You build it, you run it'])
            connectFeatures();
            break;

        case 'TBD':
            show(['Automation', 'Feature toggles', 'TBD', 'CI', 'SCM', 'Fragile']);
            hide(['VSM', 'Risk controls', 'Circuit breaker', 'SOA', 'Relinquish control', 'IaC', 'Adaptive planning', 'MVP', 'Code', 'Stories', 'Resilience', 'Stable','AB testing', 'agile', 'Economical', 'Performant', 'TDD', 'Emergent arch', 'Small batches', 'BDD', 'Regression', 'CD', 'Semantic monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature teams', 'You build it, you run it'])
            connectTBD();
            break;

        case 'CI':
            show(['MVP', 'Feature toggles', 'CI', 'SCM', 'Code', 'CD', 'Stable', 'Automation', 'TBD']);
            hide(['VSM', 'Risk controls', 'Circuit breaker', 'SOA', 'Relinquish control', 'IaC', 'Adaptive planning', 'Stories', 'Resilience', 'Fragile', 'Economical','AB testing', 'agile', 'Performant', 'TDD', 'Emergent arch', 'Regression', 'Small batches', 'BDD', 'Semantic monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature teams', 'You build it, you run it'])
            connectCI();
            break;

        case 'Automation':
            show(['IaC', 'TBD', 'Automation', 'SCM', 'TDD', 'BDD', 'Regression', 'CI', 'Fragile']);
            hide(['MVP', 'Code', 'VSM', 'Risk controls', 'Circuit breaker', 'SOA', 'Relinquish control', 'Adaptive planning', 'Feature toggles', 'Stories', 'Resilience', 'Stable','AB testing', 'CD', 'CL', 'Emergent arch', 'Small batches', 'agile', 'Economical', 'Performant', 'Semantic monitoring', 'Stabilize WIP', 'Lean PMO', 'Feature teams', 'You build it, you run it'])
            connectAutomation();
            break;

        case 'TDD':
            show(['IaC', 'Stories', 'TDD', 'Fragile', 'Automation', 'Emergent arch', 'Regression']);
            hide(['VSM', 'Risk controls', 'Circuit breaker', 'SOA', 'Relinquish control', 'Adaptive planning', 'MVP', 'Code', 'SCM', 'Feature toggles', 'Resilience', 'AB testing', 'TBD', 'CI', 'CD', 'agile', 'Stable', 'Economical', 'Performant', 'Small batches', 'BDD', 'Semantic monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature teams', 'You build it, you run it'])
            connectTDD();
            break;

        case 'BDD':
            show(['IaC', 'Stories', 'BDD', 'Automation', 'Regression', 'Emergent arch', 'Fragile', 'Semantic monitoring']);
            hide(['MVP', 'VSM', 'Risk controls', 'Circuit breaker', 'SOA', 'Relinquish control', 'Adaptive planning', 'Code', 'SCM', 'Feature toggles', 'Resilience', 'AB testing', 'TDD', 'TBD', 'CI', 'CD', 'agile', 'Stable', 'Economical', 'Performant', 'Small batches', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature teams', 'You build it, you run it'])
            connectBDD();
            break;

        case 'Stories':
            show(['Semantic monitoring', 'Stories', 'BDD', 'Automation', 'MVP']);
            hide(['VSM', 'Risk controls', 'Circuit breaker', 'Feature toggles', 'SOA', 'Relinquish control', 'IaC', 'Adaptive planning', 'Code', 'SCM', 'Regression', 'Emergent arch', 'Resilience', 'AB testing', 'TDD', 'TBD', 'CI', 'CD', 'agile', 'Stable', 'Economical', 'Performant', 'Small batches', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature teams', 'You build it, you run it'])
            connectStories();
            break;

        case 'Regression':
            show(['CI', 'Small batches', 'Regression', 'Automation', 'CD', 'TDD', 'Fragile', 'BDD']);
            hide(['VSM', 'Risk controls', 'Circuit breaker', 'SOA', 'Relinquish control', 'IaC', 'Adaptive planning', 'MVP', 'Code', 'SCM', 'Feature toggles', 'Stories', 'Resilience', 'Economical','AB testing', 'TBD', 'agile', 'Stable', 'Performant', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature teams', 'You build it, you run it', 'Emergent arch', 'Semantic monitoring'])
            connectRegression();
            break;

        case 'Emergent arch':
            show(['SOA', 'Resilience', 'Emergent arch', 'BDD', 'Small batches', 'TDD', 'Fragile']);
            hide(['VSM', 'Risk controls', 'Circuit breaker', 'Code', 'Relinquish control', 'IaC', 'Adaptive planning', 'MVP', 'SCM', 'Automation', 'Feature toggles', 'Stories', 'AB testing', 'Regression', 'TBD', 'CI', 'CD', 'agile', 'Stable', 'Economical', 'Performant', 'Semantic monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature teams', 'You build it, you run it'])
            connectEmergent();
            break;

        case 'Small batches':
            show(['Code', 'Regression', 'CI', 'Small batches', 'Emergent arch', 'CD', 'Fragile']);
            hide(['VSM', 'Risk controls', 'Circuit breaker', 'SOA', 'Relinquish control', 'IaC', 'Adaptive planning', 'MVP', 'SCM', 'Automation', 'TDD', 'Feature toggles', 'Stories', 'Resilience', 'Economical', 'BDD','AB testing', 'TBD', 'agile', 'Stable', 'Performant', 'Semantic monitoring', 'CL', 'Lean PMO', 'Stabilize WIP', 'Feature teams', 'You build it, you run it'])
            connectBatches();
            break;

        case 'Semantic monitoring':
            show(['Adaptive planning', 'Stories', 'MVP', 'Semantic monitoring', 'Fragile', 'BDD', 'Stabilize WIP','AB testing']);
            hide(['VSM', 'Risk controls', 'Circuit breaker', 'SOA', 'Relinquish control', 'IaC', 'Code', 'SCM', 'Automation', 'Feature toggles', 'Resilience', 'CL', 'CD', 'Small batches', 'Emergent arch', 'TDD', 'Regression', 'TBD', 'CI', 'agile', 'Stable', 'Economical', 'Performant', 'Lean PMO', 'Feature teams', 'You build it, you run it'])
            connectSemantic();
            break;

        case 'Risk controls':
            show(['Risk controls', 'IaC', 'CD', 'CI', 'Small batches', 'Feature teams', 'Regression']);
            hide(['VSM', 'MVP', 'Feature toggles', 'Stories', 'Code', 'SCM', 'Circuit breaker', 'SOA', 'Relinquish control', 'Adaptive planning', 'Resilience', 'AB testing', 'Fragile', 'Performant', 'agile', 'Semantic monitoring', 'Lean PMO', 'Stabilize WIP', 'You build it, you run it', 'CL', 'Economical', 'Stable', 'TBD', 'Automation', 'BDD', 'TDD', 'Emergent arch'])
            connectRisk();
            break;

        case 'CD':
            show(['MVP', 'Risk controls', 'Feature toggles', 'Stories', 'Feature teams', 'Code', 'SCM', 'CD', 'CL', 'CI', 'Small batches', 'Regression', 'Economical', 'Stable', 'TBD', 'Automation', 'BDD', 'TDD', 'Emergent arch']);
            hide(['VSM', 'Circuit breaker', 'SOA', 'Relinquish control', 'IaC', 'Adaptive planning', 'Resilience', 'AB testing', 'Fragile', 'Performant', 'agile', 'Semantic monitoring', 'Lean PMO', 'Stabilize WIP', 'You build it, you run it'])
            dim(cdDimButtons);
            connectCD();
            break;

        case 'CL':
            show(['SOA', 'Resilience', 'Relinquish control', 'Feature toggles', 'Stories', 'Code', 'SCM', 'CL','AB testing', 'agile', 'Economical', 'Semantic monitoring', 'Performant', 'TBD', 'CI', 'CD', 'Small batches', 'Automation', 'TDD', 'Emergent arch', 'BDD', 'Regression']);
            hide(['Risk controls', 'VSM', 'Circuit breaker', 'You build it, you run it', 'IaC', 'Stabilize WIP', 'MVP', 'Stable', 'Fragile', 'Lean PMO', 'Feature teams', 'Adaptive planning'])
            dim(cdDimButtons);
            dim(clDimButtons);
            connectCL();
            break;

        case 'Stabilize WIP':
            show(['Adaptive planning', 'Semantic monitoring', 'Lean PMO', 'Stabilize WIP']);
            hide(['VSM', 'Risk controls', 'Circuit breaker', 'SOA', 'Relinquish control', 'IaC', 'You build it, you run it', 'MVP', 'BDD', 'Automation', 'SCM', 'Code', 'Feature toggles', 'Stories', 'Resilience', 'Feature teams', 'AB testing', 'CD', 'Small batches', 'Emergent arch', 'TDD', 'Regression', 'TBD', 'CI', 'Stable', 'Economical', 'CL', 'Performant', 'agile', 'Fragile'])
            connectWIP();
            break;

        case 'Adaptive planning':
            show(['Relinquish control', 'Semantic monitoring', 'Adaptive planning', 'Stabilize WIP', 'agile', 'Fragile']);
            hide(['VSM', 'Risk controls', 'Circuit breaker', 'Feature teams', 'CL', 'SOA', 'You build it, you run it', 'IaC', 'Lean PMO', 'MVP', 'BDD', 'Automation', 'SCM', 'Code', 'Feature toggles', 'Stories', 'Resilience', 'AB testing', 'CD', 'Small batches', 'Emergent arch', 'TDD', 'Regression', 'TBD', 'CI', 'Stable', 'Economical', 'Performant'])
            connectAdaptive();
            break;

        case 'Feature teams':
            show(['MVP', 'CD', 'Fragile', 'Feature teams', 'You build it, you run it']);
            hide(['VSM', 'Risk controls', 'Circuit breaker', 'SOA', 'Relinquish control', 'CI', 'Regression', 'Small batches', 'IaC', 'Adaptive planning', 'Feature toggles', 'Stories', 'Resilience', 'Performant', 'CL', 'AB testing', 'agile', 'Stable', 'Code', 'SCM', 'agile', 'Automation', 'TBD', 'Economical', 'TDD', 'Emergent arch', 'BDD', 'Semantic monitoring', 'Lean PMO', 'Stabilize WIP'])
            connectTeams();
            break;

        case 'You build it, you run it':
            show(['Relinquish control', 'IaC', 'Fragile', 'Feature teams', 'You build it, you run it']);
            hide(['VSM', 'Risk controls', 'Circuit breaker', 'SOA', 'Adaptive planning', 'CL', 'agile', 'Stabilize WIP', 'MVP', 'Feature toggles', 'Stories', 'Resilience', 'AB testing', 'CI', 'CD', 'Performant', 'Stable', 'Code', 'SCM', 'Automation', 'TBD', 'Economical', 'TDD', 'Emergent arch', 'Regression', 'Small batches', 'BDD', 'Semantic monitoring', 'Lean PMO'])
            connectBuildIt();
            break;

        case 'Relinquish control':
            show(['Adaptive planning', 'CL', 'agile', 'Relinquish control', 'Fragile', 'You build it, you run it']);
            hide(['VSM', 'Risk controls', 'Circuit breaker', 'Performant', 'SOA', 'Feature teams', 'IaC', 'Stabilize WIP', 'MVP', 'Feature toggles', 'Stories', 'Resilience', 'AB testing', 'CI', 'CD', 'Stable', 'Code', 'SCM', 'Automation', 'TBD', 'Economical', 'TDD', 'Emergent arch', 'Regression', 'Small batches', 'BDD', 'Semantic monitoring', 'Lean PMO'])
            connectRelinquish();
            break;

        case 'IaC':
            show(['Risk controls', 'Automation', 'TDD', 'BDD', 'IaC', 'Fragile', 'You build it, you run it', 'Resilience']);
            hide(['Stories', 'Feature teams', 'VSM', 'Circuit breaker', 'SOA', 'Relinquish control', 'Adaptive planning', 'CL', 'agile', 'Stabilize WIP', 'MVP', 'Feature toggles', 'AB testing', 'CI', 'CD', 'Performant', 'Stable', 'Code', 'SCM', 'TBD', 'Economical', 'Emergent arch', 'Regression', 'Small batches', 'Semantic monitoring', 'Lean PMO'])
            connectIaC();
            break;

        case'AB testing':
            show(['Feature toggles', 'CD', 'CL', 'AB testing', 'Fragile', 'Semantic monitoring']);
            hide(['VSM', 'Risk controls', 'Circuit breaker', 'SOA', 'Relinquish control', 'IaC', 'Adaptive planning', 'MVP', 'BDD', 'Automation', 'SCM', 'Code', 'Stories', 'Resilience', 'Performant', 'agile', 'Economical', 'Small batches', 'TDD', 'Emergent arch', 'CI', 'TBD', 'Regression', 'Stable', 'Stabilize WIP', 'Lean PMO', 'Feature teams', 'You build it, you run it'])
            connectAB();
            break;

        case 'Fragile':
            show(['Code', 'Fragile']);
            hide(fragileButtons);
            connectFragile();
            break;

        case 'Stable':
            show(['MVP', 'Feature toggles', 'Stable', 'Code', 'SCM', 'TBD', 'Automation', 'CI']);
            hide(['VSM', 'Risk controls', 'Circuit breaker', 'Relinquish control', 'Adaptive planning', 'SOA', 'IaC', 'Stories', 'Resilience', 'CL', 'CD', 'Emergent arch','AB testing', 'TDD', 'BDD', 'Small batches', 'Regression', 'Economical', 'Fragile', 'Performant', 'agile', 'Semantic monitoring', 'Lean PMO', 'Stabilize WIP', 'Feature teams', 'You build it, you run it'])
            connectStable();
            break;

        case 'Economical':
            show(['Risk controls', 'MVP', 'Feature toggles', 'Stories', 'Feature teams', 'Code', 'SCM', 'CI', 'Small batches', 'Regression', 'Economical', 'TBD', 'Automation', 'BDD', 'TDD', 'Emergent arch', 'CD', 'IaC']);
            hide(['VSM', 'Circuit breaker', 'Relinquish control', 'SOA', 'Adaptive planning', 'Resilience', 'CL', 'AB testing', 'Fragile', 'Performant', 'agile', 'Semantic monitoring', 'Stable', 'Lean PMO', 'Stabilize WIP', 'You build it, you run it'])
            connectEconomical();
            break;

        case 'Performant':
            show(['VSM', 'Risk controls', 'Circuit breaker', 'SOA', 'Relinquish control', 'MVP', 'Feature toggles', 'Stories', 'Resilience', 'AB testing', 'Feature teams', 'Semantic monitoring', 'MVP', 'Performant', 'Code', 'SCM', 'CL', 'CI', 'Small batches', 'Regression', 'TBD', 'Automation', 'BDD', 'TDD', 'Emergent arch', 'CD', 'IaC']);
            hide(['Fragile', 'Economical', 'agile', 'Stable', 'You build it, you run it', 'Adaptive planning', 'Stabilize WIP', 'Lean PMO']);
            connectPerformant();
            break;

        case 'VSM':
            show(['Relinquish control', 'Resilience', 'VSM', 'Performant', 'CL', 'IaC', 'Feature teams', 'agile']);
            hide(['Feature toggles', 'Stories', 'Fragile', 'Economical', 'Stable', 'You build it, you run it', 'Adaptive planning', 'Stabilize WIP', 'Lean PMO', 'Risk controls', 'Circuit breaker', 'SOA', 'MVP', 'Semantic monitoring', 'MVP', 'Code', 'SCM', 'CI', 'Small batches', 'Regression', 'TBD', 'Automation', 'BDD', 'TDD', 'Emergent arch', 'CD', 'AB testing']);
            connectVSM();
            break;

        case 'agile':
            show(['VSM', 'Risk controls', 'Circuit breaker', 'SOA', 'Relinquish control', 'IaC', 'Adaptive planning', 'MVP', 'Feature toggles', 'Stories', 'Resilience', 'AB testing', 'You build it, you run it', 'agile', 'Feature teams', 'Semantic monitoring', 'MVP', 'Lean PMO', 'Stabilize WIP', 'Code', 'SCM', 'CL', 'CI', 'Small batches', 'Regression', 'TBD', 'Automation', 'BDD', 'TDD', 'Emergent arch', 'CD']);
            hide(['Economical', 'Stable', 'Performant', 'Fragile']);
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
    drawObject(gon["MVP"], gon["Feature teams"]);
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
    drawObject(gon["Code"], gon["Emergent arch"], 1);
    drawObject(gon["Code"], gon["Small batches"], 1);
    drawObject(gon["Code"], gon["Feature toggles"], 1);
    CodeSCM();
}

function connectSCM() {
    CodeSCM();
    drawObject(gon["SCM"], gon["TBD"]);
    drawObject(gon["Feature toggles"], gon["TBD"]);
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
    drawObject(gon["Code"], gon["Feature toggles"]);
    drawObject(gon["Feature toggles"], gon["TBD"]);

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
    drawObject(gon["Code"], gon["Feature toggles"]);
    drawObject(gon["Feature toggles"], gon["TBD"]);
    MVPStories();
    drawObject(gon["Stories"], gon["BDD"]);

    SCMTBD();
    SCMAuto();
    drawObject(gon["SCM"], gon["Emergent arch"], true);
    drawObject(gon["SCM"], gon["Small batches"], true);

    drawObject(gon["Small batches"], gon["CD"]);
    drawObject(gon["Regression"], gon["CD"]);

    drawObject(gon["CI"], gon["CD"]);

    drawObject(gon["CD"], gon["Economical"]);
    drawObject(gon["IaC"], gon["Economical"]);

    drawObject(gon["Feature teams"], gon["CD"]);
    drawObject(gon["Risk controls"], gon["CD"]);
    TBDCI();

    AutoOut();
    drawObject(gon["Automation"], gon["Regression"], true);
    drawObject(gon["Automation"], gon["IaC"]);

    drawObject(gon["TDD"], gon["Emergent arch"]);
    drawObject(gon["TDD"], gon["Regression"]);

    drawObject(gon["BDD"], gon["Regression"]);
    drawObject(gon["BDD"], gon["Emergent arch"]);

    drawObject(gon["Emergent arch"], gon["Small batches"], true);
    setOpacity("Performant", 0.3);
}

function connectVSM()
{
    drawObject(gon["Resilience"], gon["Performant"]);
    drawObject(gon["IaC"], gon["Performant"]);
    drawObject(gon["Relinquish control"], gon["Performant"]);
    drawObject(gon["Feature teams"], gon["Performant"]);
    drawObject(gon["CL"], gon["Performant"]);
    drawObject(gon["VSM"], gon["Performant"]);
    drawObject(gon["VSM"], gon["agile"]);
}

function connectPerformant() {
    MVPCode();
    CodeSCM();
    MVPTeams();
    MVPStories();
    drawObject(gon["Stories"], gon["BDD"]);

    SCMTBD();
    drawObject(gon["Code"], gon["Feature toggles"]);
    drawObject(gon["Feature toggles"], gon["TBD"]);

    SCMAuto();

    drawObject(gon["Code"], gon["Emergent arch"], true);
    drawObject(gon["Code"], gon["Small batches"], true);
    drawObject(gon["Code"], gon["Circuit breaker"]);

    drawObject(gon["Small batches"], gon["CD"]);
    drawObject(gon["Regression"], gon["CD"]);
    drawObject(gon["CI"], gon["CD"]);
    drawObject(gon["Risk controls"], gon["CD"]);
    drawObject(gon["CD"], gon["CL"]);
    TBDCI();

    AutoOut();
    drawObject(gon["Automation"], gon["Regression"], true);
    drawObject(gon["Automation"], gon["IaC"]);

    drawObject(gon["TDD"], gon["Emergent arch"]);
    drawObject(gon["TDD"], gon["Regression"]);

    drawObject(gon["BDD"], gon["Regression"]);
    drawObject(gon["BDD"], gon["Emergent arch"]);
    drawObject(gon["BDD"], gon["Semantic monitoring"]);

    drawObject(gon["Emergent arch"], gon["Small batches"], true);

    drawObject(gon["CL"], gon["Performant"]);

    drawObject(gon["Semantic monitoring"], gon["AB testing"]);

    drawObject(gon["AB testing"], gon["CL"]);

    drawObject(gon["MVP"], gon["Semantic monitoring"]);

    drawObject(gon["Feature teams"], gon["Performant"]);
    drawObject(gon["Circuit breaker"], gon["Resilience"]);
    drawObject(gon["SOA"], gon["Resilience"]);
    drawObject(gon["Resilience"], gon["Performant"]);
    drawObject(gon["Relinquish control"], gon["Performant"]);
    drawObject(gon["IaC"], gon["Performant"]);
    drawObject(gon["VSM"], gon["Performant"]);
}

function connectAgile() {
    MVPCode();
    CodeSCM();
    MVPTeams();
    MVPStories();
    drawObject(gon["Stories"], gon["BDD"]);

    SCMTBD();
    drawObject(gon["Code"], gon["Feature toggles"]);
    drawObject(gon["Feature toggles"], gon["TBD"]);
    SCMAuto();

    drawObject(gon["Code"], gon["Circuit breaker"]);
    drawObject(gon["SCM"], gon["Emergent arch"], true);
    drawObject(gon["SCM"], gon["Small batches"], true);

    drawObject(gon["Small batches"], gon["CD"]);
    drawObject(gon["Regression"], gon["CD"]);
    drawObject(gon["CI"], gon["CD"]);
    drawObject(gon["Risk controls"], gon["CD"]);
    drawObject(gon["CD"], gon["CL"]);

    drawObject(gon["CL"], gon["agile"]);
    TBDCI();

    AutoOut();
    drawObject(gon["Automation"], gon["Regression"], true);

    drawObject(gon["TDD"], gon["Emergent arch"]);
    drawObject(gon["TDD"], gon["Regression"]);

    drawObject(gon["BDD"], gon["Regression"]);
    drawObject(gon["BDD"], gon["Emergent arch"]);
    drawObject(gon["BDD"], gon["Semantic monitoring"]);

    drawObject(gon["Emergent arch"], gon["Small batches"], true);

    drawObject(gon["Lean PMO"], gon["Stabilize WIP"]);

    drawObject(gon["Semantic monitoring"], gon["AB testing"]);
    drawObject(gon["Semantic monitoring"], gon["Stabilize WIP"]);

    drawObject(gon["AB testing"], gon["CL"]);

    drawObject(gon["MVP"], gon["Semantic monitoring"]);

    drawObject(gon["IaC"], gon["You build it, you run it"]);

    setOpacity("Fragile", 0.25);
    setOpacity("Stable", 0.45);
    setOpacity("Economical", 0.65);
    setOpacity("Performant", 0.75);

    drawObject(gon["Stabilize WIP"], gon["Adaptive planning"]);
    drawObject(gon["Adaptive planning"], gon["agile"]);
    drawObject(gon["Feature teams"], gon["agile"]);

    drawObject(gon["Circuit breaker"], gon["Resilience"]);
    drawObject(gon["SOA"], gon["Resilience"]);

    drawObject(gon["Resilience"], gon["agile"]);
    drawObject(gon["Relinquish control"], gon["agile"]);
    drawObject(gon["VSM"], gon["agile"]);
}

function connectAB() {
    drawObject(gon["CD"], gon["CL"]);
    drawObject(gon["AB testing"], gon["CL"]);

    drawObject(gon["Semantic monitoring"], gon["AB testing"]);
    drawObject(gon["Feature toggles"], gon["AB testing"]);

}

function connectCI() {
    MVPCode();
    CodeSCM();
    SCMTBD();
    TBDCI();
    SCMAuto();

    drawObject(gon["Code"], gon["Feature toggles"]);
    drawObject(gon["Feature toggles"], gon["TBD"]);
    drawObject(gon["CI"], gon["Stable"]);
    drawObject(gon["CI"], gon["CD"]);
    drawObject(gon["Automation"], gon["CI"]);
}

function connectRisk() {
    drawObject(gon["Risk controls"], gon["IaC"]);
    drawObject(gon["Regression"], gon["CD"]);
    drawObject(gon["Feature teams"], gon["CD"]);
    drawObject(gon["Small batches"], gon["CD"]);
    drawObject(gon["CI"], gon["CD"]);
    drawObject(gon["Risk controls"], gon["CD"]);
}

function connectCD() {
    MVPCode();
    CodeSCM();
    MVPStories();
    drawObject(gon["Code"], gon["Feature toggles"]);
    drawObject(gon["Feature toggles"], gon["TBD"]);
    drawObject(gon["Stories"], gon["BDD"]);

    SCMTBD();
    SCMAuto();

    drawObject(gon["Small batches"], gon["Emergent arch"]);

    drawObject(gon["CD"], gon["Economical"]);
    drawObject(gon["CD"], gon["CL"]);

    TBDCI();

    AutoOut();

    drawObject(gon["TDD"], gon["Regression"]);
    drawObject(gon["TDD"], gon["Emergent arch"]);

    drawObject(gon["BDD"], gon["Regression"]);
    drawObject(gon["BDD"], gon["Emergent arch"]);

    drawObject(gon["Small batches"], gon["CD"]);
    drawObject(gon["Regression"], gon["CD"]);
    drawObject(gon["CI"], gon["CD"]);
    drawObject(gon["Feature teams"], gon["CD"]);
    drawObject(gon["Risk controls"], gon["CD"]);
}

function connectCL() {
    MVPCode();
    CodeSCM();
    MVPStories();
    drawObject(gon["Stories"], gon["BDD"]);
    drawObject(gon["Code"], gon["Feature toggles"]);
    drawObject(gon["Feature toggles"], gon["TBD"]);


    drawObject(gon["MVP"], gon["Semantic monitoring"]);

    SCMTBD();
    SCMAuto();

    drawObject(gon["SCM"], gon["Emergent arch"], true);
    drawObject(gon["SCM"], gon["Small batches"], true);

    TBDCI();

    AutoOut();
    drawObject(gon["Automation"], gon["Regression"], true);

    drawObject(gon["BDD"], gon["Semantic monitoring"]);
    drawObject(gon["BDD"], gon["Emergent arch"]);
    drawObject(gon["BDD"], gon["Regression"]);

    drawObject(gon["TDD"], gon["Emergent arch"]);
    drawObject(gon["TDD"], gon["Regression"]);

    drawObject(gon["Emergent arch"], gon["Small batches"], true);
    drawObject(gon["Small batches"], gon["CD"]);

    drawObject(gon["Regression"], gon["CD"]);
    drawObject(gon["CI"], gon["CD"]);

    drawObject(gon["Semantic monitoring"], gon["AB testing"]);

    drawObject(gon["AB testing"], gon["CL"]);
    drawObject(gon["CD"], gon["CL"]);

    drawObject(gon["SOA"], gon["Resilience"]);
    drawObject(gon["Resilience"], gon["Performant"]);
    drawObject(gon["CL"], gon["Performant"]);
    drawObject(gon["CL"], gon["agile"]);
    drawObject(gon["Relinquish control"], gon["agile"]);

}

function connectTDD() {
    drawObject(gon["Stories"], gon["TDD"]);
    drawObject(gon["Automation"], gon["TDD"]);
    drawObject(gon["TDD"], gon["Emergent arch"], 1);
    drawObject(gon["TDD"], gon["Regression"]);
    drawObject(gon["TDD"], gon["IaC"]);
}

function connectBDD() {
    drawObject(gon["Automation"], gon["BDD"]);
    drawObject(gon["Stories"], gon["BDD"]);

    drawObject(gon["BDD"], gon["Semantic monitoring"]);
    drawObject(gon["BDD"], gon["Emergent arch"], 1);
    drawObject(gon["BDD"], gon["Regression"]);
    drawObject(gon["BDD"], gon["IaC"]);

}

function connectStories() {
    drawObject(gon["MVP"], gon["Stories"]);
    drawObject(gon["Automation"], gon["BDD"]);
    drawObject(gon["Stories"], gon["BDD"]);
    drawObject(gon["Stories"], gon["Semantic monitoring"]);
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
    drawObject(gon["TDD"], gon["Emergent arch"]);
    drawObject(gon["BDD"], gon["Emergent arch"]);
    drawObject(gon["Small batches"], gon["Emergent arch"], 1);

    drawObject(gon["Emergent arch"], gon["Resilience"], 1);
    drawObject(gon["Emergent arch"], gon["SOA"], 1);
}

function connectBatches()
{
    drawObject(gon["Code"], gon["Small batches"], true);
    drawObject(gon["Code"], gon["Emergent arch"], true);

    drawObject(gon["Emergent arch"], gon["Small batches"], 1);
    drawObject(gon["CI"], gon["CD"]);
    drawObject(gon["Small batches"], gon["CD"]);
    drawObject(gon["Regression"], gon["CD"]);
}

function connectSemantic() {
    drawObject(gon["BDD"], gon["Semantic monitoring"]);
    drawObject(gon["MVP"], gon["Semantic monitoring"]);
    drawObject(gon["Semantic monitoring"], gon["Stabilize WIP"]);
    drawObject(gon["Semantic monitoring"], gon["Adaptive planning"]);

    drawObject(gon["Stories"], gon["Semantic monitoring"]);
    drawObject(gon["Semantic monitoring"], gon["AB testing"], 1);
}

function connectWIP() {
    drawObject(gon["Semantic monitoring"], gon["Stabilize WIP"]);
    drawObject(gon["Lean PMO"], gon["Stabilize WIP"]);
    drawObject(gon["Stabilize WIP"], gon["Adaptive planning"]);
    setOpacity("Fragile", 1);
}

function connectAdaptive() {
    drawObject(gon["Stabilize WIP"], gon["Adaptive planning"]);
    drawObject(gon["Semantic monitoring"], gon["Adaptive planning"]);
    drawObject(gon["Adaptive planning"], gon["agile"]);
    drawObject(gon["Relinquish control"], gon["agile"]);
}

function connectPMO() {
    drawObject(gon["MVP"], gon["Lean PMO"]);
    drawObject(gon["Semantic monitoring"], gon["Stabilize WIP"]);
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
    drawObject(gon["Feature toggles"], gon["TBD"]);
    drawObject(gon["Automation"], gon["CI"]);
}

function connectFeatures() {
    drawObject(gon["Code"], gon["Feature toggles"]);
    drawObject(gon["Stories"], gon["Feature toggles"]);
    drawObject(gon["SCM"], gon["TBD"]);
    drawObject(gon["Feature toggles"], gon["TBD"]);
    drawObject(gon["Feature toggles"], gon["AB testing"]);
    drawObject(gon["Feature toggles"], gon["Stories "]);
}

function connectMVP() {
    MVPTeams();
    MVPCode();
    MVPStories();
    drawObject(gon["MVP"], gon["Semantic monitoring"]);
    drawObject(gon["MVP"], gon["Lean PMO"], 1);
}

function connectCircuit() {
    drawObject(gon["Code"], gon["Circuit breaker"]);
    drawObject(gon["Circuit breaker"], gon["Resilience"], 1);
}

function connectSOA() {
    drawObject(gon["Circuit breaker"], gon["Resilience"]);
    drawObject(gon["SOA"], gon["Resilience"], 1);
    drawObject(gon["Emergent arch"], gon["Resilience"], 1);
    drawObject(gon["Emergent arch"], gon["SOA"], 1);
    setOpacity("Fragile", 1);
}

function connectResilience() {
    drawObject(gon["IaC"], gon["Resilience"]);
    drawObject(gon["Circuit breaker"], gon["Resilience"]);
    drawObject(gon["SOA"], gon["Resilience"]);
    drawObject(gon["Emergent arch"], gon["Resilience"]);
    drawObject(gon["Resilience"], gon["Performant"]);
    drawObject(gon["Resilience"], gon["agile"]);
    setOpacity("Fragile", 1);
    setOpacity("Performant", 1);
}

function connectBuildIt() {
    drawObject(gon["IaC"], gon["You build it, you run it"]);
    drawObject(gon["Feature teams"], gon["You build it, you run it"]);
    drawObject(gon["You build it, you run it"], gon["Relinquish control"]);
}

function connectRelinquish() {
    drawObject(gon["CL"], gon["agile"]);

    drawObject(gon["You build it, you run it"], gon["Relinquish control"]);
    drawObject(gon["Relinquish control"], gon["agile"]);
    drawObject(gon["Adaptive planning"], gon["agile"]);
}

function connectIaC() {
    drawObject(gon["BDD"], gon["IaC"], 1);
    drawObject(gon["TDD"], gon["IaC"], 1);
    drawObject(gon["Code"], gon["IaC"], 1);
    drawObject(gon["Automation"], gon["IaC"]);
    drawObject(gon["IaC"], gon["You build it, you run it"]);
    drawObject(gon["IaC"], gon["Resilience"]);
    drawObject(gon["Risk controls"], gon["IaC"]);
}

function connectTeams() {
    drawObject(gon["MVP"], gon["Feature teams"]);
    drawObject(gon["Feature teams"], gon["CD"]);
    drawObject(gon["Feature teams"], gon["You build it, you run it"]);
}
