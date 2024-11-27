let body = document.querySelector('body')
let sen = document.querySelector('.text')

function darkmode() {
    body.style.backgroundColor = "#252525"
    body.style.color = "white"
    sen.style.backgroundColor = '#252525'
    sen.style.border = '1px solid #F7F7F7'
    sen.style.color = "white"
    sen.value = ''
    localStorage.setItem("oq", "black")
}
function libhtmode() {
    body.style.backgroundColor = "#F7F7F7"
    body.style.color = "black"
    sen.style.backgroundColor = '#F7F7F7'
    sen.style.border = '1px solid #6C63FF'
    sen.value = ''
    localStorage.setItem("oq", "light")
}
function ipr() {
    console.log(sen.value);
    console.log("coin qoyila");
    console.log("поставте коины");
    sen.value = ''
}

let setcolor = localStorage.getItem("oq")

if (setcolor === "black") {
    darkmode()
} else {
    libhtmode()
}

