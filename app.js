const buttonSub = document.querySelector('#sub')
const buttonSum = document.querySelector('#sum')
const counter = document.querySelector('#counter')

buttonSub.addEventListener('click', () => {
    if (counter.innerHTML > 0) {
        counter.innerHTML--
    }
})
buttonSum.addEventListener('click', () => {
    counter.innerHTML++
})