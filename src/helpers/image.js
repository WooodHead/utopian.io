const IMG_PROXY = 'https://steemitimages.com/0x0/';
const IMG_PROXY_PREVIEW = 'https://steemitimages.com/600x800/';

export const getProxyImageURL = (url, type) => {
  if (url.indexOf('https://cdn.utopian.io') === 0) {
    return url;
  } else {
    if (type === 'preview') {
      return `${IMG_PROXY_PREVIEW}${url}`;
    }
    return `${IMG_PROXY}${url}`;
  }
};

export default null;
