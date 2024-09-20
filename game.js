let tog = 1
let rollingSound = new Audio('notes/rpg-dice-rolling-95182.mp3')
let winSound = new Audio('notes/winharpsichord-39642.mp3')
let wrong = new Audio('notes/wrong.mp3')
let move = new Audio('notes/move.mp3')

let p1sum = 0

const cMajor = [
    { note: 'C4', frequency: 261.63 },
    { note: 'D4', frequency: 293.66 },
    { note: 'E4', frequency: 329.63 },
    { note: 'F4', frequency: 349.23 },
    { note: 'G4', frequency: 392.00 },
    { note: 'A4', frequency: 440.00 },
    { note: 'B4', frequency: 493.88 }
  ];

  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  
  // Function to play a random note and return its name
  function playRandomNote(randomIndex) {
    // const randomIndex = Math.floor(Math.random() * cMajor.length);
    const selectedNote = cMajor[randomIndex];
  
    const oscillator = audioCtx.createOscillator();
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(selectedNote.frequency, audioCtx.currentTime);
  
    oscillator.connect(audioCtx.destination);
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 1); // Play for 1 second
  
    return selectedNote.note; // Return the name of the note
  }

async function playsound(sound){
    await sound.play();
}


function play(player, psum, correction, num) {
    let sum
    p1sum = p1sum + num
    sum=p1sum
    document.getElementById(`${player}`).style.transition = `linear all .5s`

    if (sum < 10) {
        playsound(rollingSound)
        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`


    }

    else if (sum > 100) {
        winSound.play()
        alert("Game Won")
        location.reload()
        
    }

    else {
        playsound(rollingSound)
        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())
        // console.log(n1, n2)

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }

        }



    }
}


let random=0;
let pass=true;
let count=1;
let note="";

document.getElementById("diceBtn").addEventListener("click", function () {
    if(pass){
    let randomNumber = Math.floor(Math.random() * cMajor.length);
    random=randomNumber
    pass=false
    console.log(random)
    }
    note=playRandomNote(random)
})


function isCorrection(buttomPress){
    if(buttomPress===note){
        return true
    }else{
        return false
    }
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


document.getElementById("c4").addEventListener("click", function () {
    if(isCorrection('C4') && !pass){
        play('p1', 'p1sum', 0, count)
        pass=true
        count++
        var p1 = document.getElementById('p1');
        p1.style.backgroundColor = getRandomColor();
    }else{
        playsound(wrong)
        count=1;
        var p1 = document.getElementById('p1');
        p1.style.backgroundColor = '#333';
    }
    // play('p1', 'p1sum', 0, num)
})
document.getElementById("d4").addEventListener("click", function () {
    if(isCorrection('D4') && !pass){
        play('p1', 'p1sum', 0, count)
        pass=true
        count++
        var p1 = document.getElementById('p1');
        p1.style.backgroundColor = getRandomColor();
    }else{
        playsound(wrong)
        count=1;
        var p1 = document.getElementById('p1');
        p1.style.backgroundColor = '#333';
    }
    // play('p1', 'p1sum', 0, num)
})

document.getElementById("e4").addEventListener("click", function () {
    if(isCorrection('E4') && !pass){
        play('p1', 'p1sum', 0, count)
        pass=true
        count++
        var p1 = document.getElementById('p1');
        p1.style.backgroundColor = getRandomColor();
    }else{
        playsound(wrong)
        count=1;
        var p1 = document.getElementById('p1');
        p1.style.backgroundColor = '#333';
    }
})

document.getElementById("f4").addEventListener("click", function () {
    if(isCorrection('F4') && !pass){
        play('p1', 'p1sum', 0, count)
        pass=true
        count++
        var p1 = document.getElementById('p1');
        p1.style.backgroundColor = getRandomColor();
    }else{
        playsound(wrong)
        count=1;
        var p1 = document.getElementById('p1');
        p1.style.backgroundColor = '#333';
    }
})

document.getElementById("g4").addEventListener("click", function () {
    if(isCorrection('G4') && !pass){
        play('p1', 'p1sum', 0, count)
        pass=true
        count++
        var p1 = document.getElementById('p1');
        p1.style.backgroundColor = getRandomColor();
    }else{
        playsound(wrong)
        count=1;
        var p1 = document.getElementById('p1');
        p1.style.backgroundColor = '#333';
    }
})
document.getElementById("a4").addEventListener("click", function () {
    if(isCorrection('A4') && !pass){
        play('p1', 'p1sum', 0, count)
        pass=true
        count++
        var p1 = document.getElementById('p1');
        p1.style.backgroundColor = getRandomColor();
    }else{
        playsound(wrong)
        count=1;
        var p1 = document.getElementById('p1');
        p1.style.backgroundColor = '#333';
    }
})
document.getElementById("b4").addEventListener("click", function () {
    if(isCorrection('B4') && !pass){
        play('p1', 'p1sum', 0, count)
        pass=true
        count++
        var p1 = document.getElementById('p1');
        p1.style.backgroundColor = getRandomColor();
    }else{
        playsound(wrong)
        count=1;
        var p1 = document.getElementById('p1');
        p1.style.backgroundColor = '#333';
    }
})

