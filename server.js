import express from 'express';
const app =express();
app.get('/', (req,res)=>{
    res.send("servr is ready");
});


app.get('/jokes',(req,res)=>{
    const jokes=[
{
      id: 1,
      title: 'kallu',
      content :'my name is atul'
}      
    ];
    res.send(jokes);
})

const port=process.env.PORT ||3000;

app.listen(port,() =>{
    console.log('server ')

})