!function(){function e(e,l){e.classList.remove("current"),l.classList.add("current")}refs={pageLink1El:document.querySelector(".page-1-link"),pageLink2El:document.querySelector(".page-2-link"),page1El:document.querySelector("#page-1"),page2El:document.querySelector("#page-2")},console.log(refs.pageLink1El),console.log(refs.pageLink2El),console.log(refs.page1El.style.transform),console.log(refs.page2El),refs.pageLink2El.addEventListener("click",(function(){e(refs.pageLink1El,refs.pageLink2El),refs.page1El.style.transform="translateX(-150%)",refs.page2El.style.transform="translateX(50%)"})),refs.pageLink1El.addEventListener("click",(function(){e(refs.pageLink2El,refs.pageLink1El),refs.page1El.style.transform="translateX(0)",refs.page2El.style.transform="translateX(150%)"}))}();
//# sourceMappingURL=index.0f4d3483.js.map
