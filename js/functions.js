      function yubSearch(nub) {
        yubComm(nub);
        return false;
      }

      function lsshort(arr1,arr2,arr3) {
        var allArray = [];
        var a = arguments;
        for (var i = 0; i < arguments.length; i++) {
          for (var l = 0; l < arguments[i].length; l++) {
            allArray.push(arguments[i][l].n + "\t" + arguments[i][l].d);
          }
        }
        window.allArray = allArray.sort();
      }

      function lslong(arr1,arr2) {
        var longArray = [];
        if (modson == "off") {
          for (var i = 0; i < arr1.length; i++) {
            longArray.push(arr1[i].n + "\t" + arr1[i].d + "\t" + arr1[i].a + "\t" + arr1[i].f);
          }
        } else {
          for (var i = 0; i < arr1.length; i++) {
            longArray.push(arr1[i].n + "\t" + arr1[i].d + "\t" + arr1[i].a + "\t" + arr1[i].f);
          }
          for (var i = 0; i < arr2.length; i++) {
            longArray.push(arr2[i].n + "\t" + arr2[i].d + "\t" + arr2[i].a + "\t" + arr2[i].f);
          }
        }
        window.longArray = longArray.sort();
      }

      function uniq(a) {
        a = a.sort();
        var r = [a[0]];
        for (var i = 1; i < a.length; i++) {
          if (a[i-1] !== a[i]) {
            r.push(a[i]);
          }
        }
        return r;
      }


      function uniqd(a) {
        tmp = new Array(0);
        tmp2 = new Array(0);
          for(i=0;i<a.length;i++){
            if(!contains(tmp, a[i])){
              tmp.length+=1;
              tmp[tmp.length-1]=a[i];
            } else {
              tmp2.length+=1;
              tmp2[tmp2.length-1]=a[i];
            }
          }
        return tmp2;
      }

      function contains(a, e) {
        for(j=0;j<a.length;j++)if(a[j]==e)return true;
        return false;
      }

      function delimit(a) {
        var b = new Array(0);
        if (/^\-t /.test(a)) {
          d = a.replace(/^\-t (.*?) .*/,"$1");
          b = a.replace(/^\-t (.*?) /,"").split(d);
        } else if (/\t/.test(a)) {
          b = a.split("\t");
        } else {
          b = a.split(" ");
        }
        return b;
      }

      function shuffle(a) {
        var c = a.length, t, r;
        while (0 !== c) {
          r = Math.floor(Math.random() * c);
          c -= 1;
          t = a[c];
          a[c] = a[r];
          a[r] = t;
        }
      return a;
      }

      function createYub() {
        var scname = document.getElementById("scname").value.toLowerCase();
        var saddr = document.getElementById("saddr").value;
        var defurl = document.getElementById("defurl").value;
        var descr = document.getElementById("descr").value.replace(/"/g,'\\"');
        prompt("Copy the code below to your mods.js file:", "  {\"n\":\"" + scname + "\", \"a\":\"" + saddr + "\", \"d\":\"" + descr + "\", \"f\":\"" + defurl + "\"},");
      }

      function timer() {
        var sw = document.getElementById("timer");
        sw.style.display = '';

        window.sec = min = hour = 0;
        window.clock = 0;

      }

      function stopWatch() {
        clearTimeout(window.clock);
        window.sec++;
          if (window.sec >=59){
            window.sec = 0;
            min++;
          }
          if (min>=59){
            min=0;
            hour++;
          }
        document.getElementById("sec").innerHTML = (window.sec < 10) ? "0" + window.sec : window.sec;
        document.getElementById("min").innerHTML = (min < 10) ? "0" + min : min;
        document.getElementById("hour").innerHTML = (hour < 10) ? "0" + hour : hour;
        window.clock = setTimeout("stopWatch()",1000);
      }

      function pause() {
        clearTimeout(window.clock);
        return false;
      }

      function play() {
        stopWatch();
        return false;
      }

      function reset() {
        clearTimeout(window.clock);
        window.sec = min = hour = 0;
        document.getElementById("sec").innerHTML = "00";
        document.getElementById("min").innerHTML = "00";
        document.getElementById("hour").innerHTML = "00";
        return false;
      }

      function clearTimer() {
        document.getElementById("timer").style.display = "none";
      }
