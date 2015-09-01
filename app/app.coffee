MyModule = require("./modules/myModule.coffee")

MyModule.myFunction()

layer = new BackgroundLayer
	backgroundColor: "#28af22"

# Create layer
layerA = new Layer
	x: 100
	y: 100
	width: 200
	height: 200 
	borderRadius: 8
	backgroundColor: "green"

layerA.animate
	properties:
		x: 400