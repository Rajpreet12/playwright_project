Feature: Stack Page

 Background: valid successful login functionality
    Given user is on the login page
    When enter valid username and password
    Then successful login
    

   Scenario Outline: Navigate to Sub Modules and valid code in TryEditor in Stack page
     Given The user select stack from Getstarted icon
     Then The user is directed to Stack Page
     When The user clicks on the "<Sub Titles>" in Stack link
     Then The user is directed to "<Sub Titles>" in Stack Page
     When The user clicks Try Here in stack
     Then The tryEditor box appears in stack
     When User type code "print 'Hello'" in the tryEditor
     Then User clicks Run button and Result is printed below
     Examples:
         | Sub Titles | 
         | Operations in Stack| 
         | Implementation| 
         | Applications| 
    
   Scenario Outline: Navigate to  Sub Modules  and In_valid code in TryEditor in Stack page
     Given The user select stack from Getstarted icon
     Then The user is directed to Stack Page
     When The user clicks on the "<Sub Titles>" in Stack link
     Then The user is directed to "<Sub Titles>" in Stack Page
     When The user clicks Try Here in stack
     Then The tryEditor box appears in stack
     When User type code "x=x+1" in the tryEditor
     Then User clicks Run button and Error alert message is displayed and accepted
     Examples:
          | Sub Titles | 
         | Operations in Stack| 
         | Implementation| 
         | Applications|