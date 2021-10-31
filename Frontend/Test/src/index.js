import faker from 'faker';

let dashboard = '';

for (let i = 0; i < 3; i++) {
  const name = faker.commerce.productName();
  dashboard += `<div>${name}</div>`;
}

document.querySelector('#dev-question').innerHTML=dashboard;
