let url = window.location.href;
let body = $('body').html();
console.log(body)

$.get(url, function(response) {
    let body = $('body').text();

    // Select only between body tags
    var pattern = /<body[^>]*>((.|[\n\r])*)<\/body>/im
    var array_matches = pattern.exec(response);

    // Remove script tags and everything between
    strippedString = array_matches[0].replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")


    // Remove the rest of tags
    var strippedString = strippedString.replace(/(<([^>]+)>)/ig,"");

    let l33tstr1ng = '';
    var matches = {
        'A' : '@',
        'a' : '@',
        'B' : '8',
        'b' : '8',
        'C' : '(',
        'c' : '<',
        'D' : '|}',
        'd' : 'o|',
        'E' : '3',
        'e' : '3',
        'F' : '|=',
        'f' : '|"',
        'G' : '6',
        'g' : '9',
        'H' : '|-|',
        'h' : '4',
        'I' : '1',
        'i' : '!',
        'J' : '_|',
        'j' : '_7', 
        'K' : '|<',
        'k' : '1<',
        'L' : '|_',
        'l' : '1',
        'M' : 'm',
        'm' : '^^',
        'N' : 'n',
        'n' : '/V',
        'O' : '()',
        'o' : '0',
        'P' : '|*',
        'p' : '|o',
        'Q' : 'O_',
        'q' : '0',
        'R' : 'Я',
        'r' : 'Я',
        'S' : '$',
        's' : '5',
        'T' : '7',
        't' : '+',
        'U' : '|_|',
        'u' : '(_)',
        'V' : 'v',
        'v' : 'V',
        'W' : 'VV',
        'w' : 'vv',
        'X' : '><',
        'x' : '%',
        'Y' : '¥',
        'y' : '`/',
        'Z' : '2',
        'z' : '>_',
        '0' : 'O',
        '1' : '|',
        '2' : 'Z',
        '3' : 'E',
        '4' : 'h',
        '5' : 'S',
        '6' : 'G',
        '7' : 'T',
        '8' : 'B',
        '9' : 'g',
        ' ' : '___'
    }
    for(let i = 0; i < strippedString.length; i++) {
        if(matches.hasOwnProperty(strippedString[i])) {
            l33tstr1ng += matches[strippedString[i]]
        } else {
            l33tstr1ng += strippedString[i];
        }
    }

    $('body').html(l33tstr1ng)
    $('body').css('background-color', 'black')
    $('body').css('color', 'green')
})

