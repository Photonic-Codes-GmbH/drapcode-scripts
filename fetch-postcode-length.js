import { data } from "https://general-backend.testing.photonic-codes.cloud/api/github/Photonic-Codes-GmbH/drapcode-scripts/main/data.js";

//_____Datenbankabfrage für Payment_____
export async function fetchPostLengthData() {
  const url = `https://systemplus-test6684.api.preview.drapcode.io/api/v1/developer/collection/postcodelength/items`;
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
    data.itemLen = responseData[0];

    var length = document.getElementById('zipLength');
    data.itemLen[data.country.toLowerCase()] ? length.innerHTML = `(please enter ${data.itemLen[data.country.toLowerCase()]})` : length.innerHTML = '';


  } catch (error) {
    console.error('Error fetching data:', error);
  }
}