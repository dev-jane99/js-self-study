const mainMenus = document.querySelectorAll(".menu-wrap .menu");
const subMenuUl = document.querySelectorAll(".sub-menu-wrap ul");
const subMenus = document.querySelectorAll(".sub-menu-wrap .sub-menu");
const slideWrap = document.querySelector(".slide-wrap");
const noticeBtn = document.querySelector(".notice-btn");
const imageWrap = document.querySelector(".container3 .images-wrap");
const noticeWrap = document.querySelector(".container3 .notice-wrap");
const popup = document.querySelector("#popup");
const popupBg = document.querySelector(".popup-bg")
const closeBtn = document.querySelector(".popup-content .close");
const noticeSpans = document.querySelectorAll(".notice-wrap span");

let count = 0;

mainMenus.forEach((menu) => {
  menu.addEventListener("mouseover", () => {
    subMenuUl.forEach((ul) => {
      ul.style.height = "200px";
    })
  })

  menu.addEventListener("mouseleave", () => {
    subMenuUl.forEach((ul) => {
      ul.style.height = "0";
    })
  })

})


subMenus.forEach((sub, i) => {
  sub.addEventListener("mouseover", () => {
    let mainIndex = Math.floor(i / 4);
    subMenuUl.forEach((ul) => {
      mainMenus[mainIndex].style.backgroundColor = "black";
      mainMenus[mainIndex].style.color = "white";
      ul.style.height = "200px";
    })
  })

  sub.addEventListener("mouseleave", () => {
    let mainIndex = Math.floor(i / 4);
    subMenuUl.forEach((ul) => {
      mainMenus[mainIndex].style.backgroundColor = "white";
      mainMenus[mainIndex].style.color = "#333";
      ul.style.height = "0";
    })
  })
})

setInterval(() => {
  count++
  let imageHeight = 300;
  if(count >= 3) {
    count = 0;
  }
  slideWrap.style.transform = `translate(0, -${imageHeight * count}px)`;
}, 3000)

// 클릭 이벤트
function showGallery(){
  imageWrap.style.display = "flex";
  noticeWrap.style.display = "none";
}

noticeBtn.onclick = function(){
    imageWrap.style.display = "none";
    noticeWrap.style.display = "flex";
}

closeBtn.addEventListener("click", () => {
  let popup = document.querySelector("#popup");
  if(!popup.style.display === ""){
    popup.style.display = "flex";
    popupBg.style.display = "block";
  }else {
    popup.style.display = "none";
    popupBg.style.display = "none";
  }
})

noticeSpans.forEach((span, i) => {
  span.addEventListener("click", () => {
    let popup = document.querySelector("#popup");
    console.log(popup.style.display)
    if(popup.style.display === "none" || popup.style.display === ""){
      popup.style.display = "flex";
      popupBg.style.display = "block";
    }else {
      popup.style.display = "none";
      popupBg.style.display = "none";
    }

  })
})
