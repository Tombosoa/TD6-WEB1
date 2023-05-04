const container = document.querySelector('.container')
const but2 = document.getElementById('but2')
const but1 = document.getElementById('but1')
const nom = document.getElementById('name')
const firstname = document.getElementById('firstname')


but2.addEventListener("click", function () {
    container.classList.add('appearContainer')
    but2.classList.add('hideBtn')
})

but1.addEventListener("click", function () {
    if (nom.value != "" && firstname.value != ""){
    but2.classList.remove('hideBtn')
    container.classList.remove('appearContainer')
    setTimeout(function(){
        alert(nom.value+' '+firstname.value);
        nom.value = ""
    firstname.value = ""
    }, 1000)
}else{
    alert("There's an empty input")
}
})