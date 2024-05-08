

function updateClock(){
    let hrs = document.getElementById('hrs')
let min = document.getElementById('min')
let sec = document.getElementById('sec')



const time = new Date()

hrs.innerHTML = time.getHours() < 10 ? "0" + time.getHours() : time.getHours()
min.innerHTML = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
sec.innerHTML = time.getSeconds()< 10 ? "0" + time.getSeconds() : time.getSeconds()

}

setInterval(()=>
{
   updateClock()
},1000)

