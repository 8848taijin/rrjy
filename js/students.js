$(function(){
  var users={
    caoKun:'../images/studentsImg/caoKun.png',
    changBin:'../images/studentsImg/changBin.png',
    chenChuan:'../images/studentsImg/chenChuan.png',
    chenJinLong:'../images/studentsImg/chenJinLong.png',
    haoTianWang:'../images/studentsImg/haoTianWang.png',
    liuPan:'../images/studentsImg/liuPan.png',
    luoHao:'../images/studentsImg/luoHao.png',
    qianChaoYa:'../images/studentsImg/qianChaoYa.png',
    songJinTao:'../images/studentsImg/songJinTao.png',
    sunJian:'../images/studentsImg/sunJian.png',
    sunYong:'../images/studentsImg/sunYong.png',
    suoWenZhou:'../images/studentsImg/suoWenZhou.png',
    wangCunXiao:'../images/studentsImg/wangCunXiao.png',
    wangJingLin:'../images/studentsImg/wangJingLin.png',
    wangQingHua:'../images/studentsImg/wangQingHua.png',
    wangYongHao:'../images/studentsImg/wangYongHao.png',
    wangZhiLong:'../images/studentsImg/wangZhiLong.png',
    wuZao:'../images/studentsImg/wuZao.png',
    yangJingYan:'../images/studentsImg/yangJingYan.png',
    zhaoShaoKun:'../images/studentsImg/zhaoShaoKun.png'
  },name;
  for(name in users){
    $('.studentList .row').append('<div class="every col-xs-12 col-sm-12 col-md-6 "><img src="'+users[name]+'" alt=""></div>');
  }
});
