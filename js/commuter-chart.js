(function () {
  require.config({
    paths: {
      echarts: "echarts",
    },
  });

  require(
    [
      "echarts",
      "echarts/chart/main",
      "echarts/chart/map"
    ],
    function (echarts, BMapExtension) {
      $('#map').css({
        height:$('body').height(),
        width: $('body').width()
      });

      // 初始化地图
      var BMapExt = new BMapExtension($('#map')[0], BMap, echarts, {
        enableMapClick: false
      });
      var map = BMapExt.getMap();
      var container = BMapExt.getEchartsContainer();

      // 天河城
      var startPoint = {
        x: 113.328755,
        y: 23.137588
      };

      // 初始化地图,设置中心点坐标和地图级别
      var point = new BMap.Point(startPoint.x, startPoint.y);

      // 创建Map实例
      map.centerAndZoom(point, 17);
      // map.centerAndZoom("南山",);

      // 开启鼠标滚轮缩放
      map.enableScrollWheelZoom(true);

      // 地图自定义样式
      map.setMapStyle({
        styleJson: [
          {
            'featureType': 'land',     //调整陆地颜色
            'elementType': 'geometry',
            'stylers': {
              'color': '#081734'
            }
          },
          {
            'featureType': 'building',   //调整建筑物颜色
            'elementType': 'geometry',
            'stylers': {
              'color': '#04406F'
            }
          },
          {
            'featureType': 'building',   //调整建筑物标签是否可视
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'highway',     //调整高速道路颜色
            'elementType': 'geometry',
            'stylers': {
              'color': '#015B99'
            }
          },
          {
            'featureType': 'highway',    //调整高速名字是否可视
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'arterial',   //调整一些干道颜色
            'elementType': 'geometry',
            'stylers': {
              'color':'#003051'
            }
          },
          {
            'featureType': 'arterial',
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'green',
            'elementType': 'geometry',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'water',
            'elementType': 'geometry',
            'stylers': {
              'color': '#044161'
            }
          },
          {
            'featureType': 'subway',    //调整地铁颜色
            'elementType': 'geometry.stroke',
            'stylers': {
              'color': '#003051'
            }
          },
          {
            'featureType': 'subway',
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'railway',
            'elementType': 'geometry',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'railway',
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'all',     //调整所有的标签的边缘颜色
            'elementType': 'labels.text.stroke',
            'stylers': {
              'color': '#313131'
            }
          },
          {
            'featureType': 'all',     //调整所有标签的填充颜色
            'elementType': 'labels.text.fill',
            'stylers': {
              'color': '#FFFFFF'
            }
          },
          {
            'featureType': 'manmade',
            'elementType': 'geometry',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'manmade',
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'local',
            'elementType': 'geometry',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'local',
            'elementType': 'labels',
            'stylers': {
              'visibility': 'off'
            }
          },
          {
            'featureType': 'subway',
            'elementType': 'geometry',
            'stylers': {
              'lightness': -65
            }
          },
          {
            'featureType': 'railway',
            'elementType': 'all',
            'stylers': {
              'lightness': -40
            }
          },
          {
            'featureType': 'boundary',
            'elementType': 'geometry',
            'stylers': {
              'color': '#8b8787',
              'weight': '1',
              'lightness': -29
            }
          }
        ]
      });

      option = {
        color: ['gold', 'aqua', 'lime', 'red', 'blue'],
        title : {
          text: '广州--通勤图--mock',
          subtext: '',
          x:'center',
          textStyle: {
            color: '#fff',
            fontSize: 25
          }
        },
        legend: {
          orient: 'vertical',
          x:'left',
          data:['全部', '上班人群', '购物人群','买菜人群','流浪人群'],
          selectedMode: 'single',
          selected:{
            '上班人群' : false,
            '购物人群' : false,
            '买菜人群' : false,
            '流浪人群' : false,
          },
          textStyle : {
            color: '#fff',
            fontSize: 15
          },
          padding:[20, 5, 5, 20]
        },
        tooltip : {
          show: true,
          trigger: 'item',
          formatter: function (v) {
            if (v[2].tooltipValue != null) {
              return v[2].tooltipValue;
            } else {
             return v[1];
            }
          }
        },
        toolbox: {
          show : false,
          orient : 'vertical',
          x: 'right',
          y: 'center',
          feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
          }
        },
        series: [
          {
            name: '全部',
            type:'map',
            mapType: 'none',
            data:[],

            markLine: {
              Symbol:['none', 'arrow'],
              symbolSize:['0', '0.1'],
              smooth:true,
              smooth:10,
              effect : {
                show: true,
                scaleSize: 1,
                period: 30,
                color: '#fff',
                shadowBlur: 10
              },
              itemStyle : {
                color: 'red',
                normal: {
                  color:function(param){
                    return(param.data[0].value.colorValue);
                  },
                  borderWidth:1,
                  lineStyle: {
                    type: 'dashed',
                    width: 1.5,
                    shadowBlur: 10
                  },
                  label:{show:false}
                }
              },

              data: [
                [{name:'p401'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p402'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p403'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p404'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p405'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p406'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p407'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p408'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p409'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p410'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p411'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p412'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p413'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p414'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p415'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p416'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p417'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p418'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p419'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p420'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p421'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p422'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p423'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p424'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p425'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p426'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p427'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p428'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p429'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p430'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p431'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p432'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p433'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p434'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p435'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p436'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p437'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p438'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p439'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p440'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p441'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p442'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p443'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p444'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p445'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p446'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p447'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p448'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p449'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p450'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p451'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p452'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p453'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p454'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p455'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p456'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p457'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p458'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p459'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p460'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p461'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p462'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p463'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p464'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p465'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p466'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p467'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p468'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p469'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p470'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p471'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p472'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p473'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p474'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p475'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p476'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p477'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p478'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p479'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p480'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p481'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p482'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p483'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p484'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p485'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p486'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p487'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p488'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p489'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p490'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p491'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p492'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p493'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p494'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p495'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p496'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p497'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p498'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p499'}, {name:'p900',value:{colorValue:'grey'}}],
                [{name:'p500'}, {name:'p900',value:{colorValue:'grey'}}]
              ]
            },
            geoCoord:{
              'p900': [113.3302,23.13848],
              'p910': [113.3332,23.13828],
              'p920': [113.3252,23.13968],
              'p930': [113.3362,23.13878],
              'p940': [113.3332,23.13948],
              'p401': [113.3270,23.13743],
              'p402': [113.3243,23.13767],
              'p403': [113.3303,23.13735],
              'p404': [113.3338,23.13985],
              'p405': [113.3291,23.13972],
              'p406': [113.3328,23.13755],
              'p407': [113.3322,23.13563],
              'p408': [113.3266,23.13853],
              'p409': [113.3262,23.13382],
              'p410': [113.3311,23.13829],
              'p411': [113.3332,23.13532],
              'p412': [113.3347,23.13655],
              'p413': [113.3264,23.13744],
              'p414': [113.3283,23.13829],
              'p415': [113.3247,23.13500],
              'p416': [113.3267,23.13889],
              'p417': [113.3222,23.13654],
              'p418': [113.3241,23.13749],
              'p419': [113.3295,23.14119],
              'p420': [113.3332,23.14208],
              'p421': [113.3258,23.13706],
              'p422': [113.3322,23.13318],
              'p423': [113.3275,23.13652],
              'p424': [113.3252,23.13836],
              'p425': [113.3291,23.14020],
              'p426': [113.3279,23.13774],
              'p427': [113.3288,23.13811],
              'p428': [113.3291,23.13845],
              'p429': [113.3345,23.13943],
              'p430': [113.3314,23.13802],
              'p431': [113.3290,23.13699],
              'p432': [113.3271,23.13750],
              'p433': [113.3270,23.14132],
              'p434': [113.3310,23.13812],
              'p435': [113.3272,23.13590],
              'p436': [113.3314,23.13231],
              'p437': [113.3292,23.13313],
              'p438': [113.3330,23.13989],
              'p439': [113.3247,23.13887],
              'p440': [113.3219,23.13803],
              'p441': [113.3285,23.13254],
              'p442': [113.3268,23.13326],
              'p443': [113.3307,23.13484],
              'p444': [113.3241,23.13730],
              'p445': [113.3280,23.14244],
              'p446': [113.3283,23.13171],
              'p447': [113.3291,23.14070],
              'p448': [113.3299,23.13923],
              'p449': [113.3334,23.13863],
              'p450': [113.3300,23.13776],
              'p451': [113.3313,23.14453],
              'p452': [113.3292,23.13621],
              'p453': [113.3287,23.14180],
              'p454': [113.3323,23.14031],
              'p455': [113.3329,23.13609],
              'p456': [113.3287,23.13430],
              'p457': [113.3304,23.13721],
              'p458': [113.3312,23.13602],
              'p459': [113.3286,23.14076],
              'p460': [113.3301,23.13384],
              'p461': [113.3310,23.13586],
              'p462': [113.3259,23.13477],
              'p463': [113.3316,23.13916],
              'p464': [113.3255,23.13462],
              'p465': [113.3285,23.13740],
              'p466': [113.3273,23.13568],
              'p467': [113.3316,23.13670],
              'p468': [113.3263,23.13498],
              'p469': [113.3277,23.13713],
              'p470': [113.3323,23.13211],
              'p471': [113.3304,23.13676],
              'p472': [113.3260,23.14195],
              'p473': [113.3264,23.13867],
              'p474': [113.3290,23.13605],
              'p475': [113.3329,23.13798],
              'p476': [113.3274,23.13843],
              'p477': [113.3274,23.13889],
              'p478': [113.3291,23.14105],
              'p479': [113.3296,23.13476],
              'p480': [113.3279,23.14075],
              'p481': [113.3265,23.13461],
              'p482': [113.3310,23.13907],
              'p483': [113.3293,23.14134],
              'p484': [113.3248,23.13829],
              'p485': [113.3294,23.13928],
              'p486': [113.3263,23.13722],
              'p487': [113.3314,23.13599],
              'p488': [113.3346,23.14013],
              'p489': [113.3336,23.14240],
              'p490': [113.3296,23.14111],
              'p491': [113.3266,23.13513],
              'p492': [113.3243,23.13664],
              'p493': [113.3265,23.13805],
              'p494': [113.3294,23.13123],
              'p495': [113.3259,23.13996],
              'p496': [113.3287,23.14130],
              'p497': [113.3273,23.13609],
              'p498': [113.3290,23.13569],
              'p499': [113.3264,23.13586],
              'p500': [113.3287,23.13662]
            }
          },
          {
            name: '上班人群',
            type: 'map',
            mapType: 'none',
            data:[],

            markLine: {
              Symbol:['none', 'arrow'],
              symbolSize:['0', '0.1'],
              smooth:true,
              smooth:10,
              effect : {
                show: true,
                scaleSize: 1,
                period: 30,
                color: '#fff',
                shadowBlur: 10
              },
              itemStyle : {
                color: 'red',
                normal: {
                  color:function(param){
                    return(param.data[0].value.colorValue);
                  },
                  borderWidth:1,
                  lineStyle: {
                    type: 'dashed',
                    width: 1.5,
                    shadowBlur: 10
                  },
                  label:{show:false}
                }
              },

              data: [
                [{name:'p401'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p402'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p403'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p404'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p405'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p406'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p407'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p408'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p409'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p410'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p411'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p412'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p413'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p414'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p415'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p416'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p417'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p418'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p419'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p420'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p421'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p422'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p423'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p424'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p425'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p426'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p427'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p428'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p429'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p430'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p431'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p432'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p433'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p434'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p435'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p436'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p437'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p438'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p439'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p440'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p441'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p442'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p443'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p444'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p445'}, {name:'p910',value:{colorValue:'aqua'}}],
                [{name:'p446'}, {name:'p910',value:{colorValue:'aqua'}}],
              ]
            },
          },
          {
            name: '购物人群',
            type:'map',
            mapType: 'none',
            data:[],

            markLine: {
              Symbol:['none', 'arrow'],
              symbolSize:['0', '0.1'],
              smooth:true,
              smooth:10,
              effect : {
                show: true,
                scaleSize: 1,
                period: 30,
                color: '#fff',
                shadowBlur: 10
              },
              itemStyle : {
                color: 'red',
                normal: {
                  color:function(param){
                    return(param.data[0].value.colorValue);
                  },
                  borderWidth:1,
                  lineStyle: {
                    type: 'dashed',
                    width: 1.5,
                    shadowBlur: 10
                  },
                  label:{show:false}
                }
              },

              data: [
                [{name:'p440'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p441'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p442'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p443'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p444'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p445'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p446'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p447'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p448'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p449'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p450'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p451'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p452'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p453'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p454'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p455'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p456'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p457'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p458'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p459'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p460'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p461'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p462'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p463'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p464'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p465'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p466'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p467'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p468'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p469'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p470'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p471'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p472'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p473'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p474'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p475'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p476'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p477'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p478'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p479'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p480'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p481'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p482'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p483'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p484'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p485'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p486'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p487'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p488'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p489'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p490'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p491'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p492'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p493'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p494'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p495'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p496'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p497'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p498'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p499'}, {name:'p920',value:{colorValue:'lime'}}],
                [{name:'p500'}, {name:'p920',value:{colorValue:'lime'}}]
              ]
            },
          },
          {
            name: '买菜人群',
            type:'map',
            mapType: 'none',
            data:[],

            markLine: {
              Symbol:['none', 'arrow'],
              symbolSize:['0', '0.1'],
              smooth:true,
              smooth:10,
              effect : {
                show: true,
                scaleSize: 1,
                period: 30,
                color: '#fff',
                shadowBlur: 10
              },
              itemStyle : {
                color: 'red',
                normal: {
                  color:function(param){
                    return(param.data[0].value.colorValue);
                  },
                  borderWidth:1,
                  lineStyle: {
                    type: 'dashed',
                    width: 1.5,
                    shadowBlur: 10
                  },
                  label:{show:false}
                }
              },

              data: [
                [{name:'p401'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p402'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p403'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p404'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p405'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p406'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p407'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p408'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p409'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p410'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p411'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p412'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p413'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p414'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p415'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p416'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p417'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p418'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p419'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p420'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p421'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p422'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p423'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p424'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p425'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p426'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p427'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p428'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p429'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p430'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p431'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p432'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p479'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p480'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p481'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p482'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p483'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p484'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p485'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p486'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p487'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p488'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p489'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p490'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p491'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p492'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p493'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p494'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p495'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p496'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p497'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p498'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p499'}, {name:'p930',value:{colorValue:'#FF6347'}}],
                [{name:'p500'}, {name:'p930',value:{colorValue:'#FF6347'}}]
              ]
            },
          },
          {
            name: '流浪人群',
            type:'map',
            mapType: 'none',
            data:[],

            markLine: {
              Symbol:['none', 'arrow'],
              symbolSize:['0', '0.1'],
              smooth:true,
              smooth:10,
              effect : {
                show: true,
                scaleSize: 1,
                period: 30,
                color: '#fff',
                shadowBlur: 10
              },
              itemStyle : {
                color: 'red',
                normal: {
                  color:function(param){
                    return(param.data[0].value.colorValue);
                  },
                  borderWidth:1,
                  lineStyle: {
                    type: 'dashed',
                    width: 1.5,
                    shadowBlur: 10
                  },
                  label:{show:false}
                }
              },

              data: [
                [{name:'p401'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p406'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p407'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p408'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p409'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p410'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p411'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p412'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p413'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p414'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p415'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p416'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p417'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p450'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p451'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p452'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p453'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p454'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p455'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p456'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p457'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p458'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p459'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p460'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p461'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p462'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p463'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p464'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p465'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p466'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p467'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p468'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p469'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p493'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p494'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p495'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p496'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p497'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p498'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p499'}, {name:'p940',value:{colorValue:'#008080'}}],
                [{name:'p500'}, {name:'p940',value:{colorValue:'#008080'}}]
              ]
            },
          },
        ]
      };

      if (myChart && myChart.dispose) {
        myChart.dispose();
      }

      var myChart = BMapExt.initECharts(container);
      window.onresize = myChart.onresize;
      BMapExt.setOption(option, true);
    }
  );
})();
