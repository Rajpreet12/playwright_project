Feature: Tree Page

 Background: valid successful login functionality
    Given user is on the login page
    When enter valid username and password
    Then successful login

  Scenario: Navigate to Overview of Trees and valid code in TryEditor in Tree page
    Given The user select Tree from Getstarted icon
    Then The user is directed to Tree Page
    When The user clicks on the Overview of Trees
    Then The user is directed to Overview of Trees
    When The user clicks Try Here in Tree
    Then The tryEditor box appears in Tree
    When User type code "print 'Hello'" in the tryEditor in Tree
    Then User clicks Run button and Result is printed below in Tree