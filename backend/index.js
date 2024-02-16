const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

app.use(express.json());
app.use(cors());

// Database connection 

mongoose.connect('mongodb+srv://tussupov0209:1122334455@cluster0.8m77fkv.mongodb.net/e-commerce');

//API

app.get('/', (req, res)=>{
    res.send('Express APP is Running')
})



// Image Storage Engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//Creating upload
app.use('/images', express.static('upload/images'))

app.post('/upload', upload.single('product'), (req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
});

// Schema for createng programs

const Product = mongoose.model('Product',{
    id:{
        type: Number,
        required: true,
    },
    name:{
        type:String,
        required: true,
    },
    imageMain:{
        type:String,
        required: true,
    },
    imageOne:{
        type:String,
        required: true,
    },
    imageTwo:{
        type:String,
        required: true,
    },
    category:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    mechanism:{
        type:String,
        required: true,
    },
    collection:{
        type:String,
        required: true,
    },
    brand:{
        type:String,
        required: true,
    },
    new_price:{
        type: Number,
        required: true,
    },
    old_price:{
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
    avilbel:{
        type: Boolean,
        default: true,
    },
})

app.post('/addproduct', async(req, res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1)
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }else{
        id=1
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        imageMain:req.body.imageMain,
        imageOne:req.body.imageOne,
        imageTwo:req.body.imageTwo,
        category:req.body.category,
        description:req.body.description,
        mechanism:req.body.mechanism,
        collection:req.body.collection,
        brand:req.body.brand,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log('Saved');
    res.json({
        success:true,
        name: req.body.name,
    })
})

app.post('/removeproduct', async (req, res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

app.get('/allproducts', async (req, res)=>{
    let products= await Product.find({});
    console.log('All Products Fetchtd');
    res.send(products)
})

const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

app.post('/signup', async(req,res)=>{

    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false, errors:'existing user found with same email address'})
    }
    let cart = {};
    for(let i = 0; i<300; i++){
        cart[i]=0;
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart
    })

    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }
    const token = jwt.sign(data, 'secret_ecom');
    res.json({success:true,token})
})

app.post('/login', async(req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if (user) {
         const passCompare = req.body.password===user.password;
         if(passCompare){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
         }
         else{
            res.json({success:false, errors:"Wrong Password"});
         }
    }
    else{
        res.json({success:false, errors:"Wrong Email Id"})
    }
})

app.get('/newcollectiond',async(req,res)=>{
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("NewCollection Fetched");
    res.send(newcollection)
})

app.get('/populariCar', async (req,res)=>{
    let products = await Product.find({category:"Casual"});
    let popular_in_car = products.slice(0,4);
    console.log("Popular in car fetch");
    res.send(popular_in_car);
})

const fetchUser = async (req, res, next)=>{
    const token = req.header('auth__token');
    if(!token){
        res.status(401).send({errors:"Please auth"})
    }
    else{
        try{
            const data = jwt.verify(token, 'secret_ecom');
            req.user = data.user;
            next();
        }catch(error){
            res.status(401).send({errors:'plase auth using'})
        }
    }
}

app.post('/addtocart',fetchUser, async (req,res)=>{
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] +=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.send("Added")
})

app.post('/removefromcart',fetchUser,async(req,res)=>{
    console.log("removed", req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0){
        userData.cartData[req.body.itemId] -=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.send("removed")
    }
})

app.post('/getcart', fetchUser, async(req,res)=>{
    console.log("GetCart");
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
})

app.listen(port,(err)=>{
    if(!err){
        console.log('Server running on port '+port);
    }
    else{
        console.log('ERROR: '+err);
    }
})