function yearlist() {
    let year = "";
    for (let i = 1950; i <= 2023; i++) {
        year += "<option value='" + i + "'>" + i + "</option>";
    }
    document.write(year);
}
function daylist() {
    let day = "";
    for (let j = 1; j <= 32; j++) {
        day += "<option value='" + j + "'>" + j + "</option>";
    }
    document.write(day);
}
function monthlist() {
    let month = "";
    for (let k = 1; k <= 12; k++) {
        month += "<option value='" + k + "'>" + k + "</option>";
    }
    document.write(month);
}


    function check()
{
    const dob = new Date(document.getElementById("dob").value);

            // get the current date
            const now = new Date();

            // calculate the difference between two dates
            const diff = now.getTime() - dob.getTime();

            // calculate the number of milliseconds in a day, month and year
            const msPerDay = 24 * 60 * 60 * 1000;
            const msPerMonth = 30.44 * msPerDay;
            const msPerYear = 365.24 * msPerDay;

            // calculate age in terms of years, months and days
            const years = Math.floor(diff / msPerYear);
            const months = Math.floor((diff % msPerYear) / msPerMonth);
            const days = Math.floor(((diff % msPerYear) % msPerMonth) / msPerDay);

            // display the result
            document.getElementById("result").innerHTML = `Your age is ${years} years, ${months} months, and ${days} days.`;
}
    
    


