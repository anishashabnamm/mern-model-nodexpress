const express = require ('express')
const app = express()
const PORT=3500
app.use(express.json())
const router = express.Router()
let products = [
    {'id':1, 'prod':'water bottle', 'price': '$200'},
    {'id':2, 'prod':'notebook', 'price':'$60'},
    {'id':4, 'prod':'watch', 'price':'$800'},
    {'id':5, 'prod':'skirt', 'price':'$200'},
    {'id':6, 'prod':'kurti', 'price':'$250'},
    {'id':7, 'prod':'Shampoo', 'price':'$40'},
    {'id':8, 'prod':'Tablets', 'price':'$100'},
    {'id':9, 'prod':'Bag', 'price':'$600'},


]
router.get('/prods', (req, res)=>
{
    res.json(products)
    res.status(200).json({message: 'Welcome'})
})

router.get('/prods/:id', (req, res)=>
{
    const productId= parseInt(req.params.id);
    const product = products.find((prod)=> prod.id===productId)
    if(!product)
    {
        res.status(400).json({message:'error'})
    }
    res.status(200).json(product)
})

app.use('/api', router)
app.listen(PORT, ()=>
{
    console.log(`Server is listening on port ${PORT}` );
})