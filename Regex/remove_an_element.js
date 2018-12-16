var str = '<div class="inner-class"><a href="interfaces?type=14" style="font-size:18px; color: #00a0e9; font-weight:bold;">基金接口</a><div style="padding-top: 6px;"><a href="interfaces?type=43" target="_blank">基金基本资料</a><em>|</em><a href="interfaces?type=44" target="_blank">发行送配</a><em>|</em><a href="interfaces?type=46" target="_blank">业绩表现</a><em>|</em><a href="interfaces?type=47" target="_blank">基金规模</a><em>|</em><a href="interfaces?type=48" target="_blank">资产配置</a><em>|</em><a href="interfaces?type=49" target="_blank">基金财务数据</a><em>|</em><a href="interfaces?type=50" target="_blank">基金评级</a><em>|</em><a href="interfaces?type=51" target="_blank">基金专题统计</a><em>|</em><a href="interfaces?type=52" target="_blank">基金衍生数据</a><em>|</em></div></div>';

var regx = /<em>\|<\/em>(?=<\/div><\/div>)/gm;

str = str.replace(regx, '');
console.log(str);

// var i = str.lastIndexOf('<em>|</em>');
// console.log(i);

// str = "http://example.com/image.png";
// str = str.replace(/\.(?=[^.]*$)/, "@2x.");
// console.log(str);