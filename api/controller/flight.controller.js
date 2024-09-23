import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const getFlights = async (req, res) => {
    const APP_ID = process.env.APP_ID;
    const APP_KEY = process.env.APP_KEY;

    try {
        const response = await axios.get('https://api.schiphol.nl/public-flights/flights', {
            headers: {
                Accept: 'application/json',
                app_id: APP_ID,
                app_key: APP_KEY,
                ResourceVersion: 'v4'
            },
            params: {
                includedelays: false,
                page: 0,
                sort: '+scheduleTime'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('error fetching flights', error.message);
        res.status(500).json({ message: 'Error fetching flights' });
    }
}
export {getFlights};