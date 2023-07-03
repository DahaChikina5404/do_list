let userName = prompt('Введите Ваше имя')

let myTitle = document.getElementById('title')

    if (userName) {
        myTitle.innerHTML = 'Ваш список дел, ' + userName + ':'
    } else {
        myTitle.innerHTML = 'Список дел анонимного пользователя' + ':'
    }



let count = 0

function addJob() {

    if (count == 5) {
        document.getElementById('error').innerHTML = 'Можно ввести до 5 дел'
        return
    }

    let myList = document.getElementById('list')
    let myInput = document.getElementById('input')
    let value = myInput.value
       
    count ++

    
    myList.innerHTML = myList.innerHTML + '<p>' + count + '. ' + value + '</p>'

    document.getElementById('input').value = ''
}