//The OS  Object

var OS =
{
    "navigationBar" :
    {
      //vars
      "areAnyMenuItemsVisible" : false,
      "isVisibleControlPanel" :  false,

      //methods
      toggleControlPanel()
      {
        console.log("Hiding");
        var element = document.getElementById("control-panel");
        if(this.isVisibleControlPanel==true)
        {console.log("Working1");
          element.style.display="none";
          this.isVisibleControlPanel=false;
          this.areAnyMenuItemsVisible=true;
        }
        else
        { console.log("Displaying");
          console.log(element.style.display+"");
          element.style.display="block";
          this.isVisibleControlPanel=true;
          this.hideAllApps();
        }
      },
      hideAllApps()
      {
        this.areAnyMenuItemsVisible=false;
      }

    },

    "Apps" :
    {

    },

    "Dock":
    {

    }

}



//time and date
function displayDateandTime()
{ 
  var today = new Date();
  var day = today.getDay();
  var date = today.getDate();
  var month = today.getMonth();
  var monthlist = ["Jan","Feb","Mar","Apr","May","June","Jul","Aug","Sep","Oct","Nov","Dec"]
  var daylist = ["Sun","Mon","Tue","Wedn ","Thu","Fri","Sat"];
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 

  var elements = document.getElementsByClassName("clock");
  elements[0].innerHTML=`${daylist[day]}  ${date + monthlist[month]} ${hour}:${minute} ${prepand} `;

  //console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);
}


function startClock()
{
    setInterval(displayDateandTime,1000);
}

//functions start here
startClock();
