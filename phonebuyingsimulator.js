//Constants
const TAX_RATE = 0.08; // 8% Tax rate
const ACC_PRICE = 9.99; // $9.99
const PHONE_PRICE = 99.99; // $99.99

//Variables
var bank_Balance = 500;
var purchased_Phones = 0;
var purchased_Acc = 0;


//Takes an input and applies the tax rate to it.
function addTax(input){
    input = input + (input * TAX_RATE);
    return input
}


//Formats the input by adding a '$' sign and limiting decimals to '2'
function formatFinal(input){
    return ("$" + String((input.toFixed(2))))
}


while (bank_Balance > 0) {
    //Checks to see if we have enough money to purchase a phone.
    if (bank_Balance > (addTax(PHONE_PRICE))){
        console.log("You have purchased a phone!")
        bank_Balance = bank_Balance - addTax(PHONE_PRICE);
        console.log("Bank Balance: " + formatFinal(bank_Balance));
        purchased_Phones++

        //Checks to see if we have enough money to purchase a acc.
        if (bank_Balance > addTax(ACC_PRICE)){
            console.log("You have purchased an acc!")
            bank_Balance = bank_Balance - addTax(ACC_PRICE);
            console.log("Bank Balace: " + formatFinal(bank_Balance));
            purchased_Acc++
        }
    }

    //If we dont have enough breaks the loop.
    else {
        console.log("You dont have enough money to purchase anything");
        break; 
    }


}

console.log("")
console.log("Amount of phones purchased: " + purchased_Phones);
console.log("Amount of acc purchased: " + purchased_Acc);