/* Full-coverage argue batch 05: 50 distinct missing idioms. */
const QUIZ_ARGUE_FULL_05 = [
  {
    zh: "宣传册把一间普通培训机构包装成“国际顶尖学院”，可师资、课程和认证没有一项达到宣传标准。",
    en: "The brochure markets an ordinary training center as a world-class academy, although its faculty, courses, and credentials meet none of those claims.",
    answer: "名不副实", mode: "argue",
    explain: "The impressive title is not supported by reality, which is 名不副实."
  },
  {
    zh: "他主动帮新同事保管门禁卡，并非出于热心，而是想趁机复制一张进入资料室。",
    en: "He offers to keep a new coworker's access card, not out of kindness, but so he can copy it and enter the records room.",
    answer: "居心不良", mode: "argue",
    explain: "His apparently helpful act conceals a harmful intention — 居心不良."
  },
  {
    zh: "两位副经理在会上客气握手，私下却各自拉拢客户、截留信息，争夺同一个职位。",
    en: "The two deputy managers shake hands politely in meetings while privately courting clients and withholding information to compete for the same position.",
    answer: "明争暗斗", mode: "argue",
    explain: "Their rivalry combines open competition with covert attacks — 明争暗斗."
  },
  {
    zh: "两家公司表面承诺共享技术，实际都故意交付过期资料，还不断试探对方的商业底线。",
    en: "The two companies promise to share technology but each supplies outdated material and keeps probing the other's commercial limits.",
    answer: "尔虞我诈", mode: "argue",
    explain: "Both sides deceive and distrust each other, a classic case of 尔虞我诈."
  },
  {
    zh: "部门里没人专心做项目，几个人整天拉帮结派、挑拨关系，只为在年终评优时压过同事。",
    en: "No one in the department focuses on the project; several people form cliques and manipulate relationships merely to outrank coworkers at the annual review.",
    answer: "勾心斗角", mode: "argue",
    explain: "Their energy goes into scheming against one another — 勾心斗角."
  },
  {
    zh: "竞选对手不仅公开质疑她的方案，还匿名向媒体投递剪辑过的录音，企图毁掉她的声誉。",
    en: "Her rival openly questions her platform and also anonymously sends edited recordings to the press in an attempt to ruin her reputation.",
    answer: "明枪暗箭", mode: "argue",
    explain: "She faces attacks both in public and from concealment — 明枪暗箭."
  },
  {
    zh: "组长拒绝任何讨论，声称整个团队只能照他的想法做，其他人的判断都没有价值。",
    en: "The team leader refuses all discussion, insisting that everyone must follow his ideas because no one else's judgment has value.",
    answer: "唯我独尊", mode: "argue",
    explain: "He treats himself as the only person worthy of authority or respect — 唯我独尊."
  },
  {
    zh: "董事长把财务、人事和采购都交给自己的亲信控制，任何反对意见都无法传到董事会。",
    en: "The chairman places finance, personnel, and procurement under his loyalists, preventing any dissenting view from reaching the board.",
    answer: "一手遮天", mode: "argue",
    explain: "He uses concentrated power to hide the truth and block opposition — 一手遮天."
  },
  {
    zh: "邻居装修完全符合规定，他却天天跑去指挥工人改颜色、换布局，连家具位置也要管。",
    en: "Although his neighbor's renovation follows every rule, he keeps ordering the workers to change colors, alter the layout, and even move the furniture.",
    answer: "横加干涉", mode: "argue",
    explain: "He intrudes forcefully into affairs that are not his to control — 横加干涉."
  },
  {
    zh: "他从不解释任务背景，只坐在办公室里不断下命令，还要求所有人立刻执行，不许提问。",
    en: "He never explains the purpose of a task; he simply issues orders from his office and demands immediate obedience without questions.",
    answer: "发号施令", mode: "argue",
    explain: "His role is reduced to arrogantly giving commands — 发号施令."
  },
  {
    zh: "设计师还没提交方案，财务主管便绕过项目负责人，擅自替整个创意团队确定了版式。",
    en: "Before the designer submits a proposal, the finance director bypasses the project lead and decides the layout for the entire creative team.",
    answer: "越俎代庖", mode: "argue",
    explain: "He oversteps his own duties to do someone else's job — 越俎代庖."
  },
  {
    zh: "武装人员为了逼村民交出粮食，把老人和孩子关在烈日下数日，不给水喝。",
    en: "To force villagers to surrender their grain, armed men confine elderly people and children under the scorching sun for days without water.",
    answer: "惨无人道", mode: "argue",
    explain: "Such cruel treatment is utterly devoid of humane standards — 惨无人道."
  },
  {
    zh: "诈骗团伙明知药物会加重病情，仍专门向绝望的患者高价推销，甚至阻止他们就医。",
    en: "Knowing the drug will worsen patients' conditions, the fraud ring sells it at high prices to desperate people and even discourages real treatment.",
    answer: "灭绝人性", mode: "argue",
    explain: "Exploiting the gravely ill in this way shows a total loss of humanity — 灭绝人性."
  },
  {
    zh: "他为了骗取保险金，竟亲手烧掉家人居住的房子，完全不顾屋里还有人。",
    en: "To collect insurance money, he sets fire to the home where his family lives, without caring that people are still inside.",
    answer: "丧心病狂", mode: "argue",
    explain: "The act is so vicious and irrational that it can only be called 丧心病狂."
  },
  {
    zh: "承包商偷换救生设备，把省下的钱装进自己口袋，明知这会让矿工随时丧命。",
    en: "A contractor substitutes defective rescue gear and pockets the savings, fully aware that miners could die because of it.",
    answer: "丧尽天良", mode: "argue",
    explain: "Profiting by knowingly endangering lives shows no conscience at all — 丧尽天良."
  },
  {
    zh: "工厂深夜把有毒废液排进村民饮用的河流，还销毁检测报告掩盖污染。",
    en: "The factory dumps toxic waste at night into a river used for drinking water and destroys test reports to conceal the pollution.",
    answer: "伤天害理", mode: "argue",
    explain: "The conduct violates both moral principle and basic human welfare — 伤天害理."
  },
  {
    zh: "这个团伙从盗窃、勒索到贩卖假药样样都干，只要能赚钱便毫无底线。",
    en: "The gang engages in theft, extortion, and counterfeit medicine, stopping at nothing whenever profit is possible.",
    answer: "无恶不作", mode: "argue",
    explain: "They commit every kind of wrongdoing without restraint — 无恶不作."
  },
  {
    zh: "放贷人先用低息诱使渔民借款，再层层追加费用，最后连渔船和住房都夺走。",
    en: "The lender entices fishermen with low rates, piles on fees, and ultimately takes both their boats and homes.",
    answer: "敲骨吸髓", mode: "argue",
    explain: "His exploitation squeezes victims to the point of ruin — 敲骨吸髓."
  },
  {
    zh: "物业把正常维护拆成十几个收费项目，又编出“景观协调费”，借机向住户多收钱。",
    en: "The property manager splits routine maintenance into a dozen charges and invents a landscape coordination fee to extract more money from residents.",
    answer: "巧立名目", mode: "argue",
    explain: "Inventing plausible-sounding charges for improper gain is 巧立名目."
  },
  {
    zh: "他已有三套房和一家盈利公司，却仍侵占合伙人的分红，觉得再多财富也不够。",
    en: "Despite owning three homes and a profitable company, he withholds his partner's dividends because no amount of wealth ever feels sufficient.",
    answer: "欲壑难填", mode: "argue",
    explain: "His limitless greed is an appetite that cannot be filled — 欲壑难填."
  },
  {
    zh: "听说老同学中了彩票，他立刻从多年不联系变成天天登门，还主动提出替人管理奖金。",
    en: "On hearing that an old classmate won the lottery, he suddenly visits every day after years of silence and offers to manage the winnings.",
    answer: "见钱眼开", mode: "argue",
    explain: "The sight of money instantly awakens his enthusiasm and greed — 见钱眼开."
  },
  {
    zh: "采购员为了收取高额回扣，明知零件不合格仍批准入库，把乘客安全抛在脑后。",
    en: "To receive a large kickback, the buyer approves defective parts despite knowing the danger, putting passenger safety out of mind.",
    answer: "利令智昏", mode: "argue",
    explain: "The prospect of profit overwhelms his judgment — 利令智昏."
  },
  {
    zh: "年轻研究员取得突破后，主任不但压下成果，还故意不给实验资源，怕对方超过自己。",
    en: "After a young researcher makes a breakthrough, the director suppresses the result and withholds resources for fear of being surpassed.",
    answer: "嫉贤妒能", mode: "argue",
    explain: "He resents and obstructs someone precisely because of that person's talent — 嫉贤妒能."
  },
  {
    zh: "她捏造“学校食堂使用过期肉”的消息发到家长群，引发恐慌后又拒绝提供证据。",
    en: "She invents a claim that the school cafeteria uses expired meat, spreads it among parents, and refuses to provide evidence after panic erupts.",
    answer: "造谣生事", mode: "argue",
    explain: "She fabricates a rumor specifically to create trouble — 造谣生事."
  },
  {
    zh: "他趁办公室没人，把文件塞进衣服里，贴着墙避开摄像头，听见脚步就立刻躲起来。",
    en: "With the office empty, he hides a document under his clothes, hugs the wall to avoid cameras, and ducks away whenever he hears footsteps.",
    answer: "偷偷摸摸", mode: "argue",
    explain: "His furtive behavior shows he is acting secretly and dishonestly — 偷偷摸摸."
  },
  {
    zh: "那人进店后不看商品，只不停斜眼观察收银台和出口，手也一直藏在外套里。",
    en: "The man enters the shop without looking at the merchandise, repeatedly glancing at the register and exits while keeping a hand inside his coat.",
    answer: "贼眉鼠眼", mode: "argue",
    explain: "His shifting, suspicious looks suggest dishonest intentions — 贼眉鼠眼."
  },
  {
    zh: "小说把恶霸写成尖嘴缩腮、目光闪烁的猥琐模样，一出场便让人心生厌恶。",
    en: "The novel portrays the bully with a pinched face, shifty eyes, and a repellent appearance that inspires dislike at first sight.",
    answer: "獐头鼠目", mode: "argue",
    explain: "The description uses an old idiom for an ugly, villainous-looking face — 獐头鼠目."
  },
  {
    zh: "面对有权势的客户，他弯腰赔笑、句句奉承；客户一走，他马上对服务员颐指气使。",
    en: "Before a powerful client he bows, grins, and flatters every word; once the client leaves, he orders the staff around contemptuously.",
    answer: "奴颜媚骨", mode: "argue",
    explain: "His servile flattery reveals a deeply obsequious character — 奴颜媚骨."
  },
  {
    zh: "老板提出明显违法的要求，几名主管仍连声答应，没人敢表达半点不同意见。",
    en: "The boss makes an obviously illegal demand, yet several managers agree at once and none dares express the slightest objection.",
    answer: "俯首帖耳", mode: "argue",
    explain: "They submit meekly and obey without resistance — 俯首帖耳."
  },
  {
    zh: "为了保住职位，他每天给新领导送礼、说尽好话，甚至公开贬低曾经提拔自己的前任。",
    en: "To keep his position, he brings the new leader gifts, showers him with praise, and even publicly belittles the predecessor who promoted him.",
    answer: "摇尾乞怜", mode: "argue",
    explain: "His humiliating display of submission seeks favor and mercy — 摇尾乞怜."
  },
  {
    zh: "他把本国防务机密交给外国势力，只为换取头衔、豪宅和个人政治利益。",
    en: "He hands national defense secrets to a foreign power in exchange for a title, a mansion, and personal political benefit.",
    answer: "卖国求荣", mode: "argue",
    explain: "He betrays his country in pursuit of personal status — 卖国求荣."
  },
  {
    zh: "仓库管理员暗中把门锁密码告诉外面的盗窃团伙，约定得手后分走一半赃款。",
    en: "A warehouse employee secretly gives the lock code to thieves outside, agreeing to take half the proceeds after the robbery.",
    answer: "里应外合", mode: "argue",
    explain: "An insider and outsiders coordinate to carry out the crime — 里应外合."
  },
  {
    zh: "几家供应商事先商量好报价，轮流中标，把公共采购价格抬高了三倍。",
    en: "Several suppliers secretly coordinate their bids and take turns winning, tripling the cost of public procurement.",
    answer: "串通一气", mode: "argue",
    explain: "They collude closely to pursue a dishonest common purpose — 串通一气."
  },
  {
    zh: "这两个承包商都靠偷工减料赚钱，出事后又用同样的借口推卸责任，谁也不比谁清白。",
    en: "Both contractors profit by cutting corners and use the same excuses after accidents; neither is any cleaner than the other.",
    answer: "一丘之貉", mode: "argue",
    explain: "The two are alike in their bad conduct — 一丘之貉."
  },
  {
    zh: "一个爱编造数据，一个擅长包装假成果，两人见面后立刻合作骗取科研经费。",
    en: "One fabricates data and the other packages false results; upon meeting, they immediately join forces to obtain research funding fraudulently.",
    answer: "臭味相投", mode: "argue",
    explain: "Shared bad tastes and habits draw them together — 臭味相投."
  },
  {
    zh: "酒吧后巷那群人专门围堵落单顾客，彼此包庇，还把抢来的东西集中销赃。",
    en: "The group behind the bar targets isolated customers, shields one another, and sells their stolen goods through a shared channel.",
    answer: "狐群狗党", mode: "argue",
    explain: "They are a gang of disreputable people joined for wrongdoing — 狐群狗党."
  },
  {
    zh: "整顿开始后，假大师、黑中介和地下掮客纷纷现身阻挠，试图保住非法生意。",
    en: "When the cleanup begins, fake gurus, crooked brokers, and underground fixers emerge to obstruct it and protect their illegal trades.",
    answer: "牛鬼蛇神", mode: "argue",
    explain: "The phrase groups together assorted sinister and disreputable elements — 牛鬼蛇神."
  },
  {
    zh: "账号运营者不断伪造截图、挑动群体对立，唯恐网络社区恢复平静。",
    en: "The account operator continually fabricates screenshots and inflames group conflict, determined to keep the online community from becoming peaceful.",
    answer: "兴妖作怪", mode: "argue",
    explain: "He repeatedly stirs up disorder through malicious tricks — 兴妖作怪."
  },
  {
    zh: "他们计划先制造产品短缺，再散布涨价消息，等公众抢购时高价抛售囤货。",
    en: "They plan to create a shortage, spread news of a price increase, and sell their stockpile at inflated prices when the public rushes to buy.",
    answer: "阴谋诡计", mode: "argue",
    explain: "The scheme relies on secret planning and deception — 阴谋诡计."
  },
  {
    zh: "他一会儿伪造邮件，一会儿安排假证人，还故意留下线索嫁祸竞争者，手段层出不穷。",
    en: "He forges emails, arranges false witnesses, and plants clues to frame a rival, producing one deceptive device after another.",
    answer: "诡计多端", mode: "argue",
    explain: "His many varied tricks make him 诡计多端."
  },
  {
    zh: "同事当面从未提出异议，却匿名向总部诬告她泄密，想让她在毫无防备时被开除。",
    en: "A coworker never objects to her face but anonymously accuses her of leaking secrets, hoping she will be dismissed without warning.",
    answer: "暗箭伤人", mode: "argue",
    explain: "The anonymous accusation is a covert attack intended to harm — 暗箭伤人."
  },
  {
    zh: "父亲不便直接责怪客人，便故意训斥孩子“怎么有人吃饭从不守时”，其实句句都说给客人听。",
    en: "Unable to rebuke the guest directly, the father scolds his child about people who are never punctual for meals, clearly directing every word at the guest.",
    answer: "指鸡骂狗", mode: "argue",
    explain: "He criticizes one person indirectly by pretending to scold another — 指鸡骂狗."
  },
  {
    zh: "员工只是把表格字号调错了，经理却趁机翻出三年前的旧事，长篇指责他不忠诚。",
    en: "An employee merely uses the wrong font size, but the manager seizes on it to revive a three-year-old dispute and accuse him at length of disloyalty.",
    answer: "借题发挥", mode: "argue",
    explain: "He uses a minor incident as a pretext to pursue a broader grievance — 借题发挥."
  },
  {
    zh: "孩子打碎一只普通杯子，她立刻召集全家开会，声称这表明家庭教育已经彻底失败。",
    en: "When a child breaks an ordinary cup, she calls a family meeting and declares that the accident proves their entire approach to parenting has failed.",
    answer: "小题大做", mode: "argue",
    explain: "She turns a trivial matter into a major crisis — 小题大做."
  },
  {
    zh: "他为打击对手公开伪造的账本，没想到调查顺藤摸瓜，反而查出了他自己的受贿记录。",
    en: "He publishes a forged ledger to attack a rival, but the resulting investigation follows the trail to his own bribery records.",
    answer: "引火烧身", mode: "argue",
    explain: "His attempt to cause trouble brings danger back upon himself — 引火烧身."
  },
  {
    zh: "明知山路因暴雪封闭，他偏要绕过警戒线独自上山，最后只能请求救援。",
    en: "Although the mountain road is closed by a blizzard, he bypasses the barrier and climbs alone, ultimately having to call for rescue.",
    answer: "自讨苦吃", mode: "argue",
    explain: "He knowingly creates hardship for himself — 自讨苦吃."
  },
  {
    zh: "她长期用假订单夸大业绩，如今客户退款、税务追查和信用破产全都找上门来。",
    en: "After years of inflating sales with fake orders, she now faces customer refunds, a tax investigation, and destroyed credit.",
    answer: "自作自受", mode: "argue",
    explain: "She must bear the consequences of her own misconduct — 自作自受."
  },
  {
    zh: "那名骗子专门骗取老人养老金，被判刑后，连曾经的同伙都认为这个结果并不冤枉。",
    en: "The swindler targets elderly people's pensions; after his conviction, even former accomplices agree that the outcome is deserved.",
    answer: "罪有应得", mode: "argue",
    explain: "The punishment appropriately follows the wrongdoing — 罪有应得."
  },
  {
    zh: "他以为删掉聊天记录就查不到泄密，却忘了公司服务器每天都会自动备份。",
    en: "He thinks deleting his chat history will conceal the leak, forgetting that the company server makes automatic backups every day.",
    answer: "自作聪明", mode: "argue",
    explain: "His attempt to be clever only exposes his shallow judgment — 自作聪明."
  },
  {
    zh: "球队靠对方乌龙球侥幸取胜，他却一路昂着头炫耀，仿佛冠军奖杯已经到手。",
    en: "After his team narrowly wins through an opponent's own goal, he struts around boasting as though the championship trophy were already theirs.",
    answer: "得意洋洋", mode: "argue",
    explain: "His pride is openly displayed in his expression and behavior — 得意洋洋."
  }
];

QUIZ_BANK.push(...QUIZ_ARGUE_FULL_05);
