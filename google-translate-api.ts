/**
 * Last update: 2/11/2018
 * https://translate.google.com/translate/releases/twsfe_w_20160620_RC00/r/js/desktop_module_main.js
 *
 * Everything between 'BEGIN' and 'END' was copied from the script above.
 */

// BEGIN
function zr(a: any) {
    let b: any;
    if (null !== yr) {
        b = yr;
    }
    else {
        b = wr(String.fromCharCode(84));
        let c = wr(String.fromCharCode(75));
        b = [b(), b()];
        b[1] = c();
        b = (yr = wnd[b.join(c())] || '') || '';
    }

    let d: any = wr(String.fromCharCode(116));
    let c: any = wr(String.fromCharCode(107));
    d = [d(), d()];
    d[1] = c();
    c = '&' + d.join('') + '=';
    d = b.split('.');
    b = Number(d[0]) || 0;

    for (var e = [], f = 0, g = 0; g < a.length; g++) {
        let l = a.charCodeAt(g);
        128 > l ? e[f++] = l : (2048 > l ? e[f++] = l >> 6 | 192 : ((l & 64512) == 55296 && g + 1 < a.length && (a.charCodeAt(g + 1) & 64512) == 56320 ? (l = 65536 + ((l & 1023) << 10) + (a.charCodeAt(++g) & 1023), e[f++] = l >> 18 | 240, e[f++] = l >> 12 & 63 | 128) : e[f++] = l >> 12 | 224, e[f++] = l >> 6 & 63 | 128), e[f++] = l & 63 | 128);
    }

    a = b;
    for (let f = 0; f < e.length; f++) a += e[f], a = xr(a, '+-a^+6');
    a = xr(a, '+-3^+b+-f');
    a ^= Number(d[1]) || 0;
    0 > a && (a = (a & 2147483647) + 2147483648);
    a %= 1E6;
    return c + (a.toString() + '.' + (a ^ b));
}

let yr: any = null;
let wr = function (a: string) {
    return function () {
        return a;
    };
};
let xr = function (a: number, b: string) {
    for (let c = 0; c < b.length - 2; c += 3) {
        let d: any = b.charAt(c + 2);
        d = d >= 'a' ? d.charCodeAt(0) - 87 : Number(d);
        d = b.charAt(c + 1) == '+' ? a >>> d : a << d;
        a = b.charAt(c) == '+' ? a + d & 4294967295 : a ^ d;
    }
    return a;
};
// END

const config: any = {};
const wnd: any = {
    TKK: config['TKK'] || '0'
};

function updateTKK() {
    let now = Math.floor(Date.now() / 3600000);

    if (Number(wnd.TKK.split('.')[0]) !== now) {
        let res = UrlFetchApp.fetch('https://translate.google.com').getContentText();
        const code = res.match(/tkk:'\d+.\d+'/g);
        // code will extract something like tkk:'1232135.131231321312', we need only value

        if (code.length > 0) {
            // extracting value tkk:'1232135.131231321312', this will extract only token: 1232135.131231321312
            const xt = code[0].split(':')[1].replace(/'/g, '');
            wnd.TKK = xt;
            config['TKK'] = xt;
        }
    }
}

function generate(text: string) {
    updateTKK();
    let tk = zr(text);
    tk = tk.replace('&tk=', '');
    return { name: 'tk', value: tk };
}

/**
 * Generated from https://translate.google.com
 *
 * The languages that Google Translate supports (as of 2/11/2018) alongside
 * their ISO 639-1 codes
 * See https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
 */

const languages: any = {
    'auto': 'Automatic',
    'af': 'Afrikaans',
    'sq': 'Albanian',
    'am': 'Amharic',
    'ar': 'Arabic',
    'hy': 'Armenian',
    'az': 'Azerbaijani',
    'eu': 'Basque',
    'be': 'Belarusian',
    'bn': 'Bengali',
    'bs': 'Bosnian',
    'bg': 'Bulgarian',
    'ca': 'Catalan',
    'ceb': 'Cebuano',
    'ny': 'Chichewa',
    'zh-cn': 'Chinese Simplified',
    'zh-tw': 'Chinese Traditional',
    'co': 'Corsican',
    'hr': 'Croatian',
    'cs': 'Czech',
    'da': 'Danish',
    'nl': 'Dutch',
    'en': 'English',
    'eo': 'Esperanto',
    'et': 'Estonian',
    'tl': 'Filipino',
    'fi': 'Finnish',
    'fr': 'French',
    'fy': 'Frisian',
    'gl': 'Galician',
    'ka': 'Georgian',
    'de': 'German',
    'el': 'Greek',
    'gu': 'Gujarati',
    'ht': 'Haitian Creole',
    'ha': 'Hausa',
    'haw': 'Hawaiian',
    'iw': 'Hebrew',
    'hi': 'Hindi',
    'hmn': 'Hmong',
    'hu': 'Hungarian',
    'is': 'Icelandic',
    'ig': 'Igbo',
    'id': 'Indonesian',
    'ga': 'Irish',
    'it': 'Italian',
    'ja': 'Japanese',
    'jw': 'Javanese',
    'kn': 'Kannada',
    'kk': 'Kazakh',
    'km': 'Khmer',
    'ko': 'Korean',
    'ku': 'Kurdish (Kurmanji)',
    'ky': 'Kyrgyz',
    'lo': 'Lao',
    'la': 'Latin',
    'lv': 'Latvian',
    'lt': 'Lithuanian',
    'lb': 'Luxembourgish',
    'mk': 'Macedonian',
    'mg': 'Malagasy',
    'ms': 'Malay',
    'ml': 'Malayalam',
    'mt': 'Maltese',
    'mi': 'Maori',
    'mr': 'Marathi',
    'mn': 'Mongolian',
    'my': 'Myanmar (Burmese)',
    'ne': 'Nepali',
    'no': 'Norwegian',
    'ps': 'Pashto',
    'fa': 'Persian',
    'pl': 'Polish',
    'pt': 'Portuguese',
    'pa': 'Punjabi',
    'ro': 'Romanian',
    'ru': 'Russian',
    'sm': 'Samoan',
    'gd': 'Scots Gaelic',
    'sr': 'Serbian',
    'st': 'Sesotho',
    'sn': 'Shona',
    'sd': 'Sindhi',
    'si': 'Sinhala',
    'sk': 'Slovak',
    'sl': 'Slovenian',
    'so': 'Somali',
    'es': 'Spanish',
    'su': 'Sundanese',
    'sw': 'Swahili',
    'sv': 'Swedish',
    'tg': 'Tajik',
    'ta': 'Tamil',
    'te': 'Telugu',
    'th': 'Thai',
    'tr': 'Turkish',
    'uk': 'Ukrainian',
    'ur': 'Urdu',
    'uz': 'Uzbek',
    'vi': 'Vietnamese',
    'cy': 'Welsh',
    'xh': 'Xhosa',
    'yi': 'Yiddish',
    'yo': 'Yoruba',
    'zu': 'Zulu'
};

/**
 * Returns the ISO 639-1 code of the desiredLang – if it is supported by
 * Google Translate
 * @param {string} language The name or the code of the desired language
 * @returns {string|boolean} The ISO 639-1 code of the language or null if the
 * language is not supported
 */
function getISOCode(language: string): string | boolean {
    if (!language) {
        return false;
    }

    language = language.toLowerCase();
    if (language in languages) {
        return language;
    }

    let keys = Object.keys(languages).filter((key) => {
        return typeof languages[key] !== 'string'
            ? false
            : languages[key].toLowerCase() === language;
    });

    return keys[0] || null;
}

/**
 * Returns true if the desiredLang is supported by Google Translate and false otherwise
 * @param {String} language The ISO 639-1 code or the name of the desired language.
 * @returns {boolean} If the language is supported or not.
 */
function isSupported(language: string) {
    return Boolean(getISOCode(language));
}

/**
 * @function translate
 * @param {String} text The text to be translated.
 * @param {Object} options The options object for the translator.
 * @returns {Object} The result containing the translation.
 */
function translate(text: string, options: any): any {
    if (typeof options !== 'object') {
        options = {};
    }
    text = String(text);

    // Check if a lanugage is in supported; if not, throw an error object.
    let error: any;
    [options.from, options.to].forEach((lang) => {
        if (lang && !isSupported(lang)) {
            error = {};
            error.code = 400;
            error.message = `The language '${lang}' is not supported.`;
        }
    });
    if (error) {
        throw error;
    }

    // If options object doesn't have 'from' language, set it to 'auto'.
    if (!options.hasOwnProperty('from')) {
        options.from = 'auto';
    }

    // If options object doesn't have 'to' language, set it to 'en'.
    if (!options.hasOwnProperty('to')) {
        options.to = 'en';
    }

    // If options object has a 'raw' property evaluating to true, set it to true.
    options.raw = Boolean(options.raw);

    // Get ISO 639-1 codes for the 
    options.from = getISOCode(options.from);
    options.to = getISOCode(options.to);

    // Generate Google Translate token for the text to be translated.
    let token = generate(text);

    // URL & query string required by Google Translate.
    let baseUrl = 'https://translate.google.com/translate_a/single';
    let data: any = {
        client: 'gtx',
        sl: options.from,
        tl: options.to,
        hl: options.to,
        dt: ['at', 'bd', 'ex', 'ld', 'md', 'qca', 'rw', 'rm', 'ss', 't'],
        ie: 'UTF-8',
        oe: 'UTF-8',
        otf: 1,
        ssel: 0,
        tsel: 0,
        kc: 7,
        q: text,
        [token.name]: token.value
    };

    // Append query string to the request URL.
    let queryString = () => {
        return Object.keys(data).map(function (key) {
            return Array.isArray(data[key])
                ? (data[key] as string[]).join(`&${key}=`)
                : key + '=' + encodeURI(data[key]);
        }).join('&');
    };
    let url = `${baseUrl}?${queryString()}`;
    let requestOptions: any;

    // If request URL is greater than 2048 characters, use POST method.
    if (url.length > 2048) {
        delete data.q;
        url = `${baseUrl}?${queryString()}`;
        requestOptions = {
            method: 'post',
            payload: { q: text },
            followRedirects: true,
            muteHttpExceptions: true
        }
    }
    else {
        requestOptions = {
            method: 'get',
            followRedirects: true,
            muteHttpExceptions: true
        }
    }

    // Request translation from Google Translate.
    let response = UrlFetchApp.fetch(url, requestOptions).getContentText();
    let result = {
        text: '',
        from: {
            language: {
                didYouMean: false,
                iso: ''
            },
            text: {
                autoCorrected: false,
                value: '',
                didYouMean: false
            }
        },
        raw: ''
    };

    // If user requested a raw output, add the raw response to the result
    if (options.raw) {
        result.raw = response;
    }

    // Parse string body to JSON and add it to result object
    let body = JSON.parse(response);
    body[0].forEach((obj: string[]) => {
        if (obj[0]) {
            result.text += obj[0];
        }
    });

    if (body[2] === body[8][0][0]) {
        result.from.language.iso = body[2];
    }
    else {
        result.from.language.didYouMean = true;
        result.from.language.iso = body[8][0][0];
    }

    if (body[7] && body[7][0]) {
        let str = body[7][0];
        str = str.replace(/<b><i>/g, '[');
        str = str.replace(/<\/i><\/b>/g, ']');
        result.from.text.value = str;

        if (body[7][5] === true) {
            result.from.text.autoCorrected = true;
        }
        else {
            result.from.text.didYouMean = true;
        }
    }

    return result;
}