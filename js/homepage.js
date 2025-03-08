const button =document.querySelector('#volunteer-btn');

const c1_btn = document.querySelector("#content1-btn");
const c2_btn = document.querySelector("#content2-btn");
const c3_btn = document.querySelector("#content3-btn");
const c4_btn = document.querySelector("#content4-btn");

button.addEventListener('click', function(){
    window.location.href = 'html/volunteerpage.html';
});

c1_btn.addEventListener("click",function(){
    window.location.href ='html/Content_ST1.html'
})

c2_btn.addEventListener("click",function(){
    window.location.href ='html/Content_ST2.html'
})

c3_btn.addEventListener("click",function(){
    window.location.href ='html/Content_ST3.html'
})
c4_btn.addEventListener("click",function(){
    window.location.href ='html/Content_ST4.html'
})


  