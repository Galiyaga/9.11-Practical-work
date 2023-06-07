
window.onload = generateData();

function generateData() {
    const initPerson = personGenerator.getPerson();

    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('birthYearOutput').innerText = initPerson.year;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
};

function resetPerson() {
    personGenerator.resetPerson();

    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('patronymicOutput').innerText = '';
}