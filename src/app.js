
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;
        var center = {
            x: size.width / 2,
            y: size.height / 2
        };

        this.bg = new cc.Sprite(res.bg_png);
        this.bg.attr(center);
        this.addChild(this.bg, 0);

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

