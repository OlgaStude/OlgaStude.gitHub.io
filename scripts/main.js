
let items = document.querySelectorAll('#nav_btns p');

items.forEach(item => {
    item.addEventListener('click', () => {
        if(items[0].classList.contains('active')){
            items[0].classList.remove('active')
            items[0].classList.add('closed')
            items[1].classList.remove('closed')
            items[1].classList.add('active')
            document.getElementById('about').style.display = 'none'
            document.getElementById('projects').style.display = 'grid'
        }else{
            items[1].classList.remove('active')
            items[1].classList.add('closed')
            items[0].classList.remove('closed')
            items[0].classList.add('active')
            document.getElementById('about').style.display = 'flex'
            document.getElementById('projects').style.display = 'none'
        }
    })
});