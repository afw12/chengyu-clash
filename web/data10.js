/* Batch 10: +20 praise, +10 argue, +30 sarcasm (the "consistently devoted to nonsense" subfamily). */

const BULK_PRAISE8 = [
["山高水长","shān gāo shuǐ cháng",2,"His influence: mountain high, river long — lasts longer than the man.","先生虽逝，风范山高水长。","品格高尚，影响深远。","mountain high water long"],
["高山仰止","gāo shān yǎng zhǐ",3,"A high mountain to gaze up at — respect with the neck bent.","大师人品学问，令人高山仰止。","对高尚品德的仰慕。","high mountain gaze up"],
["德艺双馨","dé yì shuāng xīn",3,"Virtue and art, both fragrant — the complete master.","老艺术家德艺双馨，受人敬重。","品德和技艺都很好。","virtue art both fragrant"],
["尽善尽美","jìn shàn jìn měi",2,"Utterly good, utterly beautiful — finished to the last stitch.","这场婚礼办得尽善尽美。","完美到没有一点缺陷。","utterly good utterly beautiful"],
["白璧无瑕","bái bì wú xiá",3,"White jade without a flaw — a record without an asterisk.","他四十年的履历白璧无瑕。","完美无缺点。","white jade no flaw"],
["十全十美","shí quán shí měi",2,"Ten for complete, ten for beautiful — nothing left to wish.","这场比赛她发挥得十全十美。","各方面都非常完美。","ten complete ten beautiful"],
["完美无缺","wán měi wú quē",2,"Whole, beautiful, nothing missing.","他的表现完美无缺。","完善美好，没有缺点。","whole beautiful no lack"],
["有口皆碑","yǒu kǒu jiē bēi",2,"Every mouth a monument — the whole town keeps praising it.","这家老字号有口皆碑。","人人称赞。","every mouth all monument"],
["交口称赞","jiāo kǒu chēng zàn",2,"Crossing mouths, doubled praise — even the critics caved.","新片上映，观众交口称赞。","众人同声称赞。","crossing mouths praise applaud"],
["赞不绝口","zàn bù jué kǒu",2,"Praise that never pauses for breath.","吃过她做的菜，没人不赞不绝口。","不停地称赞。","praise not stop mouth"],
["名扬四海","míng yáng sì hǎi",2,"Name raised across the four seas.","他的一碗面名扬四海。","名声传扬到各地。","name raised four seas"],
["威名远扬","wēi míng yuǎn yáng",2,"Mighty name, far spread.","这支球队的威名远扬。","威盛的名声传播得很远。","mighty name far spread"],
["家喻户晓","jiā yù hù xiǎo",2,"Known in every home, clear at every door.","他的故事早已家喻户晓。","人人都知道。","home known door clear"],
["妇孺皆知","fù rú jiē zhī",2,"Women and children alike can recite it.","这位英雄的事迹妇孺皆知。","人人都知道。","women children all know"],
["脍炙人口","kuài zhì rén kǒu",2,"Minced and roasted, and every mouth wants a taste — works the whole world quotes.","他的词句脍炙人口，传了一千年。","好的诗文人人称赞传诵。","minced roasted people mouths"],
["流芳百世","liú fāng bǎi shì",3,"Fragrance flowing down a hundred generations.","好人的名字流芳百世。","美名流传后世。","flow fragrance hundred generations"],
["名垂青史","míng chuí qīng shǐ",3,"A name hung forever in the green pages of history.","功勋卓著者名垂青史。","美名载入史册。","name hung green history"],
["诲人不倦","huì rén bù juàn",2,"Teaching people, never tired — fifty years and counting.","这位老师诲人不倦，教了五十年。","教导别人不知疲倦。","teach people not tired"],
["良师益友","liáng shī yì yǒu",2,"A good teacher AND a helpful friend — both in one person.","遇到一位良师益友是福气。","使人得到教益和帮助的好老师好朋友。","good teacher helpful friend"],
["春风化雨","chūn fēng huà yǔ",2,"Spring wind turning into rain — guidance that sinks in gently.","老师的教导如春风化雨。","良好的教育自然深入。","spring wind turn rain"]
];

const BULK_ARGUE8 = [
["卑鄙无耻","bēi bǐ wú chǐ",3,"Base, mean and shameless — rock bottom with a flag planted.","他欺骗孤寡老人，卑鄙无耻。","品德低劣，不知羞耻。","base mean no shame"],
["无耻之尤","wú chǐ zhī yóu",3,"Shameless among the shameless — the utmost of the worst.","卖假药给病人，堪称无耻之尤。","无耻到极点。","no shame of utmost"],
["寡廉鲜耻","guǎ lián xiǎn chǐ",2,"Little honesty, rare shame — the family motto, allegedly.","他干尽坏事还笑嘻嘻，寡廉鲜耻。","不知廉耻。","little honesty rare shame"],
["崇洋媚外","chóng yáng mèi wài",2,"Worships anything foreign, fawns on the outside.","他崇洋媚外，进口的垃圾也当宝。","一味崇拜外国，讨好外国人。","worship foreign fawn outside"],
["吃里扒外","chī lǐ bā wài",2,"Eats inside, steals outside — paid by us, working for them.","他拿着公司的钱吃里扒外。","受这一方好处，却为另一方效劳。","eat inside steal outside"],
["认贼作父","rèn zéi zuò fù",3,"Accepts the thief as father — betrayal beyond betrayal.","他认贼作父，帮骗子坑自己人。","把仇人当作亲人。","accept thief as father"],
["狼狈为奸","láng bèi wéi jiān",2,"Wolf and sidekick acting wicked — the duo strikes again.","他俩狼狈为奸，坑了不少人。","互相勾结干坏事。","wolf sidekick act wicked"],
["同流合污","tóng liú hé wū",2,"Same current, joined filth — he signed on with the corrupt.","他没有举报，反而同流合污。","跟着坏人一起做坏事。","same current join filth"],
["沆瀣一气","hàng xiè yī qì",3,"Night mist and one breath — an examiner and candidate with the same name, now an idiom.","他们私下勾结，沆瀣一气。","臭味相投的人勾结在一起。","night mist one breath"],
["随波逐流","suí bō zhú liú",2,"Follows the waves, chases the current — principles sold at the shore.","他没有主见，只会随波逐流。","没有立场，随着别人走。","follow waves chase current"]
];

const BULK_SARCASM8 = [
["此起彼伏","cǐ qǐ bǐ fú",1,"This one rises, that one falls — problems in a wave pattern.","项目的问题此起彼伏，修完一个冒三个。","这里起来，那里落下（反讽问题不断）。","this rise that fall"],
["言出必行","yán chū bì xíng",1,"Words leave, deeds must follow — even the threats get executed.","他说要挂我电话，真的挂了，言出必行。","说过的话一定实行（反讽连坏事也说到做到）。","words out must act"],
["说到做到","shuō dào zuò dào",2,"Says it, does it — sadly applicable to the bad promises too.","他说再迟到就请客，说到做到又请了。","说到就做到（反讽连糟事也兑现）。","say it did it"],
["雷打不动","léi dǎ bù dòng",1,"Thunder-strike cannot move it — the nap has ceremonial status.","周末睡到中午，雷打不动。","坚定不移（反讽坏习惯稳固）。","thunder strike not move"],
["风雨无阻","fēng yǔ wú zǔ",1,"Wind and rain shall not stop it — the salesman's weekly pilgrimage.","推销员每周三来访，风雨无阻。","不受刮风下雨阻碍（反讽纠缠）。","wind rain no stop"],
["坚持不懈","jiān chí bù xiè",2,"Firm hold, never slack — three years of daily spam, unbroken.","他坚持不懈地给我发广告，整整三年。","坚持到底不松懈（反讽骚扰）。","firm hold not slack"],
["死缠烂打","sǐ chán làn dǎ",2,"Dead-cling, rotten-pester — blocked on five apps, so he wrote a letter.","全平台拉黑后他写信过来，死缠烂打。","纠缠不休（贬义）。","dead cling rotten pester"],
["软磨硬泡","ruǎn mó yìng pào",2,"Soft grinding, hard soaking — the whine that broke the toy vault.","他软磨硬泡两小时，终于要到了玩具。","用各种手段纠缠（贬义）。","soft grind hard soak"],
["不厌其烦","bù yàn qí fán",1,"Never tired of the trouble — my pronunciation coach works unpaid overtime.","他不厌其烦地纠正我的发音，我已经崩溃了。","不嫌麻烦（反讽唠叨）。","not tired of trouble"],
["乐此不疲","lè cǐ bù pí",1,"Delights in this, never weary — round forty of the same joke, still going.","同一个梗讲四十遍他还乐此不疲。","对某事特别爱好而不疲倦（反讽）。","delight here never tired"],
["一心一意","yī xīn yī yì",1,"One heart, one mind, one single wrong thing all year.","他一心一意研究怎么抢我外卖。","专心致志（反讽用错方向）。","one heart one mind"],
["专心致志","zhuān xīn zhì zhì",2,"Focus delivered, will committed — the kids, unattended.","他专心致志打游戏，孩子在旁边拆家。","聚精会神（反讽场合不对）。","focus heart deliver will"],
["无孔不入","wú kǒng bù rù",2,"No hole goes unentered — the ads found me in seven apps.","广告无孔不入，连手电筒软件都有。","利用一切机会钻营（贬义）。","no hole not enter"],
["神出鬼没","shén chū guǐ mò",2,"God appears, ghost vanishes — he materializes only when food does.","每次开饭他神出鬼没地出现。","行动出没无常（反讽蹭饭）。","god appear ghost vanish"],
["如影随形","rú yǐng suí xíng",2,"Like a shadow following the body — his drama does.","负面新闻与他如影随形。","形容跟随紧密（反讽甩不掉）。","like shadow follow body"],
["寸步不离","cùn bù bù lí",2,"Not an inch, not a step apart — new couples, week one.","恋爱第一周他俩寸步不离。","紧紧跟随不分开（反讽腻歪）。","inch step not leave"],
["形影不离","xíng yǐng bù lí",2,"Form and shadow never part — friendship or fusion?","他俩好得形影不离。","彼此关系亲密（反讽无边界）。","form shadow not part"],
["步调一致","bù diào yī zhì",2,"Steps in one rhythm — including being late in perfect sync.","他俩连迟到都步调一致。","行动整齐一致（反讽一起犯错）。","step rhythm one same"],
["异口同声","yì kǒu tóng shēng",2,"Different mouths, same sound — all three wrong in unison.","三人异口同声地答错了。","许多人说同样的话（反讽一起错）。","different mouths same sound"],
["心照不宣","xīn zhào bù xuān",1,"Hearts reflecting, nothing declared — we all saw it, we all pretend.","锅是谁打的心照不宣，反正没人认。","彼此明白不必说出（反讽集体装傻）。","hearts reflect no declare"],
["心领神会","xīn lǐng shén huì",2,"Heart receives, spirit grasps — he got the hint, the wrong one.","我使了个眼色，他心领神会地点错了菜。","不用明说已经领会（反讽领会错）。","heart receive spirit grasp"],
["无师自通","wú shī zì tōng",2,"No teacher, self-taught — one week of guitar says otherwise.","他自称吉他无师自通，弹得像拆家。","没有老师就能学会（反讽瞎学）。","no teacher self taught"],
["天赋异禀","tiān fù yì bǐng",3,"Heaven granted a rare gift — for finding parking spots, nothing else.","找车位他天赋异禀，写代码一塌糊涂。","天赋特别出众（反讽用错地方）。","heaven granted rare gift"],
["技高一筹","jì gāo yī chóu",2,"Skill one notch higher — his excuses outclass my evidence.","论甩锅他技高一筹。","技艺高人一等（反讽用在歪处）。","skill higher one level"],
["略胜一筹","lüè shèng yī chóu",2,"Wins by one level — both cakes burned; hers, slightly less.","两个蛋糕都糊了，她的略胜一筹。","比较起来稍微好一点（反讽比烂）。","slightly win one level"],
["独占鳌头","dú zhàn áo tóu",2,"Alone standing on the turtle's head — number one, on the late list.","迟到榜上他独占鳌头。","占首位（反讽倒数第一）。","alone occupy turtle head"],
["名列前茅","míng liè qián máo",2,"Name listed among the front reeds — the complaint ledger's top entry.","投诉榜上他名列前茅。","名次排在前面（反讽）。","name listed front reeds"],
["遥遥领先","yáo yáo lǐng xiān",2,"Far, far ahead — of everyone in coffee breaks.","午休时长他遥遥领先。","远远领先（反讽比的是摸鱼）。","far far lead ahead"],
["前赴后继","qián fù hòu jì",3,"One advances, the next follows — interns falling in rotation.","实习生前赴后继地辞职了。","前面的人上去，后面的人跟上（反讽）。","front go behind follow"],
["层出不穷","céng chū bù qióng",2,"Layer after layer, never ending — his excuse collection.","他的新借口层出不穷。","接连不断地出现（反讽借口多）。","layer after not end"]
];

mergeBulk(BULK_PRAISE8, "praise");
mergeBulk(BULK_ARGUE8, "argue");
mergeBulk(BULK_SARCASM8, "sarcasm");
