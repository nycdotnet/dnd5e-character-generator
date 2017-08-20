interface IConfigFile {
    Races: string[];
    Classes: string[];
}

interface IConfig {
    Races: string[];
    Classes: string[];
}

declare const enum Dice {
    d4 = 4,
    d6 = 6,
    d8 = 8,
    d10 = 10,
    d12 = 12,
    d20 = 20
}

interface ICharacterData {
    BaseStrength?: number;
    BaseDexterity?: number;
    BaseConstitution?: number;
    BaseIntelligence?: number;
    BaseWisdom?: number;
    BaseCharisma?: number;
    Race?: string;
    Classes?: string[];
    Levels?: number[];
    // Languages: string[];
    // Speed: number;
    // Traits: string[];
    // Levels: number[];
    // XP: number;
    // MaximumHitPoints: number;
    // TemporaryHitPoints: number;
    // HitPoints: number;
    // HitDice: Dice[];
    // ProficiencyBonus: number;
    // WeaponProficiencies: string[];
    // SavingThrowProficiencies: string[];
    // SkillProficiencies: string[];
    // ToolProficiencies: string[];
    // ClassFeatures: string[];
}

interface ICharacterAttributes {
    Strength: number;
    Dexterity: number;
    Constitution: number;
    Intelligence: number;
    Wisdom: number;
    Charisma: number;
}