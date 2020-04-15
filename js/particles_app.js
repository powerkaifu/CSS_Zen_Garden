/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS(
   'particles-js',

   {
      particles: {
         // 粒子數量控制
         number: {
            //數量 0 ~ 600
            value: 70,
            // 密度，越小越密集
            density: {
               enable: true,
               // 數量太多，調小容易當掉 10000
               value_area: 500,
            },
         },
         // 粒子顏色控制
         color: {
            value: '#ffffff',
         },
         // 粒子圖形控制
         shape: {
            // circle（圓形）、edge（方形）、triangle（三角）、polygon（多邊形）、star（星形）、image（圖形）
            type: 'image',
            // 邊框線條
            stroke: {
               // 0 ~ 20
               width: 0,
               color: '#000000',
            },
            // 多邊形
            polygon: {
               // 3 ~ 12
               nb_sides: 5,
            },
            // 圖片，還要修改 type 為 image
            image: {
               src: 'images/firebug.png',
               width: 100,
               height: 100,
            },
         },
         // 透明度控制，
         opacity: {
            // 透明度 0.01 ~ 1
            value: 1,
            random: true,
            anim: {
               // 是否啟動透明度變化，閃爍
               enable: true,
               // 閃爍變化速度 0.1 ~ 10
               speed: 10,
               // 最小透明度 0.01 ~ 1
               opacity_min: 0.5,
               // 是否同步
               sync: true,
            },
         },
         // 粒子尺寸控制（大小）
         size: {
            // 0.1 ~ 500
            value: 6,
            random: true,
            // 尺寸大小變化，siz_min 一定要比 value 小
            anim: {
               enable: false,
               // 變化速度，0 ~ 300
               speed: 4,
               // 最小值 0.01~100，要比 value 還小
               size_min: 0.3,
               sync: false,
            },
         },
         line_linked: {
            enable: false,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
         },
         // 移動控制
         move: {
            // 是否啟動
            enable: true,
            // 速度
            speed: 1,
            // 方向
            direction: 'none',
            random: true,
            // 是否停在原地動作
            straight: false,
            // 移出或彈回，out,bounce
            out_mode: 'bounce',
            bounce: true,
            attract: {
               enable: false,
               rotateX: 600,
               rotateY: 600,
            },
         },
      },
      // 互動
      interactivity: {
         // 此設定可以讓 小螢幕的點點 正常
         detect_on: 'window',
         // 滑鼠事件
         events: {
            onhover: {
               enable: true,
               // grab、bubble、repulse
               mode: 'bubble',
            },
            onclick: {
               enable: false,
               // push、remove、bubble、repulse
               mode: 'repulse',
            },
            resize: true,
         },

         // 滑鼠事件各種效果控制
         modes: {
            grab: {
               distance: 400,
               line_linked: {
                  opacity: 1,
               },
            },
            // 泡泡效果
            bubble: {
               distance: 250,
               // 0 ~ 500
               size: 0,
               // 0 ~ 10
               duration: 2,
               // 0.1 ~ 1
               opacity: 0,
               speed: 3,
            },
            repulse: {
               distance: 400,
               duration: 0.4,
            },
            push: {
               particles_nb: 4,
            },
            remove: {
               particles_nb: 2,
            },
         },
      },
      retina_detect: true,
   }
);
