var res = {};

['bg', 'branch', 'panda', 'trunk'].forEach(n => {
    res[`${n}_png`] = `res/${n}.png`;
});

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
