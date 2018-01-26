// forked from akira0924's "ギャルゲーっぽい画面遷移" http://jsdo.it/akira0924/hvGB
enchant();

window.onload = function() {

    //ゲームオブジェクトの生成
    var game = new Core();
    game.fps = 64;

    // 画像の読み込み
    // 先に読み込んでおく
    game.preload('http://enchantjs.com/assets/images/bg/bg01.jpg',
    'http://enchantjs.com/assets/images/bg/bg02.jpg',
	'http://enchantjs.com/assets/images/bg/bg03.jpg','images/NAKAGUSUKU.jpg','images/meid_red_def.png','images/meid_red_smile.png','images/meid_red_smile.png','images/zakimiNight.jpg',
  'images/SHURI.jpg','images/katsuren.jpg','images/FIRE.jpg','images/ALLBLACK.png','images/NAKIJIN.jpg','images/zakimi002.jpg',
  'images/bikini_smile.png','images/meid_black_glad.png','images/meid_black.png','images/meid_black_sad.png','images/twin_worry.png','images/twin_smile.png','images/twin_sad.png','images/twin.png',
  'images/twin_angry.png','images/meid_brow_ang.png','images/meid_brow_def.png','images/meid_brow.png','images/meid_brow_smile.png',
'sounds/jingle04.wav','sounds/scene3.mp3','sounds/believe.mp3');
  var flag = true;
    //ロード完了時に呼ばれる
    game.onload = function() {
	//背景の生成
	var bg = new Sprite(320, 320);
	bg.image = game.assets['http://enchantjs.com/assets/images/bg/bg02.jpg'];
	    game.rootScene.addChild(bg);
  var charactor = new Sprite(178, 290);
    charactor.moveTo(135,30);
  charactor.image = game.assets['images/bikini_smile.png'];
      game.rootScene.addChild(charactor);
  var bgm2 = game.assets['sounds/scene3.mp3'].clone();
      game.onenterframe=function(){ //enterframeイベントのイベントリスナー
        if(flag){
         bgm2.play();
       }
      };

	//メッセージの作成
	game.rootScene.addChild(makeMessage("全問正解、おめでとう！誰と遊ぶ？"));

	//選択肢の生成
  var select0=makeSelect("【シュリ様】",10, 318 - 12 * 6);
 select0.addEventListener(Event.TOUCH_START, function(e) {
     game.pushScene(game.makeScene1());
 });
 game.rootScene.addChild(select0);

 var select1=makeSelect("【カナ様】",90, 318 - 12 * 6);
 select1.addEventListener(Event.TOUCH_START, function(e) {
     game.pushScene(game.makeScene20());
 });
 game.rootScene.addChild(select1);
 var select2=makeSelect("【ユキ様】",154, 318 - 12 * 6);
 select2.addEventListener(Event.TOUCH_START, function(e) {
     game.pushScene(game.makeScene40());
 });
 game.rootScene.addChild(select2);

 var select3=makeSelect("【ミサト様】",10, 318 - 12 * 4);
 select3.addEventListener(Event.TOUCH_START, function(e) {
     game.pushScene(game.makeScene60());
 });
 game.rootScene.addChild(select3);

 var select4=makeSelect("【ミレイ様】",90, 318 - 12 * 4);
 select4.addEventListener(Event.TOUCH_START, function(e) {
     game.pushScene(game.makeScene80());
 });
 game.rootScene.addChild(select4);

   };




    //シーン1の生成
    game.makeScene1 = function() {
	var scene = new Scene();

	//背景の生成
  var bg = new Sprite(320, 320);
  bg.image = game.assets['images/SHURI.jpg'];
      scene.addChild(bg);
  var charactor = new Sprite(178, 290);
    charactor.moveTo(135,30);
  charactor.image = game.assets['images/meid_black_glad.png'];
      scene.addChild(charactor);

	//メッセージの生成
	scene.addChild(makeMessage("あっ…いきなりごめんね…私は七瀬珠莉！"));

	//選択肢の生成
	var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
	select0.addEventListener(Event.TOUCH_START, function(e) {
	    game.pushScene(game.makeScene2());
	});
	scene.addChild(select0);

  var select1 = makeSelect("【最初にもどる】", 150, 320 - 12 * 2);
  select1.addEventListener(Event.TOUCH_START, function(e) {
    game.replaceScene(game.rootScene);
  });
  scene.addChild(select1);
  return scene;
  };

    //シーン2の生成
    game.makeScene2 = function() {
	var scene = new Scene();
flag = true;
	//背景の生成
  var bg = new Sprite(320, 320);
  bg.image = game.assets['images/SHURI.jpg'];
      scene.addChild(bg);
  var charactor = new Sprite(178, 290);
    charactor.moveTo(135,30);
  charactor.image = game.assets['images/meid_black_glad.png'];
      scene.addChild(charactor);

	//ラベルの生成
	scene.addChild(makeMessage("しゅり:なんだか暇してそうだったから話しかけてみたの！沖縄にくるのは初めてなのね？じゃあ私に首里城を案内させて！"));
  var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
	select0.addEventListener(Event.TOUCH_START, function(e) {
	    game.pushScene(game.makeScene3());
	});
	scene.addChild(select0);
    return scene;
};

//シーン3の生成
game.makeScene3 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/SHURI.jpg'];
    scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/meid_black.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("しゅり:じゃあ〜早速！首里城は、14世紀末頃に建設されたと言われる琉球王朝のお城なの。随所に中国や日本の建築文化の影響を受けているんだよ。"));
//選択肢の生成


var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene4());
});
scene.addChild(select0);
return scene;
};


//シーン4の生成
game.makeScene4 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/SHURI.jpg'];
    scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/meid_black.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("しゅり:国王とその家族が住んでいたと言われていて、王国統治の行政機関「首里王府」の本部でもあったんだよ。"));
//選択肢の生成
var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene5());
});
scene.addChild(select0);
return scene;
};

//シーン5の生成
game.makeScene5 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/SHURI.jpg'];
    scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/meid_black.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("しゅり:首里城とその周辺では芸能・音楽が盛んに演じられたり、美術・工芸の専門家が数多く活躍していたんだって。"));
//選択肢の生成
var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene6());
});
scene.addChild(select0);
return scene;
};

//シーン6の生成
game.makeScene6 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/SHURI.jpg'];
    scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/meid_black_glad.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("しゅり:守礼門を過ぎて少し歩くと、王族の安全祈願した礼拝所「園比屋武御獄石門（そのひゃんうたきいしもん）」が見えてくるの。実はここも世界遺産に登録されているんだよ！凄いよね？"));
//選択肢の生成
var select0 = makeSelect("【次へ】", 170, 300 - 12 * 1);
select0.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene7());
});
scene.addChild(select0);
return scene;
};

//シーン7の生成
game.makeScene7 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/SHURI.jpg'];
    scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/meid_black_glad.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("しゅり:でもね、首里城ってこれまでに4回も焼失しちゃったの…現在残っているものは、ほとんどが復元されたものなんだよ。"));
//選択肢の生成
var select0 = makeSelect("【次へ】", 170, 300 - 12 * 1);
select0.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene8());
});
scene.addChild(select0);
return scene;
};




//シーン8の生成
game.makeScene8 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/SHURI.jpg'];
    scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/meid_black.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("それじゃあ問題！！首里城は何世紀に建設されたと言われてるでしょうか？"));
//選択肢の生成
var select0 = makeSelect("【14世紀末頃！】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene9());
});
scene.addChild(select0);

var select1 = makeSelect("【10世紀初頭！】", 120, 320 - 12 * 2);
select1.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene12());
});
scene.addChild(select1);
return scene;
};

//シーン9の生成
game.makeScene9 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/SHURI.jpg'];
    scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/meid_black_glad.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("正解っ！！さすが！じゃあ二問目行くねっ！首里城は何回焼失したでしょう？"));
//選択肢の生成
var select0 = makeSelect("【1回】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene12());
});
scene.addChild(select0);


var select1 = makeSelect("【4回】", 50, 320 - 12 * 2);
select1.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene10());
});
scene.addChild(select1);
return scene;
};

//シーン10の生成
game.makeScene10 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/SHURI.jpg'];
  scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/meid_black.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("せいかーい！じゃあ最後の質問です。王族の安全祈願した礼拝所「園比屋武御獄石門」、これなんて読む？"));
//選択肢の生成
var select0 = makeSelect("【そのひゃんうたきいしもん】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene12());
});
scene.addChild(select0);

var select1 = makeSelect("【そのひゃぶせきもん】", 10, 298 - 12 * 2);
select1.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene11());
});
scene.addChild(select1);
return scene;
};

//シーン11の生成
game.makeScene11 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/SHURI.jpg'];
  scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/meid_black_glad.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("全問正解おめでとう！またいつでも、しゅりに会いに来てね…？"));
//選択肢の生成
var select1 = makeSelect("【最初にもどる】", 150, 320 - 12 * 2);
select1.addEventListener(Event.TOUCH_START, function(e) {
  game.replaceScene(game.rootScene);
});
scene.addChild(select1);
return scene;
};

//シーン11の生成
game.makeScene12 = function() {
var scene = new Scene();
//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/ALLBLACK.png'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/meid_black_sad.png'];
    scene.addChild(charactor);
var se1 = game.assets['sounds/jingle04.wav'].clone();
    flag = false;
    se1.play();

//ラベルの生成
scene.addChild(makeMessage("え・・・？しゅりの話、ちゃんと聞いてくれなかったの？なんで・・・ありえない・・・・許せない・・・・・!!!!!!!!!"));
//選択肢の生成
var select0 = makeSelect("【タイムスリップする】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene2());
});
scene.addChild(select0);
return scene;
};

//シーン20の生成
game.makeScene20 = function() {
var scene = new Scene();
flag = true;
//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/katsuren.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/bikini_smile.png'];
    scene.addChild(charactor);

//メッセージの生成
scene.addChild(makeMessage("???:おい！そこの男！なんだ迷ってるのか！それなら私が勝連城を案内してやろうじゃないの！"));

//選択肢の生成
var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene21());
});
scene.addChild(select0);

return scene;
};

//シーン21の生成
game.makeScene21 = function() {
var scene = new Scene();
//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/katsuren.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/bikini_smile.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("私か？私は勝島香那だ！よろしく！"));
var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene22());
});
scene.addChild(select0);
return scene;
};

//シーン22の生成
game.makeScene22 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/katsuren.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/bikini_smile.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("かな:んでね、勝連城のことなんだけど、ここは世界遺産に登録されたグスクの中でも最古のグスクなんだ。"));
var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene23());
});
scene.addChild(select0);
return scene;
};

//シーン23の生成
game.makeScene23 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/katsuren.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/bikini_smile.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("かな:この城には、貿易等で力をつけていった勝連の英雄、阿麻和利（あまわり）が居住していたこともあるぞ！"));
var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene24());
});
scene.addChild(select0);
return scene;
};

//シーン24の生成
game.makeScene24 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/katsuren.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/bikini_smile.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("かな:この阿麻和利は、王権奪取をめざして首里城を攻めていったのだが、大敗するんだよ！！悔しい！！"));
var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene25());
});
scene.addChild(select0);
return scene;
};

//シーン25の生成
game.makeScene25 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/katsuren.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/bikini_smile.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("かな:だが諸説あってだな…なぜ首里城を攻めたのか正確な理由はわかっていないのが更に悔しい！！"));
var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene26());
});
scene.addChild(select0);
return scene;
};

//シーン26の生成
game.makeScene26 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/katsuren.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/bikini_smile.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("かな:でもな！勝連城には琉球の時代のでもドラマチックなストーリがある場所だし、歴史ロマンを感じてみるのもいいな！ "));
var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene27());
});
scene.addChild(select0);
return scene;
};

//シーン27の生成
game.makeScene27 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/katsuren.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/bikini_smile.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("おおおおおい！目が半開きだぞ？お前は話聞いてんのか？確認だが…このグスクには誰が住んでいたかわかるか？"));
//選択肢の生成
var select0 = makeSelect("【阿麻和利】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene28());
});
scene.addChild(select0);

var select1 = makeSelect("【麻生和利】", 100, 320 - 12 * 2);
select1.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene35());
});
scene.addChild(select1);
return scene;
};

//シーン28の生成
game.makeScene28 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/katsuren.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/bikini_smile.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("まあこんなのは朝飯前だ。次！この阿麻和利は、王権奪取をめざしてどこを攻めたんだ？"));
//選択肢の生成
var select0 = makeSelect("【花城】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene35());
});
scene.addChild(select0);

var select1 = makeSelect("【首里城】", 60, 320 - 12 * 2);
select1.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene29());
});
scene.addChild(select1);
return scene;
};

//シーン29の生成
game.makeScene29 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/katsuren.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/bikini_smile.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("その通りだ！！最後の問題だ。阿麻和利が城を攻めた目的は？"));
//選択肢の生成
var select0 = makeSelect("【王権の簒奪】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene35());
});
scene.addChild(select0);

var select1 = makeSelect("【わからない】", 110, 320 - 12 * 2);
select1.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene30());
});
scene.addChild(select1);
return scene;
};

//シーン30の生成
game.makeScene30 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/katsuren.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/bikini_smile.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("流石だ！またいつでも来てくれていいんだからな！"));
//選択肢の生成
var select1 = makeSelect("【最初にもどる】", 150, 320 - 12 * 2);
select1.addEventListener(Event.TOUCH_START, function(e) {
  game.replaceScene(game.rootScene);
});
scene.addChild(select1);
return scene;
};

//シーン35の生成
game.makeScene35 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/FIRE.jpg'];
scene.addChild(bg);
var bgm2 = game.assets['sounds/jingle04.wav'].clone();
    flag = false;
    bgm2.play();

//ラベルの生成
scene.addChild(makeMessage("何を言っている...ちゃんと人の話聞けよ!!!!!!!!!!!!!!!!!!!!!"));
//選択肢の生成
var select0 = makeSelect("【タイムスリップする】", 150, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene20());
});
scene.addChild(select0);
return scene;
};


//シーン40の生成
game.makeScene40 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/zakimi002.jpg'];
scene.addChild(bg);

//メッセージの生成
scene.addChild(makeMessage("???:そんな所で立ち止まらないでくださる？邪魔ですわ。"));

//選択肢の生成
var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene41());
});
scene.addChild(select0);

var select1 = makeSelect("【もどる】", 150, 320 - 12 * 2);
select1.addEventListener(Event.TOUCH_START, function(e) {
  game.popScene();
});
scene.addChild(select1);
return scene;
};

//シーン41の生成
game.makeScene41 = function() {
var scene = new Scene();
flag = true;
//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/zakimi002.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/meid_red_def.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("座喜味城に行きたいけど道がわからない？頭が弱いのかしら？"));
var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene42());
});
scene.addChild(select0);
return scene;
};

//シーン42の生成
game.makeScene42 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/zakimi002.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/meid_red_def.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("仕方ないわね....私、石丸由喜が直々に案内してもよくってよ。ついてらっしゃい！"));
var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene43());
});
scene.addChild(select0);
return scene;
};

//シーン43の生成
game.makeScene43 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/zakimi002.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/meid_red_smile.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("ゆき:読谷村にあるグスクがここ、「座喜味城（ざきみじょう）」。15世紀初頭に、護佐丸（ごさまる）によって建設されたわ。"));
var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene44());
});
scene.addChild(select0);
return scene;
};

//シーン44の生成
game.makeScene44 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/zakimiNight.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/meid_red_smile.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("ゆき:築城家としても名高い護佐丸が作ったグスクの中でも、座喜味城が最も美しいといわれているのよ。ライトアップイベントも開催されることもあるの。"));
var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene45());
});
scene.addChild(select0);
return scene;
};

//シーン45の生成
game.makeScene45 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/zakimi002.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/meid_red_def.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("ゆき:グスクを上ると残波岬や慶良間諸島も観ることができるわ。歴史と絶景両方とも楽しめる場所よ。"));
var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene46());
});
scene.addChild(select0);
return scene;
};

//シーン46の生成
game.makeScene46 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/zakimi002.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/meid_red_def.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("さて、そろそろ復習タイムとしましょうか。座喜味城を手がけた築城家の名前を言ってみなさい？"));
//選択肢の生成
var select0 = makeSelect("【護佐丸だろ？】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene47());
});
scene.addChild(select0);
var select1 = makeSelect("【阿麻和利だろ】", 125, 320 - 12 * 2);
select1.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene55());
});
scene.addChild(select1);
return scene;
};



//シーン47の生成
game.makeScene47 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/zakimi002.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/meid_red_def.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("…正解よ。まだ甘いですわ！座喜味城が建てられたのはいつ頃かしら？"));
//選択肢の生成
var select0 = makeSelect("【16世紀後半？】", 125, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene55());
});
scene.addChild(select0);

var select1 = makeSelect("【15世紀初頭？】", 10, 320 - 12 * 2);
select1.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene49());
});
scene.addChild(select1);
return scene;
};

//シーン49の生成
game.makeScene49 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/zakimi002.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/meid_red_smile.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("あら、全問正解よ！中々やるじゃない。"));
//選択肢の生成
var select1 = makeSelect("【最初にもどる】", 150, 320 - 12 * 2);
select1.addEventListener(Event.TOUCH_START, function(e) {
  game.replaceScene(game.rootScene);
});
scene.addChild(select1);
return scene;
};

//シーン55の生成
game.makeScene55 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/ALLBLACK.png'];
scene.addChild(bg);
var bgm2 = game.assets['sounds/jingle04.wav'].clone();
    flag = false;
    bgm2.play();

//ラベルの生成
scene.addChild(makeMessage("......どういうことかしら？私の話を聞いていなかったとでも？お黙り!!!!!!!!!!!!"));
//選択肢の生成
var select0 = makeSelect("【タイムスリップする】", 150, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene41());
});
scene.addChild(select0);
return scene;
};


//シーン60の生成
game.makeScene60 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/NAKIJIN.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/twin_worry.png'];
  scene.addChild(charactor);

//メッセージの生成
scene.addChild(makeMessage("???:はわ！！？？あなた誰ですか！？！？初めて見かける顔ですね…！"));

//選択肢の生成
var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene61());
});
scene.addChild(select0);

var select1 = makeSelect("【もどる】", 150, 320 - 12 * 2);
select1.addEventListener(Event.TOUCH_START, function(e) {
  game.replaceScene(game.rootScene);
});
scene.addChild(select1);
return scene;
};


//シーン61の生成
game.makeScene61 = function() {
var scene = new Scene();
flag = true;

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/NAKIJIN.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/twin_angry.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("???:ふむふむ、大学課題で沖縄のグスクについて調べているのですね！"));
var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene62());
});
scene.addChild(select0);
return scene;
};



//シーン62の生成
game.makeScene62 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/NAKIJIN.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/twin_worry.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("なるほど！あっ！わっわたし仁王美里と良いまふ…あっ噛みまみた…！"));
var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene63());
});
scene.addChild(select0);
return scene;
};

//シーン63の生成
game.makeScene63 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/NAKIJIN.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/twin_worry.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("みさと:わ…わたしがお気に入りのグスクを案内させて頂いてもよろしいですか！？な、なんとなくですよ？な ん と な く!!!!!"));
var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene64());
});
scene.addChild(select0);
return scene;
};

//シーン64の生成
game.makeScene64 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/NAKIJIN.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/twin_smile.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("みさと:ここ、今帰仁城（なきじんじょう）は、13世紀に建てられたと言われているグスクなんです。"));
var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene65());
});
scene.addChild(select0);
return scene;
};

//シーン65の生成
game.makeScene65 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/NAKIJIN.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/twin_worry.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("みさと:沖縄が「琉球王朝」として統一される前の「三山県立の時代」に北部の覇者北山王が築いたという説がありますが、諸説あって正確には解明されていないそうで"));
var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene66());
});
scene.addChild(select0);
return scene;
};

//シーン66の生成
game.makeScene66 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/NAKIJIN.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/twin.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("みさと:天気のいい日には、伊是名島や伊平屋島も望めたりして！なっなんだかこう…ロマンチック・・・だと思いませんか？"));
var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene67());
});
scene.addChild(select0);
return scene;
};

//シーン67の生成
game.makeScene67 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/NAKIJIN.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/twin.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("みさと:い…いつか ボ ー イ フ レ ン ド と見れたらなあ…なんて思っているワケなのです"));
var select0 = makeSelect("【僕じゃ駄目ですか】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene68());
});
scene.addChild(select0);
return scene;
};

//シーン68の生成
game.makeScene68 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/NAKIJIN.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/twin_worry.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("はわわ…!?!?ほあぇg@$%#!?もももっ…問題ですよ…！今帰仁城はなんと読むでしょう？"));
//選択肢の生成
var select0 = makeSelect("【なきじんじょう】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene69());
});
scene.addChild(select0);
var select1 = makeSelect("【こんきにんじょう】", 150, 320 - 12 * 2);
select1.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene75());
});
scene.addChild(select1);
return scene;
};

//シーン69の生成
game.makeScene69 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/NAKIJIN.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/twin_smile.png'];
    scene.addChild(charactor);

//ラベルの生成、突拍子もないこと仰るような方ですが…ちゃんと私の話、聞いていてくれたのですね…！
scene.addChild(makeMessage("素晴らしいです！ではいつ頃建てられたでしょう？"));
//選択肢の生成
var select0 = makeSelect("【13世紀】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene70());
});
scene.addChild(select0);
var select1 = makeSelect("【15世紀】", 150, 320 - 12 * 2);
select1.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene75());
});
scene.addChild(select1);
return scene;
};



//シーン70の生成
game.makeScene70 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/NAKIJIN.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/twin_smile.png'];
    scene.addChild(charactor);
//ラベルの生成
scene.addChild(makeMessage("おおお〜、流石です！ではこのグスクを手がけた方は…？"));
//選択肢の生成
var select0 = makeSelect("【北山王】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene71());
});
scene.addChild(select0);
var select1 = makeSelect("【花城王】", 150, 320 - 12 * 2);
select1.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene75());
});
scene.addChild(select1);
return scene;
};



//シーン71の生成
game.makeScene71 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/NAKIJIN.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/twin.png'];
    scene.addChild(charactor);

//ラベルの生成、突拍子もないこと仰るような方ですが…ちゃんと私の話、聞いていてくれたのですね…！
scene.addChild(makeMessage("そうそう。諸説あるんですけどね。…はっ！！？かかか…完璧じゃないですか！！突拍子もないこと仰るような方ですが…ちゃんと私の話、聞いていてくれたのですね//"));
//選択肢の生成
var select1 = makeSelect("【最初にもどる】", 150, 320 - 12 * 2);
select1.addEventListener(Event.TOUCH_START, function(e) {
  game.replaceScene(game.rootScene);
});
scene.addChild(select1);
return scene;
};

//シーン75の生成
game.makeScene75 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/ALLBLACK.png'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/twin_sad.png'];
    scene.addChild(charactor);
    var bgm2 = game.assets['sounds/jingle04.wav'].clone();
    flag = false;
        bgm2.play();

//ラベルの生成、突拍子もないこと仰るような方ですが…ちゃんと私の話、聞いていてくれたのですね…！
scene.addChild(makeMessage("酷い…信じられない…やっぱり冗談だったんですね…あなたを信じた私が馬鹿でした…消え失せて…ください!!!!!"));
//選択肢の生成
var select0 = makeSelect("【タイムスリップする】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene61());
});
scene.addChild(select0);
return scene;
};

//シーン80の生成
game.makeScene80 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/NAKAGUSUKU.jpg'];
scene.addChild(bg);


//メッセージの生成
scene.addChild(makeMessage("はぁ…はぁ…ここで一休みしよう…モテすぎちゃうのがイケメンの悲しき性…こんなにも女に囲まれることになるとはね…美男子はつらいよ…"));

//選択肢の生成
var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene81());
});
scene.addChild(select0);
var select1 = makeSelect("【もどる】", 150, 320 - 12 * 2);
select1.addEventListener(Event.TOUCH_START, function(e) {
  game.replaceScene(game.rootScene);
});
scene.addChild(select1);
return scene;
};


//シーン81の生成
game.makeScene81 = function() {
var scene = new Scene();
flag = true;

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/NAKAGUSUKU.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/meid_brow_ang.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("???:は！？ちょっと話しかけてこないでくれない！？"));
var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene82());
});
scene.addChild(select0);
return scene;
};

//シーン82の生成
game.makeScene82 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/NAKAGUSUKU.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/meid_brow_ang.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("???:話しかけてない？あっそう……え？中城城について知りたい？別に今からわたしも行くしついてくるぐらいなら良いけど！？"));
var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene83());
});
scene.addChild(select0);
return scene;
};

//シーン83の生成
game.makeScene83 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/NAKAGUSUKU.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/meid_brow_ang.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("私？野中美玲だけど。そ、そうね…中城城（なかぐすくじょう）は、琉球王朝時代に建てられたグスクなのよ。 沖縄に残るグスクの中でも最も保存状態がいいグスクといわれているんだから！"));
var select0 = makeSelect("【次へ】", 168, 313 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene84());
});
scene.addChild(select0);
return scene;
};

//シーン84の生成
game.makeScene84 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/NAKAGUSUKU.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/meid_brow.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("みれい:冬至の季節には「わかてだを見る集い」っていうイベントが開催されるの。日の出とともに伝統芸能を楽しむことができるわ。"));
var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene85());
});
scene.addChild(select0);
return scene;
};

//シーン85の生成
game.makeScene85 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/NAKAGUSUKU.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/meid_brow_ang.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("みれい:べ、別にあなたと行きたいとか言ってるわけじゃないんだからね…！"));
var select0 = makeSelect("【次へ】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
  game.pushScene(game.makeScene86());
});
scene.addChild(select0);
return scene;
};

//シーン86の生成
game.makeScene86 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/NAKAGUSUKU.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/meid_brow.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("き、聞いてんの？確認するからね？中城城、なんて読むのか覚えてる？"));
//選択肢の生成
var select0 = makeSelect("【なかぐすくじょう】", 10, 298 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene87());
});
scene.addChild(select0);

var select1 = makeSelect("【ちゅうじょうじょう】", 10, 320 - 12 * 2);
select1.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene90());
});
scene.addChild(select1);

return scene;
};

//シーン87の生成
game.makeScene87 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/NAKAGUSUKU.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/meid_brow_smile.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("うん。いや、まだアンタの事認めたわけじゃないんだから！中城城の保存状態ってどうなのよ？"));
//選択肢の生成
var select0 = makeSelect("【結構悪そう】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene90());
});
scene.addChild(select0);

var select1 = makeSelect("【結構良さそう】", 10, 303 - 12 * 2);
select1.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene88());
});
scene.addChild(select1);
return scene;
};

//シーン88の生成
game.makeScene88 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/NAKAGUSUKU.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/meid_brow_smile.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("ハッキリ「良い」って言ってくれない？バーカ！！じゃあ最後…冬至の季節に何てイベントが開催されるのよ？"));
//選択肢の生成
var select0 = makeSelect("【わかてだを見る集いだろ？】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene89());
});
scene.addChild(select0);

var select1 = makeSelect("【みれいを見る集いだろ？】", 10, 300 - 12 * 2);
select1.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene90());
});
scene.addChild(select1);
return scene;
};

//シーン89の生成
game.makeScene89 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/NAKAGUSUKU.jpg'];
scene.addChild(bg);
var charactor = new Sprite(178, 290);
  charactor.moveTo(135,30);
charactor.image = game.assets['images/meid_brow_ang.png'];
    scene.addChild(charactor);

//ラベルの生成
scene.addChild(makeMessage("あ、あんたやるじゃん…見直した。べっ…別に！！「わかてだを見る集い」一緒に行きたいとか言ってないから…　かっ…勘違いしないでよね？バーカ。"));
//選択肢の生成
var select1 = makeSelect("【最初にもどる】", 150, 320 - 12 * 2);
select1.addEventListener(Event.TOUCH_START, function(e) {
  game.replaceScene(game.rootScene);
});
scene.addChild(select1);
return scene;
};

//シーン90の生成
game.makeScene90 = function() {
var scene = new Scene();

//背景の生成
var bg = new Sprite(320, 320);
bg.image = game.assets['images/FIRE.jpg'];
scene.addChild(bg);
var bgm2 = game.assets['sounds/jingle04.wav'].clone();
flag = false;
    bgm2.play();

//ラベルの生成
scene.addChild(makeMessage("は？ふざけてんの？ありえない…"));
//選択肢の生成
var select0 = makeSelect("【タイムスリップする】", 10, 320 - 12 * 2);
select0.addEventListener(Event.TOUCH_START, function(e) {
    game.pushScene(game.makeScene81());
});
scene.addChild(select0);
return scene;
};

//ゲーム開始
game.start()
//game.debug();
};

//メッセージの生成
function makeMessage(text) {
    var label = new Label(text);
    label.font = "16px monospace";
    label.color = "rgb(255,255,255)";
    label.backgroundColor = "rgba(0,0,0,0.6)";
    label.y = 320 -32 * 3;
    label.width = 320;
    label.height = 32 * 3;
    return label;
}

//選択肢の生成
function makeSelect(text, x, y) {
    var label = new Label(text);
    label.font = "16px monospace";
    label.color = "rgb(255,200,0)";
    label.x = x;
    label.y = y;
    label.width = 320;
    return label;
}
