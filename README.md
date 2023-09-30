# Calculator Project

##### Many thanks to Brian Holt for creating this project!!

## Project Description

We are going to rebuild the calculator using JavaScript! If you're not a big calculator user, here is [our finished product](https://ac-calculator-solution.surge.sh/).

Let's go over the requirements:

1. Open the HTML file in your browers and take a look at the HTML and CSS files for the calculator.
2. Once you're done, the calculator should function like a normal calculator .
3. Do not implement % or .. You can assume everything will be an integer.
4. C means clear. When a user clicks it, it should clear everything and go back to the first state it was in when the page loaded.
5. Doing the back arrow is extra credit. It's like pressing backspace; it'll delete the last character typed. If it's clicked when there's only one digit, it sets the current number to be 0.
6. Don't worry about if the number is too long for the screen.
7. Calculators tend to have some special behavior when you hit equals: if you type another number it erases the results and starts over. Feel free to do that but also free free (like me) to just treat it normally and make the user hit C if they want to clear it.

Here are the features of our calculator, expressed as user stories:

- When loading or reloading the app, the user can see a display (the "screen") that starts with a 0 on it.
- The user can click a number key and see the number on the screen, replacing the initial 0.
- The user can enter multi-digit numbers on the keypad and see them on the screen.
- The user can enter a number, `+`, another number, then `=` and see the correct addition result.
- The user can enter a number, `-`, another number, then `=` and see the correct subtraction result.
- The user can enter a number, `x`, another number, then `=` and see the correct multiplication result.
- The user can enter a number, `÷`, another number, then `=` and see the correct division result _rounded to the nearest integer_.
- When the user clicks the clear key, the number on the screen is removed.
- When the user clicks the clear key, they see a default number `0` on the screen.
- When the user clicks the clear key during a calculation in progress, the full state is reset—when they push `=`, the screen should still say `0`.

You can see [a deployed version of the app here](https://ac-calculator-solution.surge.sh/) to get a sense of how it should work.

## Setup

1. Fork and clone this repository.
2. Run Live Server in VS Code to see the app in the browser.
3. Add a script tag to the HTML file. Don't forget the `defer` attribute!

