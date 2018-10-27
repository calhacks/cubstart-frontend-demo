/* This is a JavaScript function. JavaScript functions
 *  are a lot like functions in other languages like Python,
 *  but written differently, with the "function" keyword and
 *  curlybraces instead of the "def" keyword and a colon, like in Python.
 *
 * This is a function that calculates a tip
 *  based on the amount of price and percentage
 *  specified in the HTML input elements.
 */
function calculateTip() {

    // These lines define variables price_input and percent_input
    //  by looking for HTML elements with id="price"
    //  and id="percent"
    let price_input = document.querySelector('#price');
    let percent_input = document.querySelector('#percent');

    // These lines define price and percent as variables,
    //  by looking up the "value" attribute of the input
    //  fields in HTML, and converting them to floats. This
    //  is what the user types into these input fields.
    let price = parseFloat(price_input.value);
    let percent = parseFloat(percent_input.value);

    // check if price and percent are both defined properly
    if (price && percent) {
        // calculate tip based on percent and price
        //  and round to 2 decimal places (.toFixed(2))
        let tip = (price * (percent / 100)).toFixed(2);
        let total = (price * (1 + percent / 100)).toFixed(2);

        /* Show an alert box with the result
         *
         * window.alert is a function that's built-in into JavaScript
         *  in web browsers (it's a method of the "window" object).
         *  the window.alert method opens an alert box in the browser */
        window.alert(`A ${percent}% tip on $${price} is $${tip}! The total is $${total}.`);
    } else {
        // Throw an error message up in an alert box
        window.alert('Please enter a valid price and percentage');
    }

}

// This line finds an element with id="submit"
//  and sets it equalto the varialbe submit_button.
let submit_button = document.querySelector('#submit');

// This line adds an "event listener" that will run
//  every time someone "clicks" a button.
//
// The function that will run is called "calculateTip",
//  as we defined above.
submit_button.addEventListener('click', calculateTip);

