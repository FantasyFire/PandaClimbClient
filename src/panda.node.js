var PandaNode = cc.Node.extend({
    ctor: function () {
        this._super();
        this.sprite = new cc.Sprite(res.panda_png);
        this.addChild(this.sprite);
    }
});