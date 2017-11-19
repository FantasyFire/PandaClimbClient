// 常量
const G = {
    DW: 540, // 设计宽度
    DH: 900, // 设计高度
};

G.PANDA = { // 熊猫相关常量
    LEFT_X: -70, // 熊猫在左边时的x轴偏移量
    RIGHT_X: 70, // 熊猫在右边时的x轴偏移量
};

G.TREE = { // 树相关常量
    ATTR: [
        {}
    ]
};

G.TEST = { // 用于离线测试
    SEED: 20171109, // 随机数种子
    TREE: {
        length: 10
    }
}

// 游戏对象
const Game = (function () {
    let ctor = function () {

    };

    let p = ctor.prototype;
    p.init = function (seed) {
        G.RANDOM_SEED = seed;
        this.chance = new Chance(seed);
    };
}());