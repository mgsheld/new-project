exports.form_post = function(req, res){
  let birdData = {
    birdSpecies: req.body.species,
    birdNickname: req.body.nickname,
    birdStatus: req.body.status
  }
  
  console.log(birdData);
  
  res.render('birds-submit', birdData)
  };