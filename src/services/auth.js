const db = require('../utils/db')
const security = require('../utils/security')

const login = async (user) => {
    const getuserSQL = `
    select username,password,role from account where username=? limit 1;`
    const result = await db.queryOne(getuserSQL, [user.username])
    console.log(result)
    const compare = await security.verifyPassword(user.password, result.password)
    if (compare) {
        return security.generateToken({
            username: result.username,
            role: result.role,
        })
    } else {
        return false
    }
}
module.exports = {
    login
}