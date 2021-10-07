const pool = require("./db");

pool.query("DELETE FROM public.customer WHERE customer_id = $1 RETURNING *",["604"],(err,res)=>{
    if(err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows);
    }
});
pool.end();