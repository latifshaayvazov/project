
// const modalopenbtns =document.querySelectorAll("[data-modal]")
// const closeModal = document.querySelector(".modal__close")
// const modal = document.querySelector(".modal")
// const timer =document.querySelector(".timer")
// const days = document.querySelector("#days")
// const hours = document.querySelector("#hours")
// const minutes = document.querySelector("#minutes")
// const seconds = document.querySelector("#seconds")

// modalopenbtns.forEach((btn) =>{
//     btn.addEventListener("click" ,() =>{
//         modal.classList.add("show" ,"fade")
//         modal.classList.remove("hide")
//         document.body.style.overflow = "hidden"
//     })
// })
// closeModal.addEventListener("click" , () =>{
//     modal.classList.remove("show");
//     modal.classList.add("hide" , "fade");
//     document.body.style.overflow = ""
// })
// window.addEventListener("click" , (e) =>{
//   if (e.target == modal) {
//     modal.classList.remove("show");
//     modal.classList.add("hide" , "fade");
//     document.body.style.overflow = ""
//   }
// })



// let interval;
  
//       interval = setInterval(() => {
//         if (parseInt(seconds.innerHTML) > 0) {
//           seconds.innerHTML--;
//         } else if (parseInt(minutes.innerHTML) > 0) {
//           minutes.innerHTML--;
//           seconds.innerHTML = "59";
//         } else if (parseInt(hours.innerHTML) > 0) {
//           hours.innerHTML--;
//           minutes.innerHTML = "59";
//           seconds.innerHTML = "59";
//         }else if (parseInt(days.innerHTML) > 0) {
//           days.innerHTML-- 
//           hours.innerHTML-- 
//           hours.innerHTML ="59"
//           minutes.innerHTML = "59";
//           seconds.innerHTML = "59";
//         }
//         if (
//           parseInt(days.innerHTML) == 0 &&
//           parseInt(hours.innerHTML) == 0 &&
//           parseInt(minutes.innerHTML) == 0 &&
//           parseInt(seconds.innerHTML) == 0
//         ) {
//           clearInterval(interval);
//           jsConfetti.addConfetti().then(() => jsConfetti.addConfetti())
//           seconds.style.color = "red"
//           minutes.style.color = "red"
//           hours.style.color = "red"
//           days.style.color = "red"
//         }
      
//       }, 1000);
// const jsConfetti = new JSConfetti();


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

let form = document.forms.modal

form.addEventListener("submit" , (e) =>{
e.preventDefault()

  let user ={}

  let fm = new FormData(form)

  fm.forEach((item , key)=> {
    user[key] = item;
  })
  console.log(user);
} )

// tiumer



let deadLine = "2024-05-01";
function getTimerRemainig(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date()) ,
  days = Math.floor(t / (1000 * 60 * 60 * 24)),
  hours = Math.floor(t / (1000 * 60 * 60)% 24),
  minutes = Math.floor(t / ( 1000 * 60) % 60),
  seconds = Math.floor((t / 1000)% 60);

  return{
    total: t,
    days,
    hours,
    minutes,
    seconds,
  }
}

   getTimerRemainig(deadLine)

   function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
    days = timer.querySelector("#days"),
    hours = timer.querySelector("#hours"),
    minutes = timer.querySelector("#minutes"),
    seconds = timer.querySelector("#seconds"),
    timerInterval = setInterval(updateTime,1000);
   
   
    function updateTime() {
     
      const t = getTimerRemainig(deadLine);

      days.innerHTML = t.days
      hours.innerHTML = t.hours
      minutes.innerHTML = t.minutes
      seconds.innerHTML = t.seconds
      
      
      if (seconds.innerHTML <= 9) {
        return (seconds.innerHTML =`0${seconds.innerHTML}`)
        } else {
        return (seconds.innerHTML = seconds.innerHTML)
        };
        
      }
    
    
   }
    





   setClock(".timer", deadLine)

