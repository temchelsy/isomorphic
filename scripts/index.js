const mainBox = document.getElementById('container')
const result = document.getElementById('result')

const refresh = document.createElement('button')
const firstString = document.createElement('input')
const secondString = document.createElement('input')
const check = document.createElement('button')

refresh.innerHTML = '<span class="material-symbols-outlined" style="color: white; padding: 5px;">refresh</span>'
firstString.placeholder = 'Enter the first string...'
secondString.placeholder = 'Enter the second string...'
check.innerHTML = "<p style= 'padding: 1rem;'>Check</p>"

mainBox.appendChild(refresh)
mainBox.appendChild(firstString)
mainBox.appendChild(secondString)
mainBox.appendChild(check)

check.addEventListener('click', checkIsomorphic)

function isomorphic (str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    const x = str1.indexOf(str1[i])
    const y = str2.indexOf(str2[i])
    if (str2[x] !== str2[i] || str1[y] !== str1[i]) {
      return false
    }
  }
  return true
}

function checkIsomorphic () {
  const string1 = firstString.value
  const string2 = secondString.value
  const answer = isomorphic(string1, string2)

  if (string1 === '' && string2 === '') {
    result.innerHTML = '<span class="material-symbols-outlined" style="color: red; font-size: 1.5rem;">error</span>' + 'No word has been entered, please try again!'
  } else if (string1.length !== string2.length) {
    result.innerHTML = '<span class="material-symbols-outlined" style="color: red; font-size: 1.5rem;">error</span>' + 'The length of your strings should be the same'
  } else if (answer) {
    result.innerHTML = 'The word entered is isomorphic'
  } else {
    result.innerHTML = 'The word entered is not isomorphic'
  }
}

refresh.addEventListener('click', () => {
  window.location.reload()
})
