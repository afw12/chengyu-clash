// Chengyu Clash - idiom library
// level: 1 = Passive-Aggressive, 2 = Direct Hit, 3 = Nuclear
// Each idiom: hanzi, pinyin, literal translation, real usage (EN), example duel line, misuse warning.

const IDIOMS = [
  // ============ LEVEL 1 · Passive-Aggressive 阴阳怪气 ============
  {
    ch: "无话可说", py: "wú huà kě shuō", level: 1,
    lit: "I have nothing to say",
    en: "\"I'm speechless\" — but in a cold, dismissive way. You're not lost for words; you're saying their argument doesn't even deserve words.",
    usage: "Drop it after someone says something you find absurd. Reads as: 'That was so bad I won't even bother.'",
    ex: "你说这话我真是无话可说。",
    exEn: "Hearing you say that, I'm honestly speechless.",
    warn: "Can also be genuinely neutral (\"I have nothing to add\"). The sarcastic tone comes from context and 语气."
  },
  {
    ch: "甘拜下风", py: "gān bài xià fēng", level: 1,
    lit: "I willingly bow to the wind (admit defeat)",
    en: "\"I surrender, you win\" — almost always sarcastic in arguments. The verbal equivalent of a slow clap.",
    usage: "When someone 'wins' on a technicality or repeats a dumb point loudly. Implies: 'Sure, you win. Congrats.'",
    ex: "行行行，你赢了，我甘拜下风。",
    exEn: "Fine, fine, you win. I bow to your greatness.",
    warn: "In formal contexts (sports, competition) it can be sincere praise. Sarcastic only in a quarrel."
  },
  {
    ch: "大开眼界", py: "dà kāi yǎn jiè", level: 1,
    lit: "greatly broaden one's eyes",
    en: "\"What an eye-opener\" — weaponized. Normally praise, but in a fight it means: 'I've never seen anyone that wrong before.'",
    usage: "Reacting to an argument so bizarre it's almost impressive.",
    ex: "今天真是让我大开眼界了。",
    exEn: "Well, today has truly been an eye-opener.",
    warn: "Never use it about yourself in an argument — only to 'compliment' the other side."
  },
  {
    ch: "受益匪浅", py: "shòu yì fěi qiǎn", level: 1,
    lit: "the benefit is not shallow",
    en: "\"I've learned so much (from you)\" — sarcasm. Means: 'Thanks for the lecture, Professor Wrong.'",
    usage: "After someone condescendingly explains something you already know.",
    ex: "听君一席话，真是受益匪浅啊。",
    exEn: "Listening to you, I've truly learned so much.",
    warn: "Often paired with 听君一席话 for maximum sarcasm. Sincere in normal conversation."
  },
  {
    ch: "高瞻远瞩", py: "gāo zhān yuǎn zhǔ", level: 1,
    lit: "stand high and see far",
    en: "\"What far-sighted vision!\" — ironic. For someone who thinks they've predicted everything but got it all wrong.",
    usage: "Mocking someone's grand but baseless predictions or plans.",
    ex: "您可真是高瞻远瞩，我们凡人比不了。",
    exEn: "You're so visionary. Us mere mortals can't compete.",
    warn: "Adding 您 (polite 'you') and 可真是 makes it unmistakably sarcastic."
  },
  {
    ch: "好自为之", py: "hǎo zì wéi zhī", level: 1,
    lit: "conduct yourself well",
    en: "\"You'd better watch yourself / I hope you know what you're doing.\" Cold, quiet menace. A warning dressed as advice.",
    usage: "How you END an argument. Delivered flat, it's chillier than any insult.",
    ex: "我最后说一次：你好自为之。",
    exEn: "I'll say this one last time: you'd better watch yourself.",
    warn: "Sounds like a genuine threat if said with a hard tone. Use carefully."
  },
  {
    ch: "不敢苟同", py: "bù gǎn gǒu tóng", level: 1,
    lit: "I dare not carelessly agree",
    en: "\"I'm afraid I beg to differ.\" The most polite way to call someone wrong in Chinese. Business-class disagreement.",
    usage: "Formal, restrained opposition. Great for arguing with bosses, elders, or in comment sections where you want to look classy.",
    ex: "您的观点恕我实在不敢苟同。",
    exEn: "I'm afraid I simply cannot agree with your view.",
    warn: "Very formal — sarcastic only if the situation is obviously casual."
  },
  {
    ch: "一言难尽", py: "yī yán nán jìn", level: 1,
    lit: "hard to explain in one sentence",
    en: "\"It's... a long story.\" here: 'Your logic is so broken I don't know where to begin.'",
    usage: "Sigh, shake head, deliver. Suggests the other person's take is hopeless.",
    ex: "你这个逻辑……一言难尽。",
    exEn: "Your logic here... where do I even begin.",
    warn: "Genuinely means 'complicated situation' in normal chat. Tone decides everything."
  },
  {
    ch: "佩服佩服", py: "pèi fú pèi fú", level: 1,
    lit: "I admire you, I admire you",
    en: "\"My hats off to you\" — doubled for extra venom. Classic Chinese sarcasm: praise as an insult.",
    usage: "After an absurd excuse or a shameless statement. Repeat it twice, add a slow 呵呵 for the kill.",
    ex: "这样的理由您也想得出来，佩服佩服。",
    exEn: "You even managed to come up with THAT excuse. Truly admirable.",
    warn: "In southern China it can be genuine. On the internet, it's 90% sarcasm."
  },
  {
    ch: "敬谢不敏", py: "jìng xiè bù mǐn", level: 1,
    lit: "respectfully decline due to incompetence",
    en: "\"Thanks, but count me out.\" Bookish, elegant refusal — the genteel way of saying 'yeah, no.'",
    usage: "Rejecting someone's offer or logic while implying they're the clueless one. High-class sass.",
    ex: "您这好意我心领了，敬谢不敏。",
    exEn: "I appreciate the offer, but I'll gracefully pass.",
    warn: "Very literary. Younger Chinese may not recognize it — which is part of the flex."
  },

  // ============ LEVEL 2 · Direct Hit 指桑骂槐 ============
  {
    ch: "井底之蛙", py: "jǐng dǐ zhī wā", level: 2,
    lit: "a frog at the bottom of a well",
    en: "A frog that thinks the well is the whole sky — someone whose tiny experience made them narrow-minded.",
    usage: "When someone judges the world from their own limited bubble. The classic 'you should get out more' of Chinese.",
    ex: "你没出过这个城市就下结论？井底之蛙。",
    exEn: "You've never left this city and you're drawing conclusions? Frog in a well.",
    warn: "Insults their experience, not their character — slightly softer than Level 3 options."
  },
  {
    ch: "自不量力", py: "zì bù liàng lì", level: 2,
    lit: "not measuring one's own strength",
    en: "Biting off more than you can chew — overestimating yourself to a foolish degree.",
    usage: "When someone challenges a person/task way beyond them. 'You really think you can take me on?'",
    ex: "就凭你一个人想推翻整个方案？自不量力。",
    exEn: "You alone want to overturn the whole plan? You have no idea what you're up against.",
    warn: "Provocative — invites them to prove you wrong. Make sure they can't."
  },
  {
    ch: "强词夺理", py: "qiǎng cí duó lǐ", level: 2,
    lit: "seize words, rob reason",
    en: "Arguing for the sake of winning — twisting words when you clearly know you're wrong.",
    usage: "Calling out someone who won't admit defeat and keeps moving goalposts.",
    ex: "事实摆在眼前你还在狡辩，纯属强词夺理。",
    exEn: "The facts are right there and you're still twisting them — pure sophistry.",
    warn: "Strong but fair — it attacks the arguing style, not the person."
  },
  {
    ch: "信口开河", py: "xìn kǒu kāi hé", level: 2,
    lit: "open the river with a careless mouth",
    en: "Talking out of your hat — making things up with total confidence and zero evidence.",
    usage: "Against someone citing 'facts' they clearly invented. Pairs well with asking for a source.",
    ex: "数据呢？没有数据就是信口开河。",
    exEn: "Where's the data? No data means you're just making things up.",
    warn: "Essentially an accusation of lying, just wearing a literary coat."
  },
  {
    ch: "道听途说", py: "dào tīng tú shuō", level: 2,
    lit: "heard on the road, told on the path",
    en: "Chinese social media's 'source: trust me bro' — repeating rumors as if they were facts.",
    usage: "Dismiss someone's evidence as secondhand gossip.",
    ex: "这些都是道听途说，你核实过吗？",
    exEn: "All of that is hearsay. Did you verify any of it?",
    warn: "Great combo with 信口开河: '道听途说加上信口开河' = double-tap."
  },
  {
    ch: "一知半解", py: "yī zhī bàn jiě", level: 2,
    lit: "one part knowledge, half part understanding",
    en: "A little learning is a dangerous thing — they know just enough to be confidently wrong.",
    usage: "When someone read one headline and now lectures you on the whole field.",
    ex: "看了两篇文章就敢谈专业问题？一知半解最可怕。",
    exEn: "Two articles in and you're lecturing on the field? A little knowledge is the most dangerous thing.",
    warn: "Implies superiority — they're beneath the level needed for this conversation."
  },
  {
    ch: "断章取义", py: "duàn zhāng qǔ yì", level: 2,
    lit: "cut a chapter to take its meaning",
    en: "Quote-mining — cherry-picking a fragment out of context to distort what someone meant.",
    usage: "Defense move: when someone 'quotes' you dishonestly.",
    ex: "别断章取义，我说的是完整的上下文。",
    exEn: "Don't quote me out of context — I was talking about the full picture.",
    warn: "One of the most-used words in Chinese internet fights. Instant credibility."
  },
  {
    ch: "以偏概全", py: "yǐ piān gài quán", level: 2,
    lit: "use the part to cover the whole",
    en: "Hasty generalization — 'I met one rude tourist, therefore an entire nation is rude.'",
    usage: "The logical counter-punch. Point out they're extrapolating from a sample of one.",
    ex: "一个例子就下结论，这是以偏概全。",
    exEn: "One anecdote and you generalize? That's a hasty generalization.",
    warn: "Academic enough to make you look rational while dismantling them."
  },
  {
    ch: "纸上谈兵", py: "zhǐ shàng tán bīng", level: 2,
    lit: "discussing troops on paper",
    en: "An armchair general — all theory, zero practice. From the story of Zhao Kuo, who lost 400,000 men.",
    usage: "Against people who've never done the thing but critique those who have.",
    ex: "你没做过一天这行，全是纸上谈兵。",
    exEn: "You've never worked a day in this field — this is all armchair theory.",
    warn: "Great with a history flex: tell them the Zhao Kuo story. 400,000 lives lost to theory."
  },
  {
    ch: "班门弄斧", py: "bān mén nòng fǔ", level: 2,
    lit: "swinging an axe at Lu Ban's gate",
    en: "Showing off your axe skills at the door of Lu Ban, the legendary carpenter — showing off to an expert.",
    usage: "When a beginner tries to lecture you in your own specialty.",
    ex: "在我面前讲编程？你这是班门弄斧。",
    exEn: "Explaining programming to me? That's showing off your axe at Lu Ban's gate.",
    warn: "Requires you to actually be the expert — otherwise it boomerangs badly."
  },

  // ============ LEVEL 3 · Nuclear 诛心暴击 ============
  {
    ch: "恬不知耻", py: "tián bù zhī chǐ", level: 3,
    lit: "calmly without knowing shame",
    en: "Shameless — and what makes it brutal is 恬: they do it with a peaceful, smug face.",
    usage: "For someone who did something wrong and shows zero remorse, even pride.",
    ex: "错了还能笑得出来，真是恬不知耻。",
    exEn: "You can still smile after being proven wrong. Utterly shameless.",
    warn: "This is a direct character attack. Real friendships have been downgraded by this word."
  },
  {
    ch: "倒打一耙", py: "dào dǎ yī pá", level: 3,
    lit: "swing the rake backwards",
    en: "From Journey to the West's Zhu Bajie — the culprit who turns around and blames the victim.",
    usage: "When they attack first, then cry victim when you fight back. The DARVO of Chinese.",
    ex: "明明是你先动手，现在倒打一耙？",
    exEn: "You started it, and now YOU'RE playing the victim? Classic rake-swinging.",
    warn: "The GoTO response to blame-shifting. Everyone recognizes the 猪八戒 reference."
  },
  {
    ch: "颠倒黑白", py: "diān dǎo hēi bái", level: 3,
    lit: "invert black and white",
    en: "Swapping black for white — deliberately presenting lies as truth, right as wrong.",
    usage: "Accusing someone of gaslighting an entire narrative, not just one fact.",
    ex: "把造谣说成正义，你这是颠倒黑白。",
    exEn: "Calling slander justice — you're inverting black and white.",
    warn: "Strong accusation of dishonesty. Bring receipts when you use it."
  },
  {
    ch: "指鹿为马", py: "zhǐ lù wéi mǎ", level: 3,
    lit: "point at a deer, call it a horse",
    en: "From the tyrant Zhao Gao: he called a deer a horse to see who'd dare disagree. Lying so hard it becomes a power test.",
    usage: "When someone pushes an obvious lie to see who will fall in line.",
    ex: "大家都看得清楚，你指鹿为马有意思吗？",
    exEn: "Everyone can see it clearly. What's the point of calling the deer a horse?",
    warn: "Historically loaded — implies they're not just lying but tyrannical."
  },
  {
    ch: "贼喊捉贼", py: "zéi hǎn zhuō zéi", level: 3,
    lit: "the thief shouts 'catch the thief'",
    en: "The guilty one accuses loudest — projection, plain and simple.",
    usage: "When the cheater accuses others of cheating, the liar of lying.",
    ex: "你天天喊别人抹黑你，我看是贼喊捉贼。",
    exEn: "You scream 'smear campaign' every day. The thief shouting 'catch the thief' comes to mind.",
    warn: "Devastating in comment-section wars. Use when the projection is undeniable."
  },
  {
    ch: "出尔反尔", py: "chū ěr fǎn ěr", level: 3,
    lit: "you issue it, you return it",
    en: "Saying one thing then doing the opposite — welching on your own words.",
    usage: "When they contradict their own earlier statements. Quote them, then deploy this.",
    ex: "昨天的话今天就不认，出尔反尔至此？",
    exEn: "You said it yesterday and deny it today. How times change.",
    warn: "Most powerful with screenshots — 出尔反尔 + evidence = checkmate."
  },
  {
    ch: "不可理喻", py: "bù kě lǐ yù", level: 3,
    lit: "cannot be reasoned with",
    en: "Beyond reason — arguing with them is like arguing with a wall. You can't even reach the reasoning part.",
    usage: "Your exit ramp: 'This is pointless.' Declares victory by forfeit — theirs.",
    ex: "跟你这种不可理喻的人没什么好谈的。",
    exEn: "There's nothing to discuss with someone beyond reason.",
    warn: "Also the politest nuclear option — no profanity, pure contempt. Walk away after saying it."
  },
  {
    ch: "厚颜无耻", py: "hòu yán wú chǐ", level: 3,
    lit: "thick face, no shame",
    en: "Thick-skinned and shameless — shamelessness with a forehead of armor.",
    usage: "For repeated, unapologetic shamelessness. Colder and more literary than 恬不知耻.",
    ex: "这种话你也说得出口，真是厚颜无耻。",
    exEn: "You can actually say that with a straight face. Shameless beyond words.",
    warn: "One of the harshest non-vulgar insults in Chinese. It will escalate things."
  },
  {
    ch: "混淆是非", py: "hùn xiáo shì fēi", level: 3,
    lit: "confuse right and wrong",
    en: "Muddying what's right and wrong — not just lying, but trying to dissolve the truth itself.",
    usage: "Against bad-faith debaters who deliberately blur every distinction.",
    ex: "你这不是观点不同，是故意混淆是非。",
    exEn: "This isn't a difference of opinion — you're deliberately muddying right and wrong.",
    warn: "Pairs lethally with 颠倒黑白: '颠倒黑白、混淆是非' — the full indictment."
  },
  {
    ch: "无理取闹", py: "wú lǐ qǔ nào", level: 3,
    lit: "make trouble without reason",
    en: "Manufacturing drama out of nothing — noise as a substitute for an argument.",
    usage: "Dismiss someone as a troll who doesn't deserve engagement.",
    ex: "你根本不是来讨论的，就是无理取闹。",
    exEn: "You're not here to discuss anything — you're just here to make trouble.",
    warn: "The most common word in Chinese comment sections. Effective precisely because it's so recognizable."
  }
];

const LEVELS = {
  1: { name: "Passive-Aggressive", zh: "阴阳怪气", desc: "Sarcasm, faux praise, polite venom. Deniable, elegant.", color: "#8ab4f8" },
  2: { name: "Direct Hit", zh: "指桑骂槐", desc: "Named fallacies, pointed mockery. The workhorse tier.", color: "#fdd663" },
  3: { name: "Nuclear", zh: "诛心暴击", desc: "Character attacks. No profanity, maximum damage. Escalation likely.", color: "#f28b82" }
};
