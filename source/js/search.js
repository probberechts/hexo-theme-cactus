// A local search script with the help of
// [hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search)
// Copyright (C) 2015 
// Joseph Pan <http://github.com/wzpan>
// Shuhao Mao <http://github.com/maoshuhao>
// This library is free software; you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as
// published by the Free Software Foundation; either version 2.1 of the
// License, or (at your option) any later version.
// 
// This library is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// Lesser General Public License for more details.
// 
// You should have received a copy of the GNU Lesser General Public
// License along with this library; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
// 02110-1301 USA
 

/*exported searchFunc*/
var searchFunc = function(path, searchId, contentId) {
  $.ajax({
    url: path,
    dataType: "xml",
    success: function(xmlResponse) {
      // get the contents from search data
      var datas = $("entry", xmlResponse).map(function() {
        return {
          title: $("title", this).text(),
          content: $("content", this).text(),
          url: $("link", this).attr('href')
        };
      }).get();

      var $input = document.getElementById(searchId);
      if (!$input) { return; }
      var $resultContent = document.getElementById(contentId);

      $input.addEventListener("input", function(){
        var str="<ul class=\"search-result-list\">";
        var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
        $resultContent.innerHTML = "";
        if (this.value.trim().length <= 0) {
          return;
        }
        // perform local searching
        datas.forEach(function(data) {
          var isMatch = true;
          if (!data.title || data.title.trim() === "") {
            data.title = "Untitled";
          }
          var dataTitle = data.title.trim().toLowerCase();     
          var dataContent = data.content.trim().replace(/<[^>]+>/g,"").toLowerCase();
          var dataUrl = data.url;
          var indexTitle = -1;
          var indexContent = -1;
          var firstOccur = -1;
          // only match artiles with not empty contents
          if (dataContent !== "") {
            keywords.forEach(function(keyword, i) {
              indexTitle = dataTitle.indexOf(keyword);
              indexContent = dataContent.indexOf(keyword);

              if( indexTitle < 0 && indexContent < 0 ){
                isMatch = false;
              } else {
                if (indexContent < 0) {
                  indexContent = 0;
                }
                if (i == 0) {
                  firstOccur = indexContent;
                }
              }
            });
          } else {
            isMatch = false;
          }
          // show search results
          if (isMatch) {
            str += "<li><a href='"+ dataUrl +"' class='search-result-title'>"+ dataTitle +"</a>";
            var content = data.content.trim().replace(/<[^>]+>/g,"");
            if (firstOccur >= 0) {
              // cut out 100 characters
              var start = firstOccur - 20;
              var end = firstOccur + 80;

              if(start < 0){
                start = 0;
              }

              if(start == 0){
                end = 100;
              }

              if(end > content.length){
                end = content.length;
              }

              var matchContent = content.substr(start, end); 

              // highlight all keywords
              keywords.forEach(function(keyword){
                var regS = new RegExp(keyword, "gi");
                matchContent = matchContent.replace(regS, "<em class=\"search-keyword\">"+keyword+"</em>");
              });

              str += "<p class=\"search-result\">" + matchContent +"...</p>";
            }
            str += "</li>";
          }
        });
        str += "</ul>";
        $resultContent.innerHTML = str;
      });
    }
  });
};
