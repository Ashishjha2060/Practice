// DOM stands for "Document Object Model".
// DOM is how JS views a webpage..like when a JS is written for a HTML page, then it represents it as a tree of objects.
// If a HTML page has code : 
{/* <body>
  <h1>Hello</h1>
  <button>Click me</button>
</body>

then DOM sees as - Document>html>body>hi>button */}

// It is simply a model that JS uses to find or change these elements.


//--------------------------------------------------------------------------------------------------------------------//


// document.querySelector()
//-- It helps to connect the JavaScript to the HTML, so that it can read or change content, styles, or respond to events.--//

const button = document.querySelector("button");  
const heading = document.querySelector("h1");     
const input = document.querySelector("#myInput"); 

// It fetches the first matching tag or element from the code and works upon it.


// element.addEventListener()
// addEventListener() is a JavaScript method used to listen for an event (like a click, key press, mouse move, etc.) on an element — and then do something when that event happens.

element.addEventListener("event", Function);
// Here element is the HTML element on ehich we want the event to happen.
// event is the type of event like "click" or "pagedown" or "press any key".
// Function is the code that is needed to run when the event takes place.

// ------------------------------------------------------------------------------------------------------------------//