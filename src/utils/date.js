const formatDate = (date) => {
    const options = {year: 'numeric', month: 'short'};
    const returnDate = new Date(date).toLocaleDateString('nl-NL', options);
    // uppercase first letter
    return returnDate.charAt(0).toUpperCase() + returnDate.slice(1);
}

const getWrittenTimeDifference = (startDate, endDate)=> {
    // Parse the dates into Date objects
    const start = new Date(`${startDate}-01`);
    const end = endDate ? new Date(`${endDate}-01`) : new Date();

    // Calculate the total difference in months
    const totalMonthsDiff = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

    // Calculate full years and remaining months
    const yearsDiff = Math.floor(totalMonthsDiff / 12);
    const remainingMonths = totalMonthsDiff % 12;

    // Format the result in Dutch text
    let result = '';

    if (yearsDiff > 0) {
        result += `${yearsDiff} jaar`;
    }

    if (remainingMonths > 0) {
        result += yearsDiff > 0 ? ` en ${remainingMonths} maand${remainingMonths > 1 ? 'en' : ''}` : `${remainingMonths} maand${remainingMonths > 1 ? 'en' : ''}`;
    }

    return result || "0 maanden"; // Return "0 maanden" if the difference is exactly zero
}

export {
    formatDate,
    getWrittenTimeDifference
};