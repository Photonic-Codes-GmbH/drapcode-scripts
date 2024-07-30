//_____Datenbankabfrage für Dropdown_____
async function fetchDropdownData() {
    const url = `https://systemplus-test6684.api.preview.drapcode.io/api/v1/developer/collection/company_code/items`;
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
    let sortedData = responseData.sort((a, b) => a.countryshortcut.localeCompare(b.countryshortcut));
    
    populateDropdown(sortedData);

    } catch (error) {
    console.error('Error fetching data:', error);
    }
}
     
//_____Befüllen des Dropdowns_____
function populateDropdown(data) {
    const dropdown = document.getElementById('igswy');
    data.forEach(item => {
        const option = document.createElement('option');
        option.value = item.countryshortcut;
        option.text = item.countryshortcut;
        dropdown.appendChild(option);
    });
}

fetchDropdownData();