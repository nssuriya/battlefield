class Army {
    constructor(){
        this.army = {};
    }

    setArmy(input) {
        let armyLine = input.split(';');
        for (let i in armyLine) {
            this.army['troop'+(parseInt(i)+1)+'_'+armyLine[i].split('#')[0]] = parseInt(armyLine[i].split('#')[1]);
        }
    }

    getArmy(){
        return this.army;
    }
}

module.exports = Army;