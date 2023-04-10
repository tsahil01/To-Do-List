// We are having two fn- to get date & to get only day.
// module.exports is a js object (like JSON)
// module.exports has shortcut ---> module.exprots = exports


exports.getDate = function(){
    const today = new Date();
    const options = {
        weekday:'long',
        day:'numeric',
        month:'long'
    };
    let day = today.toLocaleDateString("en-IN", options);
    return day;

}

exports.getDay = function(){
    const today = new Date();
    const options = {
        weekday:'long'
    };
    let day = today.toLocaleDateString("en-IN", options);
    return day;

}