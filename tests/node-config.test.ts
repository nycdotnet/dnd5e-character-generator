import * as path from 'path';
import NodeConfig from "../src/node-config";

test("Races loaded from config file with no path specified.", () => {
    expect.hasAssertions();
    const sut = new NodeConfig();
    validateConfig(sut);
});

test("Races loaded from config file with path specified.", () => {
    expect.hasAssertions();
    const explicitPath = path.join(__dirname, "../WizardsContent/").replace(/\\/g, "/");
    expect(explicitPath).toMatch(/\/WizardsContent\/$/);
    const sut = new NodeConfig(explicitPath);
    validateConfig(sut);
});

function validateConfig(config: IConfig) {
    expect(config.Classes).not.toBeUndefined();
    expect(config.Classes.length).toBeGreaterThanOrEqual(12);
    expect(config.Classes).toContain("Druid");
    expect(config.Races).not.toBeUndefined();
    expect(config.Races.length).toBeGreaterThanOrEqual(9);
    expect(config.Races).toContain("Dwarf");
}