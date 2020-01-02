var btn = document.getElementsByClassName("mobileDropDown");
var i;
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click",function(){
    toggleThis(this,"active");
    var childNav = this.nextElementSibling;
    if(childNav.style.maxHeight){
      childNav.style.maxHeight = null;
    }else{
      childNav.style.maxHeight = childNav.scrollHeight + "px";
    }
  });
}
/*===========*/
var gallery;
var gallerySection;
var galleryImg;
galleryImg = document.getElementsByClassName("gallery-image")
gallery = document.getElementById('gallery');
gallerySection = document.getElementById('gallery-section');
(function(window,document,undefined) {
  'use strict';
  var intervalTime = 10;
  var scrollInterval = 1;
  var firstScroll = true;
  //==========//
  var galleryScroll = function(){
    var galleryWidth
    if(firstScroll){
    galleryWidth = gallery.scrollWidth;
    console.log("gallery scroll width",gallery.scrollWidth);
    console.log("gallery width",gallery.scrollWidth);
      while(gallery.scrollWidth < galleryWidth * 2){
        var length = gallerySection.children.length;
        for (var i = 0; i < length; i++) {
          gallerySection.appendChild(gallerySection.children[i].cloneNode(true))
        };
        break;
        console.log("break");
      };
      firstScroll = false;
    };
    if(gallery.scrollLeft >= galleryWidth){
      gallery.scrollLeft -= galleryWidth;
    }else{
      gallery.scrollLeft += scrollInterval;
    };
  };
  //==========//
   window.setInterval(galleryScroll,intervalTime)
}(window,document));
// create new image if offset is less than 0
// =================
var _eventListener = (function() {
  'use strict';
  if("ontouchstart" in document.documentElement === true){
    return "touchstart"
  }else{
    return "click";
  }
}());
// =================
(function () {
    'use strict';
    document.addEventListener(_eventListener, function (event) {
      var _isVisible = function (el) {
        return !!el && !!(el.offsetWidth === 0 || el.offsetHeight === 0);
      }
      var elem = document.getElementsByClassName("product-detail-section");
      for (var i = 0; i < elem.length; i++) {
          if (!elem[i].contains(event.target) && !_isVisible(elem[i].parentElement)) {
              elem[i].parentElement.className = "product-detail";
          };
      };
  });
}());
// =================
