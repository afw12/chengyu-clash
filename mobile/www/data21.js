/* Batch 21: +25 praise (dedication & legacy), +25 sarcasm (solemn posturing & spectatorship). */

const BULK_PRAISE17 = [
["明辨是非","míng biàn shì fēi",2,"Clearly tells right from wrong — judgment you can trust.","法官明辨是非，断案公正。","清楚地分辨出对与错。","clearly tell right wrong"],
["是非分明","shì fēi fēn míng",2,"Right and wrong, clearly divided.","他做人原则性强，是非分明。","对错界限清清楚楚。","right wrong clearly visible"],
["赏罚分明","shǎng fá fēn míng",2,"Rewards and penalties, clearly assigned.","将军治军赏罚分明。","该赏的赏，该罚的罚。","rewards penalties clearly assigned"],
["秉公办事","bǐng gōng bàn shì",1,"Handles every affair by fairness alone.","他秉公办事，从不徇私。","按照公正的原则办事。","handling fairness affairs matters"],
["执法如山","zhí fǎ rú shān",3,"Enforces the law firm as a mountain.","包公执法如山，皇亲也不放过。","执法严格不动摇。","enforce law firm mountain"],
["刚正不阿","gāng zhèng bù ē",3,"Upright and righteous, never bowing.","他刚正不阿，敢于直言。","刚强正直，不逢迎屈从。","upright righteous never bowing"],
["含辛茹苦","hán xīn rú kǔ",2,"Endured the bitterness, swallowed the hardship.","母亲含辛茹苦把孩子拉扯大。","经受艰难困苦。","endure bitterness swallow hardship"],
["呕心沥血","ǒu xīn lì xuè",3,"Poured out heart, dripped out blood.","老师为教材呕心沥血。","形容费尽心思。","pour heart drip blood"],
["殚精竭虑","dān jīng jié lǜ",2,"Exhausted spirit, drained thought — total mental commitment.","他为方案殚精竭虑。","用尽精力，费尽心思。","exhaust spirit drain thought"],
["夙兴夜寐","sù xīng yè mèi",2,"Rises early, sleeps late — diligence from another era.","创业者夙兴夜寐，不敢懈怠。","早起晚睡，形容勤奋。","early rising night sleeping"],
["分秒必争","fēn miǎo bì zhēng",2,"Every minute, every second, fought for.","施工队分秒必争赶工期。","抓紧时间一分一秒也不放过。","every second must fought"],
["日理万机","rì lǐ wàn jī",2,"Handles myriad affairs daily.","总经理日理万机，仍坚持学习。","每天处理繁多的政务事务。","daily handle myriad affairs"],
["屏气凝神","bǐng qì níng shén",1,"Holds breath, focuses spirit — total concentration.","他屏气凝神地穿针引线。","暂时抑住呼吸，聚精会神。","hold breath focus spirit"],
["风餐露宿","fēng cān lù sù",2,"Wind-blown meals, dew-soaked lodging — dedication in the field.","地质队员常年风餐露宿。","形容旅途或野外生活的艰苦。","wind meals dew lodging"],
["栉风沐雨","zhì fēng mù yǔ",2,"Combed by wind, washed by rain — decades of outdoor toil.","养路工栉风沐雨三十年。","在外面奔波，不避风雨。","combed wind washed rain"],
["披星戴月","pī xīng dài yuè",2,"Wears the stars, carries the moon — works before dawn and past dusk.","外卖小哥披星戴月地奔波。","形容连夜奔波或早出晚归。","wearing stars carrying moon"],
["千辛万苦","qiān xīn wàn kǔ",2,"A thousand hardships, myriad toils.","他历尽千辛万苦找到失散的女儿。","各种各样的艰难困苦。","thousand hardships myriad toils"],
["历尽艰辛","lì jìn jiān xīn",2,"Endured every hardship there was.","他历尽艰辛才回到祖国。","经历种种艰难困苦。","through all hardship toil"],
["饱经风霜","bǎo jīng fēng shuāng",2,"Weathered through wind and frost — a face with a century in it.","老人的脸上写满饱经风霜。","经历过种种艰难困苦。","weathered through wind frost"],
["饱经沧桑","bǎo jīng cāng sāng",2,"Deeply weathered by seas and fields — a life of changes.","他饱经沧桑，说话格外沉稳。","经历世事变迁。","deeply weathered seas fields"],
["百战不殆","bǎi zhàn bú dài",2,"A hundred battles, never endangered.","知彼知己，百战不殆。","多次作战都不失败。","hundred battles never endangered"],
["战功赫赫","zhàn gōng hè hè",2,"War merits, illustrious and illustrious.","老将军战功赫赫。","战功非常显著。","war merits illustrious illustrious"],
["功勋卓著","gōng xūn zhuó zhù",2,"Merits and deeds, outstanding and notable.","这位科学家功勋卓著。","功劳极大。","merits deeds outstanding notable"],
["汗马功劳","hàn mǎ gōng láo",2,"Sweat-horse merit — the war horses did the sweating for this success.","项目成功他立下汗马功劳。","战马奔驰立下功劳，泛指贡献。","sweat horse merit deeds"],
["丰功伟绩","fēng gōng wěi jì",3,"Abundant merits, grand achievements.","先辈的丰功伟绩不可磨灭。","伟大的功绩。","abundant merits grand achievements"]
];

const BULK_SARCASM17 = [
["大张旗鼓","dà zhāng qí gǔ",1,"Grand banners, flags and drums — for something that fizzled by Friday.","整改动员大会大张旗鼓，第二天就偃旗息鼓。","声势浩大（反讽雷声大雨点小）。","grand banners flags drums"],
["大动干戈","dà dòng gān gē",1,"Grandly stirring war weapons — over one missing stapler.","少了一份文件他大动干戈查监控。","大张声势地兴师动众（反讽小题大做）。","grandly stir war weapons"],
["上纲上线","shàng gāng shàng xiàn",2,"Raises everything to principles and political lines.","迟到五分钟被他上纲上线到人品问题。","把问题提到原则高度（反讽小题大做）。","raise guideline then line"],
["吹毛求疵","chuī máo qiú cī",1,"Blows at the hair to find the flaw — inspectors of the impossible.","甲方吹毛求疵，改了二十稿。","故意挑剔毛病（反讽）。","blow hair seek flaw"],
["求全责备","qiú quán zé bèi",2,"Demands perfection, assigns blame — nobody qualifies.","他对新人求全责备，团队留不住人。","苛责别人，要求完美无缺（反讽）。","demand perfection assign blame"],
["指点江山","zhǐ diǎn jiāng shān",1,"Points at rivers and mountains — grand commentary from the couch.","他天天在评论区指点江山。","评论国家大事（反讽空谈）。","point at rivers mountains"],
["无动于衷","wú dòng yú zhōng",1,"No movement in the heart — your emergency, his calm.","她哭了半天他无动于衷。","心里毫无触动（反讽冷漠）。","no movement in heart"],
["麻木不仁","má mù bù rén",2,"Numb as wood, no feeling left.","看惯了悲伤的他已经麻木不仁。","反应迟钝，毫无感觉（反讽）。","numb wooden no feeling"],
["熟视无睹","shú shì wú dǔ",2,"Familiar eyes gazing, nothing seen — problems invisible for years.","安全隐患摆了三年，熟视无睹。","看惯了就像没看见（反讽不作为）。","familiar gazed not seen"],
["置身事外","zhì shēn shì wài",1,"Places himself outside the affair — always, conveniently.","出了事他永远置身事外。","把自己放在事情之外（反讽推责）。","place self outside affairs"],
["袖手旁观","xiù shǒu páng guān",1,"Sleeved hands watching from the side.","有人摔倒他袖手旁观。","把手放在袖子里在一旁看（反讽）。","sleeved hands side watch"],
["隔岸观火","gé àn guān huǒ",1,"Watches the fire from across the shore — and enjoys the warmth.","别的部门出事，他隔岸观火。","看别人遭殃不加援手（反讽）。","across shore watch fire"],
["冷眼旁观","lěng yǎn páng guān",1,"A cold eye watching from the side.","事故现场他冷眼旁观。","用冷淡的态度在旁观看（反讽）。","cold eye side watching"],
["事不关己","shì bù guān jǐ",1,"The matter doesn't concern him — so nothing does.","他信奉事不关己高高挂起。","认为事情与自己无关（反讽冷漠）。","matter not concerning self"],
["明哲保身","míng zhé bǎo shēn",2,"Wise philosophy protecting oneself — truth sacrificed for safety.","为了明哲保身他闭口不谈真相。","为保全自己回避原则问题（反讽）。","wise philosophy protect oneself"],
["独善其身","dú shàn qí shēn",1,"Alone cultivating his own purity — while everything burns.","众人受累他独善其身。","只顾自己好（反讽自私）。","alone cultivate own purity"],
["事必躬亲","shì bì gōng qīn",2,"Every matter personally attended — and micromanaged into ruin.","他事必躬亲，团队毫无自主。","事事都要亲自去做（反讽事必干扰）。","every matter personally attended"],
["言之凿凿","yán zhī záo záo",2,"Words spoken chiseled-certain — confidently inaccurate.","他说得言之凿凿，结果全错。","说得非常确实（反讽自信错误）。","words are chiseled certain"],
["信誓旦旦","xìn shì dàn dàn",2,"Vows and oaths, bright and earnest — expired by Thursday.","他信誓旦旦说不迟到，又迟到了。","誓言说得极为诚恳（反讽违背）。","vows oaths bright earnest"],
["慷慨激昂","kāng kǎi jī áng",2,"Impassioned, fervent, soaring — the speech had everything but action.","动员会上他讲得慷慨激昂，会后毫无作为。","情绪激昂（反讽只有口号）。","impassioned impassioned fervent soaring"],
["娓娓道来","wěi wěi dào lái",1,"Tirelessly telling the story on — and on, and on.","他讲他当年的故事娓娓道来，讲了三小时。","连续不断地说（反讽冗长）。","tirelessly telling the story on"],
["绘声绘色","huì shēng huì sè",2,"Painted voice, painted color — embellishment at the master level.","他把小事说得绘声绘色。","叙述生动逼真（反讽添油加醋）。","painted voice painted color"],
["一本正经","yī běn zhèng jīng",1,"One book, grave and proper — delivering complete nonsense with a straight face.","他一本正经地说了个大笑话。","形容态度严肃（反讽煞有介事）。","one book grave proper"],
["正襟危坐","zhèng jīn wēi zuò",1,"Straightens the robe, sits upright — for the most trivial briefing.","听个琐事通报他正襟危坐。","整理衣襟严肃端坐（反讽煞有介事）。","straighten robe upright sitting"],
["不苟言笑","bù gǒu yán xiào",1,"Rarely casual in talk or smile — the gravest nonsense-briefer alive.","主任不苟言笑地宣布食堂涨价。","态度严肃（反讽煞有介事）。","rarely casual talking smiling"]
];

mergeBulk(BULK_PRAISE17, "praise");
mergeBulk(BULK_SARCASM17, "sarcasm");
