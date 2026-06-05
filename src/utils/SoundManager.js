class SoundManager {
    constructor() {
        this.ctx = null;
        this.muted = localStorage.getItem('sequence_muted') === 'true';
        this.masterGain = null;

        // HTML5 Audio mapping
        this.audioSamples = {
            deckShuffle: new Audio('/sounds/JDSherbert - Tabletop Games SFX Pack - Deck Shuffle - 1.mp3'),
            pieceImpact: new Audio('/sounds/JDSherbert - Tabletop Games SFX Pack - Piece Impact - 2.mp3')
        };
        Object.values(this.audioSamples).forEach(a => {
            a.volume = 0.6;
            a.muted = this.muted;
        });
    }

    playSample(name) {
        if (this.muted) return;
        const audio = this.audioSamples[name];
        if (audio) {
            const clone = audio.cloneNode();
            clone.volume = audio.volume;
            clone.play().catch(e => console.warn("Audio play failed:", e));
        }
    }

    init() {
        if (this.ctx) return;
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
            this.masterGain = this.ctx.createGain();
            this.masterGain.connect(this.ctx.destination);
            this.applyMuteState();
        } catch (e) {
            console.warn("Web Audio API not supported", e);
        }
    }

    toggleMute() {
        this.muted = !this.muted;
        localStorage.setItem('sequence_muted', this.muted);
        this.applyMuteState();
        return this.muted;
    }

    applyMuteState() {
        if (this.masterGain) {
            this.masterGain.gain.value = this.muted ? 0 : 0.3; // 30% master volume
        }
        if (this.audioSamples) {
            Object.values(this.audioSamples).forEach(a => a.muted = this.muted);
        }
    }

    playTone(frequency, type, duration, vol = 1, delay = 0) {
        if (!this.ctx || this.muted) return;

        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(frequency, this.ctx.currentTime + delay);

        gainNode.gain.setValueAtTime(0, this.ctx.currentTime + delay);
        gainNode.gain.linearRampToValueAtTime(vol, this.ctx.currentTime + delay + 0.05); // quick fade in
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + delay + duration); // fade out

        osc.connect(gainNode);
        gainNode.connect(this.masterGain);

        osc.start(this.ctx.currentTime + delay);
        osc.stop(this.ctx.currentTime + delay + duration);
    }

    playYourTurn() {
        this.playTone(440, 'sine', 0.15, 0.8, 0);
        this.playTone(660, 'sine', 0.2, 0.8, 0.15);
    }

    playSelectCard() {
        this.playTone(300, 'triangle', 0.05, 0.5);
    }

    playPlaceChip() {
        this.playSample('pieceImpact');
    }

    playDrawCard() {
        this.playSample('deckShuffle');
    }

    playDeckShuffle() {
        this.playSample('deckShuffle');
    }

    playJackPlayed() {
        this.playTone(200, 'sawtooth', 0.1, 0.5, 0);
        this.playTone(500, 'square', 0.2, 0.5, 0.1);
    }

    playError() {
        this.playTone(100, 'square', 0.2, 0.6);
    }

    playSequenceAchieved() {
        this.playTone(261.63, 'square', 0.8, 0.5, 0); // C4
        this.playTone(329.63, 'square', 0.8, 0.5, 0); // E4
        this.playTone(392.00, 'square', 0.8, 0.5, 0); // G4
        this.playTone(523.25, 'sine', 0.6, 0.7, 0.2); // C5
    }

    playWin() {
        let delay = 0;
        const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99]; // C, E, G, C, E, G
        for (let i = 0; i < notes.length; i++) {
            this.playTone(notes[i], 'triangle', 0.3, 0.6, delay);
            delay += 0.1;
        }
        this.playTone(523.25, 'square', 1.5, 0.6, delay);
        this.playTone(659.25, 'square', 1.5, 0.6, delay);
        this.playTone(783.99, 'square', 1.5, 0.6, delay);
    }

    playLose() {
        let delay = 0;
        const notes = [392.00, 370.00, 349.23, 311.13]; // G4, F#4, F4, Eb4
        for (let i = 0; i < notes.length; i++) {
            const duration = i === notes.length - 1 ? 0.8 : 0.25;
            this.playTone(notes[i], 'sawtooth', duration, 0.6, delay);
            delay += 0.3;
        }
        this.playTone(207.65, 'sine', 1.0, 0.5, delay - 0.1);
        this.playTone(220.00, 'sine', 1.0, 0.5, delay - 0.1);
    }
}

export const sounds = new SoundManager();
