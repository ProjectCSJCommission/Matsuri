module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(message) {
		if (message.author.bot) return;
		const messageMember = message.guild.members.cache.find((user) => user.id === message.author.id);
		let messageMemberNick = messageMember.nickname;
		if (messageMemberNick === null) messageMemberNick = message.author.username;
		if
		(
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
			const RandomMorning =
			[
				'おはよう～♪',
				'早安呀～♪',
			];
			message.reply(
				{
					allowedMentions: { repliedUser: false },
					content: `${messageMemberNick}${RandomMorning[Math.floor(Math.random() * RandomMorning.length)]}`,
					ephemeral: false,
				},
			);
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
			const RandomMorning =
			[
				'おやすみ～♪',
				'晚安呀～♪',
			];
			message.reply(
				{
					allowedMentions: { repliedUser: false },
					content: `${messageMemberNick}${RandomMorning[Math.floor(Math.random() * RandomMorning.length)]}`,
					ephemeral: false,
				},
			);
		}
		if (
			message.content.match('起來嗨') != null ||
			message.content.match('嗨起來') != null
		) {
			const RandomMorning =
			[
				'去睡覺',
				'不要',
				'再說',
			];
			message.reply(
				{
					allowedMentions: { repliedUser: false },
					content: `${RandomMorning[Math.floor(Math.random() * RandomMorning.length)]}`,
					ephemeral: false,
				});
		}
	},
};
