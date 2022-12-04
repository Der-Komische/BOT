const mineflayer = require("mineflayer");
const { mineflayer: mineflayerViewer } = require("prismarine-viewer");

const bot = mineflayer.createBot({
  host: "localhost",
  username: "JavaScript"
});

bot.on("spawn", () => {
  mineflayerViewer(bot, { port: 3007, firstPerson: true });
  bot.chat("Hello, World!");
});
