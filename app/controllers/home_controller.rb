class HomeController < ApplicationController
  def index
    @subjects = Subject.all
    @mvp      = Subject.where(title: "MVP").first
    @code     = Subject.where(title: "Code").first
    @fragile  = Subject.where(title: "Fragile").first
    @scm      = Subject.where(title: "SCM").first
    @tbd      = Subject.where(title: "TBD").first
    @automation = Subject.where(title: "Automation").first
    @ci       = Subject.where(title: "CI").first
    @stable   = Subject.where(title: "Stable").first
    @emergent = Subject.where(title: "Emergent Arch.").first
    @batches  = Subject.where(title: "Small batches").first

  end

end
