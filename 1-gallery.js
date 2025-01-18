import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as r}from"./assets/vendor-CgTBfC_f.js";const t=document.querySelector(".gallery"),i=data.map(({preview:a,original:l,description:e})=>`<li class="gallery-item hvr-grow">
    <a class="gallery-link " href="${l}">
      <img
        class="gallery-image"
        src="${a}"
        alt="${e}"
      />
    </a>
  </li>`).join("");t.insertAdjacentHTML("beforeend",i.join(""));new r(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
