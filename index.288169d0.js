var e;e=JSON.parse('[{"name":"HTML5, CSS3","group":"https://titotrapatonni.github.io/ice-cream-code-ninjas/, https://fstv-electro.github.io/donut-project/","single":""},{"name":"JavaScript","group":"","single":""},{"name":"React","group":"","single":""},{"name":"Node.js","group":"","single":""},{"name":"TypeScript","group":"","single":""}]');const s=document.querySelector(".projects__list"),t=Object.values(Object.values(e));!function(){let e=t.map((e=>{let s,t=e.group,i=e.single.split(",").map((e=>{if(""!==e)return`<li>\n            <a href="${e}" class="projects__item__link link"\n              >${e}</a\n            >\n          </li>`})).join(""),l=t.split(",").map((e=>{if(""!==e)return`<li>\n            <a href="${e}" class="projects__item__link link"\n              >${e}</a\n            >\n          </li>`})).join("");return""===e.group&&""===e.single?(s=`<li class="projects__item">\n        <p class="projects__name">${e.name}</p></li>`,s):(s=`<li class="projects__item">\n        <p class="projects__name">${e.name}</p><ul class="projects__item-list list">\n          <li><p class="projects__item__descr">Group projects:</p></li>${l}</ul><ul class="projects__item-list list">\n          <li><p class="projects__item__descr">Single projects:</p></li>${i}</ul></li>`,s)})).join("");s.insertAdjacentHTML("beforeend",e)}();
//# sourceMappingURL=index.288169d0.js.map
