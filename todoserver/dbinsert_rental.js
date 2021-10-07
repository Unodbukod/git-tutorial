const pool = require("./db");

const insertQuery = 'INSERT INTO public.rental(rental_date,inventory_id,customer_id,return_date,staff_id) VALUES ($1,$2,$3,$4,$5) RETURNING *';
const values = [
"2025-05-24 22:53:31",
"170",
"2",
"2035-05-26 02:56:15",
"2",
];

pool.query(insertQuery,values,(err,res)=>{
    if(err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows);
    }
});
pool.end();