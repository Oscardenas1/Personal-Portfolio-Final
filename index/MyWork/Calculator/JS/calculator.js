
function num1(choiceNum)
{
    if (document.getElementById('1').clicked = true)
    {
        let n1 = 1;
        
    }

    if (document.getElementById('2').clicked = true){let n2 = 2;}

    if (document.getElementById('3').clicked = true){let n3 = 3;}

    if (document.getElementById('4').clicked = true){let n4 = 4;}

    if (document.getElementById('5').clicked = true){let n5 = 5;}
    
    if (document.getElementById('6').clicked = true){let n6 = 6;}

    if (document.getElementById('7').clicked = true){let n7 = 7;}

    if (document.getElementById('8').clicked = true){let n8 = 8;}

    if (document.getElementById('9').clicked = true){let n9 = 9;}

    if (document.getElementById('0').clicked = true){let n0 = 0;}
}

function num2(choiceNum)
{
    if (document.getElementById('1').clicked = true){let n1 = 1; let chnum = choiceNum;}

    if (document.getElementById('2').clicked = true){let n2 = 2;}

    if (document.getElementById('3').clicked = true){let n3 = 3;}

    if (document.getElementById('4').clicked = true){let n4 = 4;}

    if (document.getElementById('5').clicked = true){let n5 = 5;}
    
    if (document.getElementById('6').clicked = true){let n6 = 6;}

    if (document.getElementById('7').clicked = true){let n7 = 7;}

    if (document.getElementById('8').clicked = true){let n8 = 8;}

    if (document.getElementById('9').clicked = true){let n9 = 9;}

    if (document.getElementById('0').clicked = true){let n0 = 0;}
}
function Dot(dt)
{
    if (document.getElementById('.').clicked = true)
    {
        let dot = ".";
        let dt = dott;
    }
}

    if (document.getElementById('AC').clicked = true)
    {
        
    }

    if (document.getElementById('=').clicked = true)
    {
        
    }

    if (document.getElementById('+').clicked = true)
    {
        let plus = " + ";
    }

    if (document.getElementById('-').clicked = true)
    {
        let minus = " - ";
    }

    if (document.getElementById('x').clicked = true)
    {
        let times = " x ";
    }

    if (document.getElementById('/').clicked = true)
    {
        let divide = " / ";
    }

    if (document.getElementById('%').clicked = true)
    {
        let rem = " % ";
    }


    let result;
    let ch = choice;

    switch(ch)
    {
        case '1': result = n1 + n2; break;
        case '2': result = n1 - n2; break;
        case '3': result = n1 * n2; break;
        case '4': result = n1 / n2; break;
        case '5': result = n1 % n2; break;
    }
    document.getElementById('result').value = result;
