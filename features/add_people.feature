Feature: Add Peopel

    As a user I can add new employee to TinyPulse

    Scenario: Add new employee
    Given I already logged in successfully
    When I add a new employee
    Then The new employee is added succesfully