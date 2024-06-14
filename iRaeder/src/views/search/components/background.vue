<template>
  <div>
    <nav>
      <div class="logo">Explore.</div>
      <div class="nav-links">
        <ul>
          <li><img src="../assets/images/linkedin.png" alt="" /></li>
          <li><img src="../assets/images/facebook.png" alt="" /></li>
          <li><img src="../assets/images/instagram-logo.png" alt="" /></li>
        </ul>
      </div>
    </nav>
    <section id="sectionone" class="screen">
      <div id="scene">
        <div data-depth="0.1" class="bg">
          <img src="../assets/images/background.png" alt="" />
        </div>
        <div data-depth="0.2" class="rock1">
          <img src="../assets/images/rock.png" alt="" />
        </div>
        <div data-depth="1.2" class="earth">
          <img src="../assets/images/earth.png" alt="" />
        </div>
        <div data-depth="0.1" class="text">
          <h1>IREADER</h1>
        </div>
        <div data-depth="0.4" class="mid">
          <img src="../assets/images/mid.png" alt="" />
        </div>
        <div data-depth="0.1" class="fore">
          <img src="../assets/images/foreground.png" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Parallax from 'parallax-js/src/parallax.js';
import { gsap } from 'gsap';

export default {
  name: 'Planets',
  data() {
    return {
      planets: [
        { name: 'Mercury', detail: 'Mercury is the closest planet to the Sun...', orbitPeriod: '87.97 Earth Days', knownMoons: 'None', image: 'mercury.png' },
        { name: 'Venus', detail: 'Venus is the second planet from the Sun...', orbitPeriod: '224.70 Earth days', knownMoons: 'None', image: 'venus.png' },
        { name: 'Earth', detail: 'Earth is the third planet from the Sun...', orbitPeriod: '365.26 Earth days', knownMoons: '1', image: 'earth1.png' },
        { name: 'Mars', detail: 'Mars is the fourth planet from the Sun...', orbitPeriod: '686.98 Earth days', knownMoons: '2', image: 'mars.png' },
        { name: 'Jupiter', detail: 'Jupiter is the fifth planet from the Sun...', orbitPeriod: '4,332.82 Earth days', knownMoons: '67', image: 'jupiter.png' },
        { name: 'Saturn', detail: 'Saturn is the sixth planet from the Sun...', orbitPeriod: '10,755.70 Earth days', knownMoons: '62', image: 'saturn.png' },
        { name: 'Uranus', detail: 'Uranus is the seventh planet discovered...', orbitPeriod: '30,687.15 Earth days', knownMoons: '27', image: 'uranus.png' },
        { name: 'Neptune', detail: 'Neptune is the fourth largest and the farthest planet...', orbitPeriod: '60,190.03 Earth days', knownMoons: '14', image: 'neptune.png' },
      ]
    };
  },
  mounted() {
    this.initParallax();
    this.initSwiper();
    this.initGSAP();
  },
  methods: {
    initParallax() {
      var scene = document.getElementById('scene');
      new Parallax(scene);
    },
    initSwiper() {
      var keys = this.planets.map(planet => planet.name);
      var slider = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 150,
        centeredSlides: true,
        mousewheel: true,
        pagination: {
          el: '.planet-links',
          clickable: true,
          renderBullet: function (index, className) {
            return '<div class="' + className + '">' + keys[index] + '</div>';
          },
        },
      });

      slider.on('slideChange', function () {
        console.log('SLIDE CHANGED');
        gsap.to('.slide-text span', 0.2, { x: '-100px' });
        gsap.to('.slide-number span', 0.2, { x: '-100px' });
        gsap.to('.slide-detail span', 0.5, { x: '-1000px' });
        gsap.to('.slide-detail-facts div', 0.5, { x: '-1000px' });
        gsap.to('.swiper-slide-active', 0.5, { scale: 0.85 });
        gsap.to('.swiper-slide .slide-img', 1, { rotation: 20 });
      });

      slider.on('slideChangeTransitionEnd', function () {
        gsap.to('.swiper-slide .slide-img', 1, { rotation: 10 });
        gsap.to('.slide-text span', 0.2, { x: 0, delay: 0.1 });
        gsap.to('.slide-text span', 0, { x: '100px' });
        gsap.to('.slide-number span', 0.2, { x: 0 });
        gsap.to('.slide-number span', 0, { x: '100px' });
        gsap.to('.slide-detail span', 0.2, { x: 0 });
        gsap.to('.slide-detail-facts div', 0.5, { x: 0 });
        gsap.to('.swiper-slide-active', 0.5, { scale: 1, ease: 'power4.out' });
        gsap.to('.swiper-slide-active .slide-text', 0, { autoAlpha: 1 });
        gsap.to('.swiper-slide-active .slide-number', 0, { autoAlpha: 1 });
        gsap.to('.swiper-slide-next .slide-text', 0, { autoAlpha: 0 });
        gsap.to('.swiper-slide-prev .slide-text', 0, { autoAlpha: 0 });
        gsap.to('.swiper-slide-next .slide-number', 0, { autoAlpha: 0 });
        gsap.to('.swiper-slide-prev .slide-number', 0, { autoAlpha: 0 });
      });
    },
    initGSAP() {
      gsap.to('.rockbg1', 2, { y: 12, repeat: -1, yoyo: true, delay: 0 });
      gsap.to('.swiper-slide-next .slide-text', 0, { autoAlpha: 0 });
      gsap.to('.swiper-slide-prev .slide-text', 0, { autoAlpha: 0 });
      gsap.to('.swiper-slide-next .slide-number', 0, { autoAlpha: 0 });
      gsap.to('.swiper-slide-prev .slide-number', 0, { autoAlpha: 0 });
      gsap.to('.swiper-slide', 0, { scale: 0.85 });
      gsap.to('.swiper-slide-active', 0, { scale: 1 });
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: "Roboto";
  list-style: none;
  box-sizing: border-box;
  background: #000;
}
.s
nav {
  position: fixed;
  z-index: 100;
  height: 8vh;
  width: 96%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
}

.logo {
  color: #fff;
  font-weight: 600;
  font-size: 16px;
}

nav .nav-links ul {
  display: flex;
  flex-direction: row;
}

nav .nav-links ul li {
  padding: 0 4px;
  list-style: none;
}

nav .nav-links ul li img {
  transform: scale(0.45);
}

section {
  height: 100vh;
  overflow: hidden;
}

.bg img {
  width: 110vw;
  height: 110vh;
  filter: brightness(0.6);
}

.rock1 {
  position: absolute !important;
  left: 10vw !important;
  top: 20vh !important;
}

.rock1 img {
  width: 40%;
  filter: brightness(0.5);
}

.text h1 {
  font-family: "AlphaCentauri" !important;
  font-size: 5vw;
  color: #fff;
  letter-spacing: 20px;
  position: absolute;
  top: 35vh;
  left: 34vw;
}

.earth img {
  width: 400px;
  height: 400px;
  position: absolute;
  left: 34vw;
  top: 25vh;
  z-index: 1;
  filter: brightness(0.7);
}

.mid {
  left: -150px !important;
  bottom: -100px !important;
  top: unset !important;
}

.mid img {
  width: 100%;
  z-index: 2;
  left: -20px;
  top: 20vh !important;
  filter: brightness(0.8);
}

.fore {
  right: -50px !important;
  bottom: -200px !important;
  top: 0px !important;
  left: unset !important;
}

.fore img {
  width: 400px;
  height: 110vh;
  z-index: 3;
  filter: brightness(0.5);
}

/* SWIPER */

#sectiontwo {
  width: 100%;
  height: 100vh;
  position: relative;
}

.rockbg1 {
  position: absolute;
  transform: scale(0.2);
  filter: brightness(0.2);
  top: 20vh;
  left: 0;
  z-index: 1;
}

.planet-links {
  width: 95%;
  height: 5vh;
  color: #fff;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
}

.planet-links .swiper-pagination-bullet {
  opacity: 0.2;
  outline: none;
}

.planet-links .swiper-pagination-bullet-active {
  color: #fff;
  opacity: 1;
}

.swiper-pagination-clickable .swiper-pagination-bullet {
  background: transparent;
}

.swiper-container {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 50px 0;
}

.swiper-wrapper {
  transition-delay: 0.5s;
}

.swiper-slide {
  height: 400px !important;
  width: 90% !important;
  background: transparent;
}

.swiper-slide:nth-child(1) .slide-img {
  background-image: url("images/mercury.png");
}

.swiper-slide:nth-child(2) .slide-img {
  background-image: url("images/venus.png");
}

.swiper-slide:nth-child(3) .slide-img {
  background-image: url("images/earth1.png");
}

.swiper-slide:nth-child(4) .slide-img {
  background-image: url("images/mars.png");
}

.swiper-slide:nth-child(5) .slide-img {
  background-image: url("images/jupiter.png");
}

.swiper-slide:nth-child(6) .slide-img {
  background-image: url("images/saturn.png");
}

.swiper-slide:nth-child(7) .slide-img {
  background-image: url("images/uranus.png");
}

.swiper-slide:nth-child(8) .slide-img {
  background-image: url("images/neptune.png");
}

.slide-img {
  background-position: "center";
  background-repeat: no-repeat !important;
  background-size: contain;
  width: 30%;
  height: 100%;
}

.slide-number {
  position: absolute;
  top: -30px;
  left: 30%;
  width: 200px;
  height: 120px;
  overflow: hidden;
  z-index: 10;
}

.slide-number p {
  font-size: 40px;
  font-family: "AlphaCentauri" !important;
  color: #fff;
  position: relative;
}

.slide-number p span {
  position: absolute;
}

.slide-detail {
  position: absolute;
  top: 130px;
  left: 30%;
  z-index: 10;
  width: 50%;
  height: 400px;
  overflow: hidden;
}

.slide-detail p {
  font-size: 14px;
  color: #fff;
  position: relative;
  opacity: 0.8;
  line-height: 30px;
}

.slide-detail p span {
  position: absolute;
}

.slide-detail-facts {
  position: absolute;
  top: 240px;
  left: 30%;
  z-index: 10;
  width: 50%;
  height: 400px;
  overflow: hidden;
  color: #fff;
}

.slide-detail-facts div {
  display: flex;
  position: relative;
}

.slide-detail-facts div h5 {
  margin-right: 20px;
}

.slide-text {
  position: absolute;
  top: -150px;
  left: 22%;
  z-index: 9;
  width: 200px;
  height: 400px;
  overflow: hidden;
  opacity: 0.1 !important;
}

.slide-text h4 {
  color: #fff;
  font-size: 100px;
  position: relative;
}

.slide-text h4 span {
  position: absolute;
}
</style>