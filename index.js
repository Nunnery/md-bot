var irc = require('irc');
var vantage = require('vantage')();

var config = {
    channels: ['#mythicdrops'],
    server: 'irc.esper.net',
    userName: 'md-bot',
    realName: 'MythicDrops IRC Bot',
    autoRejoin: true,
    autoConnect: true,
    secure: true,
    port: 6697,
    encoding: 'UTF-8'
};
var bot = new irc.Client(config.server, config.userName, config);
bot.addListener('message#', function(from, to, text) {
    switch (text.toUpperCase()) {
        case "!BUILDS":
            bot.say(from, 'https://build.tealcubegames.com/job/MythicDrops/');
            break;
        case "!SOURCE":
            bot.say(from, 'https://github.com/Nunnery/MythicDrops');
            break;
        case "!DISCORD":
            bot.say(from, 'https://discord.gg/35BKfCB');
            break;
    }
});

vantage
    .command("connect")
    .description("Connects to the configured IRC server.")
    .action(function (args, callback) {
        bot.connect(3);
        callback();
    });

vantage
    .command("disconnect")
    .description("Disconnects from the configured IRC server.")
    .action(function (args, callback) {
        bot.disconnect('Forcibly recalled to MythicRealm...');
        callback();
    });

vantage.delimiter("md-bot~$").listen(3000).show();