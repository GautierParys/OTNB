"use strict";

const options = {
    btnPlay: document.querySelectorAll('[data-action="play"]'),
    audioCtx: new (window.AudioContext || window.webkitAudioContext)(),
    audioFile: [
        './assets/audio/chapitre-1.mp3',
        './assets/audio/chapitre-2.mp3',
        './assets/audio/chapitre-3.mp3',
        './assets/audio/chapitre-4.mp3',
        './assets/audio/chapitre-5.mp3'
    ]
};

const buffers = [];
let currentSource = null;
let isMuted = false;

const globalGainNode = options.audioCtx.createGain();
globalGainNode.connect(options.audioCtx.destination);

const loadSample = async (audioFilePath, audioCtx = options.audioCtx) => {
    try {
        const response = await fetch(audioFilePath);
        const arrayBuffer = await response.arrayBuffer();
        return await audioCtx.decodeAudioData(arrayBuffer);
    } catch (error) {
        console.error(`Erreur de chargement pour ${audioFilePath}:`, error);
    }
};

const play = (bufferToPlay) => {
    if (!bufferToPlay) {
        console.warn("Le fichier audio est encore en cours de chargement.");
        return;
    }

    if (currentSource) {
        currentSource.stop();
        currentSource.disconnect();
    }

    currentSource = options.audioCtx.createBufferSource();
    currentSource.buffer = bufferToPlay;
    currentSource.connect(globalGainNode);
    currentSource.start();
};

options.btnPlay.forEach((btn, index) => {
    if (options.audioFile[index]) {
        loadSample(options.audioFile[index]).then((buffer) => {
            if (buffer) buffers[index] = buffer;
        });

        btn.addEventListener('click', () => {
            if (options.audioCtx.state === 'suspended') {
                options.audioCtx.resume();
            }
            play(buffers[index]);
        });
    }
});

const volumeButton = document.querySelector(".volume");

if (volumeButton) {
    volumeButton.addEventListener("click", () => {
        isMuted = !isMuted;

        const volumeValue = isMuted ? 0 : 1;
        globalGainNode.gain.setTargetAtTime(volumeValue, options.audioCtx.currentTime, 0.1);
    });
}