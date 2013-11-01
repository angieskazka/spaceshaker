    function createObject(){
    touchArea = document.getElementById('touch');
        explanation = document.getElementById('explanation');
        defineHeight = {};
        defineHeight.on=false;
        this.explained = false;

    Hammer(touchArea).on("pinchout", function(event) {
        if(!defineHeight.on){
        var scale = Math.round(event.gesture.scale*100);
        touchArea.lastChild.style.width = scale + 'px';
        touchArea.lastChild.style.height=scale + 'px';
        }
    });


    Hammer(touchArea).on("touch", function(event) {
        if (event.gesture.touches.length==2 && !defineHeight.on) {

    if (!this.explained){
    explanation.textContent="Yes, like that you make a box base";
    }else{
        explanation.style.display = 'none';
    }

    newDiv = $('<div id="newDiv">');
    //newDiv.addClass("square");
    newDiv.css('float', 'left');
    newDiv.css('margin', '20px');
    newDiv.css('opacity',0.4);
     newDiv.css('border','20px solid orange');
     newDiv.css('border-radius','20%');

            var c;
            switch (Math.round(Math.random()*3)){
            case 0: c='red'; break;
            case 1: c='green'; break;
            case 2: c='blue'; break;
            case 3: c='red'; break;
            default: c='black';
            }

    newDiv.css("background-color",c);

    newDiv.appendTo(touchArea);
        }
    });

    Hammer(touchArea).on("release", function(event) {
         if (event.gesture.touches.length==2) {

    if (!this.explained){
    explanation.textContent="Now swipe left or right to cut off the box";
    }
    defineHeight.on = true;
    console.log("released, scale: " + event.gesture.scale);
        }

    });


    Hammer(touchArea).on("swipeleft swiperight", function(event) {
        console.log(event.gesture.target);
        newDiv.css('border','none');
        newDiv.css('border-radius','0%');

        if (!this.explained){
        explanation.textContent=(newDiv.css('width') + " box created. Create more!");
        this.explained=true;
        }
        defineHeight.on = false;


    });

    HiddenObject.generateObjects(
            ['red', 'green', 'blue'],
            {
                x: { min: -500,	max: 500  },
                y: { min: 0,	max: 700 },
                z: { min: 1200,	max: 1600 }
            },
            {
                w: 200, h: 200, d: 200
            }
        );
    }