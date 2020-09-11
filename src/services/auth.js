const db = require('../utils/db')
const security = require('../utils/security')

const login = async (user) => {
    const getuserSQL = `
    select username,password from account where username=? limit 1;`
    const result = await db.queryOne(getuserSQL, [user.username, user.password])
    const compare = await security.verifyPassword(user.password, result.password)
    if (compare) {
        return security.generateToken({
            username: user.username,
            // role: user.role,
            role: 1,
        })
    } else {
        return false
    }
}
module.exports = {
    login
}