/* Quiz batch B: 50 scenes, answers pre-locked from the unused pool.
   argue 20 · sarcasm 15 · praise 15 */
const QUIZ_BATCH_B = [
  // ---- ARGUE 20 ----
  { zh: "他刚上台就把老员工全都调去了边缘部门。", en: "Fresh into office, he exiled every veteran employee to the fringes.",
    answer: "排除异己", mode: "argue", explain: "Marginalizing every established employee after taking power is 排除异己." },
  { zh: "方案被否了三次，他还按原样又交了一遍。", en: "The proposal got rejected three times. He resubmitted it unchanged.",
    answer: "顽固不化", mode: "argue", explain: "Refusing to change after three clear rejections is 顽固不化." },
  { zh: "他把自己的失误写成报告，签名栏写的是实习生。", en: "He wrote up his own mistake and signed the intern's name on the report.",
    answer: "嫁祸于人", mode: "argue", explain: "Assigning his own mistake to an innocent intern is 嫁祸于人." },
  { zh: "他为上位把亲兄弟的丑事捅给了媒体。", en: "To climb the ladder, he leaked his own brother's scandal to the press.",
    answer: "卖友求荣", mode: "argue", explain: "Betraying someone close for personal advancement is 卖友求荣." },
  { zh: "他借了公司的名义办私事，还让前台帮忙掩护。", en: "He runs private errands under the company's name — and makes the receptionist cover for him.",
    answer: "假公济私", mode: "argue", explain: "Using public authority and company resources for private business is 假公济私." },
  { zh: "他在业主群说话永远夹枪带棒，没一句好话。", en: "In the owners' group chat, every sentence he types comes loaded with barbwire.",
    answer: "恶语中伤", mode: "argue", explain: "Habitually using barbed language to hurt others is 恶语中伤." },
  // ---- SARCASM 15 ----
  { zh: "他跟你聊了三小时人生哲学，没提他借的钱。", en: "Three hours of philosophy with him. Not one word about the money he owes you.",
    answer: "避而不谈", mode: "argue", explain: "Talking around every subject except the debt is 避而不谈." },
  { zh: "群里让大家提意见，他提了，然后被移出了群。", en: "The group asked for honest feedback. He gave it. Then he was removed from the group.",
    answer: "畅所欲言", mode: "sarcasm", explain: "Being punished immediately after an invitation to speak freely makes 畅所欲言 ironic." },
  // ---- PRAISE 15 ----
  { zh: "婚礼上婆婆致辞，把儿媳妇夸得像亲生女儿一样。", en: "At the wedding, the mother-in-law's toast praised the bride like her own daughter.",
    answer: "和蔼可亲", mode: "praise", explain: "Her warm, inclusive praise makes her seem 和蔼可亲." },
  { zh: "台风夜他守在配电房，天亮前恢复了全楼供电。", en: "Through the typhoon night he guarded the power room; electricity was back by dawn.",
    answer: "恪尽职守", mode: "praise", explain: "Guarding essential equipment through a typhoon is 恪尽职守." },
  { zh: "这对双胞胎一个拿了化学奖一个拿了物理奖。", en: "The twins took gold in chemistry AND physics.",
    answer: "出类拔萃", mode: "praise", explain: "Winning top honors in two scientific fields shows the pair 出类拔萃." },
];
QUIZ_BANK.push(...QUIZ_BATCH_B);
