import { fetchPlzData } from "./fetch-postcode";
import { fetchComData } from "./fetch-comments";
import { fetchCodData } from "./fetch-cash-on-delivery";
import { fetchPayData } from "./fetch-payment";
import { fetchPayAmountData } from "./fetch-paymentamount";
import { fetchB2cData } from "./fetch-b2c";
import { fetchFdsData } from "./fetch-fixed-date-service";
import { fetchCompanyData } from "./fetch-company-codes";
import { data } from "./data";

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
    checkAndFetchData()
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
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('igswy').addEventListener('change', handleDropdownChange);
    document.getElementById('iad2k').addEventListener('input', handlePostalcodeChange);
});