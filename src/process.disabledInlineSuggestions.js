// find all images without alternate text
// and give them a red border
function process() {
  let images = document.getElementsByTagName('img');
  for (let i = 0; i < images.length; i++) {
    let image = images[i];
    if (image.alt === '') {
      image.style.border = '5px solid red';
    }
  }
}
