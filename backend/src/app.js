const express = require('express');
const cors = require('cors');
const terminalRoutes = require('./routes/terminalRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/terminal', terminalRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
