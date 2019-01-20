const _ = require('lodash')
const express = require('express')
const router = express.Router()

const { getWastes } = require('../util')

router.get('/wastes', async (req, res) => {
    let keyword = req.query.keyword, wastes = await getWastes()
    
    if (!_.isEmpty(keyword)) {
        keyword = keyword.trim().toLowerCase()

        wastes.forEach((w,i) => w.id= i);
        wastes = wastes.filter(w => w.keywords.trim().toLowerCase().includes(keyword))
    }
    res.send(wastes)
})

module.exports = router