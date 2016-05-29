class Subject < ActiveRecord::Base
  validates_presence_of :y, :x, :comments, :title
  validates_uniqueness_of :title

  SUBJ_EMERGENT = 'Emergent Arch'

  def self.make_subjects
    Subject.find_or_create_by!(title: 'Code',                     x:  100, y:   50, comments: 'Comment about Code')
    Subject.find_or_create_by!(title: 'Fragile',                  x: 1300, y:   50, comments: 'Comment about Fragile', terminal: 1)

    Subject.find_or_create_by!(title: 'SCM',                      x:  150, y:  150, comments: 'Comment about SCM')
    Subject.find_or_create_by!(title: 'TBD',                      x:  650, y:  150, comments: 'Comment about TBD')

    Subject.find_or_create_by!(title: 'Automation',               x:  200, y:  250, comments: 'Comment about Automation')
    Subject.find_or_create_by!(title: 'CI',                       x:  850, y:  250, comments: 'Comment about CI')
    Subject.find_or_create_by!(title: 'Stable',                   x: 1300, y:  250, comments: 'Comment about Stable', terminal: 1)

    Subject.find_or_create_by!(title: 'TDD',                      x:  450, y:  350, comments: 'Comment about TDD')
    Subject.find_or_create_by!(title: SUBJ_EMERGENT,              x:  650, y:  350, comments: 'Comment about Emergent')
    Subject.find_or_create_by!(title: 'Small batches',            x:  850, y:  350, comments: 'Comment about batches')

    Subject.find_or_create_by!(title: 'MVP',                      x:   10, y:  450, comments: 'Comment about MVP')
    Subject.find_or_create_by!(title: 'BDD',                      x:  250, y:  450, comments: 'Comment about BDD')
    Subject.find_or_create_by!(title: 'Regression',               x:  500, y:  450, comments: 'Comment about Regression')
    Subject.find_or_create_by!(title: 'CD',                       x: 1000, y:  450, comments: 'Comment about CD')
    Subject.find_or_create_by!(title: 'Economical',               x: 1300, y:  450, comments: 'Comment about economical', terminal: 1)

    Subject.find_or_create_by!(title: 'Semantic Monitoring',      x:  450, y:  550, comments: 'Comment about Semantic')
    Subject.find_or_create_by!(title: 'CL',                       x: 1150, y:  550, comments: 'Comment about CL')

    Subject.find_or_create_by!(title: 'Lean PMO',                 x:  250, y:  650, comments: 'Comment about Lean PMO')
    Subject.find_or_create_by!(title: 'Stabilise WIP',            x:  650, y:  650, comments: 'Comment about WIP')
    Subject.find_or_create_by!(title: 'Performant',               x: 1300, y:  650, comments: 'Comment about Performant', terminal: 1)

    Subject.find_or_create_by!(title: 'Feature Teams',            x:  100, y:  750, comments: 'Comment about teams')
    Subject.find_or_create_by!(title: 'You build it, you run it', x:  450, y:  750, comments: 'Comment about you build it')
    Subject.find_or_create_by!(title: 'agile',                    x: 1300, y:  750, comments: 'Comment about agile', terminal: 1)
  end
end
