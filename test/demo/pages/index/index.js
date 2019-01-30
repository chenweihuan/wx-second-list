Page({
  data: {},
  onReady() { this.second = this.selectComponent("#second") },
  showSecond() { this.second.showSecond() },
  chooseItem(e) { console.log('用户选择了' + e.detail) }
})