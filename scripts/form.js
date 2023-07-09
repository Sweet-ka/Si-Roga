const form = document.querySelector('#main-form');
const spinner = document.querySelector('.spinner');
const logo = document.querySelector('.logo');

logo.addEventListener('click', async (e) => {
  console.log(e)
  location.href = '/';
})

form.onsubmit = async (e) => {
  e.preventDefault();
  console.log(JSON.stringify(serialize(form)));
  const body = serialize(form);
  sendData(body);
}

const sendData = async function(data) {
  spinOn();
    await fetch('/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
    });
    spinOff();
  };

  function spinOn() {
    spinner.style.visibility = 'visible';
    // submit.style.filter = 'blur(2px)'; 
  }

  function spinOff() {
    spinner.style.visibility = 'hidden';
    // submit.style.filter = 'none'; 
  }

  function sussecs() {

  }