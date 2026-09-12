/* Batch 22: +25 praise (devotion, ambition, harmony), +25 sarcasm (smug posturing & solemn nonsense II). */

const BULK_PRAISE18 = [
["舍我其谁","shě wǒ qí shuí",2,"If not me, then who? — confidence as a duty.","主持大局非他莫属，舍我其谁。","除我之外还能有谁，表示敢于担当。","except me then who"],
["当仁不让","dāng rén bù ràng",1,"Facing righteousness, never yielding — stepping up is the default.","做好事他向来当仁不让。","遇到该做的事主动去做。","facing righteousness not yielding"],
["一言九鼎","yī yán jiǔ dǐng",2,"One word weighing nine royal tripods.","他一言九鼎，从不食言。","说话有分量。","one word nine tripods"],
["铁骨铮铮","tiě gǔ zhēng zhēng",2,"Iron bones clanging — unbending integrity.","铁骨铮铮的汉子从不低头。","为人刚强有骨气。","iron bones clanging clanging"],
["顶天立地","dǐng tiān lì dì",2,"Head propping the sky, feet on the earth — a real stand-up man.","男子汉就要顶天立地。","形象高大，气概豪迈。","propping sky standing earth"],
["谦谦君子","qiān qiān jūn zǐ",1,"Modest, modest, a gentle man — refinement as nature.","他温润如玉，是位谦谦君子。","谦虚而有礼貌的人。","modest modest gentle man"],
["琴瑟和鸣","qín sè hé míng",2,"Qin and se harps harmonizing — a couple in perfect accord.","夫妻二人琴瑟和鸣。","夫妻情意融洽。","qin se harmonize resonate"],
["比翼双飞","bǐ yì shuāng fēi",2,"Wing to wing, two birds flying — partners in flight and life.","祝你们比翼双飞。","夫妻恩爱共同前进。","paired wings two flying"],
["花好月圆","huā hǎo yuè yuán",2,"Flowers fine, moon full — the perfect happy ending.","中秋之夜花好月圆。","美好圆满的生活。","flowers fine moon full"],
["相亲相爱","xiāng qīn xiāng ài",1,"Mutual love, mutual affection — family as it should be.","一家人相亲相爱。","彼此相亲相爱。","mutual love mutual affection"],
["和睦相处","hé mù xiāng chǔ",1,"Harmonious, amiable, getting along.","邻里和睦相处。","彼此友好地相处。","harmonious amiable getting along"],
["礼尚往来","lǐ shàng wǎng lái",1,"Courtesy values mutual exchange.","礼尚往来是传统美德。","礼节上重视有来有往。","courtesy values mutual exchange"],
["入乡随俗","rù xiāng sú sú",1,"Entering a village, follow its customs — respect as travel wisdom.","到了少数民族地区要入乡随俗。","到什么地方就遵从当地习俗。","entering village follow customs"],
["年高德劭","nián gāo dé shào",2,"Age high, virtue eminent.","年高德劭的老先生深受爱戴。","年纪大而品德好。","age high virtue eminent"],
["老骥伏枥","lǎo jì fú lì",2,"An old steed in the stall still dreams of a thousand-li gallop.","七十岁的他老骥伏枥，壮心不已。","有志之士虽老仍怀雄心。","old steed stalls manger"],
["宝刀未老","bǎo dāo wèi lǎo",2,"The treasured blade not yet aged — old hands, still gold.","重返赛场他宝刀未老。","年纪虽大但本领未减。","treasure blade not aged"],
["雄心壮志","xióng xīn zhuàng zhì",2,"Heroic ambition, grand resolve.","他怀着雄心壮志北上创业。","伟大的理想和宏伟的志愿。","heroic ambition grand resolve"],
["壮志凌云","zhuàng zhì líng yún",2,"Grand will soaring to the clouds.","少年壮志凌云。","理想宏伟远大。","grand will soars clouds"],
["鸿鹄之志","hóng hú zhī zhì",2,"The swan's ambition — flying high while sparrows laugh.","燕雀安知鸿鹄之志。","远大的志向。","swan goose of ambition"],
["胸怀大志","xiōng huái dà zhì",2,"A chest harboring grand ambition.","他胸怀大志，不拘小节。","心中怀有远大的志向。","chest harbors grand ambition"],
["有志竟成","yǒu zhì jìng chéng",2,"Where there's a will, it finally succeeds.","有志者事竟成，他考了三次终于上岸。","有志向的人事情终能成功。","where will finally succeeds"],
["精诚团结","jīng chéng tuán jié",2,"Utmost sincerity uniting all as one.","全队精诚团结，逆转夺冠。","一心一意团结一致。","utmost sincerity unite as one"],
["和衷共济","hé zhōng gòng jì",2,"Harmonious hearts, joint rescue — working through it together.","疫情当前全国和衷共济。","同心协力克服困难。","harmonious hearts joint rescue"],
["戮力同心","lù lì tóng xīn",2,"Joined strength, united hearts.","军民戮力同心重建家园。","齐心合力。","join strength unite hearts"],
["人定胜天","rén dìng shèng tiān",2,"Human resolve conquers heaven itself.","治沙人用一生证明人定胜天。","人力一定能够战胜自然。","human resolve conquers heaven"]
];

const BULK_SARCASM18 = [
["大势所趋","dà shì suǒ qū",2,"The grand trend, where everything heads — the excuse for any bandwagon.","涨价是大势所趋，谁也没办法。","整个形势发展的趋向（反讽借口）。","grand trend where heading"],
["势在必行","shì zài bì xíng",2,"Momentum demands it must be done — before anyone asks if it should.","裁员势在必行，普通员工先裁。","非做不可（反讽牺牲他人）。","momentum demands must act"],
["势不可挡","shì bù kě dǎng",2,"Momentum unstoppable, cannot be blocked — the decline included.","他的睡意势不可挡。","来势迅猛不可阻挡（反讽）。","momentum unstoppable cannot block"],
["一往无前","yī wǎng wú qián",1,"One direction, ever forward — no looking back, no reading signs.","他一往无前地开进了单行道。","一直往前无所畏惧（反讽不看路）。","one direction ever forward"],
["勇往直前","yǒng wǎng zhí qián",2,"Bravely marches straight ahead — blindfold optional.","他勇往直前地撞上了玻璃门。","勇敢地一直往前走（反讽莽撞）。","bravely march straight ahead"],
["昂首阔步","áng shǒu kuò bù",1,"Head raised, striding wide — confidence without a map.","他昂首阔步地走进了死胡同。","抬起头迈大步前进（反讽方向错）。","head raised striding wide"],
["高视阔步","gāo shì kuò bù",1,"Lofty gaze, wide strutting — looking down while going nowhere.","他高视阔步，目中无人。","眼睛向上，大步走动（反讽傲慢）。","lofty gaze wide strutting"],
["踌躇满志","chóu chú mǎn zhì",2,"Complacent and smug, pride brimming — right before the collapse.","开盘前他踌躇满志，收盘后垂头丧气。","对自己很满意（反讽自信失败）。","complacent smug full pride"],
["志得意满","zhì dé yì mǎn",2,"Will achieved, pride complete — till reality RSVPs no.","小有成绩他志得意满。","志向实现心满意足（反讽）。","will achieved pride complete"],
["春风得意","chūn fēng dé yì",2,"Spring-breeze proud and satisfied — until winter arrived in the afternoon.","上午升职春风得意，下午被裁员。" ,"得意时趾高气扬（反讽乐极生悲）。","spring breeze proud satisfied"],
["神气活现","shén qì huó xiàn",2,"Spirit alive, strutting about — inflated beyond function.","穿上新制服他神气活现。","自以为得意而傲慢（反讽）。","spirit alive strutting about"],
["天下第一","tiān xià dì yī",1,"Under heaven, number one — self-certified, no peers consulted.","他自称天下第一的厨艺，无人敢尝。","天下第一（反讽自封）。","under heaven number one"],
["盖世无双","gài shì wú shuāng",2,"Covering the world, no equal — the ego's travel brochure.","他自夸的装修手艺盖世无双。","举世无双（反讽自夸）。","covering world no equal"],
["绝无仅有","jué wú jǐn yǒu",2,"Absolutely no other exists — thank goodness.","这种操作方式绝无仅有。","极其少有（反讽）。","absolutely no other exists"],
["神色自若","shén sè zì ruò",2,"Expression calm, self composed — mid-lie and mid-crash alike.","谎言被拆穿他还神色自若。","神情镇定（反讽撒谎不脸红）。","expression calm self composed"],
["谈笑自若","tán xiào zì ruò",2,"Talks and laughs as composed — the house is burning behind him.","警报响了他还谈笑自若。","谈笑如常（反讽满不在乎）。","talk laugh self composed"],
["谈古论今","tán gǔ lùn jīn",2,"Talks ancient, discusses modern — everything except reality.","酒桌上他谈古论今，就是不谈正事。","从古到今无所不谈（反讽空谈）。","talk ancient discuss modern"],
["畅所欲言","chàng suǒ yù yán",2,"Freely speak all words — nobody listens anyway.","会上畅所欲言，会后无人理会。","尽情说出想说的话（反讽没人听）。","freely speak all words"],
["知无不言","zhī wú bù yán",2,"Know all, say all — even what nobody asked.","他知无不言，把不该说的也说了。","毫无保留地说出所知（反讽多嘴）。","know all say all"],
["言无不尽","yán wú bù jìn",2,"Words with nothing left unsaid — including the fatal opinion.","他对领导言无不尽，结果被穿小鞋。","知无不言，毫无保留（反讽吃亏）。","words none left unsaid"],
["有板有眼","yǒu bǎn yǒu yǎn",1,"Every beat, every note — methodically following the wrong manual.","他一板一眼地执行了错误流程。","有条理有章法（反讽照错执行）。","every beat every note"],
["像模像样","xiàng mú xiàng yàng",1,"Looking proper, looking proper — the imitation almost works.","他的手工台面像模像样。","郑重隆重（反讽形式像样子）。","looking proper looking proper"],
["活灵活现","huó líng huó xiàn",2,"Alive, vivid, alive, appearing — his lie has stage presence.","他把瞎编的经历说得活灵活现。","描述生动逼真（反讽编造）。","alive vivid alive appearing"],
["惟妙惟肖","wéi miào wéi xiào",2,"Wonderfully imitated, wonderfully true — the forgery of a personality.","他模仿领导签字惟妙惟肖。","描写或模仿得非常逼真（反讽用于造假）。","wonderfully imitated wonderfully true"]
];

mergeBulk(BULK_PRAISE18, "praise");
mergeBulk(BULK_SARCASM18, "sarcasm");
