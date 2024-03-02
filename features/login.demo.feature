Feature: Test Login Functionality

  Scenario: check login with valid credentials
    Given user is on login page
    When user login with username and password
    Then user should navigate to products page
