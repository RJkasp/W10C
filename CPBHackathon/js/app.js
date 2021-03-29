//-Cookie function that saves the information and uses a href to bring you to next page 
function makeSelection(makeSelections){     // selcted pokemon with health and value of health location send them to the battle page as soon as selected.
    Cookies.set("pokemon", makeSelections);
    location.href = "pages/battle.html";
    Cookies.set('health', '100')
}

