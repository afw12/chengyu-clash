/* Batch 8: +15 praise, +15 argue, +30 sarcasm (the excuse-maker subfamily). */

const BULK_PRAISE6 = [
["善解人意","shàn jiě rén yì",1,"Reads people like a kind open book — and never tells.","她善解人意，我一皱眉就递来热水。","很能体谅人的心情。","good understand people intent"],
["铁面无私","tiě miàn wú sī",3,"An iron face with no private favors — justice itself.","包公铁面无私，皇亲犯法也照办。","公正严明，不讲情面。","iron face no selfish"],
["见义勇为","jiàn yì yǒng wéi",2,"Sees what's right and charges straight at it.","他见义勇为救起了落水的孩子。","见到正义的事情勇敢地去做。","see right brave act"],
["拔刀相助","bá dāo xiāng zhù",2,"Draws the blade for a total stranger — old-school honor.","路见不平他总是拔刀相助。","见人有难挺身相助。","draw blade together help"],
["扶危济困","fú wēi jì kùn",2,"Props up the falling, feeds the stuck.","他常年扶危济困，捐款从没断过。","扶助危难，救济困苦。","support danger relief poor"],
["忧国忧民","yōu guó yōu mín",2,"Worries for the nation and its people — on their own dime.","老教授一生忧国忧民。","为国家前途和人民命运担忧。","worry nation worry people"],
["鞠躬尽瘁","jū gōng jìn cuì",3,"Bows to the task until the last breath of strength.","他为球队鞠躬尽瘁二十年。","恭敬谨慎，竭尽全力。","bow body exhaust effort"],
["死而后已","sǐ ér hòu yǐ",3,"Only death ends the duty — the second half of a famous vow.","他把项目守到交付最后一天，死而后已。","到死才停止，形容坚持到底。","die and after stop"],
["全心全意","quán xīn quán yì",1,"Whole heart, whole mind — nothing held back.","她全心全意照顾家人。","投入全部精力，毫无保留。","whole heart whole mind"],
["精忠报国","jīng zhōng bào guó",3,"Utmost loyalty, repaying the nation — tattooed on history's most famous back.","岳母在他背上刺下精忠报国。","竭尽忠诚，报效国家。","utter loyalty repay nation"],
["忍辱负重","rěn rǔ fù zhòng",2,"Swallows humiliation to carry the heavy load — strength in stealth mode.","他忍辱负重把项目撑到最后。","为完成艰巨任务忍受屈辱。","endure shame carry heavy"],
["顾全大局","gù quán dà jú",2,"Protects the big picture, even when it costs personally.","为了团队成绩他顾全大局让了位。","照顾整个局面，使之不受损害。","care whole big picture"],
["温柔体贴","wēn róu tǐ tiē",1,"Gentle in word, thoughtful in deed.","他生病时她温柔体贴地照顾了一周。","温和关怀，体贴入微。","gentle soft considerate intimate"],
["沉鱼落雁","chén yú luò yàn",3,"Fish forget to swim, geese forget to fly — beauty that stops nature.","她美得沉鱼落雁。","形容女子容貌极美。","sink fish fall geese"],
["闭月羞花","bì yuè xiū huā",3,"Hides the moon, shames the flowers — the other half of the beauty canon.","她的古装照拍得闭月羞花。","形容女子容貌极美。","hide moon shame flower"]
];

const BULK_ARGUE6 = [
["造谣惑众","zào yáo huò zhòng",2,"Manufactures rumors to bewitch the crowd.","他造谣惑众说超市要关门。","制造谣言迷惑群众。","make rumor bewitch crowd"],
["妖言惑众","yāo yán huò zhòng",3,"Demonic words bewitching the masses — rumor-mongering at maximum level.","妖言惑众的养生秘籍少看为妙。","用邪说迷惑人。","demon words bewitch crowd"],
["蛊惑人心","gǔ huò rén xīn",2,"Poisons hearts and minds with half-true stories.","他用半真半假的故事蛊惑人心。","用谣言诡辩迷惑人心。","poison bewilder people hearts"],
["混淆视听","hùn xiáo shì tīng",2,"Muddles what you see and hear — fog as a defense strategy.","他放出一堆假图混淆视听。","用假象蒙骗人，使人误判。","confuse blur see hear"],
["颠倒是非","diān dǎo shì fēi",2,"Flips right and wrong like a coin trick.","他把责任推得一干二净，颠倒是非。","把对说成错，把错说成对。","invert flip right wrong"],
["倒行逆施","dào xíng nì shī",2,"Marches backwards against all reason — governing in reverse gear.","逆着所有人的意见硬来，倒行逆施。","做事违反常理，不择手段。","reverse walk against act"],
["胡作非为","hú zuò fēi wéi",2,"Does whatever, wherever — rules are decorative.","他仗着没人管就胡作非为。","不顾法纪，任意行动。","wild do wrong act"],
["为非作歹","wéi fēi zuò dǎi",3,"Commits wrong upon wicked — the full-time villain package.","这伙人为非作歹多年终于落网。","做种种坏事。","do wrong make evil"],
["无法无天","wú fǎ wú tiān",3,"No law, no heaven — beyond all restraint.","熊孩子拆了他家也没人管，无法无天。","毫无顾忌地胡作非为。","no law no heaven"],
["肆无忌惮","sì wú jì dàn",2,"Unbridled, unblushing, unbothered.","他肆无忌惮地拿别人短处开玩笑。","任意妄为，毫无顾忌。","unbridled no scruple fear"],
["明目张胆","míng mù zhāng dǎn",3,"Wide-open eyes, bold gall — cutting lines in broad daylight.","他明目张胆地插队还理直气壮。","公然做坏事，毫无顾忌。","bright eyes open gall"],
["有恃无恐","yǒu shì wú kǒng",2,"Backed by something, fearing nothing — usually someone's cover.","他仗着工龄长有恃无恐。","因为有依靠而不害怕。","have backing no fear"],
["变本加厉","biàn běn jiā lì",2,"Worse before, worse now — escalation as a hobby.","被提醒后他变本加厉。","情况比原来更加严重。","change root add severity"],
["火上浇油","huǒ shàng jiāo yóu",2,"Pours oil on the fire — the argument's arsonist.","他在群里补了一句更狠的，火上浇油。","使人更怒或使事态更严重。","fire top pour oil"],
["雪上加霜","xuě shàng jiā shuāng",2,"Frost on top of snow — bad, then worse, gift-wrapped.","项目黄了还赶上裁员，雪上加霜。","接连遭受灾难，损害愈加严重。","snow top add frost"]
];

const BULK_SARCASM6 = [
["八面玲珑","bā miàn líng lóng",2,"Eight faces, all polished — works every room, means nothing anywhere.","他在公司八面玲珑，谁都不得罪。","处世圆滑，各方面都应付得周到（含贬义）。","eight faces all polished"],
["左右逢源","zuǒ yòu féng yuán",2,"Springs on both sides — whatever happens, they profit or slither.","他说话左右逢源，从不留把柄。","做事得心应手，也指为人圆滑。","left right meet springs"],
["从善如流","cóng shàn rú liú",2,"Accepts advice as smoothly as water flows — allegedly, even the bad advice.","我建议他别买，他从善如流，转头下了单。","乐于接受正确的意见（反讽照单全收）。","follow good like flow"],
["闻过则喜","wén guò zé xǐ",2,"Delights in hearing criticism — the saintly claim that rarely survives contact.","他说自己闻过则喜，我说他两句就被拉黑了。","听到批评就高兴（反讽虚心姿态）。","hear fault then joy"],
["谦虚谨慎","qiān xū jǐn shèn",1,"Humble and cautious — publicly, while fishing for the opposite.","他谦虚谨慎地说自己是运气好，其实实力碾压。","谦虚小心（反讽故作姿态）。","humble modest careful careful"],
["心直口快","xīn zhí kǒu kuài",1,"Straight heart, fast mouth — the all-access pass for rudeness.","她说话伤人就叫心直口快，谁的锅？","性情直爽，有话就说（常用作口无遮拦的借口）。","heart straight mouth fast"],
["直言不讳","zhí yán bù huì",2,"Speaks bluntly without hiding — courage, or zero social brakes.","他直言不讳地说我的新发型像拖把。","直截了当地说（可反讽口无遮拦）。","straight speak not hide"],
["开门见山","kāi mén jiàn shān",1,"Open the door, see the mountain — brutally to the point.","他开门见山第一句就是：你错了。","说话直接进入正题（可反讽生硬）。","open door see mountain"],
["高谈阔论","gāo tán kuò lùn",2,"Lofty talk, wide theories — an hour of wisdom volume, zero of action.","他对运营一窍不通却高谈阔论了一小时。","漫无边际地大发议论（含贬义）。","high talk wide discuss"],
["侃侃而谈","kǎn kǎn ér tán",2,"Talks on with total composure — content accuracy not guaranteed.","他把错误结论讲得侃侃而谈。","理直气壮、从容不迫地说（可反讽）。","compose compose then talk"],
["滔滔不绝","tāo tāo bù jué",2,"An endless surging river of words — with no exit ramp.","他滔滔不绝讲了俩小时，没人插上话。","像流水一样连续不断（反讽话多）。","surging surging not stop"],
["口若悬河","kǒu ruò xuán hé",2,"A mouth like a hanging river — the Niagara of words.","推销员口若悬河，我忘了自己要问什么。","能言善辩，说起话来像瀑布（可反讽）。","mouth like hanging river"],
["天花乱坠","tiān huā luàn zhuì",2,"Heavenly flowers falling from the pitch — gorgeous promises, zero floor.","广告吹得天花乱坠，到手全是翻车。","说话夸张动听，多指不切实际。","sky flower chaos fall"],
["语惊四座","yǔ jīng sì zuò",2,"One sentence stuns the whole room — brilliance, or jaw-dropping nonsense.","他一句『地球是平的』语惊四座。","言论使满座震惊（可反讽）。","words startle four seats"],
["无可厚非","wú kě hòu fēi",3,"Cannot be faulted too harshly — the national anthem of excuses.","他把我奶茶喝了说是为我好，无可厚非？","不可过分责备，表示有可取之处（经典甩锅语）。","no room heavy blame"],
["情有可原","qíng yǒu kě yuán",2,"The feelings make it forgivable — the excuse has feelings too.","迟到了但情有可原，他闹钟的电池是三年前的。","按情理可以原谅（经典开脱语）。","feeling have can forgive"],
["人之常情","rén zhī cháng qíng",1,"Just human nature — covering everything from laziness to eating your cake.","看到红包就抢，人之常情嘛。","一般人所有的感情（万能开脱语）。","human of common feeling"],
["事出有因","shì chū yǒu yīn",2,"The matter has a cause — every disaster ships with a backstory.","把盐当糖放了，事出有因：罐子长得像。","事情的发生有原因（万能开脱语）。","matter arise has cause"],
["身不由己","shēn bù yóu jǐ",2,"The body refuses orders from the self — the timeless alibi.","手又不由自主点了外卖，身不由己啊。","行为不能由自己支配（万能借口）。","body not by self"],
["迫不得已","pò bù dé yǐ",3,"Forced beyond choice — nobody ever made them do it harder.","他把蛋糕吃了实在迫不得已——冰箱就剩这一个。","出于被迫，不得不做（万能借口）。","forced not able otherwise"],
["无伤大雅","wú shāng dà yǎ",1,"No harm to the grand elegance — a.k.a. it's fine, probably.","PPT 错了三十处但配色美，无伤大雅。","小缺点不影响整体（经典开脱语）。","no hurt grand elegance"],
["无可挑剔","wú kě tiāo tī",2,"Nothing to pick at — the audit-proof disaster.","他把错都说得无可挑剔。","挑不出任何毛病（可反讽）。","no fault can pick"],
["斩钉截铁","zhǎn dīng jié tiě",2,"Chop the nail, cut the iron — resolute, often in the wrong direction.","他斩钉截铁地答错了。","说话办事坚决果断（反讽自信错答）。","chop nail cut iron"],
["说一不二","shuō yī bù èr",2,"Says one, never two — except when revising yesterday's one.","他说周一交，周三改了口径，仍自称说一不二。","说到做到（反讽说话反复）。","say one not two"],
["一如既往","yī rú jì wǎng",2,"Exactly as always — the consistency of being consistently wrong.","他一如既往地在截止日当天才动手。","跟过去完全一样（反讽一如既往地糟）。","one as past way"],
["始终如一","shǐ zhōng rú yī",2,"Same from start to finish — a tribute to unchanging lateness.","三年了他开会始终如一地迟到十分钟。","自始至终都一样（反讽一贯如此）。","start finish as one"],
["锲而不舍","qiè ér bù shě",2,"Keeps carving, never lets go — praise for scholars, complaint for salesmen.","推销员锲而不舍，每周三准时敲门。","坚持到底不放弃（反讽纠缠不休）。","carve yet not release"],
["稳如泰山","wěn rú tài shān",2,"Steady as Mount Tai — his alibi, his excuses, his refusal to move the car.","让他挪车，他稳如泰山。","稳固不可动摇（反讽雷打不动）。","steady as Mount Tai"]
];

mergeBulk(BULK_PRAISE6, "praise");
mergeBulk(BULK_ARGUE6, "argue");
mergeBulk(BULK_SARCASM6, "sarcasm");
