import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000; // default port to listen

import router from './router';

app.use(cors());
app.use(express.json());
app.use(router);

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`);
});
