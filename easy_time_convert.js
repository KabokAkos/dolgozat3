function timeConvert(num) { 
    let hours = Math.floor(num / 60);
    let reaminingMinutes = num % 60;

    if (num <= 0){
      return "00:00";
    }

    return `${String(hours).padStart(2, '0')}:${String(reaminingMinutes).padStart(2, '0')}`;
}