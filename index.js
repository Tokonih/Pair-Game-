

// Declear all characters

const charactersArr = ["Tokonih", "Gerald", "Dambola", "Micheal", "Abdul", "Aisha"]
let point = 3
function generateNames() {
    let result = ""
    let characterlength = charactersArr.length;
    let index = Math.floor(Math.random() * characterlength);
    result = charactersArr[index];
    //    return result

    function start() {
        let word = document.getElementById("word")
        word.innerHTML = result
    }
    return start()
}

let generate = generateNames()

// document.getElementById("btn").onclick = () => {
//     // alert("working")
//     generateNames()
// }




let select = document.querySelectorAll(".select")
for (let i = 0; i < select.length; i++) {
    let names = ""
    let character = charactersArr.length
    let index = Math.floor(Math.random() * character)
    names = charactersArr[index]


    select[i].addEventListener("click", () => {
        select[i].innerHTML = names
       
    })
    
    
}

// if (result.value == names.value){
//     alert("")
// }

// function start(){
//   let word = document.getElementById("word")
//     word.innerHTML = result
// }
// start()