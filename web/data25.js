/* Batch 25: +25 praise (vigor & vision), +25 sarcasm (hollow eloquence & missing money). */

const BULK_PRAISE21 = [
["刚柔并济","gāng róu bìng jì",2,"Hard and soft applied together — strength with grace.","她的管理风格刚柔并济。","刚强和柔和互相配合。","hard soft combine apply"],
["张弛有度","zhāng chí yǒu dù",2,"Tension and relaxation, with measure — rhythm as a skill.","他的课程安排张弛有度。","松紧结合，分寸得当。","tension relaxation with measure"],
["进退有度","jìn tuì yǒu dù",2,"Advance and retreat, with measure — knowing when to move and stop.","他为人处世进退有度。","举止有分寸。","advance retreat with measure"],
["神采飞扬","shén cǎi fēi yáng",1,"Spirit and radiance flying high.","领奖台上的他神采飞扬。","神情兴奋得意。","spirit radiance flying high"],
["生机勃勃","shēng jī bó bó",1,"Vitality vibrant, thriving thriving — life at full throttle.","春天的公园生机勃勃。","充满生命力。","vitality vibrant thriving thriving"],
["欣欣向荣","xīn xīn xiàng róng",1,"Thriving, thriving, toward prosperity.","小城的旅游业欣欣向荣。","事业蓬勃发展。","thriving thriving toward prosperity"],
["方兴未艾","fāng xīng wèi ài",2,"Just rising, not yet cresting — the wave still building.","短视频行业方兴未艾。","正在兴起发展，一时不会终止。","just rising not cresting"],
["突飞猛进","tū fēi měng jìn",2,"Leaping, flying, advancing rapidly.","他的成绩突飞猛进。","进步和发展特别迅速。","leap flying advance rapidly"],
["日新月异","rì xīn yuè yì",2,"Each day new, each month different.","城市的变化日新月异。","发展变化快，不断出现新事物。","each day new different"],
["与时俱进","yǔ shí jù jìn",2,"Advancing with the times.","传统手艺也要与时俱进。","随着时代发展而不断进步。","advance with the times"],
["推陈出新","tuī chén chū xīn",2,"Pushes out the old, brings in the new.","老字号餐饮推陈出新。","去掉旧事物的糟粕，取其精华。","push old bring new"],
["革故鼎新","gé gù dǐng xīn",3,"Removes the stale, establishes the fresh.","新领导上任后革故鼎新。","破除旧的，建立新的。","remove old establish new"],
["开天辟地","kāi tiān pì dì",3,"Opening heaven, splitting earth — the very first of its kind.","这家公司是行业里开天辟地的存在。","前所未有的伟大事业。","open heaven split earth"],
["惊天动地","jīng tiān dòng dì",3,"Shocks heaven, shakes the earth.","他们做了一件惊天动地的大事。","声势浩大或事件令人震惊。","shock heaven shake earth"],
["气吞山河","qì tūn shān hé",3,"Spirit swallowing mountains and rivers.","他的计划书气吞山河。","气势可以吞没山河。","spirit swallows mountains rivers"],
["气贯长虹","qì guàn cháng hóng",3,"Spirit piercing the long rainbow.","这份气概气贯长虹。","气势壮盛，像贯穿长虹。","spirit pierces the rainbow"],
["文韬武略","wén tāo wǔ lüè",3,"Civil strategy, martial tactics — both books and battles mastered.","这位将军文韬武略样样精通。","文武两方面的才干。","civil strategy martial tactics"],
["大智大勇","dà zhì dà yǒng",3,"Great wisdom, great courage.","消防队长大智大勇，救出全员。","指非凡的智力和勇气。","great wisdom great courage"],
["有勇有谋","yǒu yǒng yǒu móu",2,"Has courage, has strategy — force with a brain.","他是有勇有谋的干将。","既有胆量又有智谋。","has courage has strategy"],
["胆识过人","dǎn shí guò rén",2,"Guts and insight surpassing others.","她胆识过人，敢想敢干。","胆量和见识超过常人。","guts insight surpass others"],
["高屋建瓴","gāo wū jiàn líng",2,"From a high roof, pouring water — strategy with total command.","他对行业趋势的分析高屋建瓴。","居高临下，不可阻挡。","high roof pour jars"],
["提纲挈领","tí gāng qiè lǐng",2,"Grabs the outline, lifts the collar — the essential first.","他的总结提纲挈领。","抓住要点，简明扼要。","grab outline lift collar"],
["纲举目张","gāng jǔ mù zhāng",2,"Raise the headline, all sub-points open.","抓住主要矛盾，纲举目张。","抓住关键带动全局。","headline raised subpoints open"],
["众志成城","zhòng zhì chéng chéng",3,"United wills form a fortress.","全国人民众志成城抗震救灾。","万众一心像城墙一样牢固。","united wills form fortress"],
["同心同德","tóng xīn tóng dé",2,"One heart, one virtue — no cracks in the team.","班子同心同德，事业必成。","思想行动完全一致。","one heart one virtue"]
];

const BULK_SARCASM21 = [
["口吐莲花","kǒu tǔ lián huā",2,"The mouth spits lotus flowers — each one promises, none bloom.","客服口吐莲花，问题一个没解决。","口才好说出妙语（反讽空口承诺）。","mouth spits lotus flowers"],
["甜言蜜语","tián yán mì yǔ",2,"Sweet words, honey speech — cavities guaranteed.","他的甜言蜜语都是套路。","为了哄人而说的动听的话。","sweet words honey speech"],
["能说会道","néng shuō huì dào",2,"Able talker, good persuader — for everything except doing.","他能说会道，就是不动手。","善于说话（反讽光说不做）。","able talk good persuading"],
["一口咬定","yī kǒu yǎo dìng",2,"One bite, firmly insisting — even against the video evidence.","他一口咬定自己没迟到。","坚持己见，死不改口（反讽）。","one bite firmly insisting"],
["咬文嚼字","yǎo wén jiáo zì",2,"Bites words, chews characters — avoiding the question one syllable at a time.","他咬文嚼字地回避了核心问题。","过分斟酌字句（反讽避实就虚）。","bite words chew characters"],
["无的放矢","wú de fàng shǐ",2,"Releases arrows with no target — effort at maximum, aim at zero.","他的批评无的放矢。","没有目标乱放箭（反讽白费劲）。","no target release arrow"],
["无病呻吟","wú bìng shēn yín",2,"Moaning with no illness — suffering performed for an audience.","这篇散文无病呻吟。","没有忧愁却叹息（反讽矫情）。","no illness yet moaning"],
["故作高深","gù zuò gāo shēn",2,"Deliberately acting mysteriously profound — content still loading.","他故作高深，其实什么都不会。","故意做出高深的样子（反讽装腔）。","deliberately acting mysteriously profound"],
["矫揉造作","jiǎo róu zào zuò",2,"Affected, strained, artificial, pretentious.","她的表演矫揉造作。","过分做作，极不自然。","affected strained artificial pretentious"],
["搔首弄姿","sāo shǒu nòng zī",2,"Scratches head, strikes poses — presence over substance.","她全程搔首弄姿毫无演技。","装模作样卖弄风姿（反讽）。","scratch head strike poses"],
["外强中干","wài qiáng zhōng gān",2,"Strong outside, hollow inside — the paper tiger corporate edition.","这家公司外强中干。","外表强大，内里空虚。","strong outside hollow inside"],
["色厉内荏","sè lì nèi rěn",2,"Fierce expression, weak insides — the bully decoded.","他色厉内荏，被戳穿就怂了。","外表强硬，内心怯懦。","fierce expression weak inside"],
["虚张声势","xū zhāng shēng shì",2,"Empty posturing, fake momentum — the fleet of cardboard ships.","他虚张声势地威胁要起诉。","假装出强大的气势（反讽）。","empty posturing fake momentum"],
["有气无力","yǒu qì wú lì",1,"Has energy, no strength — enthusiasm announced, execution absent.","他的道歉有气无力。","形容说话做事没有力气（反讽敷衍）。","has energy no strength"],
["有口无心","yǒu kǒu wú xīn",1,"Has a mouth, no heart — words shipped without review.","她说话有口无心，别往心里去。","嘴上说说，并没有放在心上。","has mouth no heart"],
["千言万语","qiān yán wàn yǔ",2,"A thousand words, myriad speeches — action count: zero.","他千言万语，就是不肯动手。","形容说的的话非常多（反讽光说）。","thousand words myriad speeches"],
["长篇大论","cháng piān dà lùn",2,"Long chapters, grand discourse — meeting could have been an email.","他长篇大论讲了两小时。","滔滔不绝的言论（反讽冗长）。","long chapters grand discourse"],
["连篇累牍","lián piān lěi dú",2,"Page after page, piled documents — substance: one line.","总结报告连篇累牍毫无重点。","篇幅过多，文辞冗长。","page after piled documents"],
["空洞无物","kōng dòng wú wù",2,"Hollow, empty, nothing inside.","他的演讲空洞无物。","空空洞洞，没有内容。","hollow empty nothing inside"],
["索然无味","suǒ rán wú wèi",2,"Dull, dull, no flavor.","他的讲座索然无味。","形容乏味，没有兴趣。","dull dull no flavor"],
["味同嚼蜡","wèi tóng jiáo là",2,"Tastes like chewing wax.","他写的报告味同嚼蜡。","形容语言或文章枯燥无味。","tastes like chewing wax"],
["枯燥无味","kū zào wú wèi",2,"Dry, dull, no flavor.","他的课枯燥无味。","单调呆板，没有趣味。","dry dull no flavor"],
["束之高阁","shù zhī gāo gé",1,"Bind it, store it on the high shelf — the plan's final resting place.","方案做完就被束之高阁。","扔在一边，不去用它。","bind it high shelf"],
["置之不理","zhì zhī bù lǐ",1,"Place it, ignore it — the complaint's destination.","投诉信被置之不理。","放在一边不理不睬。","place it no attention"],
["不闻不问","bù wén bù wèn",1,"Not hearing, not asking — management by absence.","他对团队困难不闻不问。","对事情不关心不过问。","not hear not ask"]
];

mergeBulk(BULK_PRAISE21, "praise");
mergeBulk(BULK_SARCASM21, "sarcasm");
