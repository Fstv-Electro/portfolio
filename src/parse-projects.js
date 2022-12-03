import './project-list.json';
let Projects = require('./project-list.json');

const objectAll = Object.values(Object.values(Projects));

function markupProjects() {
  objectAll.map(cat => {
    console.log('WHAT INSIDE', cat.name);
    if (cat.group === '' && cat.single === '') {
      console.log("I'M EMPTY");
    }
  });
}

console.log(markupProjects());
