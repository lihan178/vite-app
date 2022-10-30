import CryptoJS from 'crypto-js';
    
const key = CryptoJS.enc.Utf8.parse("!@#$TYul*&huGtmb");  //密钥
const iv = CryptoJS.enc.Utf8.parse('81726354UNahYBsd');   //密钥偏移量

// AES解密方法
export function AesDecrypt(word: string) {
    // KVUQjYhldIG4Md4ybQLM1b86eBpefUEKWJwWcQUNsvY=
    const encrypted = CryptoJS.AES.decrypt(word, key, {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    const res = encrypted.toString(CryptoJS.enc.Utf8);
    return res;
}