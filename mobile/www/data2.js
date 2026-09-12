/* Expansion pack: 12 pure-praise idioms + 18 pure-criticism idioms.
   Also merges extra Chinese translations, char breakdowns and notes. */

const NEW_IDIOMS = [
  // ============ PRAISE 夸人 · mode: praise ============
  {
    ch: "深藏不露", py: "shēn cáng bù lù", level: 1, mode: "praise",
    lit: "hidden deep, never revealed",
    en: "For people whose skills sneak up on you — quiet exterior, terrifying resume.",
    usage: "When someone modest turns out to be scary-good at something.",
    ex: "第一次交手才知道，原来他深藏不露。",
    exEn: "Only after the first round did I realize how deep his talents were hidden.",
    warn: "Reserved for the genuinely modest. Say it to a show-off and it turns sarcastic."
  },
  {
    ch: "大智若愚", py: "dà zhì ruò yú", level: 1, mode: "praise",
    lit: "great wisdom looks like foolishness",
    en: "The smartest person in the room plays the fool. Sage mode, camouflaged.",
    usage: "Praising someone who understates their intelligence — and is right to.",
    ex: "他平时话不多，其实是大智若愚。",
    exEn: "He doesn't talk much — his wisdom just wears a disguise.",
    warn: "Never use it about yourself. That would prove the opposite."
  },
  {
    ch: "后生可畏", py: "hòu shēng kě wèi", level: 1, mode: "praise",
    lit: "the later-born are awe-worthy",
    en: "\"The kids are scary good.\" Respect for the younger generation, certified by Confucius himself.",
    usage: "When a junior outperforms you and deserves the nod.",
    ex: "这方案是实习生做的？后生可畏啊。",
    exEn: "The intern made this plan? The young are truly formidable.",
    warn: "Genuine elder-to-junior praise; odd in the other direction."
  },
  {
    ch: "出口成章", py: "chū kǒu chéng zhāng", level: 2, mode: "praise",
    lit: "exit the mouth, become an essay",
    en: "They open their mouth and it comes out fully edited. Speech at publish quality.",
    usage: "For effortlessly articulate speakers.",
    ex: "他即兴发言都出口成章，太强了。",
    exEn: "Even his improvised remarks come out like a polished essay.",
    warn: "For speaking, not writing."
  },
  {
    ch: "妙语连珠", py: "miào yǔ lián zhū", level: 2, mode: "praise",
    lit: "clever words strung like pearls",
    en: "Rapid-fire wit, every line a keeper. The comedic sniper of conversation.",
    usage: "Someone whose jokes and comebacks never miss.",
    ex: "主持人妙语连珠，全场笑声不断。",
    exEn: "The host's wit came in pearl strings — the room never stopped laughing.",
    warn: "Implies humor AND speed. Serious brilliance needs a different idiom."
  },
  {
    ch: "名不虚传", py: "míng bù xū chuán", level: 2, mode: "praise",
    lit: "the name is not vainly spread",
    en: "\"The rumors were true.\" Reputation confirmed by firsthand experience.",
    usage: "After something lives up to its hype.",
    ex: "吃了这家的菜，果然名不虚传。",
    exEn: "Ate at this famous place — the reputation checks out.",
    warn: "Sarcasm-ready: said about something disappointing, it stings."
  },
  {
    ch: "青出于蓝", py: "qīng chū yú lán", level: 2, mode: "praise",
    lit: "blue comes from indigo",
    en: "The student who surpasses the master. Blue dye is made from indigo — yet ends up brighter.",
    usage: "Praising a mentee or successor who overtook their teacher.",
    ex: "你教出来的学生比你还强，青出于蓝啊。",
    exEn: "Your student outdid you — blue born of indigo, brighter than its source.",
    warn: "Implies the teacher is now second place. Say it to the student, not the teacher."
  },
  {
    ch: "学富五车", py: "xué fù wǔ chē", level: 2, mode: "praise",
    lit: "learning fills five carts",
    en: "So learned that bamboo scrolls would fill five carts. Ancient-unit erudition.",
    usage: "Heavyweight praise for deep, broad knowledge.",
    ex: "王教授学富五车，什么问题都难不倒他。",
    exEn: "Professor Wang's learning fills five carts — nothing stumps him.",
    warn: "If the carts turn out to carry wrong answers, it becomes sarcasm."
  },
  {
    ch: "才高八斗", py: "cái gāo bā dòu", level: 3, mode: "praise",
    lit: "talent eight measures high",
    en: "Owning 8 out of 10 of the world's talent. A famous poet once granted another poet exactly that.",
    usage: "Top-tier praise for creative or literary brilliance.",
    ex: "他的诗才真可谓才高八斗。",
    exEn: "His poetic talent truly holds all eight measures of the world's genius.",
    warn: "Literary-flavored. For writers and geniuses — not for whoever fixed your Wi-Fi."
  },
  {
    ch: "一鸣惊人", py: "yī míng jīng rén", level: 3, mode: "praise",
    lit: "one cry astonishes everyone",
    en: "Silent for ages, then ONE cry and the whole sky looks up. Debut of the century.",
    usage: "Someone unremarkable who suddenly delivers something spectacular.",
    ex: "默默无闻三年，这次一鸣惊人。",
    exEn: "Unknown for three years — then one cry stunned everyone.",
    warn: "Requires the 'silent before' part. Frequent show-offs don't qualify."
  },
  {
    ch: "五体投地", py: "wǔ tǐ tóu dì", level: 3, mode: "praise",
    lit: "five body parts touch the ground",
    en: "Full prostration. Two knees, two hands, one head — total surrender to their greatness.",
    usage: "The maximum-respect reaction: 'I'm not worthy.'",
    ex: "看完这个操作，我直接五体投地。",
    exEn: "After watching that move, I went into full prostration.",
    warn: "The internet has used it to death, so it reads half-joking now — tone decides."
  },
  {
    ch: "当之无愧", py: "dāng zhī wú kuì", level: 3, mode: "praise",
    lit: "bears the title without shame",
    en: "\"Earned, not given.\" The award, title or admiration is fully deserved.",
    usage: "Certifying someone's deserved glory.",
    ex: "年度最佳员工，他当之无愧。",
    exEn: "Employee of the Year — he bears the title without a trace of shame.",
    warn: "Use after an actual achievement. Premature use feels like flattery."
  },

  // ============ CRITICISM 吵架增补 · mode: argue ============
  {
    ch: "鼠目寸光", py: "shǔ mù cùn guāng", level: 2, mode: "argue",
    lit: "mouse eyes, one-inch sight",
    en: "A mouse's eyes see one inch ahead. Vision scaled to a rodent.",
    usage: "Their plan optimizes for today and wrecks tomorrow.",
    ex: "为省钱砍掉客服？鼠目寸光。",
    exEn: "Cutting support to save money? Mouse eyes, one-inch sight.",
    warn: "Attacks judgment and vision, not intelligence — slightly above name-calling."
  },
  {
    ch: "夜郎自大", py: "yè láng zì dà", level: 2, mode: "argue",
    lit: "Yelang deems itself great",
    en: "A tiny kingdom once seriously asked: 'So, is Yelang or the Han empire bigger?'",
    usage: "Small-time players who think they're world-class.",
    ex: "县城第一就飘了？夜郎自大。",
    exEn: "Best in the county and now you're cocky? Yelang measuring itself against the empire.",
    warn: "Comes with a story — tell it. The question itself was the joke of an era."
  },
  {
    ch: "自吹自擂", py: "zì chuī zì léi", level: 2, mode: "argue",
    lit: "blow own horn, beat own drum",
    en: "A one-man band of self-promotion: they blow the horn AND bang the drum. For themselves.",
    usage: "Against shameless self-praise, especially the unsolicited kind.",
    ex: "天天说自己天下第一，纯属自吹自擂。",
    exEn: "Daily declarations of being world No.1 — pure self-horn, self-drum.",
    warn: "Mild-to-medium. Mocks the behavior more than the person."
  },
  {
    ch: "大言不惭", py: "dà yán bù cán", level: 2, mode: "argue",
    lit: "big words, no shame",
    en: "Claims the size of a barn, delivered with zero blushing. The shame organ is missing.",
    usage: "When someone brags about things easily disproven.",
    ex: "说他一天能干完一个月的活？大言不惭。",
    exEn: "Claims he does a month's work in a day — big words, zero shame.",
    warn: "Deploy right after they get exposed, while the receipts are warm."
  },
  {
    ch: "花言巧语", py: "huā yán qiǎo yǔ", level: 2, mode: "argue",
    lit: "flower words, clever speech",
    en: "Speech arranged like a bouquet — beautiful, decorative, and completely sterile.",
    usage: "Against sweet-talkers: salesmen, love-bombers, schmoozers.",
    ex: "他的话听着动人，不过是花言巧语。",
    exEn: "His words sound moving — but it's all bouquet-arranged speech.",
    warn: "A romance-argument classic. High appearance rate in dating disputes."
  },
  {
    ch: "搬弄是非", py: "bān nòng shì fēi", level: 2, mode: "argue",
    lit: "move and stir right and wrong",
    en: "A gossip with a shovel, relocating drama between people for fun.",
    usage: "The office rumor-monger, the group-chat instigator.",
    ex: "就爱在同事之间搬弄是非，离他远点。",
    exEn: "Loves stirring right-and-wrong between colleagues — keep your distance.",
    warn: "Social heavy artillery: accuses them of poisoning relationships, not just talking."
  },
  {
    ch: "捕风捉影", py: "bǔ fēng zhuō yǐng", level: 2, mode: "argue",
    lit: "catch wind, grab shadows",
    en: "Building accusations out of wind and shadow. Evidence level: vibes.",
    usage: "Against conspiracy-thinking and zero-source rumors.",
    ex: "没有任何证据就指控别人？纯属捕风捉影。",
    exEn: "Accusing people with no evidence? Catching wind, grabbing shadows.",
    warn: "Pairs with 道听途说: '道听途说、捕风捉影' = the full debunk combo."
  },
  {
    ch: "得寸进尺", py: "dé cùn jìn chǐ", level: 2, mode: "argue",
    lit: "gain an inch, advance a foot",
    en: "Give them an inch, they take a foot. Greed with a unit-conversion problem.",
    usage: "When concessions only feed the appetite.",
    ex: "帮他一次还想来第二次？得寸进尺。",
    exEn: "Help him once and he wants a second round? An inch given, a foot claimed.",
    warn: "Perfect for boundary-setting speeches. End the sentence with 'no'."
  },
  {
    ch: "过河拆桥", py: "guò hé chāi qiáo", level: 2, mode: "argue",
    lit: "cross the river, dismantle the bridge",
    en: "You built the bridge, they crossed it — then demolished it behind them.",
    usage: "Against people who discard helpers the moment they stop being useful.",
    ex: "刚升职就翻脸不认推荐人，过河拆桥。",
    exEn: "Promoted and instantly disowns the person who referred them — river crossed, bridge dismantled.",
    warn: "Strong workplace accusation; keep evidence of the favor."
  },
  {
    ch: "狐假虎威", py: "hú jiǎ hǔ wēi", level: 2, mode: "argue",
    lit: "fox borrows tiger's might",
    en: "The fox walks ahead of the tiger and terrifies everyone with borrowed power. Warring States fable.",
    usage: "Against small people flexing someone else's authority. 'My boss will hear about this' energy.",
    ex: "不过是领导的意思，他就狐假虎威起来了。",
    exEn: "It was merely the boss's idea, yet he's out here borrowing tiger might.",
    warn: "Implicates the tiger too — careful not to insult the actual boss."
  },
  {
    ch: "口蜜腹剑", py: "kǒu mì fù jiàn", level: 3, mode: "argue",
    lit: "honey mouth, sword belly",
    en: "Words like honey, gut full of swords. A real Tang-dynasty chancellor wore this as his unofficial title.",
    usage: "Against backstabbers who sound warm while plotting.",
    ex: "他对你这么好？小心口蜜腹剑。",
    exEn: "He's THAT nice to you? Mind the honey mouth and the belly of swords.",
    warn: "A declaration of maximum distrust. Once said, the relationship is publicly over."
  },
  {
    ch: "笑里藏刀", py: "xiào lǐ cáng dāo", level: 3, mode: "argue",
    lit: "knife hidden in the smile",
    en: "The smile is the sheath. Historical origin: an official so fake his colleagues nicknamed him 'the knife in the smile'.",
    usage: "Same niche as 口蜜腹剑 — friendliness as attack cover.",
    ex: "他笑着说全力支持？我看是笑里藏刀。",
    exEn: "He smiles and promises full support? That smile is a sheath.",
    warn: "Use for established betrayal patterns, not a single disagreement."
  },
  {
    ch: "忘恩负义", py: "wàng ēn fù yì", level: 3, mode: "argue",
    lit: "forget kindness, betray loyalty",
    en: "Received your help, deleted it from memory, and turned on you. Moral amnesia with malice.",
    usage: "The heaviest word for ingratitude — betrayals and family disputes.",
    ex: "当年我帮了他那么多，如今他忘恩负义。",
    exEn: "I helped him so much back then — now he's forgotten every bit and turned on me.",
    warn: "Morally severe. In Chinese culture this is an indictment of character itself."
  },
  {
    ch: "恩将仇报", py: "ēn jiāng chóu bào", level: 3, mode: "argue",
    lit: "repay kindness with enmity",
    en: "You handed them a ladder; they climbed over and burned your house.",
    usage: "When help gets repaid with attack — the escalation of 忘恩负义.",
    ex: "收留他还要被他诬陷，真是恩将仇报。",
    exEn: "Took him in and got framed by him — kindness repaid in enmity.",
    warn: "Heavier than 忘恩负义, with built-in farmer-and-snake fable energy."
  },
  {
    ch: "血口喷人", py: "xuè kǒu pēn rén", level: 3, mode: "argue",
    lit: "bloody mouth sprays at people",
    en: "Spraying blood at the innocent — slander vicious enough to draw blood. THE phrase for 'you are lying about me'.",
    usage: "When someone fabricates accusations against you personally.",
    ex: "我根本没做过，你这是血口喷人！",
    exEn: "I never did any of it — you're spraying blood at me!",
    warn: "Fighter-class language. It will escalate; deliver it calm and standing still."
  },
  {
    ch: "落井下石", py: "luò jǐng xià shí", level: 3, mode: "argue",
    lit: "drop stones on the man in the well",
    en: "You're already in the well — and they climb down a level just to drop rocks. Piling on the fallen.",
    usage: "Against people kicking you while you're down, especially publicly.",
    ex: "他出事你们不帮就算了，还落井下石？",
    exEn: "He's in trouble and you won't help — fine — but you're dropping stones into the well?",
    warn: "Requires the victim position to be clearly yours, or it backfires."
  },
  {
    ch: "幸灾乐祸", py: "xìng zāi lè huò", level: 3, mode: "argue",
    lit: "rejoice in disaster, delight in misfortune",
    en: "Schadenfreude as a formal indictment. Your misfortune is their evening entertainment.",
    usage: "Calling out someone enjoying your bad day.",
    ex: "我加班到崩溃你在笑？真是幸灾乐祸。",
    exEn: "I'm crushed by overtime and you're laughing — delighting in my misfortune, are we?",
    warn: "It's the exact counterpart of German 'Schadenfreude' — bonus party fact."
  },
  {
    ch: "不可救药", py: "bù kě jiù yào", level: 3, mode: "argue",
    lit: "beyond saving medicine",
    en: "Medically declared hopeless. No prescription exists for what they have.",
    usage: "Final verdict after all attempts failed. The full stop of insults.",
    ex: "劝了三年还是老样子，不可救药。",
    exEn: "Three years of advice and still the same — beyond all medicine.",
    warn: "A total write-off. It closes the case and the relationship. Last words only."
  }
];

const IDIOM_ZH2 = {
  "深藏不露": { en: "把真实实力藏得很深——夸那些低调却深不可测的人。", usage: "当某人平时不显山露水、一出手惊艳全场时使用。", warn: "只适用于真正低调的人；对爱炫耀的人说就是讽刺。" },
  "大智若愚": { en: "真正的智者看起来像愚人——大智慧穿着伪装。", usage: "夸那些大巧若拙、从不显摆聪明的人。", warn: "永远不要用在自己身上，那恰好证明反面。" },
  "后生可畏": { en: "年轻人值得敬畏——出自孔子的真诚认可。", usage: "当后辈的表现让你自愧不如时使用。", warn: "适用长辈对晚辈；晚辈对长辈说会很怪。" },
  "出口成章": { en: "一开口就是成型的文章——说话自带成稿质量。", usage: "夸人即兴表达也逻辑完整、文采斐然。", warn: "形容口才；形容文笔要用别的词。" },
  "妙语连珠": { en: "妙语像珍珠一样连成一串——句句都是金句。", usage: "夸人反应快、包袱不断、口才犀利。", warn: "强调风趣与速度；严肃的才华要换别的词。" },
  "名不虚传": { en: "名声不是白白传开的——传闻属实，亲测有效。", usage: "体验过后发现果真名不虚传时使用。", warn: "反讽备胎：用在失望的东西上同样致命。" },
  "青出于蓝": { en: "蓝颜料提取自蓼蓝，颜色却更青——学生超过了老师。", usage: "夸后辈或继承者超越了前辈。", warn: "潜台词是老师退居第二，说给学生别说给老师。" },
  "学富五车": { en: "学问多到要五辆车才装得下（按古代竹简计量）。", usage: "重量级夸奖：学识渊博的人。", warn: "如果五车装的全是错误答案，就成讽刺了。" },
  "才高八斗": { en: "天下才学共十斗，他独占八斗——出自谢灵运夸曹植。", usage: "文采与才华的顶配夸奖。", warn: "文人向夸法，别用来夸帮你修电脑的人。" },
  "一鸣惊人": { en: "平时不声不响，一开口惊动所有人。", usage: "无名之辈突然交出惊世之作时使用。", warn: "前提是『平时不鸣』，常炫耀的人不适用。" },
  "五体投地": { en: "双膝双手加头顶全部着地——最高规格的拜服。", usage: "表达『我不配』级别的佩服。", warn: "网络语境已通货膨胀，认真用时要看语气。" },
  "当之无愧": { en: "接受这个称号毫无愧色——实至名归。", usage: "为别人的荣誉做最终认证。", warn: "要等成绩坐实再用，否则像吹捧。" },
  "鼠目寸光": { en: "老鼠的眼睛只能看一寸——格局按啮齿类标准配置。", usage: "批那些只顾眼前、牺牲长远的决策。", warn: "攻击的是眼光不是智商，比人身攻击高一级。" },
  "夜郎自大": { en: "夜郎国君认真问过汉朝使者：夜郎和汉哪个大？", usage: "嘲讽小舞台选手自认世界顶级。", warn: "自带历史梗，讲完故事杀伤力翻倍。" },
  "自吹自擂": { en: "自己吹号，自己打鼓——一个人的自我营销乐队。", usage: "反击不打自招的自我吹嘘。", warn: "中等级别，嘲的是行为不是人格。" },
  "大言不惭": { en: "牛皮吹上天，脸不红心不跳。", usage: "拆穿那些轻易就能证伪的吹牛。", warn: "在他们被戳穿后立刻使用效果最佳。" },
  "花言巧语": { en: "话说得像插花——漂亮、精致、毫无养分。", usage: "反击甜言蜜语的销售、追求者、马屁精。", warn: "情感吵架经典词，恋爱纠纷出场率极高。" },
  "搬弄是非": { en: "拿着铲子在人群里搬运是非——搬起 A 的八卦，倒进 B 的耳朵。", usage: "办公室传话精、群聊拱火怪。", warn: "社交重锤：指控的是破坏关系，而不只是多嘴。" },
  "捕风捉影": { en: "证据？抓了一把风，捞了一把影子。", usage: "反击零信源的指控和阴谋论。", warn: "与「道听途说」连用：「道听途说、捕风捉影」全套打假。" },
  "得寸进尺": { en: "给一寸，进一尺——贪婪自带单位换算。", usage: "当退让只喂养了胃口时使用。", warn: "划清边界的收尾词，说完记得说『不』。" },
  "过河拆桥": { en: "你修的桥，他过的河，他拆的桥。", usage: "反击用人朝前、不用人朝后的人。", warn: "职场重指控，留好帮忙的证据。" },
  "狐假虎威": { en: "狐狸走在老虎前面，用借来的威风吓人——战国寓言。", usage: "嘲讽仗势欺人的小人物。", warn: "连老虎一起骂了——小心得罪真正的老虎。" },
  "口蜜腹剑": { en: "嘴上抹蜜，肚里藏剑——唐朝宰相李林甫的真实外号。", usage: "反击嘴甜心黑的两面派。", warn: "最高级别的信任宣告死亡，说出即摊牌。" },
  "笑里藏刀": { en: "笑容就是刀鞘——出自被同僚称为『笑中有刀』的官员。", usage: "与「口蜜腹剑」同生态位：友善只是攻击的伪装。", warn: "用于惯常背叛模式，别用在一次分歧上。" },
  "忘恩负义": { en: "受过你的恩，转头就清空记忆并倒戈。", usage: "忘恩负义的最重表述，家庭恩怨与背叛场景。", warn: "道德重量级：在中文语境里这是对人格的起诉。" },
  "恩将仇报": { en: "你给他递梯子，他爬过来烧你家。", usage: "恩情被用攻击来偿还——忘恩负义的加强版。", warn: "比忘恩负义更重，自带『农夫与蛇』的寓言能量。" },
  "血口喷人": { en: "朝着清白的人喷血——恶毒到见血的诬陷。", usage: "当对方对你本人捏造指控时使用。", warn: "战斗级语言，必然升级，说时保持平静。" },
  "落井下石": { en: "你已经掉井里了，他们还爬上来扔石头。", usage: "反击在你落难时公开踩你的人。", warn: "前提是你确实占着受害者位置，否则反弹。" },
  "幸灾乐祸": { en: "你的灾难，是他的下饭节目——Schadenfreude 的正式起诉书。", usage: "点名那些幸灾乐祸的人。", warn: "它正是德语 Schadenfreude 的对应词——冷知识加分项。" },
  "不可救药": { en: "医学上已宣判：无药可救。", usage: "所有努力失败后的最终判决，骂人的句号。", warn: "彻底的盖棺定论，说完案子结了、关系也结了。" }
};

const CHAR_BREAKDOWN2 = {
  "深藏不露": [["深", "deep"], ["藏", "hide"], ["不", "not"], ["露", "reveal"]],
  "大智若愚": [["大", "big"], ["智", "wisdom"], ["若", "like"], ["愚", "fool"]],
  "后生可畏": [["后", "late"], ["生", "born"], ["可", "worthy"], ["畏", "awe"]],
  "出口成章": [["出", "exit"], ["口", "mouth"], ["成", "become"], ["章", "essay"]],
  "妙语连珠": [["妙", "clever"], ["语", "words"], ["连", "string"], ["珠", "pearls"]],
  "名不虚传": [["名", "name"], ["不", "not"], ["虚", "vain"], ["传", "spread"]],
  "青出于蓝": [["青", "blue"], ["出", "comes"], ["于", "from"], ["蓝", "indigo"]],
  "学富五车": [["学", "learning"], ["富", "full"], ["五", "five"], ["车", "carts"]],
  "才高八斗": [["才", "talent"], ["高", "high"], ["八", "eight"], ["斗", "measures"]],
  "一鸣惊人": [["一", "one"], ["鸣", "cry"], ["惊", "astonish"], ["人", "people"]],
  "五体投地": [["五", "five"], ["体", "limbs"], ["投", "touch"], ["地", "ground"]],
  "当之无愧": [["当", "deserve"], ["之", "it"], ["无", "no"], ["愧", "shame"]],
  "鼠目寸光": [["鼠", "mouse"], ["目", "eyes"], ["寸", "inch"], ["光", "sight"]],
  "夜郎自大": [["夜", "Yelang"], ["郎", "kingdom"], ["自", "self"], ["大", "big"]],
  "自吹自擂": [["自", "self"], ["吹", "blow"], ["自", "self"], ["擂", "drum"]],
  "大言不惭": [["大", "big"], ["言", "words"], ["不", "no"], ["惭", "shame"]],
  "花言巧语": [["花", "flower"], ["言", "words"], ["巧", "clever"], ["语", "speech"]],
  "搬弄是非": [["搬", "move"], ["弄", "stir"], ["是", "right"], ["非", "wrong"]],
  "捕风捉影": [["捕", "catch"], ["风", "wind"], ["捉", "grab"], ["影", "shadow"]],
  "得寸进尺": [["得", "get"], ["寸", "inch"], ["进", "advance"], ["尺", "foot"]],
  "过河拆桥": [["过", "cross"], ["河", "river"], ["拆", "dismantle"], ["桥", "bridge"]],
  "狐假虎威": [["狐", "fox"], ["假", "borrow"], ["虎", "tiger"], ["威", "might"]],
  "口蜜腹剑": [["口", "mouth"], ["蜜", "honey"], ["腹", "belly"], ["剑", "sword"]],
  "笑里藏刀": [["笑", "smile"], ["里", "inside"], ["藏", "hide"], ["刀", "knife"]],
  "忘恩负义": [["忘", "forget"], ["恩", "kindness"], ["负", "betray"], ["义", "loyalty"]],
  "恩将仇报": [["恩", "kindness"], ["将", "with"], ["仇", "enmity"], ["报", "repay"]],
  "血口喷人": [["血", "blood"], ["口", "mouth"], ["喷", "spray"], ["人", "people"]],
  "落井下石": [["落", "fall"], ["井", "well"], ["下", "drop"], ["石", "stone"]],
  "幸灾乐祸": [["幸", "rejoice"], ["灾", "disaster"], ["乐", "delight"], ["祸", "misfortune"]],
  "不可救药": [["不", "not"], ["可", "can"], ["救", "save"], ["药", "medicine"]]
};

const CHAR_NOTES2 = {
  "深藏不露": "露 also means 'dew' — keep your skills off the morning lawn.",
  "后生可畏": "Straight from Confucius's Analects — 2,500-year-old certified respect.",
  "青出于蓝": "The dye IS extracted from the indigo plant, yet comes out brighter. Student > teacher, by chemistry.",
  "才高八斗": "斗 (dǒu) is a grain measure. Xie Lingyun said Cao Zhi held 8 of the world's 10 dou of talent.",
  "一鸣惊人": "Origin: a king who partied in silence for three years, then stunned the entire court.",
  "五体投地": "Count them: 2 arms, 2 legs, 1 head. Full prostration, all five accounted for.",
  "夜郎自大": "Yelang was a real small kingdom — famous for one question: 'Bigger than Han?'",
  "鹏程万里": "鹏 is the giant roc of Zhuangzi's fable; 里 (li) is the traditional half-kilometer unit — kept as pinyin because 'mile' would be a lie.",
  "得寸进尺": "Inch → foot: Chinese greed converts at exactly 1:10.",
  "落井下石": "Same well as 井底之蛙 — the frog reports noisy new neighbors.",
  "不可救药": "药 means 'medicine' — doctors have officially left the chat."
};

const PRAISE_LEVELS = {
  1: { name: "Subtle Nod", zh: "含蓄认可", desc: "Understated, classy compliments. For people who fish for nothing.", color: "#81c995" },
  2: { name: "Solid Praise", zh: "明确夸赞", desc: "Clear, strong compliments. The everyday heavy artillery of kindness.", color: "#8ab4f8" },
  3: { name: "Rainbow Nuke", zh: "彩虹屁暴击", desc: "Maximum flattery. Recipient may float away. Use responsibly.", color: "#fdd663" }
};
