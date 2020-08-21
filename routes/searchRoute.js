const router = require("express").Router()

const  { searchResultgetController }  = require('../controllers/searchController')



router.get("/" , searchResultgetController)


module.exports = router