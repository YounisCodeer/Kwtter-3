var firebaseConfig = {
  apiKey: "AIzaSyDLe2Ue2qNPz5uf8JcSji_ZUczMU32QMss",
  authDomain: "kwitter-homework-2907a.firebaseapp.com",
  databaseURL: "https://kwitter-homework-2907a-default-rtdb.firebaseio.com",
  projectId: "kwitter-homework-2907a",
  storageBucket: "kwitter-homework-2907a.appspot.com",
  messagingSenderId: "549466745369",
  appId: "1:549466745369:web:c5d234a48e525236611888",
  measurementId: "G-FKNRMVQ685"
  };
  firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key; Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row ="<div class='room_name' id="+Room_names+"onclick=redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData()  

function add_user()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
    });
}
function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });
}
//ADD YOUR FIREBASE LINKS HERE

function addRoom()
{
 room_name = document.getElementById("room_name").value;

 firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
 });

 localStorage.setItem("room_name", room_name)

 window.location = "Kwitter_room.html";
}
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
  window.location = "Kwitter_room.html";
}
function logout () {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
  window.location = "index.html";
}