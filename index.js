

// Declear all characters

const charactersArr = ["Tokonih", "Gerald", "Dambola", "Micheal", "Abdul", "Aisha"]
let result = ""
let names = ""
document.getElementById('point')
let point = 3

function generateNames() {
    let characterlength = charactersArr.length;
    let index = Math.floor(Math.random() * characterlength);
    result = charactersArr[index];
    document.getElementById('word').innerHTML =  result
}
 generateNames()
// for the buttons 
let select = document.querySelectorAll(".select")
for (let i = 0; i < select.length; i++) {
    let names = ""
    let character = charactersArr.length
    let index = Math.floor(Math.random() * character)
    names = charactersArr[index]


    select[i].addEventListener("click", () => {
        select[i].innerHTML = names
        if(names == result ){
            setInterval(() =>{
           alert('congratulations! you won')
            }, 500);
           setTimeout(() => {
            window.location.reload()
            }, 1000)
           }else(point--)

        if (point < 0){
            setInterval( () => {
            alert('game over')
            });
            setTimeout(() => {
            window.location.reload()
            }, 1000)
        }
        document.getElementById('point').innerHTML = point
    //    if(names == result ){
    //     alert('sharp')
    //    }else alert('no way')
    })
}

// setInterval( () => {
//     generateNames()

// }, 3000)
// function confirm(){
//     if(result.innerHTML == names.innerHTML){
//         alert('working')
//     }else alert('try again')
// }
// confirm()




// function start(){
//   let word = document.getElementById("word")
//     word.innerHTML = result
// }
// start()