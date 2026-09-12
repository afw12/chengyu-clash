/* Batch 11: +15 praise (physician/teacher), +15 argue (ruelakers & infamy), +30 sarcasm (grand words for small deeds). */

const BULK_PRAISE9 = [
["妙手仁心","miào shǒu rén xīn",2,"Marvelous hands, kind heart — patients first, always.","这位医生妙手仁心，病人都信赖他。","医术高明，医德高尚。","marvelous hand kind heart"],
["仁心仁术","rén xīn rén shù",2,"Kind heart, kind skill — medicine as a moral act.","他仁心仁术，从不乱开药。","心地仁慈，医术高明。","kind heart kind skill"],
["悬壶济世","xuán hú jì shì",3,"Hangs the gourd to heal the world — the physician's ancient calling.","老中医悬壶济世五十年。","行医救人。","hang gourd save world"],
["杏林春暖","xìng lín chūn nuǎn",3,"Spring warmth in the apricot grove — honor earned one patient at a time.","他医德高尚，杏林春暖。","医术高明，医德高尚。","apricot grove spring warm"],
["桃李满门","táo lǐ mǎn mén",2,"Peaches and plums fill the gate — students everywhere, all his.","王老师桃李满门，弟子遍布各行各业。","培养的学生很多。","peaches plums fill gate"],
["为人师表","wéi rén shī biǎo",2,"A model for people to follow — on duty even off campus.","她为人师表，言行格外谨慎。","在品德学问上做别人学习的榜样。","act as people model"],
["言传身教","yán chuán shēn jiào",2,"Teaches with words, proves with deeds.","父母言传身教，孩子自然懂事。","用言行影响教育别人。","words teach example instruct"],
["因材施教","yīn cái shī jiào",2,"By the material, apply the teaching — every student gets their own key.","好老师因材施教，不搞一刀切。","针对不同对象采取不同教育方法。","by material apply teaching"],
["有教无类","yǒu jiào wú lèi",2,"Education offered to all — no class-lines drawn.","孔子有教无类，弟子三千。","对各类人都进行教育。","teaching offered no divisions"],
["学而不厌","xué ér bù yàn",2,"Learns and never tires — sixty years old, still a student.","他活到老学到老，学而不厌。","学习总感到不满足。","learn and never tired"],
["温故知新","wēn gù zhī xīn",2,"Review the old, gain the new — rereading pays compound interest.","常翻旧笔记，温故知新。","温习旧知识，得到新的理解。","review old gain new"],
["不耻下问","bù chǐ xià wèn",2,"Not ashamed to ask those below — the mark of real rank.","处长向实习生请教，不耻下问。","乐于向学问或地位不如自己的人请教。","not ashamed below asking"],
["韦编三绝","wéi biān sān jué",3,"Read it until the leather straps thrice broke — Confucius-grade studying.","他把那本书翻到韦编三绝。","读书勤奋刻苦。","leather straps thrice broken"],
["集腋成裘","jí yè chéng qiú",2,"Collect scraps, make a fur-coat — small gifts compound into greatness.","每天存五块钱，集腋成裘。","积少成多。","gather scraps make coat"],
["尊师重道","zūn shī zhòng dào",1,"Honor teachers, value the Way — the whole village showed up.","这个村子自古尊师重道。","尊敬师长，重视道理。","honor teachers value way"]
];

const BULK_ARGUE9 = [
["姑息养奸","gū xī yǎng jiān",2,"Tolerates the small evil, breeds the big one.","他迟到三次都没人管，姑息养奸。","无原则宽容，助长坏人坏事。","tolerate harm breed evil"],
["养虎为患","yǎng hǔ wèi huàn",2,"Raises a tiger, reaps the trouble.","资助对手十年，养虎为患。","纵容敌人，留下后患。","raise tiger breed trouble"],
["引狼入室","yǐn láng rù shì",2,"Leads the wolf into the room — personally held the door.","他给骗子开了后台权限，引狼入室。","自己把坏人引进内部。","lead wolf enter room"],
["开门揖盗","kāi mén yī dào",2,"Opens the door and bows the thief in.","大门不锁钱包外放，开门揖盗。","开门请强盗进来。","open door invite thieves"],
["放虎归山","fàng hǔ guī shān",2,"Releases the tiger to the mountain — the sequel writes itself.","没处罚就放人，放虎归山。","放走敌人，留下祸根。","release tiger return mountain"],
["后患无穷","hòu huàn wú qióng",2,"Skipped the fix today — the trouble has no horizon.","地基问题不解决，后患无穷。","今后的祸害没有穷尽。","later trouble no end"],
["贻害无穷","yí hài wú qióng",2,"The fake data enters the field — harm inherited forever.","错误的结论贻害无穷。","留下无穷的祸害。","leave harm no end"],
["遗臭万年","yí chòu wàn nián",3,"His name will stink for myriad years — history's opposite hall of fame.","卖国者遗臭万年。","坏名声流传下去，永远被人唾骂。","leave stink myriad years"],
["声名狼藉","shēng míng láng jiè",2,"Name and fame torn and scattered — a reputation in ruins.","丑闻之后他声名狼藉。","名声败坏到了极点。","name fame torn scattered"],
["臭名昭著","chòu míng zhāo zhù",2,"Foul name, notoriously clear — the street crosses itself.","那个骗子已臭名昭著。","坏名声人人都知道。","foul name notorious clear"],
["臭名远扬","chòu míng yuǎn yáng",2,"The foul name traveled — other cities heard first.","他的恶行臭名远扬。","坏名声传得很远。","foul name far spread"],
["世风日下","shì fēng rì xià",2,"The world's morals, declining daily — every generation's favorite sigh.","老人感叹世风日下。","社会风气一天不如一天。","world morals day declining"],
["人心不古","rén xīn bù gǔ",2,"People's hearts no longer ancient — grandpa's verdict on everything.","现在帮人前先谈钱，人心不古。","社会风气不如从前淳厚。","people hearts not ancient"]
];

const BULK_SARCASM9 = [
["功不可没","gōng bù kě mò",2,"His merit cannot be dismissed — for the collapse, he was essential.","系统崩了他功不可没。","功劳很大，不可埋没（反讽闯祸）。","merit not can dismiss"],
["劳苦功高","láo kǔ gōng gāo",2,"Toiled bitterly, merit high — the outage was his masterpiece.","通宵乱改配置，劳苦功高，服务器瘫了。","出了大力（反讽帮倒忙）。","toil bitter merit high"],
["居功至伟","jū gōng zhì wěi",2,"Claims the utmost grand merit — for the problem he created.","这次泄露他居功至伟。","功劳极大（反讽闯大祸）。","claim merit utmost grand"],
["成绩斐然","chéng jì fěi rán",2,"Results recorded, striking and notable — the error count, that is.","这季度bug数量成绩斐然。","成绩突出（反讽数字难看）。","results recorded striking notable"],
["效果显著","xiào guǒ xiǎn zhù",2,"The effect, obvious and notable — complaints tripled.","新政实施后投诉量效果显著地涨了。","效果很明显（反讽效果糟糕）。","effect result obvious notable"],
["立竿见影","lì gān jiàn yǐng",1,"Raise the pole, see the shadow — the rash appeared the same second.","这药立竿见影，吃完就起疹子。","见效极快（反讽副作用快）。","raise pole see shadow"],
["可圈可点","kě quān kě diǎn",2,"Worth circling, worth dotting — his disaster had genuine highlights.","这场闹剧的剧本可圈可点。","表现出色（反讽荒唐出彩）。","worth circling worth dotting"],
["值得一提","zhí dé yī tí",2,"Worth one mention — the typo on page one of the annual report.","年报封面的错字值得一提。","值得说出来（反讽丢人事）。","worth deserving one mention"],
["大书特书","dà shū tè shū",2,"Grandly written, specially written — this excuse belongs in textbooks.","这个借口应当大书特书。","郑重记载（反讽荒唐事）。","grandly write specially write"],
["浓墨重彩","nóng mò zhòng cǎi",2,"Thick ink, heavy color — the report painted his failure like a festival.","调查报告把他的失误写得浓墨重彩。","着重描述（反讽出丑）。","thick ink heavy color"],
["载入史册","zài rù shǐ cè",2,"Loaded into the annals of history — the worst launch ever recorded.","这场最惨的上线将被载入史册。","名载史册（反讽事故级）。","loaded into history annals"],
["宾至如归","bīn zhì rú guī",2,"Guests arrive feeling at home — the hotel lost our booking and left the beds unmade.","酒店弄丢订单还说不影响，真是宾至如归。","客人像回到家（反讽服务差）。","guests arrive like home"],
["高朋满座","gāo péng mǎn zuò",2,"Distinguished guests fill every seat — the hall was empty; the jackets had seats.","发布会现场空椅子都系着领带，高朋满座。","宾客很多（反讽造假）。","distinguished guests fill seats"],
["座无虚席","zuò wú xū xí",2,"No seat left empty — the cushions came alone.","演出没人看，靠外套座无虚席。","没有空位（反讽造假）。","seats none empty cushion"],
["人山人海","rén shān rén hǎi",1,"People mountain, people sea — for one free sample.","免费试吃摊前人山人海。","人多得像山和海（反讽为小利）。","people mountain people sea"],
["门庭若市","mén tíng ruò shì",2,"Gate and courtyard like a market — the complaint office at opening time.","售后部一开门就门庭若市。","上门的人很多（反讽全是投诉）。","gate courtyard like market"],
["络绎不绝","luò yì bù jué",2,"The stream never ceases — complaint letters, since March.","投诉信络绎不绝。","来往连续不断（反讽全是差评）。","continuous stream not ceasing"],
["应接不暇","yìng jiē bù xiá",2,"Too busy responding to cope — three crashes in one hour.","服务器一小时内崩了三次，客服应接不暇。","来人或事情太多，接待不过来。","respond receive no time"],
["有声有色","yǒu shēng yǒu sè",2,"With sound and color — the meltdown was theatrically perfect.","这场崩溃表演得有声有色。","表现得精彩生动（反讽出丑）。","with sound with color"],
["井井有条","jǐng jǐng yǒu tiáo",2,"The mess was arranged into neat little rows.","他把烂摊子整理得井井有条。","条理分明（反讽乱得整齐）。","well well has order"],
["有条不紊","yǒu tiáo bù wěn",2,"Orderly, untangled — the failure ran like a checklist.","他们有条不紊地搞砸了每一步。","有条理不紊乱（反讽有序失败）。","has order not tangled"],
["一板一眼","yī bǎn yī yǎn",1,"One beat, one note — followed the wrong manual perfectly.","他一板一眼地执行了错误流程。","做事认真按规矩（反讽照错执行）。","one beat one note"],
["按部就班","àn bù jiù bān",2,"Followed the schedule, took the sequence — straight off a cliff.","他按部就班地把项目带进了沟里。","按照步骤进行（反讽照错走）。","follow schedule take sequence"],
["循规蹈矩","xún guī dǎo jǔ",2,"Followed every rule, tread every line — useless at every step.","他循规蹈矩地把流程全走完了，结果还是错。","遵守规矩（反讽机械执行）。","follow rules tread lines"],
["一成不变","yī chéng bù biàn",2,"One formation, never changing — the same mistake, ten years running.","他的方案一成不变，错误也一成不变。","一点不加变化（反讽死板）。","one formed not change"],
["事半功倍","shì bàn gōng bèi",2,"Half the work, double the effect — double the damage, that is.","他的方法事半功倍——坏得更快了。","花费少收效大（反讽效果糟）。","work half effect double"],
["一气呵成","yī qì hē chéng",2,"One breath, exhale, done — the disaster finished in a single sitting.","他把系统搞崩的过程一气呵成。","一口气完成（反讽闯祸流畅）。","one breath exhale done"],
["快马加鞭","kuài mǎ jiā biān",2,"Fast horse, added whip — sped straight past the right exit.","他快马加鞭地错过了所有检查点。","加快速度前进（反讽方向错）。","fast horse add whip"],
["马不停蹄","mǎ bù tíng tí",2,"Horse never stopping its hooves — drove clean past the destination.","他马不停蹄地开过了目的地。","一刻不停前进（反讽徒劳）。","horse not stop hooves"],
["争分夺秒","zhēng fēn duó miǎo",2,"Fighting minutes, seizing seconds — all the way to the wrong station.","他争分夺秒地赶错了车站。","抓紧时间（反讽白忙）。","fight minutes seize seconds"]
];

mergeBulk(BULK_PRAISE9, "praise");
mergeBulk(BULK_ARGUE9, "argue");
mergeBulk(BULK_SARCASM9, "sarcasm");
