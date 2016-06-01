class HomeController < ApplicationController
  def index
    @subjects   = Subject.all

    @s = Hash[@subjects.map{|s| [s.title, s]}].to_json

    gon.mvp         = Subject.where(title: "MVP").first
    gon.code        = Subject.where(title: "Code").first
    gon.fragile     = Subject.where(title: "Fragile").first
    gon.scm         = Subject.where(title: "SCM").first
    gon.tbd         = Subject.where(title: "TBD").first
    gon.tdd         = Subject.where(title: "TDD").first
    gon.bdd         = Subject.where(title: "BDD").first
    gon.automation  = Subject.where(title: "Automation").first
    gon.ci          = Subject.where(title: "CI").first
    gon.stable      = Subject.where(title: "Stable").first
    gon.emergent    = Subject.where(title: Subject::SUBJ_EMERGENT).first
    gon.batches     = Subject.where(title: "Small batches").first
    gon.cd          = Subject.where(title: "CD").first
    gon.cl          = Subject.where(title: "CL").first
    gon.agile       = Subject.where(title: "agile").first
    gon.regression  = Subject.where(title: "Regression").first
    gon.teams       = Subject.where(title: "Feature Teams").first
    gon.economical  = Subject.where(title: "Economical").first
    gon.semantic    = Subject.where(title: "Semantic Monitoring").first
    gon.ab          = Subject.where(title: "A/B Testing").first
    gon.performant  = Subject.where(title: "Performant").first
    gon.wip         = Subject.where(title: "Stabilise WIP").first
    gon.pmo         = Subject.where(title: "Lean PMO").first
    gon.devops      = Subject.where(title: "You build it, you run it").first
  end

end
