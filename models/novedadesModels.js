<<<<<<< HEAD
var pool= require('./bd');


// lista novdades
async function getNovedades (){
    
        var query = 'select * from novedades';
        var rows =  await pool.query(query);
        return rows;
   
}
// borra novedades
async function deleteNovedadesById(id){
var query = 'delete from novedades where id=?';
var rows =await pool.query(query,[id]);
return rows;

}


=======
var pool= require('./bd');


// lista novdades
async function getNovedades (){
    
        var query = 'select * from novedades';
        var rows =  await pool.query(query);
        return rows;
   
}
// borra novedades
async function deleteNovedadesById(id){
var query = 'delete from novedades where id=?';
var rows =await pool.query(query,[id]);
return rows;

}


>>>>>>> fb353a299179c51ef314b61cb8d3de560a89b645
module.exports={getNovedades,deleteNovedadesById}