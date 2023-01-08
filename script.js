const correct = document.querySelector('.correct')
const sort = document.querySelector('.sort')
const sloppy = document.querySelector('.sloppy')

function start() {
  let words = sentences[(Math.floor(Math.random() * sentences.length))]
  words.endsWith('?') ? words = words.replace('?', ' ?') : false
  let wordsArray = words.split(' ')
  wordsArray = wordsArray.sort()

  correct.innerHTML = ''
  sort.classList = 'container sort'
  sort.innerHTML = ''
  sloppy.innerHTML = ''
  for (i = 0; i < wordsArray.length; i++) {
    var span = document.createElement("span")
    let t = document.createTextNode(wordsArray[i]);
    span.appendChild(t)
    sloppy.appendChild(span)
  }

  let sloppyChild = document.querySelectorAll('.sloppy>span')
  let removes = sloppyChild.length
  sloppyChild.forEach(element => {
    element.addEventListener('click', function () {
      if (element.innerHTML === 'Next Sentences') {
        start()
      } else if (element.innerHTML === 'See Valid') {
        correct.innerHTML = words
        element.innerHTML = 'Next Sentences'
      } else {
        element.classList.add('remove')
        sort.innerHTML += element.innerHTML + ' '
        if (--removes === 0) {
          if (words === sort.innerText) {
            sort.classList.add('green')
            element.innerHTML = 'Next Sentences'
          } else {
            sort.classList.add('red')
            element.innerHTML = 'See Valid'
          }
          element.classList.remove('remove')
        }
      }
    })
  })
}
start()