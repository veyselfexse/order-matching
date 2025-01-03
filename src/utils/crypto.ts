const CryptoJS = require('crypto-js');

export class CryptoHelper {
  static encrypt(content: string, key: string): string {
    const keyutf = CryptoJS.enc.Utf8.parse(key);
    const iv = CryptoJS.enc.Base64.parse(key);
    const enc = CryptoJS.AES.encrypt(content, keyutf, { iv: iv });
    const encStr = enc.toString();
    return encStr;
  }

  static decrypt(content: string, key: string): string {
    const keyutf = CryptoJS.enc.Utf8.parse(key);
    const iv = CryptoJS.enc.Base64.parse(key);
    const dec = CryptoJS.AES.decrypt(
      { ciphertext: CryptoJS.enc.Base64.parse(content) },
      keyutf,
      { iv: iv },
    );
    const decStr = CryptoJS.enc.Utf8.stringify(dec);
    return decStr;
  }
}
