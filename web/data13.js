/* Batch 13 (rewritten): +15 praise (friendship), +15 argue (fraud), +30 sarcasm (premature triumph). */

const BULK_PRAISE12 = [
["高山流水","gāo shān liú shuǐ",3,"High mountains, flowing water — the friend who hears your soul in the music.","他俩是高山流水式的知音。","知音难觅，乐曲高妙。","high mountains flowing water"],
["一见如故","yī jiàn rú gù",1,"First meeting, like an old acquaintance — no warm-up required.","他俩一见如故，聊了一整夜。","初次见面就像老朋友一样投缘。","first meeting like acquaintance"],
["情同手足","qíng tóng shǒu zú",2,"A bond like hands and feet — you move, it moves.","他俩情同手足。","交情深厚，像兄弟一样。","bond same hands feet"],
["肝胆相照","gān dǎn xiāng zhào",3,"Livers and galls shining on each other — total openness between friends.","多年战友肝胆相照。","坦诚相见，互相扶持。","liver gall mutually shine"],
["推心置腹","tuī xīn zhì fù",2,"Places his heart into your belly — trust with no firewall.","两人推心置腹谈了一夜。","真心待人，坦诚沟通。","place heart into belly"],
["志同道合","zhì tóng dào hé",1,"Same will, same path, joined forces.","创业要找志同道合的伙伴。","志向相同，道路一致。","will same path joined"],
["患难与共","huàn nàn yǔ gòng",2,"Trouble and hardship, together and shared.","他们夫妇患难与共四十年。","共同承担困难和艰险。","trouble hardship together shared"],
["相濡以沫","xiāng rú yǐ mò",2,"Fish moistening each other with spit-bubbles when the pond dries — love in the lean years.","创业最难时夫妻相濡以沫。","在困境中相互扶持。","mutually moisten with spit"],
["白头偕老","bái tóu xié lǎo",2,"White heads, old together — the wedding blessing that works.","祝二位白头偕老。","夫妻恩爱到老。","white heads together old"],
["心心相印","xīn xīn xiāng yìn",2,"Hearts printed on hearts — no words needed.","两人心心相印，一个眼神就懂。","彼此心意一致。","hearts hearts mutually printed"],
["情深似海","qíng shēn sì hǎi",2,"Feelings deep as the sea.","父亲对孩子的爱情深似海。","感情深厚如大海。","feeling deep like sea"],
["患难之交","huàn nàn zhī jiāo",2,"Friendship forged in trouble — the kind that holds.","他们是患难之交。","共过患难的朋友。","trouble hardship of friendship"],
["莫逆之交","mò nì zhī jiāo",2,"A friendship with zero defiance — minds that never clash.","他和他是莫逆之交。","非常要好的朋友。","no defiance of friendship"],
["刎颈之交","wěn jǐng zhī jiāo",3,"Friends who would lose their necks for each other.","廉颇蔺相如成刎颈之交。","同生共死的朋友。","behead necks of friendship"],
["忘年之交","wàng nián zhī jiāo",2,"Friendship that forgot the age gap.","他和老教授成了忘年之交。","不拘年岁辈分差异而结交的朋友。","forget age of friendship"]
];

const BULK_ARGUE12 = [
["敲诈勒索","qiāo zhà lè suǒ",3,"Knocks, extorts, coerces, extracts — the full extortion quartet.","他敲诈勒索商户被判了刑。","用威胁手段索取财物。","knock extort coerce extract"],
["巧取豪夺","qiǎo qǔ háo duó",2,"Cleverly takes, violently seizes — fraud and force, both hands.","奸商巧取豪夺小散户。","用欺骗或强夺的手段获取。","cleverly take violently seize"],
["横征暴敛","héng zhēng bào liǎn",3,"Brutal levies, violent extraction — taxes as robbery.","昏君横征暴敛，民不聊生。","强征捐税，搜刮民财。","brutally levy violently extract"],
["中饱私囊","zhōng bǎo sī náng",2,"The funds pass through; his private pouch gets full midway.","工程款层层中饱私囊。","经手钱财，据为己有。","midway fill private pouch"],
["贪赃枉法","tān zāng wǎng fǎ",3,"Takes bribes, bends the law — the judge who became the crime.","贪赃枉法者终被严惩。","受贿而违法断案。","take bribes bend law"],
["徇私舞弊","xùn sī wǔ bì",2,"Favors the private, stages the fraud.","招标徇私舞弊被查处。","为了私情而做不合法的事。","favor private stage fraud"],
["损公肥私","sǔn gōng féi sī",2,"Harms the public, fattens the private.","他损公肥私，把设备低价卖给自己亲戚。","损害公家利益肥肥自己。","harm public fatten private"],
["监守自盗","jiān shǒu zì dào",2,"Guarding the post, committing the theft — the vault keeper did it.","仓库管理员监守自盗。","看管财物的人自己偷窃。","guarding the post self theft"],
["知法犯法","zhī fǎ fàn fǎ",3,"Knows the law, breaks the law — the lawyer embezzled.","律师知法犯法，性质更恶劣。","明知法律而故意违犯。","knows law breaks law"],
["欺上瞒下","qī shàngmán xià",2,"Deceives above, hides below — the middle manager's art.","他欺上瞒下，报喜不报忧。","对上欺骗，对下隐瞒。","deceive above hide below"],
["瞒天过海","mán tiān guò hǎi",2,"Blinds heaven, crosses the sea — Stratagem Number One of the Thirty-Six.","假账做得天衣无缝，瞒天过海。","用伪装蒙混过关。","blind heaven cross sea"],
["偷天换日","tōu tiān huàn rì",3,"Steals the sky, swaps the sun — replacement fraud at cosmic scale.","他偷天换日，把真画换成了赝品。","暗中改变重大事物的真相。","steal sky swap sun"],
["以假乱真","yǐ jiǎ luàn zhēn",2,"Uses the fake to fool the real — the forgery fooled the experts.","赝品以假乱真，骗过了鉴定师。","使真假混淆，以假充真。","use fake fool real"],
["弄虚作假","nòng xū zuò jiǎ",2,"Plays fake, makes false — data dressed for the photo.","报表弄虚作假被审计揪出。","搞虚假，欺骗别人。","play fake make false"],
["欺世盗名","qī shì dào míng",2,"Fools the world, steals the fame — the fraud with a plaque.","他欺世盗名，头衔全是买的。","欺骗世人，窃取名誉。","fool world steal fame"]
];

const BULK_SARCASM12 = [
["水到渠成","shuǐ dào qú chéng",1,"Water arrives, the channel forms — success flowing naturally, allegedly.","他说功到自然成，水到渠成，然后辞职了。","条件成熟事情自然成功（反讽并未成）。","water arrives channel forms"],
["瓜熟蒂落","guā shú dì luò",1,"Melon ripe, stem drops — wait long enough and it works, allegedly.","催了八百遍他说瓜熟蒂落。" ,"时机成熟自然成功（反讽一直不熟）。","melon ripe stem drops"],
["马到成功","mǎ dào chéng gōng",1,"Horse arrives, success won — the blessing, pre-failure.","出行前大家都祝他马到成功。","迅速取得成功（反讽没成）。","horse arrives success won"],
["旗开得胜","qí kāi dé shèng",1,"Flag unfurled, victory won — from the very first move, allegedly.","旗开得胜的话音未落，球队就丢球了。","一开始就取得胜利（反讽）。","flag unfurled victory won"],
["首战告捷","shǒu zhàn gào jié",2,"First battle reports triumph — enjoy it, it's the only battle.","首战告捷后连输十场。","第一仗就取得胜利（反讽高开低走）。","first battle reports triumph"],
["大获全胜","dà huò quán shèng",2,"Grandly capturing total victory — against themselves.","这场发布会他们大获全胜地得罪了所有人。","获得全面胜利（反讽全输）。","grandly capture total victory"],
["满载而归","mǎn zài ér guī",2,"Fully loaded on the return trip — mostly complaints.","出差一圈满载而归，全是发票。" ,"带回来的东西很多（反讽）。","fully loaded then return"],
["凯旋而归","kǎi xuán ér guī",2,"Triumphant spin, then return — after losing to the weakest team.","输给垫底队后他们还凯旋而归般庆祝。","获胜归来（反讽失败还庆祝）。","triumph spin then return"],
["功成名就","gōng chéng míng jiù",2,"Merit done, fame achieved — and he still can't go home for dinner.","他功成名就，儿子却和他断绝了往来。","事业有成，名声也有了（反讽家庭失意）。","merit done fame achieved"],
["名利双收","míng lì shuāng shōu",2,"Fame and profit, both collected — quality optional.","烂片拍一部火一部，名利双收。","名声利益双丰收（反讽德不配位）。","fame profit both collected"],
["金榜题名","jīn bǎng tí míng",2,"Name inscribed on the golden list — in the alternate universe draft.","复读三年金榜题名仍是梦。","科举得中（反讽落榜）。","gold list name inscribed"],
["蟾宫折桂","chán gōng zhé guì",3,"Plucking laurel in the moon palace — the exam dream, deferred.","家长群盼孩子蟾宫折桂。" ,"考试高中（反讽落空）。","moon palace pluck laurel"],
["独领风骚","dú lǐng fēng sāo",3,"Alone leading the poetry — the wind and the Sao, all by himself.","土味营销独领风骚十年。","领先无人能及（反讽）。","alone lead wind poetry"],
["万众瞩目","wàn zhòng zhǔ mù",2,"Myriad eyes fixed upon it — the launch that broke everything.","这场发布会被万众瞩目，然后全网群嘲。","受众人关注（反讽翻车）。","myriad crowd fixed gaze"],
["引人注目","yǐn rén zhù mù",2,"Draws every gaze — usually right before the fail.","他的失误格外引人注目。","引人注意（反讽出丑）。","draws people fix gaze"],
["轰动一时","hōng dòng yī shí",2,"A sensation for one whole era — or roughly one news cycle.","那次事故轰动一时。","引起一时轰动（反讽丑闻）。","sensation stirs one era"],
["无人不晓","wú rén bù xiǎo",2,"No one does not know — mainly for the wrong reasons.","他的臭名无人不晓。","人人都知道（反讽因恶名）。","no one not knows"],
["如雷贯耳","rú léi guàn ěr",2,"Like thunder piercing the ears — the name, or the snoring.","他打呼噜如雷贯耳。","名声很大（反讽噪音）。","like thunder pierce ears"],
["大名鼎鼎","dà míng dǐng dǐng",2,"Great name, resounding resounding — the neighborhood's most notorious.","小区里大名鼎鼎的熊孩子就是他家娃。","名气很大（反讽恶名）。","great name resounding resounding"],
["赫赫有名","hè hè yǒu míng",2,"Illustrious, illustrious, and named — the cheating ring's brochure line.","他们因作弊赫赫有名。","声名非常显赫（反讽）。","illustrious illustrious have name"],
["声名远播","shēng míng yuǎn bō",2,"Name broadcast far and wide — quality be damned.","他们家服务差到声名远播。","名声传得很远（反讽臭名）。","name fame far broadcast"],
["尽人皆知","jìn rén jiē zhī",2,"All people, all knowing — the secret that failed upward.","他偏科的事尽人皆知。","人人都知道（反讽）。","all people all know"],
["翘首以盼","qiáo shǒu yǐ pàn",2,"Heads raised, awaiting in hope — for the update that never ships.","玩家翘首以盼三年，等来停服公告。","殷切盼望（反讽落空）。","raise head in hope"],
["拭目以待","shì mù yǐ dài",2,"Wipe the eyes and wait — the show always delivers, one way or another.","大家拭目以待他的下一次翻车。","睁眼等着瞧（反讽看笑话）。","wipe eyes in wait"],
["遥遥无期","yáo yáo wú qī",2,"Far, far, and dateless — the promised refund's itinerary.","还款遥遥无期。","时间还很久远（反讽赖账）。","far far no date"],
["指日可待","zhǐ rì kě dài",2,"Point to the day, it can be awaited — the deadline said so, four times.","项目完工指日可待，说了四年。","为期不远（反讽一直拖）。","point the day can await"],
["万事大吉","wàn shì dà jí",2,"Myriad matters, all auspicious — declared before testing anything.","代码没测就发布，宣称万事大吉。","一切顺利（反讽隐患重重）。","myriad matters all auspicious"],
["高枕无忧","gāo zhěn wú yōu",2,"High pillow, zero worries — right up until the alarm at 3 a.m.","备份没做还高枕无忧，数据全没了。","放心无事（反讽出事）。","high pillow no worry"],
["相安无事","xiāng ān wú shì",2,"Mutually calm, nothing happening — the peace of total inaction.","两个部门互相推诿倒也相安无事。","彼此平安无事（反讽不作为）。","mutually calm no trouble"],
["天下太平","tiān xià tài píng",2,"Heaven below, grand peace — because nobody reported anything.","只要不检查，天下太平。","处处平安（反讽粉饰太平）。","heaven below grand peace"]
];

mergeBulk(BULK_PRAISE12, "praise");
mergeBulk(BULK_ARGUE12, "argue");
mergeBulk(BULK_SARCASM12, "sarcasm");
