Feature: Convert Cases

    @excluded
    Scenario Outline: Convert sentence to the CamelCase
        Given a web browser is at the home page
        When the user enters '<Input>' into the area and clicks to the button '<Function>'
        Then the output '<Output>' is shown in the page

        Examples:

            | Input  | Function  | Output |
            | a b c  | CamelCase | aBC    |
            | abc    | CamelCase | abc    |
            | AbC... | CamelCase | abC    |
            | a b c  | SnakeCase | a_b_c  |
            | abc    | SnakeCase | abc    |
            | AbC... | SnakeCase | ab_c   |

