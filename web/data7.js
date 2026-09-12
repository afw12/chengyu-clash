/* Batch 7: +15 praise, +15 argue, +20 sarcasm. */

const BULK_PRAISE5 = [
["卓尔不群","zhuó ěr bù qún",2,"Standing tall above the crowd — excellence with its own postcode.","他的设计在业内卓尔不群。","优秀卓越，超出常人。","outstanding apart not crowd"],
["玉树临风","yù shù lín fēng",2,"A jade tree in the breeze — effortless elegance.","他往门口一站，玉树临风。","风度潇洒，姿容秀美。","jade tree face wind"],
["风流倜傥","fēng liú tì tǎng",2,"Charm with no off switch.","年轻时的他风流倜傥。","有才华而又洒脱不拘。","charm free unrestrained elegant"],
["文质彬彬","wén zhì bīn bīn",1,"Refined to the bones — manners as second nature.","他说话轻声细语，文质彬彬。","举止文雅，有礼貌。","culture nature refined refined"],
["谈笑风生","tán xiào fēng shēng",2,"Talk and laughter with wind rising — zero dull minutes around them.","饭桌上有他在就谈笑风生。","有说有笑，兴致很高。","talk laugh wind rise"],
["从容不迫","cóng róng bú pò",2,"Calm and unhurried — chaos simply not on today's schedule.","大考当前他从容不迫。","非常镇静，不慌不忙。","calm composed not hurried"],
["泰然自若","tài rán zì ruò",2,"Mountain-calm and entirely themselves.","全场慌乱只有他泰然自若。","心情安定，毫不在意。","calm thus self same"],
["处变不惊","chǔ biàn bù jīng",2,"Meets upheaval without blinking.","服务器半夜崩了，他处变不惊。","面对变故镇定自若。","handle change not startled"],
["正气凛然","zhèng qì lǐn rán",2,"Righteous air you can feel from across the street.","他往那一站就有一股正气凛然的气场。","正气威严，不可侵犯。","righteous air awe inspiring"],
["平步青云","píng bù qīng yún",2,"Walking up into the blue clouds — career on an escalator.","他三年从科员到处长，平步青云。","顺利升到很高的地位。","flat step blue clouds"],
["扶摇直上","fú yáo zhí shàng",2,"Riding the whirlwind straight up.","短视频账号粉丝扶摇直上。","地位、名声急速上升。","ride whirlwind straight up"],
["前程似锦","qián chéng sì jǐn",2,"A future brocade-bright.","拿到 offer 的他前程似锦。","前途像锦绣一样美好。","future road like brocade"],
["大展宏图","dà zhǎn hóng tú",2,"Unfurling the grand blueprint at last.","新公司让他终于能大展宏图。","放手实施宏伟的计划。","great unfold grand blueprint"],
["锦绣前程","jǐn xiù qián chéng",2,"A road embroidered with possibilities.","这么好的平台，锦绣前程就在脚下。","像锦绣一样美好的前途。","brocade embroidered future road"],
["挥洒自如","huī sǎ zì rú",2,"Wields it like breathing — total freedom of craft.","他演奏起来挥洒自如。","技艺纯熟，毫无拘束。","wield splash self freely"]
];

const BULK_ARGUE5 = [
["嗤之以鼻","chī zhī yǐ bí",2,"Snorts at it — contempt with sound effects.","对我的建议他嗤之以鼻。","用鼻子哼气，表示看不起。","snort it with nose"],
["不屑一顾","bù xiè yī gù",2,"Not worth a single glance.","他的解释我不屑一顾。","认为不值得一看，表示轻视。","not worth one glance"],
["满不在乎","mǎn bù zài hu",2,"Full-time not caring — consequences optional.","迟到了他还满不在乎地笑。","完全不放在心上。","fully not care about"],
["置若罔闻","zhì ruò wǎng wén",2,"Your words were received, logged, and officially ignored.","提醒了三遍，他置若罔闻。","放在一边不管，好像没听见。","place as if not heard"],
["充耳不闻","chōng ěr bù wén",2,"Ears stuffed full of no.","劝了他一整年，他充耳不闻。","塞住耳朵不听。","stuff ears not hear"],
["视而不见","shì ér bù jiàn",2,"Looked straight at it and reported nothing there.","我对他的暗示视而不见。","看见了却当作没看见。","look yet not see"],
["敷衍塞责","fū yǎn sè zé",2,"Brushwork as damage control.","他回邮件就一句话，敷衍塞责。","做事马虎应付，推卸责任。","brush over plug duty"],
["虚与委蛇","xū yǔ wēi yí",2,"Politely fake engagement — nodding at you while already gone.","他对所有提议都虚与委蛇，从不当面拒绝。","表面敷衍应酬，虚情假意。","empty with drift snake"],
["一意孤行","yī yì gū xíng",2,"One will, walking alone — advice-proof.","全组反对他还是一意孤行。","不听劝告，固执地按自己的意思做。","one will alone walk"],
["蛮不讲理","mán bù jiǎng lǐ",2,"A reason-free arguing zone.","他蛮不讲理，谁劝跟谁急。","态度粗暴，不讲道理。","fierce not speak reason"],
["强人所难","qiǎng rén suǒ nán",2,"Forcing people into the impossible — and calling it teamwork.","让新手一周上线，强人所难。","勉强别人做办不到的事。","force people do hard"],
["咄咄逼人","duō duō bī rén",2,"Every sentence a shove.","他连珠炮式的提问咄咄逼人。","气势汹汹，盛气凌人。","heckle heckle press people"],
["气势汹汹","qì shì xiōng xiōng",2,"Arrives pre-heated for a fight.","他气势汹汹地闯进办公室。","盛怒凶狠的气势。","momentum posture surging surging"],
["张牙舞爪","zhāng yá wǔ zhǎo",2,"Teeth bared, claws out — the full menace show.","他张牙舞爪地吓唬小孩。","形容凶相毕露，猖狂凶恶。","bare teeth wave claws"],
["耀武扬威","yào wǔ yáng wēi",2,"Flexing authority nobody ever issued.","他戴上新袖标就耀武扬威。","炫耀武力，显示威风。","show might wave prestige"]
];

const BULK_SARCASM5 = [
["口口声声","kǒu kǒu shēng shēng",1,"Mouth after mouth, declaring — said constantly, done never.","他口口声声要早睡，凌晨三点还在打游戏。","把某说法经常挂在嘴边（多含不满）。","mouth mouth voice voice"],
["头头是道","tóu tóu shì dào",1,"Every point perfectly reasoned — shame the conclusion fell off a cliff.","他输棋之后分析得头头是道。","说话做事很有条理（可反讽）。","head head right path"],
["有理有据","yǒu lǐ yǒu jù",1,"Reasoned and evidenced — beautifully, confidently wrong.","他的错误结论论证得有理有据。","有道理有依据（可反讽）。","have reason have evidence"],
["引经据典","yǐn jīng jù diǎn",2,"Quotes the classics — to defend the indefensible.","为证明香菜难吃他引经据典写了千字文。","引用经典著作来论证（可反讽）。","quote classics cite canon"],
["旁征博引","páng zhēng bó yǐn",2,"Evidence from everywhere — relevance optional.","讨论泡面甜咸他旁征博引了半小时。","广泛引用材料（可反讽）。","sides cite broad quote"],
["苦口婆心","kǔ kǒu pó xīn",1,"Bitter mouth, granny heart — endless well-meant nagging.","我妈苦口婆心劝了三年让我别熬夜。","善意又不厌其烦地劝告（可反讽唠叨）。","bitter mouth granny heart"],
["语重心长","yǔ zhòng xīn cháng",2,"Words heavy with heart — the lecture that never ends.","领导找我语重心长地谈了两小时。","言辞恳切，情意深长（可反讽说教）。","words heavy heart long"],
["循循善诱","xún xún shàn yòu",2,"Step-by-step guidance — gently leading you astray.","销售循循善诱，我买了三件不需要的东西。","善于有步骤地引导（可反讽）。","step step good guide"],
["谆谆教诲","zhūn zhūn jiào huì",2,"Earnest teaching on infinite loop — asked for or not.","他的谆谆教诲又开始了，主题还是早睡。","恳切耐心的教导（可反讽说教）。","earnest earnest teach instruct"],
["和颜悦色","hé yán yuè sè",1,"Pleasant face, gentle tones — right before the criticism lands.","我妈和颜悦色地说：我们来谈谈成绩吧。","脸色和蔼（可反讽先礼后兵）。","gentle face pleased color"],
["满面春风","mǎn miàn chūn fēng",1,"Spring breeze across the whole face — suspiciously happy.","他满面春风地宣布：这周末加班！","满面笑容（可反讽不怀好意）。","full face spring wind"],
["笑容可掬","xiào róng kě jū",1,"A smile you could scoop into a basket — salesperson standard issue.","推销员笑容可掬地敲开了我家的门。","笑容明显外露（可反讽）。","smile face can scoop"],
["兴致勃勃","xìng zhì bó bó",1,"High spirits, fully fueled — for spectating the chaos.","他兴致勃勃地围观我俩吵架，还嗑上了瓜子。","兴趣很浓的样子（可反讽看热闹）。","interest mood thriving thriving"],
["津津有味","jīn jīn yǒu wèi",1,"Savoring every bit — of your misfortune's storyline.","他津津有味地听完了我的倒霉经历。","兴味浓厚（可反讽幸灾乐祸）。","relish relish have flavor"],
["全神贯注","quán shén guàn zhù",2,"Full divine attention — aimed at the game, not the guest.","他全神贯注打游戏，我进门三分钟都没被发现。","注意力高度集中（可反讽）。","whole spirit pour focus"],
["聚精会神","jù jīng huì shén",2,"Gathered essence, focused spirit — locked on the phone screen.","我说了半天，他聚精会神地盯着手机。","集中注意力（可反讽）。","gather essence meet spirit"],
["目不转睛","mù bù zhuǎn jīng",1,"Eyes locked, unblinking — staring-contest champion energy.","他目不转睛地看了三小时直播。","眼睛一动不动地盯着（可反讽）。","eye not turn pupil"],
["嘘寒问暖","xū hán wèn nuǎn",1,"Asks if you're cold, asks if you're warm — collecting intel or opening a sales pitch.","客服嘘寒问暖三分钟后开始推销套餐。","关切地问冷问暖（可反讽别有用心）。","ask cold ask warm"],
["关怀备至","guān huái bèi zhì",2,"Care stocked to the ceiling — itemized and settled at the next argument.","他的关怀备至都会在吵架时逐条清算。","关心照顾得非常周到（可反讽）。","care concern fully arrive"],
["郑重其事","zhèng zhòng qí shì",2,"Dead-serious ceremony — for the most trivial announcements.","他郑重其事地宣布袜子不能配凉鞋。","严肃认真地对待（可反讽小题大做）。","solemn weight its matter"]
];

mergeBulk(BULK_PRAISE5, "praise");
mergeBulk(BULK_ARGUE5, "argue");
mergeBulk(BULK_SARCASM5, "sarcasm");
