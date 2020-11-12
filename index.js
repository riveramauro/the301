var closeCoockieNotice = document.querySelector('.close_notice');
var coockieNotice = document.querySelector('#cookieNotice_container');
var mainFooter = document.querySelector('#footer');

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return true;
  }
  return null;
}

closeCoockieNotice.addEventListener('click', function(event){
  coockieNotice.style.display = "none";
  mainFooter.classList.toggle('cookie_active');
  var date = new Date();
  var coockieExpires = date.toUTCString(date.setMonth(date.getMonth()+1));
  document.cookie = `cookieNotice=true; expires=${coockieExpires}`;
});

var coockieNoticeApproved = readCookie('cookieNotice');
if (coockieNoticeApproved) {
  coockieNotice.style.display = "none";
  mainFooter.classList.toggle('cookie_active');
}