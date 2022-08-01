const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arr = [];
    for (i = 0; i < expr.length; i += 10){
        arr.push(expr.slice(i, i + 10))
    }
    let res = '';
    for (let value of arr) {        
        if (value === '**********'){
            res += ' '
        }
        else {
            let letter = '';
            for (let j = 0; j < value.length; j +=2){
                let num = value.slice(j,j+2);
                if (num === '10') {
                    letter += '.'
                } else if (num === '11') {
                    letter += '-'
                }
            }
            res += MORSE_TABLE[letter]
        }
    }
    return res;
}

module.exports = {
    decode
}