exports.getToys = (req, res) => {
  res.send("This is GET request");
};

exports.postToys = (req, res) => {
  res.send("This is POST request");
};

exports.getToy = (req, res) => {
  res.send("this is GET single request" + req.params.toyId);
};

exports.createToys = (req, res) => {
  res.send("This is PUT request " + req.params.toyId);
};

exports.deleteToys = (req, res) => {
  res.send("This is DELETE request " + req.params.toyId);
};
