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

