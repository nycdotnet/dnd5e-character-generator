class Character {
    constructor(data: ICharacterData) {
        this.Attributes = {
            Strength: data.BaseStrength || 3,
            Dexterity: data.BaseDexterity || 3,
            Constitution: data.BaseConstitution || 3,
            Intelligence: data.BaseIntelligence || 3,
            Wisdom: data.BaseWisdom || 3,
            Charisma: data.BaseCharisma || 3
        }
        this.Levels = data.Levels || [1];
        this.Classes = data.Classes || ["Unspecified"];
    }

    Attributes: ICharacterAttributes;
    Levels: number[];
    Classes: string[];
    get Level() {
        return this.Levels.map(l => `Level ${l}`).join("/");
    }
    get Class() {
        return this.Classes.join("/");
    }
    get ClassAndLevel() {
        return this.Classes.map((c, i) => `Level ${this.Levels[i]} ${c}`).join("/");
    }
}

export default Character;