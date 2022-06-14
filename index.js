const clickAlert = () => alert("You\'ve clicked on input");


function addingEventListener() {
    const input = document.getElementById("input");
    return input.addEventListener("click", clickAlert);
};

addingEventListener();