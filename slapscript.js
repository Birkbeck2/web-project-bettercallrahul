

let player1Health= 100;
let player2Health = 100;
let player1Wins = false;
let player2wins = false;
let p1gonnaslap = false;

var player1;
var player2;



$( document ).ready(function() // function runs when the page is ready
{                               // On load, the script hides two DIV elements 'hidebox' and 'healthmonitor'
    console.log( "Page loaded fully!" );

    console.log( "Hiding hidebox DIV" );
    $("#hidebox").hide(); //jQuery hide() Method  Source : w3schools Link: https://www.w3schools.com/jquery/eff_hide.asp

    console.log( "Hiding healthmonitor DIV" );
    $("#healthmonitor").hide();

    $("#bibleverse").hide();

    console.log( "Activating event listener for Click to start game" );
    $("#startbutton").bind('click',showinputbox); //a
    
});

function showinputbox()
{   
   
    console.log( "shows hide box" );
    $("#hidebox").show(); //jQuery show() method, source: w3schools Link: https://www.w3schools.com/jquery/eff_show.asp
    $("#tossbox").hide(); 
    document.getElementById("commentatorsays").innerHTML = "Mention two names that you love to hate.";
    console.log("Showing input fields, Primary Enter button hidden");
    $("#entergame").hide(); 
    $("#playerdetailsbox").show();
}


function myMessage() {
    $("#hidebox").show();

    //disable
    $(".button").prop('disabled', true);

  }


function welcome (){
    debugger;
   /*  Welcome message") */
   $("#playerdetailsbox").hide();
   $("#tossbox").show();
   defineplayer1details($("#player1name").val(),$("#player1nick").val());
   defineplayer2details($("#player2name").val(),$("#player2nick").val()); //Jquery val method. Sourced from https://www.w3schools.com/jquery/html_val.asp

        console.log("COMMENTATOR: Welcome to the ULTIMATE SLAP-THE-FACE-OFF FACE OFF!")
    document.getElementById("commentatorsays").innerHTML = "Welcome! Welcome! Welcome! Todays face off is between " + player1.name + " And " + player2.name;       
        console.log('COMMENTATOR: Todays face off is between player 1 & player 2')
   
}


function defineplayer1details(name,nick){
    player1 ={
    "name": name,
    "nick" : nick
    };
    
}
function defineplayer2details(name,nick){
    player2 ={
    "name": name,
    "nick" : nick
    };
    
}

function toss (){
    debugger;
    

    let tosscondition=Math.random()<0.5;

    // TossWaitingMessage("And we toss!", 1500);
    // TossWaitingMessage("Is it heads?", 1000);
    // TossWaitingMessage("or maybe tails?", 1000);
    // TossWaitingMessage("Aaaand here we have it!", 1000);


    //if (tosscondition=true) 
    if (tosscondition == true) 
    {
        p1gonnaslap=true; 
        console.log("COMMENTATOR: player 1 wins the toss.")
        document.getElementById("commentatorsays").innerHTML = "And " + player1.name + " wins the toss";
    }
    else 
    {
        p1gonnaslap=false;
        console.log("COMMENTATOR: Player 2 wins the toss.")
        document.getElementById("commentatorsays").innerHTML = "And " + player2.name + " wins the toss";
    }
    
    $("#healthmonitor").show();
   /*  code to change button text and fuction */
   var button = document.getElementById("tossbuton");
  button.textContent = "Start Match"; //changes the button's text (source : w3schools : https://www.w3schools.com/cssref/tryit.php?filename=trycss_js_background-color)
button.onclick = whistle; //changes the assigned function on click of the button to whistle(); 
   
document.getElementById("player1healthname").innerHTML = player1.name;
document.getElementById("player2healthname").innerHTML =  player2.name;

}

function nameupdatebycommentator(player) // this function changes the name so that the user knows who is going to be slapped next.
{
    document.getElementById("consolesays").innerHTML = "(click below to slap " + player.name + ")";
                            
}


function whistle()
{
    debugger;

    console.log('*Referee Whistles*')
    console.log('COMMENTATOR: FIGHT!')

    if(p1gonnaslap===true)
    {
        if(!player1Wins && !player2wins)
        {
        nameupdatebycommentator(player2);
        }
    }
    else
    {        
        if(!player1Wins && !player2wins)
        {
            nameupdatebycommentator(player1);
        }
       // document.getElementById("commentatorsays").innerHTML = "(click below to slap " + player1.name + ")";
    }
    var button = document.getElementById("tossbuton");
    button.textContent = "SLAP!"; //changes the button's text (source : w3schools : https://www.w3schools.com/cssref/tryit.php?filename=trycss_js_background-color)
  button.onclick = slapattack; //changes the assigned function on click of the button to whistle(); 
 

  //https://tuna.voicemod.net/sound/1c811306-b62e-457c-be68-0e295d12d510

} 

function updatehealthbar1()
{
    debugger;
    console.log("update healthbar 1 function ");
    let life1=player1Health;
    let lifebar1=document.getElementById("p1bar");
    lifebar1.value=life1;

    if(player2wins)
   {
    document.getElementById('player1health').style.backgroundColor = "black";
   }

}

function updatehealthbar2()
{   
    debugger;
    console.log("update healthbar 2 function ");
    let life2=player2Health;
    let lifebar2=document.getElementById("p2bar");
    lifebar2.value=life2;

    if(player1Wins)
   {
    document.getElementById('player2health').style.backgroundColor = "black";
   }
}

function slapattack()
{
   if(p1gonnaslap==true)
   {   
        
              
    
            if (!player1Wins && !player2wins)
               { 
                player1slaps();
                
                if(player2Health>0)
                {
                nameupdatebycommentator(player1);
                } 
                p1gonnaslap=false;
               
               }
   }
   else 
   {
            if (!player1Wins && !player2wins)
             { 
               player2slaps();
               
               if(player1Health>0)
                {
                nameupdatebycommentator(player2);
                } 

               p1gonnaslap=true;

           }


   }

   console.log("player1 health:" + player1Health);
   console.log("player2 health:" + player2Health);
   
 
}
  
function player1slaps() {
    debugger;

    var damage=100*Math.random();
    player2Health=player2Health-damage;
    
    if (player2Health<=0) 
    {   
        player2Health=0;
        player1Wins=true;
        document.getElementById("commentatorsays").innerHTML = "OUT COLD! OUT COLD! " + player2.name + " is KNOCKED OUT!";
        console.log('COMMENTATOR: Player 1 knocks out player 2');
    
        updatehealthbar2();
        knockoutReport();
        
    }
    
    else
    {
        updatehealthbar2();
     if (damage>60) 
        {   
           
            document.getElementById("commentatorsays").innerHTML = "OMG THAT WAS A CRITICAL HIT! And it shows on " + player2.name + "'s face.";
            console.log('COMMENTATOR : Player 1 slaps player 2 with a critical hit OMG!!')
            console.log('player 2: *blinks rapidly*')
        }
        else {
            document.getElementById("commentatorsays").innerHTML = "What a slap on " + player2.name + "'s face!!";
            console.log('COMMENTATOR: Player 1 slaps Jezos ')
            console.log('player 2: *smirks* ')
            console.log('player 2: That felt micro and soft. Is that the best you got?')
        }

        
       
           
    }
    
        console.log("exiting player1slaps, function completed");
}
 
function player2slaps() {
    debugger;

    var damage=100*Math.random();
    player1Health=player1Health-damage;
    
    if (player1Health<=0) 
        {
        player1Health=0;
        player2wins=true;
        document.getElementById("commentatorsays").innerHTML = "OUT COLD! OUT COLD! " + player1.name + " is KNOCKED OUT!";
        console.log('COMMENTATOR: player 2 knocks out player 1');
        updatehealthbar1();
        knockoutReport();
            
        }

    else
    {
        updatehealthbar1();
        if (damage>60) {
              //annie are you okay? - alert
              document.getElementById("commentatorsays").innerHTML = "OMG THAT WAS A CRITICAL HIT! And it shows on " + player1.name + "'s face.";
            console.log('COMMENTATOR : Player2 slaps sheet out Mr. Dates with a critical hit OMG!!')
            console.log('DATES: *blinks rapidly*')
        }
        else {
            document.getElementById("commentatorsays").innerHTML = "What a slap on " + player1.name + "'s face!!";
            console.log('COMMENTATOR: Player 2 slaps Mr. Dates ')
            console.log('player 1: *smirks*')
            console.log("player 1: Poor delivery. Ama'zone you out now.")
        }

        
        
    }
    //return health;
    console.log("exiting player2slaps, function completed");
}
 
function knockoutReport() {
    debugger;
   
    console.log("starting knockout report")
   

            if (player2wins) {
                console.log('COMMENTATOR: Can you believe it? player 1 has been knocked out!')
            document.getElementById("commentatorsays").innerHTML = "Can you believe it? " + player1.name + " has been knocked out!";
            
            } 
            
            
            if (player1Wins) {
                console.log('COMMENTATOR: Can you believe it? Player 2  has been knocked out!')
                document.getElementById("commentatorsays").innerHTML = "Can you believe it? " + player2.name + " has been knocked out!";
            
            }
    $("#consolesays").hide();         
    console.log("changing button & proceeding to winner declaration")
      var button = document.getElementById("tossbuton");
      button.textContent = "Proceed"; 
            button.onclick = winnderDeclaration;
    
}

function winnderDeclaration()
{
    debugger;
    $("#consolesays").show();
    if(player1Wins==true) 
    { 
        console.log('COMMENTATOR: Ladies & Gentlemen, here is your winner : Player 1!')
        document.getElementById("commentatorsays").innerHTML = "Ladies & Gentlemen, here is your winner : " + player1.name + " (" + player2.nick +")";
    }

    /* if (player2wins==true) */
    else 
    {
        console.log('COMMENTATOR: Ladies & Gentlemen, here is your winner : Player 2!!')
        document.getElementById("commentatorsays").innerHTML = "Ladies & Gentlemen, here is your winner : " + player2.name + " (" + player2.nick +")";
    }    

    
    console.log("changing button & proceeding to try again")
    document.getElementById("consolesays").innerHTML = "Still Angry??";
    var button = document.getElementById("tossbuton");
    button.textContent = "Play Again"; 
          button.onclick = playagain;
          console.log("*************shows input box");
    debugger;
    $("#bibleverse").show();
}

function playagain() 
{  
    location.reload();



}

 



 //document.getElementById("startbutton").addEventListener("click" , startSlapFaceOff);