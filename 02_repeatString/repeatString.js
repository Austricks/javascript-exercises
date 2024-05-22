const repeatString = function(string, num) {
    if (num <0) {
        return "ERROR";
    }
    else {
        let rptString = "";
        for (i = 0; i < num; i++) {
            rptString += string;
        }
        return rptString;
    };
};
// Do not edit below this line
module.exports = repeatString;
