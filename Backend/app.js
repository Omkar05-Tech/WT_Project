require('dotenv').config();
const express = require('express');
const connectDB = require('./mongodb.js');
const authRoutes = require('./routes/authRoutes.js');
const homeRoutes = require('./routes/homeRoutes.js');
const welcomeRoutes = require('./routes/welcomeRoutes.js');
const preferenceRoutes = require('./routes/preferenceRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const socialAccountRoutes = require('./routes/socialAccountRoutes.js'); // Assuming this is also under /api
const quickStatsRoutes = require('./routes/quickStatsRoutes'); // Uncomment this line if needed
const cors = require('cors');
const app = express();
const connectedAccountsRoutes = require('./routes/connectedAccountsRoutes'); // Assuming this is also under /api

connectDB();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Authentication routes (e.g., /auth/login, /auth/register)
app.use('/auth', authRoutes);

// Home routes (if you have any under /home)
app.use('/home', homeRoutes);

// Welcome section routes - should be accessible at /api/WelcomeSection
app.use('/api', welcomeRoutes);

app.use('/api/user', userRoutes);
app.use('/api/preferences', preferenceRoutes);
app.use('/api/social-accounts', socialAccountRoutes);

// Assuming quickStatsRoutes has routes under /api/quickStats
app.use('/api/quickStats', quickStatsRoutes);

// If quickStatsRoutes also had routes starting with /api internally,
// mounting it under /api here would be correct. If its routes were just /quickStats,
// you would mount it directly: app.use('/api', quickStatsRoutes);
// Keep it commented out as per your request.
// app.use('/api', quickStatsRoutes);

// Assuming connectedAccountsRoutes also has routes under /api
app.use('/api', connectedAccountsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}....`);
});