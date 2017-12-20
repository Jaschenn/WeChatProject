// deliveryAddress/selectMenu/selectMenu.js
Page({
  data: {
    isHaveAddress: false,
    isHaveCoupons: false,
    addressInfo: null
    },

    addAdress: function () {
      wx.navigateTo({
        url: '../address/address',

      })
    },
    selectToherAdress: function () {
      wx.navigateTo({
        url: '../addresslist/addresslist',

      })
    },


    onLoad: function (options) {
      // 页面初始化 options为页面跳转所带来的参数
    },

    onReady: function () {
      // 页面渲染完成
    },

    onShow: function () {
      // 页面显示
      var otherAddressInfo = getApp().globalData.otherAddressInfo;
      if (otherAddressInfo == null) {
        var addressList = wx.getStorageSync('address');
        for (var key in addressList) {
          if (addressList[key].isDefult) {
            this.setData({
              addressInfo: addressList[key],
              isHaveAddress: true,
            });
          }
        }
        if (this.data.addressInfo == null && addressList.length > 0) {
          this.setData({
            addressInfo: addressList[0],
            isHaveAddress: true,
          });
        }
      } else {
        this.setData({
          addressInfo: otherAddressInfo,
          isHaveAddress: true,
        });
      }

    },
    onHide: function () {
      // 页面隐藏
    },
    onUnload: function () {
      // 页面关闭
      getApp().globalData.otherAddressInfo = null;
    },
  
})
