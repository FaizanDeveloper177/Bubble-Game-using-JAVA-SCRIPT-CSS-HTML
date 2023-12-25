var timer  = 60 ;
var Score = 0 ;
var rannum = 0 ;
function increaseScore(){

  Score += 10 ;
  document.querySelector("#scorevalue").textContent= Score ;

}


//  calling a function  
function  makebubbles(){
  var clutter = " ";
for (var i=1; i<=91; i++){
 var rn =  Math.floor(Math.random()*10);
   clutter += ` <div class="bubbles">${rn}</div> `;
}
document.querySelector("#panelbottom").innerHTML= clutter ;

}

makebubbles();

function runtimer(){
   var timerint = setInterval(function(){
    if ( timer>0 ) {
      timer-- ;
    document.querySelector("#timerval").textContent= timer 
   }
   else {
    clearInterval(timerint);
    document.querySelector("#panelbottom").innerHTML=`<h1>Game Over</h1>
    
     <h1>  Score : ${Score} </h1>`;

   }
    
  },1000)
}
runtimer();
function getNewHit(){
    rannum = Math.floor(Math.random()*10);
   document.querySelector("#hitvalue").textContent= rannum ;



}
 getNewHit();
 document.querySelector("#panelbottom").addEventListener("click",function(detail){
    var clickednumber = Number(detail.target.textContent) ;
    if ( clickednumber===rannum ){
      increaseScore() ;
      makebubbles() ;
      getNewHit() ;
    }});
//   Number() this is a method that is used to convert stringnumber into number 
//  a lot a differ between strnumber  and real number 
//  we  will used this method Number() to convert string into number 
//   calling a function  in java script 
//  detail is variable that store all information of targeted  element 