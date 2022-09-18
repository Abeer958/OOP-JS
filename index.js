// Object Literal (with behavior i.e. a method)
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log("draw")
    }
};

circle.draw();

//---------------------------------------------------------

// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log("draw")
        }
    }
};

const factoryCircle = createCircle(1);

//---------------------------------------------------------

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
};

const constructorCircle = new Circle(1);

//---------------------------------------------------------
