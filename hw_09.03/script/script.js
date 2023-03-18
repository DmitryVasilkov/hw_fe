const div = document.querySelector(".project")

fetch("https://reqres.in/api/users?page=2")
.then(function(res){
    return res.json()
  })
  .then(function(json){
    render(json.data);
  })

function render(arr){
    arr.forEach(function({email, first_name, last_name, avatar}){
        const divContainer = document.createElement("div");
        const pEmail = document.createElement("a");
        const pName = document.createElement("p");
        const pSurname = document.createElement("p");
        const pPhoto = document.createElement("div");

        divContainer.classList.add('card')
        pPhoto.classList.add('image');
        pEmail.classList.add('mail')
        
        pPhoto.style.backgroundImage = `url(${avatar})`;
        pName.innerText = `${first_name}`;
        pSurname.innerText = `${last_name}`;
        pEmail.innerText = email;
        pEmail.href = `mailto:${email}`;

        divContainer.append(pPhoto, pName, pSurname, pEmail);
        div.append(divContainer);
    })

}