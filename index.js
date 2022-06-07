// code your solution here
//saturdayFun function
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

saturdayFun("bathe my dog!");

// mondayWork funtion
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

mondayWork("work from home");

//wrapObjective

function wrapAdjective(style = "*") {
    return function(adjective = "special") {
        return `You are ${style}${adjective}${style}!`;    }
}