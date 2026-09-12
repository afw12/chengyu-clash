/* Batch 16: +25 praise (virtue & talent), +25 argue (villains & schemes), +10 sarcasm (silver tongues). */

const BULK_PRAISE15 = [
["豁达大度","huò dá dà dù",1,"Open, broad, grand, magnanimous — nothing petty gets in.","他为人豁达大度，从不计较。","胸襟开阔，气量宽宏。","open broad grand magnanimous"],
["以德报怨","yǐ dé bào yuàn",3,"Repays kindness for grudges — grace beyond the standard manual.","他以德报怨，反而提拔了挤兑过他的人。","用恩惠回报怨恨。","repay kindness for grudges"],
["通情达理","tōng qíng dá lǐ",1,"Understands feelings, reaches reason — talks like a human.","她通情达理，从不强人所难。","说话做事合情合理。","understand feelings reach reason"],
["设身处地","shè shēn chù dì",2,"Imagines yourself in there — empathy with actual math.","他总能设身处地为别人着想。","替别人着想。","imagine yourself in there"],
["将心比心","jiāng xīn bǐ xīn",1,"Compares heart to heart — the oldest empathy algorithm.","将心比心，谁都不容易。","拿自己的心比照别人的心。","compare heart to heart"],
["开诚布公","kāi chéng bù gōng",2,"Open sincerity, spread fairness — everything on the table.","有问题就开诚布公地谈。","诚意待人，坦白无私。","open sincerity spread fairness"],
["忠心耿耿","zhōng xīn gěng gěng",2,"Loyal heart, glowing and glowing — thirty years, one employer.","老张追随他三十年，忠心耿耿。","非常忠诚。","loyal heart bright bright"],
["赤胆忠心","chì dǎn zhōng xīn",3,"Red gall, loyal heart — loyalty in its purest color.","警犬赤胆忠心，救了全队人。","形容十分忠诚。","red gall loyal heart"],
["满腔热忱","mǎn qiāng rè chén",2,"A full chest of hot devotion.","她满腔热忱地投入支教。","心里充满真诚和热情。","full chest hot devotion"],
["古道热肠","gǔ dào rè cháng",2,"Ancient-way warmth in the guts — helps strangers like it's a dynasty custom.","楼下大爷古道热肠，谁家有事都帮忙。","待人真诚，热情助人。","ancient way warm guts"],
["与人为善","yǔ rén wéi shàn",1,"Treats people with kindness — as policy, not mood.","他与人为善，人缘极好。","善意对待别人。","treat people with kindness"],
["才华横溢","cái huá héng yì",2,"Talent and brilliance, spilling over the edges.","他才华横溢，随便写写都是好文章。","才华充分显露出来。","talent brilliance spilling over"],
["下笔成章","xià bǐ chéng zhāng",2,"Pen down, essay formed — no second draft needed.","她下笔成章，从不打草稿。","一写文章就写出很好的文章。","pen down becomes essay"],
["倚马可待","yǐ mǎ kě dài",2,"Lean on a horse, done on call — the ancient stand-in for deadline heroics.","他写材料倚马可待，又快又好。","文思敏捷，写文章极快。","lean horse instantly ready"],
["七步成诗","qī bù chéng shī",2,"Seven steps, one poem — the most pressured deadline in history.","他思维敏捷，七步成诗。","才思敏捷，出口成章。","seven steps become poem"],
["才思敏捷","cái sī mǐn jié",2,"Talent and thoughts, quick and nimble.","她才思敏捷，反应极快。","形容人思维敏捷。","talent thoughts quick nimble"],
["慧眼识珠","huì yǎn shí zhū",2,"Wise eyes spot pearls — the scout everyone wants.","总监慧眼识珠，把他从边缘团队挖了过来。","善于识别和发现人才。","wise eyes spot pearls"],
["独具慧眼","dú jù huì yǎn",2,"Alone possessing wise eyes — sees value where others see junk.","她独具慧眼，低价买下了后来的爆款。","能看到别人看不到的东西。","alone possess wise eyes"],
["精明强干","jīng míng qiáng gàn",2,"Shrewd, clever, capable, competent — the whole skill tree.","新来的助理精明强干。","机灵聪明，办事能力强。","shrewd clever capable competent"],
["恪尽职守","kè jìn zhí shǒu",2,"Faithfully guards duties and post — every shift, every storm.","保安大叔恪尽职守，风雨无阻。","严格遵守，尽职尽责。","faithfully guard duties post"],
["妙笔生花","miào bǐ shēng huā",2,"The magic pen blooms flowers.","他笔下妙笔生花，一句顶一万句。","写作才能杰出。","magic pen blooms flowers"],
["字字珠玑","zì zì zhū jī",2,"Every word a pearl, every word a gem.","这篇演讲字字珠玑。","说话或文章中的每个字都像珠玉一样珍贵。","every word pearl gem"],
["宽以待人","kuān yǐ dài rén",1,"Broad tolerance toward people — strict only with himself.","他严于律己宽以待人。","以宽宏大度的态度对待别人。","broad tolerance toward people"],
["严于律己","yán yú lǜ jǐ",1,"Strict on discipline, strict on self.","她严于律己，从不搞特殊。","对自己要求非常严格。","strict on discipline self"],
["见贤思齐","jiàn xián sī qí",2,"Sees the worthy, aspires to match them — humility as growth.","见贤思齐，他进步飞快。","见到有才德的人就想赶上他。","see the worthy aspire to match"]
];

const BULK_ARGUE15 = [
["恃才傲物","shì cái ào wù",2,"Relying on talent, scorning everyone — self-fired from every team.","他恃才傲物，合作过的人都拉黑了他。","仗着自己有才而骄傲自大。","relying talent scorning everyone"],
["狂妄自大","kuáng wàng zì dà",2,"Wildly arrogant, self-inflated.","他狂妄自大，从不把别人放眼里。","极端的自高自大。","wild arrogant self inflated"],
["骄傲自满","jiāo ào zì mǎn",2,"Proud and complacent — the ceiling he installed himself.","刚有起色就骄傲自满。","自高自大，满足于已有成绩。","proud complacent self satisfied"],
["自视甚高","zì shì shén gāo",2,"Self-regard: very high. Actual level: pending.","他自视甚高，其实没人服他。","把自己看得很高。","self regard very high"],
["冷若冰霜","lěng ruò bīng shuāng",2,"Cold as ice and frost — the AC has nothing on them.","新来的同事冷若冰霜。","形容待人态度极为冷淡。","cold as ice frost"],
["拒人千里","jù rén qiān lǐ",2,"Pushes people a thousand li away — before they even speak.","他总是一副拒人千里的样子。","形容态度傲慢，拒绝别人接近。","push people thousand li away"],
["不近人情","bù jìn rén qíng",2,"Far from human feelings — rules above humans, always.","他办事不近人情，一点不通融。","不合人之常情。","far from human feelings"],
["铁石心肠","tiě shí xīn cháng",2,"Iron and stone where a heart should be.","任凭对方哭诉，他铁石心肠不为所动。","心肠像铁和石头一样硬。","iron stone heart insides"],
["斩尽杀绝","zhǎn jìn shā jué",3,"Chop them all, kill them all — no quarter requested or given.","他放话要把对手斩尽杀绝。","全部杀光，一个不留。","chop all kill all"],
["赶尽杀绝","gǎn jìn shā jué",3,"Chase them all, kill them all — mercy left the chat.","他行事赶尽杀绝，从不留余地。","驱逐清除，消灭殆尽。","chase all kill all"],
["心术不正","xīn shù bù zhèng",2,"Heart-methods not upright — the compass points to trouble.","他心术不正，迟早出事。","心计不正派。","heart methods not upright"],
["居心叵测","jū xīn pǒ cè",3,"Held intentions impossible to guess — assume the worst.","他笑得太热情，居心叵测。","心存险恶，不可推测。","held intentions impossible to guess"],
["别有用心","bié yǒu yòng xīn",2,"Harboring other ulterior motives — the smile is a tool.","他对你好是别有用心。","言论或行动中另有不可告人的企图。","harboring other ulterior motives"],
["包藏祸心","bāo cáng huò xīn",3,"Concealing, harboring an evil heart — the gift has teeth.","他送来的方案包藏祸心。","心里怀着坏主意。","concealing harboring evil heart"],
["图谋不轨","tú móu bù guǐ",2,"Plotting and scheming beyond the rails.","有人图谋不轨，被保安识破了。","暗中策划违法乱纪的事。","plotting scheming beyond the rails"],
["掩人耳目","yǎn rén ěr mù",2,"Covers people's ears and eyes — the heist played in plain sight.","他用假账掩人耳目。","蒙蔽别人的耳目。","cover people ears eyes"],
["偷梁换柱","tōu liáng huàn zhù",2,"Steals the beams, swaps the pillars — the contract changed overnight.","他偷梁换柱改了合同条款。","暗中玩弄手法以假代真。","steal beams swap pillars"],
["张冠李戴","zhāng guān lǐ dài",2,"Zhang's hat on Li's head — names, facts, all shuffled.","他张冠李戴，把功劳记错了人。","弄错了对象，认错了事实。","Zhang hat Li wears"],
["借刀杀人","jiè dāo shā rén",3,"Borrows a knife to kill someone — hands stay clean.","他挑拨别人动手，自己借刀杀人。","自己不出面，利用别人害人。","borrow knife kill someone"],
["乘虚而入","chéng xū ér rù",2,"Seizes the opening and enters — trouble's favorite entrance.","他趁对方内乱乘虚而入。","趁着虚弱空虚的地方进入。","seize opening and enter"],
["罄竹难书","qìng zhú nán shū",3,"All the bamboo scrolls cannot record it.","他的罪行罄竹难书。","罪行多得写不完。","all bamboo cannot record"],
["恶贯满盈","è guàn mǎn yíng",3,"The string of evil is full and overflowing — judgment day arrived.","他恶贯满盈，终于落网。","罪恶累累，到了末日。","evil string full overflowing"],
["罪大恶极","zuì dà è jí",3,"Crime great, evil extreme — no appeals left.","他罪大恶极，人人喊打。","罪恶极其严重。","crime great evil extreme"],
["死有余辜","sǐ yǒu yú gū",3,"Dead and still owing guilt.","这种恶行死有余辜。","处死也抵偿不了罪过。","dead still owing guilt"],
["天理难容","tiān lǐ nán róng",3,"Heaven's principles cannot tolerate it.","这种行径天理难容。","天地道理所不能容忍。","heaven principles hard tolerate"]
];

const BULK_SARCASM15 = [
["生花妙笔","shēng huā miào bǐ",2,"The blooming-flower magic pen — wrote three pages, said nothing.","总结写得生花妙笔，就是没有一个数字。","文笔美妙（反讽空话连篇）。","blooming flower magic pen"],
["文采飞扬","wén cǎi fēi yáng",2,"Literary grace flying, soaring — content still at the gate.","他的检讨文采飞扬，态度毫无波动。","文笔出众（反讽避重就轻）。","literary grace flying soaring"],
["口齿伶俐","kǒu chǐ líng lì",1,"Mouth and teeth, quick and clever — never a pause for facts.","她口齿伶俐，吵架从没输过逻辑也没赢过理。","口才好能言善辩（反讽强词夺理）。","mouth teeth quick clever"],
["能言善辩","néng yán shàn biàn",2,"Able talker, good debater — wins arguments, loses friends.","他能言善辩，把责任辩成了别人的。","善于辩论（反讽狡辩）。","able talk good debate"],
["巧舌如簧","qiǎo shé rú huáng",2,"A clever tongue like a reed — bends any direction the wind blows.","他巧舌如簧，黑的能说成白的。","舌头灵巧能说会道（含贬义）。","clever tongue like reed"],
["伶牙俐齿","líng yá lì chǐ",2,"Sharp teeth, quick tongue — used exclusively on waiters.","她对服务员伶牙俐齿，对领导唯唯诺诺。","口齿伶俐能说会道（反讽欺软怕硬）。","sharp teeth quick tongue"],
["一目了然","yī mù liǎo rán",1,"One glance, all clear — the mistake was visible from orbit.","他的数据错误一目了然。","一看就清楚（反讽错误明显）。","one glance clear all"],
["显而易见","xiǎn ér yì jiàn",2,"Plain, obvious, evident, visible — everyone saw it before he denied it.","问题显而易见，他还在狡辩。","事情非常明显（反讽装看不见）。","plain obvious evident visible"],
["不言而喻","bù yán ér yù",1,"No words needed, understood — by everyone except him.","他搞砸了多少项目不言而喻。","不用说就明白（反讽）。","no words needed understood"],
["振振有词","zhèn zhèn yǒu cí",2,"Confidently, confidently holding arguments — for the indefensible.","他振振有词地把锅甩了个干净。","自以为理由充分（反讽强辩）。","confidently confidently holding arguments"]
];

mergeBulk(BULK_PRAISE15, "praise");
mergeBulk(BULK_ARGUE15, "argue");
mergeBulk(BULK_SARCASM15, "sarcasm");
