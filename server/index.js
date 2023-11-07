const express = require("express");
const mongoConnect = require("./utils/database").mongoConnect;
const getDb = require("./utils/database").getDb;
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Set the MIME type for JavaScript files
app.use((req, res, next) => {
  if (req.path.endsWith(".js")) {
    res.type("application/javascript");
  }
  next();
});

app.use(cors());
app.use(bodyParser.json());

app.use("/api/projects", (req, res) => {
  const db = getDb();
  db.collection("projects")
    .find()
    .sort({ position: 1 })
    .toArray()
    .then((projects) => {
      res.status(200).json({ projects });
    })
    .catch((error) => {
      console.error(error);
      res.json({ error });
    });
});

app.use("/api/labs", (req, res) => {
  const db = getDb();
  db.collection("labs")
    .find()
    .toArray()
    .then((labs) => {
      res.status(200).json({ labs });
    })
    .catch((error) => {
      console.error(error);
      res.json({ error });
    });
});

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/storybook"));

app.use("/storybook", (req, res) => {
  res.sendFile(path.join(__dirname, "public/storybook/index.html"));
});

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

mongoConnect(() => {
  app.listen(3000);
});

// const saveProjects = () => {
//   const db = getDb();
//   db.collection("labs")
//     .insertMany([
//       {
//         name: "Labs Little Green Sheep",
//         stack: [
//           "HTML",
//           "CSS",
//           "JAVASCRIPT",
//           "JEST",
//           "REDUX",
//           "RTL",
//           "STYLED-COMPONENTS",
//         ],
//         company: "Syrox",
//         image: "/images/projects/green-sheep-thumbnail.jpg",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//       {
//         name: "Snüz",
//         stack: ["REACT", "HTML", "CSS", "JAVASCRIPT"],
//         company: "Syrox",
//         image: "/images/projects/snuz-thumbnail.jpg",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//       {
//         name: "WCOO",
//         stack: ["HTML", "CSS", "JAVASCRIPT"],
//         company: "Syrox",
//         image: "/images/projects/wcoo-thumbnail.jpg",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//       {
//         name: "Car Data",
//         stack: ["HTML", "CSS", "JAVASCRIPT"],
//         company: "Syrox",
//         image: "/images/projects/cardata-thumbnail.jpg",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//       {
//         name: "Aruna Seth",
//         stack: ["HTML", "CSS", "JAVASCRIPT"],
//         company: "Syrox",
//         image: "/images/projects/aruna-thumbnail.jpg",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//       {
//         name: "Feather",
//         stack: ["HTML", "CSS", "JAVASCRIPT"],
//         company: "Syrox",
//         image: "/images/projects/feather-thumbnail.jpg",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//       {
//         name: "Car Data 2",
//         stack: ["HTML", "CSS", "JAVASCRIPT"],
//         company: "Syrox",
//         image: "/images/projects/ruth-thumbnail.jpg",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//       {
//         name: "Aruna Seth 2",
//         stack: ["HTML", "CSS", "JAVASCRIPT"],
//         company: "Syrox",
//         image: "/images/projects/kjlaundry-thumbnail.jpg",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//       {
//         name: "Feather 2",
//         stack: ["HTML", "CSS", "JAVASCRIPT"],
//         company: "Syrox",
//         image: "/images/projects/trilogy-thumbnail.jpg",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//     ])
//     .then((result) => {
//       console.log("🚀 ~ file: index.js:37 result:", result);
//     })
//     .catch((error) => {
//       console.error("🚀 ~ file: index.js:38 error:", error);
//     });
// };

// setTimeout(() => {
//   console.log("🚀 ~ file: index.js:40 ~ setTimeout ~ setTimeout:");
//   saveProjects();
// }, 3000);
