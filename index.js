const express = require('express')
const mockjs = require('mockjs')
const app = express()
const port = 3000
app.use(express.static('public'))
let data = mockjs.mock({
    'list|100': [
        {
            'id|+1':0,
            'title': '@csentence'
        }
    ]
});
app.get('/news', (req, res) =>{
    let curr = Number(req.query.curr);
    let limit = Number(req.query.limit);
    let start = (curr-1) * limit;
    let end = curr * limit;
    res.send(data.list.slice(start,end))
})
app.listen(port, () => console.log(`服务器已经启动了`))