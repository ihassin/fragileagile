class Subject < ActiveRecord::Base
  STORY_X_OFFSET = 60

  validates_presence_of :y, :x, :comments, :title
  validates_uniqueness_of :title

  def self.make_subjects

    # General

    Subject.find_or_create_by!(title: 'Code',                     x:  100, y:   50, comments: 'Any code, including POC, business, infra as code, tech debt', home: 1)
    Subject.find_or_create_by!(title: 'Resilience',               x: 1000, y:   50, comments: 'Failsafe: a system fails in a safe way. Resilient systems: recover their original operational state', home: 1)
    Subject.find_or_create_by!(title: 'Fragile',                  x: 1300, y:   50, comments: 'No methodology, no tests, no feedback', terminal: 1, home: 1)

    Subject.find_or_create_by!(title: 'SCM',                      x:  150, y:  150, comments: 'Distributed shared repos', url: 'https://www.thoughtworks.com/radar/tools/git', home: 1)
    Subject.find_or_create_by!(title: 'Feature Toggles',          x:  450, y:  100, comments: 'Dark launching', url: 'http://martinfowler.com/articles/feature-toggles.html', home: 1)
    Subject.find_or_create_by!(title: 'TBD',                      x:  650, y:  150, comments: 'Not doing CI unless TBD', url: 'http://paulhammant.com/2013/04/05/what-is-trunk-based-development/', home: 1)

    Subject.find_or_create_by!(title: 'Automation',               x:  200, y:  250, comments: 'Any automation, including Unit, Integration, Functional, UI, Infra', home: 1)
    Subject.find_or_create_by!(title: 'CI',                       x:  850, y:  250, comments: 'Fan-in, fan-out, packaging, promotion', url: 'https://www.thoughtworks.com/continuous-integration', home: 1)
    Subject.find_or_create_by!(title: 'Stable',                   x: 1300, y:  250, comments: 'Meh.', terminal: 1, home: 1)

    Subject.find_or_create_by!(title: 'Stories',                  x:  150, y:  350, comments: 'End to end, domain stories', home: 1)
    Subject.find_or_create_by!(title: 'TDD',                      x:  450, y:  350, comments: 'Just as agile experiments with MVP, so TDD experiments with arch. TDD Unit, integration, functional, performance, security', home: 1)
    Subject.find_or_create_by!(title: 'Emergent Arch',            x:  650, y:  350, comments: 'Last possible responsible moment.', home: 1)
    Subject.find_or_create_by!(title: 'Small batches',            x:  850, y:  350, comments: 'Reduce change sets to a minimum', home: 1)
    Subject.find_or_create_by!(title: 'AB Testing',               x:  650, y:  550, comments: 'Only if we have a feedback cycle.', home: 1)

    Subject.find_or_create_by!(title: 'MVP',                      x:   10, y:  450, comments: 'Purpose, 5-whys, Zappos', home: 1)
    Subject.find_or_create_by!(title: 'BDD',                      x:  250, y:  450, comments: 'Just as agile experiments with MVP, so BDD experiments with behaviour. Common business language, DDD', home: 1)
    Subject.find_or_create_by!(title: 'Regression',               x:  520, y:  450, comments: 'Safety-net', home: 1)
    Subject.find_or_create_by!(title: 'CD',                       x: 1000, y:  450, comments: 'end-to-end, economics', url: 'https://www.thoughtworks.com/continuous-delivery', home: 1)
    Subject.find_or_create_by!(title: 'Economical',               x: 1300, y:  450, comments: 'Economical', terminal: 1, home: 1)

    Subject.find_or_create_by!(title: 'IaC',                      x:  250, y:  550, comments: 'Infrastructure as code; Software Defined Networks, Containers', home: 1)
    Subject.find_or_create_by!(title: 'Semantic Monitoring',      x:  450, y:  550, comments: 'Business monitors like server monitors', home: 1)
    Subject.find_or_create_by!(title: 'CL',                       x: 1100, y:  550, comments: 'CL', home: 1)

    Subject.find_or_create_by!(title: 'Lean PMO',                 x:  250, y:  650, comments: 'Autonomous project teams, MVP, reduce waste', home: 1)
    Subject.find_or_create_by!(title: 'Stabilize WIP',            x:  550, y:  650, comments: 'Remove unscheduled work, work to finish', home: 1)
    Subject.find_or_create_by!(title: 'Adaptive planning',        x:  750, y:  650, comments: 'Adaptive planning', home: 1)
    Subject.find_or_create_by!(title: 'Performant',               x: 1300, y:  650, comments: 'Performant', terminal: 1, home: 1)

    Subject.find_or_create_by!(title: 'Feature Teams',            x:  100, y:  750, comments: 'Break silos, end-to-end, co-located', home: 1)
    Subject.find_or_create_by!(title: 'You build it, you run it', x:  450, y:  750, comments: 'Mindset, culture', home: 1)
    Subject.find_or_create_by!(title: 'Relinquish control',       x:  750, y:  750, comments: 'To the business', home: 1)
    Subject.find_or_create_by!(title: 'agile',                    x: 1300, y:  750, comments: 'Small a, innovate!', terminal: 1, home: 1)


    # Stories

    Subject.find_or_create_by!(title: 'Deck',                     x: 1300, y:   50, comments: 'No methodology, no tests, no feedback', stories: 1, terminal: 1, url: 'https://docs.google.com/presentation/d/1CTBOCE_X9nW4vw-wXbVe2eRn0vabxoVGwM9CcIi2yZs/edit#slide=id.p')

    Subject.find_or_create_by!(title: 'Clear goals',              x: STORY_X_OFFSET + 10, y:  350, comments: 'Strategy to achieve value proposition', stories: 1)

    Subject.find_or_create_by!(title: 'Common language',          x: STORY_X_OFFSET + 200, y:  250, comments: 'Domain language', stories: 1)
    Subject.find_or_create_by!(title: 'Business stressors',       x: STORY_X_OFFSET + 200, y:  350, comments: 'Economics', stories: 1)
    Subject.find_or_create_by!(title: 'Discussion',               x: STORY_X_OFFSET + 200, y:  450, comments: 'Story lifecyle', stories: 1)

    Subject.find_or_create_by!(title: 'Epics',                    x: STORY_X_OFFSET + 400, y:  150, comments: 'Translation of goals to high level plan', stories: 1)
    Subject.find_or_create_by!(title: 'Features',                 x: STORY_X_OFFSET + 400, y:  250, comments: 'Does not exist unless a user finds one', stories: 1)
    Subject.find_or_create_by!(title: 'Story map',                x: STORY_X_OFFSET + 400, y:  350, comments: 'Mapping of stories to epics', stories: 1)
    Subject.find_or_create_by!(title: 'INVEST',                   x: STORY_X_OFFSET + 400, y:  450, comments: 'Independent, Negotiable, Valuable, Estimable, Testable', stories: 1)
    Subject.find_or_create_by!(title: 'End to end',               x: STORY_X_OFFSET + 400, y:  550, comments: 'DoD, CFCs', stories: 1, url: 'https://docs.google.com/presentation/d/1XvPd-pKKGqpyd4IVLXUOghJqFDDIDsL9_Pc2wylEGnA/edit#slide=id.g14b2c42c09_0_0')

    Subject.find_or_create_by!(title: 'Small changes',            x: STORY_X_OFFSET + 600, y:  250, comments: 'Economics', stories: 1)
    Subject.find_or_create_by!(title: 'Right size',               x: STORY_X_OFFSET + 600, y:  350, comments: 'Story scope should be inversely proportional to business risk', stories: 1)

    Subject.find_or_create_by!(title: 'Rapid deployment',         x: STORY_X_OFFSET + 800,  y:  250, comments: 'Visible progress, CD', stories: 1, url: '/#rapid')
    Subject.find_or_create_by!(title: 'Monitoring',               x: STORY_X_OFFSET + 800,  y:  350, comments: 'Business monitors', stories: 1, url: '/#semantic')
    Subject.find_or_create_by!(title: 'Meaningful feedback',      x: STORY_X_OFFSET + 1000, y:  250, comments: 'Continuous learning', stories: 1, url: '/#cl')

    Subject.find_or_create_by!(title: 'Unbiased change',          x: STORY_X_OFFSET + 1000, y:  350, comments: 'Economics', stories: 1)


    Subject.find_or_create_by!(title: 'Flexible planning',        x: STORY_X_OFFSET + 1200, y:  350, comments: 'Pivoting', stories: 1, terminal: 1, url: '/#ap')


    # BDD
    Subject.find_or_create_by!(title: 'DDD',          x: 10, y:  350, comments: 'Common language', bdd: 1)

  end
end
