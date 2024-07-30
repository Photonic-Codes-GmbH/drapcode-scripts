import { data } from "https://github.com/Photonic-Codes-GmbH/drapcode-scripts/blob/main/data";
import { setChanges } from "https://github.com/Photonic-Codes-GmbH/drapcode-scripts/blob/main/set-changes";

//_____Datenbankabfrage für Cash on Delivery_____
export async function fetchCodData() {
    const url = `https://systemplus-test6684.api.preview.drapcode.io/api/v1/developer/collection/cod/items`;
    const apiKey = '23C4A-5599-46DB-A39C';
                
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'x-api-key': apiKey
          }
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const responseData = await response.json();
        data.itemCod = responseData[0];
        setChanges();
    
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }