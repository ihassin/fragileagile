class Subject < ActiveRecord::Base
  validates_presence_of :top, :left, :comments, :title
  validates_uniqueness_of :title
end
