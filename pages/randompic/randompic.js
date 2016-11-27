var url = "https://v.juhe.cn/joke/randJoke.php";
var app = getApp();

var loadData = function (self) {
  wx.request({
    url,
    data: {
      key: app.globalData.apiKey,
      type: 'pic'
    },
    method: 'GET',
    success: function (res) {
      self.setData({
        funpics: self.data.funpics.concat(res.data.result)
      });
    },
    fail: function () {
      console.log('request fail');
    }
  });
}

Page({
  data: {
    funpics: []
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