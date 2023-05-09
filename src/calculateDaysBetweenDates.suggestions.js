function calculateDaysBetweenDates() {
    const beginDate = new Date(begin);
    const endDate = new Date(end);
    const differenceInTime = endDate.getTime() - beginDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays;
}
