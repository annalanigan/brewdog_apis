var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function(){
  if (this.status !== 200) return;
  var beerString = this.responseText;
  var beerArray = JSON.parse(beerString);
  populateList(beerArray);
}

var populateList = function(array){
  array.forEach(function(beer){
    var ul = document.getElementById('beer-list');
    var li = document.createElement('li');
    var p = document.createElement('p');
    p.innerText = beer.name;
    var img = document.createElement('img');
    img.src = beer.image_url;
    img.width = 100;
    li.appendChild(p);
    li.appendChild(img);
    ul.appendChild(li);
  });
}

var app = function(){
  var url = 'https://api.punkapi.com/v2/beers';
  makeRequest(url, requestComplete);
}

document.addEventListener('DOMContentLoaded', app);
