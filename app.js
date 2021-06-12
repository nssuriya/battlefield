const Fight = require('./Fight');

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

const input = `Spearmen#10;Militia#30;FootArcher#20;LightCavalry#1000;HeavyCavalry#120
Militia#10;Spearmen#10;FootArcher#1000;LightCavalry#120;CavalryArcher#100`;

// winning requirements
let count = 3;

const fight = new Fight(input,count);
fight.createBattleField(classes,unitAdvantages)
fight.createArmy();
console.log(fight.willWin(fight.army.getArmy(),fight.enemy.getArmy()))