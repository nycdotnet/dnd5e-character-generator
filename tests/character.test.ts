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