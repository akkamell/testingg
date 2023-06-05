const $=selector=>{
    return document.querySelector(selector);
};
let show=false;
let searchbar=$("#search-bar");
function showSearch(){
    if(show==false){
        searchbar.style.display="block";
        show=true;
        searchbar.focus();
    }
    else{
        searchbar.style.display="none";
        show=false;
    }
}

const bodyEl=document.body;

const barEl = document.querySelector('.bar');

const updateBar = () => {
let scrollPos = (window.scrollY /

(bodyEl.scrollHeight - window.innerHeight)) * 100;

barEl.style.width = `${scrollPos}%`
requestAnimationFrame(updateBar) ;
};
updateBar();