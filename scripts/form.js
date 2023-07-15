const form = document.querySelector('#main-form');
const spinner = document.querySelector('.spinner');
const logo = document.querySelector('.logo');
const ok = document.querySelector('.ok-window');
const okBtn = document.querySelector('.ok-window button');

logo.addEventListener('click', async (e) => {
  console.log(e)
  location.href = '/';
})

form.onsubmit = async (e) => {
  e.preventDefault();
  const body = new FormData(form);
  if (!validate(form, body, 'name', 'phone')) return;
  const data = {
    name: body.get('name'),
    phone: body.get('phone'),
    email: body.get('email'),
    problem: body.get('problem'),
  }
  const send = await sendData(data);
  if (send.status === 200) {
    ok.style.animationName = 'ok-view';
    okBtn.addEventListener('click', () => {
      ok.style.animationName = 'ok-not-view';
      e.target.reset();
    })
  }

  console.log(data)
}

const sendData = async function(data) {
  spinOn();
    let res = await fetch('/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    spinOff();
    return res;
  };

  function spinOn() {
    spinner.style.visibility = 'visible';
  }

  function spinOff() {
    spinner.style.visibility = 'hidden';
  }

  function validate(form, formdata, ...field) {
    let valid = true;
    field.forEach((item) => {
      form[item].addEventListener('input', () => {
        if (form[item].value !== '') {
          form[item].parentNode.classList.remove('empty');
        } else {
          form[item].parentNode.classList.add('empty');
        }
      })
      if (formdata.get(item) === '') {
        form[item].parentNode.classList.add('empty');
        valid = false;
      }
    })
    return valid;
  }