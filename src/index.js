document.addEventListener('DOMContentLoaded', function(){
    const BASE_URL = 'http://localhost:3000'
        fetch(`${BASE_URL}/pups`)
        .then(r => r.json())
        .then((dogs) => dogBar(dogs))
})

// add pups to dog bar
function dogBar (dogs){
    const dogMenu = document.getElementById("dog-bar")
    dogs.forEach(dog => {
        let dogSpan = document.createElement('span')
        dogSpan.textContent = dog.name
        dogSpan.addEventListener('click', () => dogRendering(dog))
        dogMenu.appendChild(dogSpan);
        console.log (dogs);
    });
}

function dogRendering(dog){
    const dogInfo = document.getElementById("dog-info")
    const dogImage = document.createElement('img');
    const dogName = document.createElement('h2')
    const dogIsGoodBtn = document.createElement('button');

    dogInfo.replaceChildren();
    dogImage.setAttribute('src', dog.image);
    dogName.textContent = dog.name;
    console.log(dog.isGoodDog)

    if (dog.isGoodDog === true){
        dogIsGoodBtn.textContent = 'Good Dog!'
    } else {
        dogIsGoodBtn.textContent = 'Bad Dog!'
    }
    dogInfo.append(dogImage, dogName, dogIsGoodBtn);

    dogIsGoodBtn.addEventListener('click', ()=>{
        
    })
}
