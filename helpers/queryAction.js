// Eight, used to save space for queries


const queryAction =(obj, e, r, t)=> {
    if (!e) {
        if (r.length === 1) {
            obj.json(...r)
        } else {
            obj.json(r)
        }
    } else {
        console.log(`DAO Error: ${e}`)
        obj.json({
            "message": "error",
            'table': `${t}`,
            'error': error
        })
    }
}

module.exports = {
    queryAction
}


// second go to daoCommon to import queryAction from helpers folder