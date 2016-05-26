Feature:
  As a presenter
  I want to have an interactive page
  So that I can move from subject to subject

  Scenario: Having a web page with a graphic for a subject
    When I navigate to the home page
    Then I see an object labelled "Code"

  @selenium
  Scenario: Clicking on an object
    Given I am on the home page
    When I click on the object labelled "Code"
    Then I see its associated text
