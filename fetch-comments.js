import { data } from "https://general-backend.testing.photonic-codes.cloud/api/github/Photonic-Codes-GmbH/drapcode-scripts/main/data.js";
import { setChanges } from "https://general-backend.testing.photonic-codes.cloud/api/github/Photonic-Codes-GmbH/drapcode-scripts/main/set-changes.js";

//_____Datanbankabfrage für Comments_____
export async function fetchComData() {
  const url = `https://systemplus-test6684.api.preview.drapcode.io/api/v1/developer/collection/comments/items?country%3AEQUALS=${country}`;
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
    data.itemCom = responseData[0];

    setChanges();

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}