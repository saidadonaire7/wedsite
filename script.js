function updateTimers() {
    
    const now = new Date();
    const hours = 23 - now.getHours();
    const minutes = 59 - now.getMinutes();
    const seconds = 59 - now.getSeconds();

    const format = (n) => n < 10 ? '0' + n : n;

   
    const h = document.getElementById('hours');
    if(h) h.innerText = format(hours);
    
    document.getElementById('minutes').innerText = format(minutes);
    document.getElementById('seconds').innerText = format(seconds);
}

setInterval(updateTimers, 1000);
updateTimers();