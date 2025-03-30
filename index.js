import express from "express";
import cors from "cors";
import path from "path"

const app = express();

app.use(express.static("public"));
app.use(cors({
    origin:'*',
    credentials:true
}))
app.use(express.json({
    limit : "16kb"
}))

app.use(express.urlencoded({
    extended:true
}))
app.use(express.urlencoded({extended:false}))



app.get("/data",(req,res)=>{
    const data = [
        [
            {
                id: 1,
                content: "The curious cat jumped over the wooden fence to explore the neighbor's garden."
            },
            {
                id: 2,
                content: "A sudden gust of wind sent the autumn leaves swirling across the street."
            },
            {
                id: 3,
                content: "She carefully placed the antique vase on the shelf, admiring its intricate design."
            },
            {
                id: 4,
                content: "The sound of laughter echoed through the park as children played on the swings."
            },
            {
                id: 5,
                content: "Under the starry night sky, they shared stories by the warmth of the campfire."
            }
        ]
        
    ]
    res.status(200).json({
        data
    })
})

app.get('/home',(req,res)=>{
    res.sendFile(path.join(import.meta.dirname, "public", "index.html"));

})

app.listen(4000,()=>{
    console.log("server is running on port 4000");
})