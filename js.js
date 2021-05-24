const navigation = document.querySelector('.header__nav')

class Scroll {
    constructor(set) {
        if (typeof set.el == 'string') {
            this.el = document.querySelector(set.el)
        } else if (set.el instanceof HTMLElement) {
            this.el = set.el
        }
        this.unit = set.unit
        this.top = set.top
        this.el.style.position = 'fixed'
        this.el.style.top = this.top + this.unit
        window.addEventListener('scroll', () => this.scroll())
        window.addEventListener('resize', () => this.scroll())
    }
    scroll() {
        this.mean = this.scrollUnit()
        // pageYOffset = tepadan scrollgacha bo'lgan masofa
        if (this.mean - pageYOffset > 0) {
            this.el.style.top = `${this.mean - pageYOffset}px`
        } else {
            this.el.style.top = 0
        }
        console.log(this.top - pageYOffset);
    }
    scrollUnit() {
        if (this.unit == 'px') {
            return this.top
        } else if (this.unit == '%' || this.unit == undefined) {
            return window.innerHeight / 100 * this.top - this.el.clientHeight
        }
    }
}

const obj = new Scroll({
    el: '.header__nav',
    top: '100',
    unit: '%'
})


class Hover {
    constructor(opt) {
        this.opt = document.querySelector(opt)

        this.opt.addEventListener("mouseover", () => this.move())
    }
    move() {
        this.opt.style.margin = `${this.random()}px ${this.random()}px ${this.random()}px ${this.random()}px`
    }
    random() {
        return Math.random() * 800
    }
}

const hover = new Hover(".header__content")
//typing animation
let  i = 0
class Typing {
    constructor(t) {
        this.t = document.querySelector(t);
        this.con = this.t.innerHTML;
        this.fullText = '';
        this.type();
    }
    type(i = 0) {
        this.fullText += this.con[i]
        i++
        this.t.innerHTML = this.fullText
        if(this.con.length > i){
            setTimeout(() => this.type(i), 20)
        }
                
    }
}

new Typing("h1")