let textAreaHTML = document.querySelector(".textArea");

let buttonSelectHTML = document.querySelector(".buttonAccept")

buttonSelectHTML.addEventListener("click", (event)=>
{
    textAreaHTML.value = fixText(textAreaHTML.value);
    event.preventDefault();
})

function fixText (string)
{
    let regex =/'/ig;
    newstring = string.replace(regex, '"');
    regex = /\b"\b/;
    newstring1 = newstring.replace(regex, "'");
    return newstring1;
}