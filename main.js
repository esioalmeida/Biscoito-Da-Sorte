const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const clickOnCookie = document.querySelector('.clickOnCookie')
const tryAgain = document.querySelector('#tryAgain')

const phrases = [
  "Tente uma, duas, três vezes e se possível tente a quarta, a quinta e quantas vezes for necessário. Só não desista nas primeiras tentativas, a persistência é amiga da conquista. Se você quer chegar aonde a maioria não chega, faça o que a maioria não faz.",
  "Quando você acredita em algo, acredite até o fim. Não dê margem para nenhum tipo de dúvida.",
  "O entusiasmo é a maior força da alma. Conserva-o e nunca te faltará poder para conseguires o que desejas.",
  "No meio da confusão, encontre a simplicidade. A partir da discórdia, encontre a harmonia. No meio da dificuldade reside a oportunidade.",
  "A sua vida é 10% do que acontece contigo e 90% de como você reage a isso.",
  "Solucionar grandes problemas é mais fácil do que solucionar pequenos problemas.",
]

clickOnCookie.addEventListener('click', openCookie)
tryAgain.addEventListener('click', closeCookie)
document.addEventListener('keydown', pressedEnter)

function openCookie() {
  newPhrase = choosePhrase()
  screen2.querySelector("p").innerText = newPhrase
  screen1.classList.add('hide')
  screen2.classList.remove('hide')
}

function closeCookie() {
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
}

function choosePhrase() {
  let randomNumber = Math.round(Math.random() * 5)
  return phrases[randomNumber]
}

function pressedEnter(e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    closeCookie()
  } else if (e.key == 'Enter' && screen2.classList.contains('hide')) {
    openCookie()
  }
}