
let title =document.querySelector(".tit")
let turn = 'x';
let sqaures=[]

function end(num1,num2,num3){

   title.innerHTML=`${sqaures[num1]} winner`
   document.getElementById('item'+num1).style.background = 'black'
   document.getElementById('item'+num2).style.background = 'black'
   document.getElementById('item'+num3).style.background = 'black'

   setInterval(function(){
      title.innerHTML +='.'
   },1000)
   setTimeout(function(){
      location.reload()
     },4000)
}


function winner(){
  for(i=1;i<10;i++){
 sqaures[i] = document.getElementById("item"+i).innerHTML
  } 
  if(sqaures[1]==sqaures[2]&&sqaures[2]==sqaures[3]&&sqaures[1]!=""){
   end(1,2,3)
  }
  
 else if(sqaures[4]==sqaures[5]&&sqaures[5]==sqaures[6]&&sqaures[4]!=""){
   end(4,5,6)
}
else if(sqaures[7]==sqaures[8]&&sqaures[8]==sqaures[9]&&sqaures[7]!=""){
   end(7,8,9)
}
else if(sqaures[1]==sqaures[4]&&sqaures[4]==sqaures[7]&&sqaures[1]!=""){
   end(1,4,7)
}
else if(sqaures[2]==sqaures[5]&&sqaures[5]==sqaures[8]&&sqaures[2]!=""){
   end(2,5,8)
}
else if(sqaures[3]==sqaures[6]&&sqaures[6]==sqaures[9]&&sqaures[3]!=""){
   end(3,6,9)
}
else if(sqaures[1]==sqaures[5]&&sqaures[5]==sqaures[9]&&sqaures[1]!=""){
   end(1,5,9)
}
else if(sqaures[3]==sqaures[5]&&sqaures[5]==sqaures[7]&&sqaures[3]!=""){
   end(3,5,7)

}

}


function game(id){
   let item=document.getElementById(id)
   if(turn==='x' && item.innerHTML ==""){
      item.innerHTML='x';
      turn = 'o';
      title.innerHTML = "o";

   }else if(turn==="o" && item.innerHTML==""){
      item.innerHTML='o';
      turn = "x";
      title.innerHTML = "x"
   }
  winner()
}
