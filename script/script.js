
function getElement(id){
    const element = document.getElementById(id);
    return element;
}

/**
 * implentation of heart counting. when user Will click heart icon
 *  inside card it will increase count for nav bar heart icon counting 
 */
 const heartIcons = document.getElementsByClassName('heart-icon');
 let heartCount = Number(getElement('nav-heart-icon').innerText);

 for (const heart of heartIcons) {
   heart.addEventListener('click',function(){
        heartCount++;
    document.getElementById('nav-heart-icon').innerText = Number(heartCount);
   })
 }



 
