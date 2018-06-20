var deckCards = [
    {name:"./cards/1_of_clubs.png",value:1},
    {name:"./cards/1_of_diamonds.png",value:1},
    {name:"./cards/1_of_hearts.png",value:1},
    {name:"./cards/1_of_spades.png",value:1},
    {name:"./cards/2_of_clubs.png",value:2},
    {name:"./cards/2_of_diamonds.png",value:2},
    {name:"./cards/2_of_hearts.png",value:2},
    {name:"./cards/2_of_spades.png",value:2},
    {name:"./cards/3_of_clubs.png",value:3},
    {name:"./cards/3_of_diamonds.png",value:3},
    {name:"./cards/3_of_hearts.png",value:3},
    {name:"./cards/3_of_spades.png",value:3},
    {name:"./cards/4_of_clubs.png",value:4},
    {name:"./cards/4_of_diamonds.png",value:4},
    {name:"./cards/4_of_hearts.png",value:4},
    {name:"./cards/4_of_spades.png",value:4},
    {name:"./cards/5_of_clubs.png",value:5},
    {name:"./cards/5_of_diamonds.png",value:5},
    {name:"./cards/5_of_hearts.png",value:5},
    {name:"./cards/5_of_spades.png",value:5},
    {name:"./cards/6_of_clubs.png",value:6},
    {name:"./cards/6_of_diamonds.png",value:6},
    {name:"./cards/6_of_hearts.png",value:6},
    {name:"./cards/6_of_spades.png",value:6},
    {name:"./cards/7_of_clubs.png",value:7},
    {name:"./cards/7_of_diamonds.png",value:7},
    {name:"./cards/7_of_hearts.png",value:7},
    {name:"./cards/7_of_spades.png",value:7},
    {name:"./cards/8_of_clubs.png",value:8},
    {name:"./cards/8_of_diamonds.png",value:8},
    {name:"./cards/8_of_hearts.png",value:8},
    {name:"./cards/8_of_spades.png",value:8},
    {name:"./cards/9_of_clubs.png",value:9},
    {name:"./cards/9_of_diamonds.png",value:9},
    {name:"./cards/9_of_hearts.png",value:9},
    {name:"./cards/9_of_spades.png",value:9},
    {name:"./cards/10_of_clubs.png",value:10},
    {name:"./cards/10_of_diamonds.png",value:10},
    {name:"./cards/10_of_hearts.png",value:10},
    {name:"./cards/10_of_spades.png",value:10},
    {name:"./cards/jack_of_clubs.png",value:"jack"},
    {name:"./cards/jack_of_diamonds.png",value:"jack"},
    {name:"./cards/jack_of_hearts.png",value:"jack"},
    {name:"./cards/jack_of_spades.png",value:"jack"},
    {name:"./cards/king_of_clubs.png",value:"king"},
    {name:"./cards/king_of_diamonds.png",value:"king"},
    {name:"./cards/king_of_hearts.png",value:"king"},
    {name:"./cards/king_of_spades.png",value:"king"},
    {name:"./cards/queen_of_clubs.png",value:"queen"},
    {name:"./cards/queen_of_diamonds.png",value:"queen"},
    {name:"./cards/queen_of_hearts.png",value:"queen"},
    {name:"./cards/queen_of_spades.png",value:"queen"},
]
  
//console.log(deckCards)
$(function() {      
    //function click button get cards for player and computer
        $("#deckButton").on("click",function(){  
        for(var i=0; i< 4; i++)
            {
                var player_card = Math.floor(Math.random()*deckCards.length);
                $(".computer_card").append("<img>")
                $(".computer_card img").eq(i).attr("src",/*"./cards/facedown.png" */deckCards[player_card].name);
                $(".computer_card img").eq(i).attr("value", deckCards[player_card].value);
                $(".computer_card img").eq(i).fadeIn(500)
                deckCards.splice(player_card, 1);
            }
            
            for(var i=0; i< 4; i++)
               {
                var player_card = Math.floor(Math.random()*deckCards.length);
              $(".player_card img").eq(i).attr("src", deckCards[player_card].name);
              $(".player_card img").eq(i).attr("value", deckCards[player_card].value)
                $(".player_card img").eq(i).fadeIn(200);
                deckCards.splice(player_card, 1);
            }     
    });//end of player and computer distribute the cards with button click
    
   //////////////////////////////////////////////////////////////////// 
    
    //table function and remove the jck from the table  
        for(var i=0;i< 4; i++)
          {
            var jack_card = Math.floor(Math.random()*deckCards.length);
            while(deckCards[jack_card].name == "./cards/jack_of_clubs.png" ||
                  deckCards[jack_card].name == "./cards/jack_of_diamonds.png"||
                  deckCards[jack_card].name == "./cards/jack_of_hearts.png" ||
                  deckCards[jack_card].name == "./cards/jack_of_spades.png")
                {
                   jack_card = Math.floor(Math.random()*deckCards.length); 
                }
              $(".table_card img").eq(i).attr("src",deckCards[jack_card].name);
              $(".table_card img").eq(i).attr("value",deckCards[jack_card].value);
                deckCards.splice(jack_card, 1);
            }
    
             ///////////////////////////////////////end of TABLE function
  
    ////////////////////jack and diamond basra for the computer
//var computerTurn = function(){
//           var compCount = 0;
//	       var flag = false;
//for(var c=0;c<$(".table_card img").length;c++)
//    {
//        console.log($(".table_card > img").attr("value"))
//     if($(".computer_card img").eq(0).attr("value") == $(".table_card img").eq(c).attr("value"))  
//          {
//           $(".table_card img").eq(c).fadeOut(3000);
////           $(".computer_card img").eq(0).fadeOut(500);
//            flag = true;
//              compCount +=1;
//              $(".computer").html("computerScore = "+ " "+compCount);
//          }
//     else if($(".computer_card img").eq(0).attr("value") =="jack"  || $(".computer_card img").attr("src") == "./cards/7_of_diamonds.png")
//            {
//                $(".table_card img").eq(c).fadeOut(3000);
////                $("computer_card img").eq(0).fadeOut(500);
//                flag = true;
//                compCount +=10;
//                $(".computer").html("computerScore = "+ " "+compCount);
//            }
//        else if($(".table_card img").length=1 &&
//                $(".computer_card img").attr("value") == $(".table_card img").eq(c).attr("value"))
//            {
//                $(".table_card img").eq(c).fadeOut(3000);
////                $(".computer_card img").eq(0).remove();
//                flag = true;
//                compCount +=10;
//                $(".computer").html("computerScore = " +" "+compCount);
//            }
//        else
//            {
//                flag = false;
//            }
//                
//    }//end of for loop
//        
//            if(flag == true)
//            {
//              $(".computer_card img").eq(0).fadeOut(3000);
//            }
//    else{
//            var r = $(".computer_card img").eq(0).attr("src")
//            var h = $(".computer_card img").eq(0).attr("value")
//            var myImg=$("<img>")
//            myImg.attr("src",r);
//            myImg.attr("value",h);
//            $(".table_card").append(myImg);
////            $(".computer_card img").fadeOut(3000);  
//    }
//     $(".computer_card img").eq(0).remove()
//    }
    
  //end of function computerTurn  
    
////////////////////////////////////////////////////////////////////////
    
  //function ally btgm3 al jack&diamond wa btgm3 kol card bl card bt3tha bs t3bana shwia wa btndh lal function bta3t al computer 3shan ta5od wa tady m3aha (tl3b m3aha ya3ny)
//   $(".player_card").on("click","img", function(){
//       debugger;
//        var   playerCount = 0;
//        var flag = false; 
//for(var z=0;z<$(".table_card img").length;z++)
//       { 
//        console.log($(".table_card > img").attr("value"))
//        if($(this).attr("value") == $(".table_card img").eq(z).attr("value"))
//            {
//                $(".table_card img").eq(z).fadeOut(500);
////                $(this).fadeOut(200);
//                flag = true;
//                playerCount +=1; 
//                $(".player").html("playerScore = "+ " "+playerCount);
//            }
//            else if( $(this).attr("value") == "jack" || $(this).attr("src") == "./cards/7_of_diamonds.png")
//            {
//                $(".table_card img").eq(z).fadeOut(500);
////                $(this).fadeOut(200);
//                flag = true;
//                playerCount +=10
//                $(".player").html("playerScore = " + " "+playerCount);
//            }
//        else if($(".table_card img").length=1 && $(this).attr("value") == $(".table_card img").eq(z).attr("value"))
//        {
//                $(".table_card img").fadeOut(500);
////                $(this).fadeOut(200);
//                flag = true;
//                playerCount +=10;
//                $(".player").html("playerScore = "+ " "+playerCount);
//            }
//        else
//            {
//                flag = false;
//            }
//                
//    }//end of for loop
//                    
//        if(flag == true)
//            {
//                $(this).fadeOut(500);
//            }
//        else{
//              var x = $(this).attr("src")
//              var y = $(this).attr("value")
//              var myImg=$("<img>")
//              myImg.attr("src",x);
//              myImg.attr("value",y);
//              $(".table_card").append(myImg);
//              $(this).fadeOut(200);          
//        }
//        var x = $(this).index()
//        setTimeout(function() {computerTurn()}, 200);
//                
//    });

$(".player_card").on("click","img",function(){
    
    $(this).fadeOut(500);
    
    var   playerCount = 0;
    var isAppend=true;
    for(var z=0;z<$(".table_card img").length;z++)
    { 
        if($(this).attr("value") == $(".table_card img").eq(z).attr("value"))
        {
            console.log("matching cards")
            removeCard(z,playerCount);
            isAppend=false;
        }
        else if($(this).attr("value") == "jack" 
                || $(this).attr("src") == "./cards/7_of_diamonds.png")
        {
            console.log("J or 7+")
            removeAll(z,playerCount);
            isAppend=false;
        }
        else if($(".table_card img").length=1 
                && $(this).attr("value") == $(".table_card img").eq(z).attr("value"))
        {
            console.log("matching last card")
            removeCard(z,playerCount);
            isAppend=false;
        }
    }//end of for loop
    
    if(isAppend)
    {
        console.log("yes false")
        var e = $(this).attr("src");
        var y = $(this).attr("value");
        var myImg=$("<img>");
        myImg.attr("src",e);
        myImg.attr("value",y);
        $(".table_card").append(myImg);
//        $(this).fadeOut(1000);
    }

//       var x = $(this).index()
//        setTimeout(function() {computerTurn()}, 200);           
});
    
var removeCard = function(z,playerCount){
    $(".table_card img").eq(z).remove(); 
            playerCount +=1; 
            $(".player").html("playerScore = "+ " "+playerCount);
}


var removeAll = function(z,playerCount){
    $(".table_card img").remove(); 
            playerCount +=1; 
            $(".player").html("playerScore = "+ " "+playerCount);
}
 //////////////////////////////////////////////////////////////////////////////////
//prop to disable the button
//    $("#deckButton").on("click",function () {
//        if($(".computer_card img").len <= 0)
//            {
//        $button.prop( "onclick", null );
//console.log( "onclick property: ", $button[ 0 ].onclick );
//            }
//        for(var k=0; k<deckCard.length;i++)
//            {
//        var len = deckCards.length;
//          if($(".computer_card img").len <= 0)  
//        {
//         $("#deckButton:disabled").deckCard.length
//        }

            //disable a normal button
//          else  
//          {
//              $("#deckButton").prop("disabled", false)
//          }
//            }
//        });
    
//  $("#deckButton").on("click",function (){
//    
//    $("#deckButton").prop("disabled",true);
//    
//    $(".computer_card img").add(function(){
//        $("#deckButton").prop("disabled",false)
//    })
//    
//});  
});//end of ready function