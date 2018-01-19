Feature: Search for angular

Background: 
Given I am on the homepage

Scenario Outline: 
When I search for <term>
Then I should see <result>

Examples: 
| term    | result           |
| angular | What is Angular? |