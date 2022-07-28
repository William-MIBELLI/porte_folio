let menu = document.querySelector('.menu')
let item = document.querySelectorAll('.menu-item')
let titre = document.querySelector('#titre')
let sub = document.querySelector('#sub')
let intro = document.querySelector('#intro')
let btn = document.querySelector('#launcher')
let main = document.querySelector('.main')
let header = document.querySelector('.pres')
let footer = document.querySelector('.footer')


let tl = new TimelineMax({paused: true})


tl
.from(titre, 1 , {x:-200, opacity:0})
.from(sub,1,{opacity:0},'<')
.from(intro,1,{y:+100, opacity:0},'-=0.5')
.from(menu, 0.4, {y:-120, opacity:0},'<')
.from(btn, 1, {x:100, opacity:0},'-=0.3')


window.addEventListener('load', () => { tl.play() })

btn.addEventListener('click', () => { 
    header.style.transition= 'all 0.6s ease-in-out'
    main.style.display = 'block'
    footer.style.display = 'block'
    main.style.opacity= '1'
    main.style.transition = 'display 2s ease'
    footer.style.display = 'block'
    location.href='#ancre'
    AOS.init({
        easing: 'ease',
        duration: 800
    })
})