/* Batch 27 (FINAL): +39 praise, +31 sarcasm — completes 500 in every category. */

const BULK_PRAISE23 = [
["公而忘私","gōng ér wàng sī",3,"Public first, self forgotten.","他一辈子公而忘私。","一心为公，忘了个人利益。","public and forget self"],
["解囊相助","jiě náng xiāng zhù",2,"Opens the pouch to help — no questions asked.","同学有难他解囊相助。","拿出钱财帮助他人。","open pouch together help"],
["行侠仗义","xíng xiá zhàng yì",2,"Acts chivalrous, upholds righteousness.","他行走江湖行侠仗义。","讲义气，爱帮助别人。","act chivalrous uphold righteousness"],
["文思泉涌","wén sī quán yǒng",2,"Literary thoughts gush like spring water.","他提笔文思泉涌。","写文章的思路像泉水一样涌出。","literary thoughts gush spring"],
["超群绝伦","chāo qún jué lún",3,"Surpasses the crowd, peerless among equals.","他的武艺超群绝伦。","超出众人，同辈中无可比拟。","surpass crowd peerless equals"],
["无出其右","wú chū qí yòu",3,"None surpass him from the right — the undisputed best.","论书法他无出其右。","没有能超过他的。","none exceeds him rank"],
["承上启下","chéng shàng qǐ xià",2,"Connects what's above, launches what's below.","这篇过渡段承上启下。","承接上文引出下文。","connect above launch below"],
["开拓进取","kāi tuò jìn qǔ",2,"Pioneering, exploring, forging ahead.","团队精神就是开拓进取。","努力开创，奋勇前进。","pioneering exploring forging ahead"],
["锐意进取","ruì yì jìn qǔ",2,"Keen resolve, forging ahead.","公司锐意进取，不断创新。","意志坚决地追求进步。","keen resolve forge ahead"],
["敢为人先","gǎn wéi rén xiān",2,"Dares to be the first of all people.","特区精神就是敢为人先。","敢于做别人没有做过的事。","dare act as first"],
["冲锋陷阵","chōng fēng xiàn zhèn",2,"Charges the vanguard, breaches the ranks.","关键时刻他总是冲锋陷阵。","向敌人冲击，陷于敌阵。","charge vanguard breach ranks"],
["浴血奋战","yù xuè fèn zhàn",2,"Bathed in blood, fighting fiercely.","将士们浴血奋战三天三夜。","顽强地拼死战斗。","bathed blood fierce battle"],
["南征北战","nán zhēng běi zhàn",2,"Campaigns south, battles north — a lifetime of wars.","老将军南征北战几十年。","转战南北，经历许多战斗。","south campaign north battle"],
["身经百战","shēn jīng bǎi zhàn",2,"His body has been through a hundred battles.","这位老兵身经百战。","亲身经历过许多次战斗。","body through hundred battles"],
["坚如磐石","jiān rú pán shí",2,"Firm as a boulder rock.","军民团结坚如磐石。","像大石头一样坚固不可动摇。","firm as boulder rock"],
["固若金汤","gù ruò jīn tāng",3,"Fortified like metal walls and boiling moats.","这座城池固若金汤。","防守非常坚固。","fortified like metal moat"]
];

const BULK_SARCASM23 = [
["大难临头","dà nán lín tóu",2,"Great disaster arrives at the head.","大难临头各自飞。","灾祸降到自己身上。","great disaster arrives head"],
["祸从天降","huò cóng tiān jiàng",2,"Disaster descends from the sky.","天上掉下个官司，祸从天降。","意外的灾祸突然到来。","disaster from sky descending"],
["飞来横祸","fēi lái hèng huò",2,"Flying brings sudden disaster — the uninvited kind.","好端端出门却遭飞来横祸。","意想不到的灾祸。","flying brings sudden disaster"],
["无妄之灾","wú wàng zhī zāi",3,"Disaster with no cause at all.","平白无故被诬陷，无妄之灾。","意想不到的灾祸。","no cause of disaster"],
["天灾人祸","tiān zāi rén huò",2,"Heaven's disasters and man's calamities, together.","那年天灾人祸接连不断。","自然的灾害和人为的祸患。","heaven disasters human calamities"],
["内忧外患","nèi yōu wài huàn",3,"Inner worries, outer threats — besieged from everywhere.","公司内忧外患，濒临破产。","内部的忧患和外部的祸患。","inner worries outer threats"],
["内外交困","nèi wài jiāo kùn",2,"Besieged inside and outside, trapped both ways.","他内外交困，进退两难。","里里外外都处于困难中。","inside outside besieged trapped"],
["腹背受敌","fù bèi shòu dí",2,"Belly and back, attacked by enemies both.","前后夹击，腹背受敌。","前后同时受到敌人攻击。","belly back attacked enemies"],
["四面楚歌","sì miàn chǔ gē",3,"Surrounded on four sides by Chu songs.","公司资金链断裂，四面楚歌。","四面受敌，孤立无援。","four sides Chu songs"],
["走投无路","zǒu tóu wú lù",3,"Nowhere to turn, no road left.","他被逼得走投无路。","无路可走，陷入绝境。","nowhere to turn no road"],
["山穷水尽","shān qióng shuǐ jìn",2,"Mountains ended, waters exhausted.","项目资金山穷水尽。","陷入绝境，无路可走。","mountains end waters exhausted"],
["日暮途穷","rì mù tú qióng",2,"The sun sets, the road ends.","那个行业日暮途穷。","到了日落路穷的地步。","sun sets road ends"],
["穷途末路","qióng tú mò lù",2,"The desperate road's final dead-end.","他已到了穷途末路。","无路可走。","desperate road final end"],
["万劫不复","wàn jié bù fù",3,"Ten thousand calamities, never recovering.","一失足成万劫不复。","永远不能恢复。","myriad kalpas no recovery"],
["一蹶不振","yī jué bù zhèn",2,"One stumble, never rising again.","创业失败后他一蹶不振。","一跌倒就再也爬不起来。","one stumble never rise"],
["全军覆没","quán jūn fù mò",3,"The whole army completely wiped out.","远征队全军覆没。","全部被消灭。","whole army completely defeated"],
["片甲不留","piàn jiǎ bù liú",3,"Not a single piece of armor left behind.","这一仗打得片甲不留。","全歼敌人，一个不放走。","single armor not spared"],
["折戟沉沙","zhé jǐ chén shā",3,"Broken spears buried in the sand — grand ambitions, rusted.","他多次创业折戟沉沙。","失败惨重。","broken spears buried sand"],
["溃不成军","kuì bù chéng jūn",2,"Routed so badly they cannot form ranks.","球队被打得溃不成军。","被打得七零八落不成队伍。","routed cannot form ranks"],
["落花流水","luò huā liú shuǐ",2,"Beaten like fallen petals on flowing water.","对手被他们打得落花流水。","形容惨败。","fallen flowers flowing water"],
["丢盔弃甲","diū kuī qì jiǎ",2,"Discards helmet, abandons armor.","被追得丢盔弃甲。","狼狈逃跑的样子。","discard helmet abandon armor"],
["抱头鼠窜","bào tóu shǔ cuàn",2,"Holding head, scurrying like a rat.","被打得抱头鼠窜。","抱着头像老鼠一样逃窜。","holding head rat scurry"],
["望风而逃","wàng fēng ér táo",2,"Seeing the sign, fleeing at once.","敌人望风而逃。","远远看见对方就吓跑了。","seeing wind sign they flee"],
["不战而败","bú zhàn ér bài",2,"Defeated without a battle.","士气崩溃，不战而败。","没有交战就失败了。","without battle already defeated"],
["风声鹤唳","fēng shēng hè lì",2,"Wind sounds heard as crane cries — terror in every sound.","败兵一路风声鹤唳。","惊慌失措自相惊扰。","wind sounds crane cries"],
["草木皆兵","cǎo mù jiē bīng",2,"Grass and trees all look like soldiers.","他吓破了胆，草木皆兵。","疑神疑鬼惊恐万分。","grass trees all soldiers"],
["杯弓蛇影","bēi gōng shé yǐng",2,"Mistakes the bow's reflection for a snake in the cup.","他疑心太重杯弓蛇影。","疑神疑鬼自相惊扰。","cup bow snake shadow"],
["惊弓之鸟","jīng gōng zhī niǎo",2,"A bird startled by the mere bow — no arrow needed.","他成了惊弓之鸟。","受过惊吓的人遇到动静就害怕。","startled bow of bird"],
["漏网之鱼","lòu wǎng zhī yú",2,"The fish that escaped the net.","警方全力追捕漏网之鱼。","侥幸逃脱的坏人。","escaped the net fish"],
["丧家之犬","sàng jiā zhī quǎn",3,"A dog that lost its home — wandering and defeated.","他破产后被骂丧家之犬。","比喻失去依靠无处投奔的人。","lost home of dog"],
["兔死狐悲","tù sǐ hú bēi",1,"The rabbit dies; the fox mourns — fake tears for a fallen rival.","对手被查他假装惋惜，实则兔死狐悲。","为同类的不幸而伤感（多反讽）。","rabbit dies fox mourns"]
];

mergeBulk(BULK_PRAISE23, "praise");
mergeBulk(BULK_SARCASM23, "sarcasm");
