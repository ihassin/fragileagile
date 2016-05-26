class Subject < ActiveRecord::Base
  validates_presence_of :y, :x, :comments, :title
  validates_uniqueness_of :title
end
