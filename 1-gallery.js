import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as i}from"./assets/vendor-CgTBfC_f.js";const a=document.querySelector(".gallery");a.addEventListener("click",r);a.insertAdjacentHTML("beforeend",imgItmes.join(""));function r(n){n.preventDefault();const{target:e}=n;if(e.nodeName!=="IMG")return;const t=basicLightbox.create(`<img src="${e.dataset.source}" alt="${e.alt}" width="1280">`);t.show();const o=c=>{c.code==="Escape"&&(t.close(),document.removeEventListener("keydown",o))};t.show()&&document.addEventListener("keydown",o)}new i(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map