      function yubComm(nub) {
        var nublc = nub.toLowerCase();

        var finished = "";

        var o = document.getElementById("output");
        var y = document.getElementById("yub");

        if (nublc == "count") {
          var total = 0;
          if (modson == "off") {
            total = engines.length + tips.length;
          } else {
            total = engines.length + tips.length + mods.length;
          }
          o.innerHTML = "There are currently " + total + " commands available!";
          y.value = "";
          finished = "done";
        }

        if (nublc == "clear") {
          o.innerHTML = "";
          document.getElementById("create").style.display = "none";
          document.getElementById("timer").style.display = "none";
          y.value = "";
          finished = "done";
        }

        if (nublc == "dup") {
          if (modson == "off") {
            lsshort(engines,tips);
          } else {
            lsshort(engines,tips,mods);
          }
          var dupArr = [];
          for (var i = 0; i < allArray.length; i++) {
            dupArr.push(allArray[i].replace(/\t.*/, ""));
          }
          var uniqArr = uniqd(dupArr);
          if (uniqArr.length == 0) {
            o.innerHTML = "no duplicates found!";
          } else {
            o.innerHTML = uniqArr.join("<br>");
          }
          finished = "done";
        }

        var shcut = nublc.replace(/^([>a-z]+) .*/,"$1");
        var sterm = nub.replace(/^[>A-Za-z]+ (.*)/,"$1");
        var stermlc = sterm.toLowerCase();

        addr = "";
        loc = "";

        if (shcut == "list" || shcut == "ls") {
          if (/\s/.test(nub) == false) {
            shcutList = "<table>";
            if (modson == "off") {
              lsshort(engines,tips);
            } else {
              lsshort(engines,tips,mods);
            }
            for (var i = 0; i < allArray.length; i++) {
              shcutList = shcutList + "<tr><td>" + allArray[i].replace(/\t/,"</td><td>") + "</td></tr>";
            }
            o.innerHTML = shcutList + "</table>";
            y.value = "";
          } else {
            yubSearch("whatis " + sterm);
            y.value = "";
          }
          finished = "done";
        }

        if (/^((https*|ftp|file|chrome):\/\/)|(about:)/.test(nub)) {
          addr = nub;
          window.location=addr;
          finished = "done";
        }

        if (/^\!/.test(nub)) {
          addr = nub.replace(/^\! */,"http://");
          window.location=addr;
          finished = "done";
        }

        if (shcut == "search" || shcut == "s") {
          if (/\s/.test(nub) == false) {
            o.innerHTML = "Please enter a search string.";
          } else {
            if (modson == "off") {
              lslong(engines);
            } else {
              lslong(engines,mods);
            }
            var re = new RegExp(sterm.toLowerCase());
            var shcutList = "<table>";
            var noresult = 0;
            for (var i = 0; i < longArray.length; i++) {
              if (re.test(longArray[i].toLowerCase())) {
                var l = longArray[i].split("\t");
                shcutList = shcutList + "<tr><td>" + l[0] + "</td><td>" + l[1] + "</td></tr>";
                noresult++;
              }
            }
            o.innerHTML = shcutList + "</table>";
            y.value = "";
          }
          if (noresult == 0) {
            o.innerHTML = "No matching commands found. Try a different search string!";
          }
          finished = "done";
        }


        if (shcut == "whatis" || shcut == "w") {
          if (/\s/.test(nub) == false) {
            o.innerHTML = "Please enter a command name.";
          } else {
            if (modson == "off") {
              lsshort(engines,tips);
            } else {
              lsshort(engines,tips,mods);
            }
            var noresult = 0;
            for (var i = 0; i < allArray.length; i++) {
              if (allArray[i].replace(/\s*\t.*/, "") == sterm) {
                o.innerHTML = allArray[i].replace(/\t/, " = ");
                noresult++;
              }
            }
            if (noresult == 0) {
              o.innerHTML = "Command \"" + sterm + "\" not found. Please try again.";
            }
          }
          finished = "done";
        }

        if (shcut == "where" || shcut == "wh") {
          if (/\s/.test(nub) == false) {
            o.innerHTML = "Please enter a command name.";
          } else {
            if (modson == "off") {
              lslong(engines);
            } else {
              lslong(engines,mods);
            }
            var noresult = 0;
            for (var i = 0; i < longArray.length; i++) {
              var l = longArray[i].split("\t");
              if (l[0] == sterm) {
                o.innerHTML = l[0] + " = " + l[1] + "<br><div class='grey'>Search: " + l[2] + "<br>Default: " + l[3] + "</div>";
                noresult++;
                y.value = "";
              }
            }
          if (noresult == 0) {
            o.innerHTML = "Command \"" + sterm + "\" not found. Please try again.";
          }
          }
          finished = "done";
        }

        if (shcut == "calc" || shcut == "c") {
          o.innerHTML = eval(sterm.replace(/[a-zA-Z]/g, "").replace(/([\d\.]+)\^([\d\.]+)/g, "Math.pow($1,$2)").replace(/~([\d\.]+)/g, "Math.round($1)"));
          finished = "done";
        }

        if (shcut == "random" || shcut == "rand") {
          if (sterm == "site") {
            lslong(engines,mods);
            var rfloor = longArray.length;
            rfloor = Math.floor(Math.random()*rfloor);
            var addr = longArray[rfloor].split("\t")[3];
            window.location = addr;
          } else if (sterm == "git") {
            var addr = "http://randomgit.com/random.php";
            window.location = addr;
          } else if (sterm == "img") {
            var addr = "http://imgur.com/random";
            window.location = addr;
          } else {
            var rfloor = sterm.replace(/[^\d]/g, "");
            rfloor == "" ? rfloor = 101 : rfloor = parseInt(rfloor) + 1;
            o.innerHTML = Math.floor(Math.random()*rfloor);
          }
          finished = "done";
        }

        if (shcut == "pop") {
          if (modson == "off") {
            lslong(engines);
          } else {
            lslong(engines,mods);
          }
          if (/\s/.test(nub) == false) {
            window.open(document.URL,'_blank','location=yes,height=570,width=520,scrollbars=yes,status=yes');
            window.open(window.location, '_self').close();
          } else if (/-u/.test(sterm) == true) {
            a = /-u (.*)/.exec(sterm)[1];
//             c = /(http:\/\/.*?)(?:\s+||$)/g.exec(a);
            var httpArr = a.split(" ");
            for (var i = 0; i < httpArr.length; i++) {
              window.open(httpArr[i]);
            }
            return true;
          } else if (/-t/.test(sterm) == true) {
            var a = sterm.split(" -t ");
            var comm = a[0];
            var text = a[1];
            var commArr = comm.split(" ");
            var httpArr = [];
            for (var c = 0; c < commArr.length; c++) {
              for (var i = 0; i < longArray.length; i++) {
                var l = longArray[i].split("\t");
                if (commArr[c] == l[0]) {
                  httpArr.push(l[2].replace(/%s/, text));
                }
              }
            }
            for (var i = 0; i < httpArr.length; i++) {
              window.open(httpArr[i]);
            }
            return true;
          } else {
            var comm = sterm.split(" ");
            var httpArr = [];
            for (var c = 0; c < comm.length; c++) {
              for (var i = 0; i < longArray.length; i++) {
                var l = longArray[i].split("\t");
                if (comm[c] == l[0]) {
                  httpArr.push(l[3]);
                }
              }
            }
            for (var i = 0; i < httpArr.length; i++) {
              window.open(httpArr[i]);
            }
          return true;
          }
          finished = "done";
        }

        if (shcut == "href" || shcut == "link") {
          var url = location.href;
          if (/\s/.test(nub) == false) {
            o.innerHTML = "The current url is: " + url;
          } else {
            var encurl = encodeURI(url + "?" + sterm);
            o.innerHTML = "The current url is: " + url + "<br><br>You entered the following command: " + sterm + "<br><a href='" + encurl + "'>Permalink</a>";
          }
          y.value = "";
          finished = "done";
        }

        if (shcut == "echo") {
          if (/\s/.test(nub) == false) {
            o.innerHTML = "Hi there! :)";
          } else {
            o.innerHTML = sterm;
          }
          y.value = "";
          finished = "done";
        }

        if (shcut == "sort") {
          if (/\s/.test(nub) == false) {
            o.innerHTML = "Please input some text to sort.";
          } else {
            var d = delimit(sterm);
            o.innerHTML = d.sort().join("<br>");
          }
          y.value = "";
          finished = "done";
        }

        if (shcut == "shuffle") {
          if (/\s/.test(nub) == false) {
            o.innerHTML = "Please input some text to shuffle.";
          } else {
            var d = delimit(sterm);
            o.innerHTML = shuffle(d).join("<br>");
          }
          y.value = "";
          finished = "done";
        }

        if (shcut == "uniq") {
          if (/\s/.test(nub) == false) {
            o.innerHTML = "Please input some text as an argument to uniq.";
          } else {
            var d = delimit(sterm);
            o.innerHTML = uniq(d).join("<br>");
          }
          y.value = "";
          finished = "done";
        }

        if (shcut == "uniqd") {
          if (/\s/.test(nub) == false) {
            o.innerHTML = "Please input some text as an argument to uniqd.";
          } else {
            var d = delimit(sterm);
            o.innerHTML = uniqd(d).join("<br>");
          }
          y.value = "";
          finished = "done";
        }

        if (shcut == "ucase" || shcut == "upcase") {
          if (/\s/.test(nub) == false) {
            o.innerHTML = "Please input some text to convert to upper case.";
          } else {
            o.innerHTML = sterm.toUpperCase();
          }
          finished = "done";
        }

        if (shcut == "lcase" || shcut == "downcase") {
          if (/\s/.test(nub) == false) {
            o.innerHTML = "Please input some text to convert to lower case.";
          } else {
            o.innerHTML = sterm.toLowerCase();
          }
          finished = "done";
        }

        if (shcut == "ccase" || shcut == "capcase" || shcut == "caps") {
          if (/\s/.test(nub) == false) {
            o.innerHTML = "Please input some text to convert to initial caps.";
          } else {
            o.innerHTML = sterm.toLowerCase().replace(/(^|\s+)(.)/g,function(_, a, l){return a+l.toUpperCase();});
          }
          finished = "done";
        }

        if (shcut == "wc") {
          if (/\s/.test(nub) == false) {
            o.innerHTML = "Please input some text to count.";
          } else if (/^\-c /.test(sterm) == true) {
            c = sterm.replace(/^\-c /,"");
            o.innerHTML = c.split(/./).length -1;
          } else {
            var d = delimit(sterm);
            o.innerHTML = d.length;
          }
          y.value = "";
          finished = "done";
        }

        if (shcut == "watch" || shcut == "ytp") {
          if (/\s/.test(nub) == false) {
            o.innerHTML = "Please provide a search term for something you would like to watch.";
          } else {
            p = '<iframe width="640" height="390" src="http://www.youtube.com/embed?listType=search&list=' + sterm + '" frameborder="0" allowfullscreen></iframe>';
            o.innerHTML = p;
          }
//           y.value = "";
          finished = "done";
        }

        if (shcut == "timer" || shcut == "stopwatch") {
          timer();

          y.value = "";
          finished = "done";
        }

        if (shcut == "whoami") {
          o.innerHTML = "<table><tr><td>Browser code name: </td><td>" + navigator.appCodeName + "</tr><tr><td>Browser offical name: </td><td>" + navigator.appName + "</tr><tr><td>Browser Version: </td><td>" + navigator.appVersion + "</tr><tr><td>Java enabled? </td><td>" + navigator.javaEnabled() + "</tr><tr><td>Browser Language: </td><td>" + navigator.language + "</tr><tr><td>All languages in order of preference: </td><td>" + navigator.languages + "</tr><tr><td>Browser online? </td><td>" + navigator.onLine + "</tr><tr><td>Current operating system: </td><td>" + navigator.oscpu + "</tr><tr><td>Browser platform: </td><td>" + navigator.platform + "</tr><tr><td>User agent: </td><td>" + navigator.userAgent.replace(/\)/,")<br>") + "</td></tr></table>";
          y.value = "";
          finished = "done";
        }

        if (shcut == "sticky") {
          y.value = "";
          if (/\s/.test(nub) == false) {
            o.innerHTML = '<link href="http://fonts.googleapis.com/css?family=Reenie+Beanie" rel="stylesheet" type="text/css"><div style="width:350px; height:350px; background-color:#ffff88; font-family:\'Reenie Beanie\'; font-size:36px; border-bottom-right-radius: 60px 5px; transform: rotate(-3deg)" id="b" contenteditable="true"></div>';
            if (localStorage.sticky) {
              b["innerHTML"]=[localStorage.sticky];
            } else {
              b["innerHTML"]="This is an editable sticky. Type something to add notes here.";
            }
            window.b.setAttribute("oninput", "localStorage.sticky=b['innerHTML']");
            window.b.focus();
          } else if (/^\-r/.test(sterm) == true) {
              localStorage.sticky = "";
              o.innerHTML = "Local storage has been cleared.";
              y.focus();
          } else {
              localStorage.sticky = sterm;
              yubComm("sticky");
              window.b.focus();
          }
          finished = "done";
        }

        if (shcut == "notepad") {
          y.value = "";
          if (sterm == "-r") {
            localStorage.np = "";
            o.innerHTML = "Local storage has been cleared.";
            y.focus();
          } else {
            o.innerHTML = '<div style="width:40%; height:50%; background: -webkit-repeating-linear-gradient( top, #FFFAFA, #FFFAFA 35px, #81cbbc 40px ); background: -moz-repeating-linear-gradient( top, snow, snow 38px, #81cbbc 40px ); background: repeating-linear-gradient( top, snow, snow 38px, #81cbbc 40px ); line-height:40px" id="b" contenteditable="true"></div>';
//           b["innerHTML"]=[localStorage.c];
            if (localStorage.np) {
              b["innerHTML"]=[localStorage.np];
            } else {
              b["innerHTML"]="This is an editable notepad with automatic local storage.\nClick here to add some notes.";
            }
            window.b.setAttribute("oninput", "localStorage.np=b['innerHTML']");
            window.b.focus();
          }
          finished = "done";
        }

        if (shcut == ">") {
          if (/\s/.test(nub) == false) {
            o.innerHTML = "To use >, input a yubnub command and a search term as arguments, for example:<br>> wp Hedgehogs<br>(Uses Google to search Wikipedia and goes automatically to the first result)";
          } else {
            var surl = "";
            var nterm = sterm.replace(/.*?\s(.*)/,"$1");
            if (modson == "off") {
              lslong(engines);
            } else {
              lslong(engines,mods);
            }
            c = 0;
            for (var i = 0; i < longArray.length; i++) {
              var l = longArray[i].split("\t");
              if (l[0] == sterm.replace(/\s.*/,"")) {
                surl = l[3].replace(/(https*:\/\/.*?)\/.*/, "$1");
                c++;
              }
            }
            if (c == 0) {
              o.innerHTML = "No command \"" + sterm + "\" found. Please try again!";
            } else {
              var gfl = "https://google.com/search?q=site:" + surl + "+" + nterm + "&btnI=I%27m+Feeling+Lucky";
              window.location = gfl;
            }
          }
          finished = "done";
        }

        if (shcut == "create") {
          var cr = document.getElementById("create");
          var scn = document.getElementById("scname");
          if (/\s/.test(nub) == true) {
            if (modson == "off") {
              lsshort(engines,tips);
            } else {
              lsshort(engines,tips,mods);
            }
            c = 0;
            for (var i = 0; i < allArray.length; i++) {
              if (allArray[i].replace(/\s*\t.*/, "") == sterm) {
                c++;
              }
            }
            if (c > 0) {
              o.innerHTML = "A command with the name \"" + sterm + "\" already exists. Please try another command name.";
            } else {
              cr.style.display = '';
              scn.value = sterm;
              scn.focus();
              scn.select();
            }
          } else {
            if (cr.style.display == '') {
              cr.style.display = 'none';
            } else {
              cr.style.display = '';
              scn.focus();
              scn.select();
            }
          }
          finished = "done";
        }

        if (shcut == "time" || shcut == "t") {
          d = new Date();
          t = d.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
          iso = d.toISOString().replace(/T.*/,"");
          df = d.toLocaleDateString("en-US", {weekday: "long", month: "long", day: "numeric"});
          finished = "done";
          if (sterm != "time" && sterm != "t") {
            df = d.toLocaleDateString(sterm, {weekday: "long", month: "long", day: "numeric"});
            finished = "done";
          }
          o.innerHTML = t + "<br><div class='grey'>" + df + "<br>(" + iso + ")</div>";
        }

        if (shcut == "day" || shcut == "date" || shcut == "d") {
          d = new Date();
          day = d.getDay().toString().replace(/0/,"Sunday").replace(/1/,"Monday").replace(/2/,"Tuesday").replace(/3/,"Wednesday").replace(/4/,"Thursday").replace(/5/,"Friday").replace(/6/,"Saturday");
          iso = d.toISOString().replace(/T.*/,"");
          o.innerHTML = day + "<br><div class='grey'>(" + iso + ")</div>";
          finished = "done";
        }

        if (shcut == "skin") {
          stylesheet = document.getElementById("stylesheet");
// 	  if ls then list available skins
// 	  if non-existent then print error
          stylesheet.href = "css/" + sterm + ".css";
          o.innerHTML = "yub.js skin successfully changed to \"" + sterm + "\"!";
          finished = "done";
        }

        if (shcut == "tips" || shcut == "help" || shcut == "man") {
          var commList = "<table>";
          var noresult = 0;
          if (/\s/.test(nub) == false) {
            for (var i = 0; i < tips.length; i++) {
              commList = commList + "<tr><td>" + tips[i].n + "</td><td>" + tips[i].d + "</td></tr>\n";
            }
            o.innerHTML = commList.split("\n").sort().join("\n") + "</table>";
            y.value = "";
          } else {
            lsshort(tips);
            var noresult = 0;
            for (var i = 0; i < allArray.length; i++) {
              if (allArray[i].replace(/\s*\t.*/, "") == sterm) {
                o.innerHTML = allArray[i].replace(/\t/, " = ");
                noresult++;
              }
            }
            if (noresult == 0) {
              o.innerHTML = "Command \"" + sterm + "\" not found. Please try again.";
            }
          }
          finished = "done";
        }

//         if (nublc == "shortcuts") {
//           shcList = "<table>";
//           for (var i = 0; i < shortcuts.length; i++) {
//             shcList = shcList + "<tr><td>" + shortcuts[i].shcName + "</td><td>" + shortcuts[i].shcDesc + "</td></tr>\n";
//           }
//           o.innerHTML = shcList.split("\n").sort().join("\n") + "</table>";
//           y.value = "";
//           finished = "done";
//         }

        if (nublc == "mods") {
          if (modson == "off") {
            o.innerHTML = "No additional modules loaded.";
          } else {
            modList = "<table>";
            for (var i = 0; i < mods.length; i++) {
              modList = modList + "<tr><td>" + mods[i].n + "</td><td>" + mods[i].d + "</td></tr>\n";
            }
            o.innerHTML = modList.split("\n").sort().join("\n") + "</table>";
            y.value = "";
          }
          finished = "done";
        }

        for (var i = 0; i < engines.length; i++) {
          if (engines[i].n == shcut) {
            finished = "done";
            if (shcut == stermlc && /\s/.test(nub) == false) {
              addr = engines[i].f;
              window.location=addr;
            } else {
              loc = engines[i].a;
              addr = loc.replace(/%s/,sterm);
              window.location=addr;
            }
          }
        }

//         for (var i = 0; i < shortcuts.length; i++) {
//           if (shortcuts[i].shcName == shcut) {
//             addr = shortcuts[i].shcAddr;
//             window.location=addr;
//             finished = "done";
//           }
//         }

        if (modson == "on") {
          for (var i = 0; i < mods.length; i++) {
            if (mods[i].n == shcut) {
              finished = "done";
              if (shcut == stermlc && /\s/.test(nub) == false) {
                addr = mods[i].f;
                window.location=addr;
              } else {
                loc = mods[i].a;
                addr = loc.replace(/%s/,sterm);
                window.location=addr;
              }
            }
          }
        }

        if (finished == "") {
          o.innerHTML = "Command not found.<br>Type 'list' or 'ls' to see all commands.";
        } 
}