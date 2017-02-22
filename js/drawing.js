
// 8. Test it out.

enableDrawing();

function enableDrawing() {
// 1. MouseEvent name that fires when you hold your mouse button down.
// btw . . . I like this activity a lot more with mousemove instead of click. But you said it had to be an event that happened with a mouse click, so here you go. 
    document.addEventListener('click', function(e) { console.log(e)
// 2. Random number from 0 - 255, rounded.
        var red = Math.ceil(Math.random() *255);
// 3. Random number from 0 - 255, rounded.
        var green = Math.ceil(Math.random() *255);
// 4. Random number from 0 - 255, rounded.
        var blue = Math.ceil(Math.random() *255);
        var box = document.createElement('div');
        box.style.position = 'absolute';
        // anytime you see "style", you are creating a CSS property. You do that here and not in a CSS file because then you can't dynamically change it.
// 5. MouseEvent (inside the e variable) Y value.
// Googled and tried at least four different ways, including the way that worked, before Jeff helped me make it work. (I had accidentally left part of another attempt added on.) Tried: setting both to 0, document.getElementById('mouseY').value, e.clientY, e.pageY, and printMousePos. no joy. Jeff helped me go back to e.pageX, spotted that I'd missed deleting part of another attempt and it worked that time. 
// top means Y axis of the page.
        box.style.top = e.pageY + 'px';
// 6. MouseEvent (inside the e variable) X value.
// ditto.
// I found this, but that doesn't seem to be what it is you're looking for, because you just said to fill in the blanks:
    // document.onmousemove = function(e) {
    //     e = e || window.event
    //     fixPageXY(e)
    //     document.getElementById('mouseX').value = e.pageX
    //     document.getElementById('mouseY').value = e.pageY
    // }
//     left means x axis of the page.
        box.style.left = e.pageX + 'px';
        box.style.width = '10px';
        box.style.height = '10px';
// 7. Change the backgroundColor string to use your red, green, blue values.
        box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        // use the tickies on the outside of the right side for to turn it into a string and then the ${} on the inside so that the div box (made on line 16) can interact with the variables red, green, and blue. 

        document.body.appendChild(box);
    });
}
