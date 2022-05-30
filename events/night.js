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
			message.content === 'まつりおやすみ' ||
			message.content === 'おやすみ' ||
			// 中文觸發詞
			message.content === '祭晚安' ||
			message.content === '晚安',
			// 中日混和觸發詞
			message.content === '祭おやすみ' ||
			message.content === 'まつり晚安'
		) {
			const RandomMessage =
			[
				'おやすみ～♪',
				'晚安呀～♪',
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
