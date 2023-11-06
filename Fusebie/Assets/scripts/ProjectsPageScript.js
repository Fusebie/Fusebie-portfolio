var count = 0;

const listOfImages = ["./Assets/from my game/epic screenshot.png", "./Assets/from my game/epic screenshot2.PNG", "./Assets/from my game/fire fight explosion effect.PNG", "./Assets/from my game/fire fight explosion effect2.PNG", "./Assets/from my game/fire fight explosion effect3.PNG", "./Assets/from my game/fire fight explosion effect4.PNG", "./Assets/from my game/fire fight f 2.PNG", "./Assets/from my game/fire fight katana 2.PNG", "./Assets/from my game/fire fight scene 2.PNG", "./Assets/from my game/Fire fight scene b 2.PNG", "./Assets/from my game/fire fight scene c 2.PNG", "./Assets/from my game/fire fight scene d 2.PNG", "./Assets/from my game/fire fight scene e 2.PNG"]; 

function ChangeImagePrevious()
{
  var img = document.getElementById("useless-game-poster");

  count--
  // console.log(count);
  if(count < 0)
  {
    count = 12;
  }
  img.src = listOfImages[count]
   
}


function ChangeImageNext()
{
  var img = document.getElementById("useless-game-poster");
  
  count++

  if (count > 12)
  {
    count = 0;
  }
  img.src = listOfImages[count]

}