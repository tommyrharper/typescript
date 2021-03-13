console.log('yo');

const button = document.querySelector('button')!;

function clickHandler(message: string) {
  let userName = 'James';
  console.log('Clicked! ' + message);
}

button.addEventListener('click', clickHandler.bind(null, 'hey'))