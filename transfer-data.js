export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust as needed
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end(); // Handle preflight requests
        return;
    }

    if (req.method === 'POST') {
        const { data } = req.body;
        // Forward or process the data as needed
        res.status(200).json({ message: 'Data received', data });
    } else {
        res.status(405).json({ message: 'Only POST requests are allowed' });
    }
}
