class Subject < ActiveRecord::Base
  validates_presence_of :y, :x, :comments, :title
  validates_uniqueness_of :title

  def self.make_subjects
    Subject.find_or_create_by!(title: 'Code',                     x:  100, y:   50, comments: 'Any code, including POC, business, infra as code, tech debt')
    Subject.find_or_create_by!(title: 'Fragile',                  x: 1300, y:   50, comments: 'No methodology, no tests, no feedback', terminal: 1)

    Subject.find_or_create_by!(title: 'SCM',                      x:  150, y:  150, comments: 'Distributed shared repos')
    Subject.find_or_create_by!(title: 'TBD',                      x:  650, y:  150, comments: 'Not doing CI unless TBD')

    Subject.find_or_create_by!(title: 'Automation',               x:  200, y:  250, comments: 'Any automation, including Unit, Integration, Functional, UI, Infra')
    Subject.find_or_create_by!(title: 'CI',                       x:  850, y:  250, comments: 'Fan-in, fan-out, packaging, promotion')
    Subject.find_or_create_by!(title: 'Stable',                   x: 1300, y:  250, comments: 'Meh.', terminal: 1)

    Subject.find_or_create_by!(title: 'TDD',                      x:  450, y:  350, comments: 'TDD Unit, integration, functional, performance, security')
    Subject.find_or_create_by!(title: 'Emergent Arch',            x:  650, y:  350, comments: 'Last possible responsible moment.')
    Subject.find_or_create_by!(title: 'Small batches',            x:  850, y:  350, comments: 'Reduce change sets to a minimum')
    Subject.find_or_create_by!(title: 'AB Testing',               x:  650, y:  550, comments: 'Only if we have a feedback cycle.')

    Subject.find_or_create_by!(title: 'MVP',                      x:   10, y:  450, comments: 'Zappos')
    Subject.find_or_create_by!(title: 'BDD',                      x:  250, y:  450, comments: 'Common business language, DDD')
    Subject.find_or_create_by!(title: 'Regression',               x:  500, y:  450, comments: 'Safety-net')
    Subject.find_or_create_by!(title: 'CD',                       x: 1000, y:  450, comments: 'end-to-end, economics')
    Subject.find_or_create_by!(title: 'Economical',               x: 1300, y:  450, comments: 'Economical', terminal: 1)

    Subject.find_or_create_by!(title: 'Semantic Monitoring',      x:  450, y:  550, comments: 'Business monitors like server monitors')
    Subject.find_or_create_by!(title: 'CL',                       x: 1100, y:  550, comments: 'CL')

    Subject.find_or_create_by!(title: 'Lean PMO',                 x:  250, y:  650, comments: 'Autonomous project teams, MVP, reduce waste')
    Subject.find_or_create_by!(title: 'Stabilize WIP',            x:  650, y:  650, comments: 'Remove unscheduled work, work to finish')
    Subject.find_or_create_by!(title: 'Performant',               x: 1300, y:  650, comments: 'Performant', terminal: 1)

    Subject.find_or_create_by!(title: 'Feature Teams',            x:  100, y:  750, comments: 'Break silos, end-to-end, co-located')
    Subject.find_or_create_by!(title: 'You build it, you run it', x:  450, y:  750, comments: 'Comment about you build it')
    Subject.find_or_create_by!(title: 'agile',                    x: 1300, y:  750, comments: 'Small a', terminal: 1)
  end
end
