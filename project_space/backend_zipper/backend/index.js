const express=require('express')
const server=express();
const mongoose=require('mongoose');
const cors=require('cors');
const monk=require('monk');
// main().catch(err=>console.log(err));
// async function main(){
//     await mongoose.connect('mongodb+srv://20a91a0578:mongodb1818@cluster0.matux8t.mongodb.net/Project');
//     console.log('db.conenected.');
// }
// const vec=[];
const db=monk('mongodb://0.0.0.0:27017/student');
db.then(()=>{
    console.log('db connected ......');
})
server.use(cors());
server.use(express.json());

const authentication=db.get('authentication'); //auth collection 
const academic_details = db.get('academic_details') //academic_details
const placement_details = db.get('placement_details') //placement_details
const certification_details = db.get('certification_details')// certification_details

server.get('/authentication',(req,res)=>{
    
    
    authentication.find({}).then((docs)=>{
       res.send(docs);
       console.log(docs);
    }); 
    // console.log(obj)
    // res.send(obj);

})

server.get('/academic_details',(req,res)=>{
    
    // const collection=db.get('academic_details');
    academic_details.find({}).then((docs)=>{
       res.send(docs);
       console.log(docs);
    }); 
    // console.log(obj)
    // res.send(obj);

})


server.get('/placement_details',(req,res)=>{
    
    
    placement_details.find({}).then((docs)=>{
       res.send(docs);
       console.log(docs);
    }); 
    // console.log(obj)
    // res.send(obj);

})


server.get('/attendence_details',(req,res)=>{
    const collection=db.get('attendence_details');
    
    collection.find({}).then((docs)=>{
       res.send(docs);
       console.log(docs);
    }); 

    // console.log(obj)
    // res.send(obj);

})



server.get('/certification_details',(req,res)=>{
   
    
    certification_details.find({}).then((docs)=>{
       res.send(docs);
       console.log(docs);
    }); 
    
    // console.log(obj)
    // res.send(obj);

})

server.post('/academic_details',(req,res)=>{
    console.log(req.body.obj)
    academic_details.insert(req.body.obj)
})

server.post('/authentication',(req,res)=>{
    console.log(req.body.obj)
    authentication.insert(req.body.obj)
})

server.post('/certification_details',(req,res)=>{
    console.log(req.body.obj)
    certification_details.insert(req.body.obj)
})

server.post('/placement_details',(req,res)=>{
    console.log(req.body.obj)
    placement_details.insert(req.body.obj)
})
// const collection=db.get('Users');
// collection.insert({username:'raj55esh',password:'20a91a0579'}).then((docs)=>{console.log(docs)}).catch((err)=>{console.log(err)}).then(()=>db.close())
server.listen(8009,()=>{
    console.log('server running on port....')
})