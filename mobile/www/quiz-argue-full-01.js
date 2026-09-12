/* Full-coverage argue batch 01: 50 distinct missing idioms. */
const QUIZ_ARGUE_FULL_01 = [
  {
    zh: "监控明明拍到他先推人，他却剪掉开头，只放对方还手的片段，反咬对方无故施暴。",
    en: "The security footage shows he shoved first, but he cuts off the beginning, posts only the retaliation, and accuses the other person of an unprovoked attack.",
    answer: "颠倒黑白", mode: "argue",
    explain: "He deliberately reverses who was right and wrong; that is 颠倒黑白."
  },
  {
    zh: "同事生日聚餐，他收入最高，却连人均二十元都不肯出，还把大家送的剩菜全打包走。",
    en: "At a coworker's birthday dinner, the highest-paid person refuses to contribute even twenty yuan, then takes home all the leftovers everyone else paid for.",
    answer: "一毛不拔", mode: "argue",
    explain: "His refusal to part with even a tiny amount is 一毛不拔."
  },
  {
    zh: "室友算水电费时，为了三分钱追着每个人重新核对了四遍。",
    en: "While splitting the utility bill, the roommate makes everyone recalculate it four times over a three-cent difference.",
    answer: "锱铢必较", mode: "argue",
    explain: "Obsessing over a three-cent discrepancy captures 锱铢必较."
  },
  {
    zh: "餐厅给她换了靠窗位，她嫌晒；拉上帘子，她又嫌暗；换到里面，她又说没景色。",
    en: "The restaurant moves her to a window seat, but it is too sunny; they close the shade, but it is too dark; they move her inside, but now there is no view.",
    answer: "挑三拣四", mode: "argue",
    explain: "Finding fault with every available option is 挑三拣四."
  },
  {
    zh: "邻居家孩子换个学校，她既不知道原因，也要在小区群里编排人家是不是被开除了。",
    en: "A neighbor's child changes schools, and without knowing why, she speculates in the community chat that the child must have been expelled.",
    answer: "说三道四", mode: "argue",
    explain: "Her idle, intrusive gossip about someone else's affairs is 说三道四."
  },
  {
    zh: "作品展上，他不谈画面表达，只盯着作者的衣服、口音和站姿逐项挑毛病。",
    en: "At the exhibition, he ignores what the paintings express and critiques the artist's clothes, accent, and posture instead.",
    answer: "品头论足", mode: "argue",
    explain: "Judging a person detail by detail from the sidelines is 品头论足."
  },
  {
    zh: "项目最忙时他从不帮忙，发布会结束后却对每个按钮的位置都发表一套命令式意见。",
    en: "He never helps during the crunch, but after launch he issues commands about where every button should have gone.",
    answer: "指手画脚", mode: "argue",
    explain: "He contributes nothing yet bosses the actual workers around — 指手画脚."
  },
  {
    zh: "主管一句完整的话都懒得说，只抬抬下巴、敲敲桌面，就要助理猜出他想拿哪份文件。",
    en: "The supervisor cannot be bothered to speak; he lifts his chin and taps the desk, expecting his assistant to guess which file he wants.",
    answer: "颐指气使", mode: "argue",
    explain: "Ordering people around through arrogant gestures is 颐指气使."
  },
  {
    zh: "他刚升成小组长，走进办公室就仰着头，见了昔日同事连招呼都不回。",
    en: "The moment he becomes team lead, he walks in with his chin raised and stops returning greetings from former peers.",
    answer: "趾高气扬", mode: "argue",
    explain: "His newly inflated, swaggering manner is 趾高气扬."
  },
  {
    zh: "她拿下一笔订单就兴奋得在群里嘲笑其他组，连尚未签字的客户资料都发了出去。",
    en: "After landing one order, she gets so carried away mocking other teams that she posts confidential client material before the contract is even signed.",
    answer: "得意忘形", mode: "argue",
    explain: "Success makes her lose all restraint and perspective — 得意忘形."
  },
  {
    zh: "这份提案用了七种字体、五种动画和满页渐变，却连预算和交付日期都没写。",
    en: "The proposal uses seven fonts, five animations, and a page full of gradients, yet leaves out both the budget and delivery date.",
    answer: "花里胡哨", mode: "argue",
    explain: "It is overloaded with flashy decoration and short on substance: 花里胡哨."
  },
  {
    zh: "面试时他滔滔不绝地讲战略、生态和格局，追问做过什么项目，却一个也说不出来。",
    en: "In the interview he talks endlessly about strategy, ecosystems, and vision, but cannot name a single project he has actually completed.",
    answer: "夸夸其谈", mode: "argue",
    explain: "Grand, nonstop talk unsupported by action is 夸夸其谈."
  },
  {
    zh: "她嘴上祝福前同事升职，转身就在私聊里抱怨公司怎么会选这种人。",
    en: "She congratulates her former coworker on the promotion, then immediately complains in private that the company chose the wrong person.",
    answer: "言不由衷", mode: "argue",
    explain: "Her spoken congratulations do not reflect what she really thinks — 言不由衷."
  },
  {
    zh: "他当面叫你最好的朋友，背后却把你说过的私事交给竞争对手当筹码。",
    en: "To your face he calls you his best friend; behind your back he gives your private disclosures to a rival as leverage.",
    answer: "两面三刀", mode: "argue",
    explain: "Friendly in front and treacherous behind, he is 两面三刀."
  },
  {
    zh: "聚会本来很平静，他偏要抢走别人手机发挑衅消息，最后还说大家太开不起玩笑。",
    en: "The gathering is peaceful until he grabs someone else's phone and sends a provocative message, then claims everyone else cannot take a joke.",
    answer: "惹是生非", mode: "argue",
    explain: "He creates trouble where there was none; that is 惹是生非."
  },
  {
    zh: "轮到她值日，她先说手疼，又说临时有会，最后把清洁任务塞给了新人。",
    en: "When it is her turn to clean, she claims her hand hurts, then invents a meeting, and finally pushes the job onto the new hire.",
    answer: "推三阻四", mode: "argue",
    explain: "Her string of excuses to avoid a duty is 推三阻四."
  },
  {
    zh: "搬家时他专挑抱枕和纸巾拿，冰箱、书柜和几十箱书全留给别人。",
    en: "During the move he carries only cushions and tissue boxes, leaving the refrigerator, bookcase, and dozens of book boxes to everyone else.",
    answer: "拈轻怕重", mode: "argue",
    explain: "Choosing only easy tasks while dodging hard ones is 拈轻怕重."
  },
  {
    zh: "他宁可躺着刷一天短视频，也不愿花半小时投简历，还怪家人没替他安排好工作。",
    en: "He would rather scroll videos in bed all day than spend half an hour applying for jobs, then blames his family for not arranging one.",
    answer: "好逸恶劳", mode: "argue",
    explain: "Craving comfort while detesting work is 好逸恶劳."
  },
  {
    zh: "上班时间他研究球赛赔率、抢演唱会票，真正的客户邮件积了三天都没回。",
    en: "During work hours he studies sports odds and buys concert tickets while client emails sit unanswered for three days.",
    answer: "不务正业", mode: "argue",
    explain: "He neglects his proper responsibilities for unrelated pursuits — 不务正业."
  },
  {
    zh: "他在老板面前低声下气，转过身却把实习生堵在茶水间训哭。",
    en: "He is meek around the boss, then corners an intern in the break room and berates her to tears.",
    answer: "恃强凌弱", mode: "argue",
    explain: "Using his advantage to bully someone less powerful is 恃强凌弱."
  },
  {
    zh: "退租时他看房东不在，顺手把客厅里的蓝牙音箱也装进了自己的箱子。",
    en: "While moving out, he notices the landlord is away and slips the living-room speaker into his own box.",
    answer: "顺手牵羊", mode: "argue",
    explain: "He steals a convenient item on the spur of the moment — 顺手牵羊."
  },
  {
    zh: "他每天等同事下班后才溜进资料室，一听见脚步就立刻关灯躲起来。",
    en: "He sneaks into the records room only after coworkers leave and switches off the light to hide whenever he hears footsteps.",
    answer: "鬼鬼祟祟", mode: "argue",
    explain: "His secretive, suspicious behavior is plainly 鬼鬼祟祟."
  },
  {
    zh: "所谓大师先关灯放烟，再说你的霉运附在手表上，交八千元才能替你消灾。",
    en: "The so-called master dims the lights, releases smoke, says bad luck is trapped in your watch, and demands eight thousand yuan to remove it.",
    answer: "装神弄鬼", mode: "argue",
    explain: "He uses fake supernatural theatrics to deceive people — 装神弄鬼."
  },
  {
    zh: "他本来会说普通话，直播时却突然拖长腔调，端着酒杯假装自己是旧式贵族。",
    en: "Though he normally speaks plainly, on livestream he adopts an affected drawl and poses with a wineglass like an old aristocrat.",
    answer: "装腔作势", mode: "argue",
    explain: "The artificial voice and manner are pure 装腔作势."
  },
  {
    zh: "她迟到两小时后捂着胸口说自己特别内疚，眼睛却一直盯着镜头确认有没有拍到眼泪。",
    en: "Two hours late, she clutches her chest and declares deep remorse while watching the camera to make sure it catches her tears.",
    answer: "惺惺作态", mode: "argue",
    explain: "Her remorse is a calculated performance rather than genuine feeling — 惺惺作态."
  },
  {
    zh: "新品只卖出三件，老板却租来锣鼓队、买下整面广告墙，宣布品牌已经轰动全国。",
    en: "The new product sells three units, yet the owner hires a drum troupe, buys an entire billboard, and declares the brand a nationwide sensation.",
    answer: "大吹大擂", mode: "argue",
    explain: "The loud, excessive publicity for almost nothing is 大吹大擂."
  },
  {
    zh: "没人问，他每天都在业主群贴自己公司的奖状，还用小号回复“行业第一”。",
    en: "Without being asked, he posts his company's certificates in the residents' chat every day and uses an alternate account to reply, 'Best in the industry.'",
    answer: "自卖自夸", mode: "argue",
    explain: "Promoting and praising his own offering is 自卖自夸."
  },
  {
    zh: "她领到年终奖，当晚包下酒吧请陌生人喝酒，第二周连房租都交不起。",
    en: "She receives her annual bonus, rents out a bar to buy drinks for strangers that night, and cannot pay rent the following week.",
    answer: "挥霍无度", mode: "argue",
    explain: "Her spending has no restraint or limit — 挥霍无度."
  },
  {
    zh: "拍卖会上有人随口激了他一句，他就把全部积蓄押在一块自己完全不懂的旧表上。",
    en: "At an auction, one taunt is enough for him to put his entire savings into an antique watch he knows nothing about.",
    answer: "一掷千金", mode: "argue",
    explain: "Risking a fortune in one extravagant purchase is 一掷千金."
  },
  {
    zh: "他点外卖从不看价格，吃两口就扔；手机每出新颜色也必买一台。",
    en: "He never checks food-delivery prices and throws meals away after two bites; he also buys a new phone whenever a new color appears.",
    answer: "挥金如土", mode: "argue",
    explain: "He treats money as if it were dirt — 挥金如土."
  },
  {
    zh: "食堂为了拍宣传照摆了二十桌菜，拍完不许员工打包，全部倒进垃圾桶。",
    en: "The cafeteria prepares twenty tables of food for a publicity photo, then forbids staff from taking any and dumps it all in the trash.",
    answer: "暴殄天物", mode: "argue",
    explain: "Wantonly destroying valuable food is 暴殄天物."
  },
  {
    zh: "他辞职后没有任何收入，却天天从存款里付豪车月租，三年家底半年就快见底。",
    en: "With no income after quitting, he keeps paying monthly rent on a luxury car and burns through nearly three years of savings in six months.",
    answer: "坐吃山空", mode: "argue",
    explain: "Living only off existing reserves will exhaust them; that is 坐吃山空."
  },
  {
    zh: "社区办一场两百人的晚会，却订了两千份礼盒，还把只用一次的舞台全部镀金。",
    en: "For a two-hundred-person community event, they order two thousand gift boxes and gold-plate a stage that will be used once.",
    answer: "铺张浪费", mode: "argue",
    explain: "The needless scale and extravagance amount to 铺张浪费."
  },
  {
    zh: "他扬言一年内打造世界级芯片公司，却连代码、融资和供应链分别是什么都没弄明白。",
    en: "He vows to build a world-class chip company within a year but cannot explain coding, financing, or supply chains.",
    answer: "志大才疏", mode: "argue",
    explain: "His ambitions tower over his actual ability — 志大才疏."
  },
  {
    zh: "她没读方案第一页，只听说是新人写的，就撇嘴说这种东西不值得浪费时间。",
    en: "She has not read the first page; hearing that a newcomer wrote it is enough for her to sneer that it is not worth her time.",
    answer: "嗤之以鼻", mode: "argue",
    explain: "Her openly contemptuous sneer is 嗤之以鼻."
  },
  {
    zh: "维修员反复提醒轮胎已经开裂，他连看都不看，只说这种小事别来烦我。",
    en: "The mechanic repeatedly warns that the tire is cracked, but he will not even look and says not to bother him with trivialities.",
    answer: "不屑一顾", mode: "argue",
    explain: "He considers the warning beneath even a glance — 不屑一顾."
  },
  {
    zh: "财务告诉她公司账户只够撑一周，她照样修指甲、订机票，仿佛倒闭的是别人家。",
    en: "Finance tells her the company has one week of cash left; she keeps booking manicures and flights as if someone else's business were failing.",
    answer: "满不在乎", mode: "argue",
    explain: "Her total lack of concern in a serious situation is 满不在乎."
  },
  {
    zh: "家长连续三次书面告知孩子被霸凌，校方收下材料后锁进抽屉，始终没有回应。",
    en: "Parents submit three written reports that their child is being bullied; the school files them in a drawer and never responds.",
    answer: "置若罔闻", mode: "argue",
    explain: "The school acts as though repeated warnings were never heard — 置若罔闻."
  },
  {
    zh: "医生已经解释了五遍用药禁忌，他全程戴着耳机，回家后又指责医生没告诉他。",
    en: "The doctor explains the medication restrictions five times, but he keeps his headphones on and later accuses the doctor of never telling him.",
    answer: "充耳不闻", mode: "argue",
    explain: "He deliberately shuts his ears to clear advice — 充耳不闻."
  },
  {
    zh: "主管每天经过漏水的天花板，水桶都摆成一排了，他仍坚持说自己没发现问题。",
    en: "The manager walks past the leaking ceiling every day, even as buckets line the hall, yet insists he never noticed a problem.",
    answer: "视而不见", mode: "argue",
    explain: "He plainly sees the issue but chooses to ignore it — 视而不见."
  },
  {
    zh: "客服没查订单就复制一句“请耐心等待”关闭工单，把丢件责任直接推给物流。",
    en: "Without checking the order, support pastes 'please wait patiently,' closes the ticket, and passes responsibility for the lost parcel to the courier.",
    answer: "敷衍塞责", mode: "argue",
    explain: "A perfunctory response used to evade responsibility is 敷衍塞责."
  },
  {
    zh: "他明明厌恶合作方，为了拿合同仍满脸堆笑地敬酒，嘴上句句称兄道弟。",
    en: "He despises the business partner, yet smiles, toasts him, and calls him a brother in every sentence just to secure the contract.",
    answer: "虚与委蛇", mode: "argue",
    explain: "His friendly compliance is entirely insincere and strategic — 虚与委蛇."
  },
  {
    zh: "全组拿出测试数据证明方案会崩，她还是拒绝调整，坚持必须照自己的版本上线。",
    en: "The whole team presents test data showing the plan will fail, but she refuses any change and insists her version must launch.",
    answer: "一意孤行", mode: "argue",
    explain: "Ignoring everyone and stubbornly following only her own will is 一意孤行."
  },
  {
    zh: "明明是他停车挡住消防通道，被要求挪车时却拍桌说：我的车想停哪就停哪。",
    en: "His car blocks the fire lane, but when asked to move it, he pounds the table and says he can park wherever he wants.",
    answer: "蛮不讲理", mode: "argue",
    explain: "He rejects both facts and basic reason with brute obstinacy — 蛮不讲理."
  },
  {
    zh: "老板要求刚入职的设计师今晚独自完成原本需要十人两周做完的整套品牌升级。",
    en: "The boss orders a newly hired designer to finish alone tonight a full rebrand normally requiring ten people for two weeks.",
    answer: "强人所难", mode: "argue",
    explain: "Demanding what someone cannot reasonably do is 强人所难."
  },
  {
    zh: "她连发十几条语音追问朋友为什么五分钟没回，还要求对方立刻证明自己不是故意冷落她。",
    en: "She sends more than ten voice messages demanding to know why a friend has not replied in five minutes and insists on immediate proof it was not deliberate.",
    answer: "咄咄逼人", mode: "argue",
    explain: "Her relentless, pressuring manner gives the other person no room — 咄咄逼人."
  },
  {
    zh: "顾客一进门就踹椅子、摔菜单，高声质问谁敢让他排队。",
    en: "The customer enters kicking chairs and slamming menus, loudly demanding who dared make him wait in line.",
    answer: "气势汹汹", mode: "argue",
    explain: "His entrance is aggressively threatening — 气势汹汹."
  },
  {
    zh: "网上争论输了，他换了三个账号发威胁私信，还把对方照片做成侮辱表情包。",
    en: "After losing an online debate, he uses three accounts to send threats and turns the other person's photo into an abusive meme.",
    answer: "张牙舞爪", mode: "argue",
    explain: "His menacing display after losing the argument is 张牙舞爪."
  },
  {
    zh: "校队刚赢一场友谊赛，队长就带人堵在对手教室门口晃奖杯、喊他们手下败将。",
    en: "After one friendly-match win, the captain takes teammates to the opponents' classroom, waves the trophy, and calls them permanent losers.",
    answer: "耀武扬威", mode: "argue",
    explain: "Parading power to intimidate and humiliate others is 耀武扬威."
  },
  {
    zh: "博主伪造“自来水有毒”的检测截图，煽动居民围堵水厂，借机推销自己的净水器。",
    en: "A blogger fabricates a test claiming tap water is poisonous, incites residents to blockade the water plant, and uses the panic to sell his filters.",
    answer: "造谣惑众", mode: "argue",
    explain: "He invents a falsehood to mislead and agitate the public — 造谣惑众."
  }
];

QUIZ_BANK.push(...QUIZ_ARGUE_FULL_01);
