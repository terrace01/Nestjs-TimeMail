export function timetrans(date:any){
    // @ts-ignore
    var date = new Date(date*1000);//如果date为13位不需要乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y+M+D+h+m+s;
}
export function regEmail(email:any) {
    if (String (email).indexOf ('@') > 0) {
        let newEmail, str = email.split('@'), _s = '';

        if (str[0].length > 4) {
            _s = str[0].substr (0, 2);
            for (let i = 0; i < str[0].length - 4; i++) {
                _s += '*';
            }
        } else {
            _s = str[0].substr (0, 1);
            for (let i = 0; i < str[0].length - 1; i++) {
                _s += '*';
            }
        }
        newEmail = _s + '@' + str[1];
        return newEmail;
    } else {
        return email;
    }
}
