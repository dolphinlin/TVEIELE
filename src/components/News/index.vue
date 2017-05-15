<template lang="html">
  <div class="container-fluid">
    <div class="row">
      <div class="panel panel-primary">
        <!-- Default panel contents -->
        <div class="panel-heading">活動公告 - <strong>「技職教育學刊」徵稿啟事</strong></div>
        <!-- Table -->
        <pre>
一、《技職教育學刊》(International Journal of Technological and Vocational Education Studies)為純學術性期刊，每年六月與十二月定期出刊，竭誠歡迎海內外學者賜稿，發表技職教育相關之學術研究論文。
二、徵稿及出刊：
本刊徵稿對象為國內外大專院校教師、研究生及學術研究機構之研究員。
來稿以尚未發表於正式出版發行之學術性期刊論文為限，本刊不接受已通過之原學位論文，但若以原論題為基礎，進行重整或拓展者，則不在此限。
來稿須具備「學術論文」之實證性、理論性、系統性，但若為翻譯文稿、作品賞析、報導性文章、教學講義、讀書心得等恕不接受。
投稿方式：我要投稿。
投稿本刊稿件經匿名審查人審查後，作者需依據審查意見進行修正。
來稿皆需經編輯委員會送請兩位相關領域的專家學者評審，若審查意見相左時，則送第三位審查委員。
來稿皆須附中文摘要，中文約 300 字，並在摘要之後列明 3-5 個關鍵詞。
相關資料：「<a href="http://www.tve.yuntech.edu.tw:8080/file/1.doc">投稿規範</a>」、「<a href="http://www.tve.yuntech.edu.tw:8080/file/2.doc">投稿者資料表</a>」、「<a href="http://www.tve.yuntech.edu.tw:8080/file/3.doc">投稿者授權書</a>」
徵稿主題
（一）課程發展與教學設計
（二）師資培育與專業發展
（三）學校經營與行政管理
（四）教育行政與領導
（五）數位與新興科技創新教學
（六）學生輔導及職業發展
（七）技職教育政策與制度
（八）技職人力發展與教育訓練

<a href="http://www.tve.yuntech.edu.tw:8080/file/4.pdf">技職教育學刊第一卷第一期(創刊號)</a>

        </pre>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      date: Date.now(),
      organizer: '',
      coorganizer: '',
      place: '',
      content: '',
      loading: false,
      error: false
    }
  }
}
</script>

<style lang="css">
</style>
