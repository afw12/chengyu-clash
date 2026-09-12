/* Full-coverage argue batch 04: 50 distinct missing idioms. */
const QUIZ_ARGUE_FULL_04 = [
  {
    zh: "那位明星程序员确实能力出众，却在评审会上把同事称作笨蛋，连资深专家发言时也故意打断。",
    en: "The star programmer is genuinely talented, but calls coworkers idiots in reviews and deliberately interrupts even senior experts.",
    answer: "恃才傲物", mode: "argue",
    explain: "He relies on his talent as permission to look down on others — 恃才傲物."
  },
  {
    zh: "他从未赢过正式比赛，却宣称世界冠军见了自己也只能认输，教练都没资格指导他。",
    en: "He has never won an official match, yet claims even the world champion would surrender and no coach is qualified to advise him.",
    answer: "狂妄自大", mode: "argue",
    explain: "His wildly inflated view of himself is 狂妄自大."
  },
  {
    zh: "团队刚拿到一次地区奖，她就停止训练，认定现有水平已经足够，后续建议一概不听。",
    en: "After one regional award, she stops practicing, decides the current standard is sufficient, and ignores every suggestion for improvement.",
    answer: "骄傲自满", mode: "argue",
    explain: "Pride in a small success has turned into complacency — 骄傲自满."
  },
  {
    zh: "他总觉得自己的时间比别人贵，聚会让全桌等一小时，到了还认为大家应该感谢他出现。",
    en: "He considers his time more valuable than everyone else's, keeps an entire dinner waiting for an hour, and expects gratitude when he arrives.",
    answer: "自视甚高", mode: "argue",
    explain: "His opinion of his own importance is excessively high — 自视甚高."
  },
  {
    zh: "孩子兴奋地把奖状递给她，她脸上毫无表情，只淡淡说一句“放桌上”，便继续看电脑。",
    en: "A child excitedly presents an award, but she shows no emotion, says only, 'Put it on the desk,' and returns to her computer.",
    answer: "冷若冰霜", mode: "argue",
    explain: "Her manner is strikingly cold and emotionless — 冷若冰霜."
  },
  {
    zh: "新邻居只是来问垃圾分类时间，他隔着门说别套近乎，以后也不准再敲门。",
    en: "A new neighbor merely asks about the trash schedule, but he answers through the door, says not to get familiar, and forbids any future knock.",
    answer: "拒人千里", mode: "argue",
    explain: "His hostile distance shuts out even harmless contact — 拒人千里."
  },
  {
    zh: "员工父亲病危请半天假，主管不仅拒绝，还说亲人住院不属于值得影响工作的理由。",
    en: "An employee requests half a day off for a critically ill father; the supervisor refuses and says family hospitalization is no reason to affect work.",
    answer: "不近人情", mode: "argue",
    explain: "The decision ignores ordinary human feeling and reasonable circumstances — 不近人情."
  },
  {
    zh: "受伤的流浪者在暴雨中求他开门避十分钟，他看了一眼空荡的门厅，仍毫不动容地把门锁上。",
    en: "An injured stranger asks to shelter from a storm for ten minutes; despite an empty lobby, he remains unmoved and locks the door.",
    answer: "铁石心肠", mode: "argue",
    explain: "Even visible suffering cannot soften his heart — 铁石心肠."
  },
  {
    zh: "新老板接管工厂后，不仅开除所有旧员工，还销毁他们的档案，连退休人员的医疗补助也全部取消。",
    en: "After taking over the factory, the new owner fires every former employee, destroys their records, and cancels even retirees' medical support.",
    answer: "斩尽杀绝", mode: "argue",
    explain: "He eliminates every trace and leaves no one untouched — 斩尽杀绝."
  },
  {
    zh: "对手已经退出市场，他仍收购剩余小店、封锁供货渠道，决心不让对方留下任何重新开始的机会。",
    en: "Even after a rival exits the market, he buys the remaining shops and blocks suppliers, determined to leave no chance of a comeback.",
    answer: "赶尽杀绝", mode: "argue",
    explain: "He keeps pursuing a defeated rival to eliminate every last possibility — 赶尽杀绝."
  },
  {
    zh: "他主动教新人绕过报销规则，还建议把客户多付的钱藏起来，因为从一开始就没打好主意。",
    en: "He teaches a newcomer to bypass expense rules and hide a customer's overpayment, revealing that his intentions were crooked from the start.",
    answer: "心术不正", mode: "argue",
    explain: "His underlying character and intentions are morally corrupt — 心术不正."
  },
  {
    zh: "那名顾问免费索要全部服务器权限，却拒绝说明用途，还秘密联系公司的最大竞争对手。",
    en: "A consultant asks for full server access without explaining why and secretly contacts the company's largest rival.",
    answer: "居心叵测", mode: "argue",
    explain: "His concealed intentions are suspicious and difficult to fathom — 居心叵测."
  },
  {
    zh: "他表面热心替两家公司牵线，实际上每次都故意泄露底价，想借谈判压低自己要买的股份。",
    en: "He appears eager to introduce two companies, but leaks each side's lowest price to drive down shares he plans to buy.",
    answer: "别有用心", mode: "argue",
    explain: "His helpful appearance conceals a separate private motive — 别有用心."
  },
  {
    zh: "管家侍奉主人十年，暗中却一直收集保险箱密码和作息记录，等待机会谋财害命。",
    en: "A servant works faithfully for ten years while secretly collecting safe codes and schedules, waiting for a chance to kill for money.",
    answer: "包藏祸心", mode: "argue",
    explain: "He hides a deeply harmful intention beneath a loyal exterior — 包藏祸心."
  },
  {
    zh: "他们深夜绘制金库通道、购买假证件，还商量如何切断报警线路，显然不是在筹备正当生意。",
    en: "They map bank-vault passages at night, buy false identification, and discuss disabling alarms; their plan is plainly unlawful.",
    answer: "图谋不轨", mode: "argue",
    explain: "Their secret planning aims at serious wrongdoing — 图谋不轨."
  },
  {
    zh: "财务检查当天，经理故意在大厅安排消防演习，趁所有人下楼时把问题账本运走。",
    en: "On audit day, the manager stages a fire drill in the lobby and removes the suspicious ledgers while everyone is downstairs.",
    answer: "掩人耳目", mode: "argue",
    explain: "The conspicuous drill distracts attention from his real action — 掩人耳目."
  },
  {
    zh: "合同谈的是终身会员，商家签字后悄悄把核心条款换成仅限三个月，页码和封面却保持不变。",
    en: "The negotiated contract promises lifetime membership, but after signing the seller swaps in a three-month clause while keeping the same cover and page numbers.",
    answer: "偷梁换柱", mode: "argue",
    explain: "A crucial component is secretly replaced while the outer form stays the same — 偷梁换柱."
  },
  {
    zh: "新闻把甲公司的欠债金额写到乙公司名下，又把乙公司老板的照片配在甲公司的丑闻旁。",
    en: "A report assigns Company A's debt to Company B and places B's owner's photograph beside A's scandal.",
    answer: "张冠李戴", mode: "argue",
    explain: "Names, facts, and people have been mistakenly assigned to one another — 张冠李戴."
  },
  {
    zh: "主管不亲自打压异己，而是故意向脾气暴躁的客户透露半句假消息，让客户出面逼走那名员工。",
    en: "Rather than attack a rival himself, the supervisor feeds a hot-tempered client half a false story so the client forces the employee out.",
    answer: "借刀杀人", mode: "argue",
    explain: "He uses another person's power to destroy his target — 借刀杀人."
  },
  {
    zh: "竞争公司趁医院系统遭病毒攻击、防线失效时，立即挖走核心医生并抢签全部合作单位。",
    en: "While a hospital's systems are crippled by a cyberattack, a rival immediately poaches key doctors and signs all its partners.",
    answer: "乘虚而入", mode: "argue",
    explain: "The rival exploits a moment of exposed weakness — 乘虚而入."
  },
  {
    zh: "那名军阀烧村、劫粮、杀俘、贩卖人口，罪行多到把整片竹子做成书简也写不完。",
    en: "The warlord burns villages, steals grain, kills prisoners, and traffics people; even endless records could not contain all his crimes.",
    answer: "罄竹难书", mode: "argue",
    explain: "His offenses are too numerous to record fully — 罄竹难书."
  },
  {
    zh: "他作恶数十年，从诈骗小贩到谋害证人，每次逃脱都更加嚣张，如今终于到了清算时刻。",
    en: "For decades he progresses from cheating vendors to murdering witnesses, growing bolder after every escape until reckoning finally arrives.",
    answer: "恶贯满盈", mode: "argue",
    explain: "His accumulated evil has reached its limit — 恶贯满盈."
  },
  {
    zh: "那伙人炸毁医院、绑架儿童，还故意阻断救援物资，其行为已经恶劣到极点。",
    en: "The group bombs a hospital, kidnaps children, and deliberately blocks relief supplies; its crimes have reached the utmost severity.",
    answer: "罪大恶极", mode: "argue",
    explain: "The crimes are of the greatest possible gravity and evil — 罪大恶极."
  },
  {
    zh: "凶手连续杀害无辜者，临死前仍嘲笑受害家庭，人们认为最严厉的惩罚也不足以抵偿。",
    en: "After repeatedly killing innocent people, the murderer still mocks their families; even the harshest punishment seems insufficient.",
    answer: "死有余辜", mode: "argue",
    explain: "His guilt is so great that death itself would not exceed what he deserves — 死有余辜."
  },
  {
    zh: "骗子卷走孤儿的救命款，还焚毁证据嫁祸给照顾他们的护士，这种行为连最基本的公理都无法容忍。",
    en: "A fraudster steals orphans' medical funds, burns the evidence, and frames their nurse; such conduct violates the most basic moral order.",
    answer: "天理难容", mode: "argue",
    explain: "The deed is so outrageous that natural justice cannot tolerate it — 天理难容."
  },
  {
    zh: "垄断平台一见小商户没有议价能力，就不断提高抽成，谁承受不住谁就被淘汰。",
    en: "A monopoly platform keeps raising commissions on small sellers with no bargaining power, eliminating whoever cannot survive.",
    answer: "弱肉强食", mode: "argue",
    explain: "The powerful prey upon and eliminate the weak — 弱肉强食."
  },
  {
    zh: "镇长把公车当私家车，宴会要商户买单，还随意决定谁的孩子能进当地学校。",
    en: "The town chief uses public cars as his own, makes merchants pay for banquets, and personally decides whose children may attend local schools.",
    answer: "作威作福", mode: "argue",
    explain: "He abuses authority to dominate others and enjoy privileges — 作威作福."
  },
  {
    zh: "那伙人开车逆行撞翻摊位，打伤劝阻者后仍在街上来去自如，没人敢管。",
    en: "The gang drives against traffic, knocks over stalls, beats anyone who objects, and roams the streets unchecked.",
    answer: "横行霸道", mode: "argue",
    explain: "Their domineering misconduct faces no restraint — 横行霸道."
  },
  {
    zh: "老板心情好就涨价，心情差就开人，把公司账户拿去赌博，所有规则都只看他一时高兴。",
    en: "The owner raises prices on a whim, fires people when annoyed, and gambles with company funds; every rule bends to his immediate desire.",
    answer: "为所欲为", mode: "argue",
    explain: "He does whatever he wants without regard for rules or others — 为所欲为."
  },
  {
    zh: "批发市场里那名商贩带人堵住同行进货通道，强迫所有摊位只能按他规定的价格卖货。",
    en: "A wholesaler's men block competitors' deliveries and force every stall in the market to sell only at his chosen price.",
    answer: "欺行霸市", mode: "argue",
    explain: "He bullies an entire trade and dominates its marketplace — 欺行霸市."
  },
  {
    zh: "拆迁人员闯进老人家，把估价两百万的房子按二十万签走；老人不卖，他们就断水断电。",
    en: "Demolition agents enter an elderly owner's home and demand a two-million-yuan property for two hundred thousand; refusal brings water and power cuts.",
    answer: "强买强卖", mode: "argue",
    explain: "The transaction is imposed through coercion rather than consent — 强买强卖."
  },
  {
    zh: "为了赢选举，他伪造对手病历、收买证人、攻击对方孩子，只要有效就什么都肯做。",
    en: "To win the election, he forges a rival's medical records, buys witnesses, and targets the rival's children; effectiveness is his only rule.",
    answer: "不择手段", mode: "argue",
    explain: "He will use any method, however immoral, to reach his goal — 不择手段."
  },
  {
    zh: "她先装作帮同事修改文件，暗地里删掉关键数据，再假装惊讶地向主管指出错误。",
    en: "She offers to help edit a coworker's file, secretly deletes key data, then pretends surprise while reporting the mistake to management.",
    answer: "阴险狡诈", mode: "argue",
    explain: "Her hidden malice is carried out through calculated deceit — 阴险狡诈."
  },
  {
    zh: "那名承包商在行业混了四十年，合同里设下层层圈套，谈判时永远让别人以为占了便宜。",
    en: "After forty years in the trade, the contractor layers traps into contracts and always makes the other side believe it got the better deal.",
    answer: "老奸巨猾", mode: "argue",
    explain: "His long experience has made him exceptionally crafty and deceitful — 老奸巨猾."
  },
  {
    zh: "他嘴上同意合伙方案，桌下却反复确认退出条款，还偷偷录下每个人的失言准备日后要挟。",
    en: "He verbally accepts the partnership while repeatedly checking exit clauses and secretly recording everyone's slips for future leverage.",
    answer: "心怀鬼胎", mode: "argue",
    explain: "His apparent agreement conceals suspicious, dishonest plans — 心怀鬼胎."
  },
  {
    zh: "庆功宴看似平静，对手却提前松动了阳台护栏，还特意把目标的座位安排在旁边。",
    en: "The celebration appears peaceful, but a rival has loosened the balcony rail and deliberately seated the target beside it.",
    answer: "暗藏杀机", mode: "argue",
    explain: "A seemingly harmless setting conceals lethal danger — 暗藏杀机."
  },
  {
    zh: "创业时他借技术合伙人打败所有对手，公司上市后立刻收回股份，把这位功臣赶出董事会。",
    en: "He relies on a technical cofounder to defeat every rival, then reclaims the cofounder's shares and expels him after the company goes public.",
    answer: "鸟尽弓藏", mode: "argue",
    explain: "Once the valuable helper has served his purpose, he is discarded — 鸟尽弓藏."
  },
  {
    zh: "为了保住职位，他举报生病的母亲违规摆摊，还亲手赶走前来求情的亲哥哥。",
    en: "To protect his position, he reports his ill mother for unlicensed vending and personally drives away his brother when he pleads for mercy.",
    answer: "六亲不认", mode: "argue",
    explain: "He abandons all family feeling when it conflicts with his interest — 六亲不认."
  },
  {
    zh: "王子勾结敌军杀害父亲、囚禁祖母，又焚毁祖庙以夺取王位。",
    en: "A prince conspires with an enemy army, kills his father, imprisons his grandmother, and burns the ancestral temple to seize the throne.",
    answer: "大逆不道", mode: "argue",
    explain: "His acts violate the most fundamental moral and familial order — 大逆不道."
  },
  {
    zh: "守军将领杀死上级，打开城门召集叛军，企图推翻现有政权。",
    en: "A garrison commander kills his superior, opens the gates to rebels, and attempts to overthrow the government.",
    answer: "犯上作乱", mode: "argue",
    explain: "He rebels against superiors and launches disorder — 犯上作乱."
  },
  {
    zh: "祖父正在讲话，他当众翻白眼打断，还命令老人替自己去拿饮料。",
    en: "While his grandfather speaks, he rolls his eyes, interrupts, and orders the elderly man to fetch him a drink.",
    answer: "目无尊长", mode: "argue",
    explain: "His conduct shows no respect for elders or seniors — 目无尊长."
  },
  {
    zh: "新队员能力很强，却拒绝所有训练安排，教练越要求守纪律，他越故意唱反调。",
    en: "The talented new player rejects every training plan and deliberately defies the coach whenever discipline is required.",
    answer: "桀骜不驯", mode: "argue",
    explain: "His proud, fierce nature refuses to submit to discipline — 桀骜不驯."
  },
  {
    zh: "同事认真讨论事故伤亡，他却靠在椅背上开玩笑，说人生本来就是一场无聊游戏。",
    en: "As coworkers seriously discuss accident victims, he leans back making jokes and says life is just a pointless game.",
    answer: "玩世不恭", mode: "argue",
    explain: "His cynical, irreverent attitude treats serious life as a joke — 玩世不恭."
  },
  {
    zh: "值班时他衬衫没扣好，嘴里嚼着口香糖，顾客问三遍才懒洋洋地抬头。",
    en: "On duty, his shirt is unbuttoned and he chews gum, barely looking up after a customer asks the same question three times.",
    answer: "吊儿郎当", mode: "argue",
    explain: "His sloppy, unserious manner is 吊儿郎当."
  },
  {
    zh: "他身体健康却从不找工作，每天在街边打牌闲逛，生活费全靠父母。",
    en: "Though healthy, he never seeks work, spends every day playing cards and wandering around, and lives entirely on his parents.",
    answer: "游手好闲", mode: "argue",
    explain: "Avoiding productive work in favor of idle leisure is 游手好闲."
  },
  {
    zh: "公司把他调到空办公室后，没有项目、没有职责，也没人找他，他每天只是盯着时钟等下班。",
    en: "After being moved to an empty office, he has no projects, duties, or visitors and spends each day watching the clock.",
    answer: "无所事事", mode: "argue",
    explain: "Having nothing at all to occupy or accomplish is 无所事事."
  },
  {
    zh: "他每天三顿吃得丰盛，饭后就躺到下一餐，既不读书也不工作，对家里的事从不过问。",
    en: "He eats three generous meals, lies down until the next one, neither studies nor works, and takes no interest in household affairs.",
    answer: "饱食终日", mode: "argue",
    explain: "He spends the whole day well-fed but doing nothing meaningful — 饱食终日."
  },
  {
    zh: "原本只是两人拌了几句嘴，她转述时却加上摔杯子、掀桌子和报警，把小争执讲成全武行。",
    en: "Two people merely exchanged a few sharp words, but in retelling it she adds smashed glasses, an overturned table, and a police call.",
    answer: "添油加醋", mode: "argue",
    explain: "She decorates a true event with invented dramatic details — 添油加醋."
  },
  {
    zh: "广告把普通防水外套说成能抵御极地风暴，甚至声称穿上后零下四十度也不会冷。",
    en: "An advertisement describes an ordinary raincoat as protection from polar storms and claims the wearer cannot feel cold at minus forty degrees.",
    answer: "夸大其词", mode: "argue",
    explain: "The promotional wording deliberately exaggerates the product — 夸大其词."
  },
  {
    zh: "他只协助整理过一次会议资料，简历却写成“主导集团全球战略转型”。",
    en: "He once helped organize meeting notes, but his résumé says he 'led the group's global strategic transformation.'",
    answer: "言过其实", mode: "argue",
    explain: "What he says about his role far exceeds what he actually did — 言过其实."
  }
];

QUIZ_BANK.push(...QUIZ_ARGUE_FULL_04);
