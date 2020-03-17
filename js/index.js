import update from 'react-addons-update';

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("btnAdd");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

//When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//__________________________________________________

// function radioss() {
//     var radios = document.getElementsByName('yes').value;
//     console.log(radios);
//     return radios;
//     };

// function getRadioVal(form, name) {
//     var val;
//     var radios = form.elements[name];

//     for (var i=0, len = radios.length; i < len; i++); {
//         if (radios[i].checked) {
//             val = radios[i].value;
//         }
//     }
//     return val;
// }

var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    x.innerHTML = "Latitude: " + la +
        "<br>Longitude: " + lo;
}

var list=[];
btnAdd.onclick = function() {
    var info = [];
    info[0] = document.getElementById('locationName').value;
    info[1] = document.getElementById('address').value;
    info[2] = la;
    info[3] = lo;
}

const newData = update(list,{$push: info});
console.log(newData);

