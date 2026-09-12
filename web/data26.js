/* Batch 26: +25 praise (art & learning), +25 sarcasm (dragging feet & shallow skims) — completes the 500×3 target. */

const BULK_PRAISE22 = [
["余音绕梁","yú yīn rào liáng",3,"Lingering notes circling the beams — the song outlives the singer.","她唱完后余音绕梁，三日不绝。","歌声优美，令人回味。","lingering notes around beams"],
["一唱三叹","yī chàng sān tàn",2,"One song, three sighs — elegant and deeply felt.","这首古曲一唱三叹，韵味悠长。","一人领唱，三人应和，婉转悠扬。","one song three sighs"],
["余音袅袅","yú yīn niǎo niǎo",2,"Lingering notes curling upward like incense smoke.","笛声停后余音袅袅。","声音绵长不绝。","lingering notes curling upward"],
["珠圆玉润","zhū yuán yù rùn",2,"Pearl-round, jade-smooth — a voice or stroke with zero friction.","她唱腔珠圆玉润。","歌声或文笔圆润流畅。","pearls round jade smooth"],
["栩栩如生","xǔ xǔ rú shēng",2,"Lifelike lifelike, like alive — the painting breathes.","他画的虾栩栩如生。","形象逼真，如同活的一样。","lifelike lifelike like alive"],
["形神兼备","xíng shén jiān bèi",2,"Form and spirit, both possessed — looks right and feels right.","他的表演形神兼备。","外形和神韵都具备。","form spirit both possessed"],
["出手不凡","chū shǒu bù fán",2,"First move already extraordinary.","新人第一件作品就出手不凡。","一开始就不同凡响。","first move extraordinary not ordinary"],
["浑然天成","hún rán tiān chéng",3,"Seamless as heaven made it — no human hand visible.","这首诗浑然天成，不见雕琢。","自然完美，不见人工痕迹。","seamless as heaven made"],
["天造地设","tiān zào dì shè",3,"Heaven made, earth arranged — a match or landscape perfectly designed.","他俩真是天造地设的一对。","事物自然形成，理想完美。","heaven made earth arranged"],
["独辟蹊径","dú pì xī jìng",2,"Alone opens a trail of his own — never follows the map.","他独辟蹊径，用新方法解决了难题。","自己开创一条新路。","alone opens trail path"],
["自成一家","zì chéng yī jiā",2,"Forms its own school — style as a standalone institution.","他的画风自成一家。","在某一领域形成独特风格。","forms its own school"],
["百年树人","bǎi nián shù rén",3,"A hundred years to cultivate a person — education measured in generations.","十年树木百年树人。","培养人才是长久之计。","hundred years cultivate people"],
["教学相长","jiāo xué xiāng zhǎng",2,"Teaching and learning grow together.","师生互动教学相长。","教和学互相促进。","teaching learning mutually grow"],
["满园春色","mǎn yuán chūn sè",1,"A garden full of spring — talent in full bloom.","实验班满园春色，硕果累累。","一园春色，生机盎然。","full garden of spring"],
["争奇斗艳","zhēng qí dòu yàn",1,"Rivaling in beauty, blooming in competition.","春天里百花争奇斗艳。","竞相开放，比美斗艳。","rival beauty bloom compete"],
["繁花似锦","fán huā sì jǐn",2,"Blooming flowers like brocade.","公园里繁花似锦。","许多色彩纷繁的鲜花，像锦缎。","blooming flowers like brocade"],
["郁郁葱葱","yù yù cōng cōng",1,"Lush, lush, verdant, verdant.","后山的树林郁郁葱葱。","草木苍翠茂盛。","lush lush verdant verdant"],
["枝繁叶茂","zhī fán yè mào",2,"Branches thick, leaves luxuriant.","院子里的老树枝繁叶茂。","枝叶繁密茂盛。","branches thick leaves luxuriant"],
["根深叶茂","gēn shēn yè mào",2,"Roots deep, leaves flourish — foundation first, glory after.","企业文化根深叶茂。","基础牢固，事业兴旺。","roots deep leaves flourish"],
["源远流长","yuán yuǎn liú cháng",2,"Source distant, flow long — a tradition with real roots.","中华文明源远流长。","历史悠久，根基深厚。","source distant flow long"],
["博大精深","bó dà jīng shēn",2,"Broad, grand, profound, deep — learning without borders.","中医文化博大精深。","思想和学识广博高深。","broad grand profound deep"],
["包罗万象","bāo luó wàn xiàng",2,"Encompassing all myriad manifestations.","这部百科全书包罗万象。","内容丰富，应有尽有。","encompassing all myriad manifestations"],
["兼容并包","jiān róng bìng bāo",2,"Embraces all, contains everything.","大学的胸怀是兼容并包。","把各个方面全部容纳。","embrace all contain everything"],
["学以致用","xué yǐ zhì yòng",2,"Learns in order to use.","他学以致用，理论联系实际。","学了要能应用于实际。","learn for applying use"],
["熟能生巧","shú néng shēng qiǎo",2,"Practice enough and skill is born.","游泳没有捷径，熟能生巧。","熟练了就能产生巧办法。","practice makes skill born"]
];

const BULK_SARCASM22 = [
["一拖再拖","yī tuō zài tuō",1,"Delayed once, delayed again — the deadline is decorative.","交稿日期一拖再拖。","一直拖延不解决。","delay once delay again"],
["拖拖拉拉","tuō tuō lā lā",1,"Drag drag, dilly dally — everything arrives late.","他做事总是拖拖拉拉。","做事拖沓散漫。","drag drag dilly dally"],
["磨磨蹭蹭","mó mó cèng cèng",1,"Grind grind, dawdle dawdle — a ten-minute task, an afternoon.","出门前他磨磨蹭蹭一小时。","行动迟缓，做事拖拉。","grind grind dawdle dawdle"],
["慢条斯理","màn tiáo sī lǐ",1,"Slowly, with rhythm, unhurried reasoning — even the building alarm.","火警响了 announcer 还慢条斯理地念广播。","动作缓慢，不慌不忙（反讽误事）。","slowly rhythm unhurried reasoned"],
["不紧不慢","bù jǐn bù màn",1,"Not hurried, not slow — perfect pace for missing everything.","截止日期当天他不紧不慢。","不急不忙（反讽误事）。","not hurried not slow"],
["按兵不动","àn bīng bù dòng",1,"Holds the troops, not moving — while the crisis escalates.","客户催了三次，他按兵不动。","暂不行动，等待时机（反讽不作为）。","hold troops not moving"],
["岿然不动","kuī rán bù dòng",1,"Looming still, not moving — every plea bounces off.","求了半天他岿然不动。","像山一样挺立（反讽不为所动）。","looming still not moving"],
["避而不见","bì ér bù jiàn",1,"Avoids and never meets — the creditor's welcome.","债主上门他避而不见。","躲着不肯见面（反讽躲债）。","avoid and not meet"],
["敬而远之","jìng ér yuǎn zhī",1,"Respect kept at a distance — the polite escape.","大家对他敬而远之。","表示尊敬但不愿接近（反讽）。","respect yet keep distance"],
["退避三舍","tuì bì sān shè",1,"Retreats three camps to avoid — responsibility, that is.","一提责任他就退避三舍。","主动退让（反讽逃避责任）。","retreat avoid three camps"],
["不理不睬","bù lǐ bù cǎi",1,"No ignoring, no acknowledging — silence weaponized.","投诉信他一律不理不睬。","对人不理睬不关注。","no ignore no acknowledge"],
["撒手不管","sā shǒu bù guǎn",1,"Lets go, stops caring — project mid-flight.","项目做到一半他撒手不管。","松开手不管了。","let go stop caring"],
["甩手掌柜","shuǎi shǒu zhǎng guì",2,"The flinging-hands shopkeeper boss — delegates everything, shows up never.","他当起甩手掌柜，店里的活全靠店员。","只指挥不干活的人（反讽）。","flinging hands shopkeeper counter"],
["三缄其口","sān jiān qí kǒu",2,"Thrice seals the mouth — the secret, or the excuse.","问到关键处他三缄其口。","说话极其谨慎（反讽守口如瓶）。","thrice seal the mouth"],
["虎头蛇尾","hǔ tóu shé wěi",1,"Tiger head, snake tail — mighty opening, limp ending.","这部剧虎头蛇尾，越看越烂。","开始声势大，结尾草率。","tiger head snake tail"],
["有头无尾","yǒu tóu wú wěi",1,"Has a head, no tail — started strong, vanished.","他做的事常常有头无尾。","有开头没有结尾。","has head no tail"],
["有始无终","yǒu shǐ wú zhōng",2,"Has a start, no finish — the gym membership special.","办了健身卡一个月就荒废，有始无终。","有开头没有收尾。","has start no finish"],
["浅尝辄止","qiǎn cháng zhé zhǐ",2,"Shallow taste, then stop — learning done at headline level.","他学什么都浅尝辄止。","略微尝试就停止。","shallow taste then stop"],
["浮光掠影","fú guāng lüè yǐng",2,"Floating light, skimming shadows — impressions mistaken for knowledge.","旅游一周只是浮光掠影。","印象不深刻，如水面光影。","floating light skimming shadow"],
["走马观花","zǒu mǎ guān huā",2,"Viewing flowers from a galloping horse — research at 60 km/h.","考察团走马观花转了一圈。","粗略地观察了解。","riding horse viewing flowers"],
["蜻蜓点水","qīng tíng diǎn shuǐ",2,"A dragonfly taps the water — feedback applied at surface depth.","检查组蜻蜓点水走过场。","做事肤浅不深入。","dragonfly taps the water"],
["囫囵吞枣","hú lún tūn zǎo",2,"Swallows the date whole — knowledge consumed, never chewed.","他读书囫囵吞枣，一问三不知。","不加分析地笼统接受。","swallowing whole swallow dates"],
["生吞活剥","shēng tūn huó bō",2,"Raw-swallows, live-peels — copying ideas without digestion.","他生吞活剥地照搬西方理论。","生硬地接受或机械地搬用。","raw swallow live peel"],
["不求甚解","bù qiú shèn jiě",1,"Doesn't seek deep understanding — reading complete, comprehension optional.","他读书从不求甚解。","只求懂个大概（反讽）。","not seek deep understanding"],
["马马虎虎","mǎ mǎ hǔ hǔ",1,"Horse horse, tiger tiger — the national symbol of carelessness.","他的作业总是马马虎虎。","形容做事草率马虎。","horse horse tiger tiger"]
];

mergeBulk(BULK_PRAISE22, "praise");
mergeBulk(BULK_SARCASM22, "sarcasm");
