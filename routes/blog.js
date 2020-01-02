var express = require('express');
var router = express.Router();

const { getList } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

/* GET home page. */
router.get('/api/list', function(req, res, next) {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    //const listData = getList(author,keyword)
    //return new SuccessModel(listData)
    const result = getList(author, keyword)
    return result.then(listData => {
        res.json(new SuccessModel(listData))
    })
});

module.exports = router;
