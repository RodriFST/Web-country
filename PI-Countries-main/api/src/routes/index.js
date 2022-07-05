const { Router } = require('express');

// Importar todos los routers;
// const { getApiCountries } = require("../routes/routes2/CountryEnr.js");


// Ejemplo: const authRouter = require('./auth.js');

           

const router = Router();
const { Country, Activity } = require("../db.js");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// router.get("/countries", getCountries);


router.get('/countries', async (req, res) => {
    let {name} = req.query
    let countries = await Country.findAll({
        include: Activity,
        order: [['name', 'ASC']]})    
        
    if (!name) return res.json(countries)

    let country = await Country.findOne({
        where: {
            name: name
        },
    
    }) 
    if (!country){
        return res.status(404).send({error: 'no country with that name'})
    }   
    res.json(country)
 })




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  
 router.get('/countries/:id',async (req, res) => {
    const { id } = req.params;
    try {
      let countryId = await Country.findByPk(id.toUpperCase(), {
        attributes: [
          "id",
          "name",
          "flags",
          "continent",
          "capital",
          "subregion",
          "area",
          "population",
        ],
        include: Activity,
      });
     
        if(countryId){ return res.send(countryId)
        }
         res.status(404).send({ message: "Country not found" });
    } catch (error) {
      res.send(error);
    }
  });
  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







//   router.post('/activities', async (req, res) => {

//     const { name, difficulty, duration, season, countries } = req.body
    
//     try {
//         const activity = await Activity.create({    //crea la actividad en la base de datos Activity
//           name,
//           difficulty,
//           duration,
//           season,
//         })      

//         countries.forEach( async country => {                 //agarra countries desde body y lo recorre 
         
//             try{
//                 let countryDb = await Country.findOne({         //entre todos los paises hasta que mache el pais pasado desde body
//                     where:{
//                       name: country
//                     },  
//                 })  
//                  await countryDb.addActivity(activity)       //Luego le pasa los datos recibidos desde body
                      
                      
//             } catch (err) {
//                 console.log('ERROR FINDING COUNTRY', err)
//             }    
//         })         
//       res.status(200).json(activity)  
//     } catch (err){
//         console.log('ERROR ADDING ACTIVITY', err)
//         res.status(404).json(err)
//     }   
//  })


 //////////////////////////////////////////////////////////////////

 router.get('/activities',async (req, res) => {
    let {name} = req.query
    let activities = await Activity.findAll({

        order: [['name', 'ASC']]})    
        
    if (!name) return res.json(activities)

    let activity = await Activity.findOne({
        where: {
            name: name
        },
    
    }) 
    if (!activity){
        return res.status(404).send({error: 'no activities with that name'})
    }   
    res.json(activity)
 })

//   


module.exports = router;

/////////////////////////////////////////////////////////////////////////////
  router.post('/activities', async (req, res) => {

    try {
      const { name, difficulty, duration, season, country } = req.body;
      // console.log("BODY", req.body)
      let createdActivity = await Activity.create({
              name,
              difficulty,
              duration,
              season,
      });

      country.map(async c => {
          const findedCountry = await Country.findAll(
              { 
                  where: {
                      name: c
                  }
              })
              await createdActivity.addCountry(findedCountry);
      });
      // const findedCountry = await Country.findOne({
      //     where: {
      //         name: country,
      //     }
      // });
      // console.log("PAÍSS", country)
      res.status(200).json(createdActivity);
      }catch(err){
          next(err);
      }
    })

// [ ] POST /activities:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
// Crea una actividad turística en la base de datos, relacionada con los países correspondientes