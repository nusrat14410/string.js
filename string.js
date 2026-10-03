//Array is mutable.you can change the array elements.
let number =[1,2,3,4,5,6];
console.log(number);
number[2] =10;
console.log(number);

//String is immutable.you can't change the string elements.
let name = "John";
console.log(name);
name[0] = "M";
console.log(name); // It will still print "John" because strings are immutable.