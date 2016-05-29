class HomeController < ApplicationController
  def index
    @subjects   = Subject.all

    @mvp        = Subject.where(title: "MVP").first
    @code       = Subject.where(title: "Code").first
    @fragile    = Subject.where(title: "Fragile").first
    @scm        = Subject.where(title: "SCM").first
    @tbd        = Subject.where(title: "TBD").first
    @tdd        = Subject.where(title: "TDD").first
    @bdd        = Subject.where(title: "BDD").first
    @automation = Subject.where(title: "Automation").first
    @ci         = Subject.where(title: "CI").first
    @stable     = Subject.where(title: "Stable").first
    @emergent   = Subject.where(title: Subject::SUBJ_EMERGENT).first
    @batches    = Subject.where(title: "Small batches").first
    @cd         = Subject.where(title: "CD").first
    @cl         = Subject.where(title: "CL").first
    @agile      = Subject.where(title: "agile").first
    @regression = Subject.where(title: "Regression").first
    @teams      = Subject.where(title: "Feature Teams").first
    @economical = Subject.where(title: "Economical").first
    @semantic   = Subject.where(title: "Semantic Monitoring").first
    @ab         = Subject.where(title: "A/B Testing").first
    @performant = Subject.where(title: "Performant").first
    @wip        = Subject.where(title: "Stabilise WIP").first
    @pmo        = Subject.where(title: "Lean PMO").first
    @devops     = Subject.where(title: "You build it, you run it").first

  end

end
