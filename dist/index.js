"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fs = require("fs");
function loadConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        let configData = yield fs.readFileSync('./src/prototype001/simple_earth.json', 'utf8');
        console.log(JSON.parse(configData));
    });
}
loadConfig();
console.log('Welcome to Sim Earth Core');
//# sourceMappingURL=index.js.map