
let button = document.querySelector(".dice_container");
button.addEventListener("click", (e) => {

    let endpoint = "https://api.adviceslip.com/advice";

    fetch(endpoint, {
        method: "GET"
    })
        .then(response => response.json())
        .then(data => {
            document.querySelector("#id").innerHTML = `advice ${data.slip.id}`
            document.querySelector("#advice").innerHTML = data.slip.advice
        })
        .catch(err => console.log(err))
});