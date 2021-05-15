// Write code here to communicate with Github

//este es la parte del dom que voy a intervenir
let qttyRepo = document.querySelector("#repos-count");
let ListRepo = document.querySelector("#repos-list");

let userName = document.querySelector(".mb-0");
user = "aolivari"; //aqui defino el usuario
userName.innerText = user;

let url = new URL("https://api.github.com/users/");

fetch(url + user + "/repos")
  .then(response => response.json())
  .then(json => {
    let array = Object.values(json);

    qttyRepo.innerText = array.length; //este es el nunmero de repos

    array.forEach(repo => {
      let lirepo = document.createElement("li");
      lirepo.innerText = repo.name;
      ListRepo.appendChild(lirepo); // este for each me entrega la lista de repos que tengo
    });
  });
