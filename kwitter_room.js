
//ADICIONE SEUS LINKS DO FIREBASE
 //Configurações de seu App Firebase
 const firebaseConfig = {
  apiKey: "AIzaSyA-KRrRDS1W4OpbZ8ikaHJQ990Z-U2FKmc",
  authDomain: "kwitter-e3a99.firebaseapp.com",
  databaseURL: "https://kwitter-e3a99-default-rtdb.firebaseio.com",
  projectId: "kwitter-e3a99",
  storageBucket: "kwitter-e3a99.appspot.com",
  messagingSenderId: "950103972549",
  appId: "1:950103972549:web:ede6463eaaf48411dcaeac",
  measurementId: "G-QFG9V3PS24"
};

  // Inicializar Firebase
 firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a), " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionando nome da sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Nome da Sala - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
