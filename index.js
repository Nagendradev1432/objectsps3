function getbudget(arr){
    sum=0
    for(i of arr){
      sum=sum+i.budget

    }
         console.log(sum)
}
let arr=[ { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]
getbudget(arr)


output:65700


let rows=5
for(i=1;i<=2*rows-1;i++){
    cols=(i<=rows)?i:2*rows-i;
    spaces=(i<=rows)?2*rows-(i*2)-1:2*i-(2*rows)-1;
    spaces=(spaces<0)?0:spaces;
   res=""
   for(j=1;j<=cols;j++){
       if(j%2==0){
           res=res+"0 "
       }
       else{
           res=res+"1 "
       }

   }
   if(i==rows){
    console.log(res+res.slice(2,res.length-1));
    
   }
 else{
    console.log(res+"  ".repeat(spaces)+res)
 }
  
}
1               1 
1 0           1 0 
1 0 1       1 0 1 
1 0 1 0   1 0 1 0 
1 0 1 0 1 0 1 0 1
1 0 1 0   1 0 1 0 
1 0 1       1 0 1 
1 0           1 0 
1               1 