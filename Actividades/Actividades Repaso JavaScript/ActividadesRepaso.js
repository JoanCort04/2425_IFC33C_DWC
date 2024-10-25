/*
1. Print all even numbers from 0 – 10
Try to make the solution to this problem as efficiently as possible. 
Consider using loops that would allow you to type the fewest characters/commands. 
While you could simply print the even numbers, get creative and see how you could output them 
in a way that would work up to 10 or even up to 10,000 with little extra effort.
*/

function imprimeixNúmeros() {
    for (let num = 0; num <= 10000; num++) {
        console.log(num);
    }
}
// imprimeixNúmeros();

/*
2. Print a table containing multiplication tables

Let’s start with the tables that many of us had to memorize in school. 
Can you print a table that contains all the answers to the multiplication tables from 1 through 10?
Like Challenge #1, can you create an efficient solution that you could easily expand should you need the 12 times table?
*/

function imprimeixTabla() {
    
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            resultat = "Mutliplicació " +i+" per "+j+ " és: "+ i*j ;
            console.log(resultat);
    }
}
}
// imprimeixTabla();


/* Creating a function is a skill that’ll be useful in many settings, and as you progress,
you’ll be working on much more complicated functions than this one. 
But a function that converts units of measure can be pretty handy in multiple professions and industries.
Let’s start with a conversion from kilometers to miles. The function should include the 
input in kilometers and return the answer in miles. */

function convertirKilometresAMilles(input) {
    let resultat = input * 0.621371;
    console.log(resultat);
}

/*You can create your own array of numbers but consider 
trying this problem with a few different sets to verify your solution. 
Have one array with negative and positive numbers and another with integers and decimals.
You could also try using arrays of different lengths. 
If you’re feeling comfortable with this, try the slightly more challenging bonus challenge below.
Bonus intermediate challenge: Create a function that can return the sum of a particular column or row number in a table.*/

function contarArray(){
        array1 = [1, 2, 3, 4, 5, -6, 7];
        array2 = [1, 2, 3.5, -4.5, -5.7, 6, 7];
        let matriu = [
            [1, 2, 3], 
            [4, 5, 6], 
            [7, 8, 9]   
        ];
        let suma = 0; 
        let suma2 = 0;
        let suma3 = 0;

        for (let i in array1){
            suma = suma + array1[i];

        }
        for (let i in array2){
            suma2 = suma2 + array2[i];

        }
        
        for (let fila of matriu) {
            let i = 0;
            suma3 = suma3 + fila[i];  
            i++;               
        }


        console.log(suma);
        console.log(suma2);
        console.log(suma3);
}
contarArray();