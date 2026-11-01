import { Component } from '@angular/core';

@Component({
  selector: 'app-js',
  imports: [],
  templateUrl: './js.html',
  styleUrl: './js.css',
})
export class Js {

ngOnInit(){
   const arr = [0, '',2,3,5,46,8,5,4,2,38,0];
const users = [
  { id: 'one', name: "Ali" },
  { id: 'two', name: "Sara" },
];

// const redu = users.reduce( (acc, item)=> {
//   const key = item.id;
//   const  val = item.name;
//     acc[key] = item;
//     return acc;
// },{});
// console.log(redu);

  //  const arrRed = arr.reduce( (acc,val)=>{ return acc + val},arr[0]);
  //  console.log(arrRed);
  //  function isPalin(str:any){
  //   return str.toLowercase() == str.toLowercase().split('').reverse().join('');
  //  }
  //  console.log(isPalin("Ahmed"));
  //  console.log(isPalin("Malayalam"));
// function findMaxDiff(arr:any){
//    if( arr.length < 2){
//     return 0;
//    }
//    let minVal = arr[0];
//    let maxVal = arr[0];
//    for(let i =1;i<arr.length;i++){
//     if( arr[i] < minVal){
//       minVal = arr[i]
//     }
//     else if( arr[i] > maxVal ){
//         maxVal = arr[i]
//     }
     
//    }
//    return maxVal - minVal;
  
// }
// console.log(findMaxDiff(arr));


// function maxVal(arr:any){
//   if( arr.length <  2){
//       return 0;
//   }
//   else{
//     let maxVal = arr[0];
//     for( let i of arr){
//       if(arr[i] > maxVal){
//         maxVal = arr[i];
//       }
//     }
//     return maxVal;
//   }
// }

// console.log(maxVal(arr));

// console.log(Math.min(...arr));
// console.log(arr.sort( (a,b)=> b -a ));
// let filetrArr = arr.filter( ( item,index,arr)=>{
//   return arr.indexOf(item) == index
// });

// console.log(filetrArr);
// function factorial(n: any): any {
//   if( n === 0){ return 1};
//   return n * factorial( n -1);
// }
// console.log(factorial(4));
// function falsyFun(arr : any){
// return arr.filter(Boolean)
// }

// console.log(falsyFun(arr));

}

}
