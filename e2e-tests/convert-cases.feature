Feature: Convert Cases

    Scenario: Convert sentence to the CamelCase
        Given a web browser is at the home page
        When the user enters 'Camel likes sand' into the area and clicks to the button 'CamelCase'
        Then the output 'camelLikesSand' is shown in the page

    Scenario: Convert sentence to the SnakeCase
        Given a web browser is at the home page
        When the user enters 'Snake likes apples' into the area and clicks to the button 'SnakeCase'
        Then the output 'snake_likes_apples' is shown in the page