const mongoose=require('mongoose');
const dburl='mongodb+srv://Rishabh:Rishabh@cluster0.7ndgucg.mongodb.net/gofoodmern?retryWrites=true&w=majority'
mongoose.connect(dburl,{useNewUrlParser: true});
const conn=mongoose.connection;
conn.on('connected', async function() {
    console.log('WellDone!! DataBase is connected successfully');
    let data= await conn.db.collection("food_items").find({}).toArray();
    let catagory= await conn.db.collection("foodCategory").find({}).toArray();

    // console.log(data);
    // console.log(catagory);
    global.food_items=data;
    global.food_catagory=catagory;
    
    
    
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;