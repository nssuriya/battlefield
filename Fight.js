const BattleField = require('./BattleField');
const Army = require('./Army');

class Fight {
    constructor(input,count=3) {
        this.input = input.split('\n');
        this.winningPossibilities = {};
        this.mainArray = [];
        this.count = count;
    }

    createBattleField(classes, advantages) {
        const bf = new BattleField();
        bf.setUnitClasses(classes);
        bf.setUnitAdvantages(advantages);
        this.bf = bf;
    }

    createArmy() {
        const army = new Army();
        const enemy = new Army();
        army.setArmy(this.input[0]);
        enemy.setArmy(this.input[1]);
        this.army = army;
        this.enemy = enemy;
    }

    willWin(army, enemy) {
        let winning = {};
        for (let i in army) {
            for (let k in enemy) {
                let ii = i.split("_")[1];
                let kk = k.split("_")[1];
                let advantages = this.bf.getUnitAdvantages();
                if ((army[i] > enemy[k]) || (advantages[ii].indexOf(kk) > -1 && army[i] > enemy[k] / 2)) {
                    winning[i] = winning[i] || [];
                    winning[i].push(k + '|' + i);
                }
            }
        }
        let data = [];
        for (let i in winning) {
            data.push(winning[i]);
        }
        this.mainArray = this.getAllPossibilities(data);
        let winningCombination = this.findWinningPossibilities(this.mainArray);
        if (winningCombination) {
            let remainingArmy = winningCombination[1];
            let remainingEnemy = winningCombination[0];

            for (let i in army) {
                if (remainingArmy.indexOf(i) === -1)
                    remainingArmy.push(i)
            }

            for (let i in enemy) {
                if (remainingEnemy.indexOf(i) === -1)
                    remainingEnemy.push(i)
            }

            let finalString = '';
            for (let i in enemy) {
                let index = remainingEnemy.indexOf(i);
                let troop = remainingArmy[index];
                let troopCount = army[troop];
                finalString += `${troop.split("_")[1]}#${troopCount};`;
            }
           return finalString
        }
        else {
            return "There is no chance of winning";
        }

    }
    // all possibilities of winning matches
    getAllPossibilities(list, n = 0, result = [], current = []) {
        if (n === list.length) {
            result.push(current)
        }
        else {
            list[n].forEach(item => this.getAllPossibilities(list, n + 1, result, [...current, item]))
        }
        return result;
    }
    // find winning possibilities and return the first one
    findWinningPossibilities(arr) {
        for (let i in arr) {
            const uniq = [], troopArray = [];
            for (let k in arr[i]) {
                let value = arr[i][k].split('|')[0];
                let troop = arr[i][k].split('|')[1];
                if (uniq.indexOf(value) > -1) {
                    // break;
                }
                else {
                    uniq.push(value);
                    troopArray.push(troop);
                }
                if (uniq.length === this.count) {
                    return [uniq, troopArray];
                }
            }
        }
    }

}

module.exports = Fight;


