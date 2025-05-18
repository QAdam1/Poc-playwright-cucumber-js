@dev @preprod @nightly @login

Feature: Login Flow

    As a registered user
    I want to log in to my account
    So that I can access my personal dashboard

    Scenario: Successful login with valid credentials
        Given I am on the Magento login page
        When I enter a valid email and password
        And I click the "Sign In" button
        Then I should be redirected to my account dashboard
        And I should see a welcome message

    Scenario: Unsuccessful login with invalid credentials
        Given I am on the Magento login page
        When I enter an invalid email or password
        And I click the "Sign In" button
        Then I should see an error message indicating invalid login or password

    Scenario: Login with empty fields
        Given I am on the Magento login page
        When I leave the email and password fields empty
        And I click the "Sign In" button
        Then I should see validation messages for required fields