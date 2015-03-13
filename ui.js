window.onload = function() { // called when all window objects are loaded
    c = document.getElementById("maincanvas"); // gets canvas
    ctx = c.getContext("2d"); // gets canvas context
    resizeCanvas(); // sets canvas size
    c.addEventListener("mousedown", function(e) { // called on canvas click
        clickX = e.pageX; // assigns location of click X to clickX
        clickY = e.pageY; // assigns location of click Y to clickY
        for (var i = 0; i < pageObjects.length; i++) { // iterates through page objects
            var cO = pageObjects[i]; // shortens object name
            if ( // checks for location of click
                clickX >= cO.x &&
                clickY >= cO.y &&
                clickX <= cO.x + cO.width &&
                clickY <= cO.y + cO.height
            ) {
                cO.click(); // calls click function of page object
            }
        }
    }, false);
    createPage(); // creates page objects
    renderLoop(); // begins the render loop
};
var c, ctx, clickX, clickY, pageObjects = []; // misc vars
function createPage() { // creates page objects
    pageObjects.push({ // adds new page object to pageObjects array; I think the keys have pretty self-explanatory names.
        x: 0,
        y: 0,
        width: c.width / 24,
        height: 48,
        text: "Item 1",
        click: function() {
            alert("You clicked Item 1.");
        }
    });
    pageObjects.push({
        x: c.width / 24,
        y: 0,
        width: c.width / 24,
        height: 48,
        text: "Item 2",
        click: function() {
            alert("You clicked Item 2.");
        }
    });
    pageObjects.push({
        x: (c.width / 24) * 2,
        y: 0,
        width: c.width / 24,
        height: 48,
        text: "Item 3",
        click: function() {
            alert("You clicked Item 3.");
        }
    });
    pageObjects.push({
        x: (c.width / 24) * 3,
        y: 0,
        width: c.width / 24,
        height: 48,
        text: "Item 4",
        click: function() {
            alert("You clicked Item 4.");
        }
    });
    pageObjects.push({
        x: (c.width / 24) * 4,
        y: 0,
        width: c.width / 24,
        height: 48,
        text: "Item 5",
        click: function() {
            alert("You clicked Item 5.");
        }
    });
}
function renderLoop() { // render loop for canvas
    resizeCanvas(); // sets canvas size in case of window resize, simultaneously clears canvas
    for (var i = 0; i < pageObjects.length; i++) { // iterates through page objects
        var cO = pageObjects[i]; // shortens variable name
        ctx.strokeRect(cO.x, cO.y, cO.width, cO.height); // draws page object outline
        ctx.fillText(cO.text, cO.x + cO.width / 2 - 10, cO.y + cO.height / 2 - 5); // draws page object text
    }
    window.requestAnimationFrame(renderLoop); // calls this function again
}
function resizeCanvas() { // assigns dimensions
    c.width = getWidth();
    c.height = getHeight();
}
function getWidth() { // gets width, setup for cross-browser compatibility
    if (self.innerHeight) {
        return self.innerWidth;
    }
    if (document.documentElement && document.documentElement.clientHeight) {
        return document.documentElement.clientWidth;

    }
    if (document.body) {
        return document.body.clientWidth;
    }
}

function getHeight() { // gets height, setup  for cross-browser compatibility
    if (self.innerHeight) {
        return self.innerHeight;
    }
    if (document.documentElement && document.documentElement.clientHeight) {
        return document.documentElement.clientHeight;
    }
    if (document.body) {
        return document.body.clientHeight;
    }
}
