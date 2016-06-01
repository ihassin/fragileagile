var allButtons = ['A_B_Testing', 'MVP', 'Code', 'Fragile', 'SCM', 'TBD', 'Automation', 'CI', 'Stable', 'TDD', 'Small_batches', 'BDD', 'Regression', 'CD', 'Economical', 'Semantic_Monitoring', 'CL', 'Lean_PMO', 'Stabilise_WIP', 'Performant', 'Feature_Teams', 'You_build_it__you_run_it' , 'agile', 'Emergent_Arch'];
var mvpButtons = ['A_B_Testing', 'Code', 'SCM', 'TBD', 'Automation', 'CI', 'TDD', 'Small_batches', 'BDD', 'Regression', 'CD', 'Semantic_Monitoring', 'CL', 'Lean_PMO', 'Stabilise_WIP', 'Feature_Teams', 'You_build_it__you_run_it', 'Emergent_Arch'];
var fragileButtons = ['A_B_Testing', 'SCM', 'TBD', 'Automation', 'CI', 'Stable', 'TDD', 'Small_batches', 'BDD', 'Regression', 'CD', 'Economical', 'Semantic_Monitoring', 'CL', 'Lean_PMO', 'Stabilise_WIP', 'Performant', 'Feature_Teams', 'You_build_it__you_run_it' , 'agile', 'Emergent_Arch'];
var stableButtons = ['Fragile', 'TDD', 'Small_batches', 'BDD', 'Regression', 'Economical', 'Semantic_Monitoring', 'CL', 'Lean_PMO', 'Stabilise_WIP', 'Performant', 'Feature_Teams', 'You_build_it__you_run_it' , 'agile'];
var agileButtons = ['Stable', 'Fragile', 'Economical', 'Performant'];

var canvas;
var context;

$(document).ready(function() {
    canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');
    context.strokeStyle="Blue";
    hide(mvpButtons);

    canvas.onmousedown = function() {
        context.clearRect(0, 0, 1400, 800);
        show(allButtons);
    }

    drawObject(a["MVP"], a["Code"]);
} )

var gon;
function homeInit(s) {
    a=s
}

function subjectDoubleClick(title, comment) {
    alert(title + ": " + comment)
}

function subjectClick(title, comment) {

    context.clearRect(0, 0, 1400, 800);
    switch(title) {
        case 'MVP':
            show(['Code', 'Feature_Teams', 'MVP', 'Semantic_Monitoring'])
            hide(['A_B_Testing', 'SCM', 'TBD', 'Automation', 'CI', 'Stable', 'TDD', 'Small_batches', 'BDD', 'Regression', 'CD', 'Economical', 'CL', 'Lean_PMO', 'Stabilise_WIP', 'Performant', 'You_build_it__you_run_it' , 'agile', 'Emergent_Arch']);
            connectMVP();
            break;

        case 'Lean PMO':
            show(['Fragile', 'Code', 'SCM', 'Automation', 'Semantic_Monitoring', 'Lean_PMO', 'BDD', 'Stabilise_WIP'])
            hide(['A_B_Testing', 'CL', 'CD', 'Small_batches', 'Emergent_Arch', 'TDD', 'Regression', 'TBD', 'CI', 'agile', 'Stable', 'Economical', 'Performant', 'Feature_Teams', 'You_build_it__you_run_it'])
            connectPMO();
            break;

        case 'Code':
            show(['Code', 'SCM', 'Fragile', 'Emergent_Arch', 'Small_batches'])
            hide(['A_B_Testing', 'agile', 'Stable', 'Economical', 'Performant', 'TBD', 'Automation', 'CI', 'TDD', 'BDD', 'Regression', 'CD', 'Semantic_Monitoring', 'CL', 'Lean_PMO', 'Stabilise_WIP', 'Feature_Teams', 'You_build_it__you_run_it'])
            connectCode();
            break;

        case 'SCM':
            show(['SCM', 'Code', 'TBD', 'Automation', 'Fragile'])
            hide(['Emergent_Arch', 'Small_batches', 'A_B_Testing', 'Economical', 'Performant', 'Stable', 'agile', 'Semantic_Monitoring', 'CL', 'Lean_PMO', 'Stabilise_WIP', 'Feature_Teams', 'You_build_it__you_run_it', 'CI', 'TDD', 'BDD', 'Regression', 'CD'])
            connectSCM();
            break;

        case 'TBD':
            show(['Automation', 'TBD', 'Code', 'CI', 'SCM', 'Fragile'])
            hide(['Stable', 'A_B_Testing', 'agile', 'Economical', 'Performant', 'TDD', 'Emergent_Arch', 'Small_batches', 'BDD', 'Regression', 'CD', 'Semantic_Monitoring', 'CL', 'Lean_PMO', 'Stabilise_WIP', 'Feature_Teams', 'You_build_it__you_run_it'])
            connectTBD();
            break;

        case 'CI':
            show(['CI', 'SCM', 'Code', 'CD', 'Stable', 'Automation', 'TBD'])
            hide(['Fragile', 'Economical', 'A_B_Testing', 'agile', 'Performant', 'TDD', 'Emergent_Arch', 'Regression', 'Small_batches', 'BDD', 'Semantic_Monitoring', 'CL', 'Lean_PMO', 'Stabilise_WIP', 'Feature_Teams', 'You_build_it__you_run_it'])
            connectCI();
            break;

        case 'Automation':
            show(['TBD', 'Automation', 'SCM', 'Code', 'TDD', 'BDD', 'Regression', 'CI', 'Fragile'])
            hide(['Stable', 'A_B_Testing', 'CD', 'CL', 'Emergent_Arch', 'Small_batches', 'agile', 'Economical', 'Performant', 'Semantic_Monitoring', 'Stabilise_WIP', 'Lean_PMO', 'Feature_Teams', 'You_build_it__you_run_it'])
            connectAutomation();
            break;

        case 'TDD':
            show(['Code', 'SCM', 'TDD', 'Fragile', 'Automation', 'Emergent_Arch', 'Regression'])
            hide(['BDD', 'A_B_Testing', 'TBD', 'CI', 'CD', 'agile', 'Stable', 'Economical', 'Performant', 'Small_batches', 'BDD', 'Semantic_Monitoring', 'CL', 'Lean_PMO', 'Stabilise_WIP', 'Feature_Teams', 'You_build_it__you_run_it'])
            connectTDD();
            break;

        case 'BDD':
            show(['BDD', 'Code', 'SCM', 'Automation', 'Regression', 'Emergent_Arch', 'Fragile', 'Semantic_Monitoring'])
            hide(['A_B_Testing', 'TDD', 'TBD', 'CI', 'CD', 'agile', 'Stable', 'Economical', 'Performant', 'Small_batches', 'CL', 'Lean_PMO', 'Stabilise_WIP', 'Feature_Teams', 'You_build_it__you_run_it'])
            connectBDD();
            break;

        case 'Regression':
            show(['CI', 'Small_batches', 'Code', 'SCM', 'Regression', 'Automation', 'CD', 'TDD', 'Fragile', 'BDD'])
            hide(['Economical', 'A_B_Testing', 'TBD', 'agile', 'Stable', 'Performant', 'CL', 'Lean_PMO', 'Stabilise_WIP', 'Feature_Teams', 'You_build_it__you_run_it', 'Emergent_Arch', 'Semantic_Monitoring'])
            connectRegression();
            break;

        case 'Emergent Arch':
            show(['Code', 'Emergent_Arch', 'BDD', 'Automation', 'Small_batches', 'TDD', 'SCM', 'Fragile'])
            hide(['A_B_Testing', 'Regression', 'TBD', 'CI', 'CD', 'agile', 'Stable', 'Economical', 'Performant', 'Semantic_Monitoring', 'CL', 'Lean_PMO', 'Stabilise_WIP', 'Feature_Teams', 'You_build_it__you_run_it'])
            connectEmergent();
            break;

        case 'Small batches':
            show(['CI', 'Automation', 'TDD', 'Small_batches', 'Emergent_Arch', 'Code', 'SCM', 'CD', 'Fragile'])
            hide(['Economical', 'BDD', 'A_B_Testing', 'Regression', 'TBD', 'agile', 'Stable', 'Performant', 'Semantic_Monitoring', 'CL', 'Lean_PMO', 'Stabilise_WIP', 'Feature_Teams', 'You_build_it__you_run_it'])
            connectBatches();
            break;

        case 'CD':
            show(['Code', 'SCM', 'CD', 'CL', 'CI', 'Small_batches', 'Regression', 'Economical', 'Stable', 'TBD', 'Automation', 'BDD', 'CL', 'TDD', 'Emergent_Arch'])
            hide(['A_B_Testing', 'Fragile', 'Performant', 'agile', 'Semantic_Monitoring', 'Lean_PMO', 'Stabilise_WIP', 'Feature_Teams', 'You_build_it__you_run_it'])
            connectCD();
            break;

        case 'Semantic Monitoring':
            show(['Code', 'SCM', 'Automation', 'Semantic_Monitoring', 'Fragile', 'BDD', 'Stabilise_WIP', 'A_B_Testing'])
            hide(['CL', 'CD', 'Small_batches', 'Emergent_Arch', 'TDD', 'Regression', 'TBD', 'CI', 'agile', 'Stable', 'Economical', 'Performant', 'Lean_PMO', 'Feature_Teams', 'You_build_it__you_run_it'])
            connectSemantic();
            break;

        case 'CL':
            show(['You_build_it__you_run_it', 'Stabilise_WIP', 'Code', 'SCM', 'CL', 'A_B_Testing', 'agile', 'Economical', 'Semantic_Monitoring', 'Performant', 'TBD', 'CI', 'CD', 'Small_batches', 'Automation', 'TDD', 'Emergent_Arch', 'BDD', 'Regression'])
            hide(['Stable', 'Fragile', 'Lean_PMO', 'Feature_Teams'])
            connectCL();
            break;

        case 'Stabilise WIP':
            show(['CL', 'Performant', 'agile', 'Fragile', 'Semantic_Monitoring', 'Automation', 'SCM', 'Code', 'Lean_PMO', 'BDD', 'Stabilise_WIP', 'You_build_it__you_run_it'])
            hide(['A_B_Testing', 'CD', 'Small_batches', 'Emergent_Arch', 'TDD', 'Regression', 'TBD', 'CI', 'Stable', 'Economical', 'Feature_Teams'])
            connectWIP();
            break;

        case 'Feature Teams':
            show(['Fragile', 'Feature_Teams', 'You_build_it__you_run_it'])
            hide(['Performant', 'CL', 'A_B_Testing', 'agile', 'CI', 'CD', 'Stable', 'Code', 'SCM', 'agile', 'Automation', 'TBD', 'Economical', 'TDD', 'Emergent_Arch', 'Regression', 'Small_batches', 'BDD', 'Semantic_Monitoring', 'Lean_PMO', 'Stabilise_WIP'])
            connectTeams();
            break;

        case 'You build it, you run it':
            show(['Stabilise_WIP', 'CL', 'agile', 'Fragile', 'Feature_Teams', 'You_build_it__you_run_it'])
            hide(['A_B_Testing', 'CI', 'CD', 'Performant', 'Stable', 'Code', 'SCM', 'Automation', 'TBD', 'Economical', 'TDD', 'Emergent_Arch', 'Regression', 'Small_batches', 'BDD', 'Semantic_Monitoring', 'Lean_PMO'])
            connectBuildIt();
            break;

        case 'A/B Testing':
            show(['CD', 'SCM', 'Code', 'CL', 'A_B_Testing', 'Fragile', 'Semantic_Monitoring', 'Automation', 'BDD'])
            hide(['Performant', 'agile', 'Economical', 'Small_batches', 'TDD', 'Emergent_Arch', 'CI', 'TBD', 'Regression', 'Stable', 'Stabilise_WIP', 'Lean_PMO', 'Feature_Teams', 'You_build_it__you_run_it'])
            connectAB();
            break;

        case 'Fragile':
            show(['Code', 'Fragile'])
            hide(fragileButtons);
            connectFragile();
            break;

        case 'Stable':
            show(['Stable', 'Code', 'SCM', 'TBD', 'Automation', 'CI'])
            hide(['CL', 'CD', 'Emergent_Arch', 'A_B_Testing', 'TDD', 'BDD', 'Small_batches', 'Regression', 'Economical', 'Fragile', 'Performant', 'agile', 'Semantic_Monitoring', 'Lean_PMO', 'Stabilise_WIP', 'Feature_Teams', 'You_build_it__you_run_it'])
            connectStable();
            break;

        case 'Economical':
            show(['Code', 'SCM', 'CI', 'Small_batches', 'Regression', 'Economical', 'TBD', 'Automation', 'BDD', 'TDD', 'Emergent_Arch', 'CD'])
            hide(['CL', 'A_B_Testing', 'Fragile', 'Performant', 'agile', 'Semantic_Monitoring', 'Stable', 'Lean_PMO', 'Stabilise_WIP', 'Feature_Teams', 'You_build_it__you_run_it'])
            connectEconomical();
            break;

        case 'Performant':
            show(['A_B_Testing', 'Feature_Teams', 'Semantic_Monitoring', 'MVP', 'Lean_PMO', 'Stabilise_WIP', 'Performant', 'Code', 'SCM', 'CL', 'CI', 'Small_batches', 'Regression', 'TBD', 'Automation', 'BDD', 'CL', 'TDD', 'Emergent_Arch', 'CD'])
            hide(['Fragile', 'Economical', 'agile', 'Stable', 'You_build_it__you_run_it'])
            connectPerformant();
            break;

        case 'agile':
            show(['A_B_Testing', 'You_build_it__you_run_it', 'agile', 'Feature_Teams', 'Semantic_Monitoring', 'MVP', 'Lean_PMO', 'Stabilise_WIP', 'Code', 'SCM', 'CL', 'CI', 'Small_batches', 'Regression', 'TBD', 'Automation', 'BDD', 'CL', 'TDD', 'Emergent_Arch', 'CD'])
            hide(['Economical', 'Stable', 'Performant', 'Fragile'])
            connectAgile();
            break;
    }
}

function MVPCode() {
    drawObject(gon.mvp, gon.code);
}

function MVPTeams() {
    drawObject(gon.mvp, gon.teams);
}

function CodeSCM() {
    drawObject(gon.code, gon.scm);
}

function SCMAuto() {
    drawObject(gon.scm, gon.automation);
}

function SCMTBD() {
    drawObject(gon.scm, gon.tbd);
}

function TBDCI() {
    drawObject(gon.tbd, gon.ci);
}

function AutoOut() {
    drawObject(gon.automation, gon.tdd);
    drawObject(gon.automation, gon.bdd);
    drawObject(gon.automation, gon.ci);
    drawObject(gon.automation, gon.regression);
}

function connectCode() {
    drawObject(gon.code, gon.fragile);
    drawObject(gon.code, gon.emergent);
    drawObject(gon.code, gon.batches);
    MVPCode();
    CodeSCM();
}

function connectCI() {
    MVPCode();
    CodeSCM();
    SCMTBD();
    TBDCI();
    SCMAuto();

    drawObject(gon.automation, gon.ci);
    drawObject(gon.ci, gon.stable);
    drawObject(gon.ci, gon.cd);
}

function connectSCM() {
    MVPCode();
    CodeSCM();
    SCMTBD();
    SCMAuto();
}

function connectFragile() {
    drawObject(gon.code, gon.fragile);
    MVPCode();
}

function connectStable() {
    MVPCode();
    CodeSCM();

    SCMAuto();
    SCMTBD();

    TBDCI();
    drawObject(gon.automation, gon.ci);
    drawObject(gon.ci, gon.stable);
}

function connectEconomical() {
    MVPCode();
    CodeSCM();

    SCMTBD();
    SCMAuto();
    drawObject(gon.scm, gon.emergent);
    drawObject(gon.scm, gon.batches);

    drawObject(gon.batches, gon.cd);
    drawObject(gon.regression, gon.cd);

    drawObject(gon.ci, gon.cd);

    drawObject(gon.cd, gon.economical);
    TBDCI();

    AutoOut();

    drawObject(gon.tdd, gon.emergent);
    drawObject(gon.tdd, gon.regression);

    drawObject(gon.bdd, gon.regression);
    drawObject(gon.bdd, gon.emergent);

    drawObject(gon.emergent, gon.batches);
}

function connectPerformant() {
    MVPCode();
    CodeSCM();
    MVPTeams();

    SCMTBD();
    SCMAuto();

    drawObject(gon.scm, gon.emergent);
    drawObject(gon.scm, gon.batches);

    drawObject(gon.batches, gon.cd);
    drawObject(gon.regression, gon.cd);
    drawObject(gon.ci, gon.cd);
    drawObject(gon.cd, gon.cl);
    TBDCI();

    AutoOut();

    drawObject(gon.tdd, gon.emergent);
    drawObject(gon.tdd, gon.regression);

    drawObject(gon.bdd, gon.regression);
    drawObject(gon.bdd, gon.emergent);
    drawObject(gon.bdd, gon.semantic);

    drawObject(gon.emergent, gon.batches);

    drawObject(gon.cl, gon.performant);
    drawObject(gon.wip, gon.performant);
    drawObject(gon.pmo, gon.wip);

    drawObject(gon.semantic, gon.ab);
    drawObject(gon.semantic, gon.wip);

    drawObject(gon.ab, gon.cl);

    drawObject(gon.mvp, gon.semantic);

    drawObject(gon.teams, gon.performant);
}

function connectAgile() {
    MVPCode();
    CodeSCM();
    MVPTeams();

    SCMTBD();
    SCMAuto();

    drawObject(gon.scm, gon.emergent);
    drawObject(gon.scm, gon.batches);

    drawObject(gon.batches, gon.cd);
    drawObject(gon.regression, gon.cd);
    drawObject(gon.ci, gon.cd);
    drawObject(gon.cd, gon.cl);

    drawObject(gon.cl, gon.agile);
    TBDCI();

    AutoOut();

    drawObject(gon.tdd, gon.emergent);
    drawObject(gon.tdd, gon.regression);

    drawObject(gon.bdd, gon.regression);
    drawObject(gon.bdd, gon.emergent);
    drawObject(gon.bdd, gon.semantic);

    drawObject(gon.emergent, gon.batches);

    drawObject(gon.pmo, gon.wip);

    drawObject(gon.semantic, gon.ab);
    drawObject(gon.semantic, gon.wip);

    drawObject(gon.ab, gon.cl);

    drawObject(gon.mvp, gon.semantic);

    drawObject(gon.teams, gon.devops);

    drawObject(gon.wip, gon.agile);
    drawObject(gon.devops, gon.agile);
}

function connectCD() {
    MVPCode();
    CodeSCM();

    SCMTBD();
    SCMAuto();

    drawObject(gon.scm, gon.emergent);
    drawObject(gon.scm, gon.batches);

    drawObject(gon.batches, gon.cd);
    drawObject(gon.regression, gon.cd);

    drawObject(gon.ci, gon.cd);

    drawObject(gon.cd, gon.economical);
    drawObject(gon.cd, gon.cl);

    TBDCI();

    AutoOut();

    drawObject(gon.tdd, gon.regression);
    drawObject(gon.tdd, gon.emergent);

    drawObject(gon.bdd, gon.regression);
    drawObject(gon.bdd, gon.emergent);

    drawObject(gon.emergent, gon.batches);
}

function connectAB() {
    MVPCode();
    CodeSCM();

    drawObject(gon.mvp, gon.semantic);

    SCMAuto();

    drawObject(gon.automation, gon.bdd);

    drawObject(gon.semantic, gon.ab);
    drawObject(gon.cd, gon.cl);
    drawObject(gon.ab, gon.cl);
    drawObject(gon.bdd, gon.semantic);

}

function connectCL() {
    MVPCode();
    CodeSCM();

    drawObject(gon.mvp, gon.semantic);

    SCMTBD();
    SCMAuto();

    drawObject(gon.scm, gon.emergent);
    drawObject(gon.scm, gon.batches);
    drawObject(gon.scm, gon.tbd);

    TBDCI();

    AutoOut();

    drawObject(gon.bdd, gon.semantic);
    drawObject(gon.bdd, gon.emergent);
    drawObject(gon.bdd, gon.regression);

    drawObject(gon.tdd, gon.emergent);
    drawObject(gon.tdd, gon.regression);

    drawObject(gon.emergent, gon.batches);
    drawObject(gon.batches, gon.cd);

    drawObject(gon.regression, gon.cd);
    drawObject(gon.ci, gon.cd);

    drawObject(gon.semantic, gon.ab);

    drawObject(gon.ab, gon.cl);
    drawObject(gon.cd, gon.cl);

    drawObject(gon.cl, gon.performant);
    drawObject(gon.wip, gon.performant);
    drawObject(gon.cl, gon.agile);
    drawObject(gon.devops, gon.agile);
}

function connectTDD() {
    MVPCode();
    CodeSCM();

    SCMAuto();

    drawObject(gon.automation, gon.tdd);
    drawObject(gon.tdd, gon.emergent);
    drawObject(gon.tdd, gon.regression);
}

function connectBDD() {
    MVPCode();
    CodeSCM();

    SCMAuto();

    drawObject(gon.automation, gon.bdd);

    drawObject(gon.bdd, gon.semantic);
    drawObject(gon.bdd, gon.emergent);
    drawObject(gon.bdd, gon.regression);
}

function connectRegression() {
    MVPCode();
    CodeSCM();

    SCMAuto();

    drawObject(gon.automation, gon.regression);

    drawObject(gon.bdd, gon.regression);
    drawObject(gon.tdd, gon.regression);

    drawObject(gon.regression, gon.cd);
    drawObject(gon.batches, gon.cd);
    drawObject(gon.ci, gon.cd);
}

function connectEmergent() {
    MVPCode();
    CodeSCM();

    SCMAuto();
    drawObject(gon.code, gon.emergent);

    drawObject(gon.automation, gon.tdd);
    drawObject(gon.automation, gon.bdd);

    drawObject(gon.tdd, gon.emergent);
    drawObject(gon.bdd, gon.emergent);

    drawObject(gon.emergent, gon.batches);
}

function connectBatches()
{
    MVPCode();
    CodeSCM();

    drawObject(gon.code, gon.batches);
    drawObject(gon.code, gon.emergent);

    drawObject(gon.scm, gon.automation);
    drawObject(gon.automation, gon.tdd);
    drawObject(gon.tdd, gon.emergent);

    drawObject(gon.emergent, gon.batches);
    drawObject(gon.ci, gon.cd);
    drawObject(gon.batches, gon.cd);
}

function connectSemantic() {
    MVPCode();
    CodeSCM();
    SCMAuto();

    drawObject(gon.automation, gon.bdd);
    drawObject(gon.bdd, gon.semantic);
    drawObject(gon.mvp, gon.semantic);
    drawObject(gon.semantic, gon.wip);

    drawObject(gon.semantic, gon.ab);
}

function connectWIP() {
    MVPCode();
    CodeSCM();
    SCMAuto();

    drawObject(gon.automation, gon.bdd);
    drawObject(gon.bdd, gon.semantic);
    drawObject(gon.mvp, gon.semantic);
    drawObject(gon.semantic, gon.wip);
    drawObject(gon.pmo, gon.wip);

    drawObject(gon.cl, gon.performant);

    drawObject(gon.wip, gon.performant);
    drawObject(gon.wip, gon.agile);
    drawObject(gon.devops, gon.agile);
}

function connectPMO() {
    MVPCode();
    CodeSCM();
    SCMAuto();

    drawObject(gon.automation, gon.bdd);
    drawObject(gon.bdd, gon.semantic);
    drawObject(gon.mvp, gon.semantic);
    drawObject(gon.semantic, gon.wip);
    drawObject(gon.pmo, gon.wip);
}

function connectAutomation() {
    MVPCode();
    CodeSCM();
    SCMAuto();

    AutoOut();
    drawObject(gon.tbd, gon.ci);
}

function connectTBD() {
    MVPCode();
    CodeSCM();
    SCMTBD();

    TBDCI();
    drawObject(gon.automation, gon.ci);
}

function connectMVP() {
    MVPTeams();
    MVPCode();
    drawObject(gon.mvp, gon.semantic);
}

function connectBuildIt() {
    MVPTeams();
    drawObject(gon.teams, gon.devops);
    drawObject(gon.devops, gon.agile);
    drawObject(gon.agile, gon.wip);
    drawObject(gon.agile, gon.cl);
}

function connectTeams() {
    MVPTeams();
    drawObject(gon.teams, gon.devops);
}

function show(buttons) {
    buttons.map(function (button) {
        if(document.getElementById(button).style.opacity == 0.1) {
            elem = "#" + button

            $(elem).hide();
            document.getElementById(button).style.opacity = 1;
            $(elem).fadeIn(1000);
        }

    } )
}

function hide(buttons) {
    buttons.map(function (button) {

        document.getElementById(button).style.opacity = 0.1;
    } )
}

function drawObject(fromObj, toObj) {
    drawLine(fromObj.x + (110/2), fromObj.y + (25/2), toObj.x + (110/2), toObj.y + (25/2))
}

function drawLine(fromX, fromY, toX, toY) {
    context.beginPath();

    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);

    context.stroke();
}
