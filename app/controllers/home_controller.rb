class HomeController < ApplicationController
  def index
    @subjects = Subject.all
    @mvp = Subject.where(title: "MVP").first
    @code = Subject.where(title: "Code").first
    @fragile = Subject.where(title: "Fragile").first

  end

end
