new JustValidate('.about__form', {
    rules: {
        text: {
            required: true,
            minLength: 5
        },
        name: {
            required: true,
            minLength: 2,
            maxLength: 10,
        },
        mail: {
            required: true,
            email: true
        },
        checkbox: {
            required: true
        },
    },
    messages: {
        text: 'Напишите Ваше сообщение',
        name: 'Как вас зовут',
        mail: 'Укажите ваш e-mail',
        checkbox: 'Необходимо согласие',
    },
});