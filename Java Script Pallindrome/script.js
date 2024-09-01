var input = prompt("Check If This Is A PALINDROME ")
var change = input.toLowerCase(); 
console.log(change);
var array1 = []
var array2 = []
for ( var one = change.length-1; one>= 0; one--){
    array2.push(change[one])
    console.log(array2)
}
var pallindrome = true
console.log("main", change);
console.log("reverse", array2);
for(var two = 0; two < change.length; two++  ) {
    if (change[two] !== array2[two]) {
        pallindrome = false;
        break;
}
}
if (pallindrome) {
    document.write("It is a Palindrome");
} else {
    document.write("It is not a Palindrome");

}