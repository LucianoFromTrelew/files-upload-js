import express from "express";
import morgan from "morgan";
import multer from "multer";

export function createApp() {
  const app = express();
  const upload = multer({ dest: "uploads" });

  app.use(express.static("public"));
  app.use(morgan("dev"));
  app.use(express.urlencoded({ extended: true }));

  app.post("/file", upload.single("avatar"), (req, res) => {
    const { body, file } = req;
    console.log({ body, file });

    res.status(200).redirect("/");
  });

  return app;
}
