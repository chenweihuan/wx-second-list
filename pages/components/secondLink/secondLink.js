// pages/components/secondLink/secondLink.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    list: { // 属性名
      type: Array,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: [
        {
          "id": 1,
          "left": "计算机/互联网/通信/电子",
          "right": [
            "计算机软件",
            "计算机硬件",
            "计算机服务(系统、数据服务、维修)",
            "通信/电信/网络设备",
            "通信/电信运营、增值服务",
            "互联网/电子商务",
            "网络游戏",
            "电子技术/半导体/集成电路",
            "仪器仪表/工业自动化"
          ]
        },
        {
          "id": 2,
          "left": "会计/金融/银行/保险",
          "right": [
            "会计/审计",
            "金融/投资/证券",
            "银行",
            "保险",
            "信托/担保/拍卖/典当"
          ]
        },
        {
          "id": 3,
          "left": "贸易/消费/制造/营运",
          "right": [
            "贸易/进出口",
            "批发/零售",
            "快速消费品(食品、饮料、化妆品)",
            "服装/纺织/皮革",
            "家具/家电/玩具/礼品",
            "奢侈品/收藏品/工艺品/珠宝",
            "办公用品及设备",
            "机械/设备/重工",
            "汽车及零配件"
          ]
        },
        {
          "id": 4,
          "left": "制药/医疗",
          "right": [
            "制药/生物工程",
            "医疗/护理/卫生",
            "医疗设备/器械"
          ]
        },
        {
          "id": 5,
          "left": "广告/媒体",
          "right": [
            "广告",
            "公关/市场推广/会展",
            "影视/媒体/艺术/文化传播",
            "文字媒体/出版",
            "印刷/包装/造纸"
          ]
        },
        {
          "id": 6,
          "left": "房地产/建筑",
          "right": [
            "房地产",
            "建筑/建材/工程",
            "家居/室内设计/装潢",
            "物业管理/商业中心"
          ]
        },
        {
          "id": 7,
          "left": "专业服务/教育/培训",
          "right": [
            "中介服务",
            "租赁服务",
            "专业服务(咨询、人力资源、财会)",
            "外包服务",
            "检测，认证",
            "法律",
            "教育/培训/院校",
            "学术/科研"
          ]
        },
        {
          "id": 8,
          "left": "服务业",
          "right": [
            "餐饮业",
            "酒店/旅游",
            "娱乐/休闲/体育",
            "美容/保健",
            "生活服务"
          ]
        },
        {
          "id": 9,
          "left": "物流/运输",
          "right": [
            "交通/运输/物流",
            "航天/航空"
          ]
        },
        {
          "id": 10,
          "left": "能源/原材料",
          "right": [
            "石油/化工/矿产/地质",
            "采掘业/冶炼",
            "电气/电力/水利",
            "新能源",
            "原材料和加工"
          ]
        },
        {
          "id": 11,
          "left": "政府/非营利组织/其他",
          "right": [
            "政府/公共事业",
            "非营利组织",
            "环保",
            "农/林/牧/渔",
            "多元化业务集团公司"
          ]
        }
      ], // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal) { } // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showModalStatus: false,
    currentTab:0,
    animationData:""
  },

  /**
   * 组件的方法列表
   */
  methods: {
   // 隐藏弹窗
    hideSecond() {
      this.setData({
        showModalStatus: false
      })
    },

    //展示弹窗
    showSecond() {
      var animation = wx.createAnimation({
        duration: 200,
        timingFunction: "linear",
        delay: 0
      })
      this.animation = animation
      animation.translateY(300).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: true
      })
      setTimeout(function () {
        animation.translateY(0).step()
        this.setData({
          animationData: animation.export()
        })
      }.bind(this), 200)
    },

    // 内部方法建议以下划线开头
    _hideEvent(){
      this.triggerEvent("hideEvent")
    },
    _swichNav(e){
      this.setData({
        currentTab: e.currentTarget.dataset.current
      })
      this.triggerEvent("swichEvent")
    },
    _chooseEvent(e){
      this.hideSecond();
      let profession = this.data.list[this.data.currentTab].right[e.currentTarget.dataset.current];
      this.triggerEvent("chooseEvent", profession);//把profession传到组件之外
    }
  }
})
