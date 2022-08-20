ActivateScroll();
function ActivateScroll(){
    const links = document.querySelectorAll('a[href^="#"]');

    function GetDistanceTop(el){
        const id = el.getAttribute('href');
        return document.querySelector(id).offsetTop
    }

    function ScrollSection(event){
        event.preventDefault();
        const DistanceTop = GetDistanceTop(event.target) - document.querySelector('.header_site').clientHeight;
        smoothScrollTo(0, DistanceTop, 900);
    }

    links.forEach(link => {
        link.addEventListener('click', ScrollSection);
    });

    function smoothScrollTo(endX, endY, duration) {
        const startX = window.scrollX || window.pageXOffset;
        const startY = window.scrollY || window.pageYOffset;
        const distanceX = endX - startX;
        const distanceY = endY - startY;
        const startTime = new Date().getTime();
      
        duration = typeof duration !== "undefined" ? duration : 400;
      
        const easeInOutQuart = (time, from, distance, duration) => {
          if ((time /= duration / 2) < 1)
            return (distance / 2) * time * time * time * time + from;
          return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
        };
      
        const timer = setInterval(() => {
          const time = new Date().getTime() - startTime;
          const newX = easeInOutQuart(time, startX, distanceX, duration);
          const newY = easeInOutQuart(time, startY, distanceY, duration);
          if (time >= duration) {
            clearInterval(timer);
          }
          window.scroll(newX, newY);
        }, 1000 / 60);
      }
}

ActivateCard();
function ActivateCard(){
    const infoF = document.querySelectorAll('.info_front');
    const infoB = document.querySelectorAll('.info_back');

    const infoFb = document.querySelectorAll('.info_a');
    const infoBb = document.querySelectorAll('.back_a');

    for (let i = 0; i < infoFb.length; i++) {
        console.log(i)
        infoFb[i].addEventListener('click', ()=>{
            infoF[i].style.display = 'none';
            infoB[i].style.display = 'flex';
        });
        infoBb[i].addEventListener('click', ()=>{
            infoB[i].style.display = 'none';
            infoF[i].style.display = 'flex';
        });
    }


}
