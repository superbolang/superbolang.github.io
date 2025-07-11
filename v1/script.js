const section = document.querySelector('section');
const paragraph = document.querySelector('p');
const time = document.querySelector('.time');
const browser = document.querySelector('.browser');

const days = ['Sunday', 'Moday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Function to detect the browser name
function detectBrowser() {
  const userAgent = navigator.userAgent;
  if (userAgent.indexOf('Edg') > -1) {
    return 'Microsoft Edge';
  } else if (userAgent.indexOf('Chrome') > -1) {
    return 'Chrome';
  } else if (userAgent.indexOf('Firefox') > -1) {
    return 'Firefox';
  } else if (userAgent.indexOf('Safari') > -1) {
    return 'Safari';
  } else if (userAgent.indexOf('Opera') > -1) {
    return 'Opera';
  } else if (userAgent.indexOf('Trident') > -1 || userAgent.indexOf('MSIE') > -1) {
    return 'Internet Explorer';
  }
  return 'Unknown';
}
const browserName = detectBrowser();

window.addEventListener('load', () => {
  setInterval(() => {
    const now = new Date();
    time.textContent = `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()} at ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    browser.textContent = `${browserName}`;
  }, 1000);
});
