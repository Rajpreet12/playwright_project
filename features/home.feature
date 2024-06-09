Feature: Functionalities in Home Page

 Background: valid successful login functionality
    Given user is on the login page
    When enter valid username and password
    Then successful login

  # Scenario Outline: Redirected to different DSALGO Page from dropdown
  #   Given The user is in the Home page after logged in
  #   When The user select "<Option>" item from the drop down menu
  #   Then The user is directed to that "<Option>" Page
  #   Examples:
  #   | Option |
  #   | Stack |
  #   | Queue |

Scenario Outline: Redirected to different DSALGO Page from getStarted
  Given The user is in the Home page after logged in
  When The user select "<DSALGO Option>" item from Getstarted icon
  Then The user is directed to that "<DSALGO Option>" Page
  Examples:
    | DSALGO Option |
    | Stack         |
    | Queue         |