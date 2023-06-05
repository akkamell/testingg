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

const images = document.querySelectorAll('.second-item');

images.forEach(img => {
  img.addEventListener('mouseover', () => {
    img.style.transform = 'scale(1.02)';
  });
  
  img.addEventListener('mouseout', () => {
    img.style.transform = 'scale(1)';
  });
});

function readFile() {
    var input = $("#file");
    var filename = input.files[0].name;
	let trainer_name=$("#name").value;
	let trainer_job=$("#job").value;
	let d=document.createElement("div");
	d.setAttribute("class","second-item");
	d.innerHTML = `<img src='${filename}' style='object-fit:cover;'>
                    <div class='child'>
                        <h1>${trainer_name}</h1>
                        <p>${trainer_job}</p>
                    </div>`;
	let a=$(".second-container");
	a.insertBefore(d,a.children[a.children.length]);
}
