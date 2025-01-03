let set = () => {
    let display = document.querySelector("#d1");
    let inp = document.querySelector("#inp").value; // Get user input (HH:MM format)
    let audio = document.querySelector("#ne"); // Audio element

    // Set an interval to check the time every second
    let a = setInterval(() => {
        let now = new Date();
        let currentTime = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;

        if (currentTime === inp) { 0
            display.innerHTML = "Alarm is ringing!";
            audio.play();

            
            setTimeout(() => {
                // audio.pause();
                clearInterval(a); 
                display.innerHTML = "Alarm stopped";
            }, 7000);
        } else {
            display.innerHTML = "Alarm is set for " + inp;
        }
    }, 1000);
};



let isname=true;
setInterval(()=>{
    let display = document.querySelector("#vansh")
    display.innerHTML=isname?"V.Alram":"Clock "
    isname= !isname
},2000)