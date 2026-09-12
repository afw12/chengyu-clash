/* Batch 12: +15 praise (perseverance & legacy), +15 argue (smears & cliques), +30 sarcasm (ceremony for the trivial / united in the wrong). */

const BULK_PRAISE10 = [
["悬梁刺股","xuán liáng cì gǔ",3,"Tied his hair to the beam, jabbed his thigh — ancient anti-sleep tech.","他备考那年悬梁刺股，天天只睡四小时。","形容刻苦学习。","tie beam stab thigh"],
["只争朝夕","zhǐ zhēng zhāo xī",2,"Seize the morning, seize the evening — no scroll breaks allowed.","项目组只争朝夕，提前交付。","抓紧时间，毫不放松。","only fight dawn dusk"],
["不遗余力","bù yí yú lì",2,"No strength left unspent.","他帮人不遗余力。","用出全部力量。","no leftover spare strength"],
["竭尽全力","jié jìn quán lì",2,"Exhausted every ounce there was.","为了救人他竭尽全力。","用尽全部力量。","exhaust all whole strength"],
["精雕细琢","jīng diāo xì zhuó",2,"Fine carving, fine polishing — three years on one paragraph.","这篇文稿他精雕细琢了三个月。","反复加工修改，力求完美。","fine carve fine polish"],
["千锤百炼","qiān chuí bǎi liàn",2,"A thousand hammers, a hundred smelts — the draft that became legend.","这份讲稿经过千锤百炼。","经历多次艰苦斗争的锻炼。","thousand hammer hundred smelt"],
["百炼成钢","bǎi liàn chéng gāng",2,"A hundred smelts turn iron into steel — the rookie, forged.","新兵连一年，百炼成钢。","久经锻炼成为坚强的人。","hundred smelts become steel"],
["白手起家","bái shǒu qǐ jiā",2,"Bare hands, built a home — no loans, no luck, just grit.","他白手起家创下这份产业。","在无基础条件下艰苦创业。","bare hands build home"],
["自力更生","zì lì gēng shēng",2,"Own strength, renewed life — rebuilt the whole thing alone.","火灾后他自力更生重建了小店。","依靠自己的力量发展。","own strength renew life"],
["吃苦耐劳","chī kǔ nài láo",1,"Bears the bitter, endures the toil — three jobs, zero complaints.","她吃苦耐劳，从不叫苦。","能过艰苦的生活，经得起劳累。","bear bitter endure toil"],
["任重道远","rèn zhòng dào yuǎn",2,"The burden is heavy, the road is long — said with a bow, not a sigh.","保护环境任重道远。","责任重大，要经历长期的奋斗。","burden heavy road long"],
["继往开来","jì wǎng kāi lái",2,"Continues the past, opens the future — the bridge between generations.","青年一代要继往开来。","继承前人事业，开辟未来道路。","continue past open future"],
["承前启后","chéng qián qǐ hòu",2,"Inherits what came before, launches what comes after.","这篇总结承前启后，很关键。","承接前面，引出后面。","inherit before launch after"],
["薪火相传","xīn huǒ xiāng chuán",2,"Firewood fire, mutually passed — four generations of teachers.","技艺在师徒间薪火相传。","学问技艺代代相传。","firewood fire mutually passed"],
["中流砥柱","zhōng liú dǐ zhù",3,"The pillar standing in mid-current — every crisis, he holds.","每次危机他都像中流砥柱。","在艰难环境中起支柱作用。","mid current pillar stone"]
];

const BULK_ARGUE10 = [
["骂骂咧咧","mà mà liē liē",1,"Lost the game, cursed the street — continuous audio grievance.","他一路骂骂咧咧地走了。","说话中夹杂骂人的话。","scold scold grumble grumble"],
["冷言冷语","lěng yán lěng yǔ",2,"Cold words, colder tone — frost on arrival.","她开口就是冷言冷语。","含讥讽意味的冷冰冰的话。","cold words cold tone"],
["风言风语","fēng yán fēng yǔ",2,"Wind words, wind gossip — no source, full spread.","关于她的风言风语传遍了小区。","没有根据的传闻。","wind words wind gossip"],
["流言蜚语","liú yán fēi yǔ",2,"Flowing rumors, flying gossip — faster than the truth ever runs.","别理那些流言蜚语。","毫无根据的话，多指背后散布的诽谤性坏话。","flowing rumors flying gossip"],
["无稽之谈","wú jī zhī tán",2,"No basis, pure talk — evidence optional since forever.","说他抄袭纯属无稽之谈。","无法考查的说法。","no basis its talk"],
["奇谈怪论","qí tán guài lùn",2,"Strange talks, weird theories — the comment section's greatest hits.","他满嘴奇谈怪论。","荒唐不合规的说法。","strange talk weird theory"],
["大放厥词","dà fàng jué cí",2,"Grandly emitting ravings — one drink unlocked the megaphone.","喝了两杯他就大放厥词。","夸夸其谈，胡说八道。","grandly emit its ravings"],
["信口雌黄","xìn kǒu cí huáng",2,"Casual mouth, orpiment yellow — rewriting facts mid-sentence.","他信口雌黄，前后矛盾。","不顾事实，随口乱说。","casually mouth orpiment yellow"],
["胡言乱语","hú yán luàn yǔ",2,"Wild words, chaotic speech — three hours and zero content.","他喝了酒就开始胡言乱语。","没有根据地胡说。","wild words chaotic speech"],
["拉帮结派","lā bāng jié pài",2,"Pulls cliques, forms camps — two months in, sides drawn.","他进公司就拉帮结派。","组织帮派，搞小集团活动。","pull cliques form factions"],
["结党营私","jié dǎng yíng sī",2,"Forms factions, seeks private gain — promotions for friends only.","他结党营私，把亲信都提上来。","结成集团谋求私利。","form factions seek private"],
["党同伐异","dǎng tóng fá yì",2,"Side with allies, strike outsiders — debate as tribal war.","他党同伐异，容不下不同意见。","偏袒同伙，打击不同意见的人。","clique allies attack outsiders"],
["排除异己","pái chú yì jǐ",2,"Purges the different ones — the department is now an echo chamber.","他上台后排除异己。","排挤、清除跟自己意见不同的人。","purge remove different ones"],
["恶意中伤","è yì zhòng shāng",2,"No grievance, no reason — pure malice, aimed and fired.","他毫无根据恶意中伤同事。","用恶毒的话攻击、陷害别人。","evil intent strike wound"]
];

const BULK_SARCASM10 = [
["相敬如宾","xiāng jìng rú bīn",1,"Ten years married, still 'guests' — politeness as a ceasefire.","结婚十年相敬如宾，客气得像合租。","夫妻互相尊敬（反讽客气疏远）。","mutually respect like guests"],
["举案齐眉","jǔ àn qí méi",1,"Tray raised to the brows, feelings filed away neatly.","他俩相敬如宾举案齐眉，就是没啥话说。","夫妻互敬互爱（反讽生分）。","raise tray to brows"],
["其乐融融","qí lè róng róng",1,"Joy blending warmly — paused for the family photo, resumed after.","合影时其乐融融，拍完继续冷战。","形容快乐和谐（反讽表面）。","its joy blending warm"],
["母慈子孝","mǔ cí zǐ xiào",1,"Mother kind, son filial — valid only on homework-free evenings.","不写作业母慈子孝，一写作业鸡飞狗跳。","母亲慈爱子女孝顺（反讽辅导作业）。","mother kind son filial"],
["皆大欢喜","jiē dà huān xǐ",1,"All greatly rejoice — everyone unhappy in exactly equal parts.","预算砍半还要求加倍，居然宣称皆大欢喜。","人人都很高兴（反讽强颜欢笑）。","all greatly rejoice happy"],
["欢天喜地","huān tiān xǐ dì",1,"Joy to the sky, happiness to the earth — over a two-yuan refund.","退了两块钱运费他欢天喜地。","形容非常欢喜（反讽小题大做）。","joy sky happy earth"],
["兴高采烈","xìng gāo cǎi liè",1,"Spirits high, mood ablaze — the drama reached act two.","他兴高采烈地围观了整场争吵。","兴致高昂（反讽看热闹）。","spirit high mood fiery"],
["普天同庆","pǔ tiān tóng qìng",2,"The whole sky celebrates together — the boss sneezed once.","老板夸了一句，部门群普天同庆。","天下的人共同庆祝（反讽夸张）。","whole sky same celebration"],
["万众一心","wàn zhòng yī xīn",2,"Ten thousand hearts, one single target — him.","大家万众一心地等着看他出丑。","千万人一条心（反讽共同针对）。","ten thousand hearts one"],
["同仇敌忾","tóng chóu dí kài",2,"Same enemy, shared fury — the new attendance policy united them all.","新考勤制度让全公司同仇敌忾。","共同一致地对付敌人（反讽）。","same enemy shared fury"],
["众望所归","zhòng wàng suǒ guī",2,"Crowd hopes, all directed — the scapegoat elected unanimously.","背锅人选投票他众望所归。","众人所期望的（反讽被选中背锅）。","crowd hopes all directed"],
["一呼百应","yī hū bǎi yìng",2,"One call, a hundred responses — ninety-nine of them 'busy'.","他一呼百应地召集志愿者，来了俩。","一声号召很多人响应（反讽没人来）。","one call hundred respond"],
["争先恐后","zhēng xiān kǒng hòu",2,"Racing to be first, dreading to be behind — the buffet protocol.","自助餐一开大家争先恐后。","争着向前唯恐落后（反讽抢食）。","race first fear behind"],
["摩拳擦掌","mó quán cā cǎng zhǎng",1,"Rubbing fists, palms ready — the family drama reached act two.","听到八卦他摩拳擦掌。","跃跃欲试的样子（反讽看热闹）。","rub fists palms ready"],
["跃跃欲试","yuè yuè yù shì",2,"Leap, leap, wanting to try — the prank target logged in.","看到新实习生他跃跃欲试。","急切地想试试（反讽不怀好意）。","leap leap want try"],
["严阵以待","yán zhèn yǐ dài",1,"Stern formation, fully awaiting — the buffet opens at noon.","自助餐开门前大家严阵以待。","做好战斗准备（反讽抢饭）。","stern formation await it"],
["千呼万唤","qiān hū wàn huàn",2,"A thousand calls, myriad summons — tech support replied at last, day three.","千呼万唤，客服三天后回话了。","再三催促（反讽响应慢）。","thousand calls myriad summons"],
["姗姗来迟","shān shān lái chí",1,"Saunter, saunter, arriving late — hour three's main character.","救援队姗姗来迟。","来得很晚（反讽贻误时机）。","saunter saunter arriving late"],
["从天而降","cóng tiān ér jiàng",2,"From the sky and descending — Monday's audit, unannounced.","周一早上审计通知从天而降。","意外地突然出现（反讽祸从天降）。","from sky and descending"],
["四平八稳","sì píng bā wěn",1,"Four corners flat, eight sides steady — and precisely nothing achieved.","他的方案四平八稳，毫无新意。","十分平稳（反讽毫无作为）。","four flat eight steady"],
["稳扎稳打","wěn zhā wěn dǎ",2,"Steady camp, steady strike — losing one-nil, but very carefully.","他稳扎稳打地输掉了每一场。","有把握地做事（反讽稳定输球）。","steady camp steady strike"],
["循序渐进","xún xù jiàn jìn",2,"Follow the order, advance step by step — toward the cliff, gradually.","他循序渐进地把项目带崩了。","按步骤逐渐深入（反讽稳步变糟）。","follow order step advance"],
["步步为营","bù bù wéi yíng",2,"Step by step, building camps — every single one in the wrong place.","他步步为营，每一步都走错了。","行动谨慎（反讽谨慎地错）。","step step build camp"],
["行云流水","xíng yún liú shuǐ",2,"Moving like clouds, flowing like water — nonsense at perfect rhythm.","他的歪理讲得行云流水。","自然流畅（反讽歪理流畅）。","move clouds flow water"],
["一针见血","yī zhēn jiàn xuè",2,"One needle, straight to blood — the roast located the bone precisely.","他夸人不会，扎心一针见血。","说话直接切中要害（反讽扎心）。","one needle see blood"],
["入木三分","rù mù sān fēn",2,"The ink entered the wood three-tenths deep — his roast went deeper.","他的吐槽入木三分。","形容言论深刻（反讽毒舌）。","enter wood three tenths"],
["力透纸背","lì tòu zhǐ bèi",2,"Force through the back of the paper — the complaint letter, physically felt.","这封投诉信写得力透纸背。","形容文章有力（反讽怨气大）。","force through paper back"],
["掷地有声","zhì dì yǒu shēng",2,"Thrown to the ground with a ring — the promise, and the shatter.","他的承诺掷地有声，然后碎了一地。","话说得有力量（反讽承诺碎裂）。","throw ground have sound"],
["发人深省","fā rén shēn xǐng",2,"Sends people into deep reflection — his failure, chiefly.","他挂科的成绩单十分发人深省。","促使人思考（反讽）。","send people deep reflection"],
["蠢蠢欲动","chǔn chǔn yù dòng",2,"Wriggle, wriggle, wanting to move — the buffet opens in five minutes.","听说有自助餐大家蠢蠢欲动。","准备捣乱或有所行动（反讽抢食）。","wriggle wriggle want move"]
];

mergeBulk(BULK_PRAISE10, "praise");
mergeBulk(BULK_ARGUE10, "argue");
mergeBulk(BULK_SARCASM10, "sarcasm");
