
window.onload = generateData();

function generateData() {
    const initPerson = personGenerator.getPerson();

    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('birthYearOutput').innerText = initPerson.year;
};

function resetPerson() {
    personGenerator.resetPerson();

    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
}