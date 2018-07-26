### Set Up

To get started, clone this repo. Once that is complete, cd into ‘summing-grid’ and run yarn install and then yarn start. The app should start running on http://localhost:3000.

Your task will be to create a 1x4 flexible grid. The first 3 spaces in the grid should contain input fields that accept numbers. The 4th space in the grid will display the sum of the numbers in the first 3 spaces.

### The grid

The grid should have 1 row and 4 columns. The width of each column should be 25% of the window size. This width must be maintained even if the page is resized. The border of the grid must be 1px black.

Perform the following operations based on the value of window size:

If the window size is less than 720px, then the 1x4 flexible grid becomes a 2x2 grid, that is, the 3rd and 4th columns slide down onto the 2nd row.
If the window size is less than 360px, then the 1x4 flexible grid becomes 4x1 grid, that is, each column slides under the one before it. The 2nd column slides under the 1st, the 3rd slides under the 2nd, and the 4th slides under the 3rd.

### The input fields

The first 3 input fields should each accept a number. Then write code which sums the 3 numbers together and displays the sum in the 4th field. Then write code which formats the sum to the nearest 3 digit number (e.g. 1234567 as 1.23M or 123456 as 123K).

### Extra Credit

Add validation to the input fields to ensure that the entered values are numbers. Also ensure that entering non-number values does not break the other functionality or cause any errors.

Add some unit tests (you may want to install additional node modules).
