const users=[
    {firstname: "Kaavika", lastname: "sri", age: 21},
    {firstname: "anu", lastname:"surya",age:25},
    {firstname: "priya", lastname:"dharshini",age:30},
    {firstname: "sanjana", lastname:"sri",age:10},
];
const output = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
    }
    else{
        acc[curr.age]=1
    }
    return acc;
},{});
console.log(output);
