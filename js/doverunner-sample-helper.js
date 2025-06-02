var browser = 'Non-DRM browser';
var drmType = 'No DRM';
var supportSl3000 = false;
var supportL1 = false;

// Replace the DASH and HLS URIs when you test your own content. 
var dashUri = 'https://drm-contents.doverunner.com/DEMO/app/big_buck_bunny/dash/stream.mpd';
var hlsUri = 'https://drm-contents.doverunner.com/DEMO/app/big_buck_bunny/hls/master.m3u8';

var licenseUri = 'https://drm-license.doverunner.com/ri/licenseManager.do';

var widevineCertUri = 'https://drm-license.doverunner.com/ri/widevineCert.do?siteId=DEMO'; // for cert

// Replace the DEMO site ID with yours when you test your own FPS content.
var fairplayCertUri = 'https://drm-license.doverunner.com/ri/fpsKeyManager.do?siteId=DEMO'; // for base64 encoded binary cert data
var fairplayCertDerUri = 'https://drm-license.doverunner.com/ri/fpsCert.do?siteId=DEMO'; // for cert .der file download 

// Create and set the license tokens when you test your own content.
var widevineToken = 'eyJrZXlfcm90YXRpb24iOmZhbHNlLCJyZXNwb25zZV9mb3JtYXQiOiJvcmlnaW5hbCIsInVzZXJfaWQiOiJ1dSIsImRybV90eXBlIjoid2lkZXZpbmUiLCJzaXRlX2lkIjoiREVNTyIsImhhc2giOiI3MGhpMHcwbmFNUHM2c0hiMHYxS1lvbXFxVkZNYzJ6XC96Z1VoWlRJVlN0Yz0iLCJjaWQiOiJkZW1vLWJiYi1zaW1wbGUiLCJwb2xpY3kiOiI5V3FJV2tkaHB4VkdLOFBTSVljbkpzY3Z1QTlzeGd1YkxzZCthanVcL2JvbVFaUGJxSSt4YWVZZlFvY2NrdnVFZnhEY2NtN2NXZFZYcXJkTWdBUWptcVo5bzdYTEZ6MjBOaG1Kdklpd1FidWhLaCtDMmZJSEw5T3UxU09Bc2hQU0FWZHhhWVVKSnJsWjVVMXU1UGNlcjE0NVpCczdnc3ZRc0lsbDlGVHZXanQ3bWhaOHJ3ejdybVNYcURBdEdqYTRsYmVrUnhcL1pyRWx4dkJhWXV0YWFvdVlISWpkNlZpRWVXZEVpRzJIV0VIMGczcW1LYW1QbUp2VUluN0tVODZrUDQiLCJ0aW1lc3RhbXAiOiIyMDI1LTAxLTMxVDAyOjA2OjM4WiJ9';
var playreadyToken = 'eyJrZXlfcm90YXRpb24iOmZhbHNlLCJyZXNwb25zZV9mb3JtYXQiOiJvcmlnaW5hbCIsInVzZXJfaWQiOiJ1dSIsImRybV90eXBlIjoicGxheXJlYWR5Iiwic2l0ZV9pZCI6IkRFTU8iLCJoYXNoIjoiamtncG1YY09QMG9wVnBOQ0xNd0JtWSs1MTlnNFpncFpnYVlsME9xcHdMdz0iLCJjaWQiOiJkZW1vLWJiYi1zaW1wbGUiLCJwb2xpY3kiOiI5V3FJV2tkaHB4VkdLOFBTSVljbkpzY3Z1QTlzeGd1YkxzZCthanVcL2JvbVFaUGJxSSt4YWVZZlFvY2NrdnVFZnhEY2NtN2NXZFZYcXJkTWdBUWptcVo5bzdYTEZ6MjBOaG1Kdklpd1FidWhLaCtDMmZJSEw5T3UxU09Bc2hQU0FWZHhhWVVKSnJsWjVVMXU1UGNlcjE0NVpCczdnc3ZRc0lsbDlGVHZXanQ3bWhaOHJ3ejdybVNYcURBdEdqYTRsYmVrUnhcL1pyRWx4dkJhWXV0YWFvdVlISWpkNlZpRWVXZEVpRzJIV0VIMGczcW1LYW1QbUp2VUluN0tVODZrUDQiLCJ0aW1lc3RhbXAiOiIyMDI1LTAxLTMxVDAyOjA2OjI3WiJ9';
var fairplayToken = 'eyJrZXlfcm90YXRpb24iOmZhbHNlLCJyZXNwb25zZV9mb3JtYXQiOiJvcmlnaW5hbCIsInVzZXJfaWQiOiJ1dSIsImRybV90eXBlIjoiZmFpcnBsYXkiLCJzaXRlX2lkIjoiREVNTyIsImhhc2giOiJJYTdobWpGY3NxekN6dGUzTW0wdnlLaFZnZXRvZ256OWs3QkVRK3hcL3Vtaz0iLCJjaWQiOiJkZW1vLWJiYi1zaW1wbGUiLCJwb2xpY3kiOiI5V3FJV2tkaHB4VkdLOFBTSVljbkpzY3Z1QTlzeGd1YkxzZCthanVcL2JvbVFaUGJxSSt4YWVZZlFvY2NrdnVFZnhEY2NtN2NXZFZYcXJkTWdBUWptcVo5bzdYTEZ6MjBOaG1Kdklpd1FidWhLaCtDMmZJSEw5T3UxU09Bc2hQU0FWZHhhWVVKSnJsWjVVMXU1UGNlcjE0NVpCczdnc3ZRc0lsbDlGVHZXanQ3bWhaOHJ3ejdybVNYcURBdEdqYTRsYmVrUnhcL1pyRWx4dkJhWXV0YWFvdVlISWpkNlZpRWVXZEVpRzJIV0VIMGczcW1LYW1QbUp2VUluN0tVODZrUDQiLCJ0aW1lc3RhbXAiOiIyMDI1LTAxLTMxVDAyOjA2OjU0WiJ9';

function setWidevineToken(newWidevineToken) {
  widevineToken = newWidevineToken;
}

function setPlayReadyToken(newPlayReadyToken) {
  playreadyToken = newPlayReadyToken;
}

function setFairPlayToken(newFairPlayToken) {
  fairplayToken = newFairPlayToken;
}

// Detect the browser and set proper DRM type
function checkBrowser() {
  var agent = navigator.userAgent.toLowerCase(),
    name = navigator.appName,
    browser;

  if (name === 'Microsoft Internet Explorer' || agent.indexOf('trident') > -1 || agent.indexOf('edge/') > -1) {
    browser = 'ie';
    if (name === 'Microsoft Internet Explorer') { // IE old version (IE 10 or Lower)
      agent = /msie ([0-9]{1,}[\.0-9]{0,})/.exec(agent);
      // browser += parseInt(agent[1]);
    } else if (agent.indexOf('edge/') > -1) { // Edge
      browser = 'Edge';
    }
  } else if (agent.indexOf('safari') > -1) { // Chrome or Safari
    if (agent.indexOf('opr') > -1) { // Opera
      browser = 'Opera';
    } else if (agent.indexOf('whale') > -1) { // Chrome
      browser = 'Whale';
    } else if (agent.indexOf('edg/') > -1 || agent.indexOf('Edge/') > -1) { // Chrome
      browser = 'Edge';
    } else if (agent.indexOf('chrome') > -1) { // Chrome
      browser = 'Chrome';
    } else { // Safari
      browser = 'Safari';
    }
  } else if (agent.indexOf('firefox') > -1) { // Firefox
    browser = 'firefox';
  }

    // The below three lines are for the sample code only. May need to be removed.
    var result = "Running in " + browser + ". " + drmType + " supported.";
    document.getElementById("browserCheckResult").innerHTML = result;
    console.log(result);

  return browser;
}

function isWindowsChrome() {
  return navigator.userAgent.indexOf("Windows") > -1 && navigator.userAgent.indexOf("Chrome") > -1;
}

// Request media key system access
async function tryKeySystemAccess(keySystem, config) {
  try {
      await navigator.requestMediaKeySystemAccess(keySystem, config);
      return true;
  } catch {
      return false;
  }
}

// Base EME configuration
const baseEmeConfig = [{
  initDataTypes: ['cenc'],
  videoCapabilities: [{
      contentType: 'video/mp4;codecs="avc1.42E01E"'
  }],
  audioCapabilities: [{
      contentType: 'audio/mp4;codecs="mp4a.40.2"'
  }]
}];

// Widevine robustness levels in descending order
const robustnessLevels = [
  'HW_SECURE_ALL',
  'HW_SECURE_DECODE', 
  'HW_SECURE_CRYPTO',
  'SW_SECURE_DECODE',
  'SW_SECURE_CRYPTO'
];

// Create EME config with robustness
function createEmeConfigWithRobustness(videoRobustness, audioRobustness) {
  return [{
      ...baseEmeConfig[0],
      videoCapabilities: [{
          ...baseEmeConfig[0].videoCapabilities[0],
          robustness: videoRobustness
      }],
      audioCapabilities: [{
          ...baseEmeConfig[0].audioCapabilities[0],
          robustness: audioRobustness
      }]
  }];
}

async function getWidevineHighestSecurityConfig() {
  const keySystems = isWindowsChrome() ? 
      ['com.widevine.alpha.experiment', 'com.widevine.alpha'] : 
      ['com.widevine.alpha'];

  // Try with robustness levels
  for (const keySystem of keySystems) {
    for (const videoRobustness of robustnessLevels) {
        for (const audioRobustness of robustnessLevels) {
            const succeed = await tryKeySystemAccess(
                keySystem, 
                createEmeConfigWithRobustness(videoRobustness, audioRobustness)
            );
            
            if (succeed) {
                if (videoRobustness.startsWith('HW_SECURE_') || audioRobustness.startsWith('HW_SECURE_')) {
                    supportL1 = true;
                }
                return { keySystem, videoRobustness, audioRobustness };
            }
        }
    }
  }

  // Try without robustness if all failed
  for (const keySystem of keySystems) {
    const succeed = await tryKeySystemAccess(keySystem, baseEmeConfig);
    if (succeed) {
        return { keySystem, videoRobustness: null, audioRobustness: null };
    }
  }

  return null;
}

async function checkSupportedDRM() {
  const drm = {
      Widevine: { name: 'Widevine', mediaKey: 'com.widevine.alpha' },
      PlayReady: { name: 'PlayReady', mediaKey: 'com.microsoft.playready' },
      FairPlay: { name: 'FairPlay', mediaKey: 'com.apple.fps.1_0' }
  };

  for (const key in drm) {
      try {
          const supported = await tryKeySystemAccess(drm[key].mediaKey, baseEmeConfig);
          if (supported) {
              drmType = drm[key].name;
              console.log(`${drmType} support ok`);

              if (drm[key].name === 'PlayReady') {
                supportSl3000 = await tryKeySystemAccess('com.microsoft.playready.recommendation.3000', baseEmeConfig);
              }
          }
      } catch (e) {
          console.log(`${key} :: ${e}`);
      }
  }
}

function arrayToString(array) {
  var uint16array = new Uint16Array(array.buffer);
  return String.fromCharCode.apply(null, uint16array);
}

function arrayBufferToString(buffer) {
  var arr = new Uint8Array(buffer);
  var str = String.fromCharCode.apply(String, arr);
  // if(/[\u0080-\uffff]/.test(str)){
  //     throw new Error("this string seems to contain (still encoded) multibytes");
  // }
  return str;
}

function base64DecodeUint8Array(input) {
  var raw = window.atob(input);
  var rawLength = raw.length;
  var array = new Uint8Array(new ArrayBuffer(rawLength));

  for (i = 0; i < rawLength; i++)
    array[i] = raw.charCodeAt(i);

  return array;
}

function base64EncodeUint8Array(input) {
  var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var output = "";
  var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
  var i = 0;

  while (i < input.length) {
    chr1 = input[i++];
    chr2 = i < input.length ? input[i++] : Number.NaN;
    chr3 = i < input.length ? input[i++] : Number.NaN;

    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;

    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }
    output += keyStr.charAt(enc1) + keyStr.charAt(enc2) +
      keyStr.charAt(enc3) + keyStr.charAt(enc4);
  }
  return output;
}

function getFairplayCert() {
  var xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.open("GET", fairplayCertUri, false);
  xmlhttp.send();

  var fpsCert = shaka.util.Uint8ArrayUtils.fromBase64(xmlhttp.responseText);
  return fpsCert;
}

// get widevine certificate binary data
async function getWidevineCertBinary() {
  let widevineCert;
  const response = await fetch(widevineCertUri);
  await response.body
      .getReader()
      .read()
      .then((res) => {
        widevineCert = new Uint8Array(res.value);
      });

  return widevineCert;
}

// get widevine certificate base64 encoded data
async function getWidevineCertBase64() {
  let widevineCert;
  const response = await fetch(widevineCertUri);
  await response.body
      .getReader()
      .read()
      .then((res) => {
        widevineCert = btoa(String.fromCharCode(...new Uint8Array(res.value)))
      });
  return widevineCert;
}