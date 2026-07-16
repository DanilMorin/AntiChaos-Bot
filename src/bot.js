import 'dotenv/config';
import { Telegraf } from 'telegraf';
import { handleStart } from './handlers/start.handler.js';
import { HttpsProxyAgent } from 'https-proxy-agent';

const token = process.env.BOT_TOKEN?.trim();
const proxyUrl = process.env.PROXY_URL?.trim();

const bot = new Telegraf(token, {
  telegram: proxyUrl
    ? { agent: new HttpsProxyAgent(proxyUrl) }
    : {},
});

bot.start(handleStart);

await bot.launch();
console.log('AntiChaos Bot запущен. Для остановки нажмите Ctrl+C.');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
