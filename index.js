const $arts = document.querySelector('#arts')
const $urls = document.querySelector('#urls')
const $btn = document.querySelector('#btn')
const $output = document.querySelector('.output')

$btn.addEventListener('click', () => {
    formList()
    renderList ()
})
let mainArray = []

function formList() {
    if(!($arts.vallue) && !($urls.value)) {
        alert('Надо заполнить оба столбика!')
    } else {
        let arts = $arts.value.split('\n')
        let urls = $urls.value.split('\n')
        if (arts.length === urls.length) {
            for (let i = 0; i < arts.length; i++) {
                mainArray.push({articul: arts[i], url: urls[i], id: 1000 + i})
            } 
        } else {
            alert('Количество артикулов не совпадает с количеством урлов! Перезагрузите страницу')
        }         
    }
    $arts.value = ''
    $urls.value = ''
}


function renderList () {
    mainArray.forEach(item => {
        let li = document.createElement('li')
        $output.insertAdjacentElement('afterbegin', li)
        li.textContent = `${item.url}|${item.articul}__${item.id}`
    })
}
