const clock = document.getElementById("clock");
// const clock=document.getElementById('')
// console.log(clock);

// let date=new Date()

// console.log(date.toLocaleTimeString());

setInterval(() => {
    let date = new Date();

  // console.log(date.toLocaleTimeString());

    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
