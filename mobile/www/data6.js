/* Batch 6: +22 praise, +22 argue, +10 sarcasm. */

const BULK_PRAISE4 = [
["温柔敦厚","wēn róu dūn hòu",1,"Gentle, warm and solid — the kindest kind of strong.","王阿姨待人温柔敦厚，全楼都爱她。","待人温和宽厚。","gentle warm solid thick"],
["眉清目秀","méi qīng mù xiù",1,"Clean brows, bright eyes — an open, handsome face.","小孙子长得眉清目秀。","眉目清秀好看。","brows clear eyes elegant"],
["慷慨解囊","kāng kǎi jiě náng",2,"Opens the purse before you finish asking.","同学有难他慷慨解囊。","大方地拿出钱财帮助别人。","generous hearty loosen pouch"],
["仗义疏财","zhàng yì shū cái",2,"Loyalty first, money second — spends on people, not things.","他仗义疏财，朋友有难从不缺席。","讲义气，轻钱财。","loyalty righteous spread wealth"],
["舍己为人","shě jǐ wèi rén",3,"Puts self last on purpose, every time.","消防员舍己为人冲进火场。","牺牲自己利益帮助别人。","give up self for people"],
["大公无私","dà gōng wú sī",3,"All public, zero private — fairness with no back door.","分福利他大公无私，先给困难户。","一心为公，没有私心。","big public no selfish"],
["克己奉公","kè jǐ fèng gōng",2,"Restrains self, serves all — discipline in its purest form.","他一生克己奉公，两袖清风。","严格要求自己，一心为公。","control self serve public"],
["脚踏实地","jiǎo tà shí dì",1,"Feet planted on real ground — no shortcuts, no floating.","她一步一个脚印，脚踏实地。","做事踏实认真，不浮夸。","feet step solid ground"],
["孜孜不倦","zī zī bù juàn",2,"Diligent without fatigue — the ever-loaded battery.","他孜孜不倦地钻研了二十年。","勤奋努力，不知疲倦。","diligent diligent not tired"],
["手不释卷","shǒu bù shì juàn",2,"Never lets the book leave the hand.","他坐地铁都手不释卷。","书本不离手，形容勤奋好学。","hand not release book"],
["凿壁偷光","záo bì tōu guāng",1,"Chiseled a hole in the wall to borrow a neighbor's light — study hunger incarnate.","他像凿壁偷光那样抓紧一切时间学习。","借邻居家灯光刻苦读书。","chisel wall steal light"],
["囊萤映雪","náng yíng yìng xuě",1,"Fireflies in a bag, snow-light on the page — studying by any glow available.","古人囊萤映雪也要读书，我们有什么理由偷懒。","用萤火虫和雪的反光苦读。","bag fireflies reflect snow"],
["闻鸡起舞","wén jī qǐ wǔ",1,"Hears the rooster, rises to train — discipline before dawn.","他每天五点起床锻炼，闻鸡起舞。","听到鸡叫就起来练武，形容勤奋。","hear rooster rise dance"],
["卧薪尝胆","wò xīn cháng dǎn",2,"Sleeps on firewood, tastes gall daily — patience that outlasts anything.","他卧薪尝胆三年，终于东山再起。","刻苦自励，发愤图强。","lie firewood taste gall"],
["破釜沉舟","pò fǔ chén zhōu",3,"Broke the pots, sank the boats — total commitment, no retreat.","考研最后一年他破釜沉舟辞了职。","下定决心，不留退路。","break pot sink boat"],
["愚公移山","yú gōng yí shān",2,"The Foolish Old Man who moved a mountain — persistence measured in generations.","全家一起还债，真是当代愚公移山。","下定决心不怕困难，坚持到底。","foolish old move mountain"],
["水滴石穿","shuǐ dī shí chuān",2,"Water drops pierce stone — soft, slow and unstoppable.","每天背十个单词，水滴石穿。","力量虽小，坚持就能成功。","water drop stone pierce"],
["磨杵成针","mó chǔ chéng zhēn",2,"Grinding an iron rod into a needle — patience as a superpower.","练字十年，磨杵成针。","只要有毅力，肯下功夫就能成功。","grind rod become needle"],
["集思广益","jí sī guǎng yì",2,"Gathers every mind, widens every benefit — meetings that actually work.","方案是全组集思广益的结果。","集中众人智慧，收到更大效果。","gather thoughts wide benefit"],
["群策群力","qún cè qún lì",2,"Everyone plans, everyone pushes — a team as one engine.","抗洪靠的就是群策群力。","大家共同出主意、出力量。","group plan group strength"],
["同心协力","tóng xīn xié lì",2,"One heart, joined strength.","全村同心协力修好了桥。","团结一致，共同努力。","same heart join strength"],
["义薄云天","yì bó yún tiān",3,"Loyalty thin as air, thick as clouds — brotherhood at maximum.","他帮兄弟还清了债，义薄云天。","情义之重直冲云天。","loyalty thin clouds sky"]
];

const BULK_ARGUE4 = [
["恃强凌弱","shì qiáng líng ruò",2,"Strong, and using it exclusively on the weak.","他专挑比他小的欺负，恃强凌弱。","仗着自己强大就欺负弱小。","rely strong bully weak"],
["趁火打劫","chèn huǒ dǎ jié",2,"Robbery with a fire schedule — the crisis is the store opening.","房子刚着火就有人来低价收房，趁火打劫。","趁人危难时捞取利益。","seize fire rob loot"],
["浑水摸鱼","hún shuǐ mō yú",2,"Muddies the water first, then fishes in it.","每次部门混乱他都浑水摸鱼捞好处。","趁混乱捞取利益。","muddy water touch fish"],
["顺手牵羊","shùn shǒu qiān yáng",2,"Leads a goat away in passing — theft disguised as absent-mindedness.","他离开公司时顺手牵羊拿走了耳机。","顺手拿走别人的东西。","along hand lead goat"],
["鬼鬼祟祟","guǐ guǐ suì suì",2,"Ghost-stealth everything — acts suspicious even buying milk.","他鬼鬼祟祟地在楼道里张望。","举动神秘，怕人发现。","ghost ghost sneak sneak"],
["装神弄鬼","zhuāng shén nòng guǐ",2,"Plays god, conjures ghosts — stagecraft in service of nonsense.","算命先生装神弄鬼骗钱。","玩弄手段迷惑人。","pretend god make ghost"],
["故弄玄虚","gù nòng xuán xū",2,"Deliberately mysterious — complexity as a hiding place for having nothing.","他把简单的事说得神乎其神，故弄玄虚。","故意玩弄花招，迷惑人。","deliberately make mystery empty"],
["装腔作势","zhuāng qiāng zuò shì",2,"Poses, postures, projects — a resume of gestures.","他说话装腔作势，内容全空。","故意做作，装出某种腔调。","pretend tone make posture"],
["惺惺作态","xīng xīng zuò tài",2,"Performs sincerity like an off-Broadway show.","他假意推辞的样子真是惺惺作态。","虚伪地做出某种姿态。","fake fake make posture"],
["大吹大擂","dà chuī dà léi",2,"Loud horns for tiny wins.","开了家小店他大吹大擂上了三次热搜。","大肆吹嘘宣扬。","big blow big drum"],
["自卖自夸","zì mài zì kuā",2,"Sells it and praises it, both by himself — one-man marketing.","王婆卖瓜自卖自夸的直播间越来越多。","自己夸自己的东西好。","self sell self praise"],
["挥霍无度","huī huò wú dù",2,"Spending with no dial, only a switch.","他半年把积蓄挥霍无度地花完了。","任意花钱没有节制。","spend spend no limit"],
["一掷千金","yī zhì qiān jīn",2,"Ten thousand gold on one throw — dazzling, and often dumb.","他在直播间一掷千金打赏。","花钱大手大脚，毫不吝惜。","one throw thousand gold"],
["挥金如土","huī jīn rú tǔ",2,"Throws gold like dirt.","才发工资就挥金如土。","花钱像撒土一样任意。","throw gold like dirt"],
["暴殄天物","bào tiǎn tiān wù",3,"Insults the gifts of heaven — waste at an art level.","整桌菜没动几筷就倒了，暴殄天物。","任意糟蹋东西，不知爱惜。","violent waste heaven things"],
["坐吃山空","zuò chī shān kōng",2,"Sits and eats until the mountain is empty.","再厚的家底也经不起坐吃山空。","只消费不生产，家底再厚也会穷。","sit eat mountain empty"],
["铺张浪费","pū zhāng làng fèi",2,"Pavilion-scale spending on throwaway things.","一场婚宴三十桌，一半没人坐，铺张浪费。","为讲排场而浪费人力财物。","spread grand waste squander"],
["好高骛远","hào gāo wù yuǎn",2,"Chases the horizon, trips on the doorstep.","连简历都没做好就想创业，好高骛远。","不切实际地追求过高目标。","love high chase far"],
["眼高手低","yǎn gāo shǒu dī",2,"Eyes at master level, hands still in kindergarten.","点评头头是道，自己一画就崩，眼高手低。","要求高而实际能力低。","eye high hand low"],
["志大才疏","zhì dà cái shū",2,"Ambition the size of an ocean, talent the size of a pond.","他志大才疏，计划年年立年年倒。","志向远大而能力薄弱。","will big talent thin"],
["轻诺寡信","qīng nuò guǎ xìn",2,"Promises wholesale, delivers retail — almost never.","他轻诺寡信，答应的事十件九空。","轻易答应，很少守信用。","light promise little trust"],
["食言而肥","shí yán ér féi",2,"Eats his own words — and grows fat on them.","他食言而肥，减肥flag年年在立。","不履行诺言，自私自利。","eat words grow fat"]
];

const BULK_SARCASM4 = [
["雪中送炭","xuě zhōng sòng tàn",1,"Charcoal delivered in the snow — perfect timing, when it isn't a month late.","我感冒好了他才送来姜汤，真是雪中送炭。","在别人急需时给以帮助（可反讽迟到）。","snow middle send charcoal"],
["无微不至","wú wēi bù zhì",1,"Nothing too small to manage — care so total it becomes surveillance.","连我穿哪双袜子他都要管，无微不至。","待人细心周到（可反讽控制欲）。","no tiny not reach"],
["体贴入微","tǐ tiē rù wēi",1,"Thoughtfulness down to the microscopic — or down your throat.","我早说了我自己来，他还替我夹菜，体贴入微。","关怀体贴得无微不至（可反讽越界）。","considerate intimate enter micro"],
["排忧解难","pái yōu jiě nàn",1,"Removes worries, solves problems — occasionally after creating them.","停电是他弄的，修好也是他，排忧解难。","排除忧愁，解决困难（可反讽自导自演）。","remove worry solve difficulty"],
["保驾护航","bǎo jià hù háng",1,"Escorts your voyage — sometimes straight into the reef.","他非要帮我导航，一路保驾护航导进了死胡同。","保护某事物使其顺利进行（可反讽）。","protect carriage guard voyage"],
["添砖加瓦","tiān zhuān jiā wǎ",1,"Adds bricks and tiles to the project — or to the rubble.","代码越改bug越多，他还坚持添砖加瓦。","尽一点力量（可反讽帮倒忙）。","add bricks add tiles"],
["出谋划策","chū móu huà cè",1,"Supplies the strategy — with results that require a new strategy.","听他出谋划策，我们把车开进了沟里。","提出计谋策略（可反讽馊主意）。","produce plan draw strategy"],
["全力以赴","quán lì yǐ fù",1,"Full power committed — shame the steering was wrong.","他全力以赴地跑错了方向，第一个到错终点。","把全部力量都投入进去（可反讽方向错）。","full strength toward go"],
["尽心尽力","jìn xīn jìn lì",1,"Heart spent, strength spent — the outcome remains unmoved.","他尽心尽力照看蛋糕，蛋糕还是糊了。","费尽心思和力量（可反讽白费劲）。","exhaust heart exhaust strength"],
["一马当先","yī mǎ dāng xiān",1,"First horse out of the gate — to the buffet, never to the work.","开饭他一马当先，干活他垫底。","冲在最前面（可反讽抢吃的）。","one horse first front"]
];

mergeBulk(BULK_PRAISE4, "praise");
mergeBulk(BULK_ARGUE4, "argue");
mergeBulk(BULK_SARCASM4, "sarcasm");
