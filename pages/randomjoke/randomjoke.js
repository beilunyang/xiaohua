var app = getApp();
var url = "https://v.juhe.cn/joke/randJoke.php";

var loadData = function (self) {
  wx.request({
    url: url,
    data: {
      key: app.globalData.apiKey
    },
    method: 'GET',
    success: function (res) {
      self.setData({
        jokes: self.data.jokes.concat(res.data.result)
      });
    },
    fail: function () {
      console.log('request fail');
    }
  });
}

Page({
  data: {
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