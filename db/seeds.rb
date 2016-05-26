# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Subject.delete_all

Subject.find_or_create_by!(title: 'MVP',      x:   10, y:  350, comments: 'Comment about MVP')
Subject.find_or_create_by!(title: 'Code',     x:  100, y:   50, comments: 'Comment about Code')
Subject.find_or_create_by!(title: 'Fragile',  x: 1000, y:   50, comments: 'Comment about Fragile')

Subject.find_or_create_by!(title: 'SCM',      x:  150, y:  120, comments: 'Comment about SCM')
Subject.find_or_create_by!(title: 'TBD',      x:  800, y:  120, comments: 'Comment about TBD')

Subject.find_or_create_by!(title: 'Automation', x:  200, y:  180, comments: 'Comment about Automation')
Subject.find_or_create_by!(title: 'CI',         x: 1000, y:  180, comments: 'Comment about CI')
Subject.find_or_create_by!(title: 'Stable',     x: 1200, y:  180, comments: 'Comment about Stable')

Subject.find_or_create_by!(title: 'TDD',      x:  250, y:  250, comments: 'Comment about TDD')
Subject.find_or_create_by!(title: 'Emergent Arch.', x:  450, y:  250, comments: 'Comment about Emergent')
Subject.find_or_create_by!(title: 'Small batches',  x:  650, y:  250, comments: 'Comment about batches')

Subject.find_or_create_by!(title: 'BDD',        x:  250, y:  350, comments: 'Comment about BDD')
Subject.find_or_create_by!(title: 'Regression', x:  450, y:  350, comments: 'Comment about Regression')
Subject.find_or_create_by!(title: 'CD',         x: 1100, y:  350, comments: 'Comment about CD')
