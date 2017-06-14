var goToGoogle = function(q) {
  window.location.href = "https://google.com/search?q=zlatan " + q;
}

var getOffset = function() {
  return Math.random() * (700 - 200) + 200;
}

var positionInputField = function() {
  var offset = $("#pic").offset();
  var width = $("#pic").width() / 5.5;
  var height = $("#pic").height() / 1.5;
  var absLeft = (width + offset.left);
  var absTop = (height + offset.top);
  var text = document.getElementById('searchText');
  text.style.left = absLeft + "px";
  text.style.top = absTop + "px";
}

/* 
 * Props to https://stackoverflow.com/questions/7264974/show-text-letter-by-letter
 */
var showText = function (target, message, index, interval) {   
  positionInputField();

  if (index < message.length) {
    //$(target).append(message[index++]);
    $(target).val($(target).val() + message[index++]);
    //console.log("text");
    setTimeout(function () { showText(target, message, index, getOffset()); }, interval);
  } else {
    goToGoogle(message);
  }
}

/*
 * Props to https://stackoverflow.com/questions/19491336/get-url-parameter-jquery-or-how-to-get-query-string-values-in-js
 */
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

$(function () {
  var q = getUrlParameter("q")
  showText("#searchText", q, 0, getOffset());
});
