export async function handleStart(ctx) {
  const userName = ctx.from?.first_name || 'друг';

  await ctx.reply(
    `Привет, ${userName}!\n\n` +
      'Я Антихаос-бот. Помогу тебе сохранять задачи, идеи, расходы и привычки, чтобы не держать всё в голове.\n\n' +
      'Пока доступны команды:\n' +
      '/start — запуск\n' +
      '/help — помощь\n' +
      '/add — добавить запись\n' +
      '/list — посмотреть записи',
  );
}
