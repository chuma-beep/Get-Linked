//count down date
let countDownDate = new Date('January 30, 2024 23:59:60')


//update tcount down
let count = setInterval(function(){
    

    // today's date & time
    let currentDate = new Date().getTime()

    // distance between now and current Date
    let Distance = countDownDate - currentDate

    //time calculations
    let days = Math.floor(Distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((Distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((Distance % (1000 * 60 * 60 )) / (1000 * 60))
    let seconds = Math.floor((Distance % (1000 * 60 )) / 1000)

     //display results in element
    document.getElementById('countdown').innerHTML = days  + "d " + hours + "h " + minutes + "m "
    + seconds + "s "


    //if the count down is nfinished write some text.
    if(Distance < 0) {
      clearInterval(x);
      document.getElementById('countdown').innerHTML = "EXPIRED"
    }

}, 1000)