
function checkDayNight(hour){
  /* true day, false night */
  return hour > 6 && hour < 19 ? true : false;
}

var time = new Date();

if(!checkDayNight(time.getHours())){
  document.querySelector('body').className += " night";
  document.querySelector('.greetings').className += " night";
}

function getLocation() {
  // var xhttp = new XMLHttpRequest();
  // xhttp.open("GET", "http://ip-api.com/json?callback=", true);
  // xhttp.onreadystatechange = function(){
  //   if (this.readyState == 4 && this.status == 200) {
  //     var geo = JSON.parse(this.response);
  //     console.log(geo.countryCode,whichAnimal(geo.countryCode));
  //     appearAnimal(whichAnimal(geo.countryCode));
  //   }
  // }
  // xhttp.send();

  // appearAnimal(whichAnimal('NZ'));

  $.ajax({
    url: "http://ip-api.com/json",
    jsonp: "callback",
    dataType: 'jsonp',
    success: function(res){
       appearAnimal(whichAnimal(res.countryCode));
    }
  })
}

function whichAnimal(country) {
  if(!country) return;
  var pairs = {
    'CN': 'icon-iconpanda',
    'NZ': 'icon-kiwi',
    'US': 'icon-icon',
    'ZA': 'icon--elephant'
  }

  if (!pairs[country])
  return pairs['NZ'];
  else return pairs[country];
}

function appearAnimal(animal){
  document.querySelector('.animal').className += " " + animal;
}


getLocation();
