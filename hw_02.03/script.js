const form = document.querySelector('.form');
const images = document.querySelector('.images');
let cards = [];

form.addEventListener('submit',function(elem){
    elem.preventDefault();
    const {photo, name} = elem.target
    cards.push({
        id: Date.now(),
        img : photo.value,
        name: name.value
    })
    render();
    elem.target.reset();
})

const render = function(){
    images.innerText = '';
    cards.forEach(function({id, img, name}) {
        const cardElem = document.createElement('div')
        const photo = document.createElement('div')
        const text = document.createElement('p')
        text.innerText = name
        photo.classList.add('image');
        photo.style.backgroundImage = `url(${img})`;
        
        cardElem.addEventListener('dblclick', function() {
            cards = cards.filter(function(item) {
                return item.id !== id
            })
            render();
        })
        cardElem.append(photo, text);
        images.append(cardElem)
    })
}
render();