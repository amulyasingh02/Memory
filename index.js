const express=require('express');
const path=require('path');
const port=80;
const fs=require('fs');
const app=express();
app.use(express.urlencoded());

//multer
const multer=require('multer');
const upload=multer({dest:'uploads/'});


//Mongoose
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/Memory',{useUnifiedTopology:true,useNewUrlParser:true});
const db=mongoose.connection;
db.on('error',console.error.bind(console,"connection error:"));
db.once('open',()=>{
    console.log("connected to Memory");
});

var MemorySchema=mongoose.Schema({
    usr1:String,
    usr2:String,
    img:[String],
});

const Images=mongoose.model('Images',MemorySchema);



//pug
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.status(200).render("home.pug",{images:{}});
});

app.post('/',(req,res)=>{
    Images.findOne(req.body).then(
        (images)=>{
            params=images.img;
            console.log(params);
            res.status(200).render('home.pug',{images:params});
        }
    ).catch((err)=>{
        console.log(err);
        res.status(500).send("Internal server error");
    });
});
app.use('/uploads', express.static('uploads'));
app.get('/upload',(req,res)=>{
    res.status(200).render('upload.pug');
})
app.post('/upload',upload.single('image'),(req,res)=>{
const image=req.file;
const {usr1, usr2}=req.body;
const imgpath=image.path;

Images.findOne({usr1,usr2}).then(
    (images)=>{
        if(images){
            images.img.push(imgpath);
        }
        else
        {
            images=new Images({
                usr1,
                usr2,
                img:[imgpath]
            });
            
        }
        return images.save();
    }
).then(()=>{
    res.status(200).render("upload.pug");
}).catch(
    (err)=>{
        console.error(err);
        res.status(500).send("internal sever error");
    }
);
});


app.listen(port,()=>{
    console.log(`server running at port ${port}`);
});

