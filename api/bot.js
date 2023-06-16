const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx)=> {
    ctx.reply("Hi!")
}) 


module.exports = async (request, response) => {
    try {
        await bot.handleUpdate(JSON.parse(request.body));
        response.json( { statusCode: 200, body: "" });
    } catch (e) {
        console.error("error in handler:", e);
        response.json( { statusCode: 400, body: "This endpoint is meant for bot and telegram communication" });
    }
};
