export const BOARD_LAYOUT = [
    ["FREE", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "FREE"],
    ["6C", "5C", "4C", "3C", "2C", "AH", "KH", "QH", "10H", "10S"],
    ["7C", "AS", "2D", "3D", "4D", "5D", "6D", "7D", "9H", "QS"],
    ["8C", "KS", "6C", "5C", "4C", "3C", "2C", "8D", "8H", "KS"],
    ["9C", "QS", "7C", "6H", "5H", "4H", "AH", "9D", "7H", "AS"],
    ["10C", "10S", "9C", "7H", "2H", "3H", "KH", "10D", "6H", "2D"],
    ["QC", "9S", "9C", "8H", "9H", "10H", "QH", "QD", "5H", "3D"],
    ["KC", "8S", "10C", "QC", "KC", "AC", "AD", "KD", "4H", "4D"],
    ["AC", "7S", "6S", "5S", "4S", "3S", "2S", "2H", "3H", "5D"],
    ["FREE", "AD", "KD", "QD", "10D", "9D", "8D", "7D", "6D", "FREE"]
];

export const SUITS = { H: '♥', D: '♦', S: '♠', C: '♣' };
export const ONE_EYE = new Set(['JH', 'JS']);
export const TWO_EYE = new Set(['JD', 'JC']);
export const TEAM_COLORS = ['red', 'blue', 'green'];

export const PEER_CONFIG = {
    config: {
        'iceServers': [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:stun1.l.google.com:19302' },
            { urls: 'stun:stun2.l.google.com:19302' },
            { urls: 'stun:stun3.l.google.com:19302' },
            { urls: 'stun:stun4.l.google.com:19302' }
        ]
    }
};

export const MAX_RECONNECT_ATTEMPTS = 60; // ~5 minutes of attempts

export function getCardImagePath(card) {
    if (card === 'FREE') return '/card_images/back_light.png';
    if (card.startsWith('JOK')) return '/card_images/joker.png';

    const rank = card.slice(0, -1);
    const suit = card.slice(-1);
    const suitMap = { 'H': 'hearts', 'D': 'diamonds', 'S': 'spades', 'C': 'clubs' };
    const suitName = suitMap[suit];

    // Special handling for Jacks based on Sequence logic
    if (rank === 'J') {
        if (card === 'JH') return '/card_images/hearts_J.png';
        if (card === 'JS') return '/card_images/spades_J.png';
        if (card === 'JD') return '/card_images/diamonds_J.png';
        if (card === 'JC') return '/card_images/clubs_J_two_eyed.png';
    }

    return `/card_images/${suitName}_${rank}.png`;
}

export function genId(len = 8) {
    return Array.from(crypto.getRandomValues(new Uint8Array(len)))
        .map(b => b.toString(36).padStart(2, '0')).join('').slice(0, len);
}
