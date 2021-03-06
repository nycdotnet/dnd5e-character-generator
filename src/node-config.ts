import * as path from 'path';
import * as fs from 'fs';

class Config implements IConfig {
    constructor(staticContentPath?: string) {
        const staticContentFullName = staticContentPath === undefined ?
            path.join(__dirname, "../WizardsContent/static-content.json") :
            path.join(staticContentPath, "static-content.json");
        const content = fs.readFileSync(staticContentFullName, {encoding: "utf8"});
        const data: IConfigFile = JSON.parse(content);
        this.Races = data.Races;
        this.Classes = data.Classes;
    }

    Races: string[];
    Classes: string[];
}

export default Config;