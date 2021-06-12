const classes = [
    'Militia',
    'Spearmen',
    'LightCavalry',
    'HeavyCavalry',
    'FootArcher',
    'CavalryArcher'
];

const unitAdvantages = {
    'Militia': ['Spearmen', 'LightCavalry'],
    'Spearmen': ['LightCavalry', 'HeavyCavalry'],
    'LightCavalry': ['FootArcher', 'CavalryArcher'],
    'HeavyCavalry': ['Militia', 'FootArcher', 'LightCavalry'],
    'CavalryArcher': ['Spearmen', 'HeavyCavalry'],
    'FootArcher': ['Militia', 'CavalryArcher'],
};

const input = `Spearmen#6;Militia#1;FootArcher#1;LightCavalry#1;HeavyCavalry#1
Militia#10;Spearmen#10;FootArcher#1000;LightCavalry#10;CavalryArcher#100`;

// winning requirements
let count = 3;

Input could be changed accordingly.

Run node app.js for the solution.
