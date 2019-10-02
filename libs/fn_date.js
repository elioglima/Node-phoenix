"use strict";

/*
  var date1 = new Date("08/09/2017");
  var date2 = new Date("08/10/2017");
  var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24)); //gives day difference 
  //one_day means 1000*60*60*24
  //one_hour means 1000*60*60
  //one_minute means 1000*60
  //one_second means 1000
  console.log(diffDays)
*/
module.exports.NowToDecimal = () => {
    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return (" " + day + month + year + hour + min).toString().trim();
};

module.exports.NowToDHM = () => {
    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + "-" + month + "-" + day + "T" + hour + ":" + min + ":00.000Z";
};

module.exports.adds = (date, interval, units) => {
    var ret = new Date(date);
    var checkRollover = function() {
        if (ret.getDate() != date.getDate()) ret.setDate(0);
    };
    switch (interval.toLowerCase()) {
        case "year":
            ret.setFullYear(ret.getFullYear() + units);
            checkRollover();
            break;
        case "quarter":
            ret.setMonth(ret.getMonth() + 3 * units);
            checkRollover();
            break;
        case "month":
            ret.setMonth(ret.getMonth() + units);
            checkRollover();
            break;
        case "week":
            ret.setDate(ret.getDate() + 7 * units);
            break;
        case "day":
            ret.setDate(ret.getDate() + units);
            break;
        case "hour":
            ret.setTime(ret.getTime() + units * 3600000);
            break;
        case "minute":
            ret.setTime(ret.getTime() + units * 60000);
            break;
        case "second":
            ret.setTime(ret.getTime() + units * 1000);
            break;
        default:
            ret = undefined;
            break;
    }

    return ret;
};

module.exports.FormatDateTime = (formato, date) => {
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    switch (formato.toString().toLowerCase()) {
        case "dd/mm/yyyy":
            return day + "/" + month + "/" + year;

        case "mm/dd/yyyy":
            return month + "/" + day + "/" + year;

        default:
            return (
                year +
                "-" +
                month +
                "-" +
                day +
                "T" +
                hour +
                ":" +
                min +
                ":" +
                sec +
                ".000Z"
            );
    }
};

module.exports.ParseStrToDate = (sdata, formato) => {
    let Data;
    switch (formato) {
        case "mm/dd/yyyy":
            Data = sdata.substring(3, 5);
            Data += "/" + sdata.substring(0, 2);
            Data += "/" + sdata.substring(6, 10);
            return new Date(Data);
        case "dd/mm/yyyy":
            Data = sdata.substring(0, 2);
            Data += "/" + sdata.substring(3, 5);
            Data += "/" + sdata.substring(6, 10);
            return new Date(Data);
    }

    return new Date(sdata);
};
