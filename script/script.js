
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

 /*
    Implement call button feature indide card. when User will click call button,
    from navcoin button, 20 coin will be deducted and After clicking on the Call button, 
    the exact time of the call will be shown in the Call History section and  if coin is less than 20 then 
    a pop up massege will appear 

    Show all called services with name & number inside call history section while call button will be clicked
 */ 

const callButton = document.getElementsByClassName('btn-call')


for (const btn of callButton) {
    btn.addEventListener('click',function(){
        const coinDeduct = Number(getElement("coin-btn").innerText);
       const remainingCoin = coinDeduct - 20;
       console.log(remainingCoin)
        
     if(coinDeduct <= 0){
            alert("❌আপনার পর্যাপ্ত কয়েন নেই, কল করতে ২০টি কয়েন প্রয়োজন");
            return
       }
       getElement("coin-btn").innerText = remainingCoin;
       const cardTitle = btn.parentNode.parentNode.children[1].children[0].innerText
       const hotlineNumber = btn.parentNode.parentNode.children[2].children[0].innerText

       const TitleandNumber = cardTitle +", "+ hotlineNumber;


       alert("📞Calling " + TitleandNumber);

       

    })
}



 
