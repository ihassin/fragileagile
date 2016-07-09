class Subject < ActiveRecord::Base
  validates_presence_of :y, :x, :comments, :title
  validates_uniqueness_of :title

  def self.make_subjects

    # General

    Subject.find_or_create_by!(title: 'Code',                     x:  100, y:   50, comments: 'Any code, including POC, business, infra as code, tech debt', stories: 0)
    Subject.find_or_create_by!(title: 'Resilience',               x: 1000, y:   50, comments: 'Failsafe: a system fails in a safe way. Resilient systems: recover their original operational state', stories: 0)
    Subject.find_or_create_by!(title: 'Fragile',                  x: 1300, y:   50, comments: 'No methodology, no tests, no feedback', terminal: 1, stories: 0)

    Subject.find_or_create_by!(title: 'SCM',                      x:  150, y:  150, comments: 'Distributed shared repos', stories: 0)
    Subject.find_or_create_by!(title: 'Feature Toggles',          x:  450, y:  100, comments: 'Dark launching', stories: 0)
    Subject.find_or_create_by!(title: 'TBD',                      x:  650, y:  150, comments: 'Not doing CI unless TBD', stories: 0)

    Subject.find_or_create_by!(title: 'Automation',               x:  200, y:  250, comments: 'Any automation, including Unit, Integration, Functional, UI, Infra', stories: 0)
    Subject.find_or_create_by!(title: 'CI',                       x:  850, y:  250, comments: 'Fan-in, fan-out, packaging, promotion', stories: 0)
    Subject.find_or_create_by!(title: 'Stable',                   x: 1300, y:  250, comments: 'Meh.', terminal: 1, stories: 0)

    Subject.find_or_create_by!(title: 'Stories',                  x:  150, y:  350, comments: 'End to end, domain stories', stories: 0)
    Subject.find_or_create_by!(title: 'TDD',                      x:  450, y:  350, comments: 'Just as agile experiments with MVP, so TDD experiments with arch. TDD Unit, integration, functional, performance, security', stories: 0)
    Subject.find_or_create_by!(title: 'Emergent Arch',            x:  650, y:  350, comments: 'Last possible responsible moment.', stories: 0)
    Subject.find_or_create_by!(title: 'Small batches',            x:  850, y:  350, comments: 'Reduce change sets to a minimum', stories: 0)
    Subject.find_or_create_by!(title: 'AB Testing',               x:  650, y:  550, comments: 'Only if we have a feedback cycle.', stories: 0)

    Subject.find_or_create_by!(title: 'MVP',                      x:   10, y:  450, comments: 'Purpose, 5-whys, Zappos', stories: 0)
    Subject.find_or_create_by!(title: 'BDD',                      x:  250, y:  450, comments: 'Just as agile experiments with MVP, so BDD experiments with behaviour. Common business language, DDD', stories: 0)
    Subject.find_or_create_by!(title: 'Regression',               x:  520, y:  450, comments: 'Safety-net', stories: 0)
    Subject.find_or_create_by!(title: 'CD',                       x: 1000, y:  450, comments: 'end-to-end, economics', stories: 0)
    Subject.find_or_create_by!(title: 'Economical',               x: 1300, y:  450, comments: 'Economical', terminal: 1, stories: 0)

    Subject.find_or_create_by!(title: 'Semantic Monitoring',      x:  450, y:  550, comments: 'Business monitors like server monitors', stories: 0)
    Subject.find_or_create_by!(title: 'CL',                       x: 1100, y:  550, comments: 'CL', stories: 0)

    Subject.find_or_create_by!(title: 'Lean PMO',                 x:  250, y:  650, comments: 'Autonomous project teams, MVP, reduce waste', stories: 0)
    Subject.find_or_create_by!(title: 'Stabilize WIP',            x:  650, y:  650, comments: 'Remove unscheduled work, work to finish', stories: 0)
    Subject.find_or_create_by!(title: 'Performant',               x: 1300, y:  650, comments: 'Performant', terminal: 1, stories: 0)

    Subject.find_or_create_by!(title: 'Feature Teams',            x:  100, y:  750, comments: 'Break silos, end-to-end, co-located', stories: 0)
    Subject.find_or_create_by!(title: 'You build it, you run it', x:  450, y:  750, comments: 'Mindset, culture', stories: 0)
    Subject.find_or_create_by!(title: 'agile',                    x: 1300, y:  750, comments: 'Small a, innovate!', terminal: 1, stories: 0)

    # Stories

    Subject.find_or_create_by!(title: 'Value proposition',        x:  100, y:  250, comments: 'Purpose', stories: 1)
    Subject.find_or_create_by!(title: 'Clear goals',              x:  100, y:  350, comments: 'End to end, domain stories', stories: 1)
    Subject.find_or_create_by!(title: 'Common language',          x:  100, y:  450, comments: 'Just as agile experiments with MVP, so TDD experiments with arch. TDD Unit, integration, functional, performance, security', stories: 1)

    Subject.find_or_create_by!(title: 'Discussion',               x:  320, y:  350, comments: 'Last possible responsible moment.', stories: 1)

    Subject.find_or_create_by!(title: 'Epics',                    x:  540, y:  150, comments: 'Only if we have a feedback cycle.', stories: 1)
    Subject.find_or_create_by!(title: 'Story map',                x:  540, y:  250, comments: 'Safety-net', stories: 1)
    Subject.find_or_create_by!(title: 'Features',                 x:  540, y:  450, comments: 'Just as agile experiments with MVP, so BDD experiments with behaviour. Common business language, DDD', stories: 1)
    Subject.find_or_create_by!(title: 'INVEST',                   x:  540, y:  550, comments: 'end-to-end, economics', stories: 1)

    Subject.find_or_create_by!(title: 'End-to-end',               x:  740, y:  350, comments: 'Reduce change sets to a minimum', stories: 1)

    Subject.find_or_create_by!(title: 'Rapid deployment',         x:  950, y:  350, comments: 'Any automation, including Unit, Integration, Functional, UI, Infra', stories: 1)
    Subject.find_or_create_by!(title: 'Meaningful feedback',      x: 1200, y:  350, comments: 'Fan-in, fan-out, packaging, promotion', stories: 1, terminal: 1)

    Subject.find_or_create_by!(title: 'Monitoring',               x: 1080, y:  450, comments: 'Business monitors like server monitors', stories: 1)
  end
end
