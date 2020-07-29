function loaddav() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("bt").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "data.json", true);
  xhttp.send();
}