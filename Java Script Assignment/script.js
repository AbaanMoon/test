// Q1
alert("Welcome to our webste");

// Q2
document.write("Error! Please Enter Correct Password");

// Q3
document.write("Welcome to this website \n Abaan Moon's Website");

// Q4
alert("I study in Bano Qabil 3.0");
alert("I am doing Website Development-1");
alert("This is my Javascript Assignment");

// Q5
// Done in other assignment attached

// Q6
// Done in other assigment attached

// Q7
var username;

// Q8
var myname = "Abaan Moon";

// Q9

// (a)
var message;

// (b)
message = "Hello World";

// (c)
alert(message);

// Q10
var naamee = "Abaan Moon"
var grade = "Class 10"
var course = "Website Development-1"
var personal_information = naamee + grade + course
alert("Hi, my name is \n" + naamee)
alert("I study in \n" + grade)
alert("Iam doing a course of \n" + course)
alert("My information: \n" + personal_information)

// Q11
var email = "AbaanMoon@outlook.com"
alert("My email adress is \n" + email)

// Q12
console.log(email);

// Q13
var emoji = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(emoji)
console.log(emoji)

// Q14
var age = "Age: 14"
alert(age)

// Q15
var count = +prompt("How many times have you visited this website")
console.log("user visited this website " + count + " times.")
alert("You have visited this website " + count + " times.")

// Q16
var birthyear = "10th January, 2010"
console.log(birthyear)

// Q17
alert("Welcome to Moon Clothing")
var vis_name = prompt("What is your name?")
var product = prompt( vis_name + " ,what type of clothing do you want?")
var color = prompt( vis_name + " ,what color do you want of the " + product + "?")
var quantity = +prompt( vis_name + " ,how many " + color + "-" + product + " do you want?")
var confirmation = prompt( vis_name + " ,your final order is " + quantity + "-" + color + "-" + product + " \n Is that ok?")
if (confirmation === "yes"){
    alert("Your order is confirmed.")
    console.log( vis_name + "'s order confirmed of " + quantity + "-" + color + "-" + product + ".")
}else if (confirmation === "Yes"){
    alert("Your order is confirmed.")
    console.log( vis_name + "'s order confirmed of " + quantity + "-" + color + "-" + product + ".")
}
else {
    alert("Your order is not confirmed")
    console.log( vis_name + "'s order not confirmed of " + quantity + "-" + color + "-" + product + ".")
}

// Q18
// var x= hi, y= hello, z=hay

// Q19

// Legal Variables

// (a)
// var first_name

// (b)
// var myname

// (c)
// var $yourName

// (d)
// var name123

// (e)
// var _hi

// Illegal Variables

// (a)
// var 1name

// (b)
// var 2-names 

// (c)
// var class

// (d)
// var var

// (e)
// var my name

// Q20

// (a)
console.log("RULES FOR NAMING JS VARIABLES")

// (b)
console.log("Variable names can only contain dollar signs, letters (both uppercase nad lower case), underscore, digits (not at the starting of the variable).")

// (c)
console.log("Variables must begin with a dollar sign, underscore, letter.")

// (d)
console.log("Variable names are case sensitive.")

// (e)
console.log("Variables should not be JS reserved words.")

// Q21
var num1 = +prompt("Enter first number for addition.")
var num2 = +prompt("Enter second number for addition.")
var total1 = console.log(num1 + num2)

// Q22
var num11 = +prompt("Enter first number for multiplication.")
var num22 = +prompt("Enter second number for multiplication.")
var total2 = console.log(num11 * num22)

var num111 = +prompt("Enter first number for division.")
var num222 = +prompt("Enter second number for division.")
var total3 = console.log(num111 / num222)

var num1111 = +prompt("Enter first number for subraction.")
var num2222 = +prompt("Enter second number for subraction.")
var total4 = console.log(num1111 - num2222)

var num11111 = +prompt("Enter first odd number form modulus.")
var num22222 = +prompt("Enter second odd number for modulus.")
var total5 = console.log(num11111 % num22222)

// Q23

// (a)
var num;

// (b)
console.log("Value after variable decleration is: " + num)

// (c)
num = 15

// (d)
console.log("Intial value of the variable: " + num)

// (e)
num++

// (f)
console.log("Value of variable after increment: " + num)

// (g)
num += 7

// (h)
console.log("Value of variable after addition: " + num)

// (i)
num--

// (j)
console.log("Value of variable after decreament: " + num)

// (k)
var remainder = num % 3

// (l)
console.log("remainder after dividing 22 by 3: " + remainder)

// Q24
var price = 600
var total_price = price * 5
console.log("The total price for 5 tickets is " + total_price + "rs")

// Q25
var m = 2
console.log("2x1: " + m*1)
console.log("2x2: " + m*2)
console.log("2x3: " + m*3)
console.log("2x4: " + m*4)
console.log("2x5: " + m*5)
console.log("2x6: " + m*6)
console.log("2x7: " + m*7)
console.log("2x8: " + m*8)
console.log("2x9: " + m*9)
console.log("2x10: " + m*10)