Feature:
  As a presenter
  I want to have an interactive page
  So that I can move from subject to subject

  Background:
    Given I have subjects
    When I navigate to the home page

  Scenario: Having a web page with a graphic for a subject
    Then I see an object labelled "MVP"

  Scenario: Having a web page with all subjects displayed
    Then I see all my presentation's subjects

  Scenario: Clicking on an object shows its connections
    When I select "MVP"
    Then I see its connections

  Scenario: Clicking on an object shows far connections as dimmed
    When I select "CL"
    Then I see its far connections as dimmed

