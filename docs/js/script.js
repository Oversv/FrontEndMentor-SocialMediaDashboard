"use strict";

var switcher = document.getElementById('switcher-label');
var overviewTitle = document.getElementById('overview-title');
var styles = document.documentElement.style;
var darkTheme = {
  '--bg': 'hsl(230, 17%, 14%)',
  '--topBgPatter': 'hsl(232, 19%, 15%)',
  '--cardBg': 'hsl(228, 28%, 20%)',
  '--textColor1': 'hsl(228, 34%, 66%)',
  '--textColor2': 'hsl(0, 0%, 100%)',
  '--textColor3': 'hsl(0, 0%, 100%)',
  '--toggle1': 'hsl(210, 78%, 56%)',
  '--toggle2': 'hsl(146, 68%, 55%)',
  '--hover': '#333a56'
};
var lightTheme = {
  '--bg': 'hsl(0, 0%, 100%)',
  '--topBgPatter': 'hsl(225, 100%, 98%)',
  '--cardBg': 'hsl(227, 47%, 96%)',
  '--textColor1': 'hsl(228, 12%, 44%)',
  '--textColor2': 'hsl(230, 17%, 14%)',
  '--textColor3': 'hsl(228, 12%, 44%)',
  '--toggle1': 'hsl(230, 22%, 74%)',
  '--toggle2': 'hsl(230, 22%, 74%)',
  '--hover': '#e1e3f0'
};

var changeTheme = function changeTheme(theme) {
  var customStyles = Object.keys(theme);

  for (var _i = 0, _customStyles = customStyles; _i < _customStyles.length; _i++) {
    var style = _customStyles[_i];
    styles.setProperty(style, theme[style]);
  }
};

switcher.addEventListener('click', function (e) {
  e.target.previousElementSibling.checked ? changeTheme(darkTheme) : changeTheme(lightTheme);
});