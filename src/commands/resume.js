module.exports = {
    name: "resume",
    alias: ["r"],
    invoiceChannel: true,
    run: async (client, message) =>{
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing to resume!`)
        if(!queue.playing) client.distube.resume(queue)
    }
}