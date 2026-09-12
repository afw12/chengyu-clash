/* Batch 9: +15 praise, +15 argue, +30 sarcasm (the "confidently wrong" subfamily). */

const BULK_PRAISE7 = [
["和风细雨","hé fēng xì yǔ",1,"Gentle wind, fine rain — correction without thunder.","他批评人如和风细雨，让人服气。","方式温和，不粗暴。","gentle wind fine rain"],
["无私奉献","wú sī fèng xiàn",2,"Gives everything, keeps nothing — the quiet engine of every community.","她为社区无私奉献了二十年。","不求回报地付出。","no selfish offer dedicate"],
["默默无闻","mò mò wú wén",1,"Silent and unsung — the ones who actually hold everything up.","扫了三十年街的他默默无闻。","不出名，不为人知。","silent silent no fame"],
["无怨无悔","wú yuàn wú huǐ",2,"No complaints, no regrets — all-in by choice.","守边二十年，他无怨无悔。","没有怨恨和后悔。","no blame no regret"],
["在所不辞","zài suǒ bù cí",1,"Will never refuse — whatever it costs.","为兄弟两肋插刀在所不辞。","决不推辞。","at place not decline"],
["万死不辞","wàn sǐ bù cí",3,"Ten thousand deaths would not stop the yes.","为乡亲们办事，万死不辞。","冒万死也甘愿，不推辞。","ten thousand deaths not decline"],
["肝脑涂地","gān nǎo tú dì",3,"Liver and brains spilled for the cause — ancient loyalty at maximum.","为公司效命他肝脑涂地。","竭尽忠诚，甘愿牺牲。","liver brains smear ground"],
["赴汤蹈火","fù tāng dǎo huǒ",2,"Into boiling water, onto fire — commitment measured in hazards.","朋友有事他赴汤蹈火。","比喻不避艰险。","go soup tread fire"],
["两肋插刀","liǎng lèi chā dāo",3,"Knives in both ribs for a friend — friendship at full draw.","兄弟有事他两肋插刀。","为朋友甘愿承担极大牺牲。","both ribs insert knives"],
["出生入死","chū shēng rù sǐ",2,"Out from life, into death — through it all, together.","两位老兵出生入死几十年。","形容冒着生命危险。","out life enter death"],
["舍生忘死","shě shēng wàng sǐ",3,"Life set aside, death forgotten — the rescuer's default setting.","救火时他舍生忘死。","不顾生命危险。","give life forget death"],
["奋不顾身","fèn bù gù shēn",2,"Rushes in, self unconsidered.","他奋不顾身跳进河里救人。","奋勇向前，不顾个人安危。","rush not care body"],
["挺身而出","tǐng shēn ér chū",2,"Steps forward when everyone else steps back.","出事后他挺身而出承担责任。","勇敢地站出来。","stand body then out"],
["大义凛然","dà yì lǐn rán",3,"Righteousness frozen into bearing — unbribable, unshakable.","法庭上他大义凛然地指认。","坚持正义而神态庄严。","big righteousness awe solemn"],
["光明正大","guāng míng zhèng dà",1,"Open and upright — wins in daylight or not at all.","竞争他也光明正大。","行为正派，襟怀坦白。","bright open big upright"]
];

const BULK_ARGUE7 = [
["恶语相向","è yǔ xiāng xiàng",2,"Hurls ugly words in both directions.","俩人没说三句就恶语相向。","用恶毒的话互相攻击。","evil words toward each"],
["嫁祸于人","jià huò yú rén",2,"Marries the blame off to somebody else.","他自己弄坏的，却嫁祸于人。","把祸事推给别人。","marry disaster to people"],
["避而不谈","bì ér bù tán",1,"Dodges the topic like a toll gate.","问到关键处他就避而不谈。","有意回避，不谈这个问题。","avoid yet not talk"],
["讳莫如深","huì mò rú shēn",2,"Deeper secrecy than a tomb — about something trivial.","问他工资几何，讳莫如深。","紧紧隐瞒，唯恐暴露。","hide more like deep"],
["支支吾吾","zhī zhī wú wú",1,"Uh-ing and um-ing — the truth trying to escape backwards.","问他钱花哪了，他支支吾吾。","说话含混躲闪。","uh uh mumble mumble"],
["吞吞吐吐","tūn tūn tǔ tǔ",2,"Swallowing and re-spitting words — a sentence stuck in traffic.","他吞吞吐吐半天没说清去向。","有顾虑，说话不爽快。","swallow swallow spit spit"],
["含糊其辞","hán hú qí cí",2,"Vague on purpose — the dictionary of maybe.","问具体数字，他含糊其辞。","故意话说得不清不楚。","vague blur its words"],
["遮遮掩掩","zhē zhē yǎn yǎn",2,"Covers and conceals — the more you look, the less you see.","账目遮遮掩掩不给人看。","行动遮掩，怕人知道。","cover cover hide hide"],
["躲躲闪闪","duǒ duǒ shǎn shǎn",2,"Dodge, dodge, dodge — an answer doing cardio.","一问细节他就躲躲闪闪。","躲避隐瞒，含糊其辞。","dodge dodge flash flash"],
["闪烁其词","shǎn shuò qí cí",2,"Words that flicker on and off — yes-no-should-I-say.","问到责任归属，他闪烁其词。","说话吞吞吐吐，有所隐瞒。","flicker flicker its words"],
["表里不一","biǎo lǐ bù yī",2,"Outside and inside disagree — usually on purpose.","他嘴上答应，实际表里不一。","表面和内心不一致。","outside inside not one"],
["自食其果","zì shí qí guǒ",3,"Eats the fruit of his own planting — seasonally ripe.","天天熬夜，终于自食其果住院了。","自己做了坏事自己承担后果。","self eat its fruit"],
["咎由自取","jiù yóu zì qǔ",3,"The blame was self-served, by his own hand.","不听劝落得如此下场，咎由自取。","灾祸是自己招来的。","blame from self take"],
["怨天尤人","yuàn tiān yóu rén",2,"Blames heaven, blames people — self exempt forever.","输了就怨天尤人，从不检讨。","抱怨天，责怪别人。","blame heaven blame people"],
["牢骚满腹","láo sāo mǎn fù",1,"A belly full of grievances — always at capacity.","他牢骚满腹，看啥都不顺眼。","抱怨的情绪很多。","grumble grumble full belly"]
];

const BULK_SARCASM7 = [
["精打细算","jīng dǎ xì suàn",1,"Calculates to the penny — for himself, never for the tab.","AA到纸巾都算他一份，真是精打细算。","细细地计算（反讽抠门）。","fine hit fine calculate"],
["勤俭持家","qín jiǎn chí jiā",1,"Runs the home thriftily — your snacks are now his savings.","他把全家零食锁进柜子，勤俭持家。","以勤劳节俭操持家务（反讽抠门）。","diligent thrift hold home"],
["起早贪黑","qǐ zǎo tān hēi",2,"Rises early, chases the dark — devotion, or ranked games.","他起早贪黑地打游戏，终于上了王者。","起早睡晚地辛勤劳动（反讽方向）。","rise early chase dark"],
["夜以继日","yè yǐ jì rì",2,"Night continues into day — the grind, or the group chat.","他为维护立场夜以继日地发帖。","日夜不停（反讽用错地方）。","night by day continue"],
["废寝忘食","fèi qǐn wàng shí",2,"Forgets sleep, skips meals — for the craft, or the match.","他废寝忘食研究的课题是哪家外卖便宜。","顾不上睡觉吃饭（反讽钻研方向）。","abandon sleep forget food"],
["小心翼翼","xiǎo xīn yì yì",1,"Tiny-careful — and still broke it.","他小心翼翼地端着蛋糕，还是摔了。","谨慎小心（反讽越小心越糟）。","small heart careful careful"],
["如履薄冰","rú lǚ bó bīng",1,"Walks as if on thin ice — in a room with a perfectly good floor.","他回个消息如履薄冰，打了又删十分钟。","极为小心（反讽过度紧张）。","like tread thin ice"],
["面不改色","miàn bù gǎi sè",2,"Face never changes color — even mid-lie.","他面不改色地把锅甩给了我。","脸上神色不变（反讽撒谎镇定）。","face not change color"],
["心如止水","xīn rú zhǐ shuǐ",2,"Heart still as dead water — your emergency didn't even ripple it.","我在旁边急疯了，他心如止水地打游戏。","内心平静（反讽冷漠）。","heart like still water"],
["气定神闲","qì dìng shén xián",1,"Breath settled, spirit at leisure — the kitchen is burning, mind you.","外卖全洒了他气定神闲地又点了一份。","气度沉稳（反讽不慌不忙）。","breath settled spirit leisure"],
["胸有成竹","xiōng yǒu chéng zhú",2,"A finished bamboo in the chest — the plan existed, just not in reality.","他说胸有成竹，结果方案就一行字。","做事之前已有主意（反讽空有姿态）。","chest have formed bamboo"],
["志在必得","zhì zài bì dé",2,"Determined to win it — determination now zero for twelve.","抢票十二连败，次次志在必得。","决心要得到（反讽屡战屡败）。","will at must gain"],
["手到擒来","shǒu dào qín lái",2,"Hand arrives, prize captured — the prize disagrees.","他说抢票手到擒来，结果页面都没打开。","一伸手就能得到（反讽翻车）。","hand arrive seize come"],
["易如反掌","yì rú fǎn zhǎng",2,"Easy as flipping a palm — the palm failed.","他说装系统易如反掌，电脑现在开不了机。","像翻手掌一样容易（反讽翻车）。","easy as flip palm"],
["一帆风顺","yī fān fēng shùn",2,"One sail, smooth wind — the voyage that wasn't.","项目第一周就炸了，祝他一帆风顺。","旅途顺利无阻（反讽诸事不顺）。","one sail smooth wind"],
["万事俱备","wàn shì jù bèi",2,"Everything ready — except the one thing that mattered.","相机三脚架滤镜齐活，万事俱备，忘了带电池。","一切都准备好了（反讽关键缺失）。","ten thousand things all ready"],
["先见之明","xiān jiàn zhī míng",1,"Foresight — spotting the obvious one hour before everyone else.","雨都下起来了他才说要带伞，先见之明。","事先看清问题的能力（反讽事后诸葛）。","first see of brightness"],
["料事如神","liào shì rú shén",2,"Predicts events like a god — after they happen.","比赛结束他才说押对了，料事如神。","预料事情极准（反讽事后诸葛）。","predict events like god"],
["未卜先知","wèi bǔ xiān zhī",2,"Knows without divining — especially yesterday's news.","他未卜先知地宣布了昨天刚出的结果。","没有占卜就先知道（反讽马后炮）。","not divine first know"],
["明察秋毫","míng chá qiū háo",2,"Sees the autumn hair-tip — missed the buffalo.","他明察秋毫地指出错别字，没看见数据全错。","目光敏锐（反讽抓小放大）。","bright inspect autumn hair"],
["火眼金睛","huǒ yǎn jīn jīng",2,"Fiery golden eyes that see through anything — saw nothing.","假货摆在眼前他火眼金睛也没认出来。","眼光敏锐透彻（反讽看走眼）。","fire eye golden pupil"],
["洞若观火","dòng ruò guān huǒ",2,"Sees it clear as fire — and reports it wrong.","他对局势洞若观火，判断全反了。","观察清楚透彻（反讽误判）。","piercing like watch fire"],
["了如指掌","liǎo rú zhǐ zhǎng",2,"Knows it like his own palm — confidently misquoting.","他把规则说得了如指掌，全是错的。","对情况了解得极清楚（反讽）。","know like finger palm"],
["如数家珍","rú shǔ jiā zhēn",2,"Recites like family treasure — every item wrong.","他把错误参数如数家珍地列了一遍。","像数家藏珍宝一样熟悉（反讽）。","like count family treasure"],
["倒背如流","dào bèi rú liú",2,"Recites backwards like flowing water — backwards, and wrong.","他把错误答案倒背如流。","背诵得非常熟练（反讽背错）。","backwards recite like flow"],
["滚瓜烂熟","gǔn guā làn shú",2,"Rotten-melon fluent — memorized, digested, wrong.","口诀滚瓜烂熟，一到考试全忘。","背诵纯熟（反讽关键时刻掉链）。","roll melon rotten cooked"],
["分毫不差","fēn háo bù chà",2,"Not a hair off — precisely, exactly wrong.","他分毫不差地抄错了题号。","丝毫不差（反讽精准错误）。","minute hair not differ"],
["百发百中","bǎi fā bǎi zhòng",2,"A hundred shots, a hundred hits — the wall took them all.","他百发百中地避开了所有正确选项。","箭无虚发（反讽全错）。","hundred shoot hundred hit"],
["干净利落","gān jìng lì luò",1,"Clean and crisp — the mess left behind disagrees.","他干净利落地把资料全删了。","办事爽快利落（反讽闯祸也快）。","clean crisp sharp done"],
["纹丝不动","wén sī bù dòng",2,"Moved not a thread — through every plea for help.","我们喊了半天，他纹丝不动地刷手机。","一点儿也不动（反讽袖手旁观）。","thread silk not move"]
];

mergeBulk(BULK_PRAISE7, "praise");
mergeBulk(BULK_ARGUE7, "argue");
mergeBulk(BULK_SARCASM7, "sarcasm");
