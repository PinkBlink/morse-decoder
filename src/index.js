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



//Сonverts numbers to morse:

function morseWords(words){
    let result = [];
    let numbLetters = [];

    for(let i=0 ; i<words.length ; i+=10){
        numbLetters.push(words.substring( i , i+10 ));
    }

    for(let numb of numbLetters) {

        let morseLetter = [];

        for(let i=0 ; i<numb.length ; i+=2) {

        let letter = numb.substring(i,i+2);

        if ( letter == '00' ) {
            continue;
        } else {
            morseLetter.push( DOTS[letter] );
        }
    
    }

    result.push( morseLetter.join('') );

    }

    return result;
}



//Сonverts morse to letters:

function decode(expr) {

 let result=[];

 let phrase=morseWords(expr);

 for ( let dots of phrase ) {

    if ( dots == '**********' ) {
        
        result.push(' '); 

    } else if ( dots==' ' || dots==',' ) {
        
        continue;

    } else {

        result.push( MORSE_TABLE[dots] );

    }
    
 }
 return result.join('');
}




module.exports = {
    decode
}



