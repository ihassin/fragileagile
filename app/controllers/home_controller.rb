class HomeController < ApplicationController
  def index
    @subjects = Subject.where(home: 1)

    @s = Hash[@subjects.map { |s| [s.title, s] }].to_json
  end

  def stories
    @subjects = Subject.where(stories: 1)

    @s = Hash[@subjects.map { |s| [s.title, s] }].to_json
  end

end
