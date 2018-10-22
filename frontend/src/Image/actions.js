const getLocalUrl = res => {
  return res.blob().then(blob => {
    const url = URL.createObjectURL(blob);
    return url;
  });
};

const loadImage = src => {
  return fetch(`/api/v1/image/${src}`).then(getLocalUrl);
};

export default loadImage;
