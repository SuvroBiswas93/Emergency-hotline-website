
function getElement(id){
    const element = document.getElementById(id);
    return element;
}

 const heartIcons = document.getElementsByClassName('heart-icon');
 let heartCount = Number(getElement('nav-heart-icon').innerText);

 for (const heart of heartIcons) {
   heart.addEventListener('click',function(){
        heartCount++;
    document.getElementById('nav-heart-icon').innerText = Number(heartCount);
   })

 }

 
