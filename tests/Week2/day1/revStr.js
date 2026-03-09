let str = "Testleaf";
let rev =""

for(let i=str.length -1; i>=0; i--){
rev += str.charAt(i);
}

if(str == rev) {
    console.log( `${str} is a palindrome`)
}else {
    console.log( `${str} is not a palindrome`)
}

console.log(`rev string of ${str} is ` +rev)