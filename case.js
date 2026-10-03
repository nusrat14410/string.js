const school ='RAJ UK Model School';

console.log(school);
console.log(school.toLowerCase());

//Uppercase : A,B,C,D,E
//Lowercase : a,b,c,d,e

const subject = 'Maths';
const book = 'maths';

/*if(subject === book){
    console.log("Both are same");
}
else{
    console.log("Both are not same");

}*/

if(subject.toUpperCase() === book.toUpperCase()){
    console.log("Both are same");
}
else{
    console.log("Both are not same");
    
}


const str = 'water';
const pani = ' water ';

if(str === pani){
    console.log("Both are same");
}
else{
    console.log("Both are not same");
}

if(str.trim() === pani.trim()){
    console.log("Both are same");
}
else{
    console.log("Both are not same");
}