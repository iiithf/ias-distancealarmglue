const needle = require('needle');



const E = process.env;
const SOURCE = E['SOURCE']||'';
const TARGET = E['TARGET']||'';
const DATARATE = parseInt(E['DATARATE']||'1000', 10);



async function onInterval() {
  if(!SOURCE) return;
  var res = await needle('get', SOURCE);
  console.log('SOURCE', SOURCE, res.body);
  if(!TARGET) return;
  res = await needle('post', TARGET, res.body, {json: true});
  console.log('TARGET', TARGET, res.body);
}
console.log('DISTANCEALARMGLUE running');
setInterval(onInterval, DATARATE);
