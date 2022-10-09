@feature
Feature: Get Started section validation

    Scenario: UI validation for How Helpers world work on click on Create a Profile
        Given I am on Home page
        Then Header text "Get started" for section "Get Started" should get displayed
        When I click on "Create a Profile" option under get started
        Then User navigates to How helpers world works Page
        And Points for "Step 1. Create a Profile" section should get displayed
        And Points for "Step 2. Search Job" section should get displayed
        And Points for "Step 3. Make Contact" section should get displayed
        And Points for "Step 4. Have an agreement." section should get displayed
        And Points for "Step 5. Prepare for a start" section should get displayed

    Scenario: UI validation for How Helpers world work on click on Search Job
        Given I am on Home page
        Then Header text "Get started" for section "Get Started" should get displayed
        When I click on "Search Job" option under get started
        Then User navigates to How helpers world works Page
        And Points for "Step 1. Create a Profile" section should get displayed
        And Points for "Step 2. Search Job" section should get displayed
        And Points for "Step 3. Make Contact" section should get displayed
        And Points for "Step 4. Have an agreement." section should get displayed
        And Points for "Step 5. Prepare for a start" section should get displayed

    Scenario: UI validation for How Helpers world work on Make contact
        Given I am on Home page
        Then Header text "Get started" for section "Get Started" should get displayed
        When I click on "Make contact" option under get started
        Then User navigates to How helpers world works Page
        And Points for "Step 1. Create a Profile" section should get displayed
        And Points for "Step 2. Search Job" section should get displayed
        And Points for "Step 3. Make Contact" section should get displayed
        And Points for "Step 4. Have an agreement." section should get displayed
        And Points for "Step 5. Prepare for a start" section should get displayed

    Scenario: UI validation for How Helpers world work on Have an agreements
        Given I am on Home page
        Then Header text "Get started" for section "Get Started" should get displayed
        When I click on "Have an agreement" option under get started
        Then User navigates to How helpers world works Page
        And Points for "Step 1. Create a Profile" section should get displayed
        And Points for "Step 2. Search Job" section should get displayed
        And Points for "Step 3. Make Contact" section should get displayed
        And Points for "Step 4. Have an agreement." section should get displayed
        And Points for "Step 5. Prepare for a start" section should get displayed


    Scenario Outline:  Verify whether on click of "<type>" user navigates to "<page>" page
        Given I am on Home page
        Then Header text "Get started" for section "Get Started" should get displayed
        When I click on "Create a Profile" option under get started
        Then User navigates to How helpers world works Page
        When User clicks on "<type>" button
        Then Header text "<page>" for section "<type>" should get displayed
        Examples:
            | type                                | page                   |
            | Register as an employer/Host family | Employer/host family   |
            | Register as a Job Seeker            | Jobseeker Registration |
            | Register as an Agency               | Agency Registration    |