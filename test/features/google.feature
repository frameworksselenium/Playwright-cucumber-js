Feature: Google Search

  @smoke @playwright_search
  Scenario: Playwright Search from Google
    Given I open the Google homepage
    When I search for "Playwright BDD"

  @smoke @selenium_search
  Scenario: Selenium Search from Google
    Given I open the Google homepage
    When I search for "selenium"