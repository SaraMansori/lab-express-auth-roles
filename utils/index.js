  
module.exports = {
    capitalize: text => text.charAt(0).toUpperCase() + text.substring(1),

    formatDate: date => {
        let month = '' + (date.getMonth() + 1)
        let day = '' + date.getDate()
        let year = date.getFullYear()

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [day, month, year].join('-')
    },
    
    isRole: (role, req) => req.session.currentUser?.role === (role)
}