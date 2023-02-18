let n = Math.floor(Math.random()*100)
alert("A number has been generated between 1 to 100!\n")
let numGuess = 0
while(true) {
  let guess = Number.parseInt(prompt("Try to guess the number!"))
  numGuess++
  if(guess==n){
    alert(`Congratulations on guessing ${n} correctly! Your final score
    is `+ (100-numGuess)+`!`)
    break
  }
  else if (guess>n)
    alert(`${guess} is greater than the generated number! Try lesser!\n`)
  else
    alert(`${guess} is smaller than the generated number! Try higher!\n`)
}

