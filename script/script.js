
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
    getElement('nav-heart-icon').innerText = Number(heartCount);
   })
 }

 /**
  * Implement card copy button feature. when user click copy button inside card 
  * it will copy and and show the copy count in navbar 
  * 
  * when copy button clicked it will click it will copy card hotline number with an alert massege
  */

 const copyBtn = document.getElementsByClassName('btn-copy');
 let copyCount = Number(getElement("nav-btn").innerText);

 for (const count of copyBtn) {
    count.addEventListener("click",function(){
        copyCount++
        getElement("nav-btn").innerText = Number(copyCount)

        const hotlineNumber = count.parentNode.parentNode.children[2].children[0].innerText

        const setHotlineNumber = document.getElementsByClassName('hotline-number')
      
        
        setHotlineNumber.innerText = hotlineNumber;

        alert('Copied Hotline Number ' + hotlineNumber);

        navigator.clipboard.writeText(hotlineNumber);
     
    })
 }





 
