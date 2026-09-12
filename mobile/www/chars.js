/* Character-by-character breakdowns — the fun "recipe" of each idiom.
   Each entry: [hanzi, playful English gloss]. Rendered as tiles + a
   literal equation on the card. */

const CHAR_BREAKDOWN = {
  "无话可说": [["无", "no"], ["话", "words"], ["可", "can"], ["说", "said"]],
  "甘拜下风": [["甘", "gladly"], ["拜", "bow"], ["下", "down"], ["风", "wind"]],
  "大开眼界": [["大", "big"], ["开", "open"], ["眼", "eye"], ["界", "horizon"]],
  "受益匪浅": [["受", "receive"], ["益", "benefit"], ["匪", "not"], ["浅", "shallow"]],
  "高瞻远瞩": [["高", "high"], ["瞻", "gaze"], ["远", "far"], ["瞩", "watch"]],
  "好自为之": [["好", "well"], ["自", "self"], ["为", "do"], ["之", "it"]],
  "不敢苟同": [["不", "not"], ["敢", "dare"], ["苟", "carelessly"], ["同", "agree"]],
  "一言难尽": [["一", "one"], ["言", "sentence"], ["难", "hard"], ["尽", "exhaust"]],
  "佩服佩服": [["佩", "admire"], ["服", "submit"], ["佩", "admire"], ["服", "submit"]],
  "敬谢不敏": [["敬", "respectfully"], ["谢", "decline"], ["不", "not"], ["敏", "clever"]],
  "井底之蛙": [["井", "well"], ["底", "bottom"], ["之", "of"], ["蛙", "frog"]],
  "自不量力": [["自", "self"], ["不", "not"], ["量", "measure"], ["力", "strength"]],
  "强词夺理": [["强", "force"], ["词", "words"], ["夺", "seize"], ["理", "reason"]],
  "信口开河": [["信", "careless"], ["口", "mouth"], ["开", "opens"], ["河", "river"]],
  "道听途说": [["道", "road"], ["听", "hear"], ["途", "path"], ["说", "retell"]],
  "一知半解": [["一", "one"], ["知", "know"], ["半", "half"], ["解", "understand"]],
  "断章取义": [["断", "chop"], ["章", "chapter"], ["取", "grab"], ["义", "meaning"]],
  "以偏概全": [["以", "use"], ["偏", "part"], ["概", "cover"], ["全", "whole"]],
  "纸上谈兵": [["纸", "paper"], ["上", "on"], ["谈", "discuss"], ["兵", "soldiers"]],
  "班门弄斧": [["班", "Ban"], ["门", "door"], ["弄", "flash"], ["斧", "axe"]],
  "恬不知耻": [["恬", "calmly"], ["不", "not"], ["知", "know"], ["耻", "shame"]],
  "倒打一耙": [["倒", "backwards"], ["打", "strike"], ["一", "one"], ["耙", "rake"]],
  "颠倒黑白": [["颠", "invert"], ["倒", "flip"], ["黑", "black"], ["白", "white"]],
  "指鹿为马": [["指", "point"], ["鹿", "deer"], ["为", "call"], ["马", "horse"]],
  "贼喊捉贼": [["贼", "thief"], ["喊", "shouts"], ["捉", "catch"], ["贼", "thief"]],
  "出尔反尔": [["出", "issue"], ["尔", "you"], ["反", "revoke"], ["尔", "you"]],
  "不可理喻": [["不", "not"], ["可", "can"], ["理", "reason"], ["喻", "reach"]],
  "厚颜无耻": [["厚", "thick"], ["颜", "face"], ["无", "no"], ["耻", "shame"]],
  "混淆是非": [["混", "mix"], ["淆", "blur"], ["是", "right"], ["非", "wrong"]],
  "无理取闹": [["无", "no"], ["理", "reason"], ["取", "make"], ["闹", "scene"]]
};

/* Literal (word-for-word) renderings of each Live Round example sentence.
   The chengyu inside the sentence stays LITERAL, so learners can map
   characters directly onto the English. */

const EXAMPLE_LIT = {
  "无话可说": "You say this and I truly have no words that can be said.",
  "甘拜下风": "Fine, fine, you win — I gladly bow to the downward wind.",
  "大开眼界": "Today has truly opened my eye-horizon wide.",
  "受益匪浅": "Listening to one speech from you — the benefit received is not shallow at all.",
  "高瞻远瞩": "You truly gaze from high and watch far — us mortals can't compare.",
  "好自为之": "I'll say it one last time: conduct yourself well.",
  "不敢苟同": "Your view? I dare not carelessly agree.",
  "一言难尽": "This logic of yours... one sentence can hardly exhaust it.",
  "佩服佩服": "You could even come up with THAT excuse — admire, admire.",
  "敬谢不敏": "I'm touched by your offer — respectfully declining, not-clever me.",
  "井底之蛙": "Never left this city and you're drawing conclusions? A frog at the bottom of a well.",
  "自不量力": "You alone want to overturn the whole plan? Not measuring your own strength.",
  "强词夺理": "The facts are in plain sight and you still twist them — forcing words to seize reason.",
  "信口开河": "Where's the data? No data means your careless mouth opened a river.",
  "道听途说": "All of this was heard on the road and told on the path — did you verify any of it?",
  "一知半解": "Two articles in and you lecture on the field? One-part knowledge, half an understanding — the scariest kind.",
  "断章取义": "Don't chop off a chapter to grab its meaning — I was talking about the full context.",
  "以偏概全": "One anecdote and a conclusion? Using the part to cover the whole.",
  "纸上谈兵": "Never worked a day in this field — you're discussing troops on paper.",
  "班门弄斧": "Explaining coding in front of me? Waving an axe at Lu Ban's gate.",
  "恬不知耻": "Proven wrong and you can still smile — calmly, without knowing shame.",
  "倒打一耙": "You started it, and now you swing the rake backwards?",
  "颠倒黑白": "Calling slander justice — inverting black and white.",
  "指鹿为马": "Everyone can see it clearly. Pointing at a deer and calling it a horse — having fun?",
  "贼喊捉贼": "You scream 'smear campaign' every day. The thief shouting 'catch the thief', I see.",
  "出尔反尔": "Said it yesterday, deny it today — issued by you, revoked by you.",
  "不可理喻": "Nothing to discuss with someone whom reason cannot reach.",
  "厚颜无耻": "You can say that with a straight face. Thick face, no shame.",
  "混淆是非": "This isn't a difference of opinion — you're deliberately mixing up right and wrong.",
  "无理取闹": "You're not here to discuss anything — just making a scene without reason."
};

/* footnotes for the extra-nerdy glosses */
const CHAR_NOTES = {
  "受益匪浅": "匪 usually means 'bandit' — here it just means 'not'. Yes, Chinese is like that.",
  "佩服佩服": "佩 was originally the jade pendant on your belt; 服 means clothing AND 'to submit'. Doubled = salt doubled.",
  "出尔反尔": "尔 means 'you' — and it shows up TWICE. You issue it, YOU un-issue it.",
  "贼喊捉贼": "Spot the repeated 贼. The thief is literally in every frame of this idiom.",
  "班门弄斧": "班 isn't 'class' here — it's Lu Ban (鲁班), the legendary carpenter, by surname.",
  "倒打一耙": "耙 is Zhu Bajie's rake from Journey to the West. The rake is canon."
};
