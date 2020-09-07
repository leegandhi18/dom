//Ex1 : 선택된 이미지 보여주기:event target
window.addEventListener("load", function(){

    var section = document.querySelector("#section1");
    
    var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");
    
    for(var i = 0; i < imgs.length; i++) {
        imgs[i].onclick = function(e) {
            currentImg.src = e.target.src;
        };
    }

    // imgs[0].onclick = function(e) {
    //     currentImg.src = e.target.src;
    // };

    // imgs[1].onclick = function(e) {
    //     currentImg.src = e.target.src;
    // };

    // imgs[2].onclick = function(e) {
    //     currentImg.src = e.target.src;
    // };



});