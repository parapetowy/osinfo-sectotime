process.stdin.setEncoding('utf-8');

var OSinfo = require('../modules/OSinfo');
var secToTime = require('../modules/secTotime');
var reg = new RegExp('^[0-9]+$');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (reg.test(input)) {
        secToTime.print(input);
    }
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;

            case '/ver':
                process.stdout.write('Node version:\n');
                process.stdout.write(process.version + '\n');
                break;

            case '/lang':
                process.stdout.write('Language:\n');
                process.stdout.write(process.env.LANG + '\n');
                break;

            case '/getOSinfo':
                process.stdout.write('Info o systemie!\n');
                OSinfo.print();
                break;

            default:
                process.stderr.write('Wrong instruction!\n');
        }
    }
});