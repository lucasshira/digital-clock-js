const getClock = () => {
    const clock = document.querySelector('.clock');
    const dateElement = document.querySelector('.date');
    const currentDate = new Date();
    const dayOfWeek = currentDate.toLocaleDateString('pt-BR', {weekday: 'long' });
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    
    const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    const formattedDate = `${day}/0${month}/${year}`;
    const fullDate = `${dayOfWeek}, ${formattedDate}`;
    
    clock.textContent = formattedTime;
    dateElement.textContent = fullDate;
};
  
setInterval(getClock, 1000);
