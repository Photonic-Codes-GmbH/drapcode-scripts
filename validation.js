import { fetchB2cData } from "https://general-backend.testing.photonic-codes.cloud/api/github/Photonic-Codes-GmbH/drapcode-scripts/main/fetch-b2c.js";
import { fetchCodData } from "https://general-backend.testing.photonic-codes.cloud/api/github/Photonic-Codes-GmbH/drapcode-scripts/main/fetch-cash-on-delivery.js";
import { fetchComData } from "https://general-backend.testing.photonic-codes.cloud/api/github/Photonic-Codes-GmbH/drapcode-scripts/main/fetch-comments.js";
import { fetchPlzData } from "https://general-backend.testing.photonic-codes.cloud/api/github/Photonic-Codes-GmbH/drapcode-scripts/main/fetch-postcode.js";
import { fetchPayData } from "https://general-backend.testing.photonic-codes.cloud/api/github/Photonic-Codes-GmbH/drapcode-scripts/main/fetch-payment.js";
import { fetchPayAmountData } from "https://general-backend.testing.photonic-codes.cloud/api/github/Photonic-Codes-GmbH/drapcode-scripts/main/fetch-paymentamount.js";
import { fetchFdsData } from "https://general-backend.testing.photonic-codes.cloud/api/github/Photonic-Codes-GmbH/drapcode-scripts/main/fetch-fixed-date-service.js";
import { fetchCompanyData } from "https://general-backend.testing.photonic-codes.cloud/api/github/Photonic-Codes-GmbH/drapcode-scripts/main/fetch-company-codes.js";
import { data } from "https://general-backend.testing.photonic-codes.cloud/api/github/Photonic-Codes-GmbH/drapcode-scripts/main/data.js";

//_____Event zum prüfen auf Änderungen vom Dropdown_____
function handleDropdownChange() {
    var sourceDropdown = document.getElementById('igswy');
    data.country = sourceDropdown.options[sourceDropdown.selectedIndex].text;
    checkAndFetchData()
}

//_____Event zum prüfen auf Änderungen von der Postleitzahl_____
function handlePostalcodeChange() {
    var userPostalcode = document.getElementById('iad2k');
    data.postcode = userPostalcode.value;
    checkAndFetchData();
}

//_____Prüft ob Land und PLZ gewählt wurde_____
function checkAndFetchData() {
    if ((postcode !== '' && postcode.length > 3) && country !== '') {
        fetchPlzData();
        fetchComData();
        fetchCodData();
        fetchPayData();
        fetchPayAmountData();
        fetchB2cData();
        fetchFdsData();
        fetchCompanyData();
        
    } else {
        console.log('Warten auf gültige Werte für country und postcode.');
        clearAllValues();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('igswy').addEventListener('change', handleDropdownChange);
    document.getElementById('iad2k').addEventListener('input', handlePostalcodeChange);
});

//_____Löschen aller Werte_____
function clearAllValues() {
    var elements = ['ikdnzx', 'ik41qr', 'ihlr3d', 'ilmrgl', 'ii3geg', 'icl8r5', 'ivpcnb', 'i0vkkq', 'iiyudz', 'is83cv', 'ijbq3f', 'icw3nf', 'i95hru', 'depot', 'i1y0ow', 'itpxb', 'in6sc', 'phone'];
    elements.forEach(function(id) {
        var element = document.getElementById(id);
        element.innerHTML = '';
        element.style.color = '';
    });
}