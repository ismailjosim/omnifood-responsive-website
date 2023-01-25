/////////////////////////////////
// Make mobile navigation work
////////////////////////////////

// Select Elements
const btnNav = document.querySelector('.btn_mobile_nav');
const header = document.querySelector('.header');

// Add or Remove   (nav-open) class from css
btnNav.addEventListener('click', function () {
  header.classList.toggle('nav-open');
});

////////////////////////////
// Sticky Navigation Bar
////////////////////////////

const heroSection = document.querySelector('.section_hero');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    // console.log(ent);
    // if else
    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    } else {
      document.body.classList.remove('sticky');
    }
  },
  {
    root: null, // this means that we observe this hero section inside of the viewport.
    threshold: 0, // this means when 0% of the hero section inside of the viewport this will fire a eventListener. If we set the value 1 then event Listener will fire when the complete hero section are inside of the viewport.
    rootMargin: '-80px',
  }
);
obs.observe(heroSection);
