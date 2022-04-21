export const Time = ({ elapsed }) => {
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    if (elapsed < msPerMinute) {
        if (Math.round(elapsed / 1000) > 1) {
            return Math.round(elapsed / 1000) + ' seconds ago';
        } else {
            return 'Just now';
        }
    }

    else if (elapsed < msPerHour) {
        if (Math.round(elapsed / msPerMinute) > 1) {
            return Math.round(elapsed / msPerMinute) + ' minutes ago';
        } else {
            return Math.round(elapsed / msPerMinute) + ' minute ago';
        }
    }

    else if (elapsed < msPerDay) {
        if (Math.round(elapsed / msPerHour) > 1) {
            return Math.round(elapsed / msPerHour) + ' hours ago';
        }
        else {
            return Math.round(elapsed / msPerHour) + ' hour ago';
        }
    }

    else if (elapsed < msPerMonth) {
        if (Math.round(elapsed / msPerDay) > 1) {
            return 'approximately ' + Math.round(elapsed / msPerDay) + ' days ago';
        }
        else {
            return 'approximately ' + Math.round(elapsed / msPerDay) + ' day ago';
        }
    }

    else if (elapsed < msPerYear) {
        if (Math.round(elapsed / msPerMonth) > 1) {
            return 'approximately ' + Math.round(elapsed / msPerMonth) + ' months ago';
        }
        else {
            return 'approximately ' + Math.round(elapsed / msPerMonth) + ' month ago';
        }
    }

    else {
        if (Math.round(elapsed / msPerYear) > 1) {
            return 'approximately ' + Math.round(elapsed / msPerYear) + ' years ago';
        } else {
            return 'approximately ' + Math.round(elapsed / msPerYear) + ' year ago';
        }
    }
}
export default Time;