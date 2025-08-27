
 const heartIcons = document.getElementsByClassName('heart-icon');
 let heartCount = Number(document.getElementById('nav-heart-icon').innerText);

 for (const heart of heartIcons) {
   heart.addEventListener('click',function(){
    heartCount++
    document.getElementById('nav-heart-icon').innerText = heartCount;
   })

 }

