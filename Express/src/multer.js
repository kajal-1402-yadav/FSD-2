multer = require("multer");
expr = require("express");
app = expr();

var store = multer.diskStorage({
  destination: "single",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: store }).single("myfile");

app.use(expr.static("../public", { index: "multer.html" }));

app.post("/data", upload, (req, res) => {
  if (req.file) {
    res.send(
      "file uploaded " +
        req.file.originalname +
        " " +
        req.file.destination +
        " " +
        req.file.path
    );
  }
});

app.listen(3009);
