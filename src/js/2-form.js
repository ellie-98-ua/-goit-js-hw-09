console.log('Form');

// збереження даних
let formData = {
  email: '',
  message: ''
};

// форма
const form = document.querySelector('.feedback-form');

// дані зі сховища
const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// input
form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// submit
form.addEventListener('submit', event => {
  event.preventDefault();

  const { email, message } = formData;

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  // очищення після надсилання
  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData = { email: '', message: '' };
});