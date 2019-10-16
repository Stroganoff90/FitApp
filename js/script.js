"use strict";

// parallax
function parallax(event) {
  if (document.documentElement.clientWidth > 768) {
    this.querySelectorAll('.frjs').forEach(frjs => {
      let speed = frjs.getAttribute('dataspeed');
      frjs.style.transform = `translateX(${event.clientX*speed/400}px)`
    })
  }
}

document.addEventListener('mousemove', parallax);

// prez app tab
function Tabs() {
  var bindAll = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].addEventListener('click', change);
    }
  }

  var clear = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].classList.remove('active_tab_block');
      var id = menuElements[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('active_tab_block');
    }
  }

  var change = function(e) {
    clear();
    e.target.classList.add('active_tab_block');
    var id = e.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('active_tab_block');
  }

  bindAll();
}

var connectTabs = new Tabs();

//prez app active tab
function clickMe(item) {
  var cllections = document.querySelectorAll(".b-nav-tab");
  for (var i = cllections.length - 1; i >= 0; i--) {
    cllections[i].classList.remove("tab_active");
  }
  item.classList.add("tab_active");
}
