/* Batch 4: +20 praise, +20 argue, +22 sarcasm (dual-use). Same compact
   tuple schema as data3; reuses mergeBulk() from data3.js. */

const BULK_PRAISE2 = [
["落落大方","luò luò dà fāng",1,"Natural and poised in any room — zero awkward bone in the body.","第一次见家长她毫不怯场，落落大方。","举止自然大方，毫不拘谨。","open natural big poised"],
["知书达理","zhī shū dá lǐ",1,"Read books, understand reason — courtesy backed by real learning.","她待人接物知书达理，谁都喜欢。","有学识，懂道理，待人有分寸。","know books reach reason"],
["一表人才","yī biǎo rén cái",2,"One look says it: this person is built of talent and good looks.","小伙子长得一表人才。","相貌堂堂，气度不凡。","one look person talent"],
["风度翩翩","fēng dù piān piān",2,"Grace with wind in it — the most charming person in the room.","新来的主持人风度翩翩。","举止洒脱优雅，气质出众。","grace bearing graceful graceful"],
["仪表堂堂","yí biǎo táng táng",2,"A presence you could photograph from any angle.","新郎仪表堂堂，站那儿就是一幅画。","外表端正，气宇不凡。","bearing appearance grand grand"],
["亭亭玉立","tíng tíng yù lì",2,"Standing slender as jade — an elegant young woman grown up right.","女儿长成大姑娘了，亭亭玉立。","形容女子身材修长优美。","slender slender jade standing"],
["秀外慧中","xiù wài huì zhōng",2,"Beautiful outside, brilliant inside — the full package.","她秀外慧中，追她的人能排到街尾。","外表秀丽，内心聪慧。","beautiful outside wise inside"],
["冰雪聪明","bīng xuě cōng míng",2,"Ice-and-snow clever — a mind crystal clear.","小姑娘冰雪聪明，一点就透。","形容人非常聪明通透。","ice snow clever bright"],
["冰清玉洁","bīng qīng yù jié",2,"Pure as ice, clean as jade — an unimpeachable character.","老医生一辈子冰清玉洁，人人敬重。","品行像冰一样清澈、玉一样纯洁。","ice clear jade pure"],
["蕙质兰心","huì zhì lán xīn",2,"An orchid heart — refined, gentle and wise.","外婆蕙质兰心，一双手会做全世界的点心。","形容女子内心纯美、气质高雅。","orchid nature lily heart"],
["器宇轩昂","qì yǔ xuān áng",2,"Chest out, spirit up — a commanding presence walks in.","新来的教官器宇轩昂，一看就不简单。","气度不凡，精神饱满。","bearing presence lofty upright"],
["神采奕奕","shén cǎi yì yì",2,"Glowing with energy — a face lit from the inside.","爷爷晨练回来神采奕奕。","精神饱满，容光四射。","spirit glow radiant radiant"],
["容光焕发","róng guāng huàn fā",2,"Face restarted into full brightness — rested, happy, glowing.","度假回来她容光焕发。","脸上光彩四射，精神状态极好。","face light renewed emit"],
["意气风发","yì qì fēng fā",2,"High on life — spirit riding the wind.","毕业典礼上大家意气风发。","精神振奋，气概豪迈。","spirit energy wind blowing"],
["斗志昂扬","dòu zhì áng yáng",2,"Fighting spirit set to max brightness.","赛前的队员们斗志昂扬。","战斗意志高涨。","fight will high uplifted"],
["生龙活虎","shēng lóng huó hǔ",2,"Alive as a dragon, lively as a tiger — pure energy.","七十岁的他还生龙活虎。","充满活力，精力旺盛。","live dragon live tiger"],
["龙马精神","lóng mǎ jīng shén",2,"Dragon-horse energy — boundless vigor, the classic blessing.","祝您新年龙马精神。","像龙马一样精神旺盛，常用作祝福。","dragon horse spirit energy"],
["老当益壮","lǎo dāng yì zhuàng",2,"Older, bolder — age only turned the volume up.","老爷子七十岁开始跑马拉松，老当益壮。","年纪越大越有干劲。","old yet more strong"],
["年轻有为","nián qīng yǒu wéi",2,"Young AND already achieving — a terrifying trajectory.","三十岁当上院长，真是年轻有为。","年纪轻轻就有作为。","young yet have achievement"],
["才貌双全","cái mào shuāng quán",3,"Talent and looks, both maxed out.","她才貌双全，是学校的风云人物。","才华和相貌都出众。","talent looks both complete"]
];

const BULK_ARGUE2 = [
["惨不忍睹","cǎn bù rěn dǔ",2,"Too tragic to watch — your code, your room, your haircut.","他烤的蛋糕惨不忍睹。","凄惨得让人不忍心看。","miserable not bear look"],
["不堪入目","bù kān rù mù",2,"Unfit for human eyes. The room was like that.","他房间乱得不堪入目。","景象乱糟糟，看不下去。","not bear enter eye"],
["一塌糊涂","yī tā hú tú",2,"Collapsed into total mud — a complete mess.","面试表现得一塌糊涂。","乱到不可收拾，糟到极点。","one collapse mud confused"],
["乌烟瘴气","wū yān zhàng qì",2,"Black smoke and miasma — a toxic atmosphere.","评论区被吵得乌烟瘴气。","环境或风气混乱污浊。","black smoke miasma air"],
["乌合之众","wū hé zhī zhòng",2,"A flock of crows — a crowd with no discipline, not a team.","没有配合的队伍就是乌合之众。","无组织无纪律的一群人。","crow flock of crowd"],
["一盘散沙","yī pán sàn shā",2,"A plate of loose sand — zero cohesion.","没有信任的团队就是一盘散沙。","力量分散，不团结。","one plate loose sand"],
["各怀鬼胎","gè huái guǐ tāi",2,"Everyone quietly pregnant with their own scheme.","谈判桌上各方各怀鬼胎。","各人有各人的心思和算计。","each carry ghost womb"],
["貌合神离","mào hé shén lí",2,"Together in photos, divorced in spirit.","他俩表面和睦，其实貌合神离。","表面关系好，内心已疏远。","appearance united spirit departed"],
["同床异梦","tóng chuáng yì mèng",2,"Same bed, different dreams — partnership in name only.","合伙才半年就同床异梦了。","共同相处却各有打算。","same bed different dream"],
["一败涂地","yī bài tú dì",2,"One defeat, smeared all over the floor.","首次创业一败涂地。","失败得非常惨，不可收拾。","one defeat smear ground"],
["不学无术","bù xué wú shù",2,"Never studied, owns no skills — confidently unqualified.","他不懂装懂，不学无术。","既没学问，又没本领。","not learn no skill"],
["胸无点墨","xiōng wú diǎn mò",2,"Not a drop of ink in the chest.","让他写两句祝词，才发现胸无点墨。","肚子里没有一点学问。","chest no dot ink"],
["目不识丁","mù bù shí dīng",2,"Can't even recognize the character 丁.","爷爷说过去穷得目不识丁。","一个字都不认识。","eye not recognize ding"],
["绣花枕头","xiù huā zhěn tou",2,"An embroidered pillow — gorgeous outside, straw inside.","他只是个绣花枕头，一干活就露馅。","外表好看但没有真本事。","embroidered flower pillow head"],
["华而不实","huá ér bù shí",2,"All blossom, no fruit — flashy but empty.","这个设计华而不实。","外表华丽，内容空虚。","flowery yet not fruitful"],
["徒有虚名","tú yǒu xū míng",2,"Holding a famous name on credit.","那家网红店徒有虚名。","空有名声，名不副实。","merely have empty name"],
["有名无实","yǒu míng wú shí",2,"The title exists; the substance doesn't.","这个头衔有名无实。","只有名义，没有实际。","have name no substance"],
["滥竽充数","làn yú chōng shù",2,"Faking the flute in the royal band — pretending competence among the skilled.","他不会修图，全靠滥竽充数。","没本事的人混在行家里充数。","fake flute fill the count"],
["鱼目混珠","yú mù hùn zhū",2,"Fish eyes passed off as pearls.","直播间里鱼目混珠的太多了。","拿假货冒充真货。","fish eye mix pearl"],
["半途而废","bàn tú ér fèi",2,"Abandoned halfway — the gym membership special.","钢琴学到三级就半途而废。","事情做到一半就放弃了。","half road then abandon"]
];

const BULK_SARCASM2 = [
["半斤八两","bàn jīn bā liǎng",1,"Half a jin vs eight liang — EXACTLY equal weight, for two equally bad things.","你俩迟到的借口半斤八两。","彼此一样，不相上下（多含贬义）。","half jin eight liang"],
["棋逢对手","qí féng duì shǒu",1,"A matched opponent at chess — sincere for rivals, deadly for two equally hopeless debaters.","你俩抬杠真是棋逢对手。","本领相当的对手碰到了一起。","chess meet match opponent"],
["不相上下","bù xiāng shàng xià",1,"Impossible to say who's above — equally matched, often equally bad.","你们俩的厨艺真不相上下。","分不出高低好坏。","not compare up down"],
["伯仲之间","bó zhòng zhī jiān",1,"Between the two brothers — practically equals.","他的棋艺和楼下大爷在伯仲之间。","水平相当，难分高下。","eldest second of between"],
["自愧不如","zì kuì bù rú",2,"I'm ashamed I can't match you — sincerity, or pure salt.","论脸皮厚度，我自愧不如。","自认为比不上别人（常带讽刺）。","self ashamed not equal"],
["刮目相看","guā mù xiāng kàn",2,"Wipe your eyes and look again — sarcastic when the progress is absurd.","你居然学会了烧水，真是让我刮目相看。","用新眼光重新看待某人。","scrape eye mutually look"],
["肃然起敬","sù rán qǐ jìng",2,"Rise in solemn respect — sarcasm-grade admiration.","看到你把泡面煮糊，我肃然起敬。","产生严肃敬佩的心情（可反讽）。","solemn then rise respect"],
["可歌可泣","kě gē kě qì",2,"Worthy of songs and tears — for heroic deeds, or spectacular failures.","你找借口的水平真是可歌可泣。","事迹悲壮感人（常反讽荒唐事）。","can sing can weep"],
["叹为观止","tàn wéi guān zhǐ",2,"Sigh: this is the peak of watching. Best ever — or worst ever.","这场闹剧真是让人叹为观止。","赞叹所见事物到了极点（可反讽）。","sigh as viewing peak"],
["前无古人","qián wú gǔ rén",2,"No ancestor ever did this — unprecedented. Read the tone.","把粥煮成炭，这操作前无古人。","以前从来没有人这样做过（可反讽）。","before no ancient people"],
["史无前例","shǐ wú qián lì",3,"History offers no precedent — said of the unique, or the unhinged.","迟到理由能写论文，史无前例。","历史上从来没有过先例。","history no previous example"],
["闻所未闻","wén suǒ wèi wén",2,"Never heard before — beyond any ear's experience.","这种借口真是闻所未闻。","听到了从来没听过的事。","hear that never heard"],
["天衣无缝","tiān yī wú fèng",2,"Heaven's robe has no seams — flawless. Sarcastic for lame excuses.","这借口编得天衣无缝啊。","完美自然，没有破绽（可反讽）。","heaven robe no seam"],
["无懈可击","wú xiè kě jī",2,"No weak point to strike — airtight arguments, or airtight alibis.","这套说辞无懈可击，就是没人信。","十分严谨，找不到破绽（可反讽）。","no flaw can strike"],
["滴水不漏","dī shuǐ bù lòu",2,"Not one drop leaks — watertight logic, or watertight stinginess.","他管账滴水不漏，AA到五毛。","说话办事周密，毫无漏洞。","drop water not leak"],
["面面俱到","miàn miàn jù dào",2,"Every face attended — thorough, or laughably unfocused.","他的方案哪都提了就是没重点，面面俱到。","各方面都照顾到（可含贬义）。","face face all attend"],
["深思熟虑","shēn sī shú lǜ",2,"Deep thought, ripe deliberation — real planning, or a fancy label for procrastination.","纠结两周买奶茶，可谓深思熟虑。","深入细致地考虑。","deep think ripe consider"],
["深谋远虑","shēn móu yuǎn lǜ",2,"Deep plans, far concerns — strategist brain, or claims thereof.","囤十包泡面等涨价，也算深谋远虑？","计划周密，考虑长远（可反讽）。","deep plan far consider"],
["神乎其技","shén hū qí jì",2,"Skill approaching the divine — genuine awe, or wide-eyed mockery.","把泡面泡坨得这么均匀，神乎其技。","技艺精妙到了极点（可反讽）。","divine truly that skill"],
["英明神武","yīng míng shén wǔ",3,"Wise and mighty — royal-scale praise, or maximum sarcasm.","把遥控器放冰箱里防潮，真是英明神武。","英明威武（多为反讽）。","wise bright divine mighty"],
["别具一格","bié jù yī gé",2,"A style all its own — refreshing originality, or glorious weirdness.","他把袜子当手套戴，真别具一格。","另有一种独特风格（可反讽）。","separately own one style"],
["独树一帜","dú shù yī zhì",2,"A flag planted alone — one of a kind, praise or side-eye.","全班只有他给作业画了封面，独树一帜。","自成一家，与众不同。","alone plant one flag"]
];

mergeBulk(BULK_PRAISE2, "praise");
mergeBulk(BULK_ARGUE2, "argue");
mergeBulk(BULK_SARCASM2, "sarcasm");
