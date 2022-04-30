const express = 'require.express';
const app = express();
const router = express.Router();

const port = 5001;

app.listen(port, () => {
  console.log("Surf's Up");
});

app.use(router);

