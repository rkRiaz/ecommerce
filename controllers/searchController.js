const Product = require('../models/Product')


exports.searchController = async (req, res, next) => {

    try {
        const query = req.params.term.replace(/ /g, '-');
        // const results = await Product.fuzzySearch({ query: query, prefixOnly: false, minSize: 1 })
        if(query) {
            const results = await Product.find({
               
                        name:  {$regex: new RegExp(query)},
                    
            })
            res.status(200).json({
                products: results
            });
        } else {
            const results = await Product.find()
            res.status(200).json({
                products: results
            });
        }

    } catch (e) {
        next(e)
    }
}
