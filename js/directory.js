const content = document.querySelector('.content');
const requestURL = 'https://ochen1997.github.io/chamber/data/data.json';


fetch(requestURL)
.then(function(response){
    return response.json()
})
.then(function(jsonObject){
    console.table(jsonObject)
    const directory = (jsonObject)['directory']
    directory.forEach(displayDirectory);
})


function displayDirectory(mydata){
    let card = document.createElement('section');
    let potrait = document.createElement('img');
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    let a = document.createElement('a');

    
    p.textContent = `${mydata.address}`;
    p2.textContent = `${mydata.phonenumber}`;
    a.textContent = `${mydata.link}`
    a.href = `${mydata.link}`;
    potrait.setAttribute('src', mydata.imageurl);
    potrait.setAttribute('alt', `campony's information`);


    card.appendChild(potrait);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(a);
    content.appendChild(card)
}











