document.body.append(ul) 

const ul = document.createElement('ul')

for (let i = 0; i < 3; i++) {
    const li = document.createElement('li')
    li.textContent = (i + 1).toString()
    ul.append(li)
}

main.Remove(main)
const newHeader = document.createElement('h1')
newHeader.setAttribute('id', 'victory')
newHeader.textContent = 'Luis is the CHAMPION'
document.body.append(newHeader)