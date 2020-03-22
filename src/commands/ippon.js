var gifs = {
  "https://tenor.com/view/kendo-tsuki-ippon-shiai-sword-gif-8394006": "${name} just got tsuki'd and flew across the room. Embarassing.",
  "https://i.makeagif.com/media/2-14-2015/yRPtUJ.gif": "${name} tried to dodge the tsuki by moving their head back. 'Clearly did not work', you thought to yourself as you bleed out from your throat.",
  "https://img.gifmagazine.net/gifmagazine/images/125655/original.gif": "${name} jumped in like an idiot and got sliced in half by a gyaku-dou. Get styled on.",
  "https://img.gifmagazine.net/gifmagazine/images/125644/original.gif": "Is this a debana-kote drill? Because ${name} just opened up the kote like it was...",
  "https://img.gifmagazine.net/gifmagazine/images/125641/original.gif": "Alright lets just both back up an-... nope they just sliced your head open. RIP ${name}.",
  "https://img.gifmagazine.net/gifmagazine/images/125656/original.gif": "Can't hit my men if I cover it with my arm! *hits kote* Fuck... - ${name}",
  "https://img.gifmagazine.net/gifmagazine/images/125657/original.gif": "The reactionary half-ass block resulted in ${name} having only half a head left. Men!",
  "https://img.gifmagazine.net/gifmagazine/images/150590/original.gif": "The only thing ${name}'s dodging did was change the angle at which their head got sliced open.",
  "https://img.gifmagazine.net/gifmagazine/images/125651/original.gif": "${name} got baited by the men so hard that they didn't even realize their arm is now missing.",
  "https://img.gifmagazine.net/gifmagazine/images/57204/original.gif": "I wonder what was going through ${name}'s mind at this moment. Well... probably a sword",
}

module.exports = {
  meta: {
    help: 'Ippon! geeettttttt dunked on!!!.',
    usage: '@user',
    module: 'Fun',
    level: 0
  },
  fn: (msg, suffix) => {
    if (suffix.includes('@')) {
      var gif_list = Object.keys(gifs)
      name = suffix
      var gif = gif_list[gif_list.length * Math.random() << 0]
      var comment = gifs[gif].split("${name}")
      msg.channel.createMessage(comment[0] + name + comment[1])
      return msg.channel.createMessage(gif)
    }
    return msg.channel.createMessage("Specify the kouhai that got dunked (@ them)")
  }
}
