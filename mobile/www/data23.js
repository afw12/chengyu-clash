/* Batch 23: +25 praise (diligence, loyalty, family virtue), +25 sarcasm (grand occasions & hollow fluency). */

const BULK_PRAISE19 = [
["勤学好问","qín xué hào wèn",1,"Diligent in study, inquisitive in asking — the student template.","他从小勤学好问，成绩一直名列前茅。","勤奋学习，不懂就问。","diligent study inquisitive asking"],
["程门立雪","chéng mén lì xuě",3,"Stood in the snow at the master's door — waiting to learn.","为了拜师他程门立雪等了一上午。","尊敬师长，诚恳求学。","at Master Cheng door standing in snow"],
["磨穿铁砚","mó chuān tiě yàn",2,"Ground straight through an iron inkstone.","他苦练书法磨穿铁砚。","读书刻苦，治学持之以恒。","grind through iron inkstone"],
["勤能补拙","qín néng bǔ zhuō",1,"Diligence offsets clumsiness — practice is the shortcut.","他天资一般，但勤能补拙。","勤奋能够弥补天资的不足。","diligence can offset clumsiness"],
["天道酬勤","tiān dào chóu qín",2,"Heaven rewards the diligent.","天道酬勤，他的付出终于有了回报。","上苍会回报勤奋的人。","heaven rewards the diligent"],
["大义灭亲","dà yì miè qīn",3,"Great justice destroys even kin.","他大义灭亲举报了弟弟。","为维护正义不惜牺牲亲情。","great justice destroys kin"],
["义无反顾","yì wú fǎn gù",2,"Righteousness without looking back.","为救灾他义无反顾奔赴一线。","为正义勇往直前绝不退缩。","righteousness without looking back"],
["慷慨赴义","kāng kǎi fù yì",3,"Impassioned devotion, toward righteousness — going calmly to the sacrifice.","烈士慷慨赴义，视死如归。","为正义而英勇献身。","impassioned devoted toward righteousness"],
["义正词严","yì zhèng cí yán",2,"Reason upright, words stern.","他义正词严地驳斥了谣言。","道理正当，措辞严肃。","reason upright words stern"],
["深明大义","shēn míng dà yì",2,"Deeply understands the big cause.","她深明大义，支持丈夫上前线。","了解大局，识大体。","deeply understands big cause"],
["通权达变","tōng quán dá biàn",2,"Weighs expediency, adapts to change.","管理者要通权达变。","为了顾全大局而灵活变通。","weigh expediency adapt change"],
["随机应变","suí jī yìng biàn",2,"Adapts to the changing circumstances — no script survives him.","主持人随机应变，救场无数。","随着情况灵活应付。","adapt to changing circumstances"],
["卧冰求鲤","wò bīng qiú lǐ",3,"Lay on the ice to seek the carp — filial devotion at freezing point.","卧冰求鲤的孝道故事流传千年。","孝敬父母到了极点。","lie ice seek carp"],
["彩衣娱亲","cǎi yī yù qīn",2,"Colorful clothes to delight aged parents — seventy, and still the child performer.","七十岁的他彩衣娱亲，逗父母开心。","穿彩衣逗父母高兴尽孝。","colorful clothes delight parents"],
["晨昏定省","chén hūn dìng xǐng",1,"Morning and evening greetings, settled and kept.","他坚持每天晨昏定省探望父母。","早晚向父母请安问好。","morning evening settled greetings"],
["承欢膝下","chéng huān xī xià",1,"Bringing joy at the parents' knees.","儿女承欢膝下是老人最大的幸福。","在父母跟前伺候逗其欢喜。","bringing joy knees beneath"],
["巾帼英雄","jīn guó yīng xióng",3,"A woman warrior among heroes.","花木兰是巾帼英雄的典范。","女中豪杰。","female warrior hero heroine"],
["女中豪杰","nǚ zhōng háo jié",2,"A heroine among women.","她刚毅果敢，是女中豪杰。","女性中的杰出人物。","woman among heroic outstanding"],
["心地善良","xīn dì shàn liáng",1,"A heart that is kind and benevolent.","她心地善良，见不得别人受苦。","心地纯真，待人友善。","heart kind good benevolent"],
["慈眉善目","cí méi shàn mù",1,"Kind brows, gentle eyes.","庙里的老居士慈眉善目。","形容慈祥善良的样子。","kind brows gentle eyes"],
["仁至义尽","rén zhì yì jìn",2,"Benevolence to the utmost, righteousness to the end.","公司对她仁至义尽，是她自己要走。","对人的善意和帮助到了极限。","benevolence utmost righteousness complete"],
["广结善缘","guǎng jié shàn yuán",1,"Widely forms good karma.","他广结善缘，走到哪儿都有人帮。","多行善事得到众人好感。","widely form good karma"],
["爱民如子","ài mín rú zǐ",2,"Loves the people as his own children.","这位清官爱民如子。","旧时称赞官员爱护百姓。","loves people as children"],
["清正廉洁","qīng zhèng lián jié",2,"Clean, upright, honest, uncorrupt.","他一生清正廉洁，两袖清风。","品行端正，廉洁自律。","clean upright honest uncorrupt"],
["政通人和","zhèng tōng rén hé",2,"Governance smooth, people harmonious.","新政之后当地政通人和。","政事顺遂，人民和乐。","governance smooth people harmonious"]
];

const BULK_SARCASM19 = [
["满怀信心","mǎn huái xìn xīn",1,"Full of confident faith — right up to the results announcement.","他满怀信心地交卷，然后不及格。","心中充满自信（反讽自信落空）。","full of confident faith"],
["雄心勃勃","xióng xīn bó bó",2,"Grand ambition surging, surging — the plan died in week one.","他雄心勃勃地办了健身房，三个月就倒闭了。","雄心很大（反讽创业失败）。","grand ambition surging surging"],
["热情洋溢","rè qíng yáng yì",2,"Warmth brimming, overflowing — the salesman's default mode.","销售热情洋溢地介绍了三小时。","热情充分流露（反讽过度推销）。","warmth feeling brimming overflowing"],
["热火朝天","rè huǒ cháo tiān",1,"Hot fire toward the sky — busy as chaos.","办公室里热火朝天，成果为零。","场面热烈高涨（反讽忙而无果）。","hot fire toward sky"],
["干劲十足","gàn jìn shí zú",1,"Work drive at ten-tenths full — direction at zero.","他干劲十足地跑错了方向。","干活的劲头很大（反讽方向错）。","work drive ten full"],
["摩肩接踵","mó jiān jiē zhǒng",2,"Shoulders rubbing, heels touching — personal space abolished.","早高峰的地铁摩肩接踵。","肩碰肩脚碰脚，人多拥挤。","shoulders rub heels touch"],
["万人空巷","wàn rén kōng xiàng",2,"Myriad households empty, lanes jammed — for a supermarket coupon.","超市打折万人空巷。","家家户户的人都从巷里出来（反讽为小利）。","myriad households empty lanes"],
["车水马龙","chē shuǐ mǎ lóng",2,"Carriages like water, horses like dragons — the eternal traffic jam.","门口的车流车水马龙。","车马来往不断，繁华热闹。","carriages water horses dragon"],
["川流不息","chuān liú bù xī",2,"The river flows, never stopping — complaints included.","投诉电话川流不息。","行人车马像水流一样连续不断。","river flows never stopping"],
["张灯结彩","zhāng dēng jié cǎi",2,"Lanterns hung, festoons tied — celebrating mediocrity in style.","为完成年度指标张灯结彩。","挂上灯笼系上彩绸（反讽庆祝小事）。","hang lanterns tie festoons"],
["敲锣打鼓","qiāo luō dǎ gǔ",2,"Strikes gongs, beats drums — announcing the trivial with ceremony.","完成日常任务也要敲锣打鼓地庆祝。","大造声势（反讽小题大做）。","strike gongs beat drums"],
["载歌载舞","zài gē zài wǔ",2,"Carrying songs, carrying dances — the annual party's forced joy.","年会上大家被安排载歌载舞。","又唱歌又跳舞（反讽被安排）。","carrying songs carrying dances"],
["举国欢腾","jǔ guó huān téng",3,"The whole nation leaps and soars — over a sports win, while everything else burns.","一场球赛让举国欢腾。","全国人民共同欢庆（反讽）。","whole nation leaps soars"],
["喜气洋洋","xǐ qì yáng yáng",2,"Joy in the air, vast and vast — mandatory at company events.","年会上气氛喜气洋洋，加班照旧。","充满了欢喜的神色（反讽表面）。","joy air vast vast"],
["欢聚一堂","huān jù yì táng",2,"Joyfully gathered in one hall — by mandatory attendance.","全体员工被要求欢聚一堂。","欢乐地聚在一起（反讽强制）。","joyfully gather in hall"],
["觥筹交错","gōng chóu jiāo cuò",2,"Wine cups and tally sticks crisscrossing — deals made, livers lost.","应酬桌上觥筹交错。","酒杯酒筹交互错杂（反讽应酬）。","wine tallies crisscross mingled"],
["推杯换盏","tuī bēi huàn zhǎn",2,"Push cups, swap goblets — friendship measured in toasts.","饭局上推杯换盏称兄道弟。","互相敬酒（反讽酒肉朋友）。","push cups swap goblets"],
["酒酣耳热","jiǔ hān ěr rè",2,"Wine mellow, ears hot — every promise made now.","酒酣耳热之际他答应了一切。","喝得尽兴（反讽酒后乱承诺）。","wine mellow ears hot"],
["酒足饭饱","jiǔ zú fàn bǎo",2,"Wine sufficient, food full — actual business: zero.","酒足饭饱之后，正事一件没谈。","酒喝足了饭吃饱了（反讽只吃喝）。","wine enough food full"],
["一唱一和","yī chàng yī hè",1,"One sings, the other harmonizes — the double act of blame.","他俩一唱一和地把责任推给了我。","互相配合互相呼应（反讽）。","one sings other harmonizes"],
["遥相呼应","yáo xiāng hū yìng",2,"Echoing each other from afar — the coordinated alibi.","内外人员遥相呼应搞垮了项目。","远远地互相配合（反讽勾结）。","from afar echo responding"],
["一团和气","yī tuán hé qì",1,"One blob of harmony and warmth — no truth survives the pleasantries.","整个部门一团和气，问题没人敢提。","态度和气（反讽不敢指正）。","one blob harmony warm"],
["天下无敌","tiān xià wú dí",1,"Under heaven, no rival — the confidence speaks for the skill.","他自认为天下无敌，结果首轮出局。","天下没有对手（反讽自大）。","under heaven no rival"],
["举足轻重","jǔ zú qīng zhòng",2,"One step tips the whole scale — his own assessment of himself.","他自认举足轻重，其实可有可无。","地位重要（反讽自抬身价）。","one step light heavy"],
["无人能及","wú rén néng jí",2,"No one can match him — his performance review, written by himself.","他声称业绩无人能及。","没人能赶得上他（反讽自夸）。","no one can match"]
];

mergeBulk(BULK_PRAISE19, "praise");
mergeBulk(BULK_SARCASM19, "sarcasm");
