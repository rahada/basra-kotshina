$(function() {  
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
     
    //function click button get cards for player and computer
        $("#deckButton").on("click",function(){    
        for(var i=0; i< 4; i++)
            {
                var player_card = Math.floor(Math.random()*deckCards.length);
                $(".computer_card").append("<img>")
                $(".computer_card img").eq(i).attr("src",/*"./cards/facedown.png"*/ deckCards[player_card].name);
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
            $("#deckButton").attr("disabled","disabled");
    });//end of player and computer distribute the cards with button click
    
   //////////////////////////////////////////////////////////////////// 
    
    //table function and remove the jck from the table  
        for(var i=0;i< 4; i++)
          {
            var jack_card = Math.floor(Math.random()*deckCards.length);
            while(deckCards[jack_card].value =="jack")
                {
                   jack_card = Math.floor(Math.random()*deckCards.length); 
                }
              $(".table_card img").eq(i).attr("src",deckCards[jack_card].name);
              $(".table_card img").eq(i).attr("value",deckCards[jack_card].value);
                deckCards.splice(jack_card, 1);
            }
    
             ///////////////////////////////////////end of TABLE function
    
  //function ally btgm3 al jack&diamond wa btgm3 kol card bl card bt3tha wa btndh lal function bta3t al computer 3shan ta5od wa tady m3aha (tl3b m3aha ya3ny)

    var countDeck=4
$(".player_card").on("click","img",function(){
     
//    $("#deckButton").prop("disable",true)
        countDeck --
    console.log(countDeck)
    if(countDeck==0)
        {
            document.getElementById("deckButton").disabled = false;
            countDeck=4
        }
    
    $(this).fadeOut(1000);
    
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
    
        var sum = sumOfCards($(this))
    if(sum== true)
        {
            isAppend=false;
            $(this).fadeOut(1000)
        }
    
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

       var x = $(this).index(x)
        setTimeout(function() {computerTurn()}, 1000);           
});
    
var removeCard = function(z,playerCount){
    $(".table_card img").eq(z).fadeOut(1000); 
            playerCount +=1; 
            $(".player").html("playerScore = "+ " "+playerCount);
}


var removeAll = function(z,playerCount){
    $(".table_card img").fadeOut(1000); 
            playerCount +=1; 
            $(".player").html("playerScore = "+ " "+playerCount);
}

////انا كان نفسي اعملها recursion بس معرفتش 
 
 function sumOfCards(s){
     var flag=false
    for(var a=0;a<$(".table_card img").length;a++)
    {
        for(var b=a+1;b<$(".table_card img").length;b++)
        {
            var rem = parseInt($(".table_card img").eq(b).attr("value"))
            var rem2 = parseInt($(".table_card img").eq(a).attr("value"))
            if(s.attr("value")==(rem + rem2))
            { 
                $(".table_card img").eq(b).fadeOut(1000);
                $(".table_card img").eq(a).fadeOut(1000);
                   s.fadeOut(1000)
                flag=true
//                  isAppend = false;
//                playerCount +=2;
            }//end of if condition
        }//end of var b for loop
    }//end of var a for loop
     if(flag==true)
         {
             return true;
         }
}//end of isSum function
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////
var computerTurn = function(x){
    
//    $(".computer_card img").fadeOut(300);
    
    var   computerCount = 0;
    var isAppend=true;
    for(var c=0;c<$(".table_card img").length;c++)
    { 
        if($(".computer_card img").attr("value") == $(".table_card img").eq(c).attr("value"))
        {
            console.log("matching cards")
            removeCard(c,computerCount);
            isAppend=false;
        }
        else if($(".computer_card img").attr("value") == "jack" 
                || $(".computer_card img").attr("src") == "./cards/7_of_diamonds.png")
        {
            console.log("J or 7+")
            removeAll(c,computerCount);
            isAppend=false;
        }
        else if($(".table_card img").length=1 
                && $(".computer_card img").attr("value") == $(".table_card img").eq(c).attr("value"))
        {
            console.log("matching last card")
            removeCard(c,computerCount);
            isAppend=false;
        }
    }//end of for loop
    
    if(isAppend)
    {
        console.log("yes false")
        var r = $(".computer_card img").eq(0).attr("src")
        var h = $(".computer_card img").eq(0).attr("value")
        var myImg=$("<img>")
        myImg.attr("src",r);
        myImg.attr("value",h);
        $(".table_card").append(myImg);
//        $(".computer_card img").fadeOut(5000);  
    }
     $(".computer_card img").eq(0).remove()
};
    
var removeCard = function(c,computerCount){
    $(".table_card img").eq(c).remove(); 
            computerCount +=1; 
            $(".computer").html("computerScore = "+ " "+computerCount);
}


var removeAll = function(c,computerCount){
    $(".table_card img").remove(); 
            computerCount +=10; 
            $(".computer").html("computerScore = "+ " "+computerCount);
}
});//end of ready function