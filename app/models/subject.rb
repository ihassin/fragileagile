class Subject < ActiveRecord::Base
  validates_presence_of :y, :x, :comments, :title
  validates_uniqueness_of :title

  def self.make_subjects

    # General

    Subject.find_or_create_by!(title: 'Code',                     x:  100, y:   50, comments: 'Any code, including POC, business, infra as code, tech debt')
    Subject.find_or_create_by!(title: 'Resilience',               x: 1000, y:   50, comments: 'Failsafe: a system fails in a safe way. Resilient systems: recover their original operational state')
    Subject.find_or_create_by!(title: 'Fragile',                  x: 1300, y:   50, comments: 'No methodology, no tests, no feedback', terminal: 1)

    Subject.find_or_create_by!(title: 'SCM',                      x:  150, y:  150, comments: 'Distributed shared repos', url: 'https://www.thoughtworks.com/radar/tools/git')
    Subject.find_or_create_by!(title: 'Feature Toggles',          x:  450, y:  100, comments: 'Dark launching', url: 'http://martinfowler.com/articles/feature-toggles.html')
    Subject.find_or_create_by!(title: 'TBD',                      x:  650, y:  150, comments: 'Not doing CI unless TBD', url: 'http://paulhammant.com/2013/04/05/what-is-trunk-based-development/')

    Subject.find_or_create_by!(title: 'Automation',               x:  200, y:  250, comments: 'Any automation, including Unit, Integration, Functional, UI, Infra')
    Subject.find_or_create_by!(title: 'CI',                       x:  850, y:  250, comments: 'Fan-in, fan-out, packaging, promotion', url: 'https://www.thoughtworks.com/continuous-integration')
    Subject.find_or_create_by!(title: 'Stable',                   x: 1300, y:  250, comments: 'Meh.', terminal: 1)

    Subject.find_or_create_by!(title: 'Stories',                  x:  150, y:  350, comments: 'End to end, domain stories')
    Subject.find_or_create_by!(title: 'TDD',                      x:  450, y:  350, comments: 'Just as agile experiments with MVP, so TDD experiments with arch. TDD Unit, integration, functional, performance, security')
    Subject.find_or_create_by!(title: 'Emergent Arch',            x:  650, y:  350, comments: 'Last possible responsible moment.')
    Subject.find_or_create_by!(title: 'Small batches',            x:  850, y:  350, comments: 'Reduce change sets to a minimum')
    Subject.find_or_create_by!(title: 'AB Testing',               x:  650, y:  550, comments: 'Only if we have a feedback cycle.')

    Subject.find_or_create_by!(title: 'MVP',                      x:   10, y:  450, comments: 'Purpose, 5-whys, Zappos')
    Subject.find_or_create_by!(title: 'BDD',                      x:  250, y:  450, comments: 'Just as agile experiments with MVP, so BDD experiments with behaviour. Common business language, DDD')
    Subject.find_or_create_by!(title: 'Regression',               x:  520, y:  450, comments: 'Safety-net')
    Subject.find_or_create_by!(title: 'CD',                       x: 1000, y:  450, comments: 'end-to-end, economics', url: 'https://www.thoughtworks.com/continuous-delivery')
    Subject.find_or_create_by!(title: 'Economical',               x: 1300, y:  450, comments: 'Economical', terminal: 1)

    Subject.find_or_create_by!(title: 'Semantic Monitoring',      x:  450, y:  550, comments: 'Business monitors like server monitors')
    Subject.find_or_create_by!(title: 'CL',                       x: 1100, y:  550, comments: 'CL')

    Subject.find_or_create_by!(title: 'Lean PMO',                 x:  250, y:  650, comments: 'Autonomous project teams, MVP, reduce waste')
    Subject.find_or_create_by!(title: 'Stabilize WIP',            x:  650, y:  650, comments: 'Remove unscheduled work, work to finish')
    Subject.find_or_create_by!(title: 'Performant',               x: 1300, y:  650, comments: 'Performant', terminal: 1)

    Subject.find_or_create_by!(title: 'Feature Teams',            x:  100, y:  750, comments: 'Break silos, end-to-end, co-located')
    Subject.find_or_create_by!(title: 'You build it, you run it', x:  450, y:  750, comments: 'Mindset, culture')
    Subject.find_or_create_by!(title: 'agile',                    x: 1300, y:  750, comments: 'Small a, innovate!', terminal: 1)

    # Stories

    Subject.find_or_create_by!(title: 'Value proposition',        x:  100, y:  250, comments: 'Purpose', url: 'https://docs.google.com/presentation/d/1XvPd-pKKGqpyd4IVLXUOghJqFDDIDsL9_Pc2wylEGnA/edit#slide=id.g115924b1c4_0_0', stories: 1)
    Subject.find_or_create_by!(title: 'Clear goals',              x:  100, y:  350, comments: 'Strategy to achieve value proposition', stories: 1)
    Subject.find_or_create_by!(title: 'Common language',          x:  100, y:  450, comments: 'Domain language', stories: 1)

    Subject.find_or_create_by!(title: 'Discussion',               x:  320, y:  350, comments: 'Story lifecyle', stories: 1)

    Subject.find_or_create_by!(title: 'Epics',                    x:  540, y:  150, comments: 'Translation of goals to high level plan', stories: 1)
    Subject.find_or_create_by!(title: 'Story map',                x:  540, y:  250, comments: 'Mapping of stories to epics', stories: 1)
    Subject.find_or_create_by!(title: 'Features',                 x:  540, y:  450, comments: 'Breakdown of epics', stories: 1)
    Subject.find_or_create_by!(title: 'INVEST',                   x:  540, y:  550, comments: 'Independent, Negotiable, Valuable, Estimable, Testable', stories: 1)

    Subject.find_or_create_by!(title: 'End-to-end',               x:  740, y:  350, comments: 'DoD, CFCs', stories: 1, url: 'https://docs.google.com/presentation/d/1XvPd-pKKGqpyd4IVLXUOghJqFDDIDsL9_Pc2wylEGnA/edit#slide=id.g14b2c42c09_0_0')

    Subject.find_or_create_by!(title: 'Rapid deployment',         x:  950, y:  350, comments: 'Visible progress, CD', stories: 1, url: '/#rapid')
    Subject.find_or_create_by!(title: 'Meaningful feedback',      x: 1200, y:  350, comments: 'Continuous learning', stories: 1, terminal: 1, url: '/#cl')

    Subject.find_or_create_by!(title: 'Monitoring',               x: 1080, y:  450, comments: 'Business monitors', stories: 1, url: '/#semantic')
  end
end
