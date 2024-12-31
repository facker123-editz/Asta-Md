const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'bgm',
    description: 'Send local BGM file from the server',
    async execute(m, { conn }) {
        try {
            // Define the local BGM file path
            const bgmPath = path.join(__dirname, '../media/song.mp3');

            // Check if the file exists
            if (!fs.existsSync(bgmPath)) {
                return m.reply('❌ BGM file not found. Please check the file path.');
            }

            // Send the audio file
            await conn.sendMessage(m.chat, {
                audio: fs.readFileSync(bgmPath),
                mimetype: 'audio/mp4',
                ptt: false
            });

            m.reply('🎵 BGM file sent successfully!');
        } catch (error) {
            console.error(error);
            m.reply('❌ Failed to send the BGM file. Check logs for details.');
        }
    }
};
