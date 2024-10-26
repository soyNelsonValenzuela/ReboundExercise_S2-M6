import { nanoid } from 'nanoid';
import { procesadorTexto } from './utils.js';
import { booleanSwitch } from './config.js';

const id1 = nanoid();
const id2 = nanoid();


console.log(procesadorTexto(booleanSwitch,id1,id2));
