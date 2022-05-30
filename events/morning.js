module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(message) {
		if (message.author.bot) return;
		const messageMember = message.guild.members.cache.find((user) => user.id === message.author.id);
		let messageMemberNick = messageMember.nickname;
		if (messageMemberNick === null) {
			messageMemberNick = message.author.username;
		}
		if (
			//  日文觸發詞
			message.content === 'まつりおはよう' ||
			message.content === 'おはよう' ||
			// 中文觸發詞
			message.content === '祭早安' ||
			message.content === '早安' ||
			// 中日混和觸發詞
			message.content === '祭おはよう' ||
			message.content === 'まつり早安'
		) {
			const RandomMessage =
			[
				'おはよう～♪',
				'早安呀～♪',
			];
			return message.reply(
				{
					allowedMentions: { repliedUser: false },
					content: messageMemberNick + RandomMessage[Math.floor(Math.random() * RandomMessage.length)],
					ephemeral: false,
				},
			);
		}
	},
};
