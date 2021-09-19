const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const cors = require('cors');
const jwt = require('jsonwebtoken')
const Top50 = require('./models/Top50')
const all = require('./models/all')
const User = require('./models/User')
const yorumlars = require('./models/yorumlars')

mongoose.connect('mongodb://localhost:27017/DC', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const app = express()
const port = 5000
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/all', (req, res, next) => {
  let tokenim = res.req.headers.token
  jwt.verify(tokenim, 'H}X@)\HAC}*@Wd37', (err, decodedim) => {
    if (err) return res.status(401).json({
      title: 'unauthorized'
    })
    all.find({isvalidate: {$ne: false}}, (err, all) => {
      if (err) return console.log(err)
      return res.status(200).json({
        all
      })
    }).sort({ _id: -1 }).limit(8)
  })
  })




app.post('/all', (req, res, next) => {
    const allm = new all({
    title: req.body.allInfom.title,
    description: req.body.allInfom.description,
    email: req.body.allInfom.email,
    images: req.body.allInfom.images,
    card_tag: req.body.allInfom.card_tag,
    discord_url: req.body.allInfom.discord_url,
    website: req.body.allInfom.website,
    isvalidate: false,
    isvalidate2: false,
    isvalidate3: false,
    })

     allm.save(function(err, doc) {
       if (doc) return res.status(200).json({
         doc
       })
       return res.status(500).json({
         err
       })
});
  })



app.get('/onaysizlar', (req, res, next) => {
    all.find({isvalidate: {$ne: true}}, (err, all) => {
      if (err) return console.log(err)
      return res.status(200).json({
        all
      })
    }).sort({ _id: -1 }).limit(20)
})

// app.get('/deletedocingame', (req, res, next) => {
//   console.log(res.req.headers.id)
//     let id = res.req.headers.id
//   game.findOne({ _id: id }).remove().exec()
//   .then(function(doc) {
//        return res.status(200).json({
//          doc: {
//           title:"Veri Silindi"
//         }
//       })
//     }).catch(function(error) {
//        throw error;
//     });

// })

app.post('/login', (req, res, next) => {
  User.findOne({ uid: req.body.uid }, (err, user) => {
    if (err) return res.status(500).json({
      title: 'server error',
      error: err
    })
    if (!user) {
      return res.status(401).json({
        title: 'user not found',
        error : 'invalid credentials'
      })
    }
    //incorrect password
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(402).json({
        title: "login failed",
        error: "invalid password"
      })
    }
    // if all is good create a token and send to frontend
    let token = jwt.sign({ userId: user._id,role:user.isadmin}, 'H}X@)\HAC}*@Wd37',{expiresIn:'2h'});
    return res.status(200).json({
      title: 'login success',
      token: token
    })

  })
})


app.get('/onayla', (req, res, next) => {
    let id = res.req.headers.id
  all.findOneAndUpdate({ _id: id },{ isvalidate: true })
  .then(function(doc) {
       return res.status(200).json({
         doc: {
          title:"Onaylandı"
        }
      })
    }).catch(function(error) {
       throw error;
    });

})




app.get('/oyun', (req, res, next) => {
    all.find({card_tag:"oyun"}, (err, all) => {
      if (err) return console.log(err)
      return res.status(200).json({
        all
      })
    })
})



app.get('/me', (req, res, next) => {
  let tokenim = res.req.headers.token
   jwt.verify(tokenim, 'H}X@)\HAC}*@Wd37', (err, decodedim) => {
    if (err) return res.status(401).json({
      title: 'unauthorized'
    })
      //token is valid
    User.find({ isadmin: decodedim.role}, (err, User) => {
      if (err) return console.log(err)
      return res.status(200).json({
        User: User[0].isadmin
      })
    })
  })
})


app.get('/datalarim', (req, res) => {
  let negelecek = res.req.headers.data
var pageNo = parseInt(req.query.pageNo)
  var size = parseInt(req.query.size)
  var query = {}
  if(pageNo < 0 || pageNo === 0) {
        response = {"error" : true,"message" : "invalid page number, should start with 1"};
        return res.json(response)
  }
  query.skip = size * (pageNo - 1)
  query.limit = size
  // Find some documents
       all.count({card_tag:negelecek },function(err,totalCount) {
             if(err) {
               response = {"error" : true,"message" : "Error fetching data"}
             }
         all.find({card_tag:negelecek,isvalidate: { $ne: false }},{},query,function(err,data) {
              // Mongo command to fetch all data from collection.
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                var totalPages = Math.ceil(totalCount / size)
                response = {"error" : false,"message" : data,"pages": totalPages};
            }
           res.json(response);
         }).sort({ _id: -1 });
       })
})


app.get('/detaybul', (req, res, next) => {
  let negelecekid = res.req.headers.data
    all.find({_id:negelecekid}, (err, all) => {
      if (err) return console.log(err)
      return res.status(200).json({
        all
      })
    })
})



app.get('/benzersunucular', (req, res, next) => {
  let negelecekid = res.req.headers.data
    all.find({card_tag:negelecekid}, (err, all) => {
      if (err) return console.log(err)
      return res.status(200).json({
        all
      })
    }).sort({ _id: -1 }).limit(6)
})



app.post('/yorumat', (req, res, next) => {
  let gelenyorum = res.req.body.yorums
  const allyorum = new yorumlars({
    commentitle: req.body.yorums.title,
    commentdesc: req.body.yorums.description,
    konuid: req.body.yorums.yorumid,
    isvalidate: false,
    isvalidate2: false,
    isvalidate3: false,
     })
     allyorum.save(function(err, doc) {
       if (doc) return res.status(200).json({
         doc
       })
       return res.status(500).json({
         err
       })
     });

})



app.get('/yorumbul', (req, res, next) => {
  let yorumum = res.req.headers.data
  console.log(yorumum);
    yorumlars.find({konuid:yorumum,isvalidate: { $ne: false }}, (err, all) => {
      if (err) return console.log(err)
      return res.status(200).json({
        all
      })
    })
})

app.get('/yorumbuldashboard', (req, res, next) => {
    yorumlars.find({isvalidate: {$ne: true}}, (err, all) => {
      if (err) return console.log(err)
      return res.status(200).json({
        all
      })
    })
})

app.get('/yorumonayla', (req, res, next) => {
    let id = res.req.headers.id
  yorumlars.findOneAndUpdate({ _id: id },{ isvalidate: true })
  .then(function(doc) {
       return res.status(200).json({
         doc: {
          title:"Onaylandı"
        }
      })
    }).catch(function(error) {
       throw error;
    });

})



app.get('/top30', (req, res, next) => {
  let negelecekmis = res.req.headers.data
    all.find({card_tag:negelecekmis}, (err, all) => {
      if (err) return console.log(err)
      return res.status(200).json({
        all
      })
    }).sort({ _id: -1 }).limit(20)
})



app.get('/tokenal', (req, res, next) => {
    // if all is good create a token and send to frontend
  let token = jwt.sign({}, 'H}X@)\HAC}*@Wd37', { expiresIn: '2h' });
    return res.status(200).json({
      title: 'tokenok',
      token: token
    })
})















app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
