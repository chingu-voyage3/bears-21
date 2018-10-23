import loadImage from './actions';

export default function ImageRef(src, missing_url) {
  return new Promise((resolve, reject) => {
    // check for undefined, url, image mongo id, file
    if (typeof src === 'undefined' || src === null) {
      resolve(encodeURI(missing_url));
    } else if (typeof src === 'string') {
      if (src.indexOf('/') === -1) {
        loadImage(src)
          .then(url => {
            resolve(url);
          })
          .catch(() => reject(encodeURI(missing_url)));
      } else {
        resolve(src);
      }
    } else {
      // typeof src === 'file'
      resolve(URL.createObjectURL(src));
    }
  });
}
