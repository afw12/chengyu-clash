/* Full-coverage argue batch 02: 50 distinct missing idioms. */
const QUIZ_ARGUE_FULL_02 = [
  {
    zh: "那人自称能预测地震，散布“今晚全城会沉没”的说法，催大家高价购买他的护身符。",
    en: "A self-proclaimed prophet says the entire city will sink tonight and urges frightened residents to buy his overpriced charms.",
    answer: "妖言惑众", mode: "argue",
    explain: "Bizarre, deceptive claims used to alarm the public are 妖言惑众."
  },
  {
    zh: "群主不断暗示所有外地人都来抢资源，硬把原本互助的社区群煽成了彼此敌视的阵地。",
    en: "The group owner keeps implying that outsiders are stealing local resources, turning a helpful community chat into a hostile camp.",
    answer: "蛊惑人心", mode: "argue",
    explain: "He poisons people's judgment and stirs hostility — 蛊惑人心."
  },
  {
    zh: "公司被查出拖欠工资，公关却把员工依法维权说成竞争对手组织的恶意攻击。",
    en: "After the company is caught withholding wages, its PR team portrays the employees' lawful complaints as a malicious attack organized by a competitor.",
    answer: "混淆视听", mode: "argue",
    explain: "The response muddies clear facts to mislead observers — 混淆视听."
  },
  {
    zh: "明明是商家卖出过期食品，负责人却指责曝光的顾客破坏营商环境。",
    en: "The store sold expired food, yet its manager blames the customer who exposed it for harming the business climate.",
    answer: "颠倒是非", mode: "argue",
    explain: "He reverses the moral judgment, condemning the victim instead of the wrongdoer — 颠倒是非."
  },
  {
    zh: "新负责人上任后取消安全检查、处罚说真话的人，还把违规者提拔成监督员。",
    en: "The new director cancels safety inspections, punishes truth-tellers, and promotes rule-breakers to oversight roles.",
    answer: "倒行逆施", mode: "argue",
    explain: "These perverse policies run against sound order and justice — 倒行逆施."
  },
  {
    zh: "父母出门后，他把客厅改成收费牌局，喝醉了又砸邻居的门，完全不管后果。",
    en: "Once his parents leave, he turns the living room into a gambling den, gets drunk, and smashes a neighbor's door without caring about consequences.",
    answer: "胡作非为", mode: "argue",
    explain: "His reckless series of wrongful acts is 胡作非为."
  },
  {
    zh: "这伙人专门在车站偷行李、敲诈游客，还逼小商贩交所谓保护费。",
    en: "The gang steals luggage at the station, extorts tourists, and forces small vendors to pay so-called protection money.",
    answer: "为非作歹", mode: "argue",
    explain: "Persistently committing harmful crimes is 为非作歹."
  },
  {
    zh: "他知道摄像头坏了，就当众拆开别人快递，还笑着说反正没人能证明。",
    en: "Knowing the camera is broken, he opens someone else's parcel in public and laughs that nobody can prove it.",
    answer: "肆无忌惮", mode: "argue",
    explain: "He acts brazenly with no fear or restraint — 肆无忌惮."
  },
  {
    zh: "经理仗着自己是老板的亲戚，报销假发票时还反问财务敢不敢拒绝。",
    en: "Relying on his relationship to the owner, the manager submits fake expenses and challenges finance to dare reject them.",
    answer: "有恃无恐", mode: "argue",
    explain: "His powerful backing makes him openly fearless — 有恃无恐."
  },
  {
    zh: "第一次他只是占用公共车位，没人制止后，干脆装上地锁，还向邻居收停车费。",
    en: "At first he merely occupies a shared parking spot; when nobody stops him, he installs a lock and starts charging neighbors to use it.",
    answer: "变本加厉", mode: "argue",
    explain: "Unchecked, his misconduct grows markedly worse — 变本加厉."
  },
  {
    zh: "两位同事已经快谈妥了，他偏把双方私下的气话贴进大群，让争执重新爆发。",
    en: "Two coworkers are close to reconciling when he posts each side's private angry remarks in the main chat, reigniting the fight.",
    answer: "火上浇油", mode: "argue",
    explain: "He deliberately makes an already tense conflict burn hotter — 火上浇油."
  },
  {
    zh: "她刚丢了工作，房东当天又通知涨租，朋友还把借给她的钱提前要回。",
    en: "She has just lost her job when the landlord raises the rent and a friend demands early repayment of a loan.",
    answer: "雪上加霜", mode: "argue",
    explain: "New hardship arriving on top of existing trouble is 雪上加霜."
  },
  {
    zh: "讨论预算本来只需讲数据，他却突然攻击对方的长相和家庭，句句都冲着伤人去。",
    en: "A budget discussion should be about numbers, but he attacks the other person's looks and family, choosing words solely to wound.",
    answer: "恶语相向", mode: "argue",
    explain: "He turns disagreement into direct verbal abuse — 恶语相向."
  },
  {
    zh: "每次问到那笔消失的捐款，负责人就立刻清场，还警告员工不准再提。",
    en: "Whenever the missing donation is mentioned, the director clears the room and warns staff never to raise it again.",
    answer: "讳莫如深", mode: "argue",
    explain: "Treating the matter as a deeply guarded taboo is 讳莫如深."
  },
  {
    zh: "老师问是谁改了成绩，他低头搓手，半天只挤出“那个……可能……我不太清楚”。",
    en: "Asked who altered the grade, he looks down, rubs his hands, and finally mutters, 'Well... maybe... I'm not really sure.'",
    answer: "支支吾吾", mode: "argue",
    explain: "His hesitant fragments show he is reluctant to answer plainly — 支支吾吾."
  },
  {
    zh: "被问昨晚去了哪里，她一句话停顿六次，每个地点都要说了又改。",
    en: "Asked where she went last night, she pauses six times in one sentence and keeps changing every location she names.",
    answer: "吞吞吐吐", mode: "argue",
    explain: "Her halting, reluctant speech is 吞吞吐吐."
  },
  {
    zh: "合同问是否自动续费，销售只说“我们会根据整体情况提供持续服务”，始终不回答是或不是。",
    en: "Asked whether the contract renews automatically, the salesperson says only, 'We provide continuing service according to the overall situation,' never answering yes or no.",
    answer: "含糊其辞", mode: "argue",
    explain: "He uses vague wording to avoid a definite answer — 含糊其辞."
  },
  {
    zh: "她先删除消费记录，又把新包藏到邻居家，家人问起时还用外套挡住空盒子。",
    en: "She deletes the purchase record, hides the new bag at a neighbor's home, and uses a coat to cover the empty box when family asks.",
    answer: "遮遮掩掩", mode: "argue",
    explain: "Her repeated attempts to conceal the truth are 遮遮掩掩."
  },
  {
    zh: "审计员问发票是谁开的，他一会儿去接水，一会儿接电话，就是不肯坐下回答。",
    en: "When the auditor asks who issued the invoice, he gets water, takes a call, and finds every reason not to sit down and answer.",
    answer: "躲躲闪闪", mode: "argue",
    explain: "He keeps physically and verbally evading the question — 躲躲闪闪."
  },
  {
    zh: "记者三次问产品是否发生过爆炸，发言人每次都换成“用户体验总体积极”之类的话。",
    en: "A reporter asks three times whether the product has exploded; each time the spokesperson pivots to phrases like 'overall user experience remains positive.'",
    answer: "闪烁其词", mode: "argue",
    explain: "The spokesperson repeatedly dodges a direct answer with evasive wording — 闪烁其词."
  },
  {
    zh: "他公开倡导员工准时下班，私下却把晚上十点前离开的人全记进降薪名单。",
    en: "He publicly promotes leaving work on time but privately puts anyone who leaves before 10 p.m. on a pay-cut list.",
    answer: "表里不一", mode: "argue",
    explain: "His outward position and private conduct contradict each other — 表里不一."
  },
  {
    zh: "他为了省钱买来没有认证的充电器，烧坏电脑后只能自己承担全部维修费。",
    en: "To save money he buys an uncertified charger; when it destroys his laptop, he has to pay the entire repair bill himself.",
    answer: "自食其果", mode: "argue",
    explain: "He must bear the consequence created by his own choice — 自食其果."
  },
  {
    zh: "她无视三次截止提醒，错过报名后却说这场比赛故意针对她；其实结果完全是她自己造成的。",
    en: "She ignores three deadline reminders, misses registration, and claims the contest targeted her, though the outcome was entirely of her own making.",
    answer: "咎由自取", mode: "argue",
    explain: "The blame belongs to her own avoidable actions — 咎由自取."
  },
  {
    zh: "他从早到晚都在抱怨工资、天气、咖啡和电梯，连同事打个喷嚏都能引出十分钟不满。",
    en: "He complains all day about pay, weather, coffee, and elevators; even a coworker's sneeze launches ten minutes of grievances.",
    answer: "牢骚满腹", mode: "argue",
    explain: "He seems filled to the brim with complaints — 牢骚满腹."
  },
  {
    zh: "中介收了老人定金后故意关机，等房子卖给别人，又伪造签名说是老人主动放弃。",
    en: "After taking an elderly buyer's deposit, the agent turns off his phone, sells the home to someone else, and forges a signature claiming the buyer withdrew.",
    answer: "卑鄙无耻", mode: "argue",
    explain: "The scheme is both vile and devoid of shame — 卑鄙无耻."
  },
  {
    zh: "他抄袭同学的论文获奖，被揭穿后竟要求原作者向他道歉，说曝光影响了他的名声。",
    en: "He wins a prize with a classmate's plagiarized paper, then demands the original author apologize because exposing him damaged his reputation.",
    answer: "无耻之尤", mode: "argue",
    explain: "Demanding an apology from the person he robbed is shamelessness at its extreme — 无耻之尤."
  },
  {
    zh: "官员一边收受救灾款回扣，一边在镜头前训斥灾民不懂感恩，脸上毫无愧色。",
    en: "An official takes kickbacks from disaster funds, then scolds victims on camera for being ungrateful without a trace of embarrassment.",
    answer: "寡廉鲜耻", mode: "argue",
    explain: "His lack of integrity and sense of shame is 寡廉鲜耻."
  },
  {
    zh: "同样的设计，国产品牌做的他看都不看，换个外国标签就立刻夸高级并愿意付十倍价格。",
    en: "He ignores the same design under a domestic brand, but praises it as sophisticated and pays ten times more once it carries a foreign label.",
    answer: "崇洋媚外", mode: "argue",
    explain: "Blindly worshipping foreign labels while belittling local ones is 崇洋媚外."
  },
  {
    zh: "公司培养他五年，他跳槽前却把客户名单偷偷复制给竞争对手换取签约奖金。",
    en: "After five years of training from his company, he secretly copies its client list for a competitor in exchange for a signing bonus.",
    answer: "吃里扒外", mode: "argue",
    explain: "He benefits from one side while secretly helping its rival — 吃里扒外."
  },
  {
    zh: "为了得到骗子许诺的职位，他不仅替对方洗钱，还公开与揭穿骗局的亲生父亲断绝关系。",
    en: "To obtain a job promised by a fraudster, he launders money for him and publicly cuts ties with his own father for exposing the scam.",
    answer: "认贼作父", mode: "argue",
    explain: "He betrays his own side and attaches himself to a villain for gain — 认贼作父."
  },
  {
    zh: "会计做假账，仓库主管销毁出入库记录，两人分工掩盖侵占货款的事实。",
    en: "The accountant falsifies the books while the warehouse chief destroys inventory records; together they conceal stolen payments.",
    answer: "狼狈为奸", mode: "argue",
    explain: "Two bad actors cooperate closely in wrongdoing — 狼狈为奸."
  },
  {
    zh: "他本来没参与作弊，为了进所谓核心圈，也开始替那群人传答案、统一口供。",
    en: "He was not originally involved in cheating, but to enter the inner circle he starts passing answers and coordinating false stories for them.",
    answer: "同流合污", mode: "argue",
    explain: "He joins corrupt people and takes part in their misconduct — 同流合污."
  },
  {
    zh: "几个靠虚假测评赚钱的博主一见如故，互相颁奖、互相吹捧，再一起封杀揭假的消费者。",
    en: "Several influencers who profit from fake reviews immediately bond, give one another awards, trade praise, and jointly blacklist consumers who expose them.",
    answer: "沆瀣一气", mode: "argue",
    explain: "People of the same corrupt kind colluding together are 沆瀣一气."
  },
  {
    zh: "起初她知道群里嘲笑转学生不对，可看大家都在发，她也跟着制作侮辱图片。",
    en: "She knows mocking the transfer student is wrong, but once everyone joins in, she follows the crowd and makes an insulting image too.",
    answer: "随波逐流", mode: "argue",
    explain: "She abandons her judgment and follows the prevailing crowd — 随波逐流."
  },
  {
    zh: "主管每次发现销售伪造签名都只口头提醒，结果对方胆子越来越大，最终骗走客户全部定金。",
    en: "Each time a salesperson forges a signature, the supervisor gives only a verbal reminder; emboldened, the salesperson eventually steals a client's entire deposit.",
    answer: "姑息养奸", mode: "argue",
    explain: "Repeated tolerance allows wrongdoing to grow — 姑息养奸."
  },
  {
    zh: "他觉得那名员工虽然常偷资料但能力强，坚持留用，半年后核心技术被整套卖给了对手。",
    en: "He keeps an employee who often steals documents because the employee is talented; six months later the entire core technology is sold to a rival.",
    answer: "养虎为患", mode: "argue",
    explain: "Keeping a dangerous person close eventually creates disaster — 养虎为患."
  },
  {
    zh: "店主为了打击隔壁商铺，请来一伙收保护费的人撑场，没多久自己的店也被他们控制。",
    en: "To intimidate a neighboring shop, the owner invites an extortion gang in; before long, the gang controls his store too.",
    answer: "引狼入室", mode: "argue",
    explain: "He brings a dangerous outsider into his own space and suffers for it — 引狼入室."
  },
  {
    zh: "管理员嫌登记麻烦，主动把仓库钥匙交给有盗窃前科的临时工，让他夜里自己取货。",
    en: "To avoid paperwork, the manager hands the warehouse key to a temp with a theft record and lets him collect goods alone at night.",
    answer: "开门揖盗", mode: "argue",
    explain: "He practically welcomes a thief in by removing every safeguard — 开门揖盗."
  },
  {
    zh: "警方已经抓住诈骗团伙头目，负责人却私下收钱把他放走，几天后又有十几名老人被骗。",
    en: "Police catch the fraud ring's leader, but an official secretly takes money and releases him; days later, more elderly victims are cheated.",
    answer: "放虎归山", mode: "argue",
    explain: "Releasing a dangerous offender gives him the chance to harm again — 放虎归山."
  },
  {
    zh: "施工队为省事把有裂缝的承重柱刷漆盖住，即使暂时交房，未来也必然麻烦不断。",
    en: "To save effort, builders paint over a cracked load-bearing column; even if the property passes today, serious trouble will persist.",
    answer: "后患无穷", mode: "argue",
    explain: "The concealed danger will produce endless future problems — 后患无穷."
  },
  {
    zh: "工厂把重金属废水排进灌溉河，污染进入土壤和食物链，可能影响当地几代人。",
    en: "A factory dumps heavy-metal wastewater into an irrigation river, contaminating soil and the food chain for potentially generations.",
    answer: "贻害无穷", mode: "argue",
    explain: "The wrongdoing leaves vast, enduring harm behind — 贻害无穷."
  },
  {
    zh: "那名将领为私利出卖整座城，百年后当地人提起他的名字仍把它当作背叛的代称。",
    en: "A general sells out an entire city for personal gain; a century later, locals still use his name as a synonym for betrayal.",
    answer: "遗臭万年", mode: "argue",
    explain: "His disgrace survives long after his death — 遗臭万年."
  },
  {
    zh: "这家公司接连被曝克扣工资、伪造质检、拖欠货款，如今业内没人愿意再与它签约。",
    en: "After repeated scandals involving stolen wages, fake inspections, and unpaid suppliers, no one in the industry will sign with the company.",
    answer: "声名狼藉", mode: "argue",
    explain: "Its reputation has been thoroughly ruined by scandal — 声名狼藉."
  },
  {
    zh: "那个平台因纵容诈骗和倒卖隐私被多国处罚，连没用过的人都知道它不可信。",
    en: "The platform is punished in several countries for enabling fraud and selling personal data; even people who never used it know it cannot be trusted.",
    answer: "臭名昭著", mode: "argue",
    explain: "Its bad reputation is notorious and widely known — 臭名昭著."
  },
  {
    zh: "这家旅行社宰客的视频传遍各地，外省游客还没落地就已收到朋友提醒千万别去。",
    en: "Videos of the agency cheating tourists spread everywhere; visitors from other provinces receive warnings before they even arrive.",
    answer: "臭名远扬", mode: "argue",
    explain: "Its disgraceful reputation has traveled far — 臭名远扬."
  },
  {
    zh: "公交车上老人摔倒，十几个人举手机拍摄却无人搀扶，评论区还拿他的狼狈做笑料。",
    en: "An elderly man falls on a bus; a dozen people film instead of helping, and commenters turn his distress into a joke.",
    answer: "世风日下", mode: "argue",
    explain: "The scene prompts a lament that public morals are declining — 世风日下."
  },
  {
    zh: "他怀念从前邻里互相看孩子的日子，再看如今有人连救命药都敢卖假，忍不住感叹世道人情变了。",
    en: "He remembers neighbors once caring for one another's children; seeing people now sell fake life-saving medicine makes him lament how human decency has changed.",
    answer: "人心不古", mode: "argue",
    explain: "His lament that people are no longer as honest and kind as before is 人心不古."
  },
  {
    zh: "快递晚了十分钟，他从电梯一路脏话不断，见到骑手还追着对方继续骂。",
    en: "A delivery is ten minutes late, and he curses nonstop from the elevator onward, continuing to berate the courier face to face.",
    answer: "骂骂咧咧", mode: "argue",
    explain: "His continual muttering and shouting of abuse is 骂骂咧咧."
  },
  {
    zh: "同事请她确认文件，她不直接回答，只阴沉地说：“你这种水平也敢让我确认？”",
    en: "Asked to review a document, she gives no answer and says icily, 'Someone at your level dares ask me to check this?'",
    answer: "冷言冷语", mode: "argue",
    explain: "Her unfriendly, cutting remarks are 冷言冷语."
  },
  {
    zh: "任命还没公布，办公室里已经传出“她靠关系上位”“他马上要被开除”等没有来源的闲话。",
    en: "Before the appointment is announced, unsourced whispers spread around the office that she used connections and he is about to be fired.",
    answer: "风言风语", mode: "argue",
    explain: "These baseless rumors and insinuations are 风言风语."
  }
];

QUIZ_BANK.push(...QUIZ_ARGUE_FULL_02);
