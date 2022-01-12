module.exports = {
    name: "pause",
    invoiceChannel: true,
    run: async (client, message) =>{
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now to pause!`)
        if (queue.playing) client.distube.pause(queue)
    }
}