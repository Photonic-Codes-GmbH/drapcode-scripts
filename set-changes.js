//_____Setzen aller Änderungen in Textfelder_____
export function setChanges() {
    let plz = `plz${data.country.toLowerCase()}`;
    let norm = `norm${data.country.toLowerCase()}`;
    let exp = `exp${data.country.toLowerCase()}`;
    let pp10 = `ppzehn${data.country.toLowerCase()}`;
    let pp12 = `ppzwoelf${data.country.toLowerCase()}`;
    
    var transitTimeInput = document.getElementById('ikdnzx');
    transitTimeInput.innerHTML  = data.itemPlz[norm];
    
    var expressInput = document.getElementById('ik41qr');
    if(data.itemPlz[exp]) {
        expressInput.innerHTML =  '✓';
        expressInput.style.color = 'green';
    } else { 
        expressInput.innerHTML = 'X';
        expressInput.style.color = 'red';
    }
    
    var premiumPlus10Input = document.getElementById('ihlr3d');
    if(data.itemPlz[pp10]) {
        premiumPlus10Input.innerHTML =  '✓';
        premiumPlus10Input.style.color = 'green';
    } else {
        premiumPlus10Input.innerHTML = 'X';
        premiumPlus10Input.style.color = 'red';
    }
    
    var premiumPlus12Input = document.getElementById('ilmrgl');
    if(data.itemPlz[pp12]) {
      premiumPlus12Input.innerHTML = '✓';
      premiumPlus12Input.style.color = 'green';
    } else {
      premiumPlus12Input.innerHTML = 'X';
      premiumPlus12Input.style.color = 'red';
    }
    
    var cashOnDelivery = document.getElementById('ii3geg');
    if(data.itemCod[data.country]) {
      cashOnDelivery.innerHTML = '✓';
      cashOnDelivery.style.color = 'green';
    } else {
      cashOnDelivery.innerHTML = 'X';
      cashOnDelivery.style.color = 'red';
    }
    
    var fds = document.getElementById('icl8r5');
    if(data.itemFds[data.country.toLowerCase()]) {
      fds.innerHTML = '✓';
      fds.color = 'green';
    } else {
      fds.innerHTML = 'X';
      fds.style.color = 'red';
    }
    
    var payment = document.getElementById('ivpcnb');
    data.itemPay[data.country] ? payment.innerHTML = data.itemPay[data.country] : payment.innerHTML = '0';
    
    var paymentAmount = document.getElementById('i0vkkq');
    data.itemPayAmount[data.country.toLowerCase()] ? paymentAmount.innerHTML = data.itemPayAmount[data.country.toLowerCase()] : paymentAmount.innerHTML = '0';
    
    var dangerousGoods = document.getElementById('iiyudz');
    if(data.itemDg[data.country.toLowerCase()]) {
      dangerousGoods.innerHTML = data.itemDg[data.country.toLowerCase()]
      dangerousGoods.style.color = 'green';
    } else {
      dangerousGoods.innerHTML = 'X';
      dangerousGoods.style.color = 'red';
    }
    
    var b2c = document.getElementById('is83cv');
    if(data.itemB2c[data.country.toLowerCase()]) {
      b2c.innerHTML = '✓';
      b2c.style.color = 'green';
    } else {
      b2c.innerHTML = 'X';
      b2c.style.color = 'red';
    }
    
    var trasitInfo = document.getElementById('ijbq3f');
    data.itemCom.transittime ? trasitInfo.innerHTML = data.itemCom.transittime : trasitInfo.innerHTML = '';
    
    var advancedInfo = document.getElementById('icw3nf');
    data.itemCom.additionalcomments ? advancedInfo.innerHTML = data.itemCom.additionalcomments : advancedInfo.innerHTML = '';
    
    var addTransit = document.getElementById('i95hru');
    data.itemCompany.randomnumber ? addTransit.innerHTML = data.itemCompany.randomnumber : addTransit.innerHTML = '';
    
    var length = document-getElementById('zipLength');
    data.itemLen[data.country] ? length.innerHTML = data.itemLen[data.country] : length.innerHTML = '';

    //Contact
    var depot = document.getElementById('depot');
    data.itemCompany.somenumber ? depot.innerHTML = data.itemCompany.somenumber : depot.innerHTML = '';
    
    var company = document.getElementById('i1y0ow');
    data.itemCompany.company ? company.innerHTML = data.itemCompany.company : company.innerHTML = '';
    
    var street = document.getElementById('itpxb');
    data.itemCompany.street ? street.innerHTML = data.itemCompany.street : street.innerHTML = '';
    
    var zip = document.getElementById('in6sc');
    data.itemCompany.location ? zip.innerHTML = data.itemCompany.location : zip.innerHTML = '';
    
    var phone = document.getElementById('phone');
    data.itemCompany.phone ? phone.innerHTML = data.itemCompany.phone : phone.innerHTML = '';
}