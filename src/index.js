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
const DOTS={
    '10': '.',
    '11': '-',
    '**': '**',
};




//делит числа на слова и переводит в морзе
function morseWords(letters){
    let result = [];
    let words = [];

    for(let i=0 ; i<letters.length ; i+=10){
        words.push(letters.substring( i , i+10 ));
    }

    for(let num of words) {

        let word = [];

        for(let i=0 ; i<num.length ; i+=2) {

        let letter = num.substring(i,i+2);

        if ( letter == '00' ) {
            continue;
        } else {
            word.push( DOTS[letter] );
        }
    
    }

    result.push( word.join('') );

    }

    return result;
}

//переводит морзе в слова;
function decode(expr) {

 let result=[];

 let phrase=morseWords(expr);

 for ( let dot of phrase ) {

    if ( dot == '**********' ) {
        
        result.push(' '); 

    } else if ( dot==' ' || dot==',' ) {
        
        continue;

    } else {

        result.push( MORSE_TABLE[dot] );

    }
    
 }
 return result.join('');
}


module.exports = {
    decode
}



