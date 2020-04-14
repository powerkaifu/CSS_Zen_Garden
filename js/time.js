function re_time() {
   setTimeout('re_time()', 1000);
   let mydate = new Date();
   let getFullYear = mydate.getFullYear();
   let getMonth = mydate.getMonth();
   let getDate = mydate.getDate();
   let getDay = mydate.getDay();
   let getH = mydate.getHours();
   let getM = mydate.getMinutes();
   let getS = mydate.getSeconds();

   switch (getMonth) {
      case 0:
         getMonth = 1;
         break;
      case 1:
         getMonth = 2;
         break;
      case 2:
         getMonth = 3;
         break;
      case 3:
         getMonth = 4;
         break;
      case 4:
         getMonth = 5;
         break;
      case 5:
         getMonth = 6;
         break;
      case 6:
         getMonth = 7;
         break;
      case 7:
         getMonth = 8;
         break;
      case 8:
         getMonth = 9;
         break;
      case 9:
         getMonth = 10;
         break;
      case 10:
         getMonth = 11;
         break;
      case 11:
         getMonth = 12;
         break;
   }
   switch (getDay) {
      case 0:
         getDay = '星期日';
         break;
      case 1:
         getDay = '星期一';
         break;
      case 2:
         getDay = '星期二';
         break;
      case 3:
         getDay = '星期三';
         break;
      case 4:
         getDay = '星期四';
         break;
      case 5:
         getDay = '星期五';
         break;
      case 6:
         getDay = '星期六';
         break;
   }

   let hours1 = getH % 10; //抓取 時 的個位數
   let minutes1 = getM % 10; //抓取 分 的個位數
   let seconds1 = getS % 10; ////抓取 秒 的個位數

   let hours2 = Math.floor(getH / 10); //抓取 時 的十位數
   let minutes2 = Math.floor(getM / 10); //抓取 分 的十位數
   let seconds2 = Math.floor(getS / 10); //抓取 秒 的十位數
   /*
    document.getElementById("fullyear").innerText =getFullYear;
    document.getElementById("month").innerText =getMonth;
    document.getElementById("date").innerText =getDate;
    document.getElementById("week").innerText =getDay;
    document.getElementById("h2").innerText =hours2;
    document.getElementById("h1").innerText =hours1;
    document.getElementById("m2").innerText=minutes2;
    document.getElementById("m1").innerText=minutes1;
    document.getElementById("s2").innerText=seconds2;
    document.getElementById("s1").innerText=seconds1;
*/
   if (minutes1 < 4) {
      $('#thunder_rain').fadeIn(5000);
      $('#particles').fadeOut(5000);
   } else {
      $('#thunder_rain').fadeOut(5000);
      $('#particles').fadeIn(5000);
   }
}
$('#thunder_rain').css('display', 'none');
$('#particles').css('display', 'none');

re_time();
