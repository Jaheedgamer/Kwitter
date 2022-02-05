//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBBrsvM14EcQ5mTcI7F2tBmOa7xOjEMuKs",
      authDomain: "kwitter-8b72f.firebaseapp.com",
      databaseURL: "https://kwitter-8b72f-default-rtdb.firebaseio.com",
      projectId: "kwitter-8b72f",
      storageBucket: "kwitter-8b72f.appspot.com",
      messagingSenderId: "117710517085",
      appId: "1:117710517085:web:23f9330b23bd377257aeb4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value = " ";
    }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
