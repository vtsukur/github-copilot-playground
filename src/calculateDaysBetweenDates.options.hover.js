function calculateDaysBetweenDates() {
    const begin = document.getElementById("begin").value;
    const end = document.getElementById("end").value;
    const beginDate = new Date(begin);
    const endDate = new Date(end);
    const differenceInTime = endDate.getTime() - beginDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    document.getElementById("result").innerHTML = differenceInDays;
}
