const _ = require('lodash')
const express = require('express')
const router = express.Router()

const { getWastes } = require('../util')

// router.get('/wastes', async (req, res) => {
exports.getWaste = async (req,res, cache) => {
    let keyword = req.query.keyword;
    const x = keyword+'_o';

    // Increase the occurence count of keyword
    const occurence = cache.get(x) !== null ? cache.get(x) + 1 : 1;
    cache.put(x, occurence);

    // Check if keyword is saved in cache
    if(cache.get(keyword) !== null){
        console.log('Served from cache');
        res.send(cache.get(keyword));
        return;
    }
    let wastes = await getWastes()
    
    if (!_.isEmpty(keyword)) {
        keyword = keyword.trim().toLowerCase()

        wastes.forEach((w,i) => w.id= i);
        wastes = wastes.filter(w => w.keywords.trim().toLowerCase().includes(keyword))
    }
    if(occurence > 5){
        // Cache the keyword for 6 hours if occurence is greater than 5
        cache.put(req.query.keyword, wastes, 21600000, (key, value) => {
            /* Reduce the value of occurence by 5 this would help to 
            remove item from frequently used list which are no more frequently used 
            */
            let occurence = cache.get(x) !== null ? cache.get(x) -5 : 0;
            cache.put(x,occurence);
        })
    }
    res.send(wastes)
}

// module.exports = router