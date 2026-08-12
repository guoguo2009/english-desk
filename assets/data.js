// 译林版《英语》三~六年级 全套词汇（3-6年级，上下册共8册）
// 数据源：用户提供的《小学英语译林版单词表（三四五六年级，带音标按单元顺序）》.xls
// 字段：en 英文 / ph 音标 / zh 中文
// 结构：BOOK_ORDER 册顺序；BOOKS[册] = { grade, volume, label, units:[{id,title,topic,text,words}] }

const BOOK_ORDER = ["三上", "三下", "四上", "四下", "五上", "五下", "六上", "六下"];

const BOOKS = {
 "三上": {
  "grade": "三年级",
  "volume": "上册",
  "label": "三年级·上册",
  "units": [
   {
    "id": "三上-u1",
    "title": "Unit 1",
    "topic": "三上 · 第1单元",
    "text": "",
    "words": [
     {
      "en": "Hello",
      "ph": "[hə'ləʊ]",
      "zh": "你好"
     },
     {
      "en": "Good morning",
      "ph": "/ɡˈʊd mˈɔrnɪŋ/",
      "zh": "早上好。"
     },
     {
      "en": "Miss",
      "ph": "[mɪs]",
      "zh": "小姐"
     },
     {
      "en": "Hi.",
      "ph": "/hˈaɪ/",
      "zh": "你好。"
     },
     {
      "en": "Good afternoon",
      "ph": "/ɡˈʊd ˌæftɚnˈun/",
      "zh": "下午好。"
     },
     {
      "en": "class",
      "ph": "[klɑːs]",
      "zh": "同学们"
     },
     {
      "en": "I",
      "ph": "[aɪ]",
      "zh": "我"
     },
     {
      "en": "I'm",
      "ph": "[aɪm]",
      "zh": "(= I am) 我是"
     }
    ]
   },
   {
    "id": "三上-u2",
    "title": "Unit 2",
    "topic": "三上 · 第2单元",
    "text": "",
    "words": [
     {
      "en": "are",
      "ph": "[ɑː]",
      "zh": "是"
     },
     {
      "en": "you",
      "ph": "[juː]",
      "zh": "你"
     },
     {
      "en": "yes",
      "ph": "[jes]",
      "zh": "是；对"
     },
     {
      "en": "am",
      "ph": "[æm]",
      "zh": "是"
     },
     {
      "en": "no",
      "ph": "[nəʊ]",
      "zh": "不；不是；没有"
     },
     {
      "en": "not",
      "ph": "[nɒt]",
      "zh": "不；没有"
     },
     {
      "en": "Goodbye",
      "ph": "[ˌgʊd'baɪ]",
      "zh": "再见。"
     }
    ]
   },
   {
    "id": "三上-u3",
    "title": "Unit 3",
    "topic": "三上 · 第3单元",
    "text": "",
    "words": [
     {
      "en": "my",
      "ph": "[maɪ]",
      "zh": "我的"
     },
     {
      "en": "friend",
      "ph": "[frend]",
      "zh": "朋友"
     },
     {
      "en": "she",
      "ph": "[ʃiː]",
      "zh": "她"
     },
     {
      "en": "she's",
      "ph": "[ʃiːs]",
      "zh": "(=she is) 她是"
     },
     {
      "en": "he",
      "ph": "[hiː]",
      "zh": "他"
     },
     {
      "en": "he's",
      "ph": "/hiz/",
      "zh": "(=he is) 他是"
     },
     {
      "en": "too",
      "ph": "[tuː]",
      "zh": "也"
     },
     {
      "en": "this",
      "ph": "[ðɪs]",
      "zh": "这；这个"
     },
     {
      "en": "is",
      "ph": "[ɪz]",
      "zh": "是"
     },
     {
      "en": "sister",
      "ph": "['sɪstə]",
      "zh": "姐姐；妹妹"
     }
    ]
   },
   {
    "id": "三上-u4",
    "title": "Unit 4",
    "topic": "三上 · 第4单元",
    "text": "",
    "words": [
     {
      "en": "family",
      "ph": "['fæmɪli]",
      "zh": "家；家庭"
     },
     {
      "en": "father",
      "ph": "['fɑːðə]",
      "zh": "父亲；爸爸"
     },
     {
      "en": "mother",
      "ph": "['mʌðə]",
      "zh": "母亲；妈妈"
     },
     {
      "en": "brother",
      "ph": "['brʌðə]",
      "zh": "哥哥；弟弟"
     },
     {
      "en": "me",
      "ph": "[miː]",
      "zh": "我"
     },
     {
      "en": "grandpa",
      "ph": "['grændpɑː]",
      "zh": "祖父；外祖父"
     },
     {
      "en": "grandma",
      "ph": "['grændmɑː]",
      "zh": "祖母；外祖母"
     },
     {
      "en": "Good evening.",
      "ph": "/ɡˈʊd ˈivnɪŋ/",
      "zh": "晚上好。"
     }
    ]
   },
   {
    "id": "三上-u5",
    "title": "Unit 5",
    "topic": "三上 · 第5单元",
    "text": "",
    "words": [
     {
      "en": "look at",
      "ph": "/lˈʊk ˈæt/",
      "zh": "看；瞧"
     },
     {
      "en": "T-shirt",
      "ph": "['tiːʃɜːt]",
      "zh": "T恤衫"
     },
     {
      "en": "it",
      "ph": "[ɪt]",
      "zh": "它"
     },
     {
      "en": "it's",
      "ph": "[ɪts]",
      "zh": "(= it is) 它是"
     },
     {
      "en": "nice",
      "ph": "[naɪs]",
      "zh": "好看的；好的"
     },
     {
      "en": "skirt",
      "ph": "[skɜːt]",
      "zh": "裙子"
     },
     {
      "en": "How nice!",
      "ph": "/hˈaʊ nˈaɪs/",
      "zh": "真好看!"
     },
     {
      "en": "cap",
      "ph": "[kæp]",
      "zh": "便帽；帽子"
     },
     {
      "en": "great",
      "ph": "[greɪt]",
      "zh": "好极了；很好"
     },
     {
      "en": "jacket",
      "ph": "['dʒækɪt]",
      "zh": "夹克衫"
     },
     {
      "en": "new",
      "ph": "[njuː]",
      "zh": "新的"
     },
     {
      "en": "What colour ...?",
      "ph": "/wˈʌt kˈʌlɚ/",
      "zh": "……是什么颜色的?"
     },
     {
      "en": "red",
      "ph": "[red]",
      "zh": "红色的"
     }
    ]
   },
   {
    "id": "三上-u6",
    "title": "Unit 6",
    "topic": "三上 · 第6单元",
    "text": "",
    "words": [
     {
      "en": "colour",
      "ph": "['kʌlə]",
      "zh": "颜色"
     },
     {
      "en": "orange",
      "ph": "['ɔːrɪndʒ]",
      "zh": "橙色的"
     },
     {
      "en": "now",
      "ph": "[naʊ]",
      "zh": "现在；目前"
     },
     {
      "en": "green",
      "ph": "[griːn]",
      "zh": "绿色的"
     },
     {
      "en": "and",
      "ph": "[ænd]",
      "zh": "和；与；又"
     },
     {
      "en": "yellow",
      "ph": "['jeləʊ]",
      "zh": "黄色的"
     },
     {
      "en": "black",
      "ph": "[blæk]",
      "zh": "黑色的"
     },
     {
      "en": "blue",
      "ph": "[bluː]",
      "zh": "蓝色的"
     },
     {
      "en": "brown",
      "ph": "[braʊn]",
      "zh": "棕色的"
     },
     {
      "en": "white",
      "ph": "[hwaɪt]",
      "zh": "白色的"
     },
     {
      "en": "Would you like ...?",
      "ph": "/wˈʊd jˈu lˈaɪk/",
      "zh": "你想要......吗?"
     },
     {
      "en": "an",
      "ph": "[æn]",
      "zh": "一个"
     },
     {
      "en": "Yes，please.",
      "ph": "/jˈɛs plˈiz/",
      "zh": "好的；太感谢了.。"
     },
     {
      "en": "or",
      "ph": "[ɔː]",
      "zh": "或；还是"
     }
    ]
   },
   {
    "id": "三上-u7",
    "title": "Unit 7",
    "topic": "三上 · 第7单元",
    "text": "",
    "words": [
     {
      "en": "a",
      "ph": "[eɪ]",
      "zh": "一个"
     },
     {
      "en": "pie",
      "ph": "[paɪ]",
      "zh": "馅饼；派"
     },
     {
      "en": "Nice to meet you.",
      "ph": "/nˈaɪs tˈu mˈit jˈu/",
      "zh": "很高兴认识你。"
     },
     {
      "en": "No，thank you.",
      "ph": "/nˈoʊ θˈæŋk jˈu/",
      "zh": "不；谢谢你。"
     },
     {
      "en": "What about ...?",
      "ph": "/wˈʌt əbˈaʊt/",
      "zh": "……怎么样？"
     },
     {
      "en": "cake",
      "ph": "[keɪk]",
      "zh": "蛋糕；糕饼"
     },
     {
      "en": "ice cream",
      "ph": "/ˈaɪs krˈim/",
      "zh": "冰淇淋"
     },
     {
      "en": "sweet",
      "ph": "[swiːt]",
      "zh": "糖果"
     },
     {
      "en": "hot dog",
      "ph": "/hˈɑt dˈɔɡ/",
      "zh": "热狗"
     },
     {
      "en": "look",
      "ph": "[lʊk]",
      "zh": "看；瞧"
     },
     {
      "en": "what",
      "ph": "[hwɒt]",
      "zh": "什么"
     },
     {
      "en": "what's",
      "ph": "[hwɒts]",
      "zh": "(=what is) 什么是"
     }
    ]
   },
   {
    "id": "三上-u8",
    "title": "Unit 8",
    "topic": "三上 · 第8单元",
    "text": "",
    "words": [
     {
      "en": "Happy New Year!",
      "ph": "/hˈæpi nˈu jˈɪr/",
      "zh": "新年快乐!"
     },
     {
      "en": "uncle",
      "ph": "['ʌŋkl]",
      "zh": "叔父;伯父;舅父;姑父;姨夫"
     },
     {
      "en": "This is for you.",
      "ph": "/ðˈɪs ˈɪz fˈɔr jˈu/",
      "zh": "这是给你的。"
     },
     {
      "en": "doll",
      "ph": "[dɒl]",
      "zh": "玩具娃娃"
     },
     {
      "en": "that",
      "ph": "[ðæt]",
      "zh": "那；那个"
     },
     {
      "en": "ball",
      "ph": "[bɔːl]",
      "zh": "球"
     },
     {
      "en": "robot",
      "ph": "[ˈrəʊbɒt]",
      "zh": "机器人"
     },
     {
      "en": "CD",
      "ph": "[ˌsiː'diː]",
      "zh": "光盘"
     },
     {
      "en": "car",
      "ph": "[kɑː]",
      "zh": "小汽车；轿车"
     },
     {
      "en": "Happy birthday!",
      "ph": "/hˈæpi bˈɝθdˌeɪ/",
      "zh": "生日快乐!"
     },
     {
      "en": "toy",
      "ph": "[tɔɪ]",
      "zh": "玩具"
     },
     {
      "en": "ah",
      "ph": "/ˈɑ/",
      "zh": "啊"
     },
     {
      "en": "ha",
      "ph": "[hɑː]",
      "zh": "哈"
     }
    ]
   }
  ]
 },
 "三下": {
  "grade": "三年级",
  "volume": "下册",
  "label": "三年级·下册",
  "units": [
   {
    "id": "三下-u1",
    "title": "Unit 1",
    "topic": "三下 · 第1单元",
    "text": "",
    "words": [
     {
      "en": "in class",
      "ph": "/ɪn klˈæs/",
      "zh": "在上课"
     },
     {
      "en": "Stand up.",
      "ph": "/stˈænd ˈʌp/",
      "zh": "起立"
     },
     {
      "en": "Mr",
      "ph": "/mˈɪstɚ/",
      "zh": "先生"
     },
     {
      "en": "sit down.",
      "ph": "/sˈɪt dˈaʊn/",
      "zh": "坐下"
     },
     {
      "en": "please",
      "ph": "[pliːz]",
      "zh": "请"
     },
     {
      "en": "open",
      "ph": "['əʊpən]",
      "zh": "开；打开"
     },
     {
      "en": "the",
      "ph": "[ðə]",
      "zh": "这个；这些；那个；那些"
     },
     {
      "en": "door",
      "ph": "[dɔː]",
      "zh": "门"
     },
     {
      "en": "sorry",
      "ph": "[ˈsɒri]",
      "zh": "对不起"
     },
     {
      "en": "come in",
      "ph": "/kˈʌm ɪn/",
      "zh": "进来"
     },
     {
      "en": "close",
      "ph": "[kləʊz]",
      "zh": "关上；合上"
     },
     {
      "en": "window",
      "ph": "['wɪndəʊ]",
      "zh": "窗; 窗户"
     },
     {
      "en": "blackboard",
      "ph": "['blækbɔːd]",
      "zh": "黑板"
     },
     {
      "en": "book",
      "ph": "[bʊk]",
      "zh": "书"
     },
     {
      "en": "rubber",
      "ph": "[ˈrʌbə]",
      "zh": "橡皮"
     },
     {
      "en": "don't",
      "ph": "[dəʊnt]",
      "zh": "(= do not) 不要"
     },
     {
      "en": "listen to",
      "ph": "/lˈɪsən tˈu/",
      "zh": "听"
     },
     {
      "en": "parrot",
      "ph": "['pærət]",
      "zh": "鹦鹉"
     }
    ]
   },
   {
    "id": "三下-u2",
    "title": "Unit 2",
    "topic": "三下 · 第2单元",
    "text": "",
    "words": [
     {
      "en": "in",
      "ph": "[ɪn]",
      "zh": "在……里面"
     },
     {
      "en": "library",
      "ph": "['laɪbrəri]",
      "zh": "图书馆"
     },
     {
      "en": "shh",
      "ph": "/ʃ/",
      "zh": "嘘"
     },
     {
      "en": "shout",
      "ph": "[ʃaʊt]",
      "zh": "喊；叫"
     },
     {
      "en": "run",
      "ph": "[rʌn]",
      "zh": "跑，跑步"
     },
     {
      "en": "eat",
      "ph": "[iːt]",
      "zh": "吃"
     },
     {
      "en": "here",
      "ph": "[hɪə]",
      "zh": "这里；在这里"
     },
     {
      "en": "talk",
      "ph": "[tɔːk]",
      "zh": "说话；谈话"
     },
     {
      "en": "sleep",
      "ph": "[sliːp]",
      "zh": "睡觉"
     },
     {
      "en": "drink",
      "ph": "[drɪŋk]",
      "zh": "喝"
     },
     {
      "en": "milk",
      "ph": "[mɪlk]",
      "zh": "牛奶"
     },
     {
      "en": "English",
      "ph": "['ɪŋglɪʃ]",
      "zh": "英语"
     },
     {
      "en": "your",
      "ph": "[jʊə]",
      "zh": "你的；你们的"
     }
    ]
   },
   {
    "id": "三下-u3",
    "title": "Unit 3",
    "topic": "三下 · 第3单元",
    "text": "",
    "words": [
     {
      "en": "pencil",
      "ph": "['pensl]",
      "zh": "铅笔"
     },
     {
      "en": "isn't",
      "ph": "['ɪznt]",
      "zh": "(=is not) 是不是"
     },
     {
      "en": "that's",
      "ph": "/ðæts/",
      "zh": "(=that is) 那是"
     },
     {
      "en": "schoolbag",
      "ph": "['skuːlˌbæg]",
      "zh": "书包"
     },
     {
      "en": "pen",
      "ph": "[pen]",
      "zh": "钢笔"
     },
     {
      "en": "crayon",
      "ph": "[ˈkreɪən]",
      "zh": "蜡笔"
     },
     {
      "en": "ruler",
      "ph": "['ruːlə]",
      "zh": "尺子"
     },
     {
      "en": "pencil case",
      "ph": "/pˈɛnsəl kˈeɪs/",
      "zh": "铅笔盒；铅笔袋"
     },
     {
      "en": "lunch box",
      "ph": "/lˈʌntʃ bˈɑks/",
      "zh": "午餐盒"
     },
     {
      "en": "where",
      "ph": "[hweə]",
      "zh": "在哪里"
     },
     {
      "en": "where's",
      "ph": "/wɛrz/",
      "zh": "(=where is) 在哪里"
     },
     {
      "en": "over there",
      "ph": "/ˈoʊvɚ ðˈɛr/",
      "zh": "在那里"
     }
    ]
   },
   {
    "id": "三下-u4",
    "title": "Unit 4",
    "topic": "三下 · 第4单元",
    "text": "",
    "words": [
     {
      "en": "bird",
      "ph": "[bɜːd]",
      "zh": "鸟"
     },
     {
      "en": "beautiful",
      "ph": "['bjuːtəfəl]",
      "zh": "漂亮的；美丽的"
     },
     {
      "en": "under",
      "ph": "['ʌndə]",
      "zh": "在……下面"
     },
     {
      "en": "desk",
      "ph": "[desk]",
      "zh": "课桌；书桌"
     },
     {
      "en": "behind",
      "ph": "[bɪ'haɪnd]",
      "zh": "在……后面"
     },
     {
      "en": "on",
      "ph": "[ɒn]",
      "zh": "在……上面"
     },
     {
      "en": "chair",
      "ph": "[tʃeə]",
      "zh": "椅子"
     },
     {
      "en": "tree",
      "ph": "[triː]",
      "zh": "树"
     },
     {
      "en": "guess",
      "ph": "[ges]",
      "zh": "猜；猜测"
     },
     {
      "en": "one",
      "ph": "[wʌn]",
      "zh": "一"
     },
     {
      "en": "two",
      "ph": "[tuː]",
      "zh": "二"
     },
     {
      "en": "three",
      "ph": "[θriː]",
      "zh": "三"
     },
     {
      "en": "oh",
      "ph": "[əʊ]",
      "zh": "哦；啊"
     },
     {
      "en": "wow",
      "ph": "[waʊ]",
      "zh": "哇,呀"
     }
    ]
   },
   {
    "id": "三下-u5",
    "title": "Unit 5",
    "topic": "三下 · 第5单元",
    "text": "",
    "words": [
     {
      "en": "How old are you?",
      "ph": "/hˈaʊ ˈoʊld ˈɑr jˈu/",
      "zh": "你多大了？"
     },
     {
      "en": "lovely",
      "ph": "[ˈlʌvli]",
      "zh": "可爱的"
     },
     {
      "en": "nine",
      "ph": "[naɪn]",
      "zh": "九"
     },
     {
      "en": "eight",
      "ph": "[eɪt]",
      "zh": "八"
     },
     {
      "en": "four",
      "ph": "[fɔː]",
      "zh": "四"
     },
     {
      "en": "five",
      "ph": "[faɪv]",
      "zh": "五"
     },
     {
      "en": "six",
      "ph": "[sɪks]",
      "zh": "六"
     },
     {
      "en": "seven",
      "ph": "['sevn]",
      "zh": "七"
     },
     {
      "en": "ten",
      "ph": "[ten]",
      "zh": "十"
     },
     {
      "en": "right",
      "ph": "[raɪt]",
      "zh": "对的；正确的"
     },
     {
      "en": "out",
      "ph": "[aʊt]",
      "zh": "出"
     },
     {
      "en": "What a nice cake!",
      "ph": "/wˈʌt ə nˈaɪs kˈeɪk/",
      "zh": "多么好的蛋糕！"
     },
     {
      "en": "make a wish",
      "ph": "/mˈeɪk ə wˈɪʃ/",
      "zh": "许个愿"
     },
     {
      "en": "want",
      "ph": "[wɒnt]",
      "zh": "希望"
     },
     {
      "en": "It's time for ...",
      "ph": "/ˈɪts tˈaɪm fˈɔr/",
      "zh": "是时候了…"
     }
    ]
   },
   {
    "id": "三下-u6",
    "title": "Unit 6",
    "topic": "三下 · 第6单元",
    "text": "",
    "words": [
     {
      "en": "What time is it?",
      "ph": "/wˈʌt tˈaɪm ˈɪz ˈɪt/",
      "zh": "几点了？"
     },
     {
      "en": "wake up",
      "ph": "/wˈeɪk ˈʌp/",
      "zh": "醒；醒来"
     },
     {
      "en": "mum",
      "ph": "[mʌm]",
      "zh": "妈妈"
     },
     {
      "en": "o'clock",
      "ph": "[əˈklɒk]",
      "zh": "……点钟"
     },
     {
      "en": "breakfast",
      "ph": "['brekfəst]",
      "zh": "早餐；早饭"
     },
     {
      "en": "hurry up",
      "ph": "/hˈɝi ˈʌp/",
      "zh": "快点"
     },
     {
      "en": "class",
      "ph": "[klɑːs]",
      "zh": "课；上课"
     },
     {
      "en": "dinner",
      "ph": "['dɪnə]",
      "zh": "晚餐；晚饭"
     },
     {
      "en": "bed",
      "ph": "[bed]",
      "zh": "床"
     },
     {
      "en": "OK",
      "ph": "[əʊˈkeɪ]",
      "zh": "好；行"
     },
     {
      "en": "lunch",
      "ph": "[lʌntʃ]",
      "zh": "午餐；午饭"
     },
     {
      "en": "eleven",
      "ph": "[ɪ'levn]",
      "zh": "十一"
     },
     {
      "en": "twelve",
      "ph": "[twelv]",
      "zh": "十二"
     },
     {
      "en": "bag",
      "ph": "[bæg]",
      "zh": "包；书包"
     },
     {
      "en": "these",
      "ph": "[ðiːz]",
      "zh": "这些"
     },
     {
      "en": "here's",
      "ph": "/hɪrz/",
      "zh": "(=here is) 这是"
     }
    ]
   },
   {
    "id": "三下-u7",
    "title": "Unit 7",
    "topic": "三下 · 第7单元",
    "text": "",
    "words": [
     {
      "en": "farm",
      "ph": "[fɑːm]",
      "zh": "农场"
     },
     {
      "en": "Welcome to ...",
      "ph": "/wˈɛlkəm tˈu/",
      "zh": "欢迎来到……"
     },
     {
      "en": "they",
      "ph": "[ðeɪ]",
      "zh": "他们；她们；它们"
     },
     {
      "en": "they're",
      "ph": "[ðeɪə]",
      "zh": "(= they are) 他们是"
     },
     {
      "en": "pig",
      "ph": "[pɪg]",
      "zh": "猪"
     },
     {
      "en": "those",
      "ph": "[ðəʊz]",
      "zh": "那些"
     },
     {
      "en": "cow",
      "ph": "[kaʊ]",
      "zh": "奶牛"
     },
     {
      "en": "apple",
      "ph": "['æpl]",
      "zh": "苹果"
     },
     {
      "en": "pear",
      "ph": "[peə]",
      "zh": "梨"
     },
     {
      "en": "chicken",
      "ph": "[ˈtʃɪkɪn]",
      "zh": "鸡"
     },
     {
      "en": "duck",
      "ph": "[dʌk]",
      "zh": "鸭子"
     },
     {
      "en": "orange",
      "ph": "['ɔːrɪndʒ]",
      "zh": "橙子"
     },
     {
      "en": "picture",
      "ph": "['pɪktʃə]",
      "zh": "图画;照片"
     },
     {
      "en": "who",
      "ph": "[huː]",
      "zh": "谁"
     },
     {
      "en": "who's",
      "ph": "/huz/",
      "zh": "(= who is) 谁的"
     }
    ]
   },
   {
    "id": "三下-u8",
    "title": "Unit 8",
    "topic": "三下 · 第8单元",
    "text": "",
    "words": [
     {
      "en": "we",
      "ph": "[wiː]",
      "zh": "我们"
     },
     {
      "en": "we're",
      "ph": "[wiːə/]",
      "zh": "(= we are) 我们是"
     },
     {
      "en": "twin",
      "ph": "[twɪn]",
      "zh": "双胞胎之一"
     },
     {
      "en": "aunt",
      "ph": "[ɑːnt]",
      "zh": "姨母；伯母；婶母；舅母"
     },
     {
      "en": "girl",
      "ph": "[gɜːl]",
      "zh": "女孩"
     },
     {
      "en": "man",
      "ph": "[mæn]",
      "zh": "男人；人"
     },
     {
      "en": "woman",
      "ph": "['wʊmən]",
      "zh": "妇女；女人"
     },
     {
      "en": "boy",
      "ph": "[bɔɪ]",
      "zh": "男孩"
     },
     {
      "en": "baby",
      "ph": "['beɪbi]",
      "zh": "婴儿；宝宝"
     },
     {
      "en": "cousin",
      "ph": "['kʌzn]",
      "zh": "堂兄弟(姐妹)表兄弟(姐妹)"
     },
     {
      "en": "name",
      "ph": "[neɪm]",
      "zh": "名字"
     }
    ]
   }
  ]
 },
 "四上": {
  "grade": "四年级",
  "volume": "上册",
  "label": "四年级·上册",
  "units": [
   {
    "id": "四上-u1",
    "title": "Unit 1",
    "topic": "四上 · 第1单元",
    "text": "",
    "words": [
     {
      "en": "like",
      "ph": "[laɪk]",
      "zh": "喜欢"
     },
     {
      "en": "dog",
      "ph": "[dɒg]",
      "zh": "狗"
     },
     {
      "en": "animal",
      "ph": "['ænɪməl]",
      "zh": "动物"
     },
     {
      "en": "cat",
      "ph": "[kæt]",
      "zh": "猫"
     },
     {
      "en": "cute",
      "ph": "[kjuːt]",
      "zh": "可爱的"
     },
     {
      "en": "panda",
      "ph": "['pændə]",
      "zh": "熊猫"
     },
     {
      "en": "fat",
      "ph": "[fæt]",
      "zh": "胖的"
     },
     {
      "en": "elephant",
      "ph": "['elɪfənt]",
      "zh": "大象"
     },
     {
      "en": "horse",
      "ph": "[hɔːs]",
      "zh": "马"
     },
     {
      "en": "lion",
      "ph": "['laɪən]",
      "zh": "狮子"
     },
     {
      "en": "monkey",
      "ph": "['mʌŋki]",
      "zh": "猴子"
     },
     {
      "en": "tiger",
      "ph": "['taɪgə]",
      "zh": "老虎"
     },
     {
      "en": "have",
      "ph": "[hæv]",
      "zh": "有"
     }
    ]
   },
   {
    "id": "四上-u2",
    "title": "Unit 2",
    "topic": "四上 · 第2单元",
    "text": "",
    "words": [
     {
      "en": "Let's ...",
      "ph": "/lˈɛts/",
      "zh": "让咱们……"
     },
     {
      "en": "let's",
      "ph": "[lets]",
      "zh": "(= let us) 让我们"
     },
     {
      "en": "make",
      "ph": "[meɪk]",
      "zh": "做；制作"
     },
     {
      "en": "fruit",
      "ph": "[fruːt]",
      "zh": "水果"
     },
     {
      "en": "salad",
      "ph": "[ˈsæləd]",
      "zh": "色拉"
     },
     {
      "en": "pineapple",
      "ph": "[ˈpaɪnæp(ə)l]",
      "zh": "菠萝"
     },
     {
      "en": "mango",
      "ph": "['mæŋgəʊ]",
      "zh": "芒果"
     },
     {
      "en": "any",
      "ph": "['eni]",
      "zh": "一些；任何的"
     },
     {
      "en": "banana",
      "ph": "[bə'nɑːnə]",
      "zh": "香蕉"
     },
     {
      "en": "some",
      "ph": "[sʌm]",
      "zh": "一些"
     },
     {
      "en": "grape",
      "ph": "[greɪp]",
      "zh": "葡萄"
     },
     {
      "en": "Thanks.",
      "ph": "/θˈæŋks/",
      "zh": "谢谢"
     },
     {
      "en": "our",
      "ph": "['aʊə]",
      "zh": "我们的"
     },
     {
      "en": "cool",
      "ph": "[kuːl]",
      "zh": "酷；真棒"
     },
     {
      "en": "wonderful",
      "ph": "['wʌndəfəl]",
      "zh": "精彩的；绝妙的"
     },
     {
      "en": "how many",
      "ph": "/hˈaʊ mˈɛni/",
      "zh": "多少"
     }
    ]
   },
   {
    "id": "四上-u3",
    "title": "Unit 3",
    "topic": "四上 · 第3单元",
    "text": "",
    "words": [
     {
      "en": "thirteen",
      "ph": "['θɜːtiːn]",
      "zh": "十三"
     },
     {
      "en": "sticker",
      "ph": "/stˈɪkɚ/",
      "zh": "贴纸"
     },
     {
      "en": "can",
      "ph": "[kæn]",
      "zh": "可以；能；会"
     },
     {
      "en": "have a look",
      "ph": "/hˈæv ə lˈʊk/",
      "zh": "看一看"
     },
     {
      "en": "very",
      "ph": "['veri]",
      "zh": "很，非常"
     },
     {
      "en": "fifteen",
      "ph": "['fɪf'tiːn]",
      "zh": "十五"
     },
     {
      "en": "sure",
      "ph": "[ʃʊə]",
      "zh": "当然"
     },
     {
      "en": "fourteen",
      "ph": "['fɔː'tiːn]",
      "zh": "十四"
     },
     {
      "en": "sixteen",
      "ph": "[ˈsɪksti]",
      "zh": "十六"
     },
     {
      "en": "seventeen",
      "ph": "[sevənˈtiːn]",
      "zh": "十七"
     },
     {
      "en": "eighteen",
      "ph": "[ˈeɪˈtiːn]",
      "zh": "十八"
     },
     {
      "en": "nineteen",
      "ph": "[naɪnˈtiːn]",
      "zh": "十九"
     },
     {
      "en": "play",
      "ph": "[pleɪ]",
      "zh": "玩；打（球）"
     },
     {
      "en": "many",
      "ph": "['meni]",
      "zh": "许多"
     },
     {
      "en": "box",
      "ph": "[bɒks]",
      "zh": "盒子"
     },
     {
      "en": "table tennis",
      "ph": "/tˈeɪbəl tˈɛnəs/",
      "zh": "乒乓球"
     },
     {
      "en": "but",
      "ph": "[bʌt]",
      "zh": "但是"
     },
     {
      "en": "do",
      "ph": "[duː]",
      "zh": "做；干"
     }
    ]
   },
   {
    "id": "四上-u4",
    "title": "Unit 4",
    "topic": "四上 · 第4单元",
    "text": "",
    "words": [
     {
      "en": "basketball",
      "ph": "['bæskɪtbɔːl]",
      "zh": "篮球"
     },
     {
      "en": "well",
      "ph": "[wel]",
      "zh": "好"
     },
     {
      "en": "can't",
      "ph": "[kænt]",
      "zh": "(= can not) 不能"
     },
     {
      "en": "have a try",
      "ph": "/hˈæv ə trˈaɪ/",
      "zh": "试一试"
     },
     {
      "en": "yeah",
      "ph": "[jeə]",
      "zh": "是的；对的"
     },
     {
      "en": "football",
      "ph": "['fʊtbɔːl]",
      "zh": "足球"
     },
     {
      "en": "jump",
      "ph": "[dʒʌmp]",
      "zh": "跳"
     },
     {
      "en": "skate",
      "ph": "[skeɪt]",
      "zh": "溜冰；滑冰"
     },
     {
      "en": "swim",
      "ph": "[swɪm]",
      "zh": "游泳"
     },
     {
      "en": "quack",
      "ph": "[kwæk]",
      "zh": "（鸭子的）呱呱声"
     },
     {
      "en": "tweet",
      "ph": "/twˈit/",
      "zh": "（小鸟的）叽喳声"
     },
     {
      "en": "fly",
      "ph": "[flaɪ]",
      "zh": "飞"
     },
     {
      "en": "ouch",
      "ph": "[aʊtʃ]",
      "zh": "哎哟"
     },
     {
      "en": "sad",
      "ph": "[sæd]",
      "zh": "难过的；伤心地"
     },
     {
      "en": "either",
      "ph": "['iːðə]",
      "zh": "也"
     }
    ]
   },
   {
    "id": "四上-u5",
    "title": "Unit 5",
    "topic": "四上 · 第5单元",
    "text": "",
    "words": [
     {
      "en": "home",
      "ph": "[həʊm]",
      "zh": "家"
     },
     {
      "en": "bedroom",
      "ph": "['bedrʊm]",
      "zh": "卧室"
     },
     {
      "en": "living room",
      "ph": "/lˈɪvɪŋ rˈum/",
      "zh": "客厅"
     },
     {
      "en": "sofa",
      "ph": "[ˈsɒkɪt]",
      "zh": "沙发"
     },
     {
      "en": "come",
      "ph": "[kʌm]",
      "zh": "来"
     },
     {
      "en": "kitchen",
      "ph": "['kɪtʃɪn]",
      "zh": "厨房"
     },
     {
      "en": "clock",
      "ph": "[klɒk]",
      "zh": "钟"
     },
     {
      "en": "fridge",
      "ph": "[frɪdʒ]",
      "zh": "冰箱"
     },
     {
      "en": "table",
      "ph": "['teɪbl]",
      "zh": "桌子"
     },
     {
      "en": "bathroom",
      "ph": "[ˈbɑːθruːm]",
      "zh": "卫生间"
     },
     {
      "en": "How are you?",
      "ph": "/hˈaʊ ˈɑr jˈu/",
      "zh": "你好吗?"
     },
     {
      "en": "hungry",
      "ph": "['hʌŋgri]",
      "zh": "饿的；饥饿的"
     },
     {
      "en": "What would you like?",
      "ph": "/wˈʌt wˈʊd jˈu lˈaɪk/",
      "zh": "你想要什么?"
     },
     {
      "en": "I'd like...",
      "ph": "/ˈɪd lˈaɪk/",
      "zh": "我想要……"
     }
    ]
   },
   {
    "id": "四上-u6",
    "title": "Unit 6",
    "topic": "四上 · 第6单元",
    "text": "",
    "words": [
     {
      "en": "at",
      "ph": "[æt]",
      "zh": "在（某处）"
     },
     {
      "en": "snack bar",
      "ph": "/snˈæk bˈɑr/",
      "zh": "快餐店；小吃店"
     },
     {
      "en": "hamburger",
      "ph": "['hæmbɜːgə]",
      "zh": "汉堡包"
     },
     {
      "en": "a glass of",
      "ph": "/ə ɡlˈæs ˈʌv/",
      "zh": "一杯"
     },
     {
      "en": "noodles",
      "ph": "/nˈudəlz/",
      "zh": "面条"
     },
     {
      "en": "dad",
      "ph": "[dæd]",
      "zh": "爸爸"
     },
     {
      "en": "sandwich",
      "ph": "['sændwɪtʃ]",
      "zh": "三明治"
     },
     {
      "en": "a cup of",
      "ph": "/ə kˈʌp ˈʌv/",
      "zh": "一杯"
     },
     {
      "en": "coffee",
      "ph": "[ˈkɒfi]",
      "zh": "咖啡"
     },
     {
      "en": "Anything else",
      "ph": "/ˈɛniθˌɪŋ ˈɛls/",
      "zh": "还要其他东西吗"
     },
     {
      "en": "tea",
      "ph": "[tiː]",
      "zh": "茶"
     },
     {
      "en": "juice",
      "ph": "[dʒuːs]",
      "zh": "果汁"
     },
     {
      "en": "rice",
      "ph": "[raɪs]",
      "zh": "米饭；大米"
     },
     {
      "en": "Me too",
      "ph": "/mˈi tˈu/",
      "zh": "我也是"
     },
     {
      "en": "fish",
      "ph": "[fɪʃ]",
      "zh": "鱼"
     },
     {
      "en": "Can I help you?",
      "ph": "/kˈæn ˈaɪ hˈɛlp jˈu/",
      "zh": "我能帮助你吗?"
     },
     {
      "en": "big",
      "ph": "[bɪg]",
      "zh": "大的"
     }
    ]
   },
   {
    "id": "四上-u7",
    "title": "Unit 7",
    "topic": "四上 · 第7单元",
    "text": "",
    "words": [
     {
      "en": "how much",
      "ph": "/hˈaʊ mˈʌtʃ/",
      "zh": "多少钱"
     },
     {
      "en": "shoe",
      "ph": "[ʃuː]",
      "zh": "鞋子"
     },
     {
      "en": "yuan",
      "ph": "/juˈɑn/",
      "zh": "元（人民币）"
     },
     {
      "en": "sock",
      "ph": "[sɒk]",
      "zh": "袜子"
     },
     {
      "en": "umbrella",
      "ph": "[ʌm'brelə]",
      "zh": "伞"
     },
     {
      "en": "only",
      "ph": "['əʊnli]",
      "zh": "只有；仅仅"
     },
     {
      "en": "twenty-eight",
      "ph": "/twˈɛnti ˈeɪt/",
      "zh": "二十八"
     },
     {
      "en": "Well done.",
      "ph": "/wˈɛl dˈʌn/",
      "zh": "好样的。干得好"
     },
     {
      "en": "fan",
      "ph": "[fæn]",
      "zh": "扇子"
     },
     {
      "en": "twenty",
      "ph": "[ˈtwenti]",
      "zh": "二十"
     },
     {
      "en": "thirty",
      "ph": "['θɜːti]",
      "zh": "三十"
     },
     {
      "en": "forty",
      "ph": "[ˈfɔːti]",
      "zh": "四十"
     },
     {
      "en": "fifty",
      "ph": "['fɪfti]",
      "zh": "五十"
     },
     {
      "en": "forty-five",
      "ph": "/fˈɔrti fˈaɪv/",
      "zh": "四十五"
     },
     {
      "en": "her",
      "ph": "[hɜː]",
      "zh": "她的"
     },
     {
      "en": "tail",
      "ph": "[teɪl]",
      "zh": "尾巴"
     },
     {
      "en": "long",
      "ph": "[lɒŋ]",
      "zh": "长的"
     }
    ]
   },
   {
    "id": "四上-u8",
    "title": "Unit 8",
    "topic": "四上 · 第8单元",
    "text": "",
    "words": [
     {
      "en": "hair",
      "ph": "[heə]",
      "zh": "头发"
     },
     {
      "en": "eye",
      "ph": "[aɪ]",
      "zh": "眼睛"
     },
     {
      "en": "nose",
      "ph": "[nəʊz]",
      "zh": "鼻子"
     },
     {
      "en": "mouth",
      "ph": "[maʊθ]",
      "zh": "嘴巴"
     },
     {
      "en": "small",
      "ph": "[smɔːl]",
      "zh": "小的"
     },
     {
      "en": "his",
      "ph": "[hɪz]",
      "zh": "他的"
     },
     {
      "en": "short",
      "ph": "[ʃɔːt]",
      "zh": "短的；矮的"
     },
     {
      "en": "ear",
      "ph": "[ɪə]",
      "zh": "耳朵"
     },
     {
      "en": "king",
      "ph": "[kɪŋ]",
      "zh": "国王"
     },
     {
      "en": "thin",
      "ph": "[θɪn]",
      "zh": "瘦的"
     },
     {
      "en": "tall",
      "ph": "[tɔːl]",
      "zh": "高的"
     },
     {
      "en": "snowman",
      "ph": "['snəʊˌmæn]",
      "zh": "雪人"
     }
    ]
   }
  ]
 },
 "四下": {
  "grade": "四年级",
  "volume": "下册",
  "label": "四年级·下册",
  "units": [
   {
    "id": "四下-u1",
    "title": "Unit 1",
    "topic": "四下 · 第1单元",
    "text": "",
    "words": [
     {
      "en": "school",
      "ph": "[skuːl]",
      "zh": "学校"
     },
     {
      "en": "subject",
      "ph": "['sʌbdʒɪkt]",
      "zh": "课程"
     },
     {
      "en": "Welcome back to ...",
      "ph": "/wˈɛlkəm bˈæk tˈu/",
      "zh": "欢迎回到……"
     },
     {
      "en": "see",
      "ph": "[siː]",
      "zh": "看见，看到"
     },
     {
      "en": "timetable",
      "ph": "[ˈtaɪmteɪb(ə)l]",
      "zh": "课程表；时间表"
     },
     {
      "en": "Chinese",
      "ph": "['tʃaɪ'niːz]",
      "zh": "语文（课）"
     },
     {
      "en": "maths",
      "ph": "[mæθs]",
      "zh": "数学（课）"
     },
     {
      "en": "art",
      "ph": "[ɑːt]",
      "zh": "美术（课）"
     },
     {
      "en": "PE",
      "ph": "/ˌpiː ˈiː/",
      "zh": "体育（课）"
     },
     {
      "en": "music",
      "ph": "['mjuːzɪk]",
      "zh": "音乐（课）"
     },
     {
      "en": "science",
      "ph": "['saɪəns]",
      "zh": "科学（课）"
     },
     {
      "en": "fun",
      "ph": "[fʌn]",
      "zh": "乐趣，快乐"
     },
     {
      "en": "go to",
      "ph": "/ɡˈoʊ tˈu/",
      "zh": "去……"
     },
     {
      "en": "playground",
      "ph": "['pleɪgraʊnd]",
      "zh": "操场"
     },
     {
      "en": "lesson",
      "ph": "['lesn]",
      "zh": "课"
     },
     {
      "en": "Monday",
      "ph": "['mʌndeɪ]",
      "zh": "星期一"
     },
     {
      "en": "afternoon",
      "ph": "['ɑːftə'nuːn]",
      "zh": "下午"
     }
    ]
   },
   {
    "id": "四下-u2",
    "title": "Unit 2",
    "topic": "四下 · 第2单元",
    "text": "",
    "words": [
     {
      "en": "after school",
      "ph": "/ˈæftɚ skˈul/",
      "zh": "放学后"
     },
     {
      "en": "go",
      "ph": "[gəʊ]",
      "zh": "去"
     },
     {
      "en": "What day is it today?",
      "ph": "/wˈʌt dˈeɪ ˈɪz ˈɪt tədˈeɪ/",
      "zh": "今天星期几？"
     },
     {
      "en": "Wednesday",
      "ph": "['wenzdi]",
      "zh": "星期三"
     },
     {
      "en": "match",
      "ph": "[mætʃ]",
      "zh": "比赛"
     },
     {
      "en": "today",
      "ph": "[tə'deɪ]",
      "zh": "今天"
     },
     {
      "en": "What a pity!",
      "ph": "/wˈʌt ə pˈɪti/",
      "zh": "真遗憾"
     },
     {
      "en": "Saturday",
      "ph": "['sætədi]",
      "zh": "星期六"
     },
     {
      "en": "All right.",
      "ph": "/ˈɔl rˈaɪt/",
      "zh": "好的。"
     },
     {
      "en": "Sunday",
      "ph": "['sʌndi]",
      "zh": "星期日"
     },
     {
      "en": "Tuesday",
      "ph": "['tjuːzdi]",
      "zh": "星期二"
     },
     {
      "en": "Thursday",
      "ph": "['θɜːzdi]",
      "zh": "星期四"
     },
     {
      "en": "Friday",
      "ph": "['fraɪdi]",
      "zh": "星期五"
     },
     {
      "en": "get up",
      "ph": "['getʌp]",
      "zh": "起床"
     },
     {
      "en": "when",
      "ph": "[hwen]",
      "zh": "什么时候"
     },
     {
      "en": "every",
      "ph": "['evri]",
      "zh": "每个"
     },
     {
      "en": "day",
      "ph": "[deɪ]",
      "zh": "天"
     }
    ]
   },
   {
    "id": "四下-u3",
    "title": "Unit 3",
    "topic": "四下 · 第3单元",
    "text": "",
    "words": [
     {
      "en": "usually",
      "ph": "['juːʒʊəli]",
      "zh": "通常，常常"
     },
     {
      "en": "go to school",
      "ph": "/ɡˈoʊ tˈu skˈul/",
      "zh": "上学"
     },
     {
      "en": "in the morning",
      "ph": "/ɪn ðə mˈɔrnɪŋ/",
      "zh": "在上午"
     },
     {
      "en": "have lunch",
      "ph": "/hˈæv lˈʌntʃ/",
      "zh": "吃午饭"
     },
     {
      "en": "in the afternoon",
      "ph": "/ɪn ðə ˌæftɚnˈun/",
      "zh": "在下午"
     },
     {
      "en": "play football",
      "ph": "/plˈeɪ fˈʊtbˌɔl/",
      "zh": "踢足球"
     },
     {
      "en": "go home",
      "ph": "/ɡˈoʊ hˈoʊm/",
      "zh": "回家"
     },
     {
      "en": "homework",
      "ph": "['həʊmwɜːk]",
      "zh": "家庭作业"
     },
     {
      "en": "have dinner",
      "ph": "/hˈæv dˈɪnɚ/",
      "zh": "吃晚饭"
     },
     {
      "en": "watch TV",
      "ph": "/wˈɑtʃ tˈivˈi/",
      "zh": "看电视"
     },
     {
      "en": "go to bed",
      "ph": "/ɡˈoʊ tˈu bˈɛd/",
      "zh": "睡觉"
     },
     {
      "en": "in the evening",
      "ph": "/ɪn ðə ˈivnɪŋ/",
      "zh": "在晚上"
     },
     {
      "en": "at night",
      "ph": "/ˈæt nˈaɪt/",
      "zh": "在夜里"
     }
    ]
   },
   {
    "id": "四下-u4",
    "title": "Unit 4",
    "topic": "四下 · 第4单元",
    "text": "",
    "words": [
     {
      "en": "drawing",
      "ph": "[ˈdrɔːɪŋ]",
      "zh": "画画"
     },
     {
      "en": "park",
      "ph": "[pɑːk]",
      "zh": "公园"
     },
     {
      "en": "draw",
      "ph": "[drɔː]",
      "zh": "画"
     },
     {
      "en": "Good ideal!",
      "ph": "/ɡˈʊd aɪdˈil/",
      "zh": "好主意！"
     },
     {
      "en": "flower",
      "ph": "['flaʊə]",
      "zh": "花，花朵"
     },
     {
      "en": "them",
      "ph": "[ðem]",
      "zh": "他们；她们；它们"
     },
     {
      "en": "easy",
      "ph": "['iːzi]",
      "zh": "容易的，简单的"
     },
     {
      "en": "boat",
      "ph": "[bəʊt]",
      "zh": "小船"
     },
     {
      "en": "river",
      "ph": "['rɪvə]",
      "zh": "河；江"
     },
     {
      "en": "difficult",
      "ph": "['dɪfɪkəlt]",
      "zh": "难的，困难的"
     },
     {
      "en": "try",
      "ph": "[traɪ]",
      "zh": "试"
     },
     {
      "en": "hill",
      "ph": "[hɪl]",
      "zh": "小山，山丘"
     },
     {
      "en": "lake",
      "ph": "[leɪk]",
      "zh": "湖，湖泊"
     },
     {
      "en": "again",
      "ph": "[ə'gen]",
      "zh": "再一次，又一次"
     }
    ]
   },
   {
    "id": "四下-u5",
    "title": "Unit 5",
    "topic": "四下 · 第5单元",
    "text": "",
    "words": [
     {
      "en": "season",
      "ph": "['siːzn]",
      "zh": "季节"
     },
     {
      "en": "spring",
      "ph": "[sprɪŋ]",
      "zh": "春天，春季"
     },
     {
      "en": "warm",
      "ph": "[wɔːm]",
      "zh": "温暖的，温和的"
     },
     {
      "en": "fly",
      "ph": "[flaɪ]",
      "zh": "放（风筝、飞机模型等）"
     },
     {
      "en": "kite",
      "ph": "[kaɪt]",
      "zh": "风筝"
     },
     {
      "en": "go boating",
      "ph": "/ɡˈoʊ bˈoʊtɪŋ/",
      "zh": "去划船"
     },
     {
      "en": "summer",
      "ph": "['sʌmə]",
      "zh": "夏天，夏季"
     },
     {
      "en": "hot",
      "ph": "[hɒt]",
      "zh": "热的，炎热的"
     },
     {
      "en": "go swimming",
      "ph": "/ɡˈoʊ swˈɪmɪŋ/",
      "zh": "去游泳"
     },
     {
      "en": "autumn",
      "ph": "['ɔːtəm]",
      "zh": "秋天，秋季"
     },
     {
      "en": "cool",
      "ph": "[kuːl]",
      "zh": "凉爽的，凉快的"
     },
     {
      "en": "picnic",
      "ph": "['pɪknɪk]",
      "zh": "野餐"
     },
     {
      "en": "go climbing",
      "ph": "/ɡˈoʊ klˈaɪmɪŋ/",
      "zh": "去爬山"
     },
     {
      "en": "winter",
      "ph": "['wɪntə]",
      "zh": "冬天，冬季"
     },
     {
      "en": "cold",
      "ph": "[kəʊld]",
      "zh": "冷的，寒冷的"
     },
     {
      "en": "go skating",
      "ph": "/ɡˈoʊ skˈeɪtɪŋ/",
      "zh": "去溜冰；去滑冰"
     },
     {
      "en": "fine",
      "ph": "[faɪn]",
      "zh": "晴朗的"
     },
     {
      "en": "hey",
      "ph": "[heɪ]",
      "zh": "嘿，喂"
     },
     {
      "en": "whose",
      "ph": "[huːz]",
      "zh": "谁的"
     }
    ]
   },
   {
    "id": "四下-u6",
    "title": "Unit 6",
    "topic": "四下 · 第6单元",
    "text": "",
    "words": [
     {
      "en": "dress",
      "ph": "[dres]",
      "zh": "连衣裙"
     },
     {
      "en": "too",
      "ph": "[tuː]",
      "zh": "太，过于"
     },
     {
      "en": "trousers",
      "ph": "['traʊzəz]",
      "zh": "裤子"
     },
     {
      "en": "party",
      "ph": "['pɑːti]",
      "zh": "聚会，派对"
     },
     {
      "en": "glove",
      "ph": "[glʌv]",
      "zh": "手套"
     },
     {
      "en": "so",
      "ph": "[səʊ]",
      "zh": "如此，这么"
     },
     {
      "en": "coat",
      "ph": "[kəʊt]",
      "zh": "外衣，外套"
     },
     {
      "en": "shirt",
      "ph": "[ʃɜːt]",
      "zh": "（男式）衬衫"
     },
     {
      "en": "sweater",
      "ph": "['swetə]",
      "zh": "毛衣；绒衣"
     },
     {
      "en": "jeans",
      "ph": "[dʒiːns]",
      "zh": "牛仔裤"
     },
     {
      "en": "shorts",
      "ph": "[ʃɔːts]",
      "zh": "短裤"
     },
     {
      "en": "wrong",
      "ph": "[rɔːŋ]",
      "zh": "错的，错误的"
     },
     {
      "en": "move",
      "ph": "[muːv]",
      "zh": "移动"
     },
     {
      "en": "I thingk so.",
      "ph": "/ˈaɪ θɪŋk sˈoʊ/",
      "zh": "我想是。"
     },
     {
      "en": "What's the matter?",
      "ph": "/wəts ðə mˈætɚ/",
      "zh": "怎么了？"
     },
     {
      "en": "hand",
      "ph": "[hænd]",
      "zh": "手"
     },
     {
      "en": "hurt",
      "ph": "[hɜːt]",
      "zh": "感到疼痛"
     }
    ]
   },
   {
    "id": "四下-u7",
    "title": "Unit 7",
    "topic": "四下 · 第7单元",
    "text": "",
    "words": [
     {
      "en": "thirsty",
      "ph": "['θɜːsti]",
      "zh": "渴的，口渴的"
     },
     {
      "en": "water",
      "ph": "['wɔːtə]",
      "zh": "水"
     },
     {
      "en": "ill",
      "ph": "[ɪl]",
      "zh": "生病的"
     },
     {
      "en": "tired",
      "ph": "['taɪəd]",
      "zh": "累的，疲劳的"
     },
     {
      "en": "Good night.",
      "ph": "/ɡˈʊd nˈaɪt/",
      "zh": "晚安。"
     },
     {
      "en": "dear",
      "ph": "[dɪə]",
      "zh": "亲爱的"
     },
     {
      "en": "happy",
      "ph": "['hæpi]",
      "zh": "快乐的，高兴的"
     },
     {
      "en": "Mrs",
      "ph": "['mɪsɪz]",
      "zh": "夫人，太太"
     },
     {
      "en": "speak",
      "ph": "[spiːk]",
      "zh": "说话，讲话"
     }
    ]
   },
   {
    "id": "四下-u8",
    "title": "Unit 8",
    "topic": "四下 · 第8单元",
    "text": "",
    "words": [
     {
      "en": "may",
      "ph": "[meɪ]",
      "zh": "可以"
     },
     {
      "en": "come to school",
      "ph": "/kˈʌm tˈu skˈul/",
      "zh": "来学校"
     },
     {
      "en": "cold",
      "ph": "[kəʊld]",
      "zh": "感冒"
     },
     {
      "en": "fever",
      "ph": "[ˈfiːvə]",
      "zh": "发烧"
     },
     {
      "en": "hear",
      "ph": "[hɪə]",
      "zh": "听到，听见"
     },
     {
      "en": "take care",
      "ph": "/tˈeɪk kˈɛr/",
      "zh": "保重"
     },
     {
      "en": "I'm fine,thank you.",
      "ph": "/ˈɪm fˈaɪn θˈæŋk jˈu/",
      "zh": "我很好，谢谢。"
     },
     {
      "en": "See you tomorrow.",
      "ph": "/sˈi jˈu təmˈɑrˌoʊ/",
      "zh": "明天见。"
     },
     {
      "en": "See you.",
      "ph": "/sˈi jˈu/",
      "zh": "再见。"
     },
     {
      "en": "cough",
      "ph": "[kɒf]",
      "zh": "咳嗽"
     },
     {
      "en": "headache",
      "ph": "['hedeɪk]",
      "zh": "头疼，头痛"
     },
     {
      "en": "Not so good.",
      "ph": "/nˈɑt sˈoʊ ɡˈʊd/",
      "zh": "不太好。"
     },
     {
      "en": "at school",
      "ph": "/ˈæt skˈul/",
      "zh": "在上学；在学校"
     }
    ]
   }
  ]
 },
 "五上": {
  "grade": "五年级",
  "volume": "上册",
  "label": "五年级·上册",
  "units": [
   {
    "id": "五上-u1",
    "title": "Unit 1",
    "topic": "五上 · 第1单元",
    "text": "",
    "words": [
     {
      "en": "bear",
      "ph": "[beə]",
      "zh": "熊"
     },
     {
      "en": "forest",
      "ph": "[ˈfɒrɪst]",
      "zh": "森林"
     },
     {
      "en": "there",
      "ph": "[ðeə]",
      "zh": "（与be连用）有"
     },
     {
      "en": "house",
      "ph": "[haʊs]",
      "zh": "房子"
     },
     {
      "en": "soup",
      "ph": "[suːp]",
      "zh": "汤"
     },
     {
      "en": "just right",
      "ph": "/dʒˈʌst rˈaɪt/",
      "zh": "正合适，正好"
     },
     {
      "en": "room",
      "ph": "[ruːm]",
      "zh": "房间"
     },
     {
      "en": "hard",
      "ph": "[hɑːd]",
      "zh": "硬的"
     },
     {
      "en": "soft",
      "ph": "[/sɒft ]",
      "zh": "柔软的"
     },
     {
      "en": "afraid",
      "ph": "[ə'freɪd]",
      "zh": "害怕的"
     },
     {
      "en": "in front of",
      "ph": "/ɪn frˈʌnt ˈʌv/",
      "zh": "在...前面"
     },
     {
      "en": "her",
      "ph": "[hɜː]",
      "zh": "她"
     },
     {
      "en": "Help!",
      "ph": "/hˈɛlp/",
      "zh": "救命啊！"
     },
     {
      "en": "beside",
      "ph": "[bɪ'saɪd]",
      "zh": "在...旁边"
     },
     {
      "en": "between",
      "ph": "[bɪ'twiːn]",
      "zh": "在...中间"
     },
     {
      "en": "really",
      "ph": "['rɪəli]",
      "zh": "真的"
     },
     {
      "en": "then",
      "ph": "[ðen]",
      "zh": "然后"
     },
     {
      "en": "find",
      "ph": "[faɪnd]",
      "zh": "找到，发现"
     },
     {
      "en": "their",
      "ph": "[ðeə]",
      "zh": "他们的；她们的；它们的"
     }
    ]
   },
   {
    "id": "五上-u2",
    "title": "Unit 2",
    "topic": "五上 · 第2单元",
    "text": "",
    "words": [
     {
      "en": "student",
      "ph": "['stjuːdənt]",
      "zh": "学生"
     },
     {
      "en": "show ... around",
      "ph": "/ʃˈoʊ ɚˈaʊnd/",
      "zh": "带...参观"
     },
     {
      "en": "classroom",
      "ph": "['klɑːsrʊm]",
      "zh": "教室"
     },
     {
      "en": "second",
      "ph": "['sekənd]",
      "zh": "第二"
     },
     {
      "en": "floor",
      "ph": "[flɔː]",
      "zh": "楼层"
     },
     {
      "en": "computer",
      "ph": "[kəm'pjuːtə]",
      "zh": "电脑"
     },
     {
      "en": "third",
      "ph": "[θɜːd]",
      "zh": "第三"
     },
     {
      "en": "first",
      "ph": "[fɜːst]",
      "zh": "第一；首先"
     },
     {
      "en": "swing",
      "ph": "[swɪŋ]",
      "zh": "秋千"
     },
     {
      "en": "push",
      "ph": "[pʊʃ]",
      "zh": "推"
     },
     {
      "en": "heavy",
      "ph": "['hevi]",
      "zh": "重的，沉的"
     },
     {
      "en": "stop",
      "ph": "[stɒp]",
      "zh": "停下，停止"
     },
     {
      "en": "high",
      "ph": "[haɪ]",
      "zh": "高的"
     },
     {
      "en": "great",
      "ph": "[greɪt]",
      "zh": "很多的，极大的"
     }
    ]
   },
   {
    "id": "五上-u3",
    "title": "Unit 3",
    "topic": "五上 · 第3单元",
    "text": "",
    "words": [
     {
      "en": "one ... ,the other ...",
      "ph": "/wˈʌn ðə ˈʌðɚ/",
      "zh": "一个......，另一个......"
     },
     {
      "en": "body",
      "ph": "[ˈbɒdi]",
      "zh": "身体"
     },
     {
      "en": "no",
      "ph": "[nəʊ]",
      "zh": "没有，无"
     },
     {
      "en": "leg",
      "ph": "[leg]",
      "zh": "腿"
     },
     {
      "en": "or",
      "ph": "[ɔː]",
      "zh": "也不，也没有"
     },
     {
      "en": "arm",
      "ph": "[ɑːm]",
      "zh": "手臂"
     },
     {
      "en": "wing",
      "ph": "[wɪŋ]",
      "zh": "翅膀"
     },
     {
      "en": "foot",
      "ph": "[fʊt]",
      "zh": "脚，足"
     },
     {
      "en": "rabbit",
      "ph": "['ræbɪt]",
      "zh": "兔子"
     },
     {
      "en": "give",
      "ph": "[gɪv]",
      "zh": "给"
     },
     {
      "en": "finger",
      "ph": "['fɪŋgə]",
      "zh": "手指"
     }
    ]
   },
   {
    "id": "五上-u4",
    "title": "Unit 4",
    "topic": "五上 · 第4单元",
    "text": "",
    "words": [
     {
      "en": "hobby",
      "ph": "[ˈhɒbi]",
      "zh": "业余爱好"
     },
     {
      "en": "be good at",
      "ph": "/bˈi ɡˈʊd ˈæt/",
      "zh": "擅长于"
     },
     {
      "en": "with",
      "ph": "[wɪð]",
      "zh": "与......一起"
     },
     {
      "en": "also",
      "ph": "['ɔːlsəʊ]",
      "zh": "也"
     },
     {
      "en": "read",
      "ph": "[riːd]",
      "zh": "读，阅读"
     },
     {
      "en": "story",
      "ph": "['stɔːri]",
      "zh": "故事"
     },
     {
      "en": "a lot of",
      "ph": "/ə lˈɑt ˈʌv/",
      "zh": "很多"
     },
     {
      "en": "play the piano",
      "ph": "/plˈeɪ ðə piˈænoʊ/",
      "zh": "弹钢琴"
     },
     {
      "en": "dance",
      "ph": "[dɑːns]",
      "zh": "跳舞"
     },
     {
      "en": "watch films",
      "ph": "/wˈɑtʃ fˈɪlmz/",
      "zh": "看电影"
     },
     {
      "en": "both",
      "ph": "[bəʊθ]",
      "zh": "两个都"
     },
     {
      "en": "sing",
      "ph": "[sɪŋ]",
      "zh": "唱歌"
     },
     {
      "en": "group",
      "ph": "[gruːp]",
      "zh": "组"
     },
     {
      "en": "about",
      "ph": "[ə'baʊt]",
      "zh": "关于"
     },
     {
      "en": "idea",
      "ph": "[aɪ'dɪə]",
      "zh": "主意"
     },
     {
      "en": "ice",
      "ph": "[aɪs]",
      "zh": "冰"
     },
     {
      "en": "hole",
      "ph": "[həʊl]",
      "zh": "洞"
     },
     {
      "en": "Look out!",
      "ph": "/lˈʊk ˈaʊt/",
      "zh": "当心！注意！"
     },
     {
      "en": "wet",
      "ph": "[wet]",
      "zh": "湿的，潮的"
     }
    ]
   },
   {
    "id": "五上-u5",
    "title": "Unit 5",
    "topic": "五上 · 第5单元",
    "text": "",
    "words": [
     {
      "en": "teacher",
      "ph": "['tiːtʃə]",
      "zh": "老师"
     },
     {
      "en": "teach",
      "ph": "[tiːtʃ]",
      "zh": "教"
     },
     {
      "en": "writer",
      "ph": "['raɪtə]",
      "zh": "作家"
     },
     {
      "en": "write",
      "ph": "[raɪt]",
      "zh": "写"
     },
     {
      "en": "work",
      "ph": "[wɜːk]",
      "zh": "工作"
     },
     {
      "en": "at home",
      "ph": "/ˈæt hˈoʊm/",
      "zh": "在家"
     },
     {
      "en": "doctor",
      "ph": "[ˈdɒktə]",
      "zh": "医生"
     },
     {
      "en": "help",
      "ph": "[help]",
      "zh": "帮助"
     },
     {
      "en": "sick",
      "ph": "[sɪk]",
      "zh": "生病的"
     },
     {
      "en": "people",
      "ph": "['piːpl]",
      "zh": "人；人们"
     },
     {
      "en": "factory",
      "ph": "['fæktəri]",
      "zh": "工厂"
     },
     {
      "en": "worker",
      "ph": "['wɜːkə]",
      "zh": "工人"
     },
     {
      "en": "cook",
      "ph": "[kʊk]",
      "zh": "厨师"
     },
     {
      "en": "driver",
      "ph": "['draɪvə]",
      "zh": "驾驶员，司机"
     },
     {
      "en": "farmer",
      "ph": "['fɑːmə]",
      "zh": "农民"
     },
     {
      "en": "nurse",
      "ph": "[nɜːs]",
      "zh": "护士"
     },
     {
      "en": "policeman",
      "ph": "[pə'liːsmən]",
      "zh": "警察"
     }
    ]
   },
   {
    "id": "五上-u6",
    "title": "Unit 6",
    "topic": "五上 · 第6单元",
    "text": "",
    "words": [
     {
      "en": "e-friend",
      "ph": "/ˈi frˈɛnd/",
      "zh": "网友"
     },
     {
      "en": "Wait a minute.",
      "ph": "/wˈeɪt ə mˈɪnət/",
      "zh": "等一会儿"
     },
     {
      "en": "send",
      "ph": "[send]",
      "zh": "发出（信件、邮件等）"
     },
     {
      "en": "to",
      "ph": "[tuː]",
      "zh": "给"
     },
     {
      "en": "live",
      "ph": "[lɪv]",
      "zh": "住，居住"
     },
     {
      "en": "UK",
      "ph": "[juːˈkeɪ]",
      "zh": "英国"
     },
     {
      "en": "... years old",
      "ph": "/jˈɪrz ˈoʊld/",
      "zh": "……岁"
     },
     {
      "en": "Australia",
      "ph": "[ɔːs'treɪlɪə]",
      "zh": "澳大利亚"
     },
     {
      "en": "Canada",
      "ph": "['kænədə]",
      "zh": "加拿大"
     },
     {
      "en": "China",
      "ph": "['tʃaɪnə]",
      "zh": "中国"
     },
     {
      "en": "US",
      "ph": "[ʌs]",
      "zh": "美国"
     },
     {
      "en": "go fishing",
      "ph": "/ɡˈoʊ fˈɪʃɪŋ/",
      "zh": "去钓鱼"
     },
     {
      "en": "tomorrow",
      "ph": "[tə'mɔːrəʊ]",
      "zh": "明天"
     },
     {
      "en": "fishing",
      "ph": "['fɪʃɪŋ]",
      "zh": "钓鱼，捕鱼"
     },
     {
      "en": "Don't worry",
      "ph": "/doʊnt wˈɝi/",
      "zh": "别担心"
     },
     {
      "en": "sit",
      "ph": "[sɪt]",
      "zh": "坐，坐在"
     },
     {
      "en": "by ...",
      "ph": "/bˈaɪ/",
      "zh": "在……旁边"
     },
     {
      "en": "wait",
      "ph": "[weɪt]",
      "zh": "等，等待"
     }
    ]
   },
   {
    "id": "五上-u7",
    "title": "Unit 7",
    "topic": "五上 · 第7单元",
    "text": "",
    "words": [
     {
      "en": "at weekends",
      "ph": "/ˈæt wˈikˌɛndz/",
      "zh": "在周末"
     },
     {
      "en": "visit",
      "ph": "['vɪzɪt]",
      "zh": "拜访；参观"
     },
     {
      "en": "grandparent",
      "ph": "[/ˈɡrændˌpeərənt]",
      "zh": "祖父;祖母;外祖父;外祖母"
     },
     {
      "en": "play with",
      "ph": "/plˈeɪ wˈɪð/",
      "zh": "和......一起玩"
     },
     {
      "en": "very much",
      "ph": "/vˈɛri mˈʌtʃ/",
      "zh": "非常"
     },
     {
      "en": "often",
      "ph": "['ɔːfən]",
      "zh": "经常，常常"
     },
     {
      "en": "chat",
      "ph": "[tʃæt]",
      "zh": "聊天"
     },
     {
      "en": "Internet",
      "ph": "['ɪntəˌnet]",
      "zh": "网络；互联网"
     },
     {
      "en": "always",
      "ph": "['ɔːlweɪz]",
      "zh": "总是；一直"
     },
     {
      "en": "sometimes",
      "ph": "['sʌmtaɪmz]",
      "zh": "有时"
     },
     {
      "en": "go to the cinema",
      "ph": "/ɡˈoʊ tˈu ðə sˈɪnəmə/",
      "zh": "去看电影"
     },
     {
      "en": "there",
      "ph": "[ðeə]",
      "zh": "那里"
     },
     {
      "en": "a lot",
      "ph": "/ə lˈɑt/",
      "zh": "很多"
     },
     {
      "en": "come out",
      "ph": "['kʌmaʊt]",
      "zh": "出来"
     },
     {
      "en": "get out",
      "ph": "/ɡˈɛt ˈaʊt/",
      "zh": "出来"
     }
    ]
   },
   {
    "id": "五上-u8",
    "title": "Unit 8",
    "topic": "五上 · 第8单元",
    "text": "",
    "words": [
     {
      "en": "Christmas",
      "ph": "['krɪsməs]",
      "zh": "圣诞节"
     },
     {
      "en": "buy",
      "ph": "[baɪ]",
      "zh": "买"
     },
     {
      "en": "present",
      "ph": "['preznt]",
      "zh": "礼物"
     },
     {
      "en": "Christmas tree",
      "ph": "/krˈɪsməs trˈi/",
      "zh": "圣诞树"
     },
     {
      "en": "Father Christmas",
      "ph": "/fˈɑðɚ krˈɪsməs/",
      "zh": "圣诞老人"
     },
     {
      "en": "next",
      "ph": "['nekst]",
      "zh": "接着，然后"
     },
     {
      "en": "put",
      "ph": "[pʊt]",
      "zh": "放"
     },
     {
      "en": "pretty",
      "ph": "['prɪti]",
      "zh": "漂亮的，好看的"
     },
     {
      "en": "thing",
      "ph": "[θɪŋ]",
      "zh": "物品，东西"
     },
     {
      "en": "look",
      "ph": "[lʊk]",
      "zh": "看起来"
     },
     {
      "en": "Christmas Eve",
      "ph": "/krˈɪsməs ˈiv/",
      "zh": "圣诞夜，平安夜"
     },
     {
      "en": "stocking",
      "ph": "[ˈstɒkɪŋ]",
      "zh": "长统袜"
     },
     {
      "en": "wait for",
      "ph": "/wˈeɪt fˈɔr/",
      "zh": "等候，等待"
     },
     {
      "en": "finally",
      "ph": "['faɪnəli]",
      "zh": "最后"
     },
     {
      "en": "Christmas Day",
      "ph": "/krˈɪsməs dˈeɪ/",
      "zh": "圣诞节"
     },
     {
      "en": "early",
      "ph": "['ɜːli]",
      "zh": "早早地"
     },
     {
      "en": "turkey",
      "ph": "['tɜːki]",
      "zh": "火鸡；火鸡肉"
     },
     {
      "en": "pudding",
      "ph": "['pʊdɪŋ]",
      "zh": "布丁"
     },
     {
      "en": "all",
      "ph": "[ɔːl]",
      "zh": "全都"
     },
     {
      "en": "have a good time",
      "ph": "/hˈæv ə ɡˈʊd tˈaɪm/",
      "zh": "过得愉快，玩得高兴"
     },
     {
      "en": "card",
      "ph": "[kɑːd]",
      "zh": "卡片"
     },
     {
      "en": "children",
      "ph": "['tʃɪldrən]",
      "zh": "孩子，儿童"
     },
     {
      "en": "message",
      "ph": "['mesɪdʒ]",
      "zh": "信息；消息"
     },
     {
      "en": "Merry Christmas!",
      "ph": "/mˈɛri krˈɪsməs/",
      "zh": "圣诞快乐！"
     },
     {
      "en": "song",
      "ph": "[sɒŋ]",
      "zh": "歌曲"
     },
     {
      "en": "What's wrong with...?",
      "ph": "/wəts rˈɔŋ wˈɪð/",
      "zh": "……怎么了？"
     },
     {
      "en": "him",
      "ph": "[hɪm]",
      "zh": "他"
     },
     {
      "en": "us",
      "ph": "[ʌs]",
      "zh": "我们"
     },
     {
      "en": "letter",
      "ph": "['letə]",
      "zh": "信"
     },
     {
      "en": "storybook",
      "ph": "/stˈɔribˌʊk/",
      "zh": "故事书"
     },
     {
      "en": "after",
      "ph": "['ɑːftə]",
      "zh": "在…以后"
     }
    ]
   }
  ]
 },
 "五下": {
  "grade": "五年级",
  "volume": "下册",
  "label": "五年级·下册",
  "units": [
   {
    "id": "五下-u1",
    "title": "Unit 1",
    "topic": "五下 · 第1单元",
    "text": "",
    "words": [
     {
      "en": "prince",
      "ph": "/prˈɪns/",
      "zh": "王子"
     },
     {
      "en": "fairy",
      "ph": "/fˈɛri/",
      "zh": "仙女"
     },
     {
      "en": "why",
      "ph": "[hwaɪ]",
      "zh": "为什么"
     },
     {
      "en": "because",
      "ph": "[bɪ'kɔːz]",
      "zh": "因为"
     },
     {
      "en": "clothes",
      "ph": "[kləʊðz]",
      "zh": "衣服"
     },
     {
      "en": "let",
      "ph": "[let]",
      "zh": "让"
     },
     {
      "en": "put on",
      "ph": "/pˈʊt ˈɑn/",
      "zh": "穿上"
     },
     {
      "en": "before",
      "ph": "[bɪ'fɔː]",
      "zh": "在…以前"
     },
     {
      "en": "have to",
      "ph": "/hˈæv tˈu/",
      "zh": "不得不，必须"
     },
     {
      "en": "try on",
      "ph": "[ˈtraɪɒn]",
      "zh": "试穿"
     },
     {
      "en": "fit",
      "ph": "[fɪt]",
      "zh": "合适，合身"
     },
     {
      "en": "take off",
      "ph": "[teɪk//ˈɒf]",
      "zh": "脱下"
     },
     {
      "en": "mushroom",
      "ph": "[ˈmʌʃrʊm]",
      "zh": "蘑菇"
     },
     {
      "en": "late",
      "ph": "[leɪt]",
      "zh": "迟的，晚的"
     },
     {
      "en": "pick",
      "ph": "[pɪk]",
      "zh": "摘，拾"
     },
     {
      "en": "understand",
      "ph": "[ˌʌndə'stænd]",
      "zh": "明白，理解"
     },
     {
      "en": "be bad for",
      "ph": "/bˈi bˈæd fˈɔr/",
      "zh": "有害的"
     },
     {
      "en": "leave ... behind",
      "ph": "/lˈiv bɪhˈaɪnd/",
      "zh": "留下，丢下"
     }
    ]
   },
   {
    "id": "五下-u2",
    "title": "Unit 2",
    "topic": "五下 · 第2单元",
    "text": "",
    "words": [
     {
      "en": "far from",
      "ph": "/fˈɑr frˈʌm/",
      "zh": "离……远"
     },
     {
      "en": "near",
      "ph": "[nɪə]",
      "zh": "在……附近"
     },
     {
      "en": "by ...",
      "ph": "/bˈaɪ/",
      "zh": "乘（汽车、火车等）"
     },
     {
      "en": "bus",
      "ph": "[bʌs]",
      "zh": "公共汽车，大巴士"
     },
     {
      "en": "on foot",
      "ph": "/ˈɑn fˈʊt/",
      "zh": "步行"
     },
     {
      "en": "metro",
      "ph": "/mˈɛtrˌoʊ/",
      "zh": "地铁"
     },
     {
      "en": "taxi",
      "ph": "['tæksi]",
      "zh": "出租车，的士"
     },
     {
      "en": "bike",
      "ph": "[baɪk]",
      "zh": "自行车"
     },
     {
      "en": "plane",
      "ph": "[pleɪn]",
      "zh": "飞机"
     },
     {
      "en": "ship",
      "ph": "[ʃɪp]",
      "zh": "轮船"
     },
     {
      "en": "train",
      "ph": "[treɪn]",
      "zh": "火车"
     },
     {
      "en": "ride",
      "ph": "[raɪd]",
      "zh": "骑车"
     },
     {
      "en": "show",
      "ph": "[ʃəʊ]",
      "zh": "给……看"
     },
     {
      "en": "basket",
      "ph": "['bɑːskɪt]",
      "zh": "篮子"
     },
     {
      "en": "city",
      "ph": "['sɪti]",
      "zh": "城市"
     }
    ]
   },
   {
    "id": "五下-u3",
    "title": "Unit 3",
    "topic": "五下 · 第3单元",
    "text": "",
    "words": [
     {
      "en": "ask the way",
      "ph": "/ˈæsk ðə wˈeɪ/",
      "zh": "问路"
     },
     {
      "en": "get to",
      "ph": "/ɡˈɛt tˈu/",
      "zh": "到达"
     },
     {
      "en": "take",
      "ph": "[teɪk]",
      "zh": "搭乘"
     },
     {
      "en": "get on",
      "ph": "[ˈgetɒn]",
      "zh": "上车"
     },
     {
      "en": "get off",
      "ph": "[ˈgetɒf]",
      "zh": "下车"
     },
     {
      "en": "walk",
      "ph": "[wɔːk]",
      "zh": "走，步行"
     },
     {
      "en": "bookshop",
      "ph": "[ˈbʊkʃɒp]",
      "zh": "书店"
     },
     {
      "en": "street",
      "ph": "[striːt]",
      "zh": "街道"
     },
     {
      "en": "next to",
      "ph": "['neksttə]",
      "zh": "在……旁边"
     },
     {
      "en": "See you later.",
      "ph": "/sˈi jˈu lˈeɪtɚ/",
      "zh": "一会儿见。"
     },
     {
      "en": "ask ... for help",
      "ph": "/ˈæsk fˈɔr hˈɛlp/",
      "zh": "向……求助"
     },
     {
      "en": "excuse me",
      "ph": "/ɪkskjˈus mˈi/",
      "zh": "劳驾；对不起"
     },
     {
      "en": "along",
      "ph": "[əˈlɒŋ]",
      "zh": "沿着，顺着"
     },
     {
      "en": "turn right",
      "ph": "/tˈɝn rˈaɪt/",
      "zh": "向右转"
     },
     {
      "en": "traffic light",
      "ph": "/trˈæfɪk lˈaɪt/",
      "zh": "交通灯"
     },
     {
      "en": "on your right",
      "ph": "/ˈɑn jˈɔr rˈaɪt/",
      "zh": "在你的右侧"
     },
     {
      "en": "cinema",
      "ph": "[ˈsɪnəmə]",
      "zh": "电影院"
     },
     {
      "en": "hospital",
      "ph": "[ˈhɒspɪtl]",
      "zh": "医院"
     },
     {
      "en": "shop",
      "ph": "[ʃɒp]",
      "zh": "商店"
     },
     {
      "en": "zoo",
      "ph": "[zuː]",
      "zh": "动物园"
     },
     {
      "en": "turn left",
      "ph": "/tˈɝn lˈɛft/",
      "zh": "向左转"
     },
     {
      "en": "supermarket",
      "ph": "['sjuːpəˌmɑːkɪt]",
      "zh": "超市"
     },
     {
      "en": "stop",
      "ph": "[stɒp]",
      "zh": "车站"
     },
     {
      "en": "full",
      "ph": "[fʊl]",
      "zh": "满的，饱的"
     },
     {
      "en": "over",
      "ph": "['əʊvə]",
      "zh": "结束了，完了"
     }
    ]
   },
   {
    "id": "五下-u4",
    "title": "Unit 4",
    "topic": "五下 · 第4单元",
    "text": "",
    "words": [
     {
      "en": "see the doctor",
      "ph": "/sˈi ðə dˈɑktɚ/",
      "zh": "看医生，看病"
     },
     {
      "en": "feel",
      "ph": "[fiːl]",
      "zh": "感觉，感到"
     },
     {
      "en": "check",
      "ph": "[tʃek]",
      "zh": "检查"
     },
     {
      "en": "should",
      "ph": "[ʃʊd]",
      "zh": "应该"
     },
     {
      "en": "have a rest",
      "ph": "/hˈæv ə rˈɛst/",
      "zh": "休息"
     },
     {
      "en": "take medicine",
      "ph": "/tˈeɪk mˈɛdəsən/",
      "zh": "吃药"
     },
     {
      "en": "drink water",
      "ph": "/drˈɪŋk wˈɔtɚ/",
      "zh": "喝水"
     },
     {
      "en": "toothache",
      "ph": "[ˈtuːθeɪk]",
      "zh": "牙疼"
     },
     {
      "en": "dentist",
      "ph": "[ˈdentɪst]",
      "zh": "牙医"
     },
     {
      "en": "anything",
      "ph": "['enɪˌθɪŋ]",
      "zh": "任何东西"
     },
     {
      "en": "Brush one's teeth",
      "ph": "/brˈʌʃ wˈʌnz tˈiθ/",
      "zh": "刷牙"
     },
     {
      "en": "bedtime",
      "ph": "/bˈɛdtˌaɪm/",
      "zh": "就寝时间"
     },
     {
      "en": "giraffe",
      "ph": "[dʒɪˈrɑːf]",
      "zh": "长颈鹿"
     },
     {
      "en": "point at",
      "ph": "/pˈɔɪnt ˈæt/",
      "zh": "指着，指向"
     },
     {
      "en": "neck",
      "ph": "[nek]",
      "zh": "脖子"
     }
    ]
   },
   {
    "id": "五下-u5",
    "title": "Unit 5",
    "topic": "五下 · 第5单元",
    "text": "",
    "words": [
     {
      "en": "parent",
      "ph": "['peərənt]",
      "zh": "父或母"
     },
     {
      "en": "clean",
      "ph": "[kliːn]",
      "zh": "擦，洗"
     },
     {
      "en": "cook",
      "ph": "[kʊk]",
      "zh": "烧，煮"
     },
     {
      "en": "sweep the floor",
      "ph": "/swˈip ðə flˈɔr/",
      "zh": "扫地"
     },
     {
      "en": "busy",
      "ph": "['bɪzi]",
      "zh": "忙，忙碌"
     },
     {
      "en": "wash the dishes",
      "ph": "/wˈɑʃ ðə dˈɪʃəz/",
      "zh": "洗碗"
     },
     {
      "en": "make the bed",
      "ph": "/mˈeɪk ðə bˈɛd/",
      "zh": "整理床铺"
     },
     {
      "en": "grow",
      "ph": "[grəʊ]",
      "zh": "种植"
     },
     {
      "en": "garden",
      "ph": "['gɑːdn]",
      "zh": "花园，果园"
     },
     {
      "en": "sweet",
      "ph": "[swiːt]",
      "zh": "甜的"
     },
     {
      "en": "pest",
      "ph": "[pest]",
      "zh": "害虫"
     },
     {
      "en": "ladybird",
      "ph": "/lˈeɪdibˌɝd/",
      "zh": "瓢虫"
     },
     {
      "en": "go away",
      "ph": "/ɡˈoʊ əwˈeɪ/",
      "zh": "走了，走开"
     }
    ]
   },
   {
    "id": "五下-u6",
    "title": "Unit 6",
    "topic": "五下 · 第6单元",
    "text": "",
    "words": [
     {
      "en": "game",
      "ph": "[geɪm]",
      "zh": "运动，比赛"
     },
     {
      "en": "smell",
      "ph": "[smel]",
      "zh": "有……气味，闻起来"
     },
     {
      "en": "meat",
      "ph": "[miːt]",
      "zh": "（猪、牛、羊等的）肉"
     },
     {
      "en": "vegetable",
      "ph": "['vedʒɪtəbl]",
      "zh": "蔬菜"
     },
     {
      "en": "tomato",
      "ph": "[tə'meɪtəʊ]",
      "zh": "西红柿，番茄"
     },
     {
      "en": "potato",
      "ph": "[pə'teɪtəʊ]",
      "zh": "马铃薯，土豆"
     },
     {
      "en": "I can't wait!",
      "ph": "/ˈaɪ kˈænt wˈeɪt/",
      "zh": "我等不及了！"
     },
     {
      "en": "look for",
      "ph": "['lʊkfər]",
      "zh": "找，寻找"
     },
     {
      "en": "ready",
      "ph": "['redi]",
      "zh": "准备好"
     },
     {
      "en": "yummy",
      "ph": "[ˈjʌmi]",
      "zh": "好吃的，美味的"
     },
     {
      "en": "love",
      "ph": "[lʌv]",
      "zh": "喜欢，喜爱"
     },
     {
      "en": "bread",
      "ph": "[bred]",
      "zh": "面包"
     },
     {
      "en": "win",
      "ph": "[wɪn]",
      "zh": "获胜，赢"
     },
     {
      "en": "yeah",
      "ph": "[jeə]",
      "zh": "太好了，太棒了"
     },
     {
      "en": "angry",
      "ph": "['æŋgri]",
      "zh": "生气的，愤怒的"
     },
     {
      "en": "spot",
      "ph": "[spɒt]",
      "zh": "斑，点"
     },
     {
      "en": "catch",
      "ph": "[kætʃ]",
      "zh": "抓，抓住"
     },
     {
      "en": "drive ... away",
      "ph": "/drˈaɪv əwˈeɪ/",
      "zh": "赶走"
     }
    ]
   },
   {
    "id": "五下-u7",
    "title": "Unit 7",
    "topic": "五下 · 第7单元",
    "text": "",
    "words": [
     {
      "en": "festival",
      "ph": "['festəvəl]",
      "zh": "节日"
     },
     {
      "en": "Spring Festival",
      "ph": "/sprˈɪŋ fˈɛstəvəl/",
      "zh": "春节"
     },
     {
      "en": "January",
      "ph": "['dʒænjʊeri]",
      "zh": "一月"
     },
     {
      "en": "February",
      "ph": "['febrʊəri]",
      "zh": "二月"
     },
     {
      "en": "call",
      "ph": "[kɔːl]",
      "zh": "叫作，称作"
     },
     {
      "en": "Chinese New Year",
      "ph": "/tʃaɪnˈiz nˈu jˈɪr/",
      "zh": "中国农历新年"
     },
     {
      "en": "get together",
      "ph": "/ɡˈɛt təɡˈɛðɚ/",
      "zh": "团聚"
     },
     {
      "en": "dumpling",
      "ph": "['dʌmplɪŋ]",
      "zh": "饺子"
     },
     {
      "en": "Dragon Boat Festival",
      "ph": "/drˈæɡən bˈoʊt fˈɛstəvəl/",
      "zh": "端午节"
     },
     {
      "en": "May",
      "ph": "[meɪ]",
      "zh": "五月"
     },
     {
      "en": "June",
      "ph": "[dʒuːn]",
      "zh": "六月"
     },
     {
      "en": "dragon boat race",
      "ph": "/drˈæɡən bˈoʊt rˈeɪs/",
      "zh": "赛龙舟"
     },
     {
      "en": "place",
      "ph": "[pleɪs]",
      "zh": "地方，地点"
     },
     {
      "en": "rice dumpling",
      "ph": "/rˈaɪs dˈʌmplɪŋ/",
      "zh": "粽子"
     },
     {
      "en": "Mid-Autumn Festival",
      "ph": "/mˈɪd ˈɔtəm fˈɛstəvəl/",
      "zh": "中秋节"
     },
     {
      "en": "September",
      "ph": "[sep'tembə]",
      "zh": "九月"
     },
     {
      "en": "October",
      "ph": "[ɒkˈtəʊbə]",
      "zh": "十月"
     },
     {
      "en": "moon",
      "ph": "[muːn]",
      "zh": "月亮"
     },
     {
      "en": "moon cake",
      "ph": "/mˈun kˈeɪk/",
      "zh": "月饼"
     },
     {
      "en": "Double Ninth Festival",
      "ph": "/dˈʌbəl nˈaɪnθ fˈɛstəvəl/",
      "zh": "重阳节"
     },
     {
      "en": "November",
      "ph": "[nəʊ'vembə]",
      "zh": "十一月"
     },
     {
      "en": "old",
      "ph": "[əʊld]",
      "zh": "老的，年纪大的"
     },
     {
      "en": "mountain",
      "ph": "['maʊntɪn]",
      "zh": "山，山脉"
     },
     {
      "en": "rice cake",
      "ph": "/rˈaɪs kˈeɪk/",
      "zh": "重阳糕"
     },
     {
      "en": "Mother's Day",
      "ph": "/mˈʌðɚz dˈeɪ/",
      "zh": "母亲节"
     },
     {
      "en": "Father's Day",
      "ph": "/fˈɑðɚz dˈeɪ/",
      "zh": "父亲节"
     }
    ]
   },
   {
    "id": "五下-u8",
    "title": "Unit 8",
    "topic": "五下 · 第8单元",
    "text": "",
    "words": [
     {
      "en": "birthday",
      "ph": "['bɜːθdeɪ]",
      "zh": "生日"
     },
     {
      "en": "eleventh",
      "ph": "[ɪ'levnθ]",
      "zh": "第十一"
     },
     {
      "en": "together",
      "ph": "[tə'geðə]",
      "zh": "一起"
     },
     {
      "en": "eighth",
      "ph": "[eɪtθ]",
      "zh": "第八"
     },
     {
      "en": "April",
      "ph": "['eɪprəl]",
      "zh": "四月"
     },
     {
      "en": "go shopping",
      "ph": "/ɡˈoʊ ʃˈɑpɪŋ/",
      "zh": "去购物"
     },
     {
      "en": "March",
      "ph": "[mɑːtʃ]",
      "zh": "三月"
     },
     {
      "en": "July",
      "ph": "[dʒuː'laɪ]",
      "zh": "七月"
     },
     {
      "en": "August",
      "ph": "[ɔː'gʌst]",
      "zh": "八月"
     },
     {
      "en": "December",
      "ph": "[dɪ'sembə]",
      "zh": "十二月"
     },
     {
      "en": "hero",
      "ph": "[ˈhɪərəʊ]",
      "zh": "英雄"
     },
     {
      "en": "play",
      "ph": "[pleɪ]",
      "zh": "戏，戏剧"
     },
     {
      "en": "number",
      "ph": "['nʌmbə]",
      "zh": "数字，数"
     },
     {
      "en": "password",
      "ph": "/pˈæswˌɝd/",
      "zh": "密码"
     },
     {
      "en": "answer",
      "ph": "['ɑːnsə]",
      "zh": "答案"
     },
     {
      "en": "fourth",
      "ph": "[ˈfɔːˈtiːn]",
      "zh": "第四"
     },
     {
      "en": "start",
      "ph": "[stɑːt]",
      "zh": "开始"
     },
     {
      "en": "fight",
      "ph": "[faɪt]",
      "zh": "打仗，打架"
     }
    ]
   }
  ]
 },
 "六上": {
  "grade": "六年级",
  "volume": "上册",
  "label": "六年级·上册",
  "units": [
   {
    "id": "六上-u1",
    "title": "Unit 1",
    "topic": "六上 · 第1单元",
    "text": "",
    "words": [
     {
      "en": "long long ago",
      "ph": "/lˈɔŋ lˈɔŋ əɡˈoʊ/",
      "zh": "很久以前"
     },
     {
      "en": "magic",
      "ph": "[ˈmædʒɪk]",
      "zh": "有魔力的，神奇的"
     },
     {
      "en": "clever",
      "ph": "['klevə]",
      "zh": "聪明的"
     },
     {
      "en": "foolish",
      "ph": "[ˈfuːlɪʃ]",
      "zh": "愚蠢的"
     },
     {
      "en": "through",
      "ph": "[θruː]",
      "zh": "穿过"
     },
     {
      "en": "laugh",
      "ph": "[lɑːf]",
      "zh": "笑，大笑"
     },
     {
      "en": "wear",
      "ph": "[weə]",
      "zh": "穿"
     },
     {
      "en": "turn into",
      "ph": "/tˈɝn ˈɪntu/",
      "zh": "变成"
     },
     {
      "en": "sentence",
      "ph": "[ˈsent(ə)ns]",
      "zh": "句子"
     },
     {
      "en": "each",
      "ph": "[iːtʃ]",
      "zh": "每个"
     },
     {
      "en": "quick",
      "ph": "[kwɪk]",
      "zh": "迅速的，快的"
     },
     {
      "en": "think",
      "ph": "[θɪŋk]",
      "zh": "想，思考"
     },
     {
      "en": "another",
      "ph": "[ə'nʌðə]",
      "zh": "又一个"
     },
     {
      "en": "next",
      "ph": "['nekst]",
      "zh": "下一个"
     },
     {
      "en": "turn",
      "ph": "[tɜːn]",
      "zh": "机会"
     },
     {
      "en": "hard",
      "ph": "[hɑːd]",
      "zh": "努力地，费劲地"
     }
    ]
   },
   {
    "id": "六上-u2",
    "title": "Unit 2",
    "topic": "六上 · 第2单元",
    "text": "",
    "words": [
     {
      "en": "sunny",
      "ph": "['sʌni]",
      "zh": "晴朗的"
     },
     {
      "en": "show",
      "ph": "[ʃəʊ]",
      "zh": "展览，展示"
     },
     {
      "en": "interesting",
      "ph": "['ɪntərɪstɪŋ]",
      "zh": "有趣的，有意思的"
     },
     {
      "en": "weather",
      "ph": "['weðə]",
      "zh": "天气"
     },
     {
      "en": "become",
      "ph": "[bɪ'kʌm]",
      "zh": "变成，变为"
     },
     {
      "en": "windy",
      "ph": "['wɪndi]",
      "zh": "有风的"
     },
     {
      "en": "cloudy",
      "ph": "['klaʊdi]",
      "zh": "多云的"
     },
     {
      "en": "high",
      "ph": "[haɪ]",
      "zh": "在高处"
     },
     {
      "en": "honey",
      "ph": "[ˈɒnɪst]",
      "zh": "蜂蜜"
     },
     {
      "en": "drink",
      "ph": "[drɪŋk]",
      "zh": "饮料"
     },
     {
      "en": "ant",
      "ph": "[ænt]",
      "zh": "蚂蚁"
     },
     {
      "en": "bee",
      "ph": "[biː]",
      "zh": "蜜蜂"
     },
     {
      "en": "cloud",
      "ph": "[klaʊd]",
      "zh": "云"
     },
     {
      "en": "rain",
      "ph": "[reɪn]",
      "zh": "下雨"
     },
     {
      "en": "meet",
      "ph": "[miːt]",
      "zh": "遇见"
     },
     {
      "en": "lose",
      "ph": "[luːz]",
      "zh": "丢失"
     },
     {
      "en": "know",
      "ph": "[nəʊ]",
      "zh": "知道"
     },
     {
      "en": "what happened?",
      "ph": "/wˈʌt hˈæpənd/",
      "zh": "出什么事了？"
     },
     {
      "en": "climb up",
      "ph": "/klˈaɪm ˈʌp/",
      "zh": "爬上"
     },
     {
      "en": "hold onto",
      "ph": "/hˈoʊld ˈɑntu/",
      "zh": "抓紧"
     },
     {
      "en": "fly away",
      "ph": "/flˈaɪ əwˈeɪ/",
      "zh": "飞走"
     }
    ]
   },
   {
    "id": "六上-u3",
    "title": "Unit 3",
    "topic": "六上 · 第3单元",
    "text": "",
    "words": [
     {
      "en": "holiday",
      "ph": "[ˈhɒlədi]",
      "zh": "假日，假期"
     },
     {
      "en": "National Day",
      "ph": "[ˈnæʃnəl]",
      "zh": "国庆节"
     },
     {
      "en": "call",
      "ph": "[kɔːl]",
      "zh": "打电话"
     },
     {
      "en": "bund",
      "ph": "[bʊnd]",
      "zh": "（上海）外滩"
     },
     {
      "en": "Shanghai Museum",
      "ph": "/ʃˈæŋhˈaɪ mjuzˈiəm/",
      "zh": "上海博物馆"
     },
     {
      "en": "Great Wall",
      "ph": "/ɡrˈeɪt wˈɔl/",
      "zh": "长城"
     },
     {
      "en": "Palace Museum",
      "ph": "/pˈæləs mjuzˈiəm/",
      "zh": "故宫"
     },
     {
      "en": "Summer Palace",
      "ph": "/sˈʌmɚ pˈæləs/",
      "zh": "颐和园"
     },
     {
      "en": "Tian'anmen Square",
      "ph": "[/skweə]",
      "zh": "天安门广场"
     },
     {
      "en": "fashion show",
      "ph": "/fˈæʃən ʃˈoʊ/",
      "zh": "时装表演，时装秀"
     },
     {
      "en": "bottle",
      "ph": "[ˈbɒtl]",
      "zh": "瓶子"
     },
     {
      "en": "go well",
      "ph": "/ɡˈoʊ wˈɛl/",
      "zh": "进展顺利"
     },
     {
      "en": "at first",
      "ph": "/ˈæt fˈɝst/",
      "zh": "开始，最初"
     },
     {
      "en": "heavy rain",
      "ph": "/hˈɛvi rˈeɪn/",
      "zh": "大雨"
     }
    ]
   },
   {
    "id": "六上-u4",
    "title": "Unit 4",
    "topic": "六上 · 第4单元",
    "text": "",
    "words": [
     {
      "en": "then and now",
      "ph": "/ðˈɛn ənd nˈaʊ/",
      "zh": "过去和现在"
     },
     {
      "en": "ago",
      "ph": "[ə'gəʊ]",
      "zh": "…以前"
     },
     {
      "en": "telephone",
      "ph": "[fəʊn]",
      "zh": "电话"
     },
     {
      "en": "office",
      "ph": "['ɔːfɪs]",
      "zh": "办公室"
     },
     {
      "en": "mobile phone",
      "ph": "/mˈoʊbəl fˈoʊn/",
      "zh": "移动电话"
     },
     {
      "en": "any where",
      "ph": "/ˈɛni wˈɛr/",
      "zh": "随处，到处"
     },
     {
      "en": "radio",
      "ph": "['reɪdɪəʊ]",
      "zh": "收音机"
     },
     {
      "en": "newspaper",
      "ph": "['njuːzˌpeɪpə]",
      "zh": "报纸"
     },
     {
      "en": "news",
      "ph": "[njuːz]",
      "zh": "新闻"
     },
     {
      "en": "e-book",
      "ph": "/ˈi bˈʊk/",
      "zh": "电子书"
     },
     {
      "en": "make friends",
      "ph": "/mˈeɪk frˈɛndz/",
      "zh": "交朋友"
     },
     {
      "en": "all over the world",
      "ph": "/ˈɔl ˈoʊvɚ ðə wˈɝld/",
      "zh": "全世界"
     },
     {
      "en": "do shopping",
      "ph": "/dˈu ʃˈɑpɪŋ/",
      "zh": "购物"
     },
     {
      "en": "TV",
      "ph": "[‚tiː'viː]",
      "zh": "电视"
     },
     {
      "en": "look out of",
      "ph": "/lˈʊk ˈaʊt ˈʌv/",
      "zh": "朝……外看"
     },
     {
      "en": "What day is today?",
      "ph": "/wˈʌt dˈeɪ ˈɪz tədˈeɪ/",
      "zh": "今天是星期几？"
     },
     {
      "en": "go on",
      "ph": "/ɡˈoʊ ˈɑn/",
      "zh": "继续"
     },
     {
      "en": "spell",
      "ph": "[spel]",
      "zh": "拼读，拼写"
     },
     {
      "en": "make a sentence",
      "ph": "/mˈeɪk ə sˈɛntəns/",
      "zh": "造句"
     },
     {
      "en": "with",
      "ph": "[wɪð]",
      "zh": "用"
     },
     {
      "en": "yesterday",
      "ph": "['jestədi]",
      "zh": "昨天"
     }
    ]
   },
   {
    "id": "六上-u5",
    "title": "Unit 5",
    "topic": "六上 · 第5单元",
    "text": "",
    "words": [
     {
      "en": "sign",
      "ph": "[saɪn]",
      "zh": "标识"
     },
     {
      "en": "shopping center",
      "ph": "/ʃˈɑpɪŋ sˈɛntɚ/",
      "zh": "购物中心"
     },
     {
      "en": "careful",
      "ph": "['keəfəl]",
      "zh": "小心，当心"
     },
     {
      "en": "What does it mean?",
      "ph": "/wˈʌt dˈʌz ˈɪt mˈin/",
      "zh": "这是什么意思？"
     },
     {
      "en": "mean",
      "ph": "[miːn]",
      "zh": "意思是"
     },
     {
      "en": "litter",
      "ph": "['lɪtə]",
      "zh": "乱扔垃圾"
     },
     {
      "en": "go in",
      "ph": "/ɡˈoʊ ɪn/",
      "zh": "进入"
     },
     {
      "en": "take",
      "ph": "[teɪk]",
      "zh": "携带"
     },
     {
      "en": "restaurant",
      "ph": "[ˈrestərɒnt]",
      "zh": "饭店，餐厅"
     },
     {
      "en": "someone",
      "ph": "['sʌmwʌn]",
      "zh": "某人"
     },
     {
      "en": "smell",
      "ph": "[smel]",
      "zh": "闻到"
     },
     {
      "en": "No eating or drinking.",
      "ph": "/nˈoʊ ˈitɪŋ ˈɔr drˈɪŋkɪŋ/",
      "zh": "请勿饮食。"
     },
     {
      "en": "No littering.",
      "ph": "/nˈoʊ lˈɪtɚɪŋ/",
      "zh": "请勿乱扔垃圾。"
     },
     {
      "en": "No parking.",
      "ph": "/nˈoʊ pˈɑrkɪŋ/",
      "zh": "请勿停车。"
     },
     {
      "en": "No smoking.",
      "ph": "/nˈoʊ smˈoʊkɪŋ/",
      "zh": "请勿抽烟。"
     },
     {
      "en": "Danger！",
      "ph": "/dˈeɪndʒɚ/",
      "zh": "危险！"
     },
     {
      "en": "Wet floor.",
      "ph": "/wˈɛt flˈɔr/",
      "zh": "小心地滑."
     },
     {
      "en": "outing",
      "ph": "[ˈaʊtɪŋ]",
      "zh": "外出游玩，远足"
     },
     {
      "en": "walk on",
      "ph": "/wˈɔk ˈɑn/",
      "zh": "继续走路"
     },
     {
      "en": "around",
      "ph": "[ə'raʊnd]",
      "zh": "在……周围"
     }
    ]
   },
   {
    "id": "六上-u6",
    "title": "Unit 6",
    "topic": "六上 · 第6单元",
    "text": "",
    "words": [
     {
      "en": "keep",
      "ph": "[kiːp]",
      "zh": "保持，维持"
     },
     {
      "en": "clean",
      "ph": "[kliːn]",
      "zh": "干净的，整洁的"
     },
     {
      "en": "make",
      "ph": "[meɪk]",
      "zh": "使……变得"
     },
     {
      "en": "photo",
      "ph": "['fəʊtəʊ]",
      "zh": "照片"
     },
     {
      "en": "air",
      "ph": "[eə]",
      "zh": "空气"
     },
     {
      "en": "dirty",
      "ph": "['dɜːti]",
      "zh": "肮脏的"
     },
     {
      "en": "smoke",
      "ph": "[sməʊk]",
      "zh": "烟雾"
     },
     {
      "en": "rubbish",
      "ph": "['rʌbɪʃ]",
      "zh": "垃圾"
     },
     {
      "en": "messy",
      "ph": "[ˈmesi]",
      "zh": "肮脏的，乱七八糟的"
     },
     {
      "en": "dead",
      "ph": "[ded]",
      "zh": "死的"
     },
     {
      "en": "move ... away from",
      "ph": "/mˈuv əwˈeɪ frˈʌm/",
      "zh": "从……搬走"
     },
     {
      "en": "bin",
      "ph": "[bɪn]",
      "zh": "垃圾桶"
     },
     {
      "en": "plant",
      "ph": "[plɑːnt]",
      "zh": "种植，栽种"
     },
     {
      "en": "more",
      "ph": "[mɔː]",
      "zh": "更多的"
     },
     {
      "en": "museum",
      "ph": "[mjuː'zɪəm]",
      "zh": "博物馆"
     },
     {
      "en": "throw",
      "ph": "[θrəʊ]",
      "zh": "扔"
     },
     {
      "en": "skin",
      "ph": "[skɪn]",
      "zh": "果皮"
     },
     {
      "en": "pick ... up",
      "ph": "/pˈɪk ˈʌp/",
      "zh": "捡起，拾起"
     },
     {
      "en": "slip",
      "ph": "[slɪp]",
      "zh": "滑倒"
     },
     {
      "en": "fall",
      "ph": "[fɔːl]",
      "zh": "摔倒"
     }
    ]
   },
   {
    "id": "六上-u7",
    "title": "Unit 7",
    "topic": "六上 · 第7单元",
    "text": "",
    "words": [
     {
      "en": "protect",
      "ph": "[prə'tekt]",
      "zh": "保护"
     },
     {
      "en": "Earth",
      "ph": "[ɜːθ]",
      "zh": "地球"
     },
     {
      "en": "save",
      "ph": "[seɪv]",
      "zh": "节约"
     },
     {
      "en": "useful",
      "ph": "['juːsfəl]",
      "zh": "有用的"
     },
     {
      "en": "use",
      "ph": "[juːz]",
      "zh": "使用，利用"
     },
     {
      "en": "waste",
      "ph": "[weɪst]",
      "zh": "浪费"
     },
     {
      "en": "much",
      "ph": "[mʌtʃ]",
      "zh": "很多"
     },
     {
      "en": "reuse",
      "ph": "[riːˈjuːz]",
      "zh": "再利用"
     },
     {
      "en": "energy",
      "ph": "['enədʒi]",
      "zh": "能源"
     },
     {
      "en": "come from",
      "ph": "/kˈʌm frˈʌm/",
      "zh": "从……来，来自"
     },
     {
      "en": "coal",
      "ph": "[kəʊl]",
      "zh": "煤炭"
     },
     {
      "en": "oil",
      "ph": "[ɔɪl]",
      "zh": "石油"
     },
     {
      "en": "drive",
      "ph": "[draɪv]",
      "zh": "开车，驾车"
     },
     {
      "en": "wood",
      "ph": "[wʊd]",
      "zh": "木头，木材"
     },
     {
      "en": "cut down",
      "ph": "['kʌtdaʊn]",
      "zh": "砍伐，砍掉"
     },
     {
      "en": "too many",
      "ph": "/tˈu mˈɛni/",
      "zh": "太多"
     },
     {
      "en": "plastic",
      "ph": "['plæstɪk]",
      "zh": "塑料"
     },
     {
      "en": "paper",
      "ph": "['peɪpə]",
      "zh": "纸"
     },
     {
      "en": "glass",
      "ph": "[glɑːs]",
      "zh": "玻璃"
     },
     {
      "en": "project",
      "ph": "[ˈprɒdʒekt]",
      "zh": "课题"
     },
     {
      "en": "poster",
      "ph": "[ˈpəʊstə]",
      "zh": "海报"
     },
     {
      "en": "gate",
      "ph": "[geɪt]",
      "zh": "大门"
     }
    ]
   },
   {
    "id": "六上-u8",
    "title": "Unit 8",
    "topic": "六上 · 第8单元",
    "text": "",
    "words": [
     {
      "en": "Hong Kong",
      "ph": "[ˈhɒŋˈkɒŋ ]",
      "zh": "香港"
     },
     {
      "en": "excited",
      "ph": "[ɪk'saɪtɪd]",
      "zh": "激动的，兴奋的"
     },
     {
      "en": "food",
      "ph": "[fuːd]",
      "zh": "食物，食品"
     },
     {
      "en": "tangyuan",
      "ph": "/tɑŋ ɥuan/",
      "zh": "汤圆"
     },
     {
      "en": "Chinese New Year's Eve",
      "ph": "/tʃaɪnˈiz nˈu jˈɪrz ˈiv/",
      "zh": "大年夜，除夕"
     },
     {
      "en": "Chinese New Year's Day",
      "ph": "/tʃaɪnˈiz nˈu jˈɪrz dˈeɪ/",
      "zh": "大年初一，春节"
     },
     {
      "en": "red packet",
      "ph": "/rˈɛd pˈækət/",
      "zh": "红包"
     },
     {
      "en": "lion dance",
      "ph": "/lˈaɪən dˈæns/",
      "zh": "舞狮"
     },
     {
      "en": "fireworks",
      "ph": "[ˈfaɪəwɜːks]",
      "zh": "烟花表演"
     },
     {
      "en": "firecracker",
      "ph": "/fˈaɪɚkrˌækɚ/",
      "zh": "鞭炮"
     },
     {
      "en": "rich",
      "ph": "[rɪtʃ]",
      "zh": "富有的，有钱的"
     },
     {
      "en": "plan",
      "ph": "[plæn]",
      "zh": "计划，打算"
     },
     {
      "en": "hooray",
      "ph": "[hʊˈreɪ]",
      "zh": "好极了"
     }
    ]
   }
  ]
 },
 "六下": {
  "grade": "六年级",
  "volume": "下册",
  "label": "六年级·下册",
  "units": [
   {
    "id": "六下-u1",
    "title": "Unit 1",
    "topic": "六下 · 第1单元",
    "text": "",
    "words": [
     {
      "en": "mouse",
      "ph": "[maʊs]",
      "zh": "老鼠"
     },
     {
      "en": "large",
      "ph": "[lɑːdʒ]",
      "zh": "大的"
     },
     {
      "en": "strong",
      "ph": "[strɒŋ]",
      "zh": "强大的，强壮的"
     },
     {
      "en": "walk by",
      "ph": "/wˈɔk bˈaɪ/",
      "zh": "走过，路过"
     },
     {
      "en": "wake ... up",
      "ph": "/wˈeɪk ˈʌp/",
      "zh": "吵醒，叫醒"
     },
     {
      "en": "some day",
      "ph": "/sˈʌm dˈeɪ/",
      "zh": "某一天"
     },
     {
      "en": "quietly",
      "ph": "['kwaɪətli]",
      "zh": "小声地，安静地"
     },
     {
      "en": "loudly",
      "ph": "['laʊdli]",
      "zh": "大声地"
     },
     {
      "en": "the next day",
      "ph": "/ðə nˈɛkst dˈeɪ/",
      "zh": "第二天"
     },
     {
      "en": "net",
      "ph": "[net]",
      "zh": "网"
     },
     {
      "en": "bite",
      "ph": "[baɪt]",
      "zh": "咬"
     },
     {
      "en": "sharp",
      "ph": "[ʃɑːp]",
      "zh": "锋利的，尖的"
     },
     {
      "en": "ask",
      "ph": "[ɑːsk]",
      "zh": "问"
     },
     {
      "en": "just then",
      "ph": "/dʒˈʌst ðˈɛn/",
      "zh": "就在那时"
     },
     {
      "en": "soon",
      "ph": "[suːn]",
      "zh": "不久，很快"
     },
     {
      "en": "get out",
      "ph": "/ɡˈɛt ˈaʊt/",
      "zh": "出来，出去"
     },
     {
      "en": "happily",
      "ph": "['hæpɪli]",
      "zh": "开心地，高兴地"
     },
     {
      "en": "from then on",
      "ph": "/frˈʌm ðˈɛn ˈɑn/",
      "zh": "从那时起"
     },
     {
      "en": "weak",
      "ph": "[wiːk]",
      "zh": "弱的，软弱的"
     },
     {
      "en": "cheer",
      "ph": "[tʃɪə]",
      "zh": "欢呼"
     },
     {
      "en": "hit",
      "ph": "[hɪt]",
      "zh": "打，击"
     },
     {
      "en": "ground",
      "ph": "[graʊnd]",
      "zh": "地面，地上"
     },
     {
      "en": "deep",
      "ph": "[diːp]",
      "zh": "深的"
     },
     {
      "en": "reach",
      "ph": "[riːtʃ]",
      "zh": "够得着"
     },
     {
      "en": "pour ... into",
      "ph": "/pˈɔr ˈɪntu/",
      "zh": "把……倒入"
     }
    ]
   },
   {
    "id": "六下-u2",
    "title": "Unit 2",
    "topic": "六下 · 第2单元",
    "text": "",
    "words": [
     {
      "en": "child",
      "ph": "[tʃaɪld]",
      "zh": "孩子，小孩"
     },
     {
      "en": "habit",
      "ph": "[ˈhæbɪt]",
      "zh": "习惯"
     },
     {
      "en": "never",
      "ph": "['nevə]",
      "zh": "从不"
     },
     {
      "en": "late",
      "ph": "[leɪt]",
      "zh": "迟，晚"
     },
     {
      "en": "put ... in order",
      "ph": "/pˈʊt ɪn ˈɔrdɚ/",
      "zh": "把……整理得井井有条"
     },
     {
      "en": "finish",
      "ph": "['fɪnɪʃ]",
      "zh": "完成"
     },
     {
      "en": "tidy",
      "ph": "['taɪdi]",
      "zh": "干净的，整齐的"
     },
     {
      "en": "bad",
      "ph": "[bæd]",
      "zh": "不好的，坏的"
     },
     {
      "en": "sleepy",
      "ph": "[sliːp]",
      "zh": "困的，困倦的"
     },
     {
      "en": "last night",
      "ph": "/lˈæst nˈaɪt/",
      "zh": "昨夜"
     },
     {
      "en": "fast",
      "ph": "[fɑːst]",
      "zh": "快地"
     },
     {
      "en": "go into",
      "ph": "/ɡˈoʊ ˈɪntu/",
      "zh": "走进，走入"
     }
    ]
   },
   {
    "id": "六下-u3",
    "title": "Unit 3",
    "topic": "六下 · 第3单元",
    "text": "",
    "words": [
     {
      "en": "healthy",
      "ph": "['helθi]",
      "zh": "健康的"
     },
     {
      "en": "diet",
      "ph": "[daɪ]",
      "zh": "饮食"
     },
     {
      "en": "a little",
      "ph": "/ə lˈɪtəl/",
      "zh": "一点"
     },
     {
      "en": "a few",
      "ph": "/ə fjˈu/",
      "zh": "几个"
     },
     {
      "en": "at a time",
      "ph": "/ˈæt ə tˈaɪm/",
      "zh": "一次"
     },
     {
      "en": "cola",
      "ph": "['kəʊlə]",
      "zh": "可乐"
     },
     {
      "en": "too much",
      "ph": "/tˈu mˈʌtʃ/",
      "zh": "太多"
     },
     {
      "en": "need",
      "ph": "[niːd]",
      "zh": "需要"
     }
    ]
   },
   {
    "id": "六下-u4",
    "title": "Unit 4",
    "topic": "六下 · 第4单元",
    "text": "",
    "words": [
     {
      "en": "road",
      "ph": "[rəʊd]",
      "zh": "马路，公路"
     },
     {
      "en": "safety",
      "ph": "['seɪfti]",
      "zh": "安全"
     },
     {
      "en": "cross",
      "ph": "[krɔːs]",
      "zh": "穿过，穿行"
     },
     {
      "en": "safely",
      "ph": "/sˈeɪfli/",
      "zh": "安全地"
     },
     {
      "en": "must",
      "ph": "[mʌst]",
      "zh": "必须"
     },
     {
      "en": "zebra crossing",
      "ph": "/zˈibrə krˈɔsɪŋ/",
      "zh": "斑马线"
     },
     {
      "en": "safe",
      "ph": "[seɪf]",
      "zh": "安全的"
     },
     {
      "en": "pavement",
      "ph": "[ˈpeɪvmənt]",
      "zh": "人行道"
     },
     {
      "en": "look out for",
      "ph": "/lˈʊk ˈaʊt fˈɔr/",
      "zh": "当心，提防"
     },
     {
      "en": "follow",
      "ph": "[ˈfɒləʊ]",
      "zh": "遵守"
     },
     {
      "en": "rule",
      "ph": "[ruːl]",
      "zh": "规则"
     },
     {
      "en": "stay",
      "ph": "[steɪ]",
      "zh": "保持"
     },
     {
      "en": "light",
      "ph": "[laɪt]",
      "zh": "灯"
     }
    ]
   },
   {
    "id": "六下-u5",
    "title": "Unit 5",
    "topic": "六下 · 第5单元",
    "text": "",
    "words": [
     {
      "en": "Children's Day",
      "ph": "/tʃˈɪldrənz dˈeɪ/",
      "zh": "儿童节"
     },
     {
      "en": "clown",
      "ph": "[klaʊn]",
      "zh": "小丑"
     },
     {
      "en": "balloon",
      "ph": "[bəˈluːn]",
      "zh": "气球"
     },
     {
      "en": "appear",
      "ph": "[ə'pɪə]",
      "zh": "出现"
     },
     {
      "en": "begin",
      "ph": "[bɪ'gɪn]",
      "zh": "开始"
     },
     {
      "en": "put on",
      "ph": "/pˈʊt ˈɑn/",
      "zh": "上演，表演"
     }
    ]
   },
   {
    "id": "六下-u6",
    "title": "Unit 6",
    "topic": "六下 · 第6单元",
    "text": "",
    "words": [
     {
      "en": "country",
      "ph": "['kʌntri]",
      "zh": "国家"
     },
     {
      "en": "learn",
      "ph": "[lɜːn]",
      "zh": "学习"
     },
     {
      "en": "about",
      "ph": "[ə'baʊt]",
      "zh": "关于"
     },
     {
      "en": "next week",
      "ph": "/nˈɛkst wˈik/",
      "zh": "下周"
     },
     {
      "en": "find out",
      "ph": "['faɪndaʊt]",
      "zh": "发现"
     },
     {
      "en": "magazine",
      "ph": "[ˌmægə'ziːn]",
      "zh": "杂志"
     },
     {
      "en": "kangaroo",
      "ph": "[kæŋɡəˈruː]",
      "zh": "袋鼠"
     },
     {
      "en": "koala",
      "ph": "[kəʊ'ɑːlə]",
      "zh": "考拉"
     },
     {
      "en": "lover",
      "ph": "/lˈʌvɚ/",
      "zh": "爱好者"
     },
     {
      "en": "Australian football",
      "ph": "/ɔstrˈeɪljən fˈʊtbˌɔl/",
      "zh": "澳式橄榄球"
     },
     {
      "en": "exciting",
      "ph": "[ɪk'saɪtɪŋ]",
      "zh": "令人激动的，令人兴奋的"
     },
     {
      "en": "Sydney",
      "ph": "['sɪdni]",
      "zh": "（澳大利亚城市）悉尼"
     },
     {
      "en": "welcome",
      "ph": "['welkəm]",
      "zh": "欢迎"
     },
     {
      "en": "visitor",
      "ph": "['vɪzɪtə]",
      "zh": "游人，游客"
     },
     {
      "en": "London",
      "ph": "['lʌndən]",
      "zh": "（英国城市）伦敦"
     },
     {
      "en": "Oxford",
      "ph": "[ˈɒksfəd]",
      "zh": "（英国城市）牛津"
     },
     {
      "en": "Big Ben",
      "ph": "[ben]",
      "zh": "（英国）大本钟"
     },
     {
      "en": "London Eye",
      "ph": "['lʌndən//aɪ]",
      "zh": "（伦敦的摩天轮）伦敦眼"
     },
     {
      "en": "Tower Bridge",
      "ph": "/tˈaʊɚ brˈɪdʒ/",
      "zh": "（伦敦）塔桥"
     },
     {
      "en": "like",
      "ph": "[laɪk]",
      "zh": "如"
     },
     {
      "en": "What do you think?",
      "ph": "/wˈʌt dˈu jˈu θˈɪŋk/",
      "zh": "你觉得呢?"
     }
    ]
   },
   {
    "id": "六下-u7",
    "title": "Unit 7",
    "topic": "六下 · 第7单元",
    "text": "",
    "words": [
     {
      "en": "summer holiday",
      "ph": "/sˈʌmɚ hˈɑlədˌeɪ/",
      "zh": "暑假"
     },
     {
      "en": "will",
      "ph": "[wɪl]",
      "zh": "将，将要"
     },
     {
      "en": "go back to",
      "ph": "/ɡˈoʊ bˈæk tˈu/",
      "zh": "回去"
     },
     {
      "en": "how long",
      "ph": "/hˈaʊ lˈɔŋ/",
      "zh": "多久"
     },
     {
      "en": "stay",
      "ph": "[steɪ]",
      "zh": "停留"
     },
     {
      "en": "sound",
      "ph": "[saʊnd]",
      "zh": "听起来，听上去"
     },
     {
      "en": "Disneyland",
      "ph": "['dɪznɪlænd]",
      "zh": "迪士尼乐园"
     },
     {
      "en": "Ocean Park",
      "ph": "/ˈoʊʃən pˈɑrk/",
      "zh": "（香港）海洋公园"
     },
     {
      "en": "Taipei",
      "ph": "/tˈaɪpˌeɪ/",
      "zh": "台北"
     },
     {
      "en": "travel",
      "ph": "['trævl]",
      "zh": "旅游"
     },
     {
      "en": "traveller",
      "ph": "['trævlə]",
      "zh": "旅行者"
     },
     {
      "en": "travel around the world",
      "ph": "/trˈævəl ɚˈaʊnd ðə wˈɝld/",
      "zh": "环游世界"
     }
    ]
   },
   {
    "id": "六下-u8",
    "title": "Unit 8",
    "topic": "六下 · 第8单元",
    "text": "",
    "words": [
     {
      "en": "dream",
      "ph": "[driːm]",
      "zh": "梦想"
     },
     {
      "en": "future",
      "ph": "['fjuːtʃə]",
      "zh": "将来，未来"
     },
     {
      "en": "care about",
      "ph": "/kˈɛr əbˈaʊt/",
      "zh": "关心，在乎"
     },
     {
      "en": "astronaut",
      "ph": "[ˈæstrənɔːt]",
      "zh": "宇航员"
     },
     {
      "en": "spaceship",
      "ph": "['speɪsʃɪp]",
      "zh": "宇宙飞船"
     },
     {
      "en": "Moon",
      "ph": "[muːn]",
      "zh": "月球"
     },
     {
      "en": "football player",
      "ph": "/fˈʊtbˌɔl plˈeɪɚ/",
      "zh": "足球运动员"
     },
     {
      "en": "World Cup",
      "ph": "[wɜːld/ /kʌp]",
      "zh": "世界杯"
     },
     {
      "en": "dancer",
      "ph": "/dˈænsɚ/",
      "zh": "舞蹈家"
     },
     {
      "en": "pianist",
      "ph": "[ˈfɪzɪks]",
      "zh": "钢琴演奏家"
     },
     {
      "en": "come true",
      "ph": "[ˌkʌm'truː]",
      "zh": "实现，成真"
     },
     {
      "en": "take care of",
      "ph": "/tˈeɪk kˈɛr ˈʌv/",
      "zh": "爱护；照顾"
     },
     {
      "en": "scientist",
      "ph": "['saɪəntɪst]",
      "zh": "科学家"
     },
     {
      "en": "artist",
      "ph": "['ɑːtɪst]",
      "zh": "艺术家"
     },
     {
      "en": "paint",
      "ph": "[peɪnt]",
      "zh": "画画"
     }
    ]
   }
  ]
 }
};
