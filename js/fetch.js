  (function () {
    var container = document.querySelector(".container");
    reddit.top("funny").t("day").limit(10).fetch(function (res) {
      for (var i = 0; i < res.data.children.length; i++) {
        var awwData = res.data.children[i].data;
        // var thumbnail = document.createElement("img");
        // var aww = document.createElement("img");
        // var row = document.createElement("div");
        // var left = document.createElement("div");
        // var right = document.createElement("div");
        // var link = document.createElement("a");
        // row.className = "row";
        // left.className = "col-xs-4";
        // thumbnail.setAttribute("src", awwData.thumbnail);
        // link.setAttribute("href", "http://www.reddit.com" + awwData.permalink);
        // link.innerText = awwData.title;
        // left.appendChild(thumbnail);
        // left.appendChild(link);
        // row.appendChild(left);
        // right.className = "col-xs-8";
        // aww.className = "img-responsive";
        // aww.setAttribute("src", awwData.url);
        // right.appendChild(aww);
        // row.appendChild(right);
        var aww = document.createElement("img");
        //var row = document.createElement("div");
        var box =document.createElement("div");
        //row.className ="row";
        box.className ="col-lg-4 col-sm-6 col-xs-12";
        aww.setAttribute("src" , awwData.url);
        aww.className="img-responsive";
        box.appendChild(aww);
        //row.appendChild(box);
        container.appendChild(box);
      }
    });
  })()