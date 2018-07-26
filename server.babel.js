'use strict';

import express from 'express';
import path from 'path';

const app = express();

const port = 3000;
app.use('/', express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, function() {
	console.log("Server Started at port 3000");
});