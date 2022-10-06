const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const router = express.Router()
router.get('/get', (req, res) => {
    res.send({
        status: '200',
        msg: 'success!',
        data: {
            name: 'lwh',
            age: '20'
        }
    })
})
app.use(router)

app.listen(7080, () => console.log('http://127.0.0.1:7080'))