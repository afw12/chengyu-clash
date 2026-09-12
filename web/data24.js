/* Batch 24: +25 praise (humility & gathering talents), +25 sarcasm (empty pockets & empty results). */

const BULK_PRAISE20 = [
["不骄不躁","bù jiāo bù zào",1,"Not arrogant, not restless — calm is the default.","他成绩优异但不骄不躁。","不骄傲，不急躁。","not arrogant not restless"],
["戒骄戒躁","jiè jiāo jiè zào",1,"Guards against pride, guards against rashness.","他时时告诫自己戒骄戒躁。","警惕自己骄傲急躁。","guard pride guard rashness"],
["小心谨慎","xiǎo xīn jǐn shèn",1,"Small heart, careful caution — nothing goes wrong twice.","他开车小心谨慎，从未出过事故。","十分小心，不敢疏忽。","small heart careful cautious"],
["慎终如始","shèn zhōng rú shǐ",2,"Treats the end like the start — discipline never expires.","他做事慎终如始，从不虎头蛇尾。","结束时仍像开始一样谨慎。","treat the end like the start"],
["善始善终","shàn shǐ shàn zhōng",2,"Good start, good finish — both halves delivered.","这个项目善始善终，圆满交付。","事情从开头到结束都做得很好。","good start good finish"],
["有始有终","yǒu shǐ yǒu zhōng",1,"Has a beginning, has an ending — never quits halfway.","他答应的事总有始有终。","做事能坚持到底。","has beginning has ending"],
["宾客盈门","bīn kè yíng mén",2,"Guests filling the gates — hospitality recognized far and wide.","他家甜品口碑好，宾客盈门。","来客挤满门庭，形容来客很多。","guests fill the gates"],
["群贤毕至","qún xián bì zhì",3,"All the worthies arrive together — the gathering of the age.","兰亭雅集，群贤毕至。","很多有才德的人都来了。","all worthies arrive together"],
["少长咸集","shǎo cháng xián jí",2,"Young and old, all gathered.","庙会上少长咸集，热闹非凡。","老少都聚集在一起。","young old all gathered"],
["济济一堂","jǐ jǐ yī táng",2,"Numerous, numerous, in one hall — talents packed in a room.","专家们济济一堂共商大计。","很多有才能的人聚集在一起。","numerous numerous one hall"],
["人才济济","rén cái jǐ jǐ",2,"Talents abundant and abundant.","这家公司人才济济。","有才能的人很多。","talent abundant abundant gathered"],
["人才辈出","rén cái bèi chū",2,"Talents emerging generation after generation.","江南自古人才辈出。","人才一批一批地涌现。","talents emerge generation after"],
["群英荟萃","qún yīng huì cuì",2,"Heroes galore, assembled together.","本次峰会群英荟萃。","许多杰出人才聚集。","heroes galore assembled together"],
["卧虎藏龙","wò hǔ cáng lóng",2,"Crouching tigers, hidden dragons — quiet streets hide masters.","这个小城卧虎藏龙。","隐藏着未被发现的人才。","crouching tiger hidden dragon"],
["人杰地灵","rén jié dì líng",2,"People outstanding, land numinous — the place made them, they made the place.","江南人杰地灵，才子辈出。","杰出人物生于灵秀之地。","people outstanding land numinous"],
["物华天宝","wù huá tiān bǎo",2,"Things splendid, heaven's treasures — the land's riches on display.","这块宝地物华天宝。","各种珍贵的宝物。","things splendid heaven treasures"],
["虚左以待","xū zuǒ yǐ dài",2,"The left seat kept open, waiting — for the talent they deserve.","公司虚左以待，静候大师加盟。","留出尊位恭候贤能。","left seat kept open waiting"],
["求贤若渴","qiú xián ruò kě",2,"Seeks talent like craving water.","创业公司求贤若渴。","寻求贤才如口渴思饮。","seek talent like thirst"],
["爱才如命","ài cái rú mìng",2,"Loves talent as much as life itself.","老板爱才如命，高薪挖人。","爱惜人才就像爱惜生命。","love talent as life"],
["知人善任","zhī rén shàn rèn",2,"Knows the person, assigns well — every talent in the right slot.","好领导知人善任。","了解人并善于任用人。","know people assign well"],
["举贤任能","jǔ xián rèn néng",2,"Promotes the worthy, appoints the able.","他举贤任能，不问出身。","推举有德有能的人。","promote worthy appoint able"],
["任人唯贤","rèn rén wéi xián",2,"Appoints people on merit only.","用人要任人唯贤。","只按照德才任用人。","appoint people only merit"],
["人尽其才","rén jìn qí cái",2,"Each person fully uses their talent.","好的管理让人尽其才。","每个人都能充分发挥才能。","each fully uses talent"],
["各尽所能","gè jìn suǒ néng",2,"Each gives all they possibly can.","分工明确，各尽所能。","每个人都尽自己的能力做事。","each gives all possible"],
["礼贤下士","lǐ xián xià shì",2,"Courteous to the worthy, bowing to scholars — power humbling itself.","他礼贤下士，门客云集。","尊敬有才德的人。","courteous worthy bowing scholars"]
];

const BULK_SARCASM20 = [
["空手而归","kōng shǒu ér guī",1,"Empty hands on the return trip — the shopping trip, the negotiation, the exam.","逛了一天市场空手而归。","什么也没得到就回来了。","empty hands then return"],
["一无所获","yī wú suǒ huò",1,"Nothing at all gained.","找了一天工作一无所获。","什么收获也没有。","nothing at all gained"],
["颗粒无收","kē lì wú shōu",2,"Single grain, none harvested.","大旱之年颗粒无收。","一点收成也没有。","single grain none harvested"],
["血本无归","xuè běn wú guī",3,"Blood capital, none returned.","他投资血本无归。","本钱全部亏光。","blood capital none returned"],
["倾家荡产","qīng jiā dàng chǎn",3,"Pour out the family, ruin the estate.","他赌博倾家荡产。","全部家产都没有了。","pour family ruin estate"],
["家徒四壁","jiā tú sì bì",3,"Home contains only four walls.","他被人骗光，家徒四壁。","家里穷得只有四面墙。","home only four walls"],
["一贫如洗","yī pín rú xǐ",3,"Poor as something freshly washed.","被骗后他一贫如洗。","穷得像被水冲洗过一样。","one poverty as washed"],
["身无分文","shēn wú fēn wén",1,"Body without a single cent.","他流落街头身无分文。","身上一分钱都没有。","body without a cent"],
["囊中羞涩","náng zhōng xiū sè",2,"The pouch inside feels bashful — can't afford to look.","想买单时囊中羞涩。","经济不宽裕（反讽自嘲）。","pouch inside bashful tight"],
["入不敷出","rù bù fū chū",2,"Income not covering expenses.","他月月入不敷出。","收入不够开支。","income not covering expenses"],
["寅吃卯粮","yín chī mǎo liáng",2,"Yin year eats Mao grain — spending next year's money this year.","信用卡刷爆等于寅吃卯粮。","提前挪用以后的收入。","Yin eats Mao grain"],
["捉襟见肘","zhuō jīn jiàn zhǒu",2,"Pull the lapel and the elbows show — resources always short.","预算捉襟见肘。","拉一下衣襟肘部就露出来，形容窘迫。","pull lapel show elbows"],
["一文不值","yī wén bù zhí",2,"One cent — not worth it.","他的保证一文不值。","毫无价值。","one cent not worth"],
["不值一提","bù zhí yī tí",1,"Not worth a mention — so why mention it constantly.","他那点成绩不值一提。","不值得提起（反讽贬低）。","not worth a mention"],
["微不足道","wēi bù zú dào",1,"Tiny, not worth mentioning.","这点贡献微不足道。","非常渺小，不值一提。","tiny not worth mentioning"],
["无关紧要","wú guān jǐn yào",1,"Nothing concerning importance.","细节无关紧要——直到它决定成败。","不重要，不影响大局。","no relation critical importance"],
["无关痛痒","wú guān tòng yǎng",1,"Nothing touching pain or itch — criticism that never lands.","他的检讨无关痛痒。","与本身的利害无关（反讽避重就轻）。","no relation pain itch"],
["可有可无","kě yǒu kě wú",1,"Can have, can do without — his role in the team.","在这个项目里他可有可无。","有没有都可以。","can have can without"],
["无足轻重","wú zú qīng zhòng",1,"No standing, neither light nor heavy — actually just nothing.","他在公司无足轻重。","无关紧要。","no standing light heavy"],
["人微言轻","rén wēi yán qīng",1,"Person lowly, words lightweight — suggestions vanish on arrival.","新人说话人微言轻没人理。","地位低，说话不受重视。","person low words light"],
["石沉大海","shí chén dà hǎi",2,"The stone sinks into the sea — every message, every application.","投了百份简历石沉大海。","没有音信和结果。","stone sinks into sea"],
["泥牛入海","ní niú rù hǎi",2,"A clay ox into the sea — gone, no return trip.","借出去的钱如泥牛入海。","一去不复返。","clay ox into sea"],
["杳无音信","yǎo wú yīn xìn",2,"Vanished, no word back.","他出国后杳无音信。","一点消息也没有。","vanished no word back"],
["无影无踪","wú yǐng wú zōng",2,"No shadow, no trace — the money, the man, the promise.","钱和人无影无踪。","一点踪影都没有。","no shadow no trace"],
["不翼而飞","bù yì ér fēi",1,"Without wings, yet flew — the money, the documents, the cake.","他放在桌上的钱不翼而飞。","比喻物品突然不见了。","without wings yet flew"]
];

mergeBulk(BULK_PRAISE20, "praise");
mergeBulk(BULK_SARCASM20, "sarcasm");
