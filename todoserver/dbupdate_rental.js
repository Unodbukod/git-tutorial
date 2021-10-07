const pool = require("./db");

pool.query("UPDATE public.rental SET inventory_id = $1 WHERE rental_id = 323 RETURNING *",['2'],(err,res)=>{
    if(err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows);
    }
});
pool.end();