
const modalopenbtns =document.querySelectorAll("[data-modal]")
const closeModal = document.querySelector(".modal__close")
const modal = document.querySelector(".modal")
const timer =document.querySelector(".timer")
const days = document.querySelector("#days")
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")

modalopenbtns.forEach((btn) =>{
    btn.addEventListener("click" ,() =>{
        modal.classList.add("show" ,"fade")
        modal.classList.remove("hide")
        document.body.style.overflow = "hidden"
    })
})
closeModal.addEventListener("click" , () =>{
    modal.classList.remove("show");
    modal.classList.add("hide" , "fade");
    document.body.style.overflow = ""
})
window.addEventListener("click" , (e) =>{
  if (e.target == modal) {
    modal.classList.remove("show");
    modal.classList.add("hide" , "fade");
    document.body.style.overflow = ""
  }
})



let interval;
  
      interval = setInterval(() => {
        if (parseInt(seconds.innerHTML) > 0) {
          seconds.innerHTML--;
        } else if (parseInt(minutes.innerHTML) > 0) {
          minutes.innerHTML--;
          seconds.innerHTML = "59";
        } else if (parseInt(hours.innerHTML) > 0) {
          hours.innerHTML--;
          minutes.innerHTML = "59";
          seconds.innerHTML = "59";
        }else if (parseInt(days.innerHTML) > 0) {
          days.innerHTML-- 
          hours.innerHTML-- 
          hours.innerHTML ="59"
          minutes.innerHTML = "59";
          seconds.innerHTML = "59";
        }
        if (
          parseInt(days.innerHTML) == 0 &&
          parseInt(hours.innerHTML) == 0 &&
          parseInt(minutes.innerHTML) == 0 &&
          parseInt(seconds.innerHTML) == 0
        ) {
          clearInterval(interval);
          jsConfetti.addConfetti().then(() => jsConfetti.addConfetti())
          seconds.style.color = "red"
          minutes.style.color = "red"
          hours.style.color = "red"
          days.style.color = "red"
        }
      
      }, 1000);
const jsConfetti = new JSConfetti();


const tabcontent = document.querySelectorAll(".tabcontent");
const tabheader__item = document.querySelectorAll(".tabheader__item");
const tabheader = document.querySelector(".tabheader__items");


function hideTabs(){
    tabcontent.forEach((tabs) => {
        tabs.classList.add("hide")
    })
    
    tabheader__item.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
}

function showTabs(i=0) {
    tabcontent[i].classList.remove("hide")
    tabheader__item[i].classList.add("tabheader__item_active")
    tabcontent[i].classList.remove("hide")
}
hideTabs()
showTabs(0)

tabheader.addEventListener('click', (e) =>{
    let target =e.target;
    if (target && target.classList.contains ("tabheader__item")) {
        tabheader__item.forEach((item, index) =>{
            if (target == item) {
                hideTabs()
                showTabs(index)
            }
        })
    }
}
)


   
    

