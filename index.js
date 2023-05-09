

// Declear all characters

const charactersArr = ["Tokonih", "Gerald","Dambola", "Micheal", "Abdul", "Aisha"]

function generateNames(){
    let result = ""
    let characterlength = charactersArr.length;    
    let index =  Math.floor(Math.random()*characterlength);       
    result  = charactersArr[index];  
//    return result

   function start(){
    let word = document.getElementById("word")
      word.innerHTML = result
  }
   start()
}

console.log(generateNames())

document.getElementById("btn").onclick = () => {
    // alert("working")
    generateNames()
}

// function start(){
//   let word = document.getElementById("word")
//     word.innerHTML = result
// }
// start()