var power = true;
const button = document.getElementById('power');
button.addEventListener("click", () => {
    const button = document.getElementById('power');
    if (button.innerText === "POWER OFF"){
        button.innerText = "POWER ON";
        button.style.backgroundColor = "green";
        power = 1;
    }else{
        button.innerText = "POWER OFF";
        button.style.backgroundColor = "red";
        power = 0;
    }
})

