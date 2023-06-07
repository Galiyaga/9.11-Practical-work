const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 9,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 9,
        "list": {     
            "id_1": "Анастасия",
            "id_2": "Мария",
            "id_3": "Ирина",
            "id_4": "Артемида",
            "id_5": "Дарья",
            "id_6": "Наталья",
            "id_7": "Марина",
            "id_8": "Дарина",
            "id_9": "Елена",
            "id_10": "Анна"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        const availableNames = this.person.gender == this.GENDER_FEMALE ? this.firstNameFemaleJson : this.firstNameMaleJson
        return this.randomValue(availableNames);
    },


    randomSurname: function() {
        let surname = this.randomValue(this.surnameJson);

        if (this.person.gender == this.GENDER_FEMALE) {
           return surname + 'a'
        } else {
            return surname;
        }
    },

    randompatronymic: function() {
        let patronymic = this.randomValue(this.firstNameMaleJson);
        if (this.person.gender === this.GENDER_MALE) {
            if (patronymic.endsWith('й')) {
                return patronymic.replace ('й', 'евич');
            } else if (patronymic.endsWith('а')) {
                return patronymic.replace ('а', 'ич');
            } else {
                return patronymic + 'ович'
            };
        } else {
            if (patronymic.endsWith('й')) {
                return patronymic.replace ('й', 'евна');
            } else if (patronymic.endsWith('а')) {
                return patronymic.replace ('а', 'ична');
            } else {
                return patronymic + 'овна'
            };
        }   
    },


    getPerson: function () {
        this.person = {};

        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.year = this.randomIntNumber(2023, 1970) + ' года рождения';
        this.person.patronymic = this.randompatronymic();

        return this.person;
    },

    randomGender: function() {
        return this.randomIntNumber() ? this.GENDER_FEMALE : this.GENDER_MALE 
    },

    resetPerson: function() {
        this.person = {};
    }
};
