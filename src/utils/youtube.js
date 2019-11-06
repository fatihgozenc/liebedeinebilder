var xhr = new XMLHttpRequest();
xhr.open("GET", prompt('url:', location.href), true);

xhr.onload = function () {
	var r = xhr.responseText;
	r = r.substring(r.indexOf('url_encoded_fmt_stream_map', r.length));
	r = r.substring(r.indexOf('url=http') + 4, r.length);
	console.log(r)

	r = r.split('url=');

	console.log('Best Quality: ');
	console.log(decodeURIComponent(r[0].substring(0, r[0].indexOf('\\\\'))));

	console.log('Lower Quality: ');
	console.log(decodeURIComponent(r[1].substring(0, r[1].indexOf('\\\\'))));

	console.log('Lower Quality: ');
	console.log(decodeURIComponent(r[2].substring(0, r[2].indexOf('\\\\'))));
};

xhr.send();

"https%3A%2F%2Fr5---sn-i5heen7l.googlevideo.com%2Fvideoplayback%3Fexpire%3D1573012088%26ei%3DF-7BXf2eAu2y-gbjkJYY%26ip%3D2a02%253A810a%253A8cc0%253A1a2f%253A9f0%253Acfe2%253Ab917%253Af49d%26id%3Do-AMYSIK2BpFVB26DL1EQdbpCe7Tf8JBiODO1U30z3QCA4%26itag%3D18%26source%3Dyoutube%26requiressl%3Dyes%26mm%3D31%252C26%26mn%3Dsn-i5heen7l%252Csn-4g5ednsz%26ms%3Dau%252Conr%26mv%3Dm%26mvi%3D4%26pl%3D33%26initcwndbps%3D1671250%26mime%3Dvideo%252Fmp4%26gir%3Dyes%26clen%3D8822307%26ratebypass%3Dyes%26dur%3D106.997%26lmt%3D1552834654191560%26mt%3D1572990357%26fvip%3D5%26fexp%3D23842630%26c%3DWEB%26txp%3D2211222%26sparams%3Dexpire%252Cei%252Cip%252Cid%252Citag%252Csource%252Crequiressl%252Cmime%252Cgir%252Cclen%252Cratebypass%252Cdur%252Clmt%26lsparams%3Dmm%252Cmn%252Cms%252Cmv%252Cmvi%252Cpl%252Cinitcwndbps%26lsig%3DAHylml4wRQIhAL5bdsndRQdtxvA2ZVGPKmYvPUnngskgxcNAchWEcgk_AiBeVaZWuGZJbJCmIMMEFBjlH2fbqQ9no6m2-e9aJKzVcA%253D%253D\\u0026s=F%3Dw%3D%3DwjnKfRMvxPv%3DMZcldwKGVmctFWJLo55BKOatlb6Lok9BiA5alOm7u9glVWG_wrkoASL_ABeqXHUJY_RAGCUglv2pLAhIQRww2IxgLugL6\\u0026sp=sig\"}],\"adaptiveFormats\":[{\"itag\":137,\"mimeType\":\"video\/mp4; codecs=\\\"avc1.640028\\\"\",\"bitrate\":3981493,\"width\":1440,\"height\":1080,\"initRange\":{\"start\":\"0\",\"end\":\"764\"},\"indexRange\":{\"start\":\"765\",\"end\":\"1036\"},\"lastModified\":\"1552834675648041\",\"contentLength\":\"44735380\",\"quality\":\"hd1080\",\"fps\":30,\"qualityLabel\":\"1080p\",\"projectionType\":\"RECTANGULAR\",\"averageBitrate\":3346577,\"approxDurationMs\":\"106940\",\"cipher\":\""

"https://r5---sn-i5heen7l.googlevideo.com/videoplayback?expire=1573012088&ei=F-7BXf2eAu2y-gbjkJYY&ip=2a02%3A810a%3A8cc0%3A1a2f%3A9f0%3Acfe2%3Ab917%3Af49d&id=o-AMYSIK2BpFVB26DL1EQdbpCe7Tf8JBiODO1U30z3QCA4&itag=18&source=youtube&requiressl=yes&mm=31%2C26&mn=sn-i5heen7l%2Csn-4g5ednsz&ms=au%2Conr&mv=m&mvi=4&pl=33&initcwndbps=1671250&mime=video%2Fmp4&gir=yes&clen=8822307&ratebypass=yes&dur=106.997&lmt=1552834654191560&mt=1572990357&fvip=5&fexp=23842630&c=WEB&txp=2211222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&lsparams=mm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AHylml4wRQIhAL5bdsndRQdtxvA2ZVGPKmYvPUnngskgxcNAchWEcgk_AiBeVaZWuGZJbJCmIMMEFBjlH2fbqQ9no6m2-e9aJKzVcA%3D%3D\\u0026s=F=w==wjnKfRMvxPv=MZcldwKGVmctFWJLo55BKOatlb6Lok9BiA5alOm7u9glVWG_wrkoASL_ABeqXHUJY_RAGCUglv2pLAhIQRww2IxgLugL6\\u0026sp=sig\"}],\"adaptiveFormats\":[{\"itag\":137,\"mimeType\":\"video\/mp4; codecs=\\\"avc1.640028\\\"\",\"bitrate\":3981493,\"width\":1440,\"height\":1080,\"initRange\":{\"start\":\"0\",\"end\":\"764\"},\"indexRange\":{\"start\":\"765\",\"end\":\"1036\"},\"lastModified\":\"1552834675648041\",\"contentLength\":\"44735380\",\"quality\":\"hd1080\",\"fps\":30,\"qualityLabel\":\"1080p\",\"projectionType\":\"RECTANGULAR\",\"averageBitrate\":3346577,\"approxDurationMs\":\"106940\",\"cipher\":\""

"https://r5---sn-i5heen7l.googlevideo.com/videoplayback?expire=1573012088
ei = F - 7BXf2eAu2y - gbjkJYY
ip = 2a02 % 3A810a % 3A8cc0 % 3A1a2f % 3A9f0 % 3Acfe2 % 3Ab917 % 3Af49d
id = o - AMYSIK2BpFVB26DL1EQdbpCe7Tf8JBiODO1U30z3QCA4
itag = 18
source = youtube
requiressl = yes
mm = 31 % 2C26
mn = sn - i5heen7l % 2Csn - 4g5ednsz
ms = au % 2Conr
mv = m
mvi = 4
pl = 33
initcwndbps = 1671250
mime = video % 2Fmp4
gir = yes
clen = 8822307
ratebypass = yes
dur = 106.997
lmt = 1552834654191560
mt = 1572990357
fvip = 5
fexp = 23842630
c = WEB
txp = 2211222
sparams = expire % 2Cei % 2Cip % 2Cid % 2Citag % 2Csource % 2Crequiressl % 2Cmime % 2Cgir % 2Cclen % 2Cratebypass % 2Cdur % 2Clmt
lsparams = mm % 2Cmn % 2Cms % 2Cmv % 2Cmvi % 2Cpl % 2Cinitcwndbps
lsig = AHylml4wRQIhAL5bdsndRQdtxvA2ZVGPKmYvPUnngskgxcNAchWEcgk_AiBeVaZWuGZJbJCmIMMEFBjlH2fbqQ9no6m2 - e9aJKzVcA % 3D % 3D\\u0026s = F = w == wjnKfRMvxPv=MZcldwKGVmctFWJLo55BKOatlb6Lok9BiA5alOm7u9glVWG_wrkoASL_ABeqXHUJY_RAGCUglv2pLAhIQRww2IxgLugL6\\u0026sp = sig\"}],\"adaptiveFormats\":[{"itag":137,
"mimeType": "video/mp4; codecs="avc1.640028"",
	"bitrate": 3981493,
		"width": 1440,
			"height": 1080,
				"initRange": {
	"start": "0",
		"end": "764"
},
"indexRange": {
	"start": "765",
		"end": "1036"
},
"lastModified": "1552834675648041",
	"contentLength": "44735380",
		"quality": "hd1080",
			"fps": 30,
				"qualityLabel": "1080p",
					"projectionType": "RECTANGULAR",
						"averageBitrate": 3346577,
							"approxDurationMs": \"106940\",
\"cipher\":\""