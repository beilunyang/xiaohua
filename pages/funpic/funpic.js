var url = 'https://japi.juhe.cn/joke/img/text.from';
var app = getApp();
var loadData = function (self) {
    wx.request({
        url,
        data: {
            key: app.globalData.apiKey,
            page: self.data.page,
            pagesize: 20
        },
        method: 'GET',
        success: function (res) {
            self.setData({
                funpics: self.data.funpics.concat(res.data.result.data),
                page: self.data.page + 1
            });
        },
        fail: function () {
            console.log('request fail');
        }
    });
}

Page({
    data: {
        page: 1,
        funpics: []
    },
    onLoad: function () {
        loadData(this);
    },
    onReachBottom: function () {
        loadData(this);
    },
    onPullDownRefresh: function () {
        this.setData({ funpics: [] });
        loadData(this);
    }
    // 虽然wx提供了mode，但并没什么软用，不知几时能直接操作style
});