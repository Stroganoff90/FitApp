// PARALLAX
function parallax(event) {
  if (document.documentElement.clientWidth > 768) {
    this.querySelectorAll('.frjs').forEach(frjs => {
      let speed = frjs.getAttribute('dataspeed');
      frjs.style.transform = `translateX(${event.clientX*speed/400}px)`
    })
  }
}

document.addEventListener('mousemove', parallax);

// TABS

const tabList = document.querySelectorAll('[data-tab]');

function clickMe(e) {
  for(let i = 0; i < tabList.length ; i++) {
    tabList[i].classList.remove('tab_active');
    var id = tabList[i].getAttribute('data-tab');
    document.getElementById(id).classList.remove('active-block');
  }
  
  e.classList.add('tab_active');
  var id = e.getAttribute('data-tab');
  document.getElementById(id).classList.add('active-block');
}