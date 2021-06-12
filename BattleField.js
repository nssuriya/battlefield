class BattleField {
    constructor() {
        this.unitTypes = [];
        this.unitAdvantages = {};
    }

    setUnitClasses(unitTypes){
        this.unitTypes = unitTypes;
    }

    getUnitClasses(){
        return this.unitTypes;
    }

    setUnitAdvantages(unitAdvantages){
        this.unitAdvantages = unitAdvantages;
    }

    getUnitAdvantages(){
        return this.unitAdvantages;
    }
}

module.exports = BattleField;
