/**
 * 익명함수 연습
 * 2021. 10. 8.
 */

let daysOfMonth = function(month){
    let days = 0;
    if(!(month>=1 &&month <=12)){
        return `입력값[${month}]: 잘못된 값입니다.`;
    }
    switch(month){
        case 2:
            days = 28;
            break;
           // return `${month}월은 28일까지입니다.`;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
            //return `${month}월은 30일까지입니다`;
        default:
            days = 31
            break;
            //return `${month}월은 31일까지입니다`;
    } // end of switch
    
    return `${month}월은 ${days}일까지 입니다`;
}
//console.log(daysOfMonth(month));