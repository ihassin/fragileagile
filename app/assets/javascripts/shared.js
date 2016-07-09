function dim(buttons) {
    buttons.map(function (button) {
        setOpacity(button, 0.4)
    } )
}

function comments(obj) {
    document.getElementById('comments').value = obj.title + ': ' + obj.comments;
}

function undim(buttons) {
    buttons.map(function (button) {
        setOpacity(button, 1)
    } )
}

function setOpacity(button, value) {
    document.getElementById(button).style.opacity = value;
}

function show(buttons) {
    buttons.map(function (button) {
        if(document.getElementById(button).style.opacity < 1) {
            elem = "#" + button

            $(elem).hide();
            setOpacity(button, 1)
            $(elem).fadeIn(1000);
        }

    } )
}

function hide(buttons) {
    buttons.map(function (button) {
        setOpacity(button, 0.125)
    } )
}

function drawObject(fromObj, toObj, dotted) {
    drawLine(fromObj.x, fromObj.y, toObj.x, toObj.y, dotted)
}

function drawLine(fromX, fromY, toX, toY, dotted) {
    if (dotted) {
        context.setLineDash([2,10]);
    } else {
        context.setLineDash([]);
    }
    context.beginPath();

    context.moveTo(fromX + (110/2), fromY + 12);
    context.lineTo(toX   + (110/2), toY + 12);

    midX = (fromX + toX)/2;
    midY = (fromY + toY)/2;
    d = Math.sqrt(Math.pow((midX - current.x), 2) + Math.pow((midY - current.y),2));

    // debugger
    // console.log(d);

    a = 1 - (Math.sqrt(d) / 40);

    a = Math.max(a, 0.125)
    context.strokeStyle = "rgba(0,0,255,"+a+")";
    context.stroke();
}
