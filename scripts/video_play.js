

let sections = document.querySelectorAll('section')

sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.children[section.children.length - 1].children[0].play()
        if(section.children[section.children.length - 1].children[1] != undefined){
            section.children[section.children.length - 1].children[1].play()
        }
    })
});

sections.forEach(section => {
    section.addEventListener('mouseleave', () => {
        section.children[section.children.length - 1].children[0].pause()
        if(section.children[section.children.length - 1].children[1] != undefined){
            section.children[section.children.length - 1].children[1].pause()
        }
    })
});

let title = document.querySelector('#nav div');
let original_height = document.querySelector('#nav').style.height;

title.addEventListener('click', () => {
    if(document.querySelector('#nav').style.height == '40px' || document.querySelector('#nav').style.height == original_height){
        document.querySelector('#nav').style.height = 'fit-content'
        document.querySelector('#nav img').style.transform = 'rotate(90deg)'
    }else{
        document.querySelector('#nav').style.height = '40px'
        document.querySelector('#nav img').style.transform = 'rotate(270deg)'
    }
})