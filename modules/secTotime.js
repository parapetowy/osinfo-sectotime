function secToTime(seconds) {
    var hh = Math.floor(seconds / 3600);
    var mm = Math.floor(seconds / 60) % 60;
    var ss = Math.floor(seconds) % 60;
    console.log(hh +'h:'+ mm +'m:'+ ss +'s');
}

exports.print = secToTime;