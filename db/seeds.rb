# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Subject.find_or_create_by!(title: 'MVP',      x:   10, y:   250, comments: 'Comment about MVP')
Subject.find_or_create_by!(title: 'Code',     y:   50, x:   100, comments: 'Comment about code')
Subject.find_or_create_by!(title: 'Fragile',  y:   50, x:  1000, comments: 'Comment about code')
