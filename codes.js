//reduce functionality

/* let array=[1,2,3,4,5];
var result=array.reduce((a,b)=>a+b,100);
console.log(result);


//map function

var arr=[1,2,3,4,5]
var res=arr.map((element)=>element/3);
console.log(res)

//filter function

var arn=[1,2,3,4,5]
var resu= arn.filter((ele)=>ele%2===0);
console.log(resu) */

//example 1
/* var student=[{
    name:'alice',
    marks:60
   },{
    name:'bob',
     marks:70
    },{
    name:'mark',
    marks:80
   }];
   
    var result=student.filter((ele)=>ele.marks>60);
   console.log(result.map((ele)=>ele.name)); */

 /*   var resturant={
       place:'chennai',
       starters:['chicken 65', 'baby corn', 'mushroom fry'],
       maindish: ['pulav','briyani','mini meals'],
       order: function(startIndex, endIndex){
        return[this.starters[startIndex],this.maindish[endIndex]]
       }
   };
   //console.log(resturant.starters)

   const[x,y,z]=resturant.maindish;
   console.log(x,y,z)

   let[start, , end]=resturant.starters;
 // console.log(end,start);
  // [start,end]=[end,start];
 // console.log(start,end);

 
  const temp=start;
   start=end;
   end=temp;
   console.log(start,end);

  
   console.log( resturant.order(2,0))
   */
   
  /*  var resturant={
    place:'chennai',
    starters:['chicken 65', 'baby corn', 'mushroom fry'],
    maindish: ['pulav','briyani','mini meals'],
    openingHours: {
        thurs:{
            open:12,
            close:22,
        },
        fri:{
            open:10,
            close:23,
        },
        sat:{
            open:9,
            close:20,
        },
    },
    order: function(startIndex, endIndex){
     return[this.starters[startIndex],this.maindish[endIndex]]
    }
    
};

const {place, maindish, openingHours}=resturant;
//console.log(place, maindish, openingHours);

const{place:idam,maindish:unavu,openingHours:neram}=resturant;
console.log(idam,unavu,neram);
const{menu=[],starters:starterMenu=[]}=resturant
console.log(menu,starterMenu); */

/* const jones={
    place:'chennai',
    birthyear:1994,
    let age: agecalc=>{
    console.log(2022-birthyear);
    }
}
age(1994); */

var resturant={
    place:'chennai',
    starters:['chicken 65', 'baby corn', 'mushroom fry'],
    maindish: ['pulav','briyani','mini meals'],
    order: function(startIndex, endIndex){
     return[this.starters[startIndex],this.maindish[endIndex]]
    },
    orderPasta: function(ing1,ing2,ing3){
        console.log(`here is the delicious pasta with ${ing1},${ing2},${ing3}`);
    }
};

/* const ingredients=[prompt("ingredient1"),prompt("ingredient2"),prompt("ingredient3")];
resturant.orderPasta(...ingredients); */

let res={founder:"arjhun",...resturant};
console.log(res);
res.name="arjhuntres";
console.log(res.name);

const [pulav,briyani, ...otherarr]=[...resturant.maindish, ...resturant.starters,];
console.log(pulav,briyani,...otherarr);