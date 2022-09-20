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

// Creating a stopwatch.
// Note: new JS changed it from a constructor function to a class declaration/
class Stopwatch {
    constructor() {
        let startTime, endTime, duration, running = 0;
        this.start = function () {
            if (running) {
                throw new Error('Stopwatch already running.');
            }
            startTime = new Date();
            running = true;
        };
        this.stop = function () {
            if (!running) {
                throw new Error('Stopwatch is not running.');
            }
            running = false;
            endTime = new Date();

            const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
            duration = seconds;
        };

        this.reset = function () {
            startTime = null;
            endTime = null;
            running = false;
            duration = 0;
        };

        Object.defineProperty(this, 'duration', {
            get: function() { return duration; }
        });
    }
}

// To test the Stopwatch function run the code below:

// const sw = new Stopwatch();
// sw.start();
// sw.stop();
// sw.duration;
// sw.reset();