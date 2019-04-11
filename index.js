const needle = require('needle');



const E = process.env;
const SENSOR = E['SENSOR']||'';
const ALARM = E['ALARM']||'';
const REQUESTRATE = 1000;



async function onInterval() {
  if(!SENSOR) return;
  var res = await needle('get', SENSOR);
  console.log('SENSOR', SENSOR, res.body);
  if(!ALARM) return;
  res = await needle('post', ALARM, res.body, {json: true});
  console.log('ALARM', ALARM, res.body);
}
console.log('DISTANCEALARMGLUE running');
setInterval(onInterval, REQUESTRATE);
