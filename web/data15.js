/* Batch 15: +15 praise (strategy & rescue), +15 argue (decline chain), +30 sarcasm (grand words for paperwork & premature victory). */

const BULK_PRAISE14 = [
["远见卓识","yuǎn jiàn zhuó shí",2,"Far vision, outstanding insight — bought the land before the highway came.","他当年远见卓识，提前买下了这片地。","远大的眼光和高明的见识。","far vision outstanding insight"],
["运筹帷幄","yùn chóu wéi wò",2,"Plots strategy in the command tent — wins before the battle starts.","他运筹帷幄，决胜于千里之外。","在后方制定作战策略。","plotting strategy command tent"],
["决胜千里","jué shèng qiān lǐ",3,"Victory decided a thousand li away.","好的计划能决胜千里。","确定就能赢得远方战场上的胜利。","decide victory thousand li"],
["雄才大略","xióng cái dà lüè",3,"Heroic talent, grand strategy.","开国者无不是雄才大略。","非常杰出的才智和谋略。","heroic talent grand strategy"],
["力挽狂澜","lì wǎn kuáng lán",3,"Forces back the raging tide — one person against the waterfall.","他在最后关头力挽狂澜。","尽力挽回险恶的局势。","force save wild waves"],
["化险为夷","huà xiǎn wéi yí",2,"Turns danger into safety.","他的冷静让全队化险为夷。","使危险的情况变为平安。","turn danger into safety"],
["转危为安","zhuǎn wēi wéi ān",2,"Turns peril into peace.","经过抢救病人转危为安。","从危险转为平安。","turn peril into peace"],
["逢凶化吉","féng xiōng huà jí",2,"Meets doom, turns it lucky — every time.","他这一生总能逢凶化吉。","遭遇凶险而化为吉祥。","meet doom turn lucky"],
["绝处逢生","jué chù féng shēng",2,"In the desperate place, meets life.","资金链断裂时绝处逢生。","在最危险的时候得到生路。","desperate place meet life"],
["起死回生","qǐ sǐ huí shēng",3,"Raises the dead, returns the life — the doctor's ultimate review.","老中医起死回生，救回了病危的老人。","把快要死的人医活。","raise dead return life"],
["手到病除","shǒu dào bìng chú",2,"Hand arrives, illness removed.","这位军医手到病除。","一治疗病就好了。","hand arrives illness removed"],
["药到病除","yào dào bìng chú",2,"Medicine arrives, illness cured.","祖传的方子药到病除。","药一用病就好了。","medicine arrives illness cured"],
["对症下药","duì zhèng xià yào",2,"Match the symptom, prescribe the medicine.","解决问题要对症下药。","针对具体问题采取有效措施。","match symptom prescribe medicine"],
["量体裁衣","liàng tǐ cái yī",2,"Measure the body, cut the clothes — every store gets its own plan.","三家门店量体裁衣，各有方案。","按实际情况制定办法。","measure body cut clothes"],
["因地制宜","yīn dì zhì yí",2,"By the land, apply the methods.","开发区因地制宜，各走各路。","根据当地情况制定办法。","by land apply methods"]
];

const BULK_ARGUE14 = [
["倒果为因","dào guǒ wéi yīn",2,"Takes the effect as the cause — blames the smoke for the fire.","他把结果当原因，倒果为因。","颠倒因果关系。","take effect as cause"],
["因小失大","yīn xiǎo shī dà",2,"For something small, loses something big.","贪两块钱便宜丢了客户，因小失大。","为了小的利益造成大的损失。","for small lose big"],
["得不偿失","dé bù cháng shī",2,"The gain cannot repay the loss.","赢了官司赔了三倍钱，得不偿失。","得到的抵不上失去的。","gain not repay loss"],
["事与愿违","shì yǔ yuàn wéi",2,"Things clash with wishes — every plan, exactly.","想给孩子惊喜结果吓哭了他，事与愿违。","事情的发展与愿望相反。","things with wishes clash"],
["弄巧成拙","nòng qiǎo chéng zhuō",2,"Tried to be clever, became clumsy.","他想耍个聪明结果弄巧成拙。","本想耍弄巧结果反而坏了事。","try clever become clumsy"],
["画蛇添足","huà shé tiān zú",2,"Paints the snake, then adds feet.","最后一步改动纯属画蛇添足。","做多余的事反而不妥。","paint snake add feet"],
["适得其反","shì dé qí fǎn",2,"Gets exactly the opposite.","说教式的警告适得其反。","结果和愿望正好相反。","get exactly the opposite"],
["一落千丈","yī luò qiān zhàng",2,"One fall, a thousand zhang down.","该剧评分一落千丈。","地位声望急剧下降。","one fall thousand zhang"],
["一泻千里","yī xiè qiān lǐ",2,"One pour, a thousand li — the stock chart says it all.","开盘后股价一泻千里。","江河奔流直下，也指文笔奔放。","one pour thousand li"],
["江河日下","jiāng hé rì xià",2,"Rivers sinking lower by the day.","并购之后公司江河日下。","情况一天天坏下去。","rivers days declining on"],
["每况愈下","měi kuàng yù xià",2,"Every situation, more down than the last.","他的身体每况愈下。","情况越来越坏。","every situation more down"],
["日薄西山","rì bó xī shān",2,"The sun nearing the western hills — the end is in sight.","旧王朝日薄西山。","衰老的人临近死亡或腐朽事物临近灭亡。","sun nears west hills"],
["气息奄奄","qì xī yǎn yǎn",2,"Breath faint, barely hanging on.","这家公司气息奄奄。","形容呼吸微弱，快要断气。","breath faint dying weak"],
["行将就木","xíng jiāng jiù mù",2,"Soon approaching the coffin.","这套过时的系统行将就木。","寿命不长，快要进棺材了。","soon approaching the coffin"]
];

const BULK_SARCASM14 = [
["高度重视","gāo dù zhòng shì",1,"Highly values, firmly attaches — then changes nothing.","事故后通报高度重视，然后没有了然后。","非常重视（反讽只说不做）。","highly value attach importance"],
["深入贯彻","shēn rù guàn chè",2,"Deeply implements, thoroughly threads — banners everywhere, action nowhere.","标语贴满墙，深入贯彻全靠嘴。","认真落实（反讽只在口号）。","deeply implement thread through"],
["全面落实","quán miàn luò shí",2,"Fully implemented in all respects — one checklist item, checked.","三十项整改全面落实了一项。","全部落实到位（反讽）。","fully every aspect land settled"],
["认真整改","rèn zhēn zhěng gǎi",2,"Earnestly rectifies, seriously reforms — the report was beautiful.","整改报告写得情真意切，认真整改。","认真改正（反讽只改报告）。","earnestly rectify serious reform"],
["防微杜渐","fáng wēi dù jiàn",2,"Guards the subtle, blocks the early — started right after the fire.","火灾之后他们才强调防微杜渐。","在错误刚冒头时就加以防止（反讽太晚）。","guard slight block spread"],
["未雨绸缪","wèi yǔ chóu móu",1,"Binds the thatch before the rain — or repairs the roof in the storm.","暴雨中他们抢修屋顶，号称未雨绸缪。","事先做好准备（反讽临时抱佛脚）。","before rain bind thatch"],
["有备无患","yǒu bèi wú huàn",1,"Prepared, so no trouble — prepared a speech about being prepared.","他准备了一篇关于有备无患的发言，没准备货。","事先有准备就不会出祸患（反讽）。","prepared then no trouble"],
["防患未然","fáng huàn wèi rán",2,"Prevents trouble before it forms — the alarm rang; prevention adjourned.","警报响过他们才讨论防患未然。","在祸患形成前加以防止（反讽）。","prevent trouble not formed"],
["亡羊补牢","wáng yáng bǔ láo",2,"Loses the sheep, mends the pen — the fifth sheep, the same open gate.","第五只羊丢了才修围栏，亡羊补牢。","出了问题再想办法补救（反讽屡丢屡补）。","lose sheep mend pen"],
["引以为戒","yǐn yǐ wéi jiè",2,"Takes it as a warning — then copies the method.","别的部门引以为戒，把甩锅方式学了个遍。","吸取教训作为警戒（反讽学错）。","take it as warning"],
["举棋不定","jǔ qí bù dìng",2,"Raises the chess piece, cannot decide — six meetings, zero moves.","开了六次会还在举棋不定。","犹豫不决拿不定主意。","lift stone cannot decide"],
["一鼓作气","yī gǔ zuò qì",2,"First drum rallies the spirit — by the third, everyone went home.","一鼓作气开了个头，就没了下文。","趁劲头大一口气完成（反讽半途而废）。","first drum rally spirit"],
["乘胜追击","chéng shèng zhuī jī",2,"Rides the victory, chases on — straight into a wall.","乘胜追击地投了十倍广告，血本无归。","趁着胜利继续追击（反讽追错）。","ride victory chase on"],
["势如破竹","shì rú pò zhú",2,"Momentum like splitting bamboo — through every safeguard.","新功能势如破竹地冲垮了所有防护。","形势像破竹一样顺利（反讽破坏顺利）。","momentum like split bamboo"],
["长驱直入","cháng qū zhí rù",2,"Long drive, straight in — the error shipped to production unreviewed.","错误代码长驱直入上线了。","长距离无人阻挡地挺进（反讽直进事故）。","long drive straight into"],
["直捣黄龙","zhí dǎo huáng lóng",3,"Strikes straight to Huanglong — the bug reached the database itself.","这次事故直捣黄龙，核心库都删了。","直接攻击对方老巢（反讽捅到底）。","strike smash Huanglong city"],
["所向披靡","suǒ xiàng pī mǐ",2,"Wherever aimed, all swept away — the typo erased every backup.","那个手滑的操作所向披靡，删光了备份。","力量所到之处一切被扫清（反讽）。","wherever aimed swept away"],
["攻无不克","gōng wú bù kè",2,"Every attack conquers — including the ones against ourselves.","这套流程攻无不克，连自己人都拦。","每攻必克（反讽都攻错）。","attack none not conquered"],
["战无不胜","zhàn wú bù shèng",2,"Undefeated in every battle — all of them losses.","他战无不胜地输掉了每一场辩论。","每战必胜（反讽全败）。","battle none not won"],
["百战百胜","bǎi zhàn bǎi shèng",2,"A hundred battles, a hundred victories — all against our own team.","内斗上百战百胜，对外一败涂地。","每战必胜（反讽内战内行）。","hundred battles hundred victories"],
["连战连捷","lián zhàn lián jié",2,"Battle after battle, victorious — the reports say so, anyway.","周报里连战连捷，项目早就黄了。","接连胜利（反讽纸面胜利）。","battle after battle victorious"],
["高歌猛进","gāo gē měng jìn",2,"Loud songs, fierce advance — marching straight toward bankruptcy.","公司高歌猛进地冲向破产。","高声歌唱勇猛前进（反讽）。","loud songs fierce advance"],
["高奏凯歌","gāo zòu kǎi gē",2,"Loudly plays the triumph song — while the servers play smoke.","年会高奏凯歌，机房半夜冒烟。","演奏胜利的乐曲（反讽）。","loudly play triumph song"],
["捷报频传","jié bào pín chuán",2,"Victory reports arriving frequently — none from reality.","周报里捷报频传，客户全跑光了。","胜利的消息接连传来（反讽）。","victory reports frequently arrive"],
["硕果累累","shuò guǒ lěi lěi",2,"Great fruits dangling dense — on the tree of consequences.","他造的孽硕果累累。","成果丰富（反讽恶果多）。","great fruits dangling dense"],
["满腹经纶","mǎn fù jīng lún",2,"A belly full of statecraft manuals — and a codebase full of bugs.","他满腹经纶，一行代码都写不对。","很有学问和才干（反讽纸上谈兵）。","belly full statecraft manuals"],
["博闻强识","bó wén qiáng shí",2,"Broad-heard, strong-memory — all of it wrong facts.","他博闻强识地背错了所有数据。","见识广博，记忆力强（反讽记错）。","broad heard strong memory"],
["过目不忘","guò mù bù wàng",2,"Pass the eyes, never forget — except the password, five times today.","他过目不忘，却忘了五次密码。","看过就不忘（反讽选择性记忆）。","pass eyes not forget"],
["三思而行","sān sī ér xíng",2,"Thinks thrice, then acts — wrong every single time.","三思而行地选了最差的方案。","反复考虑后再做（反讽想也白想）。","think thrice then act"],
["谋定后动","móu dìng hòu dòng",2,"Plan settled, then move — settled for a year, never moved.","谋定后动地筹备了一年，还没开始。","计划好再行动（反讽只谋不动）。","plan settled then move"]
];

mergeBulk(BULK_PRAISE14, "praise");
mergeBulk(BULK_ARGUE14, "argue");
mergeBulk(BULK_SARCASM14, "sarcasm");
