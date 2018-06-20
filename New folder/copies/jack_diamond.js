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
        $("#deckButton").on("click",function(){  
        for(var i=0; i< 4; i++)
            {
                var player_card = Math.floor(Math.random()*deckCards.length);
//                console.log(player_card)
//              $(".computer_card img").eq(i).attr("src", deckCards[player_card].name);
                $(".computer_card").append("<img>")
                $(".computer_card img").eq(i).attr("src", deckCards[player_card].name);
                $(".computer_card img").eq(i).fadeIn(1000)
//                console.log(deckCards[player_card].name)
                deckCards.splice(player_card, 1);
            }
            
            
                 
    })/////////////////////////////////////end of COMPUTER function   
           
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
                deckCards.splice(jack_card, 1);
            }
             ///////////////////////////////////////end of TABLE function
    
      $("#deckButton").on("click",function(){  
        for(var i=0; i< 4; i++)
            {
                var player_card = Math.floor(Math.random()*deckCards.length);
                console.log(player_card)
              $(".player_card img").eq(i).attr("src", deckCards[player_card].name);
                $(".player_card img").eq(i).fadeIn(200)
                console.log(deckCards[player_card].name)
                deckCards.splice(player_card, 1);
    
            }
 });
    
    ////////////////////////////////////////////////end of PLAYER function
    
    
//playerTurn()
    
//   var playerTurn = function (){
//    $(".player_card img").on("click",function (){
//    var x = $(this).attr("src")
//    var myImg=$("<img>")
//    myImg.attr("src",x);
//    $(".table_card") .append(myImg);
//    $(this).fadeOut(200)
//        var x = $(this).index()
//        setTimeout(function() {computerTurn(x)}, 1000);
//  });
//        
//     }
    ////////////////////jack and diamond basra for the computer
    var computerTurn = function(x){
//             var y = "<img src=" + $(".computer_card img").eq(0).attr("src")+">" ;
//                          $(".table_card").append(y);
//                          $(".computer_card img").eq(0).fadeOut(500)
//                          $(".computer_card img").eq(0).remove()
        
        var flag = false;
for(var z=0;z<$(".table_card img").length;z++)
    {
        if(
            $(".computer_card img").eq(0).attr("src") =="./cards/jack_of_clubs.png"  ||
            $(".computer_card img").eq(0).attr("src") =="./cards/jack_of_diamonds.png"  ||
            $(".computer_card img").eq(0).attr("src") =="./cards/jack_of_hearts.png"  ||
            $(".computer_card img").eq(0).attr("src") =="./cards/jack_of_spades.png"  ||
            $(".computer_card img").eq(0).attr("src") =="./cards/7_of_diamonds.png"
          )
            {
                flag = true;
            }
        else
            {
                flag=false
                break
            }
       
    }           
 if(flag == true)
            {
                $(".table_card img").fadeOut();
                $(".computer_card img").eq(0).fadeOut();
            }
        
        else{
//            alert("msh ana")
            var y = "<img src=" + $(".computer_card img").eq(0).attr("src")+">" ;
                          $(".table_card").append(y);
                          $(".computer_card img").eq(0).fadeOut(500)
//                          $(".computer_card img").eq(0).remove()
        }
        $(".computer_card img").eq(0).remove()
                          };
    
    
    //////////////////////////////player jack diamond bsra
//    var playerTurn = function (){
    $(".player_card img").on("click",function(){
        var flag = false;
for(var z=0;z<$(".table_card img").length;z++)
    {
        if(
            $(this).attr("src") =="./cards/jack_of_clubs.png"  ||
            $(this).attr("src") =="./cards/jack_of_diamonds.png"  ||
            $(this).attr("src") =="./cards/jack_of_hearts.png"  ||
            $(this).attr("src") =="./cards/jack_of_spades.png"  ||
            $(this).attr("src") =="./cards/7_of_diamonds.png"
          )
            {
                flag = true;
//                $(".table_card img").fadeOut();
            }
        else
            {
                flag=false
                break
            }
       
    }           
 if(flag == true)
            {
                $(".table_card img").fadeOut();
                $(this).fadeOut();
            }
            else
                {
                    var x = $(this).attr("src")
                    var myImg=$("<img>")
                    myImg.attr("src",x);
                    $(".table_card") .append(myImg);
                    $(this).fadeOut(200)
                }
             var x = $(this).index()
        setTimeout(function() {computerTurn(x)}, 500);
    
    });
    
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











