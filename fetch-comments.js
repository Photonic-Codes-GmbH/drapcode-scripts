import { data } from "./data";
import { setChanges } from "./set-changes";

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