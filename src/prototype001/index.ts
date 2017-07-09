import { SimulateEarthEngine } from './engine';
import * as fs from 'fs';

async function loadConfig() {
  let configData = await fs.readFileSync('./src/prototype001/simple_earth.json', 'utf8');
  console.log(JSON.parse(configData));
}
loadConfig();

console.log('Welcome to Sim Earth Core');