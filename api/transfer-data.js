// /api/data.js

let dataStore = {}; // In-memory storage, replace with a database for persistence

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end(); // Handle preflight requests
        return;
    }
    if (req.method === 'POST') {
        const { key, value } = req.body;
        const id = req.headers['x-id']; // Use a header to pass the ID or generate one
        dataStore[id] = { key, value }; // Store data with a unique ID
        res.status(200).json({ message: 'Data saved', id });
    } else if (req.method === 'GET') {
        const { id } = req.query;
        const data = dataStore[id];
        if (data) {
            res.status(200).json({ message: 'Data retrieved successfully', data });
        } else {
            res.status(404).json({ message: 'Data not found' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}

