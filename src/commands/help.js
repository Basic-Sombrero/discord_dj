module.exports = {
    name: "help",
    alias: ["h"],
    run: async (client, message) => {
        const commandlist = 
        `!autoplay: Auto plays a new song when queue is empty\n!play [url]: Searches a song on youtube to play unless a url is provided.\n!pause: Pauses the current song\n!queue: Shows all songs currently in the queue.\n!repeat: Repeats the current playing song.\n!resume: Resumes play\n!skip: Skips song\n!stop: Stops the song and removes every song from queue
        `
        return message.channel.send(`${commandlist}`)
    }
}