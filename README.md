# Check Mate App

## Description

This is my capstone project that calculates tips and splits bills.

## Author

Katarina Andrews - [crumbcrumb](https://github.com/crumbcrumb)

## Features

- **Two Interactive Calculators**  
  The app contains two sections:

  - **Tip Calculator**
  - **Bill Splitter**

- **Flexible User Input**

  - The first input in each section accepts numbers with or without decimals (representing a monetary value).
  - All calculations handle decimal formatting appropriately.

- **Smart Tip Selection**

  - The second input in the Tip Calculator is a dropdown menu with percentage values ranging from **5% to 95%**.
  - Calculates the tip by multiplying the bill amount by the selected percentage.

- **Dynamic Bill Splitting**

  - The second input in the Bill Splitter takes a number representing how many ways to split the bill.
  - If a decimal is entered, it will automatically **round down** to the nearest whole number (e.g., `10.7 → 10`).
  - Calculates the amount per person by dividing the bill by the number of people.

- **Read-Only Results Display**

  - Each section has a third, read-only input that displays the result of the calculation when the button is pressed.
  - Prevents user tampering while clearly showing the output.

- **Audio Feedback on Success**
  - A sound plays when a valid calculation is made.
  - If any input is invalid (e.g., empty, non-numeric, or zero), the audio does **not** play and an error message is shown instead.

## Credit

- Background image by [Adrien Olichon](https://unsplash.com/@adrienolichon?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/@adrienolichon?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)

- Audio by [kiddpark](https://freesound.org/people/kiddpark/) on [Freesound](https://freesound.org/people/kiddpark/sounds/201159/)
  - License: [Attribution 4.0](https://creativecommons.org/licenses/by/4.0/)

## Technologies Used

- HTML
- Bootstrap
- CSS
- Javascript
- Git
- GitHub
