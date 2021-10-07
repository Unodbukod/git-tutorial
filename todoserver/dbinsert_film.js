const pool = require("./db");

const insertQuery = 'INSERT INTO public.film(film_id,description,title,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,special_features,fulltext) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *';
const values = [
"5000",
"Adriane",
"A Fateful Reflection of a Moose And a Husband who must Overcome a Monkey in Nigeria",
"2021",
"1",
"5",
"4.99",
"50",
"16.99",
"R",
"{Behind the Scenes}",
"'administr':9 'alabama':1 'boat':23 'databas':8 'devil':2 'jet':22 'mad':12,18 'must':15 'outgun':16 'panorama':5 'scientist':13,19 'thought':4",


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