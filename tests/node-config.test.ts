import NodeConfig from "../src/node-config";

test("Races loaded from config file.", () => {
    const sut = new NodeConfig();
    expect(sut.Classes).not.toBeUndefined();
});