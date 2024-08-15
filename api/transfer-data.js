export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust for security if needed
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end(); // Handle preflight requests
        return;
    }

    if (req.method === 'GET') {
        // Handle GET request: Return some data
        const data = 'Your data for GET request'; // Replace with your actual data
        res.status(200).json({ message: 'Data retrieved successfully', data });
    } else if (req.method === 'POST') {
        // Handle POST request: Receive data
        const { data } = req.body;
        console.log('Received data:', data);
        res.status(200).json({ message: 'Data received', data });
    } else {
        // Handle any other methods that are not allowed
        res.status(405).json({ message: 'Method not allowed' });
    }
}
