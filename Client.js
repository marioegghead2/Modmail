const { MessageEmbed, Client, Collection } = require('discord.js');
class ModmailClient extends Client {
    constructor() {
        super();
        /*
        Dependencies
        */
       this.path = require('path');
       this.discord = require('discord.js');
       this.fs = require('fs');
       /*
       Collections
       */ 
      this.commands = new Collection();
      this.threads = new Collection();
    } 
    /*
    Constants
    */
    this.prefix = "m!"
    commandHandler(path) {
        this.fs.readdirSync(this.path.normalize(path)).map((f) => {
            const File = require(this.path.join(__dirname, `..`, path, f));
        });
    }
    getCommand(cmd) {
        return this.commands.has(cmd) ? this.commands.get(cmd) : false;

    }
    start(token, path) {
        this.commandHandler(path);
        this.login(token);
        this.on('ready', () => {
            console.log("I'm now online!")
        });
        this.on('message', async(message) => {

        }
    }
}
