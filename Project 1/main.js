function randColor() {
    let colors = ['orange', 'pink', 'purple', 'black', "yellow", "darkgray", "fuchsia"];
    let color = colors[Math.floor(Math.random() * colors.length)];
    return color;
}


$(document).ready(function () {
    $("rect, circle, polygon, line, path").click(function () {
        let color = randColor();
        if ($(this).is("rect")) {
            $(this).css({ fill: color, stroke: color });
        } else {
            let colors = ['magenta', 'lightcoral', 'deeppink', 'chocolate', 'blue', 'red'];
            let color = colors[Math.floor(Math.random() * colors.length)];
            $(this).css({ fill: color, stroke: color });
        }

        if ($("svg").hasClass("down")) {
            $("line").attr({ "y1": "180", "y2": "320" });
            $("circle").attr({ "cx": "420", "cy": "280" });
            $("#cube").attr("points", "80,180 120,200 120,160 80,150");
            $("svg").attr("class", "up")
        } else {
            $("line").attr({ "y1": "320", "y2": "180" });
            $("circle").attr({ "cx": "90", "cy": "275" });
            $("#cube").attr("points", "380,195 420,179 410,160 370,180");
            $("svg").attr("class", "down")

        };
        // $("svg").toggleClass("up down");
    });
});

$(document).ready(function () {
    $("button").click(function () {
        if ($(this).text().startsWith('Skjul')) {
            $(".docs").hide();
            $(this).text("Vis dokumentasjon");
        } else {
            $(".docs").show();
            $(this).text("Skjul dokumentasjon");
        }
    });
});


var canv = document.getElementById("picasso").getContext("2d");

canv.fillStyle = "red";

function drawCircle(x = 90, y = 275) {
    canv.beginPath();
    canv.arc(x, y, 40, 0, 2 * Math.PI);
    canv.fill();
    canv.closePath();
};
drawCircle();


function drawTriangle() {
    canv.beginPath();
    canv.moveTo(225, 320);
    canv.lineTo(275, 320);
    canv.lineTo(250, 250);
    canv.closePath();
    canv.fill();
};
drawTriangle();

function drawRectangle(x0 = 380, y0 = 195, x1 = 420, y1 = 179, x2 = 410, y2 = 160, x3 = 370, y3 = 180) {
    canv.beginPath();
    canv.moveTo(x0, y0);
    canv.lineTo(x1, y1);
    canv.lineTo(x2, y2);
    canv.lineTo(x3, y3);
    canv.closePath();
    canv.fill();
}
drawRectangle();

function drawSeeSaw(x0 = 80, y0 = 320, x1 = 420, y1 = 180) {
    canv.strokeStyle = "blue";
    canv.beginPath();
    canv.moveTo(x0, y0);
    canv.lineWidth = 5;
    canv.lineTo(x1, y1);
    canv.stroke();
    canv.closePath();

};
drawSeeSaw();


function drawCurve() {
    canv.beginPath();
    canv.moveTo(0, 400);
    canv.bezierCurveTo(150, 290, 350, 290, 500, 400);
    canv.strokeStyle = "gray";
    canv.fillStyle = "green"
    canv.lineWidth = 5;
    canv.stroke();
    canv.fill();
    canv.closePath();
} drawCurve();

$(document).ready(function () {
    $("canvas").click(function () {

        canv.clearRect(0, 0, 500, 400);
        drawTriangle();
        drawCurve();
        canv.fillStyle = "red";

        $("canvas").css("background-color", randColor());


        if ($("canvas").hasClass("down")) {
            drawRectangle(80, 180, 120, 200, 120, 160, 80, 150);
            drawCircle(420, 280);
            drawSeeSaw(420, 320, 80, 180);
            $("canvas").attr("class", "up");


        } else {
            drawRectangle();
            drawCircle();
            drawSeeSaw();
            $("canvas").attr("class", "down");
        }


    });
});
