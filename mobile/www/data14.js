/* Batch 14: +15 praise (inner peace & integrity), +15 argue (consequences), +30 sarcasm (grand ceremony for trivial stuff II). */

const BULK_PRAISE13 = [
["洁身自好","jié shēn zì hào",1,"Keeps himself clean and pure — twenty years in sales, never a kickback.","干销售二十年，他始终洁身自好。","保持自身纯洁，不同流合污。","keep self clean pure"],
["克勤克俭","kè qín kè jiǎn",1,"Able-diligent, able-thrifty — both virtues, one household.","老两口克勤克俭，供出了两个大学生。","既勤劳又节俭。","able diligent able thrifty"],
["艰苦朴素","jiān kǔ pǔ sù",1,"Endures hardship, lives plain — the CEO still rides the bus.","当了经理他还艰苦朴素。","吃苦耐劳、勤俭朴实。","hardship endure plain simple"],
["粗茶淡饭","cū chá dàn fàn",1,"Coarse tea, plain rice — and the happiest man at the table.","粗茶淡饭，他吃得津津有味。","简单的饮食，朴素的生活。","coarse tea plain rice"],
["安贫乐道","ān pín lè dào",2,"Content in poverty, delighted with the Way.","老先生安贫乐道，从不羡慕别人。","安于贫困，乐于坚持自己的信念。","content poor delight way"],
["淡泊名利","dàn bó míng lì",2,"Indifferent to fame and profit — turned the title down twice.","他淡泊名利，两次拒绝升迁。","不追求名声和利益。","indifferent to fame profit"],
["宁静致远","níng jìng zhì yuǎn",2,"Tranquility reaches far — the office with no clock.","他的座右铭是宁静致远。","心境安宁才能达到远大目标。","tranquil quiet reach far"],
["知足常乐","zhī zú cháng lè",1,"Knows what's enough, stays happy forever.","知足常乐是他们家的家训。","知道满足就总是快乐的。","know enough often happy"],
["宠辱不惊","chǒng rǔ bù jīng",2,"Promotion or penalty, the same calm face.","升职降职他都宠辱不惊。","受宠受辱都不动心。","favor disgrace not startled"],
["云淡风轻","yún dàn fēng qīng",1,"Pale clouds, light wind — scandal handled like weather.","风波过后他一如既往，云淡风轻。","形容心境淡然。","clouds pale wind light"],
["光风霁月","guāng fēng jì yuè",3,"Clear breeze after rain, washed moon — a character you could audit by candlelight.","他的胸怀如光风霁月。","胸怀坦荡，品德高洁。","clear breeze cleared moon"],
["宁死不屈","níng sǐ bù qū",3,"Rather die than yield — the city held forty days.","守军宁死不屈，坚守四十天。","宁可牺牲也不屈服。","rather die not yield"],
["坚贞不屈","jiān zhēn bù qū",3,"Three years of pressure, never bent.","他坚贞不屈，守口如瓶。","坚定而有气节，决不屈服。","firm loyal not bend"],
["傲雪凌霜","ào xuě líng shuāng",2,"Defies snow, braves frost — the winter crop that survived.","梅花傲雪凌霜，愈冷愈开花。","不畏严寒，坚强不屈。","defy snow brave frost"],
["疾风劲草","jí fēng jìn cǎo",2,"Only fierce wind reveals the strong grass.","危机一来才见谁是疾风劲草。","经过考验才知道谁是坚强的人。","fierce wind strong grass"]
];

const BULK_ARGUE13 = [
["草菅人命","cǎo jiān rén mìng",3,"Treats human life as grass and weeds.","黑心工厂草菅人命。","把人命看得像野草一样轻贱。","grass weeds human life"],
["生灵涂炭","shēng líng tú tàn",3,"Living souls smeared in charcoal.","战乱之下生灵涂炭。","百姓像陷在泥坑和火坑里一样受苦。","living souls smeared charcoal"],
["民不聊生","mín bù liáo shēng",3,"The people have no way left to live.","苛捐杂税之下民不聊生。","老百姓无法生存。","people no way live"],
["哀鸿遍野","āi hóng biàn yě",3,"Mourning geese covering the wilds — refugees and the laid-off alike.","裁员之后哀鸿遍野。","到处是流离失所的灾民。","mourning geese cover wilds"],
["苦不堪言","kǔ bù kān yán",2,"Suffering beyond words.","加班强度苦不堪言。","痛苦或困苦到了极点，说不出话。","bitterness not bearable words"],
["叫苦连天","jiào kǔ lián tiān",2,"Cries of bitterness linking sky to sky.","三班倒把大家折磨得叫苦连天。","不断诉说苦处。","cry bitter link sky"],
["怨声载道","yuàn shēng zài dào",2,"Complaints loaded, filling the roads.","公交涨价后怨声载道。","怨恨的声音充满道路。","complaints loaded fill roads"],
["民怨沸腾","mín yuàn fèi téng",3,"The people's rage, boiling over.","水污染事件让民怨沸腾。","人民的怨怒像水沸腾一样。","people rage boiling over"],
["天怒人怨","tiān nù rén yuàn",3,"Heaven furious, people resentful.","他的暴行天怒人怨。","为害严重，惹得天和人共同愤怒。","heaven furious people resentful"],
["群情激愤","qún qíng jī fèn",2,"The crowd's mood inflamed and furious.","判决一出，群情激愤。","大家的情绪非常激动愤怒。","crowd mood inflamed furious"],
["不得人心","bù dé rén xīn",2,"Wins nothing — not even hearts.","他的改革从来不得人心。","得不到别人的支持拥护。","not win people hearts"],
["众叛亲离","zhòng pàn qīn lí",3,"The crowd betrays, the kin deserts.","他一意孤行到众叛亲离。","众人反对，亲信背离。","crowd betrays kin deserts"],
["孤家寡人","gū jiā guǎ rén",1,"The lonely monarch, the solitary man — throne as isolation.","他把所有人都推开了，成了孤家寡人。","脱离群众，孤立无助的人。","lonely monarch solitary man"],
["分崩离析","fēn bēng lí xī",3,"The alliance splits, crumbles, falls apart.","内斗让团队分崩离析。","四分五裂，不可收拾。","split crumble fall apart"],
["土崩瓦解","tǔ bēng wǎ jiě",3,"Earth collapses, tiles shatter.","旧秩序一夜之间土崩瓦解。","彻底崩溃，无法收拾。","earth collapses tiles shatter"]
];

const BULK_SARCASM13 = [
["完美收官","wán měi shōu guān",2,"A perfect finish, curtain closed — the deadline exploded and the budget torched.","项目延期半年还烧穿预算，完美收官。","圆满结束（反讽惨烈收尾）。","perfect finish close curtain"],
["圆满成功","yuán mǎn chéng gōng",2,"Round, full, grand success — two crashes and one apology in.","大会在两次断电中圆满成功。","圆满结束（反讽事故不断）。","round full grand success"],
["胜利闭幕","shèng lì bì mù",2,"Victory grandly closing the curtain — half the staff fired at the afterparty.","裁员大会上胜利闭幕。","圆满结束（反讽）。","victory grandly close curtain"],
["落下帷幕","luò xià wéi mù",2,"The curtain drops down — the lawsuits, however, continue.","项目烂尾落下帷幕，官司才刚开始。","结束（反讽余波未了）。","drops down grand curtain"],
["顺利召开","shùn lì zhào kāi",2,"Smoothly convened, grandly opened — after two failed quorums.","大会在两次流会后顺利召开。","顺利举行（反讽一波三折）。","smooth convene grand open"],
["圆满完成","yuán mǎn wán chéng",2,"Round, full, complete, done — half the features were cut.","砍了一半功能后圆满完成。","完满做完（反讽缩水）。","round full complete done"],
["鞭辟入里","biān pì rù lǐ",2,"Whips the analysis deep into the core — of a single typo.","他对错别字的评论鞭辟入里。","分析透彻，切中要害（反讽抓小放大）。","whip peel into core"],
["一语中的","yī yǔ zhòng dì",2,"One sentence hits the target — dead wrong, but dead center.","他果断地说了个错误答案，一语中的地错了。","一句话说中要害（反讽错得准）。","one sentence hits target"],
["一语道破","yī yǔ dào pò",2,"One sentence says it through — the plan was bad. It was.","他一语道破：这方案本来就不行。","一句话说穿本质（反讽说穿惨状）。","one sentence says through"],
["正中下怀","zhèng zhòng xià huái",2,"Lands exactly in my bosom — he booked the audit himself.","审计提前来了，他正中下怀地笑了。","正合自己心意（反讽另有图谋）。","exactly hits my bosom"],
["来得正好","lái de zhèng hǎo",1,"Comes at just the right time — the crash, right before his demo.","系统在他演示前崩溃，来得正好。","来得恰逢其时（反讽倒霉）。","comes at just right"],
["事无巨细","shì wú jù xì",2,"Every matter, no matter the size — micromanaged down to the staples.","他连订书钉都要管，事无巨细。","事情不分大小（反讽微观管理）。","matters no matter size"],
["亲力亲为","qīn lì qīn wéi",2,"Own effort, own doing — rewrote everyone's code personally.","他事事亲力亲为，把组员的代码全重写了。","亲自去做（反讽微观管理）。","own effort own doing"],
["身体力行","shēn tǐ lì xíng",2,"Body practicing, effort acting — preaches fitness, lives on the couch.","他身体力行地宣传健身，自己从不运动。","亲身体验努力实行（反讽言行不一）。","body practice effort act"],
["率先垂范","shuài xiān chuí fàn",2,"First to lead by example — always the first one late.","每次迟到他都率先垂范。","带头做出榜样（反讽带坏头）。","first lead model example"],
["痴心不改","chī xīn bù gǎi",1,"The fool heart never changes — five years of daily lottery tickets.","买彩票五年颗粒无收，他痴心不改。","痴迷的心不变（反讽执迷）。","fool heart not change"],
["执着追求","zhí zhuó zhuī qiú",2,"Stubborn pursuit, chasing forever — the same bug since 2019.","他执着追求地修那个 bug，修了六年。","坚持不懈地追求（反讽方向错）。","stubborn pursuit chase forever"],
["孜孜以求","zī zī yǐ qiú",2,"Diligently, diligently seeking — the perfect excuse, still perfecting it.","他孜孜以求的，是怎么把借口编得更圆。","勤恳探求（反讽求错了）。","diligent diligent seek it"],
["忠贞不渝","zhōng zhēn bù yú",2,"Loyal and true, never wavering — to the broken printer.","他对那台坏打印机忠贞不渝。","忠诚不变（反讽对象荒唐）。","loyal true not change"],
["海枯石烂","hǎi kū shí làn",1,"Until the sea dries and rocks rot — the report, he swears, is coming.","海枯石烂他也会把报告写完的。" ,"坚持到永远（反讽永远没写）。","sea dries rocks rot"],
["山盟海誓","shān méng hǎi shì",1,"Mountain vows, sea oaths — broken by Tuesday.","他说绝不迟到的山盟海誓周二就破了。","誓言庄严（反讽迅速违背）。","mountain vows sea oaths"],
["通力合作","tōng lì hé zuò",2,"Full force, joint work — both departments into the same ditch.","两部门通力合作，把项目推向了深渊。","一齐出力（反讽合作搞砸）。","full force joint work"],
["携手并进","xié shǒu bìng jìn",2,"Join hands, advance side by side — into the wrong market.","两家公司携手并进，一起赔了本。","共同前进（反讽一起错）。","join hands side advance"],
["并肩作战","bìng jiān zuò zhàn",2,"Shoulder to shoulder in battle — against their own customer.","客服和技术并肩作战对付用户。","共同战斗（反讽一致对外坑人）。","shoulder to shoulder fight"],
["共襄盛举","gòng xiāng shèng jǔ",2,"All teams jointly aiding the grand event — the biggest outage in history.","全公司共襄盛举，搞出了史上最大宕机。","共同参加盛举（反讽事故）。","together aid grand event"],
["同舟共济","tóng zhōu gòng jì",2,"Same boat, joint rescue — and nobody picked up an oar.","船漏了大家同舟共济地互相甩锅。","同心协力渡过难关（反讽甩锅）。","same boat joint rescue"],
["风雨同舟","fēng yǔ tóng zhōu",2,"Wind and rain, same boat — both of them blaming the storm.","出了事他们风雨同舟地互相埋怨天气。","共同经历患难（反讽推责）。","wind rain same boat"],
["同甘共苦","tóng gān gòng kǔ",2,"Sharing the sweet, sharing the bitter — he took the sweet.","说好同甘共苦，甜的全归他。","共同享受幸福，共同承担苦难。","same sweet share bitter"],
["生死与共","shēng sǐ yǔ gòng",2,"Life and death together, shared — by the two crashed servers.","生产库和备份库生死与共地一起崩了。","生死与共（反讽一起完蛋）。","life death together shared"],
["完美谢幕","wán měi xiè mù",2,"A perfect graceful closing curtain — the store closed mid-launch.","开业当天中午就关门，完美谢幕。","圆满退场（反讽速败）。","perfect graceful closing curtain"]
];

mergeBulk(BULK_PRAISE13, "praise");
mergeBulk(BULK_ARGUE13, "argue");
mergeBulk(BULK_SARCASM13, "sarcasm");
