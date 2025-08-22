function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5jekhjyDrvH":
        Script1();
        break;
      case "6jaxdWvzHY8":
        Script2();
        break;
      case "6eH2UU5FfYw":
        Script3();
        break;
      case "6idYVzqey0E":
        Script4();
        break;
      case "6RhnF2AF2tW":
        Script5();
        break;
      case "60AS9KNbnmg":
        Script6();
        break;
      case "6Q0VjeCk2vS":
        Script7();
        break;
      case "6c2eHPH3Wpi":
        Script8();
        break;
      case "5VOqnR0ljqh":
        Script9();
        break;
      case "6rD32VhNoy2":
        Script10();
        break;
      case "5apVXW5ZCIo":
        Script11();
        break;
      case "5rPb0JD5h0d":
        Script12();
        break;
      case "6NX7LUWrZUc":
        Script13();
        break;
      case "5qWmz5pzqqe":
        Script14();
        break;
      case "6OmYoGWxH6K":
        Script15();
        break;
  }
}

function Script1()
{
  (function () {
  // Jangan buat ulang kalau sudah ada
  if (window.bgAudio) return;

  // Buat audio global
  window.bgAudio = new Audio("story_content/musik1.mp3");
  window.bgAudio.loop = true;

  // Set volume awal dari variabel Storyline
  try {
    var p = GetPlayer();
    var level = p.GetVar("VolumeLevel"); // 0..100
    window.bgAudio.volume = Math.min(1, Math.max(0, level / 100));
  } catch (e) {}
})();

}

function Script2()
{
  (function () {
  if (!window.bgAudio) return;
  var p = GetPlayer();
  var on = p.GetVar("IsPlaying"); // true/false
  if (on) {
    window.bgAudio.play().catch(function(){ /* autoplay block? user harus klik */ });
  } else {
    window.bgAudio.pause();
  }
})();

}

function Script3()
{
  (function () {
  if (!window.bgAudio) return;
  var p = GetPlayer();
  var level = p.GetVar("VolumeLevel"); // 0..100
  window.bgAudio.volume = Math.min(1, Math.max(0, level / 100));
})();

}

function Script4()
{
  (function () {
  if (!window.bgAudio) return;
  var p = GetPlayer();
  var on = p.GetVar("IsPlaying"); // true/false
  if (on) {
    window.bgAudio.play().catch(function(){ /* autoplay block? user harus klik */ });
  } else {
    window.bgAudio.pause();
  }
})();

}

function Script5()
{
  (function () {
  if (!window.bgAudio) return;
  var p = GetPlayer();
  var level = p.GetVar("VolumeLevel"); // 0..100
  window.bgAudio.volume = Math.min(1, Math.max(0, level / 100));
})();

}

function Script6()
{
  (function () {
  if (!window.bgAudio) return;
  var p = GetPlayer();
  var on = p.GetVar("IsPlaying"); // true/false
  if (on) {
    window.bgAudio.play().catch(function(){ /* autoplay block? user harus klik */ });
  } else {
    window.bgAudio.pause();
  }
})();

}

function Script7()
{
  (function () {
  if (!window.bgAudio) return;
  var p = GetPlayer();
  var level = p.GetVar("VolumeLevel"); // 0..100
  window.bgAudio.volume = Math.min(1, Math.max(0, level / 100));
})();

}

function Script8()
{
  (function () {
  if (!window.bgAudio) return;
  var p = GetPlayer();
  var on = p.GetVar("IsPlaying"); // true/false
  if (on) {
    window.bgAudio.play().catch(function(){ /* autoplay block? user harus klik */ });
  } else {
    window.bgAudio.pause();
  }
})();

}

function Script9()
{
  (function () {
  if (!window.bgAudio) return;
  var p = GetPlayer();
  var level = p.GetVar("VolumeLevel"); // 0..100
  window.bgAudio.volume = Math.min(1, Math.max(0, level / 100));
})();

}

function Script10()
{
  (function () {
  if (!window.bgAudio) return;
  var p = GetPlayer();
  var on = p.GetVar("IsPlaying"); // true/false
  if (on) {
    window.bgAudio.play().catch(function(){ /* autoplay block? user harus klik */ });
  } else {
    window.bgAudio.pause();
  }
})();

}

function Script11()
{
  (function () {
  if (!window.bgAudio) return;
  var p = GetPlayer();
  var level = p.GetVar("VolumeLevel"); // 0..100
  window.bgAudio.volume = Math.min(1, Math.max(0, level / 100));
})();

}

function Script12()
{
  (function () {
  if (!window.bgAudio) return;
  var p = GetPlayer();
  var on = p.GetVar("IsPlaying"); // true/false
  if (on) {
    window.bgAudio.play().catch(function(){ /* autoplay block? user harus klik */ });
  } else {
    window.bgAudio.pause();
  }
})();

}

function Script13()
{
  (function () {
  if (!window.bgAudio) return;
  var p = GetPlayer();
  var level = p.GetVar("VolumeLevel"); // 0..100
  window.bgAudio.volume = Math.min(1, Math.max(0, level / 100));
})();

}

function Script14()
{
  (function () {
  if (!window.bgAudio) return;
  var p = GetPlayer();
  var on = p.GetVar("IsPlaying"); // true/false
  if (on) {
    window.bgAudio.play().catch(function(){ /* autoplay block? user harus klik */ });
  } else {
    window.bgAudio.pause();
  }
})();

}

function Script15()
{
  (function () {
  if (!window.bgAudio) return;
  var p = GetPlayer();
  var level = p.GetVar("VolumeLevel"); // 0..100
  window.bgAudio.volume = Math.min(1, Math.max(0, level / 100));
})();

}

