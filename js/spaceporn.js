  (function () {
    var container = document.querySelector(".container");
    reddit.top("spaceporn").t("day").limit(5000).fetch(function (res) {
      for (var i = 0; i < res.data.children.length; i++) {
        var awwData = res.data.children[i].data;
        if(awwData.url.search("gif")>0){
                var aww = document.createElement("video");
        //var row = document.createElement("div");
        var box =document.createElement("div");
        //row.className ="row";
        var vidsrc=document.createElement("source");
        box.className ="col-lg-4 col-sm-6 col-xs-12";
        
        var url=awwData.url.replace('gifv','mp4')

        vidsrc.setAttribute("src" , url);
        aww.setAttribute("preload","auto");
        aww.setAttribute("autoplay","autoplay");
        aww.setAttribute("loop","loop");
        aww.setAttribute("href",awwData.permalink);
        vidsrc.setAttribute("type","video/mp4");
        aww.className="img-responsive";
        aww.appendChild(vidsrc)
        var link = document.createElement("a");
        link.appendChild(aww);
        box.appendChild(link);
        //row.appendChild(box);
        container.appendChild(box);}
        else if(awwData.url.search("v.redd")>0){}
        else if(awwData.url.search("giant")>0){}    
        else if(awwData.url.search("a.imgur")>0){}
        else{
        //creating div for videos
        var permalink= "https://reddit.com"+awwData.permalink;
        var link = document.createElement("a");
        var aww = document.createElement("img");
        //var row = document.createElement("div");
        var box =document.createElement("div");
        //var vidsrc=document.createElement("source");
        //row.className ="row";
        box.className ="col-lg-4 col-sm-6 col-xs-12";
        
        
        
        aww.setAttribute("src" , awwData.url);
        link.setAttribute("href",permalink);
        link.appendChild(aww);
        aww.className="img-responsive";
        //box.appendChild(aww);
        box.appendChild(link);
        //row.appendChild(box);
        container.appendChild(box);}


      }
    });
  })()