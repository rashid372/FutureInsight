import faker from 'faker';


const mount = (el) => {
    let dashboard = '';
    for (let i = 0; i < 3; i++) {
      const name = faker.commerce.productName();
      dashboard += `<div>${name}</div>`;
    }
    el.innerHTML=dashboard;
}

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which DEFNITELY has an element with an id of 'dev-resource
// We want to immediately render our app into that element
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-resource');
  
    // Assuming our container doesnt have an element
    // with id 'dev-resource'....
    if (el) {
      // We are probably running in isolation
      mount(el);
    }
  }
  
  // Context/Situation #2
  // We are running this file in develpment or production
  // through the CONTAINER app
  // NO GUARANTEE that an element with an id of 'dev-resource' exists
  // WE DO NOT WANT try to immediately render the app

export { mount };