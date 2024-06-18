import { md5 } from 'js-md5'

const publicKey = process.env.EXPO_PUBLIC_MARVEL_PUBLIC_KEY!
const privateKey = process.env.EXPO_PUBLIC_MARVEL_PRIVATE_KEY!
const apiBaseURL = "https://gateway.marvel.com/v1/public"

export function createURL(endpoint: string) {
  const ts = Date.now();

  const params = new URLSearchParams({
    ts: ts.toString(),
    apikey: publicKey,
    hash: md5(ts + privateKey + publicKey),
  });
  const finalEndpoint = `${apiBaseURL}/${endpoint}?`; 

  const url = finalEndpoint + params;

  return url;
}