import { data } from "https://github.com/Photonic-Codes-GmbH/drapcode-scripts/blob/main/data";
import { setChanges } from "https://github.com/Photonic-Codes-GmbH/drapcode-scripts/blob/main/set-changes";

//_____Datenbankabfrage für Company_Codes_____
export async function fetchCompanyData() {
  const url = `https://systemplus-test6684.api.preview.drapcode.io/api/v1/developer/collection/company_code/items?countryshortcut%3AEQUALS=${country}`;
  const apiKey = '23C4A-5599-46DB-A39C';

console.log('URL', url);
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
    data.itemCompany = responseData[0];
    
    setChanges();
    

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}