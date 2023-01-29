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
  expr = expr.trim();
  let refinedData = expr.split('   ');
  let result = [];
  
  for (let i = 0; i < refinedData.length; i++) {
    let temp = refinedData[i].split(' ');
    for (let j = 0; j < temp.length; j++) {
      if (EXPR[temp[j]]) {
        result.push(EXPR[temp[j]]);
      }
    }
    
    if (i !== refinedData.length - 1) {
    result.push(' ');
    }
  }
  return result.join('');
}

module.exports = {
    decode
}
