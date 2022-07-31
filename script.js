let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionsButtons = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let likeButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

//List of fontList
let fontList = ["Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Couries New",
    "cursive",
];

    //Initial Settings 
const initializer = () => {
    //function calls for highlighting buttons
    //no highlights for link, unlink, list, un, redo, since they are one time operations
    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, false);
    highlighter(spacingButtons, true);
}