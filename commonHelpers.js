import{i as c,S as l}from"./assets/vendor-46aac873.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u="41917530-74216f8e6af2c90f64ec8c0b5",p="https://pixabay.com/api/",f=document.querySelector(".form-inline"),a=document.querySelector(".card-container");f.addEventListener("submit",h);function d(){a.innerHTML="<p>Loading images, please wait...</p>"}function m(){const i=a.querySelector(".loading");i&&i.remove()}function h(i){i.preventDefault();const n=i.currentTarget,r=n.elements.picture.value.trim();if(r===""||r==null){c.error({title:"Error",message:"❌Sorry, there are no images matching your search query. Please, try again!"}),a.innerHTML="";return}d(),g(r).then(s=>{if(s.hits&&s.hits.length>0){const e=s.hits;let t="";for(const o of e)t+=y(o);a.innerHTML=t,new l(".card-container a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}else c.error({title:"Error",message:"❌Sorry, there are no images matching your search query. Please, try again!"})}).finally(()=>{m(),n.reset()})}function g(i){const n=new URLSearchParams({key:u,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}?${n}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function y({webformatURL:i,likes:n,views:r,comments:s,downloads:e,largeImageURL:t}){return`
        <a href="${t}" class= "picture-link">
            <img src = "${i}">
            <div class= "picture-content">
                <div class= "picture-text">
                    <span class= "picture-title">Likes</span>
                    <span class= "picture-sub-title">${n}</span>
                </div>
                <div class= "picture-text">
                    <span class= "picture-title">Views</span>
                    <span class= "picture-sub-title">${r}</span>
                </div>
                <div class= "picture-text">
                    <span class= "picture-title">Comments</span>
                    <span class= "picture-sub-title">${s}</span>
                </div>
                <div class= "picture-text">
                    <span class= "picture-title">Downloads</span>
                    <span class= "picture-sub-title">${e}</span>
                </div>
            </div>
        </a>`}
//# sourceMappingURL=commonHelpers.js.map
