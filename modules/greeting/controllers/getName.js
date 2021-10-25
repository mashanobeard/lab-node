const getName = (req, res) => {
  if (req.query.name) {
    res.send('<h3> Hellooo  ' + req.query.name + '</h3>');
  } else {
    res.status(418).json('absence of parameter');
  }
};
export default getName;
