var url = 'https://japi.juhe.cn/joke/content/text.from';
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
        jokes: self.data.jokes.concat(res.data.result.data),
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
    jokes: []
  },
  onLoad: function () {
    loadData(this);
  },
  onReachBottom: function () {
    loadData(this);
  },
  onPullDownRefresh: function () {
    this.setData({ jokes: [] });
    loadData(this);
  }
});
