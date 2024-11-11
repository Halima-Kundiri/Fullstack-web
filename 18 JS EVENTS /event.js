/*
    EVENT
    ONCLICK
        *user clicks on the HTML element
    ONMOUSEOVER
        *user moves the mouse over an HTML element
    ONSIZE
        *user window is resized.
    ONLOAD
        *browser finished loading the page

        
    MORE EVENTS

    MOUSE EVENTS
        *onClick, ondbClick, onmouseDown, onmouseEnter,
        onMouseLeave, onMouseMove, OnMouseOut

    KEYBOARD EVENTS
        *onKeydown, onKeyPree, OnkeyUp
        
    FRAME EVENT
        *onload, onResize, onScroll, onError,...
        
    COMPREHENSIVE LIST
        https://developer.mozilla.org/en-US/docs/Web/API/Event
*/


function myfuction(msg){
    document.getElementById('display').innerHTML=msg+ "Event"
}

// Javascript Build in Fuction
function displaydate(){
document.getElementById('display-date').innerHTML=Date();
}