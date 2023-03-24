<<<<<<< HEAD
var express = require('express');
var router = express.Router();
var novedadesModels = require('../../models/novedadesModels')

// get novedades
router.get('/', async function (req, res, next)  {
    var novedades = await novedadesModels.getNovedades();
    res.render('admin/novedades', {
        layout: 'admin/layout',
        persona: req.session.nombre,
        novedades
        
    });
});

// delete novedades
router.get('/eliminar/:id', async (req, res, next) =>  {
    const id = req.params.id;
    await novedadesModels.deleteNovedadesById(id);
    res.redirect('/admin/novedades')
    
    });

=======
var express = require('express');
var router = express.Router();
var novedadesModels = require('../../models/novedadesModels')

// get novedades
router.get('/', async function (req, res, next)  {
    var novedades = await novedadesModels.getNovedades();
    res.render('admin/novedades', {
        layout: 'admin/layout',
        persona: req.session.nombre,
        novedades
        
    });
});

// delete novedades
router.get('/eliminar/:id', async (req, res, next) =>  {
    const id = req.params.id;
    await novedadesModels.deleteNovedadesById(id);
    res.redirect('/admin/novedades')
    
    });

>>>>>>> fb353a299179c51ef314b61cb8d3de560a89b645
module.exports = router;