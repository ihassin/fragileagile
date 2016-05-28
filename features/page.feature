Feature:
  As a presenter
  I want to have an interactive page
  So that I can move from subject to subject

  Background:
    Given I have subjects
    When I navigate to the home page

  Scenario: Having a web page with a graphic for a subject
    Then I see an object labelled "Code"

  Scenario: Having a web page with all subjects displayed
    Then I see all my presentation's subjects

  @selenium
  Scenario: Clicking on an object
    When I select "MVP"
    Then I see its connections

