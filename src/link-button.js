refs = {
  pageLink1El: document.querySelector('.page-1-link'),
  pageLink2El: document.querySelector('.page-2-link'),
  page1El: document.querySelector('#page-1'),
  page2El: document.querySelector('#page-2'),
};

console.log(refs.pageLink1El);
console.log(refs.pageLink2El);
console.log(refs.page1El.style.transform);
console.log(refs.page2El);

refs.pageLink2El.addEventListener('click', onLinkButtonPage1);

refs.pageLink1El.addEventListener('click', onLinkButtonPage2);

function onLinkButtonPage1() {
  changePage(refs.pageLink1El, refs.pageLink2El);
  refs.page1El.style.transform = 'translateX(-150%)';
  refs.page2El.style.transform = 'translateX(50%)';
}

function onLinkButtonPage2() {
  changePage(refs.pageLink2El, refs.pageLink1El);
  refs.page1El.style.transform = 'translateX(0)';
  refs.page2El.style.transform = 'translateX(150%)';
}

function changePage(rev, add) {
  rev.classList.remove('current');
  add.classList.add('current');
}
