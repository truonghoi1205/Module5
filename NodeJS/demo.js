const arr = [1, 2, 4, 3];
const max = arr.reduce((temp, currentValue) => temp > currentValue ? temp : currentValue);
console.log(max); 


// const sum = (...a) => {
//     console.log(a);
// }
// sum(1,2,4,5,11111111111111,"a");


// const arr1 = [1,2]
// const arr2 = [...arr1, 3,4 ]
// console.log(arr2);


// const obj= {
//     id: 1,
//     name: "Hoi"
// };

// const newObj = {
//     id: 2,
//     address: "ĐN"
// };

// const obj1 = {...obj, ...newObj};
// // ghi đè
// console.log(obj1);
// // tách mảng
// const arr = [1,2,3]
// const [a,b,c] = arr;
// console.log(a,b,c);
// // tách đối tượng

// let {id, name} = obj;

