$(".player_card").on("click","img", function(){
        var flag = false;
for(var z=0;z<$(".table_card img").length;z++)
    {   
        if($(this).attr("value") == $(".table_card img").eq(z).attr("value"))
            {
                $(".table_card img").eq(z).remove();
                $(this).fadeOut();
                flag = true;
            }
            else if( $(this).attr("value") == "jack" || $(this).attr("src") == "./cards/7_of_diamonds.png")
            {
                $(".table_card img").remove();
                $(this).fadeOut();
                flag = true;
            }
        else
            {
                flag = false;
            }
                
    }//end of for loop
                
        
        if(flag == false){
                var x = $(this).attr("src")
              var y = $(this).attr("value")
              var myImg=$("<img>")
              myImg.attr("src",x);
              myImg.attr("value",y);
              $(".table_card").append(myImg);
              $(this).fadeOut();          
        }
        var x = $(this).index()
                setTimeout(function() {computerTurn(x)}, 500);
    });
	
	
	
	
	
	       var flag = false;
for(var c=0;c<$(".table_card img").length;c++)
    {
        if(
            $(".computer_card img").eq(0).attr("value") =="jack"  ||
            $(".computer_card img").eq(0).attr("src") =="./cards/7_of_diamonds.png")
          {
                $(".table_card img").eq(c).remove();
                $(this).fadeOut();
                flag = true;
            }
            else if( $(this).attr("value") == "jack" || $(this).attr("src") == "./cards/7_of_diamonds.png")
            {
                $(".table_card img").remove();
                $(this).fadeOut();
                flag = true;
            }
        else
            {
                flag = false;
            }
                
    }//end of for loop
                
        
        if(flag == false){
                var x = $(this).attr("src")
              var y = $(this).attr("value")
              var myImg=$("<img>")
              myImg.attr("src",x);
              myImg.attr("value",y);
              $(".table_card").append(myImg);
              $(this).fadeOut();    
        }
        $(".computer_card img").eq(0).remove()
                          };
    
    