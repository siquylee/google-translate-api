# Google Translate API for Apps Script [![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)[![license](https://img.shields.io/github/license/k3rn31p4nic/google-translate-api.svg)](LICENSE)

### Feature Highlights

* Automatically detect source language
* Automatic spelling corrections
* Automatic language correction
* Fast and reliable

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Examples](#examples)
* [Credits, etc](#extras)

##  Installation

- Select the menu item Tools > Script editor. If you are presented with a welcome screen, click Blank Project on the left to start a new project.
- Delete any code in the script editor. ...
- Copy & paste the code from `dist/google-translate-api.js` file
- Select the menu item File > Save. ...
- All done!

**Note**: Google have robust security protections to reduce risk from unverified apps, so we go through the authorization workflow when we first authorize our own apps. When you hit the run button (the black triangle) for the first time, you will be prompted to authorize the app to run.

When your first run your apps script, you may see the *app isn’t verified* screen and warnings about whether you want to continue. Click the *Advanced* button in the bottom left of the review permissions pop-up, and then click the *...(unsafe)* at the bottom of the next screen to continue. Finally review the permissions and click *ALLOW*

## Usage

#### Method: `translate(text, options)`

```js
translate(text, options);
```

| Parameter | Type | Optional | Default | Description |
|-|-|-|-|-|
| `text` | `String` | No | - | The text you want to translate. |
| `options` | `Object` | - | - | The options for translating. |
| `options.from` | `String` | Yes | `'auto'` | The language name/ISO 639-1 code to translate from. If none is given, it will auto detect the source language. |
| `options.to` | `String` | Yes | `'en'` | The language name/ISO 639-1 code to translate to. If none is given, it will translate to English. |
| `options.raw` | `Boolean` | Yes | `false` | If `true`, it will return the raw output that was received from Google Translate. |

#### Returns: `Object`

**Response Object:**

| Key | Type | Description |
|-|-|-|
| `text` | `String` | The translated text. |
| `from` | `Object` | - |
| `from.language` | `Object` | - |
| `from.language.didYouMean` | `Boolean` | Whether or not the API suggest a correction in the source language. |
| `from.language.iso` | `String` | The ISO 639-1 code of the language that the API has recognized in the text. |
| `from.text` | `Object` | - |
| `from.text.autoCorrected` | `Boolean` | Whether or not the API has auto corrected the original text. |
| `from.text.value` | `String` | The auto corrected text or the text with suggested corrections. Only returned if `from.text.autoCorrected` or `from.text.didYouMean` is `true`. |
| `from.text.didYouMean` | `Boolean` | Wherether or not the API has suggested corrections to the text |
| `raw` | `String` | The raw response from Google Translate servers. Only returned if `options.raw` is `true` in the request options. |

## Examples

#### From automatic language detection to English:

```js
try {
    var res = translate('Tu es incroyable!', { to: 'en' });
    Logger.log(res.text); // OUTPUT: You are amazing!
} catch(err) {
  Logger.log(err);
}
```

#### From English to French, with a typo:

```js
try {
    var res = translate('Thnak you', { from: 'en', to: 'fr' });
    Logger.log(res.text); // OUTPUT: Je vous remercie
    Logger.log(res.from.text.autoCorrected); // OUTPUT: true
    Logger.log(res.from.text.value); // OUTPUT: [Thank] you
    Logger.log(res.from.text.didYouMean); // OUTPUT: false
} catch(err) {
  Logger.log(err);
}
```

#### Sometimes Google Translate won't auto correct:

```js
try {
    var res = translate('Thnak you', { from: 'en', to: 'fr' });
    Logger.log(res.text); // OUTPUT: ''
    Logger.log(res.from.text.autoCorrected); // OUTPUT: false
    Logger.log(res.from.text.value); // OUTPUT: [Thank] you
    Logger.log(res.from.text.didYouMean); // OUTPUT: true
} catch(err) {
  Logger.log(err);
}
```

## Extras

If you liked this project, please give it a ⭐ in [**GitHub**](https://github.com/siquylee/google-translate-api).

> Credits to [k3rn31p4nic](https://github.com/k3rn31p4nic) for writing the Node.JS version of this library. I ported this to Apps Script without using external libraries.
