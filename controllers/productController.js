const products = [
    {name:"oil",price:1300},
    {name:"chips",price:50}
]

const getAllProduct = ((req,res)=>{
    res.send(products);
})

const getProduct = ((req,res) =>{
    const id = Number(req.params.id);
    const product = products.find(p=> p.id=== id);
    if(!product){
        req.status(404).send("product not found");
    }
    req.send(product);
})

module.exports = {getAllProduct,getProduct};