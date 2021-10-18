# Developer notes

## Initial thinking

-   Use feature branching to show good practice
-   Use React to demonstrate knowledge of JS and componentised systems
-   Use RIC to demonstrate some original thinking around component structure
-   Use Styled components

### Extra credit if time

-   Sort / Order by
-   Filter by tag
-   Grid / List view

## Obvious components

### Tokens

-   Reset
-   Dimension
-   Color
-   Effect (If time)
-   Typography

### Arrangements

-   Heading
-   Paragraph

### Patterns

-   Card
-   Button / ButtonGroup (Could actually be Chip/Chipset)
-   Image

### Modules

-   PostList

### Pages

-   Homepage / App

## Obvious functionality

-   Axios or similar
-   Moment.js for displaying date

## Discrepencies

I'm going to list discrepencies here. I wouyld normally talk with Designers right away if possible, but in the case of this test I will make the best choices I can and flag here.

-   No device matrix or support is specified other than references in the design for iPhone 8 and 'Macbook pro' I would usually try to get this locked down, but I am assuming 320 + 375 and 1440 here
-   Typography does not match the stated size in the design. I have used the stated size as the Desktop size (Larger), and the presented size as the Mobile size (Smaller).
-   Being as there are no links decribed in the card design, I have assumed that the entire card is clickable and provide hover states. i would prefer to provide a link and have the text selectable.
-   I have made the categories as buttons, so as to provide the basis of filter functionality but I don't think I have time for this. I would prefer not to have a clickable button inside of a clickable card.
-   I've standardised spacing
