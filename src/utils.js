const MONTHS = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
];

const NAME = {
    0: 'Сегодня',
    1: 'Завтра',
    2: 'Послезавтра'
};

export const CurrentDate = (unixTime, day = -1) => {
    let a = new Date(unixTime * 1000);
    let year = a.getFullYear();
    let month = MONTHS[a.getMonth()];
    let date = a.getDate();
    if (day === -1) {
        return `${date} ${month}`
    } else {
        let d = `${date} ${month} ${year}`;
        return `${NAME[day]}, ${d}`;
    }
};
