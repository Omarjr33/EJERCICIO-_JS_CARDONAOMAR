const CODIGO_MORSE = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 
    'Z': '--..', 
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', 
    '4': '....-', '5': '.....', '6': '-....', '7': '--...', 
    '8': '---..', '9': '----.'
};

let textonor = prompt ('ingrese el texto a traducir')

const CODIGO_TEXTO = Object.fromEntries(
    Object.entries(CODIGO_MORSE).map(([clave, valor]) => [valor, clave])
);

function convertirTextoAMorse(texto) {
    const textoNormalizado = texto.toUpperCase().replace(/[^A-Z0-9\s]/g, '');
    const morse = textoNormalizado.split('').map(caracter => {
        if (caracter === ' ') return '/';
        return CODIGO_MORSE[caracter] || '';
    }).filter(Boolean).join(' ');

    return morse;
}

function convertirMorseATexto(morse) {
    const palabras = morse.split('/');
    const texto = palabras.map(palabra => 
        palabra.trim().split(' ')
            .map(codigo => CODIGO_TEXTO[codigo] || '')
            .filter(Boolean)
            .join('')
    ).join(' ');

    return texto;
}

function traducirMorse(entrada, modo) {
    try {
        let resultado;
        if (modo === 'texto-a-morse') {
            resultado = convertirTextoAMorse(entrada);
        } else if (modo === 'morse-a-texto') {
            resultado = convertirMorseATexto(entrada);
        } else {
            throw new Error('Modo de traducción inválido');
        }
        
        return resultado;
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}

console.log('Texto a Morse:');
console.log(traducirMorse(textonor, 'texto-a-morse'));

console.log('\nMorse a Texto:');
console.log(traducirMorse(textonor, 'morse-a-texto'));