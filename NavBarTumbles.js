var menu = document.querySelector('[alt="menu"]'),
    x = document.querySelector('[alt="x"]'),
    ul = document.querySelector('header > ul'),
    arrow = document.querySelector('.arrow'),
    locations = document.querySelector('.locations'),
    p = document.querySelectorAll('.locations p'),
    li = document.querySelectorAll('ul li '),
    header = document.querySelector('header'),
    article = document.getElementsByClassName('article'),
    second = document.getElementById('second'),
    facebook2,
    locations2,
    menuDeg = 0,
    xDeg = -85,
    str = 'menu',
    arrOfLi = ['FRANCHISING', 'TUMBLES LOCATIONS', 'CONTACT US'],
    arrOfP = ['Princeton, New Jersey', 'Glen Rock, New Jersey', 'Clinton, New Jersey', 'Enclitas, New Jersey', 'Alexandria, Virginia', 'Arlington, Virginia', 'Hillsdale, New Jersey'],
    remove,
    a

//Sve ovo ovako radjeno jer media queris na min-width:992px nije htelo da radi

if (document.documentElement.clientWidth >= 992) {
    // ul.style.height = '120px'
    // ul.style.display = 'inline-block'
    // ul.style.overflow = 'visible'
    // ul.style.marginLeft = '5%'
    // for (i = 0; i < li.length; i++) {
    // li[i].classList.add('li')
    // }
    ul.style.display = 'none'
    var newUl = document.createElement('article')
    newUl.setAttribute('class', 'article')
    for (i = 0; i < arrOfLi.length; i++) {
        if (i == 1) {
            var newLi = document.createElement('p')
            newLi.setAttribute('id', 'second')
            var textNodeLi = document.createTextNode(arrOfLi[i])
            newLi.appendChild(textNodeLi)
            newLi.innerHTML += '<i style="font-size:18px" class="fa facebook2">&#xf107;</i>'
            newUl.appendChild(newLi)
        } else if (i == 2) {
            var newLi = document.createElement('p')
            var a = document.createElement('a')
            a.setAttribute('id', 'third')
            a.setAttribute('href', './linked-pages/contact.html')
            var textNodeLi = document.createTextNode(arrOfLi[i])
            a.appendChild(textNodeLi)
            newLi.appendChild(a)
            newUl.appendChild(newLi)
        } else {
            var newLi = document.createElement('p')
            var textNodeLi = document.createTextNode(arrOfLi[i])
            newLi.appendChild(textNodeLi)
            newUl.appendChild(newLi)
        }
    }
    var div = document.createElement('div')
    div.setAttribute('class', 'locations2')
    for (i = 0; i < arrOfP.length; i++) {
        var pasus = document.createElement('p')
        var textNodeP = document.createTextNode(arrOfP[i])
        pasus.appendChild(textNodeP)
        div.appendChild(pasus)
    }
    newUl.firstElementChild.nextElementSibling.appendChild(div)
    header.appendChild(newUl)
    console.log(article)
    locations2 = document.getElementsByClassName('locations2')[0]
    facebook2 = document.getElementsByClassName('facebook2')[0]
    facebook2.addEventListener('click', () => {
        locations2.style.display = 'block'
        setTimeout(() => {
            locations2.style.opacity = '1'
            locations2.style.transition = '0.5s linear'
            window.addEventListener('click', (e) => {
                if (e.target.matches('.locations2') == false && e.target.matches('.facebook2') == false) {
                    locations2.style.opacity = '0'
                    setTimeout(() => {
                        locations2.style.display = 'none'
                    }, 501)
                }
            })
        }, 10)
    })

} else {
    ul.style.display = 'none'

}

window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth >= 992) {
        menu.style.display = 'none'
        x.style.display = 'none'
        ul.style.display = 'none'
        // ul.style.overflow = 'visible'
        // ul.style.marginLeft = '5%'
        // ul.style.transition = ''
        // for (i = 0; i < li.length; i++) {
        // li[i].classList.add('li')
        // }
        console.log('article length GREATER 992px:', article)
        if (article.length > 1) { // <= pri resize veceg windowa od 992 da brise article i da osatavi samo jedan
            console.log('go')
            for (i = 0; i < article.length - 2; i++) {
                // article[i].remove() radi i ovako
                remove = header.removeChild(article[i])
            }
            var newUl = document.createElement('article')
            newUl.setAttribute('class', 'article')
            for (i = 0; i < arrOfLi.length; i++) {
                if (i == 1) {
                    var newLi = document.createElement('p')
                    newLi.setAttribute('id', 'second')
                    var textNodeLi = document.createTextNode(arrOfLi[i])
                    newLi.appendChild(textNodeLi)
                    newLi.innerHTML += '<i style="font-size:18px" class="fa facebook2">&#xf107;</i>'
                    newUl.appendChild(newLi)
                } else {
                    var newLi = document.createElement('p')
                    var textNodeLi = document.createTextNode(arrOfLi[i])
                    newLi.appendChild(textNodeLi)
                    newUl.appendChild(newLi)
                }
            }
            var div = document.createElement('div')
            div.setAttribute('class', 'locations2')
            for (i = 0; i < arrOfP.length; i++) {
                var pasus = document.createElement('p')
                var textNodeP = document.createTextNode(arrOfP[i])
                pasus.appendChild(textNodeP)
                div.appendChild(pasus)
            }
            newUl.firstElementChild.nextElementSibling.appendChild(div)
            header.appendChild(newUl)
            locations2 = document.getElementsByClassName('locations2')[0]
            facebook2 = document.getElementsByClassName('facebook2')[0]
            facebook2.addEventListener('click', () => {
                locations2.style.display = 'block'
                setTimeout(() => {
                    locations2.style.opacity = '1'
                    locations2.style.transition = '0.5s linear'
                    window.addEventListener('click', (e) => {
                        if (e.target.matches('.locations2') == false && e.target.matches('.facebook2' == false)) {
                            locations2.style.opacity = '0'
                            setTimeout(() => {
                                locations2.style.display = 'none'
                            }, 501)
                        }
                    })
                }, 10)
            })

        } else if (article.length == 0) { // <= prelazak iz manje od 992 u vece 992 da napravi article
            var newUl = document.createElement('article')
            newUl.setAttribute('class', 'article')
            for (i = 0; i < arrOfLi.length; i++) {
                if (i == 1) {
                    var newLi = document.createElement('p')
                    newLi.setAttribute('id', 'second')
                    var textNodeLi = document.createTextNode(arrOfLi[i])
                    newLi.appendChild(textNodeLi)
                    newLi.innerHTML += '<i style="font-size:18px" class="fa facebook2">&#xf107;</i>'
                    newUl.appendChild(newLi)
                } else {
                    var newLi = document.createElement('p')
                    var textNodeLi = document.createTextNode(arrOfLi[i])
                    newLi.appendChild(textNodeLi)
                    newUl.appendChild(newLi)
                }
            }
            var div = document.createElement('div')
            div.setAttribute('class', 'locations2')
            for (i = 0; i < arrOfP.length; i++) {
                var pasus = document.createElement('p')
                var textNodeP = document.createTextNode(arrOfP[i])
                pasus.appendChild(textNodeP)
                div.appendChild(pasus)
            }
            newUl.firstElementChild.nextElementSibling.appendChild(div)
            header.appendChild(newUl)
        }
        locations2 = document.getElementsByClassName('locations2')[0]
        facebook2 = document.getElementsByClassName('facebook2')[0]
        facebook2.addEventListener('click', () => {
            locations2.style.display = 'block'
            setTimeout(() => {
                locations2.style.opacity = '1'
                locations2.style.transition = '0.5s linear'
                window.addEventListener('click', (e) => {
                    if (e.target.matches('.locations2') == false && e.target.mathces('.facebook2' == false)) {
                        locations2.style.opacity = '0'
                        setTimeout(() => {
                            locations2.style.display = 'none'
                        }, 501)
                    }
                })
            }, 10)
        })
    } else {
        if (str == 'menu') {
            menu.style.cssText = 'display:inline;transform:rotate(0deg);'
            x.style.display = 'none'
            ul.style.display = 'none'
            // for (i = 0; i < li.length; i++) {
            // li[i].classList.remove('li')
            // }
            console.log('article length LESS 992px', article)
            if (article.length > 0) { // <= pri promeni iz veceg od 992 na manje od 992 da obrise taj jedan article jer ne moze ih biti vise
                article[0].remove()
            }
        } else {
            x.style.cssText = 'display:inline;transform: translateY(10px) rotate(0deg);'
            menu.style.display = 'none'
            ul.style.display = 'block'
            ul.style.overflow = 'hidden'
            // ul.style.marginLeft = '0'
            // ul.style.transition = ''
            // for (i = 0; i < li.length; i++) {
            // li[i].classList.remove('li')
            // }
            if (article.length > 0) { // <= pri promeni iz veceg od 992 na manje od 992 da obrise taj jedan article jer ne moze ih biti vise
                article[0].remove()
            }
        }
    }
})
for (var i = 0; i < p.length; i++) {
    p[i].style.borderBottom = '0.2px solid #e0e0e0'
}

ul.style.height = '0px'

menu.addEventListener('click', () => {
    var intervalMenu = setInterval(() => {
        menuDeg += 1
        menu.style.transform = `rotate(${menuDeg}deg)`
        if (menuDeg >= 55) {
            menu.style.display = 'none'
            x.style.display = 'inline'
            str = 'x'
            clearInterval(intervalMenu)
        }
    }, 1)
    setTimeout(() => {
        var intervalX = setInterval(() => {
            xDeg += 1
            x.style.transform = `translateY(10px) rotate(${xDeg}deg)`
            if (xDeg >= 0) {
                clearInterval(intervalX)
            }
        }, 1)
    }, 47)
    ul.style.display = 'block'
    setTimeout(() => {
        ul.style.height = '140px'
        ul.style.padding = '15px'
        ul.style.overflow = 'hidden'
        ul.style.transition = '0.5s linear'
    }, 1)
})

x.addEventListener('click', () => {
    var intevalX = setInterval(() => {
        xDeg -= 1
        x.style.transform = `translateY(10px) rotate(${xDeg}deg)`
        if (xDeg <= -85) {
            x.style.display = 'none'
            menu.style.display = 'inline'
            str = 'menu'
            clearInterval(intevalX)
        }
    }, 1)
    setTimeout(() => {
        var intervalMenu = setInterval(() => {
            menuDeg -= 0.5
            menu.style.transform = `rotate(${menuDeg}deg)`
            if (menuDeg <= 0) {
                clearInterval(intervalMenu)
            }
        }, 1)
    }, 47)
    ul.style.height = '0'
    ul.style.padding = '0'
    ul.style.transition = '0.5s linear'
    setTimeout(() => {
        locations.style.display = 'none'
        arrow.style.transform = 'rotate(-90deg)'
    }, 500)
})

arrow.addEventListener('click', () => {
    console.log(locations.style.display)
    if (locations.style.display == '' || locations.style.display == 'none') { // <= '' pocetni uslov jer samo sa none ne radi
        arrow.style.transform = 'rotate(2deg)' // <= Enigma kako ne radi za 90deg nego za 2deg , najverovatnije je do slike
        locations.style.display = 'block'
        ul.style.height = '540px'
        ul.style.transition = ''
        setTimeout(() => {
            for (i = 0; i < p.length; i++) {
                p[i].style.opacity = '1'
                p[i].style.transition = '0.3s linear'
            }
        }, 1)
    } else {
        arrow.style.transform = 'rotate(-90deg)'
        console.log(arrow.style.transform)
        for (i = 0; i < p.length; i++) {
            p[i].style.opacity = '0'
        }
        setTimeout(() => {
            locations.style.display = 'none'
            ul.style.height = '140px'
        }, 301)
    }
})

var changeText = true;
setInterval(() => {
    document.querySelector('.globally-locally').style.animation = 'slide .5s ease-out 1 forwards'
    document.querySelector('.change').style.animation = 'hide .5s ease-out 1 forwards'
    setTimeout(() => {
        if (changeText) {
            document.querySelector('.globally-locally').animate([{
                marginLeft: '80px'
            },
            {
                marginLeft: '0px'
            }
            ], {
                    duration: 500,
                    easing: 'ease-out',
                    fill: 'forwards',
                })
            document.querySelector('.change').animate([{
                width: '0px'
            },
            {
                width: '165px'
            }
            ], {
                    duration: 500,
                    easing: 'ease-out',
                    fill: 'forwards'
                })
            document.querySelector('.change').textContent = 'locally.'
            changeText = false
        } else {
            document.querySelector('.globally-locally').animate([
                { marginLeft: '80px' },
                { marginLeft: '0px' }
            ], {
                    duration: 500,
                    easing: 'ease-out',
                    fill: 'forwards'
                })
            document.querySelector('.change').animate([
                { width: '0px' },
                { width: '200px' }
            ], {
                    duration: 500,
                    easing: 'ease-out',
                    fill: 'forwards'
                })
            document.querySelector('.change').textContent = 'globally.'
            changeText = true
        }
    }, 498)
    document.querySelector('.globally-locally').addEventListener('animationend', () => {
        document.querySelector('.globally-locally').style.animation = ''
        document.querySelector('.change').style.animation = ''
    })
}, 2500)