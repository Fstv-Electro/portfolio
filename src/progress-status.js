const progressList = require('./progress.json');

const moduleEl = document.querySelector('.progress__module-item');
const titleEl = document.querySelector('.progress__name');

const objectAll = Object.values(Object.values(progressList));
