const { Telegraf } = require('telegraf');
const Markup = require('telegraf').Markup;

const bot = new Telegraf('7532913307:AAFaV2S39jgw1xCj5LxDXB_Jt6EvfzJgguM');

bot.start((ctx) => {

    // Encode user ID in the userName
    const webAppUrl = `https://tekehabesha.com`;

    ctx.reply('Welcome To our Teke Habesha Cloth Shop',
        Markup.inlineKeyboard([
            Markup.button.webApp('Shop Now', webAppUrl)
        ])
    );
});

bot.launch();