var date = new Date();

/**
 * 0 - Sunday
 * 1 - Monday
 * 2 - Tuesday
 * 3 - Wednesday
 * 4 - Thusday
 * 5 - Friday
 * 6 - satarday
 */

var today = date.getDay();

switch(today) {
    case 0:
        console.log('Today is Sunday');
        break;
    case 1:
        console.log('Today is Monday');
        break;
    case 2:
        console.log('TOday is Tuesday');
        break;
    case 3:
        console.log('Todays is Wednesday');
        break;
    case 4:
        console.log('Today is Thursday');
        break;
    case 5:
        console.log('Today is Friday');
        break;
    case 6:
        console.log('Today is Saturday');

    default: console.log('Not a Valid Number');
}
