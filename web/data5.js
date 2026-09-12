/* Batch 5: +22 praise, +22 argue, +10 sarcasm. Reuses mergeBulk() from data3. */

const BULK_PRAISE3 = [
["表里如一","biǎo lǐ rú yī",1,"Same inside and out — no filter needed, because there is no gap to filter.","他为人表里如一，从不装样子。","外表和内心完全一致。","surface inside as one"],
["言行一致","yán xíng yī zhì",1,"Words and deeds in lockstep — a rare software update for a human.","承诺的事他都做到，言行一致。","说的和做的完全一样。","words deeds one consistent"],
["高风亮节","gāo fēng liàng jié",3,"High wind, bright integrity — the moral Everest.","他让掉了全部功劳，真是高风亮节。","高尚的品格和节操。","high wind bright integrity"],
["德高望重","dé gāo wàng zhòng",3,"Virtue tall, prestige heavy — the elder everyone bows to.","王老师德高望重，退休了还有人来请教。","品德高尚，声望很高。","virtue high prestige heavy"],
["任劳任怨","rèn láo rèn yuàn",2,"Takes the work AND the complaints, never one grumble.","她照顾病人十年，任劳任怨。","做事不辞辛苦，不怕埋怨。","bear toil bear blame"],
["埋头苦干","mái tóu kǔ gàn",1,"Head down, hard at it — no flash, all output.","他不声不响埋头苦干，项目全靠他。","专心致志地刻苦工作。","bury head bitter work"],
["自强不息","zì qiáng bù xī",1,"Self-strengthening, never resting.","他白天上班晚上自学，自强不息。","自己努力向上，永不松懈。","self strengthen not rest"],
["厚积薄发","hòu jī bó fā",2,"Thick accumulation, thin release — ten quiet years for one perfect shot.","他蛰伏十年才出专辑，厚积薄发。","长期积累，慢慢释放。","thick accumulate thin release"],
["博学多才","bó xué duō cái",2,"Broadly learned, multiply talented.","他博学多才，什么话题都接得住。","学问广博，有多方面才能。","broad learning many talents"],
["博古通今","bó gǔ tōng jīn",2,"Fluent in ancient AND modern — a walking library.","谈古论今他都行，博古通今。","通晓古今的事情。","broad ancient through modern"],
["见多识广","jiàn duō shí guǎng",2,"Seen much, known wide — a story for every situation.","跑遍全国做买卖，他见多识广。","见过的多，知道得广。","seen much known wide"],
["学贯中西","xué guàn zhōng xī",2,"Learning threading China and the West into one fabric.","这位教授学贯中西，讲得特别透。","学问贯通中西文化。","learning thread China West"],
["举一反三","jǔ yī fǎn sān",2,"Given one example, deduce three more — every teacher's dream student.","她学得快，总能举一反三。","从一件事情类推出其他许多事情。","raise one return three"],
["融会贯通","róng huì guàn tōng",2,"Melts separate knowledge together until it flows as one.","把两门课融会贯通后，他成绩起飞了。","把各方面知识融合贯穿，理解透彻。","melt gather thread through"],
["妙手回春","miào shǒu huí chūn",2,"Marvelous hands return the spring — doctors who fix the hopeless.","老中医妙手回春，治好了多年的老毛病。","形容医生医术高明。","marvelous hand return spring"],
["匠心独运","jiàng xīn dú yùn",2,"A craftsman's heart running its own route — original by design.","这个小店的装修匠心独运。","独创性地运用精巧的心思。","craft heart alone run"],
["鬼斧神工","guǐ fǔ shén gōng",3,"Ghost axe, divine craft — so good it cannot be human.","这座溶洞鬼斧神工，不像人间之物。","技艺精巧，非人工所能为。","ghost axe divine craft"],
["独具匠心","dú jù jiàng xīn",2,"An ingenious heart all its own.","她的婚礼请柬设计独具匠心。","具有独到的巧妙构思。","alone possess craft heart"],
["别出心裁","bié chū xīn cái",2,"Cuts a pattern nobody else even thought of.","生日惊喜别出心裁，全场泪目。","想法与众不同，别有巧思。","separately produce new pattern"],
["画龙点睛","huà lóng diǎn jīng",2,"Painting the dragon, then dotting the eyes — the last touch that brings it alive.","演讲结尾那句就是画龙点睛。","在关键处加上精辟语句，使内容更生动。","paint dragon dot eye"],
["珠联璧合","zhū lián bì hé",2,"Pearls strung, jade joined — a pairing that was always meant to be.","他俩一个写词一个作曲，珠联璧合。","杰出的人才或美好的事物聚在一起。","pearl join jade combine"],
["天作之合","tiān zuò zhī hé",2,"A match made by heaven itself — the ultimate wedding blessing.","他们俩真是天作之合。","天意安排的美满婚姻。","heaven make of union"]
];

const BULK_ARGUE3 = [
["一毛不拔","yī máo bù bá",2,"Won't pluck a single hair — not for you, not for the world.","AA十年他连纸巾都自带，一毛不拔。","形容极其吝啬。","one hair not pluck"],
["斤斤计较","jīn jīn jì jiào",2,"Weighing every jin, splitting every hair of gain.","为了两块钱运费他吵了三天，斤斤计较。","对无关紧要的事过分计较。","jin jin calculate calculate"],
["锱铢必较","zī zhū bì jiào",2,"Fighting over coins smaller than a shirt button.","连打印一张纸都要记账，锱铢必较。","对极少的钱或很小的事都计较。","coin coin must haggle"],
["小肚鸡肠","xiǎo dù jī cháng",2,"Belly of a sparrow, guts of a chicken — petty beyond measurement.","为一句玩笑记仇半年，小肚鸡肠。","气量狭小，只计较小事。","small belly chicken guts"],
["挑三拣四","tiāo sān jiǎn sì",2,"Pick at three, choose at four — nothing is ever good enough.","相亲二十次，次次挑三拣四。","过分挑剔。","pick three choose four"],
["说三道四","shuō sān dào sì",2,"Talking three and four — commentary on everyone's life, none of it requested.","她自己啥也不干，专爱说三道四。","随意评论别人。","speak three talk four"],
["品头论足","pǐn tóu lùn zú",2,"Grading heads, reviewing feet — unsolicited reviews of all humans present.","亲戚聚会就是品头论足现场。","对人或事物随便评论、挑剔。","grade head comment foot"],
["指手画脚","zhǐ shǒu huà jiǎo",2,"Pointing hands, drawing feet — commanding without ever lifting anything.","他站在旁边指手画脚，自己不动手。","瞎指挥，随意批评。","point hands draw feet"],
["颐指气使","yí zhǐ qì shǐ",2,"Issues commands with the chin, not the voice — arrogance at maximum efficiency.","她对实习生颐指气使。","用面部表情和气势指挥人，傲慢。","chin point air command"],
["趾高气扬","zhǐ gāo qì yáng",2,"Toes pointed skyward, pride sailing on the wind.","赢了一局就开始趾高气扬。","骄傲自满，得意忘形。","toes high air floating"],
["得意忘形","dé yì wàng xíng",2,"So pleased, they forget their own shape entirely.","他刚被夸两句就得意忘形。","高兴得失去常态。","proud gain forget form"],
["花里胡哨","huā lǐ hú shào",2,"Flower-pattern chaos — loud, gaudy and hollow.","这页面做得花里胡哨，啥也找不到。","颜色花样过多，过于华丽。","flower inside wild whistle"],
["夸夸其谈","kuā kuā qí tán",2,"Grand talk on infinite loop — a wind machine with a mouth.","计划讲得天花乱坠，执行为零，纯夸夸其谈。","说话浮夸，不切实际。","boast boast its talk"],
["言不由衷","yán bù yóu zhōng",2,"Words that never left the heart — because they never came from it.","他的道歉言不由衷。","说的不是真心话。","words not from heart"],
["两面三刀","liǎng miàn sān dāo",2,"Two faces, three knives — good luck finding the real smile.","她当面一套背后一套，两面三刀。","当面一套，背后一套。","two faces three knives"],
["口无遮拦","kǒu wú zhē lán",2,"A mouth without a fence — everything ships, nothing filters.","他口无遮拦，秘密到他这就到头。","说话随意，毫无顾忌。","mouth no block fence"],
["惹是生非","rě shì shēng fēi",2,"Pokes trouble awake just to watch it move.","他走到哪儿都惹是生非。","招惹是非，引起纠纷。","poke right breed wrong"],
["推三阻四","tuī sān zǔ sì",2,"Excuse number three, obstacle number four — a perpetual no-machine.","请他帮忙永远推三阻四。","找各种借口推托。","push three block four"],
["拈轻怕重","niān qīng pà zhòng",2,"Picks the light, fears the heavy — a work-dodging artist at work.","分工时他专挑轻松的，拈轻怕重。","挑轻松的活，躲繁重的活。","pinch light fear heavy"],
["好吃懒做","hào chī lǎn zuò",2,"Eats excellently, works never.","他好吃懒做，碗都不想洗。","又馋又懒。","love eat lazy do"],
["好逸恶劳","hào yì wù láo",2,"Craves ease, loathes labor — the couch has a gravitational field.","他好逸恶劳，躺在家里啃老。","贪图安逸，厌恶劳动。","love ease hate labor"],
["不务正业","bù wù zhèng yè",2,"Neglects the proper trade — all side quests, no main quest.","他上班时间炒股，不务正业。","不干本职工作，不务正业。","not attend proper work"]
];

const BULK_SARCASM3 = [
["标新立异","biāo xīn lì yì",2,"Hoist a new flag, break a new trail — visionary genius, or pure attention economy.","他把鞋反着穿，美其名曰标新立异。","提出新奇主张，显示与众不同（可含贬义）。","mark new set different"],
["锦上添花","jǐn shàng tiān huā",1,"Adding flowers to brocade — good gets better, or chaos gets an encore.","家里已经够乱了，他又抱回一只猫，锦上添花。","好上加好（也可反讽乱上加乱）。","brocade top add flower"],
["如虎添翼","rú hǔ tiān yì",1,"Wings on a tiger — powerful becomes terrifying, usually for everyone else.","给熊孩子买了无人机，如虎添翼。","强者得到助力后更强（常指坏事更糟）。","like tiger add wings"],
["恰到好处","qià dào hǎo chù",1,"Lands exactly where it should — or exactly where it shouldn't, with perfect precision.","蛋糕烤了五分钟，糊得恰到好处。","正合分寸（可反讽）。","exactly arrive good spot"],
["稳操胜券","wěn cāo shèng quàn",2,"The victory ticket, firmly in hand — spoken proudly, usually BEFORE the disaster.","他领先就开香槟说稳操胜券，结果被逆转。","有十足的胜利把握（常被反讽）。","steady hold win ticket"],
["十拿九稳","shí ná jiǔ wěn",2,"Ten grabs, nine certain — that one-in-ten will find you.","他说十拿九稳能抢到票，结果开票八秒就没。","很有把握（可反讽）。","ten grabs nine sure"],
["万无一失","wàn wú yī shī",2,"Ten thousand runs, zero failures — famous last words of every launch day.","他说方案万无一失，上线十分钟就崩了。","绝对不会出差错（常被反讽）。","ten thousand no one loss"],
["心有灵犀","xīn yǒu líng xī",1,"Hearts sharing one invisible line — beautiful for soulmates, funnier when you both salt your latte.","我俩同时把盐当成糖，真是心有灵犀。","彼此心思一致（可反讽）。","heart has spirit link"],
["不约而同","bù yuē ér tóng",2,"No appointment, no discussion — and the exact same wrong answer.","三个人同时答错了同一道题，不约而同。","没有事先商量而行动一致（可反讽）。","not agree yet same"],
["一拍即合","yī pāi jí hé",2,"One clap and they clicked — an instant alliance, sometimes against you.","他俩第一次见面就商量好甩锅给我，一拍即合。","一下子就谈得来、合得来（可反讽）。","one clap then fit"]
];

mergeBulk(BULK_PRAISE3, "praise");
mergeBulk(BULK_ARGUE3, "argue");
mergeBulk(BULK_SARCASM3, "sarcasm");
