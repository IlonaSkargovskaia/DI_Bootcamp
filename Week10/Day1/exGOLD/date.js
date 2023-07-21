function getDate() {
    let today = new Date();
    const targetDate = new Date('2024-01-01');
    const daysInMs = targetDate - today; // in ms
    const getDays = Math.round(daysInMs / (1000 * 60 * 60 * 24));
    //console.log(getDays);
    return getDays;
}


module.exports = {
    getDate
}
