let Projects = require('./project-list.json');
const projectEl = document.querySelector('.projects__list');

const objectAll = Object.values(Object.values(Projects));

function markupProjects() {
  let markupAll = objectAll
    .map(cat => {
      //   console.log('name category', cat.name);
      let groupValue = cat.group;
      let singleValue = cat.single;
      let markupSingle = singleValue
        .split(',')
        .map(value => {
          if (value === '') {
            return;
          }
          return `
            <a href="${value}" class="projects__item__link link"
              >${value}</a
            >
          `;
        })
        .join('');
      let markupGroup = groupValue
        .split(',')
        .map(value => {
          if (value === '') {
            return;
          }
          return `
            <a href="${value}" class="projects__item__link link"
              >${value}</a
            >
          `;
        })
        .join('');
      let markupProject;
      if (cat.group === '' && cat.single === '') {
        markupProject = `<li class="projects__item">
        <p class="projects__name">${cat.name}</p></li>`;
        return markupProject;
      }
      markupProject = `<li class="projects__item">
        <p class="projects__name">${cat.name}</p>
          <p class="projects__item__descr">Group projects:</p> ${markupGroup} 
          <p class="projects__item__descr">Single projects:</p> ${markupSingle} </li>`;
      //   console.log(markupProject);
      return markupProject;
    })
    .join('');
  projectEl.insertAdjacentHTML('beforeend', markupAll);

  // console.log("IT'S all MARKUP", markupAll);
}

markupProjects();
