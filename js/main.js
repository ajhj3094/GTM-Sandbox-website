const vue = new Vue({
  el: '#main',
  data: {
    
  },
  created () {
    document.addEventListener("click", function(event) {
      // console.log(event.target.tagName)
      if (event.target.tagName === "A") {
        gtag ("event", "link_click", {
          "link_text" : event.target.innerText,
          "link_url" : event.target.href,
          "link_id" : event.target.id,
          "link_classes" : event.target.className,
          "link_value" : 500
        });
      };
    });
  },
});