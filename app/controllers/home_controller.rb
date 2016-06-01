class HomeController < ApplicationController
  def index
    @subjects   = Subject.all

    @s = Hash[@subjects.map { |s| [s.title, s] }].to_json

  end

end
