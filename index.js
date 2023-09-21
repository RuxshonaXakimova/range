let input = document.querySelector('input')
let moduls = document.querySelectorAll('.module_box')
let choosed_module = document.querySelectorAll('.module_box p')
let items = document.querySelectorAll('.item')

let lastItemIDX = 0

items.forEach((item => {
    item.classList.add('none')
}))
items[0].classList.remove('none')

moduls.forEach((module, idx) =>{
    module.onclick = () => {
        input.value = idx*10
        items[lastItemIDX].classList.add('none')
        items[idx].classList.remove('none')
        input.setAttribute("value", idx*10)
        lastItemIDX = idx
        choosed_module.forEach(choosed => {
            choosed.classList.remove('choosed_module')
        })
        choosed_module[idx-1].classList.add('choosed_module')
    }
})

input.onchange = (event) => {
    // console.log(event.target.value);
    items.forEach((item, idx) => {
       if(input.value/10 == idx) {
        items[lastItemIDX].classList.add('none')
        item.classList.remove('none')
        lastItemIDX = idx
        choosed_module.forEach(choosed => {
            choosed.classList.remove('choosed_module')
        })
        choosed_module[idx-1].classList.add('choosed_module')
    }
    })
}