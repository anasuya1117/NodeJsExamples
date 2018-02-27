var express = require('express');
var router = express.Router();

var faker = require("faker");
var data = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).send(data);
});

router.post("/", function (req, res) {
    var user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email()
    };

    data.push(user);
    res.status(200).send(user);
  });

router.put("/:firstName", function (req, res) {
    var result = [];
	data.forEach(function(eachData){
		if(eachData.firstName === req.params.firstName){
			eachData.lastName = req.body.name;
			result.push(eachData);
		}
	});
    res.status(200).send(result);
  });

router.delete("/:firstName", function (req, res) {
    var result = [];
	data.remove(function(element) { 
		return element.firstName ===  req.params.firstName;
	});
    res.status(200).send(result);
  });


module.exports = router;
