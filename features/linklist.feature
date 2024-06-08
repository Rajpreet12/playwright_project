 Feature: user landing on link list page

 Background: valid successful login functionality
    Given user is on the login page
    When enter valid username and password
    Then successful login

Scenario: user on link list page
 Given user start get button
 When user clicks on introduction and try here button
Then write codde in text editor and run button