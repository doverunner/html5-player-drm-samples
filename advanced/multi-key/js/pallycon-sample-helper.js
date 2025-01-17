var browser = 'Non-DRM browser';
var drmType = 'No DRM';
var supportSl3000 = false;

// Replace the DASH and HLS URIs when you test your own content. 
var dashUri = 'https://contents.pallycon.com/DEMO/app/tearsofsteel-multimanifests/dash/stream_HD.mpd';
var hlsUri = 'https://contents.pallycon.com/DEMO/app/tearsofsteel-multimanifests/hls/master_HD.m3u8';

var licenseUri = 'https://license-global.pallycon.com/ri/licenseManager.do';

var widevineCertUri = 'https://license-global.pallycon.com/ri/widevineCert.do?siteId=DEMO'; // for cert

// Replace the DEMO site ID with yours when you test your own FPS content.
var fairplayCertUri = 'https://license-global.pallycon.com/ri/fpsKeyManager.do?siteId=DEMO'; // for base64 encoded binary cert data
var fairplayCertDerUri = 'https://license-global.pallycon.com/ri/fpsCert.do?siteId=DEMO'; // for cert .der file download 

// Create and set the license tokens when you test your own content.
var widevineToken = 'eyJrZXlfcm90YXRpb24iOmZhbHNlLCJyZXNwb25zZV9mb3JtYXQiOiJvcmlnaW5hbCIsInVzZXJfaWQiOiJ1dSIsImRybV90eXBlIjoid2lkZXZpbmUiLCJzaXRlX2lkIjoiREVNTyIsImhhc2giOiJzNDJSTmxUbUVOWnI4NTdDM0t4R2F3enFyM3A2dGZ4eGxrMnRaMWZMcE84PSIsImNpZCI6InRlYXJzb2ZzdGVlbCIsInBvbGljeSI6IjlXcUlXa2RocHhWR0s4UFNJWWNuSnNjdnVBOXN4Z3ViTHNkK2FqdVwvYm9rQzlTMit4QVBZUmJtZno4dG9FQjM4NGxKNXVcL2Z2VXk5UktzdzBQNFUzMWxTRzFNWWJcLzRTQXZNbUJzSGFmNTZNYUJ1b0NTNHhRY2dmTEJEaEhaNFFVRWgxcXVMODVUbUxUZmhIUVVGc1htQTdrb1Q4d2hjK1dJQ0Foc1U2OGRJTCtydys3WXdJZG1BbjQ0UnFHZ25ma3R0cmNKUjJCQjVwb3YyK0RTd1MzMitydFwvUjJ2a01QOE9Ka0pOYUNjaTY3MjAyeWthXC9MMmo2anRsSDRPXC96OFh5YVlEMGZQQkdWWlRiMEJRRG1BTlVnc1pcL2NnN2tOWWVUbWVlb0U2eFpYM2VkbUJ0a0RTeEJBSmVJcUVLK3p4eE5hZ0xEQ3E3dmtiTlJBeVAwXC9mbXEweWpcL0Fodk1hYTlmWXEyWnM1UnlPS05XUWxrVUdmVUhwcDF0bDFFMjdkSjlKVUpzMlNsb05vZUFvVzl4aGp2alVCbWd2S1VXZU9cL0h0WlN1b2dUb2Z0WmVOVElRZ0FNT0NHSlwvTERvbDk0dG9MV0FKZXJRaXJaZEJzZTNcL2s0aWU0UUlaOWoxdmkzXC9ucXhmc2dBQlppN2lJbVBYU2Fpc050YmZGdWFRN294RGdGbGVsczFFUFFEMUZFNm9mZE1haVBrS2RjbzNUWElrSUlaT2xcL0lmVGlsT0RUWXp2Qjg2a0paQUdrSGNQbUZTQmFMSVN0bVFkTGx2VWxjREVsRSttQW5jcnVDeVwveU9lOGtGZExISWZQeW8xYW1RekVOOEk4UnlDbUJEZDduZGZncFBabng4dU5Oa3UrYVN2THlwbHMyaVN1RkZ5bXdHQUFvVkhjM3NEUjdYb0RIWlczNThjbFo2MFBIdUlGbEt4cmR4NXdmMnBzNCtNbUh6Q3IyRzVremh3MWtRQnFMOFdJVUcyMGxVRnN3bUtEdCtlVFpvbUV3NDkrUnFWY052ZUM4VlBDTjhVSlZoY0tTSnMzUzFLMFg5Y2Q5SFlHK3NhN3hycVVoWm9zQWFYTlArN21Qbkd6Q25Rb2NGN25McnExUG9ST01SaHcxZ3lWd1Y3YjQzVmhyWHZKSXBmUzZ3dkZzVWFheFNCSXkzQkVweGFXOEx0aG52SEwyMHNTeEdxMTRkZFpBQ2RZakphbmtqOCtRbTdGY0xHXC9wbEFMOWYyeFJMY0IzNFpkV082ZVNnNHVydnptRXRES1A0VVJVS2RLWEhmZVYwbGFVeFkrQXZ4XC9kV1RyUmt1SUlyUDFmOVpHM21qMlN3RFFtR3UremRzOGxcL0Y5SmEwTmxUVTJxTWtHckdxU2U5NjNwalM4a0Q0ZXRxMWYwXC9SRUtoRTFLOE1oUlZwZ3BTZG5aYzF5OGdkNEtjRWllWTU4cGtwZUF1Tzk1aW1NajZqYnUwWEtkK1ZMOEpaZUY4aGtuUkFKWVFiVVZ2ZVJWejFVSEcrUVNZZXdubnVrekdRc3R1N3NzUHJzY0JVTWg4MzVrMVFSK0FleE82Tm9CZlBQXC93TGtEaFJDcDBWbWpERDhqck1XTGNnUjh1SkIzQ1NFSnZydWx0eGp5S1FLeEZmR2VmU1hvWnBncmFMY0NDT01tY3A1NjhcL0tiUm90ZVh5Zmk0M0N3eThBaFF3Q0dycDR3RmczdDF5cXBJWitCRGJjT2dcLzJXM3NVUHl6ZEp3TmhaM1prSmdPNVltSlQ4QUdscno2ekEwdVNidWNwUDdNOVlwYTFtb1g4WHl6aUZ3MlwvOE1LcFdFRVhzSEVYN3F3a3hhbkhwR1pnbkM3ZDZoMTNxWHZRbUVwYldhVDZxQndtS09kaG4xXC9NU2xzTjVVSlhXaUp6VjNzcDBQWUhPOEtaNTZTZnhBb29jRjFlSExlN0tyVXJYK0NxVUhNXC9QSzRTSFdlRGFjVEhjTUp4cVV2clk4RDdFUGhPTEhcL25YbGE1eno3YWQ0Z1VhMWgyZkV6ZFlER0RoRWFOdHhYNlRBaE5rMWk0RUswSUtxTHoxT2xDajF4QVl1bjlHSWdHRmtzYmxxdGNqNlQxRHNsdnN4NFdoR3ZoeDQrM3dURUtpMkNrOGprUzFMWG1mTkNNYVlyR21WdVF2WEk0NU1ZSDh2NmZPWG93QzdCeE1Vd3dQdFJKUkhERVg4ZGxxSjREY0pcL1dOWnFXVnNMN1hoUzFodFFJQldGSmFnbVBHZUxVbXZqWlc2NDQ3bXpLRVRtRTVtT3RsRU1qRUlkek5pUmdWS2ZGeE9IOVFnRGg5TmRVZ2hnQ0RLVG1kSXlDVFI1ZktGWnNSSWNIbHRhandqZTd0VExzbnIzYWxmakRvNkkyNVVyNm15S3JyK1Z4TE5ORmw4WmhNcGphNXVlWHFmeCthR2w4V2F3cUN2SkozM3RKQ0tBc2laUnpzZVo0c0NEeTRhMGhtQXF5R2VJSEozaEFmaVV6N2Z5bWtaRk5Edkc3U3hoSzZlVWF2NEFNdHlxRm53UG5IVT0iLCJ0aW1lc3RhbXAiOiIyMDI1LTAxLTE0VDA5OjMxOjM5WiJ9';
var playreadyToken = 'eyJrZXlfcm90YXRpb24iOmZhbHNlLCJyZXNwb25zZV9mb3JtYXQiOiJvcmlnaW5hbCIsInVzZXJfaWQiOiJ1dSIsImRybV90eXBlIjoicGxheXJlYWR5Iiwic2l0ZV9pZCI6IkRFTU8iLCJoYXNoIjoiZ3NXRjh2UkhaNUtXUSt1cmZ2bUtqek0waUdzWGIrY1dHU001SlwvbTNWMlE9IiwiY2lkIjoidGVhcnNvZnN0ZWVsIiwicG9saWN5IjoiOVdxSVdrZGhweFZHSzhQU0lZY25Kc2N2dUE5c3hndWJMc2QrYWp1XC9ib2tDOVMyK3hBUFlSYm1mejh0b0VCMzg0bEo1dVwvZnZVeTlSS3N3MFA0VTMxbFNHMU1ZYlwvNFNBdk1tQnNIYWY1Nk1hQnVvQ1M0eFFjZ2ZMQkRoSFo0UVVFaDFxdUw4NVRtTFRmaEhRVUZzWG1BN2tvVDh3aGMrV0lDQWhzVTY4ZElMK3J3KzdZd0lkbUFuNDRScUdnbmZrdHRyY0pSMkJCNXBvdjIrRFN3UzMyK3J0XC9SMnZrTVA4T0prSk5hQ2NpNjcyMDJ5a2FcL0wyajZqdGxINE9cL3o4WHlhWUQwZlBCR1ZaVGIwQlFEbUFOVWdzWlwvY2c3a05ZZVRtZWVvRTZ4WlgwOFVTN1VSQm9vcVpaakQ0cHBsMkdjSnYrWlIyekNEckRZN3NRTFlyR3lISVwvbDF1XC9halM3WTZpZUJEOU9NUlwvZnU2N0Yzb29PdkpSM3RxWWF0cm9nSGpTMGVcLzh4VUtjQlk0Q3lzYXJ2OHUzMzJCQlNTYWxMZndoMm1xZ2FwZjFMUXR4UjVcLzVSemY2bjlHWGxWVWpnT01yRHJpb1lmbTJNRXA0YlNSN0xuUGVvZVBzdkc0bXgxY3NHRERsUHh0YmthcUR4bm45TFVwelVKVXVVWnVjalRFaVlRRXIzbTZaOVdnKzExSWVYbVN3TGlxNGkyeHpMbkJIenZVUUFcL0hodjNOSHdWd2RGMzhBUDZLaXltcElCM3QrV0ZiTEdnQVQzbUc5T1VTVnBROVwvbXoyMzJmcitBT0RtVmtaaEVsd0R4OFo5eTY4S05tWTFRUEZpalBuTE9UM0ZvYkFjN1Z5SzBEVGZqQ0YwRVRMRmE1WnJWMjlPTFQxWDJmbWpoNWVORVQzRjdISXUyZEpwQTNkXC9UMEU2N0prMEF4QXVROW1lUHhIcm91ODdRTUwwY1NNTmxUN1ZTRVRSSHR2d00rc2JmZTZkeGFiajhTcU9ZUGVCcXlTUThxdm4zT3JTUThZaXUwaURQRFZidUhGZXBsaHJYTnBDTnA0NVh4bmhob0owMG9TZWhSWmlxMnVyRVhGbEg1eFdIbHF3T2ZndmpSaUJ3OU1HV2RVRDFEZU9qbk1reHY5cEVPTkt5Q2tkbU1hUVBpcG90aE05NVltVEpsZjZaMHhHRlBwQWZoaFFmNnNsWGxmdGlyeHVqajJ3cTRheSt6eE5SUzJ5aGFwTEtUVDcrTVU5ZWpXWVh5ZlB2SVU1dDA4SnJDSUd2MzdVbVpTdlQ1T3FDRXRDNWxNQzdLRGhicXcxaHB0SFdDNGhPK3I3VU9Ja1wvNUM5cXdLcVVqd3dHc0M1V1lcLzVzRytBSjM4RDZBRDZWSzBRWU43bFZ6V1FacWE5TWF0NWNPb016WWJKaWtpUmlZZG1KN0k3R1dcL0owK0Zkc1RCKzc3alNNYnNsdUlHNFFaMDkzdW9FOTFEUjBmK29CXC92RVFQM3VubmY1QXBoSnBsT0JTeCt4THlJUWdVdDBaYVdCaHNuUjhteUZYdWsxRVhxQUNucnRrcVFDd0s4QXRyZDhPR2F6NTQralpscDkwc2dPV2RjUmpTMjdZOWRUanlENzJMNk5YN01iaW1yZmhxWitKUlJkQzA4cVdWalVVZXpkMGc2VWZKZXBPZko1Y1N4azFtU2JTdTNiXC9VWk8yUVpVdlhSbkxFMmloa2E3a2w0K0l1NVVpQTBxUGsrZ2FwcnY3czZoWmhqYXNVNThkNEdZakVjVzZKTmdNdjI4UFFQa1p6ZytXWnRTYVVhTkdTVlFER0thc0dXaGNMbDJEU09BTHkrcjRIQWNhdXZMWFVnS3NaWHNcL2ZMVnpDWm1mTGtFMm1CMjdLTXR3ZXdrWTE4eUNtSVNRME9VNFZLcnhXV1pLdWV3UmNmcUs5ZHIwejBGbVRER3Nqc0RNSjdyYXdYa3JmVUtYMjhqS3E3SHE3MzJvUGIyRDNnNDJ2ZCtmT0ZoaVBySzh4bVQ3cEJjeGRTaXd3TlFJNnNMTWNJSGN6MVkrc0RTbjlQSTR3TTJZYm50akVhbXZoeDR5QldTKzluaWh0d21xMk5ETlE3UTE5bFwvN0tDZmt4S2llTHBPa2x2RHZSSEZTb21lMzI4WFhUYVVHWk1GVXcydFppMGlJNndmUEsrbzF6OHVNVTllUmRxd3RRWitrQjJSZ2ZxXC82bGtGWVoxNkNMeTZUcllndGVPR2xCXC9lU1JXUG5xVzc5eTlmN0o3ZXZqQUR5OWt2MVNpTGxNYW1oMlh5blRGM05CaFwvcldEU0pSVFwvdFJTdU9ic21OU1Bib28rUERYNzV0TWlmQlwvNkIzXC9BRVo3S0xPUVwvd2R0QmE0QTQxNzRCa1FReDNHdmxISzdmelR4Nnd6ZGpDVDRWVlBYOTk4WVBtdkRCaG4wUU04Q3JCUDFHeE9JaktKVUkrQ21PWjJ6N3FMNDF4aHM3c250endqR2pFeHJJb1hxQWd2RFhoQmRiOTh4R0NYdjhGUndFaFk9IiwidGltZXN0YW1wIjoiMjAyNS0wMS0xNFQwOTo0MDo1NVoifQ==';
var fairplayToken = 'eyJrZXlfcm90YXRpb24iOmZhbHNlLCJyZXNwb25zZV9mb3JtYXQiOiJvcmlnaW5hbCIsInVzZXJfaWQiOiJ1dSIsImRybV90eXBlIjoiZmFpcnBsYXkiLCJzaXRlX2lkIjoiREVNTyIsImhhc2giOiIzT0tVdGZ2UklQbVlVWWpOTzV5MFJhVEdqOTl1Z2YxbFhubTdOamZNS01RPSIsImNpZCI6InRlYXJzb2ZzdGVlbCIsInBvbGljeSI6IjlXcUlXa2RocHhWR0s4UFNJWWNuSnNjdnVBOXN4Z3ViTHNkK2FqdVwvYm9tUVpQYnFJK3hhZVlmUW9jY2t2dUVmeERjY203Y1dkVlhxcmRNZ0FRam1xWjlvN1hMRnoyME5obUp2SWl3UWJ1aEtoK0MyZklITDlPdTFTT0FzaFBTQVZkeGFZVUpKcmxaNVUxdTVQY2VyMTQ1WkJzN2dzdlFzSWxsOUZUdldqdDdtaFo4cnd6N3JtU1hxREF0R2phNGxiZWtSeFwvWnJFbHh2QmFZdXRhYW91WUhJamQ2VmlFZVdkRWlHMkhXRUgwZzNxbUthbVBtSnZVSW43S1U4NmtQNCIsInRpbWVzdGFtcCI6IjIwMjUtMDEtMTdUMDc6Mjg6NTNaIn0=';

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

// checks which DRM is supported by the browser
async function checkSupportedDRM() {
  const config = [
    {
      initDataTypes: ['cenc'],
      audioCapabilities: [
        {
          contentType: 'audio/mp4;codecs="mp4a.40.2"',
        },
      ],
      videoCapabilities: [
        {
          contentType: 'video/mp4;codecs="avc1.42E01E"',
        },
      ],
    },
  ];
  const drm = {
    Widevine: {
      name: 'Widevine',
      mediaKey: 'com.widevine.alpha',
    },
    PlayReady: {
      name: 'PlayReady',
      mediaKey: 'com.microsoft.playready',
    },
    FairPlay: {
      name: 'FairPlay',
      mediaKey: 'com.apple.fps.1_0',
    },
  };
  let supportedDRMType = '';
  for (const key in drm) {
    // check to support SL3000
    if (drm[key].name === 'PlayReady') {
      try {
        await navigator
            // @ts-ignore
            .requestMediaKeySystemAccess(
                'com.microsoft.playready.recommendation.3000',
                config,
            )
            .then((mediaKeySystemAccess) => {
              supportSl3000 = true;
            })
            .catch((e) => {
              console.log(e);
            });
      } catch (e) {
        console.log(e);
      }
    }
    try {
      await navigator
          .requestMediaKeySystemAccess(drm[key].mediaKey, config)
          .then((mediaKeySystemAccess) => {
            supportedDRMType = drm[key].name;
            console.log(supportedDRMType + ' support ok');
          })
          .catch((e) => {
            console.log(key + ' :: ' + e);
          });
    } catch (e) {
      console.log(e);
    }
    drmType = supportedDRMType;
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