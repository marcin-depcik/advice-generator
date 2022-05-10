const section = document.querySelector('.advice-section')
const btn = document.querySelector('.btn')

window.addEventListener('load', () => generateAdvice(randomID()))
btn.addEventListener('click', () => generateAdvice(randomID()))

const randomID = () => {
    return Math.ceil(Math.random() * 200)
}

async function generateAdvice(id) {
    const res = await fetch(`https://api.adviceslip.com/advice/${id}`)
    const data = await res.json()
    renderAdvice(data)
}

function renderAdvice(data) {
    section.innerHTML = `<p>Advice #${data.slip.id}</p>
                         <h1>"${data.slip.advice}"</h1>`
}
