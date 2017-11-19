
var GameLayer = cc.Layer.extend({
    ctor:function () {
        this._super();

        var size = cc.winSize;
        var center = {
            x: size.width / 2,
            y: size.height / 2
        };

        this.bg = new cc.Sprite(res.bg_png);
        this.bg.attr(center);

        this.trunk = new cc.Sprite(res.trunk_png);
        this.trunk.attr(center);

        this.panda = new cc.Sprite(res.panda_png);
        this.panda.attr({x:center.x+G.PANDA.LEFT_X, y:center.y});

        this.addChild(this.bg);
        this.addChild(this.trunk);
        this.addChild(this.panda);

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        this.addChild(new GameLayer);
    }
});

