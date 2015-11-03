if not Framer.Device
	# From framer.generated.js
	Framer.Defaults.DeviceView = {"deviceScale":-1,"deviceType":"iphone-6-silver","contentScale":1,"orientation":0};
	Framer.Defaults.DeviceComponent = {"deviceScale":-1,"deviceType":"iphone-6-silver","contentScale":1,"orientation":0};
	Framer.Device = new Framer.DeviceView();
	Framer.Device.setupContext();
	# End from framer.generated.js 

MyModule = require("myModule")

MyModule.myFunction()


bkgLayer = new BackgroundLayer
	backgroundColor: "black"


layerA = new Layer
	x: 100
	y: 100
	width: 200
	height: 200
	borderRadius: 8
	backgroundColor: "#28affa"

layerA.on Events.Click, ->
    print "Click!"