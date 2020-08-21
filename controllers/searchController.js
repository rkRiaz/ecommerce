const Product = require('../models/Product')


exports.searchResultgetController = async(req, res, next) => {
    let term = req.query.term
    // let currentPage = parseInt(req.query.page) || 1
    // let itemPerPage = 10  

    try {
        let SearchProducts = await Product.find({
            $text: {
                $search: term
            }
        })
        // .skip((itemPerPage * currentPage) - itemPerPage)
        // .limit(itemPerPage)

        // let totalPost = await Post.countDocuments({
        //     $text: {
        //         $search: term
        //     }
        // })

        // let totalPage = totalPost / itemPerPage
        console.log(SearchProducts)
        res.status(200).json(SearchProducts)

    } catch(e) {
        next(e)
    }
}