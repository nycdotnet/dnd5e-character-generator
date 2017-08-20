import Character from "../src/character";

test("Single class formatting works as expected.", () => {
    const data: ICharacterData = {
        Levels: [3],
        Classes: ["Fighter"]
    };
    const sut = new Character(data);
    expect(sut.Level).toBe("Level 3");
    expect(sut.Class).toBe("Fighter");
    expect(sut.ClassAndLevel).toBe("Level 3 Fighter");
});

test("Multi class formatting works as expected.", () => {
    const data: ICharacterData = {
        Levels: [2, 3],
        Classes: ["Mage", "Rogue"]
    };
    const sut = new Character(data);
    expect(sut.Level).toBe("Level 2/Level 3");
    expect(sut.Class).toBe("Mage/Rogue");
    expect(sut.ClassAndLevel).toBe("Level 2 Mage/Level 3 Rogue");
});

test("Base attributes work as expected.", () => {
    const data: ICharacterData = {
        BaseStrength: 9,
        BaseDexterity: 10,
        BaseConstitution: 11,
        BaseIntelligence: 12,
        BaseWisdom: 13,
        BaseCharisma: 14
    };
    const sut = new Character(data);
    expect(sut.Attributes.Strength).toBe(9);
    expect(sut.Attributes.Dexterity).toBe(10);
    expect(sut.Attributes.Constitution).toBe(11);
    expect(sut.Attributes.Intelligence).toBe(12);
    expect(sut.Attributes.Wisdom).toBe(13);
    expect(sut.Attributes.Charisma).toBe(14);
});

