import { Users } from '../models/users.js' 


const adminLogin = async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        return res.json({
            error: 'Please Fill All Field'
        })
    } else {
        if (username !== 'admin2044' || password !== 'admin2044')  {
            return res.json({
                error: 'username or password Incorrect'
            })
        }else{
            res.status(200).json({
                success: 'Admin Login Success'
            })
        }
    }
}


const getUsers =  async (req, res) => {
    const users = await Users.find()
    res.json({users})
}

export {
    getUsers,
    adminLogin
}