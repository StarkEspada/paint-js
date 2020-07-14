var brush = document.querySelector(".brush");
var brushSize = document.querySelector(".brush-size");
var brushColor = document.querySelector(".brush-color");
var cleanCanvas = document.querySelector(".clean-canvas");
var containerCanvas = document.querySelector(".container-canvas");
var containerColor = document.querySelector(".container-color");
var containerSize = document.querySelector(".container-size");
var size = document.querySelector(".size");
var saveSize = document.querySelector(".save-size");
var editDrawing = document.querySelector(".edit-drawing");
var palette = document.querySelector(".palette");
var figure = document.querySelector(".figure");
var radius = document.querySelector(".radius")
var containerRadiusParam = document.querySelector(".container-radius-param");
var numberRadiusMove = document.querySelector(".number-radius-move");
var saveParamMove = document.querySelector(".save-param-move");
var numberRadiusStay = document.querySelector(".number-radius-stay");
var saveParamStay = document.querySelector(".save-param-stay");
var containerFigure = document.querySelector(".container-figure")
var circle = document.querySelector(".circle")
var square = document.querySelector(".square")
var rectangle = document.querySelector(".rectangle")


var dataColor = ["red", "green", "blue", "brown", "orange", "yellow", "gray", "purple"]


var ctx = containerCanvas.getContext("2d");
var elColor = "";
var pointsX = "";
var pointsY = "";
var elSize = "";
var idPalette = "";
var paramRadiusMove = "";
var paramRadiusStay = "";

var pi = Math.PI;


var showContainerColor = false
var showSizeBrush = false
var paletteOnOff = false
var id = 0



containerColor.style.display = "none";
containerSize.style.display = "none";
containerRadiusParam.style.display = "none";
containerFigure.style.display = "none";



brushColor.addEventListener("click", function(){
	containerColor.innerHTML = ""
	showContainerColor = true
	containerColor.style.display = "block"
	for(var i = 0; i < dataColor.length; i++){
		var boxColor = document.createElement("div")
		boxColor.classList.add("box-color")
		containerColor.appendChild(boxColor)
		boxColor.style.background = dataColor[i]
		boxColor.setAttribute("color", dataColor[i])

		boxColor.addEventListener("click", function(){
			var elementColor = event.target
			console.log(elementColor)
			elColor = elementColor.getAttribute("color")
			console.log(elColor)
			ctx.strokeStyle = elColor;
		})
	}
})

palette.addEventListener("click", function(){
	containerColor.style.display = "none"
	containerColor.innerHTML = ""
})

palette.addEventListener("input", function(){
	paletteOnOff = true
	idPalette = palette.value
	ctx.strokeStyle = idPalette
})

brushColor.addEventListener("click", function(){
	containerColor.style.display = "block"
})


brushSize.addEventListener("click", function(){
	showSizeBrush = true
	containerSize.style.display = "block"

	saveSize.addEventListener("click", function(){
		elSize = size.value
		ctx.lineWidth = elSize
	})
})


function draw(){
	containerCanvas.onmousedown = function(event){
			ctx.beginPath()
		containerCanvas.onmousemove = function(event) {
			var coordinateX = event.offsetX;
			var coordinateY = event.offsetY
			ctx.lineTo(coordinateX, coordinateY)
			ctx.stroke()
		}
		containerCanvas.onmouseup = function(){
			containerCanvas.onmousemove = null;
		}
	}
}
	
function checkingWhetherPaletteEnabledDisabled(){
	if(paletteOnOff === false){
		ctx.strokeStyle = "black"
	} else {
		ctx.strokeStyle = idPalette
	}
}


brush.addEventListener("click", function(){
	checkingWhetherPaletteEnabledDisabled()
	draw()
})


radius.addEventListener("click", function(){
	containerRadiusParam.style.display = "inline-block";
	saveParamMove.addEventListener("click", function(){
		paramRadiusMove = numberRadiusMove.value
		console.log(paramRadiusMove)
	})
	saveParamStay.addEventListener("click", function(){
		paramRadiusStay = numberRadiusStay.value
		console.log(paramRadiusStay)
	})
	
})


figure.addEventListener("click", function(){
	containerFigure.style.display = "block";
})

	circle.addEventListener("click", function(){
		checkingWhetherPaletteEnabledDisabled()
		ctx.strokeStyle = elColor
		containerCanvas.onclick = function(){
			ctx.beginPath()
			var coordinateX = event.offsetX;
			var coordinateY = event.offsetY
			ctx.arc(event.offsetX, event.offsetY, paramRadiusStay, 0, 2*pi, false)
			ctx.stroke()
		}
		editDrawing.onclick = function(){
			containerCanvas.onclick = null
		}

		containerCanvas.onmousedown = function(event){
				ctx.beginPath()
			containerCanvas.onmousemove = function(event) {
				var coordinateX = event.offsetX;
				var coordinateY = event.offsetY
				ctx.arc(event.offsetX, event.offsetY, paramRadiusMove, 0, 2*pi, false)
				ctx.stroke()
			}
			containerCanvas.onmouseup = function(){
				containerCanvas.onmousemove = null;
			}
		}
	circle.onclick = function(){
		containerCanvas.onclick = null
	}		
	})

	square.addEventListener("click", function(){
		
		containerCanvas.onclick = function(){
			var coordinateX = event.offsetX;
			var coordinateY = event.offsetY
			
			if(paletteOnOff === true){
				ctx.fillStyle = idPalette
			}else{
				ctx.fillStyle = elColor
			}
			ctx.fillRect(coordinateX, coordinateY, coordinateX/2, coordinateX/2)
		}
		square.onclick = function(){
			containerCanvas.onclick = null
		}
	})
	rectangle.addEventListener("click", function(){
		
		containerCanvas.onclick = function(){
			
			var coordinateX = event.offsetX;
			var coordinateY = event.offsetY
			ctx.fillStyle = elColor
			if(paletteOnOff === true){
				ctx.fillStyle = idPalette
			}else{
				ctx.fillStyle = elColor
			}
			ctx.fillRect(coordinateX, coordinateY, coordinateY/2, coordinateX/2)
		}
		rectangle.onclick = function(){
			containerCanvas.onclick = null
		}
	})





editDrawing.addEventListener("click", function(){
	draw()
	ctx.strokeStyle = "white"
})


cleanCanvas.addEventListener("click", function(){
	ctx.strokeStyle = "black"
	event.preventDefault()
	ctx.beginPath()
	ctx.clearRect(0, 0, 1700, 1700)
	
})



/*containerCanvas.addEventListener("mousedown", function(){
			coordinateCenterX = event.offsetX;
			coordinateCenterY = event.offsetY
			console.log(coordinateCenterX)
			console.log(coordinateCenterY)
})

containerCanvas.addEventListener("mouseup", function(){
			coordinateEdgeX = event.offsetX;
			coordinateEdgeY = event.offsetY
			console.log(coordinateEdgeX)
			console.log(coordinateEdgeY)

})*/


















/*containerCanvas.addEventListener("mousedown", function(){
	containerCanvas.addEventListener("mousemove", function(){
		var x = event.offsetX
		var y = event.offsetY
		ctx.lineTo(x, y)
		ctx.stroke()
		console.log(x)
		console.log(y)
	})

})
containerCanvas.addEventListener("mouseup", function(){
	containerCanvas.removeEventListener("mousedown", () => console.log('Спасибо!'));
})*/