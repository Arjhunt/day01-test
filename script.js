/*  var request=new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v2/all', true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    for(i=0;i<data.length;i++){
        console.log(`ID: ${data[i].id}, NAME: ${data[i].name}, EMAIL:${data[i].email}`);
    }
    
} 
 */


var request=new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v2/all', true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    //console.log(data);
    let result=data.filter((ele)=>ele.population<100000);
    console.log(result.map((ele)=>ele.name));
    }
    