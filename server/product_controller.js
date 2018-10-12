module.exports={
    getAll: (req,res)=>{
        const db = req.app.get('db');
        db.read_products().then(products=>{
            res.status(200).json(products)
        }).catch(error=>{
            console.error('error in GET(all) /api/product', error)
        })
    },
    getOne: (req,res)=>{
        const db = req.app.get('db');
        const {params} = req;
        newOne = {
            product_id:params.product_id
        }
        db.read_product(newOne).then(product=>{
            res.status(200).json(product)
        }).catch(error=>{
            console.error(`error in GET(one) /api/product`, error)
        })
    },
    create: (req,res)=>{
        const db = req.app.get('db');
        const newProduct = req.body;
        db.create_product(newProduct).then((product)=>{
            res.status(200).json(product[0])
        }).catch(error=>{
            console.error('error in POST /api/product', error)
        })
    },
    update: (req,res)=>{
        const db=req.app.get('db');
        const { params, query }=req;
        const newObject = {
            product_id: params.product_id,
            description: query.desc
        }
        db.update_product(newObject).then(updatedProduct=>{
            res.status(200).json(updatedProduct)
        }).catch(error=>{
            console.error('error in PUT /api/product', error)
        })
    },
    delete: (req, res)=>{
        const db=req.app.get('db');
        const { params }=req;
        const newObj={
            product_id: params.product_id
        }
        db.delete_product(newObj).then(product=>{
            res.status(200).json(product)
        }).catch(error=>{
            console.error('error in DELETE /api/product', error)
        })
    }
}