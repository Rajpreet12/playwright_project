Feature: DSALGO Login

Scenario: invalid successful login functionality
    Given user is on the login page
    When enter invalid username And password
    Then Unsuccessful login

    

Scenario: valid successful login functionality
    Given user is on the login page
    When enter valid username and password
    Then successful login

    