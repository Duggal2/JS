function text() {
    let name = prompt("Введите имя")
    document.getElementById('name').textContent = "Имя: " + name
    let age = prompt("Введите возраст")
    document.getElementById('age').textContent = "Лет: " + age
    let secondname = prompt("Фамилия")
    document.getElementById('secondname').textContent = "Фамилия: " + secondname
    let iam = prompt("О себе")
    document.getElementById('iam').textContent = "О себе: " + iam
    let it = prompt("Специальность")
    document.getElementById('it').textContent = "Специальность: " + it
    let birt = prompt("Дата рождения")
    document.getElementById('birt').textContent = "Дата рождения: " + birt
    document.getElementById('head').style.backgroundColor = 'black'
}