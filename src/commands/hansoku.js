module.exports = {
  meta: {
    help: 'Senpai is giving you a hansoku.',
    usage: '',
    module: 'Util',
    level: 6
  },
  fn: (msg, suffix) => {
    if (suffix.includes('@')) return msg.channel.createMessage('Senpai is giving ' + suffix + ' a hansoku for their insolence')
    return msg.channel.createMessage('Specify a kouhai')
  }
}
