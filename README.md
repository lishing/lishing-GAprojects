# Husband Helpers
## Introduction
Built for husbands to weather the storm during Covid-19 quarantine.
![alt text] {https://lh3.googleusercontent.com/proxy/pow_LsojMKsjwTLzchcrAmrH21_f9oa4H3QBQkzCWlBPvg3mxDg2GUchNO-qcL00bXdpnORyKRBsIFl1cxf030AxfF7N-M3hMkrar9YsAUxhiU306mInGMRD "Husbands Shopping for Wives)
This is also built for people who are new to cooking, and need ideas for home-cooked food. This place will display recipes and ingredients in grocies list.

## Project Scope and Approach
1. Define a problem statement faced by most work-from-home individuals, couples and families
2. Drafted a layout of the app with basic functions like instructions, buttons, recipe links, as well as display of groceries
3. Understand how recipe API works with AJAX from the data structure
4. Make flexbox work for each section

## Technology utilized
1. HTML and CSS
2. jQuery to manipulate DOM elements
3. AJAX to call and fetch data from open source APIs
4. Javascript for the loop logic
5. Flexbox to make website responsive

## Learnings
I find it hard to refactor the code into higher-order functions. A lot of dependencies on parameters that is defined within the loop.

Updated: HOF now works. Deeper understanding of parameters and arguments, amended the code and fixed the initial problems

## User Journey
### User Journey 1
As a user, I should first be able to know how to navigate the page. <br />
**Requirement**<br />
1. Add modal
2. Add open and close button<br />

### User Journey 2
Then, I will need to input the desired dish.<br />
**Utilized APIs**<br />
- https://developer.edamam.com/recipe-database-licensing

**Requirement**<br />
1. Input bar to get the keywords of the dish
2. With the keyword, the first three recipes will be displayed as cards
3. The cards should be able to have 2 buttons: direct users to the link of the recipe, and add ingredients into "Groceries List"

### User Journey 3
With the selected recipe, I should be able to put the ingredients into to-do list<br />
**Utilized APIs**<br />
- https://developer.edamam.com/recipe-database-licensing

**Requirement**<br />
1. Transform ingredients data into to-do: display all ingredients as to-do
2. I should be able to delete the ingredients when see fit
3. Once done, I should be able to know

**Wishlist** <br />
1. Change to-do list via calendar (change to-do list to .cal) for grocery shopping
2. There should be a timer as reminder to consume purchased groceries within 2 weeks.
3. The layout can be better, when all elements are displayed in one-screen. When clicked, it should be able to enlarge as a modal

**Limitations**<br />
1. Flexbox was not optimized fully for the sections



