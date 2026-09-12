/* Batch 17: +10 praise, +40 argue (bullies, traitors, slackers, schemers). */

const BULK_PRAISE16 = [
["扶老携幼","fú lǎo xié yòu",1,"Helps the elderly up, leads the children along — first out in every emergency.","地震撤离时年轻人扶老携幼。","搀着老人，领着小孩。","support old lead young"],
["尊老爱幼","zūn lǎo ài yòu",1,"Respects the old, loves the young — the family value that built society.","公交车上尊老爱幼蔚然成风。","尊敬老人，爱护儿童。","respect old love young"],
["舍己救人","shě jǐ jiù rén",3,"Gave up his own safety to save another.","他为救落水儿童舍己救人。","牺牲自己利益挽救别人。","give up self save others"],
["舍生取义","shě shēng qǔ yì",3,"Gives up life to take hold of righteousness.","先烈们舍生取义，换来今天。","为正义而牺牲生命。","give life take righteousness"],
["杀身成仁","shā shēn chéng rén",3,"Sacrificed his body to complete the benevolent mission.","志士杀身成仁，慷慨赴死。","为正义而牺牲生命。","give body complete benevolence"],
["见利思义","jiàn lì sī yì",2,"Sees profit, thinks of righteousness first.","商人见利思义，从不发国难财。","看到利益想到道义。","see profit think righteousness"],
["拾金不昧","shí jīn bù mèi",2,"Picked up a fortune and returned it — character over cash.","出租车司机拾金不昧还回巨款。","拾到财物不隐藏据为己有。","pick fortune not hide"],
["路不拾遗","lù bù shí yí",3,"Lost items stay on the road, untouched — a town's character.","这个小城路不拾遗，夜不闭户。","没人把路上失物据为己有。","road not picked up"],
["夜不闭户","yè bù bì hù",3,"Doors unlocked at night — the highest praise a community can earn.","那个年代小城夜不闭户。","夜间不用关门防盗。","night not close doors"],
["安居乐业","ān jū lè yè",2,"Living in peace, working in joy — what good governance looks like.","拆迁后大家安居乐业。","安定地生活，愉快地工作。","settle home joy work"]
];

const BULK_ARGUE16 = [
["欺软怕硬","qī ruǎn pà yìng",2,"Bullies the soft, fears the hard — courage calibrated by target.","他专挑新手骂，欺软怕硬。","欺负软弱的，害怕强硬的。","bully soft fear hard"],
["弱肉强食","ruò ròu qiáng shí",2,"The weak are meat, the strong eat — jungle rules in the office.","没有规则的市场就是弱肉强食。","弱者被强者吞并欺凌。","weak meat strong eat"],
["作威作福","zuò wēi zuò fú",2,"Wields power as terror and treats it as a privilege.","小科长也敢作威作福。","妄自尊大，滥用权势。","act terror enjoy blessing"],
["横行霸道","héng xíng bà dào",2,"Marches sideways across everyone's rights.","这伙人在市场横行霸道多年。","仗势胡作非为。","march sideways walk tyranny"],
["为所欲为","wéi suǒ yù wéi",2,"Does whatever he desires — consequences never invited.","有了权力他就为所欲为。","想干什么就干什么，任意妄为。","do whatever one desires"],
["欺行霸市","qī háng bà shì",2,"Bullies the trade, dominates the market.","这伙人欺行霸市被端了。","欺压同行，称霸市场。","bully trade dominate market"],
["强买强卖","qiǎng mǎi qiáng mài",2,"Forced buying, forced selling — commerce at gunpoint.","景区强买强卖被曝光。","强迫别人买或卖。","force buy force sell"],
["不择手段","bù zé shǒu duàn",2,"No method refused — the ends ate the ethics.","他为了赢不择手段。","为了达到目的什么手段都使得出来。","no choosing means tactics"],
["阴险狡诈","yīn xiǎn jiǎo zhà",2,"Sinister, cunning and treacherous — every smile calculated.","他阴险狡诈，笑里全是算计。","表面和善暗藏祸心。","sinister treacherous cunning deceitful"],
["老奸巨猾","lǎo jiān jù huá",2,"Old cunning, giant slickness — decades of scheming refined.","对方是个老奸巨猾的对手。","老于世故，非常奸诈狡猾。","old cunning giant slick"],
["心怀鬼胎","xīn huái guǐ tāi",2,"A ghost fetus in the heart — secret schemes gestating.","他笑得殷勤，实则心怀鬼胎。","心里藏着不可告人的事。","heart carry ghost womb"],
["暗藏杀机","àn cáng shā jī",2,"Murderous intent hidden in the dark — the contract looked friendly.","这份条款看似平常，暗藏杀机。","隐藏着杀害人的危机。","hidden carry murder intent"],
["卸磨杀驴","xiè mó shā lǘ",2,"The millstone done, the donkey slaughtered — after your work, your gone.","项目一交付他就卸磨杀驴开掉了功臣。","事成之后抛弃有功之人。","unload mill kill donkey"],
["兔死狗烹","tù sǐ gǒu pēng",2,"Rabbit dead, dog cooked — the helper's historic fate.","历代功臣多逃不过兔死狗烹。","事成后功臣被弃或被杀。","rabbit dead dog boiled"],
["鸟尽弓藏","niǎo jìn gōng cáng",2,"Birds gone, the bow retired to storage — merits expire.","大局一定就鸟尽弓藏。","事成之后被抛弃。","birds gone bow stored"],
["六亲不认","liù qīn bù rèn",2,"Recognizes none of the six relations — power blinds completely.","他一得势就六亲不认。","不讲情面，对亲人也不认。","six kin not recognize"],
["大逆不道","dà nì bú dào",3,"Great rebellion, no way — against the deepest order.","篡位之事大逆不道。","严重违背封建道德或常理。","great treason no way"],
["犯上作乱","fàn shàng zuò luàn",2,"Offends the superiors, stirs rebellion — in the old book, unforgivable.","古代犯上作乱是重罪。","触犯长辈或上级，闹出乱子。","offend above stir chaos"],
["目无尊长","mù wú zūn zhǎng",2,"No elders in his eyes — manners never installed.","他顶撞长辈目无尊长。","不尊重长辈。","eyes no respect elders"],
["桀骜不驯","jié ào bù xùn",2,"Stubborn, fierce, untamable — brilliance with no brakes.","他是匹桀骜不驯的野马。","性情倔强不服管束。","fierce proud not tamed"],
["玩世不恭","wán shì bù gōng",2,"Plays with the world, mocks all seriousness.","他对什么都玩世不恭。","以不严肃不庄重的态度处世。","play world not respectful"],
["吊儿郎当","diào er láng dāng",1,"Loose and lollygagging — shirt untucked, work undone.","他上班吊儿郎当，天天迟到。","形容仪容不整、作风散漫。","dangle slouch loose manner"],
["游手好闲","yóu shǒu hào xián",2,"Idle hands, fond of leisure — thirty and still between jobs.","他游手好闲，全靠父母养。","游荡懒散，不愿劳动。","idle hands love leisure"],
["无所事事","wú suǒ shì shì",2,"Nothing to do, doing it daily.","他退休前就天天无所事事。","闲着什么事都不干。","nothing to do do nothing"],
["饱食终日","bǎo shí zhōng rì",2,"Full belly all day, empty head forever.","他饱食终日，无所用心。","整天吃饱饭，不动脑筋。","full food whole day"],
["添油加醋","tiān yóu jiā cù",2,"Adds oil and vinegar — the story grows in the retelling.","他把小事添油加醋传遍了全楼。","夸张渲染，叙述时加入原没有的内容。","add oil add vinegar"],
["夸大其词","kuā dà qí cí",2,"Exaggerates the words beyond the facts.","广告总是夸大其词。","说话或写文章不切实际地夸大。","exaggerate big its words"],
["言过其实","yán guò qí shí",2,"Words exceed the reality.","他的推荐言过其实。","说话过分，不符合实际。","words exceed its reality"],
["名不副实","míng bù fù shí",2,"The name doesn't match the reality.","这家网红店名不副实。","名声与实际不相符。","name not match reality"],
["居心不良","jū xīn bù liáng",2,"Intentions running bad — kindness with a bill attached.","他突然献殷勤，居心不良。","存心不良，另有企图。","held intentions not good"],
["明争暗斗","míng zhēng àn dòu",2,"Open fights and hidden struggles — the office as a battlefield.","部门之间明争暗斗多年。","明里暗里都在争斗。","open fight hidden struggle"],
["尔虞我诈","ěr yú wǒ zhà",2,"You deceive me, I cheat you — trust nowhere found.","生意场上尔虞我诈，他早已疲惫。","彼此互相欺诈。","you deceive me I cheat you"],
["勾心斗角","gōu xīn dòu jiǎo",2,"Hooks in hearts, horns locking — endless office warfare.","为争位子他们勾心斗角。","各用心机，互相排挤。","hook hearts fight horns"],
["明枪暗箭","míng qiāng àn jiàn",2,"Open spears and hidden arrows — both flying his way.","他躲过了明枪暗箭才升上来。","公开的攻击和暗中的陷害。","open spear hidden arrow"],
["唯我独尊","wéi wǒ dú zūn",2,"Only I am supreme — the room revolved around him.","他唯我独尊，听不进任何意见。","自以为最尊贵，极端自高自大。","only me alone supreme"],
["自命清高","zì mìng qīng gāo",2,"Self-proclaimed pure and lofty — looking down from an imaginary hill.","他自命清高，看不起同事。","自以为清高，看不起别人。","self proclaim pure lofty"],
["一手遮天","yī shǒu zhē tiān",2,"One hand covering the sky — no light gets past him.","他在部门里一手遮天。","依仗权势玩弄手段蒙蔽众人。","one hand cover sky"],
["横加干涉","héng jiā gān shè",2,"Interferes uninvited and heavy-handed.","他对我私生活横加干涉。","不讲道理地强行干涉。","crudely add meddle intervene"],
["发号施令","fā hào shī lìng",2,"Issues orders and decrees — does none of the work himself.","他只会发号施令不动手。","发布命令下达指示。","issue orders give commands"],
["越俎代庖","yuè zǔ dài páo",2,"Leaps over the altar to run the kitchen — meddling beyond one's post.","他越俎代庖替别人做决定。","超越职权处理别人的事务。","cross altar replace cook"]
];

mergeBulk(BULK_PRAISE16, "praise");
mergeBulk(BULK_ARGUE16, "argue");
