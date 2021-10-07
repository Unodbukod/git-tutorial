const pool = require("./db");
pool.query("SELECT * FROM public.rental",(err, res)=>{
    try{
        console.log(res.rows);        
    }catch(err){
        console.error(err.message);
    }
});
pool.end();


/*
//before
const pool = require("./db");
const sql = "SELECT * FROM public.todo";

function result(err, res){
    try{
        console.log(res.rows);        
    }catch(err){
        console.error(err.message);
    }
}

pool.query(sql,result);
pool.end();

*/