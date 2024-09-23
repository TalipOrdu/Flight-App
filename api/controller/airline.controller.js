import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const getAirlines = async(req,res)=>{
    const APP_ID = process.env.APP_ID;
    const APP_KEY = process.env.APP_KEY;

    try {
        const response = await axios.get('https://api.schiphol.nl/public-flights/airlines',{
            headers: {
                Accept: 'application/json',
                app_id: APP_ID,
                app_key: APP_KEY,
                ResourceVersion: 'v4'
            },
            params:{
                page:10
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching airlines:', error.message);
        res.status(500).json({ message: 'Error fetching airlines' });
    }
}
export {getAirlines};