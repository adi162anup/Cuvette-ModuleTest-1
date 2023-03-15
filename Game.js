/* <script src="confetti.js"></script> */

const r = document.getElementById("rock")
const p = document.getElementById("paper")
const s = document.getElementById("scissor")
const usercnt = document.getElementById("user")
const compcnt = document.getElementById("computer")
const result = document.getElementById("result")
const playbtn = document.getElementById("play")
const replaybtn = document.getElementById("replay")
const nextbtn = document.getElementById("next")
const resetbtn = document.getElementById("reset")
const line1 = document.getElementById("line1")
const line2 = document.getElementById("line2")
const line3 = document.getElementById("line3")
const userpick = document.getElementById("userpick")
const pcpick = document.getElementById("pcpick")
const openBtn = document.querySelector(".rules");
const modal = document.querySelector(".rules-overlay");
const closeBtn = document.querySelector(".close-rules");


let Ucount = localStorage.getItem('user')||0 
let Ccount = localStorage.getItem('computer')||0 
usercnt.innerText = Ucount
compcnt.innerText = Ccount

const options = ["rock","paper","scissor"]

function Logic(UserTurn,SystemTurn) {
    if(UserTurn===SystemTurn) {
        document.getElementById("userSelection").innerHTML = `<button id="user${UserTurn}"><img src="${UserTurn}.png" alt="${UserTurn}"></button>`
        document.getElementById("pcSelection").innerHTML = `<button id="pc${SystemTurn}"><img src="${SystemTurn}.png" alt="${SystemTurn}"></button>`
        return "TIE UP"
    }
    else if((UserTurn==="rock" && SystemTurn=="scissor") || (UserTurn=="paper" && SystemTurn=="rock") || (UserTurn=="scissor" && SystemTurn=="paper")){
        Ucount++
        UpdateCnt()
        localStorage.setItem('user', Ucount)
        document.getElementById("userSelection").innerHTML = `<button id="user${UserTurn}" class="winuser"><img src="${UserTurn}.png" alt="${UserTurn}"></button>`
        document.getElementById("pcSelection").innerHTML = `<button id="pc${SystemTurn}"><img src="${SystemTurn}.png" alt="${SystemTurn}"></button>`
        return "YOU WIN<br/><span id='agpc'>AGAINST PC</span>"
    }
    else {
        Ccount++
        UpdateCnt()
        localStorage.setItem('computer', Ccount)
        document.getElementById("userSelection").innerHTML = `<button id="user${UserTurn}"><img src="${UserTurn}.png" alt="${UserTurn}"></button>`
        document.getElementById("pcSelection").innerHTML = `<button id="pc${SystemTurn}" class="winuser"><img src="${SystemTurn}.png" alt="${SystemTurn}"></button>`
        return "YOU LOST<br/><span id='agpc'>AGAINST PC</span>"
    }
}

function UpdateCnt() {
    usercnt.innerText = Ucount
    compcnt.innerText = Ccount
    // console.log(usercnt.innerText)
    // console.log(compcnt.innerText)
}

function HideBtns(UserTurn,SystemTurn) {
    r.style.display = 'none'
    p.style.display = 'none'
    s.style.display = 'none'
    line1.style.display = 'none'
    line2.style.display = 'none'
    line3.style.display = 'none'
    result.style.display = 'block'
    document.getElementById("userSelection").style.display = 'block'
    document.getElementById("pcSelection").style.display = 'block'
    userpick.style.display = 'block'
    pcpick.style.display = 'block'
    resetbtn.style.display = 'none'
}

function ShowBtns() {
    r.style.display = 'inline'
    p.style.display = 'inline'
    s.style.display = 'inline'
    line1.style.display = 'block'
    line2.style.display = 'block'
    line3.style.display = 'block'
    result.textContent = ""
    result.style.display = 'none'
    document.getElementById("userSelection").style.display = 'none'
    document.getElementById("pcSelection").style.display = 'none'
    playbtn.style.display = 'none'
    replaybtn.style.display = 'none'
    userpick.style.display = 'none'
    pcpick.style.display = 'none'
    nextbtn.style.display = 'none'
    resetbtn.style.display = 'inline'
    openBtn.style.marginLeft = '90%'
}

function Confetti() {
    const start = () => {
        setTimeout(function() {
            confetti.start()
        },500)
    }

    const stop = () => {
        setTimeout(function() {
            confetti.stop()
        },2000)
    }

    start()
    stop()
}

function openModal() {
    modal.classList.remove("hide");
}
  
function closeModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("rules-overlay"))
            modal.classList.add("hide");
    } else modal.classList.add("hide");
}

r.addEventListener('click', () => {
    const UserTurn = 'rock';
    const SystemTurn = options[Math.floor(Math.random()*options.length)]
    const res = `${Logic(UserTurn, SystemTurn)}`
    result.innerHTML = res 
    HideBtns(UserTurn,SystemTurn)
    // console.log(result.innerHTML)
    // console.log(result.innerHTML==='YOU WIN<br><span id="agpc">AGAINST PC</span>')
    if(result.innerHTML==='TIE UP'){
        replaybtn.style.display = 'block'
        // console.log('check4')
    }
    else if(result.innerHTML==='YOU WIN<br><span id="agpc">AGAINST PC</span>'){
        nextbtn.style.display = 'block'
        // console.log('Check5')
        playbtn.style.display = 'block'
        openBtn.style.marginLeft = "83%"
        Confetti()
    }
    else{
        playbtn.style.display = 'block'
    }
});

p.addEventListener('click', () => {
    const UserTurn = 'paper';
    const SystemTurn = options[Math.floor(Math.random()*options.length)]
    const res = `${Logic(UserTurn, SystemTurn)}`
    result.innerHTML = res 
    HideBtns(UserTurn,SystemTurn)
    if(result.innerHTML==='TIE UP'){
        replaybtn.style.display = 'block'
    }
    else if(result.innerHTML==='YOU WIN<br><span id="agpc">AGAINST PC</span>'){
        nextbtn.style.display = 'block'
        // console.log('Check5')
        playbtn.style.display = 'block'
        openBtn.style.marginLeft = "83%"
        Confetti()
    }
    else{
        playbtn.style.display = 'block'
    }
});

s.addEventListener('click', () => {
    const UserTurn = 'scissor';
    const SystemTurn = options[Math.floor(Math.random()*options.length)]
    const res = `${Logic(UserTurn, SystemTurn)}`
    result.innerHTML = res 
    HideBtns(UserTurn,SystemTurn)
    const userchoice = `${UserTurn}`
    const pcchoice = `${SystemTurn}`
    if(result.innerHTML==='TIE UP'){
        replaybtn.style.display = 'block'
        console.log('Check')
    }
    else if(result.innerHTML==='YOU WIN<br><span id="agpc">AGAINST PC</span>'){
        nextbtn.style.display = 'block'
        // console.log('Check5')
        playbtn.style.display = 'block'
        openBtn.style.marginLeft = "83%"
        Confetti()
    }
    else{
        playbtn.style.display = 'block'
        console.log('Check1')
    }
});

playbtn.addEventListener('click', () => {
    ShowBtns()
})

replaybtn.addEventListener('click', () => {
    ShowBtns()
})

nextbtn.addEventListener('click', () => {
    location.href = "win.html"
})

resetbtn.addEventListener('click',() => {
    Ucount = 0
    Ccount = 0
    localStorage.removeItem("user")
    localStorage.removeItem("computer")
    usercnt.innerHTML = Ucount
    compcnt.innerHTML = Ccount
})

openBtn.addEventListener("click", () => {
    openModal()
})

modal.addEventListener("click", (e) => {
     closeModal(e, true)
})

closeBtn.addEventListener("click", () => {
    closeModal()
})

