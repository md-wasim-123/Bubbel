// Setting initial values
let time = 60;
let score =1;
let hNum = 0;
let sound = '1.mp3'
let audio1 = new Audio("2.mp3");
let audio2 = new Audio("4.mp3");

// Function to render random numbers in boxes
function bubbelgame() {
    var al = " ";
    for (var i = 1; i <= 140; i++) {
        let num = Math.floor(Math.random() * 50) + 1
        al += `<div id="clickHit" class="box-bubbel">${num}</div>`
    }
    document.querySelector('#bottom-box').innerHTML = al

}
bubbelgame()// Call the bubbelgame function to populate boxes

// Function to decrement time every second
function bubbelTime() {
    let ti = setInterval(() => {
        if (time > 0) {
            time--;
        } else {
            audio2.play();
            clearInterval(ti)
        document.querySelector('#bottom-box').innerHTML = "<h1 id=w>Game Over..</h1>";

        }
        document.querySelector('#timer').innerHTML = time
    }, 1000)
}
bubbelTime()// Call the bubbelTime function to start the timer




// Function to generate a random number for hits
function hitnumber() {
    hNum = Math.floor(Math.random() * 50) + 1
    // console.log(hNum)
    document.querySelector('#hit').innerHTML = hNum

}
hitnumber()// Call the hitnumber function to initialize hit number




function all() {
    score += score  // This line appears to double the score, you might want to adjust it
    document.getElementById("scoreVal").textContent = score

}
all(); // Call the all function to update the score

// Event listener for box clicks
document.querySelector("#bottom-box").addEventListener("click", function (dets) {
    const boxNumber = Number(dets.target.textContent)
    if (boxNumber === hNum) {
        all(); // Increase score
        hitnumber(); // Generate new hit number
        bubbelgame(); // Generate new set of boxes
        audio1.play(); // Play audio
    }
    else {
        audio2.play();
        alert("not Numer Match")
    }
})

document.querySelector("#refreshButton").addEventListener("click",function(){
    location.reload();// Reload page when refresh button is clicked
})


