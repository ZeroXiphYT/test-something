const d = new Date();
var year = d.getFullYear();
var month = d.getMonth()+1;
var day = d.getDate();
var months = {
"1":"January",
"2":"Febuary",
"3":"March",
"4":"April",
"5":"May",
"6":"June",
"7":"July",
"8":"August",
"9":"September",
"10":"October",
"11":"November",
"12":"December"
};
var monthName = months[month];

var date = `${month}/${day}/${year}`;
document.getElementById('date').innerHTML = 'The Date Is: ' +  monthName + ' ' + day + ', ' + year
