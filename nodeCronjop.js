
const cron = require('node-cron')

const cronTest = cron.schedule('* * * * * *', () => {
    console.log("wellcome to the cron time setup..");
})

setTimeout(() => {
    cronTest.stop();
    console.log(12345);
}, 2000)

setTimeout(() => {
    cronTest.start();
    console.log(12345);

}, 5000)

setTimeout(() => {
    cronTest.stop();
    console.log(12345123456);

}, 8000)

setTimeout(() => {
    cronTest.start();
    console.log(123457777777777);

}, 9000)