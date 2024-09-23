import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const getDestinations = async (req, res) => {
    const APP_ID = process.env.APP_ID;
    const APP_KEY = process.env.APP_KEY;
    try {
        const response = await axios.get('https://api.schiphol.nl/public-flights/destinations', {
            headers: {
                Accept: 'application/json',
                app_id: APP_ID,
                app_key: APP_KEY,
                ResourceVersion: 'v4'
            }
        });
        if (response.status === 200) {
            res.json(response.data);
        } else {
            console.error(`Error: Received status code ${response.status}`);
            res.status(response.status).json({ message: `Error fetching destinations: ${response.statusText}` });
        }
    } catch (error) {
        console.error('Error fetching destinations:', error.response ? error.response.data : error.message);
        res.status(500).json({ message: 'Error fetching destinations' });
    }
}
export {getDestinations};