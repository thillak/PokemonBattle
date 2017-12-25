//Human's Health
var health1 = 63;
//Opponents Health
var health2 = 63;
//Moves
var thunder = 7;
var sharpen = 3; 
var scratch = 3;
var tailwhip = 5;
//# times moves can be used
var ppthunder = 5;
var pptailwhip = 10;
var ppsharpen = 10;

//Player Turn 
var turn = false;

 
//sharpen move not LEER
$( ".leer" ).click(function() {
 //Checks if the moves ran out of PP
   if(ppsharpen > 0) {
        ppsharpen -=1;  
     $('#ppsharpen').text(ppsharpen);  
     
  tailwhip += sharpen;
  thunder += sharpen;
  scratch +=sharpen;
   $('.Prepare').text('Pikachu used Sharpen.');
   $("#attackHome").addClass("attackHomes");
	 $("#attackHome").removeClass("attackHome");
	 $("#attackHome").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100);
         //this hide the battle MOves  Class Class("hide");
     $(".PP").addClass("hide");     
     $(".TL").addClass("hide");
     $(".TR").addClass("hide");
     $(".BL").addClass("hide");
     $(".BR").addClass("hide");
     $(".leer").addClass("hide");
     $(".tailwhip").addClass("hide");
     $(".scratch").addClass("hide");
     $(".thunder").addClass("hide");  
       turn = !turn;
  //VARIABLE TO STOP THE CPU WHEN HEALTH = 2 
          if (health2 <= 0) {
          $("#endtext").removeClass("hide");
          $("#endtext").addClass("end");
          document.getElementById('bar1').style.width = 0 + "px";
           $('.Prepare').text('Pikachu won!');
 }  
  //IF TURN FOR CPU
if (turn === true) {
   

    setTimeout(cpu, 2200)
            function cpu() {
                    //This adds the attacking image  
    	$("#attackOpp").addClass("attackOpponent");
		$("#attackOpp").removeClass("attackOpp");
		$("#attackOpp").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100);
                  //Variable for randomize the damage    
               health1 -=  Math.floor(Math.random() *8.5) + 4;  ;
   document.getElementById('bar2').style.width = health1 + "px";
           //Operator to check if it goes below zero
  
           //CHANGES THE COLOR OF THE HEALTH ACCORDING TO THE DAMAGE
    if (health1 < 33 && health1 > 21) {
         //yellow
 document.getElementById('bar2').style.background ='#e6e600';
} else if (health1 <= 20) {
         //red
    document.getElementById('bar2').style.background='#e50000';
}     
            
             if (health1 >0){      
                   $('.Prepare').text('Psyduck used a move'); 
             }   else {
                 
                     document.getElementById('bar2').style.width = 0 + "px";  
                  $('.Prepare').text('Pysduck Won!');
             }                      
            }          
               //All the battle moves reappearing again
                
                 setTimeout(returnBattle, 3800);
         
                function returnBattle() {
                  if (health1 > 0) {              
                    $('.Prepare').text('What will Pikachu do?');
                  } else {
                     $("#endtext").removeClass("hide");
                        $("#endtext").addClass("end");
                         $('.Prepare').text('Pysduck Won!');
                  }
                  //Removes the class "hide"  
             if (health1 > 0) {
                    $(".PP").removeClass("hide");      
                    $(".TL").removeClass("hide");
                    $(".TR").removeClass("hide");
                    $(".BL").removeClass("hide");
                    $(".BR").removeClass("hide");
                    $(".leer").removeClass("hide");
                    $(".tailwhip").removeClass("hide");
                    $(".scratch").removeClass("hide");    
                    $(".thunder").removeClass("hide");
                //Adds that class again    
                   $(".PP").addClass("PP");      
                    $(".TL").addClass("TL");
                    $(".TR").addClass("TR");
                    $(".BL").addClass("BL");
                    $(".BR").addClass("BR");
                    $(".leer").addClass("leer");
                    $(".tailwhip").addClass("tailwhip");
                    $(".scratch").addClass("scratch");
                    $(".thunder").addClass("thunder"); 
                       }     
                        turn = false; 
                }  
} 
   }     else {
         alert("Please use another move.");
        sharpen =0;
        ppsharpen = 0;  
    }
      
 

}); 
 



//Scratch move
$( ".scratch" ).click(function() {   
      
   $('.Prepare').text('Pikachu used Scratch.');
   health2 -= scratch;
    document.getElementById('bar1').style.width = health2 + "px";
    
    
         //CHANGES THE COLOR OF THE HEALTH ACCORDING TO THE DAMAGE
    if (health2 < 33 && health2 > 21) {
                                                    //yellow
 document.getElementById('bar1').style.background ='#e6e600';
} else if (health2 <= 20) {
                                                    //red
    document.getElementById('bar1').style.background='#e50000';
}
   //This adds the attacking image  
    	$("#attackHome").addClass("attackHomes");
		$("#attackHome").removeClass("attackHome");
		$("#attackHome").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100);
         //this hide the battle MOves  Class Class("hide");
     $(".PP").addClass("hide");
    $(".TL").addClass("hide");
     $(".TR").addClass("hide");
     $(".BL").addClass("hide");
     $(".BR").addClass("hide");
     $(".leer").addClass("hide");
     $(".tailwhip").addClass("hide");
     $(".scratch").addClass("hide");
     $(".thunder").addClass("hide");
       turn = !turn;
        //Operator to check if it goes below zero
       if (health2 <= 0) {
           $("#endtext").removeClass("hide");
           $("#endtext").addClass("end");
         document.getElementById('bar1').style.width = 0 + "px";
           $('.Prepare').text('Pikachu won!');
           turn = false;
 }  
  //IF TURN FOR CPU
if (turn === true) {
    setTimeout(cpu, 2200) //2.2 secs
            function cpu() {
                    //This adds the attacking image  
    	$("#attackOpp").addClass("attackOpponent");
		$("#attackOpp").removeClass("attackOpp");
		$("#attackOpp").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100);
                  //Variable for randomize the damage    
               health1 -=  Math.floor(Math.random() *8.5) + 4;  ;
   document.getElementById('bar2').style.width = health1 + "px";
           //Operator to check if it goes below zero
  
           //CHANGES THE COLOR OF THE HEALTH ACCORDING TO THE DAMAGE
    if (health1 < 33 && health1 > 21) {
         //yellow
 document.getElementById('bar2').style.background ='#e6e600';
} else if (health1 <= 20) {
         //red
    document.getElementById('bar2').style.background='#e50000';
}     
            
             if (health1 >0){      
                   $('.Prepare').text('Psyduck used a move'); 
             }   else {
            
                     document.getElementById('bar2').style.width = 0 + "px";  
                  $('.Prepare').text('Pysduck Won!');
             }
             
            //All the battle moves reappearing again                     
            }          
        
                 setTimeout(returnBattle, 3800); //3.8 secs       
      //Function used to return to battle
                function returnBattle() {
                  if (health1 > 0) {              
                    $('.Prepare').text('What will Pikachu do?');
                  } else {
                            $("#endtext").removeClass("hide");
                        $("#endtext").addClass("end");
                         $('.Prepare').text('Pysduck Won!');
                  }
                  //Removes the class "hide"  
             if (health1 > 0) {
                 
                     $(".PP").removeClass("hide");
                    $(".TL").removeClass("hide");
                    $(".TR").removeClass("hide");
                    $(".BL").removeClass("hide");
                    $(".BR").removeClass("hide");
                    $(".leer").removeClass("hide");
                    $(".tailwhip").removeClass("hide");
                    $(".scratch").removeClass("hide");    
                    $(".thunder").removeClass("hide");
                //Adds that class again  
                   $(".PP").addClass("PP");  
                    $(".TL").addClass("TL");
                    $(".TR").addClass("TR");
                    $(".BL").addClass("BL");
                    $(".BR").addClass("BR");
                    $(".leer").addClass("leer");
                    $(".tailwhip").addClass("tailwhip");
                    $(".scratch").addClass("scratch");
                    $(".thunder").addClass("thunder"); 
                       }     
                        turn = false; 
                } 
} 

});





//tailwhip function
$( ".tailwhip" ).click(function() {
  if(pptailwhip > 0) {
        pptailwhip -=1;  
     $('#pptailwhip').text(pptailwhip);

   $('.Prepare').text('Pikachu used Tailwhip.');
   health2 -= tailwhip;
     document.getElementById('bar1').style.width = health2 + "px";
  
      
    //CHANGES THE COLOR OF THE HEALTH ACCORDING TO THE DAMAGE
    if (health2 < 33 && health2 > 21) {
                                                    //yellow
 document.getElementById('bar1').style.background ='#e6e600';
} else if (health2 <= 20) {
                                                    //red
    document.getElementById('bar1').style.background='#e50000';
}
   //This adds the attacking image  
    	$("#attackHome").addClass("attackHomes");
		$("#attackHome").removeClass("attackHome");
		$("#attackHome").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100);
         //this hide the battle MOves  Class Class("hide");
     $(".PP").addClass("hide");
     $(".TL").addClass("hide");
     $(".TR").addClass("hide");
     $(".BL").addClass("hide");
     $(".BR").addClass("hide");
     $(".leer").addClass("hide");
     $(".tailwhip").addClass("hide");
     $(".scratch").addClass("hide");
     $(".thunder").addClass("hide");
      turn = !turn;
     //Operator to check if it goes below zero
       if (health2 <= 0) {
           $("#endtext").removeClass("hide");
           $("#endtext").addClass("end");
         document.getElementById('bar1').style.width = 0 + "px";
           $('.Prepare').text('Pikachu won!');
           turn = false;
 }  
  //IF TURN FOR CPU
if (turn === true) {   
    setTimeout(cpu, 2200) //2.2 secs
            function cpu() {
                    //This adds the attacking image  
    	$("#attackOpp").addClass("attackOpponent");
		$("#attackOpp").removeClass("attackOpp");
		$("#attackOpp").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100);
                  //Variable for randomize the damage    
               health1 -=  Math.floor(Math.random() *8.5) + 4;   
   document.getElementById('bar2').style.width = health1 + "px";
  
           //CHANGES THE COLOR OF THE HEALTH ACCORDING TO THE DAMAGE
    if (health1 < 33 && health1 > 21) {
         //yellow
 document.getElementById('bar2').style.background ='#e6e600';
} else if (health1 <= 20) {
         //red
    document.getElementById('bar2').style.background='#e50000';
}     
         //If & else to end the game  if health 1 = 0 
             if (health1 >0){      
                   $('.Prepare').text('Psyduck used a move'); 
             }   else {           
                     document.getElementById('bar2').style.width = 0 + "px";  
                  $('.Prepare').text('Pysduck Won!');
             }           
            }               
                 setTimeout(returnBattle, 3800); //3.8 secs
          //function to return to battle
                function returnBattle() {
                  if (health1 > 0) {              
                    $('.Prepare').text('What will Pikachu do?');
                  } else {
                      $("#endtext").removeClass("hide");
                        $("#endtext").addClass("end");
                         $('.Prepare').text('Pysduck Won!');
                  }
                  //Removes the class "hide"  
             if (health1 > 0) {
                    $(".PP").removeClass("hide");
                    $(".TL").removeClass("hide");
                    $(".TR").removeClass("hide");
                    $(".BL").removeClass("hide");
                    $(".BR").removeClass("hide");
                    $(".leer").removeClass("hide");
                    $(".tailwhip").removeClass("hide");
                    $(".scratch").removeClass("hide");    
                    $(".thunder").removeClass("hide");
                //Adds that class again 
                  $(".PP").addClass("PP");   
                    $(".TL").addClass("TL");
                    $(".TR").addClass("TR");
                    $(".BL").addClass("BL");
                    $(".BR").addClass("BR");
                    $(".leer").addClass("leer");
                    $(".tailwhip").addClass("tailwhip");
                    $(".scratch").addClass("scratch");
                    $(".thunder").addClass("thunder"); 
                       }     
                        turn = false; 
                } 
} 
  }
  //Used to stop the move if pp = 0
   else {
        alert("Please use another move.");
        tailwhip =0;
        pptailwhip = 0;  
   }
});




 

//Thunder move
  $( ".thunder" ).click(function() {
    
   //Variable and if function to limit the amount of moves you can use 
  if(ppthunder > 0) {
        ppthunder -=1;  
     $('#ppthunder').text(ppthunder);
   
   $('.Prepare').text('Pikachu used Thunder.');
   health2 -= thunder;
   document.getElementById('bar1').style.width = health2 + "px";
           //Operator to check if it goes below zero
    if (health2 <= 0) {
         document.getElementById('bar1').style.width = 0 + "px";
         $('.Prepare').text('Pikachu won!');
 }    
           //CHANGES THE COLOR OF THE HEALTH ACCORDING TO THE DAMAGE
    if (health2 < 33 && health2 > 21) {
         //yellow
 document.getElementById('bar1').style.background ='#e6e600';
} else if (health2 <= 20) {
         //red
    document.getElementById('bar1').style.background='#e50000';
}
    //This adds the attacking image  
    	$("#attackHome").addClass("attackHomes");
		$("#attackHome").removeClass("attackHome");
		$("#attackHome").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100);
    //this hide the battle box  by adding the class hide
      $(".PP").addClass("hide");
     $(".TL").addClass("hide");
     $(".TR").addClass("hide");
     $(".BL").addClass("hide");
     $(".BR").addClass("hide");
     $(".leer").addClass("hide");
     $(".tailwhip").addClass("hide");
     $(".scratch").addClass("hide");
     $(".thunder").addClass("hide");
  turn = !turn;
  //VARIABLE TO STOP THE CPU WHEN HEALATH = 2 
          if (health2 <= 0) {
              $("#endtext").removeClass("hide");
               $("#endtext").addClass("end");
          turn = false;
 }  
  
  //IF TURN FOR CPU
if (turn === true) {
   

    setTimeout(cpu, 2200) //2.2 secs
            function cpu() {
                    //This adds the attacking image  
    	$("#attackOpp").addClass("attackOpponent");
		$("#attackOpp").removeClass("attackOpp");
		$("#attackOpp").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100);
                  //Variable for randomize the damage    
               health1 -=  Math.floor(Math.random() *8.5) + 4;  
   document.getElementById('bar2').style.width = health1 + "px";
           //Operator to check if it goes below zero
  
           //CHANGES THE COLOR OF THE HEALTH ACCORDING TO THE DAMAGE
    if (health1 < 33 && health1 > 21) {
         //yellow
 document.getElementById('bar2').style.background ='#e6e600';
} else if (health1 <= 20) {
         //red
    document.getElementById('bar2').style.background='#e50000';
}     
            
             if (health1 >0){      
                   $('.Prepare').text('Psyduck used a move'); 
             }   else {
                    
                     document.getElementById('bar2').style.width = 0 + "px";  
                  $('.Prepare').text('Pysduck Won!');
             }
             
                           
            }                
                 setTimeout(returnBattle, 3800); //3.8 secs
             //FUnction to return to battle       
                function returnBattle() {
                  if (health1 > 0) {              
                    $('.Prepare').text('What will Pikachu do?');
                  } else {
                            $("#endtext").removeClass("hide");
                        $("#endtext").addClass("end");
                         $('.Prepare').text('Pysduck Won!');
                  }
                  //Removes the class "hide"  
             if (health1 > 0) {                
                     $(".PP").removeClass("hide");
                    $(".TL").removeClass("hide");
                    $(".TR").removeClass("hide");
                    $(".BL").removeClass("hide");
                    $(".BR").removeClass("hide");
                    $(".leer").removeClass("hide");
                    $(".tailwhip").removeClass("hide");
                    $(".scratch").removeClass("hide");    
                    $(".thunder").removeClass("hide");
                //Adds that class to show again
                     $(".PP").addClass("PP");   
                    $(".TL").addClass("TL");
                    $(".TR").addClass("TR");
                    $(".BL").addClass("BL");
                    $(".BR").addClass("BR");
                    $(".leer").addClass("leer");
                    $(".tailwhip").addClass("tailwhip");
                    $(".scratch").addClass("scratch");
                    $(".thunder").addClass("thunder"); 
                       }     
                        turn = false; 
                }  
  } 
} 
//else function to stop the moves if pp = 0
   else {  
      alert("Please use another move.");
        thunder =0;
        ppthunder = 0;  
  }    
});

//Code is copyrighted to Thillak Sachithanandan @2016
//Credit to pictures goes to C.K


  
