/* Full-coverage argue batch 03: 50 distinct missing idioms. */
const QUIZ_ARGUE_FULL_03 = [
  {
    zh: "新经理尚未到岗，办公室里已经传起他靠婚姻上位、还会裁掉孕妇的闲话，却没人说得出消息来源。",
    en: "Before the new manager even arrives, gossip spreads that he married his way upward and plans to fire pregnant staff, though nobody can name a source.",
    answer: "流言蜚语", mode: "argue",
    explain: "Unverified and damaging gossip circulating among people is 流言蜚语."
  },
  {
    zh: "他坚称把手机放进冰箱能增强信号，问他证据在哪里，只回答“网上有人说过”。",
    en: "He insists that putting a phone in the refrigerator improves reception; when asked for evidence, he says only, 'Someone online said so.'",
    answer: "无稽之谈", mode: "argue",
    explain: "A claim with no factual basis at all is 无稽之谈."
  },
  {
    zh: "评论员主张考试应按星座分配分数，还说交通堵塞是因为城市名字笔画不吉利。",
    en: "A commentator proposes assigning exam scores by zodiac sign and blames traffic jams on the unlucky stroke count of the city's name.",
    answer: "奇谈怪论", mode: "argue",
    explain: "These bizarre, unreasonable theories are 奇谈怪论."
  },
  {
    zh: "他从没经营过企业，却在千人论坛上拍桌断言：所有创业失败者都只是因为懒。",
    en: "Though he has never run a business, he pounds the table at a major forum and declares that every failed entrepreneur is simply lazy.",
    answer: "大放厥词", mode: "argue",
    explain: "His loud, arrogant, sweeping pronouncement is 大放厥词."
  },
  {
    zh: "她没看检测报告就说产品绝对无毒，发现数据不利后又随口改称那份报告是伪造的。",
    en: "Without reading the test, she declares the product completely safe; when the data turns unfavorable, she casually claims the report was forged.",
    answer: "信口雌黄", mode: "argue",
    explain: "Making false assertions at will, with no regard for facts, is 信口雌黄."
  },
  {
    zh: "他喝醉后把老板、外星人和楼下洗衣机扯进同一句话，前后完全听不出逻辑。",
    en: "Drunk, he puts the boss, aliens, and the downstairs washing machine into one sentence with no trace of coherent logic.",
    answer: "胡言乱语", mode: "argue",
    explain: "His incoherent stream of nonsense is 胡言乱语."
  },
  {
    zh: "部门里几个人建了排外小群，吃饭、分任务和投票都只带自己人，新同事根本插不进去。",
    en: "Several coworkers form an exclusive clique, including only insiders in lunches, assignments, and votes while shutting newcomers out.",
    answer: "拉帮结派", mode: "argue",
    explain: "Forming exclusive factions within a group is 拉帮结派."
  },
  {
    zh: "三名采购员抱团控制供应商名单，只让给他们回扣的公司中标，再共同瓜分好处。",
    en: "Three procurement officers form a faction, approve only vendors who pay them kickbacks, and divide the proceeds.",
    answer: "结党营私", mode: "argue",
    explain: "They organize as a faction specifically to pursue private gain — 结党营私."
  },
  {
    zh: "主任提拔所有支持自己的人，任何提出不同意见的员工都会被调去最差的岗位。",
    en: "The director promotes everyone who supports him and transfers any dissenter to the worst assignments.",
    answer: "党同伐异", mode: "argue",
    explain: "Favoring one's own camp while attacking dissenters is 党同伐异."
  },
  {
    zh: "竞争落选后，她故意向客户散布获胜者伪造学历的说法，明知那份学历已经核验过。",
    en: "After losing a bid, she deliberately tells clients the winner forged his degree, despite knowing it was verified.",
    answer: "恶意中伤", mode: "argue",
    explain: "She knowingly invents a damaging accusation to hurt a rival — 恶意中伤."
  },
  {
    zh: "那伙人偷拍视频后威胁店主：不给五万元，就把剪辑过的片段发给所有客户。",
    en: "A gang secretly films a shop owner and threatens to send edited footage to every customer unless paid fifty thousand yuan.",
    answer: "敲诈勒索", mode: "argue",
    explain: "Using threats to force payment is 敲诈勒索."
  },
  {
    zh: "开发商先用假合同骗老人签字，见老人反悔，又带保安强行收走了房契。",
    en: "A developer first tricks an elderly owner into signing a false contract, then sends guards to seize the deed when the owner objects.",
    answer: "巧取豪夺", mode: "argue",
    explain: "Obtaining property through deception and force is 巧取豪夺."
  },
  {
    zh: "地方官一年内新设二十多种名目收费，连农民挑菜进城都要交三次钱。",
    en: "Local officials invent more than twenty new levies in one year, charging farmers three times merely to carry vegetables into town.",
    answer: "横征暴敛", mode: "argue",
    explain: "Arbitrary, oppressive collection of taxes and fees is 横征暴敛."
  },
  {
    zh: "救灾物资每经过他审批一次就少一成，最终仓库缺掉的帐篷全进了他亲戚的网店。",
    en: "Each time relief supplies pass his approval, ten percent disappears; the missing tents ultimately appear in his relative's online store.",
    answer: "中饱私囊", mode: "argue",
    explain: "He uses goods under his control to enrich himself — 中饱私囊."
  },
  {
    zh: "法官收下被告送的豪车后，故意删除关键证据，让本应定罪的人当庭获释。",
    en: "After accepting a luxury car from the defendant, the judge suppresses key evidence and releases someone who should have been convicted.",
    answer: "贪赃枉法", mode: "argue",
    explain: "Taking a bribe and twisting the law is 贪赃枉法."
  },
  {
    zh: "校长把公开招聘的第一名刷掉，篡改面试分数，让毫无资格的外甥拿到岗位。",
    en: "The principal removes the top-ranked applicant, alters interview scores, and gives the job to an unqualified nephew.",
    answer: "徇私舞弊", mode: "argue",
    explain: "He cheats in an official process to favor a relative — 徇私舞弊."
  },
  {
    zh: "厂长用单位预算翻修自己别墅，却把发票写成职工宿舍安全改造。",
    en: "The factory director renovates his villa with company funds and records the invoices as safety work for employee housing.",
    answer: "损公肥私", mode: "argue",
    explain: "He harms public interests to increase his own wealth — 损公肥私."
  },
  {
    zh: "负责保管珠宝的夜班主管利用钥匙和监控盲区，连续三个月从保险柜里偷货。",
    en: "The night supervisor entrusted with guarding jewelry uses his keys and camera blind spots to steal from the safe for three months.",
    answer: "监守自盗", mode: "argue",
    explain: "The very person assigned to guard the property steals it — 监守自盗."
  },
  {
    zh: "交通法规培训讲师下课后酒驾，还提醒同行者帮他摘掉执法记录仪。",
    en: "After teaching a traffic-law class, the instructor drives drunk and asks a companion to remove the dashboard camera.",
    answer: "知法犯法", mode: "argue",
    explain: "He understands the law clearly and breaks it anyway — 知法犯法."
  },
  {
    zh: "店长向总部汇报顾客零投诉，同时威胁店员，谁敢把真实退货记录交上去就开除谁。",
    en: "The store manager reports zero complaints to headquarters while threatening to fire any employee who submits the real return records.",
    answer: "欺上瞒下", mode: "argue",
    explain: "He deceives superiors and suppresses the truth among subordinates — 欺上瞒下."
  },
  {
    zh: "他用几十家空壳公司转移资金，伪造审计和运输记录，试图让整笔巨款凭空消失。",
    en: "He routes funds through dozens of shell companies and fabricates audits and shipping records, trying to make a vast sum vanish unnoticed.",
    answer: "瞒天过海", mode: "argue",
    explain: "The elaborate scheme hides a major act beneath layers of deception — 瞒天过海."
  },
  {
    zh: "签约前展示的是进口设备，验收前夜却被悄悄换成廉价旧机器，铭牌也重新贴过。",
    en: "Imported equipment is shown before signing, but the night before inspection it is secretly replaced with cheap used machines bearing new labels.",
    answer: "偷天换日", mode: "argue",
    explain: "Secretly replacing the essential thing with another is 偷天换日."
  },
  {
    zh: "摊主把玻璃石装进珠宝证书对应的盒子，当作天然宝石卖给游客。",
    en: "The vendor puts colored glass into boxes matched to jewelry certificates and sells it to tourists as natural gemstones.",
    answer: "以假乱真", mode: "argue",
    explain: "Passing a counterfeit item off as genuine is 以假乱真."
  },
  {
    zh: "他把团队论文署成自己独作，又编造海外奖项，靠这些虚假履历成为所谓学术名家。",
    en: "He claims a team paper as his sole work and invents overseas awards, building a celebrated academic reputation on false credentials.",
    answer: "欺世盗名", mode: "argue",
    explain: "He deceives the public to steal an undeserved reputation — 欺世盗名."
  },
  {
    zh: "矿井瓦斯报警后，老板怕停产损失钱，仍命令工人下井，仿佛几十条命只是报表上的数字。",
    en: "After a mine gas alarm, the owner orders workers underground to avoid losing production, treating dozens of lives as mere figures on a spreadsheet.",
    answer: "草菅人命", mode: "argue",
    explain: "Treating human lives as worthless for profit is 草菅人命."
  },
  {
    zh: "军阀混战烧毁村庄和农田，百姓不是流离失所，就是在饥饿与炮火中丧命。",
    en: "Warlord fighting burns villages and fields, leaving civilians displaced, starving, or dead under bombardment.",
    answer: "生灵涂炭", mode: "argue",
    explain: "War has plunged ordinary lives into devastating suffering — 生灵涂炭."
  },
  {
    zh: "连续加税和征粮后，城里商铺关了一半，乡下人连第二天的口粮都找不到。",
    en: "After repeated tax and grain seizures, half the city's shops close and rural families cannot find food for the next day.",
    answer: "民不聊生", mode: "argue",
    explain: "The population can no longer sustain a basic livelihood — 民不聊生."
  },
  {
    zh: "洪水退后，公路两旁到处是失去家园、等待救济的灾民，哭声一路不断。",
    en: "After the flood recedes, displaced victims line the roads awaiting relief, with cries of grief heard everywhere.",
    answer: "哀鸿遍野", mode: "argue",
    explain: "Suffering and displaced people filling the land evoke 哀鸿遍野."
  },
  {
    zh: "楼上工地连续半年凌晨施工，震动让墙体开裂，一家老小被折磨得几乎撑不下去。",
    en: "For six months, construction upstairs continues before dawn; the vibrations crack the walls and leave the entire family barely able to endure.",
    answer: "苦不堪言", mode: "argue",
    explain: "Their suffering is so severe it is almost beyond words — 苦不堪言."
  },
  {
    zh: "系统改版后每笔报销要填十二张表，整个财务部从早到晚都在高声抱怨。",
    en: "After a system redesign requires twelve forms for every expense, the entire finance department complains loudly all day.",
    answer: "叫苦连天", mode: "argue",
    explain: "Everyone is loudly crying out about the hardship — 叫苦连天."
  },
  {
    zh: "小区停水两周仍照收服务费，居民走到哪里都在抱怨，连电梯里也全是投诉声。",
    en: "The complex has no water for two weeks but still charges service fees; complaints fill the elevators and every public corner.",
    answer: "怨声载道", mode: "argue",
    explain: "Widespread complaints heard everywhere are 怨声载道."
  },
  {
    zh: "强拆补偿被层层克扣后，数千居民挤满办事大厅，愤怒要求负责人公开账目。",
    en: "After demolition compensation is repeatedly skimmed, thousands of residents crowd the government hall and angrily demand public accounts.",
    answer: "民怨沸腾", mode: "argue",
    explain: "Public resentment has built to a boiling point — 民怨沸腾."
  },
  {
    zh: "统治者掠夺百姓、毁坏山林，连追随多年的部下也公开谴责他的所作所为。",
    en: "The ruler plunders citizens and destroys forests until even longtime followers publicly condemn his actions.",
    answer: "天怒人怨", mode: "argue",
    explain: "His conduct provokes universal outrage, as if from both heaven and people — 天怒人怨."
  },
  {
    zh: "学校隐瞒食物中毒后，家长们聚在校门口，挥着检测报告强烈要求问责。",
    en: "After the school conceals a food-poisoning outbreak, parents gather at the gate waving test reports and forcefully demand accountability.",
    answer: "群情激愤", mode: "argue",
    explain: "The whole crowd is stirred to intense anger — 群情激愤."
  },
  {
    zh: "领导砍掉员工医保给自己换豪车，连原本最支持他的老职工也不愿再替他说话。",
    en: "A leader cuts employee health benefits to buy himself a luxury car, losing even the veteran workers who once supported him.",
    answer: "不得人心", mode: "argue",
    explain: "His actions cost him the support and trust of the people — 不得人心."
  },
  {
    zh: "他为了独占公司逼走合伙人、欺骗客户、克扣亲信奖金，最后连司机都拒绝再跟他。",
    en: "To seize the company, he drives out partners, deceives clients, and withholds aides' bonuses until even his driver abandons him.",
    answer: "众叛亲离", mode: "argue",
    explain: "His followers turn against him and those close to him leave — 众叛亲离."
  },
  {
    zh: "董事长把所有敢提意见的人都赶走，如今会议桌旁只剩他自己，连一名可信任的助手都没有。",
    en: "The chairman expels everyone who challenges him; now he sits alone at the conference table without a single trusted aide.",
    answer: "孤家寡人", mode: "argue",
    explain: "By isolating himself from all support, he has become a 孤家寡人."
  },
  {
    zh: "联盟内部因利益争夺分成七派，成员不断退出，原有制度和共同目标全都维持不住。",
    en: "A struggle over benefits splits the alliance into seven factions; members keep leaving, and its institutions and shared goals no longer hold.",
    answer: "分崩离析", mode: "argue",
    explain: "The organization is breaking into hostile pieces from within — 分崩离析."
  },
  {
    zh: "首都失守后，各地守军一天之内全部投降，维持多年的政权顷刻间彻底垮掉。",
    en: "After the capital falls, regional forces surrender within a day and the long-standing regime collapses completely almost overnight.",
    answer: "土崩瓦解", mode: "argue",
    explain: "Its sudden and total collapse is 土崩瓦解."
  },
  {
    zh: "公司先长期拖欠工资，员工才集体离职，老板却说正是离职潮导致公司没钱发薪。",
    en: "The company withholds pay for months, causing a mass resignation; the owner then claims the resignations are why the company cannot pay wages.",
    answer: "倒果为因", mode: "argue",
    explain: "He treats the consequence as though it caused the original problem — 倒果为因."
  },
  {
    zh: "经理为了省一百元备份费，删除了唯一数据库，最后丢掉价值千万的客户资料。",
    en: "To save one hundred yuan on backups, the manager deletes the only database and loses client records worth millions.",
    answer: "因小失大", mode: "argue",
    explain: "A tiny saving causes an enormous loss — 因小失大."
  },
  {
    zh: "他逃掉一次十元停车费，却因此被拖车、罚款，还错过了价值十万元的签约。",
    en: "He dodges a ten-yuan parking fee, only to be towed, fined, and miss a contract worth one hundred thousand yuan.",
    answer: "得不偿失", mode: "argue",
    explain: "What he gains is nowhere near enough to cover what he loses — 得不偿失."
  },
  {
    zh: "她本想办聚会修复团队关系，结果座位安排不当，让两个积怨已久的小组当场争吵。",
    en: "She organizes a party to repair team relations, but a poor seating plan puts two feuding groups together and triggers a public fight.",
    answer: "事与愿违", mode: "argue",
    explain: "The outcome runs directly contrary to her intention — 事与愿违."
  },
  {
    zh: "海报本来已经简洁清楚，主管偏要再加二维码、三条口号和自己的半身照，反而没人看得懂重点。",
    en: "The poster is already clear, but the supervisor adds another QR code, three slogans, and his portrait until nobody can identify the main point.",
    answer: "画蛇添足", mode: "argue",
    explain: "An unnecessary addition spoils something already complete — 画蛇添足."
  },
  {
    zh: "家长想让孩子爱读书，便规定每读错一页罚站一小时，结果孩子看到书就害怕。",
    en: "Wanting a child to love reading, a parent imposes an hour of standing for every mistaken page, making the child afraid of books.",
    answer: "适得其反", mode: "argue",
    explain: "The method produces the exact opposite of the intended effect — 适得其反."
  },
  {
    zh: "核心产品曝出造假后，公司订单、股价和员工人数连续暴跌，几乎没有任何缓冲。",
    en: "After fraud is exposed in its core product, the company's orders, share price, and headcount plunge continuously with almost no pause.",
    answer: "一泻千里", mode: "argue",
    explain: "The situation declines with rapid, unstoppable momentum — 一泻千里."
  },
  {
    zh: "这家老店近五年服务一年比一年差，从排队半小时变成两小时，投诉也从每月十件涨到上百件。",
    en: "Service at the old shop worsens year after year: waits grow from thirty minutes to two hours, and monthly complaints rise from ten to more than a hundred.",
    answer: "江河日下", mode: "argue",
    explain: "Its condition is steadily deteriorating over time — 江河日下."
  },
  {
    zh: "曾经垄断市场的公司如今只剩一家门店，债主天天上门，品牌也快被年轻人遗忘。",
    en: "A company that once dominated the market now has one store left, daily visits from creditors, and a brand young customers barely remember.",
    answer: "日薄西山", mode: "argue",
    explain: "Its former power is nearing its end, like the setting sun — 日薄西山."
  },
  {
    zh: "这个协会会员只剩六人，会费断了半年，官网也只能勉强维持一个静态页面。",
    en: "The association has only six members left, has collected no dues for six months, and can barely keep a static website online.",
    answer: "气息奄奄", mode: "argue",
    explain: "The organization is barely alive and close to expiring — 气息奄奄."
  },
  {
    zh: "那套靠传真和纸质盖章运转的业务已经无人使用，负责人也承认最多只能再撑一个季度。",
    en: "The fax-and-paper-stamp service has no remaining users, and even its director admits it can survive at most one more quarter.",
    answer: "行将就木", mode: "argue",
    explain: "The obsolete operation is on the verge of its final end — 行将就木."
  }
];

QUIZ_BANK.push(...QUIZ_ARGUE_FULL_03);
