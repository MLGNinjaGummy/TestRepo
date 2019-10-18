var z = 0;
function AddStuff() {
  if (z > 6) {
  document.getElementById('Limit').innerHTML = "List is full";
  return;
  }
  else {
  z++;
  var newlist = document.createElement("li");
  var x = document.createTextNode(document.getElementById('Added').value);
  newlist.appendChild(x);
  var position = document.getElementsByTagName('ol')[0];
  position.appendChild(newlist);
  document.getElementById('Added').value = "";
  }
}
function RemoveStuff() {
  z--;
  if (z < 7) {
  document.getElementById('Limit').innerHTML = "";
  var personNum = document.getElementById('Deleted').value;
  var y = parseInt(personNum);
  var child = document.getElementsByTagName('li')[y - 1];
  var parent = child.parentNode;
  parent.removeChild(child);
  document.getElementById('Deleted').value = "";
  }
  else {
  var personNum = document.getElementById('Deleted').value;
  var y = parseInt(personNum);
  var child = document.getElementsByTagName('li')[y - 1];
  var parent = child.parentNode;
  parent.removeChild(child);
  document.getElementById('Deleted').value = "";
  }
}
