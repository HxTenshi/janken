function game(spec,my) {
    var PICT_PREFIX = location.origin + '/images/';
    
    var playerName = spec.playerName;
    var enemyName = spec.enemyName;
    
    var jankenReadyLabel;
    var rockSprite;
    var scissorsSprite;
    var paperSprite;
    var playerHandSprite;
    var enemyHandSprite;
    var winnerLabel;
    var resultSprite;
  
    var core = new Core(320, 320);
    core.fps = 60;
    core.rootScene.backgroundColor = "black";
    core.ROCK = 1;
    core.SCISSORS = 2;
    core.PAPER = 3;
    
    preLoad();
    core.onload = function() {
        initSprite();
        core.rootScene.addEventListener('enterframe', function(e) {
        });
    };
    
    function preLoad() {
        core.preload(PICT_PREFIX+'rock.png');
        core.preload(PICT_PREFIX+'scissors.png');
        core.preload(PICT_PREFIX+'paper.png');
        core.preload(PICT_PREFIX+'result.png');
    }

    function initSprite() {
        jankenReadyLabel = new Label();
        jankenReadyLabel.x = 100;
        jankenReadyLabel.y = 10;
        jankenReadyLabel.color = '#fff';
        jankenReadyLabel.text = "なにだす？";
        jankenReadyLabel.font = '20px cursive';
        core.rootScene.addChild(jankenReadyLabel);
        
        rockSprite = new Sprite(128, 128);
        rockSprite.image = core.assets[PICT_PREFIX+'rock.png'];
        rockSprite.x = 100;
        rockSprite.y = 40;
        rockSprite.addEventListener(Event.TOUCH_START,function(e){
            clickHandButton(core.ROCK);
        });
        core.rootScene.addChild(rockSprite);
        
        scissorsSprite = new Sprite(128, 128);
        scissorsSprite.image = core.assets[PICT_PREFIX+'scissors.png'];
        scissorsSprite.x = 10;
        scissorsSprite.y = 170;
        scissorsSprite.addEventListener(Event.TOUCH_START,function(e){
            clickHandButton(core.SCISSORS);
        });
        core.rootScene.addChild(scissorsSprite);
        
        paperSprite = new Sprite(128, 128);
        paperSprite.image = core.assets[PICT_PREFIX+'paper.png'];
        paperSprite.x = 180;
        paperSprite.y = 170;
        paperSprite.addEventListener(Event.TOUCH_START,function(e){
            clickHandButton(core.PAPER);
        });        
        core.rootScene.addChild(paperSprite);
        
        playerHandSprite = new Sprite(128, 128);
        playerHandSprite.x = 0;
        playerHandSprite.y = 200;
        playerHandSprite.visible = false;
        playerHandSprite.scale(0.6,0.6);
        core.rootScene.addChild(playerHandSprite);
        
        enemyHandSprite =  new Sprite(128, 128);
        enemyHandSprite.x = 100;
        enemyHandSprite.y = 40;
        enemyHandSprite.visible = false;
        enemyHandSprite.scale(1.7, 1.7);
        core.rootScene.addChild(enemyHandSprite);
        
        winnerLabel = new Label();
        winnerLabel.x = 100;
        winnerLabel.y = 20;
        winnerLabel.color = '#fff';
        winnerLabel.font = '40px cursive';
        winnerLabel.visible = false;
        core.rootScene.addChild(winnerLabel);
        
        resultSprite = new Sprite(320,320);
        resultSprite.image = core.assets[PICT_PREFIX+'result.png'];
        resultSprite.x = 0;
        resultSprite.y = 0;
        resultSprite.visible = false;
        core.rootScene.addChild(resultSprite);
    }
    
    function clickHandButton(hand) {
        rockSprite.visible = false;
        scissorsSprite.visible = false;
        paperSprite.visible = false;
        emitThrowHand(hand);
    }
    
    var emitThrowHand;
    core.onThrowHand = function(fnc){
        emitThrowHand = fnc;
    };
    
    core.emitJankenResult = function(data){
        var result = data.result;
        var playerHand = data[playerName];
        var enemyhand = data[enemyName];
        
        jankenReadyLabel.visible = false;
        rockSprite.visible = false;
        scissorsSprite.visible = false;
        paperSprite.visible = false;
        playerHandSprite.visible = true;
        playerHandSprite.image = getHandImage(playerHand);
        enemyHandSprite.visible = true;
        enemyHandSprite.image = getHandImage(enemyhand);
        /*
        winnerLabel.visible = true;
        if(result === playerName) {
            winnerLabel.text = 'かち';
        } else if(result === enemyName){
            winnerLabel.text = 'まけ';
        } else {
            winnerLabel.text = 'あいこ';
        }
        */
        resultSprite.visible = true;
        
        
    };
    
    function getHandImage(hand){
        if(hand === core.ROCK){
            return core.assets[PICT_PREFIX+'rock.png'];
        } else if (hand === core.SCISSORS) {
            return core.assets[PICT_PREFIX+'scissors.png'];
        } else if (hand === core.PAPER) {
            return core.assets[PICT_PREFIX+'paper.png'];
        }        
    }
    
    return core;
}
