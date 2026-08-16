"use strict";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrambleTextPlugin);

let smoother = ScrollSmoother.create({
    smooth: .5,
    effects: true
});

const progressBars = document.querySelectorAll('.progress-bar');

for (let i = 1; i <= progressBars.length; i++) {
    gsap.to(progressBars[i - 1], {
        scaleX: 1,
        scrollTrigger: {
            trigger: `#chapter-${i}`,
            start: '50% bottom',
            end: 'bottom bottom',
            scrub: true,
        }
    });
}

const chapterStrokes = document.querySelectorAll('.stroke');

chapterStrokes.forEach(e => {
    e.innerHTML = '';

    const rc = rough.svg(e);

    let node = rc.rectangle(0, 0, e.clientWidth, e.clientHeight, {
        fill: 'rgba(237, 229, 230, 1)',
        stroke: 'rgba(237, 229, 230, 1)',
        fillStyle: 'zigzag',
        hachureGap: 7,
        fillWeight: .5
    });
    e.appendChild(node);
});

gsap.to('h2', {
    duration: 1.5,
    scrambleText: {
        text: "Aujourd'hui, Papa m'a dit qu'on allait partir vivre au Japon !",
        chars: 'きすぬぷめゃやゅわゐゑよまぽで'
    }
});

window.addEventListener('resize', () => {
    chapterStrokes.forEach(e => {
        e.innerHTML = '';

        const rc = rough.svg(e);

        let node = rc.rectangle(0, 0, e.clientWidth, e.clientHeight, {
            fill: 'rgba(237, 229, 230, 1)',
            stroke: 'rgba(237, 229, 230, 1)',
            fillStyle: 'zigzag',
            hachureGap: 7,
            fillWeight: .5
        });
        e.appendChild(node);
    });
});

gsap.to('h1', {
    opacity: 0,
    scrollTrigger: {
        trigger: '#home',
        start: '20% top',
        end: 'bottom 50%',
        scrub: true,
    }
});

gsap.to('h2', {
    opacity: 0,
    scrollTrigger: {
        trigger: '#home',
        start: '20% top',
        end: 'bottom 50%',
        scrub: true,
    }
});

const volBtn = document.querySelector(".volume")
const volOn = document.querySelector(".volume-on");
const volOff = document.querySelector(".volume-off");

volBtn.addEventListener("click", () => {
    volOn.classList.toggle("hidden");
    volOff.classList.toggle("hidden");
});


const oiseaux = document.querySelectorAll('.oiseau');

oiseaux.forEach(oiseau => {

    const scaleFactor = Math.random();
    oiseau.style.setProperty("--scale-factor", scaleFactor);

    const posX = Math.floor(Math.random() * 100) + 1;
    const posY = Math.floor(Math.random() * 100) + 1;

    oiseau.style.left = `${posX}vw`;
    oiseau.style.top = `${posY}vh`;
});