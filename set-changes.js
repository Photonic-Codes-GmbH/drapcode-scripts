//_____Setzen aller Änderungen in Textfelder_____
export function setChanges() {
    let plz = `plz${country.toLowerCase()}`;
    let norm = `norm${country.toLowerCase()}`;
    let exp = `exp${country.toLowerCase()}`;
    let pp10 = `ppzehn${country.toLowerCase()}`;
    let pp12 = `ppzwoelf${country.toLowerCase()}`;
    
    var transitTimeInput = document.getElementById('ikdnzx');
    transitTimeInput.innerHTML  = itemPlz[norm];
    
    var expressInput = document.getElementById('ik41qr');
    if(itemPlz[exp]) {
        expressInput.innerHTML =  '✓';
        expressInput.style.color = 'green';
    } else { 
        expressInput.innerHTML = 'X';
        expressInput.style.color = 'red';
    }
    
    var premiumPlus10Input = document.getElementById('ihlr3d');
    if(itemPlz[pp10]) {
        premiumPlus10Input.innerHTML =  '✓';
        premiumPlus10Input.style.color = 'green';
    } else {
        premiumPlus10Input.innerHTML = 'X';
        premiumPlus10Input.style.color = 'red';
    }
    
    var premiumPlus12Input = document.getElementById('ilmrgl');
    if(itemPlz[pp12]) {
      premiumPlus12Input.innerHTML = '✓';
      premiumPlus12Input.style.color = 'green';
    } else {
      premiumPlus12Input.innerHTML = 'X';
      premiumPlus12Input.style.color = 'red';
    }
    
    var cashOnDelivery = document.getElementById('ii3geg');
    if(itemCod[country]) {
      cashOnDelivery.innerHTML = '✓';
      cashOnDelivery.style.color = 'green';
    } else {
      cashOnDelivery.innerHTML = 'X';
      cashOnDelivery.style.color = 'red';
    }
    
    var fds = document.getElementById('icl8r5');
    if(itemFds[country.toLowerCase()]) {
      fds.innerHTML = '✓';
      fds.color = 'green';
    } else {
      fds.innerHTML = 'X';
      fds.style.color = 'red';
    }
    
    var payment = document.getElementById('ivpcnb');
    itemPay[country] ? payment.innerHTML = itemPay[country] : payment.innerHTML = '0';
    
    var paymentAmount = document.getElementById('i0vkkq');
    itemPayAmount[country.toLowerCase()] ? paymentAmount.innerHTML = itemPayAmount[country.toLowerCase()] : paymentAmount.innerHTML = '0';
    
    var dangerousGoods = document.getElementById('iiyudz');
    if(itemDg[country.toLowerCase()]) {
      dangerousGoods.innerHTML = itemDg[country.toLowerCase()]
      dangerousGoods.style.color = 'green';
    } else {
      dangerousGoods.innerHTML = 'X';
      dangerousGoods.style.color = 'red';
    }
    
    var b2c = document.getElementById('is83cv');
    if(itemB2c[country.toLowerCase()]) {
      b2c.innerHTML = '✓';
      b2c.style.color = 'green';
    } else {
      b2c.innerHTML = 'X';
      b2c.style.color = 'red';
    }
    
    var trasitInfo = document.getElementById('ijbq3f');
    itemCom.transittime ? trasitInfo.innerHTML = itemCom.transittime : trasitInfo.innerHTML = '';
    
    var advancedInfo = document.getElementById('icw3nf');
    itemCom.additionalcomments ? advancedInfo.innerHTML = itemCom.additionalcomments : advancedInfo.innerHTML = '';
    
    var addTransit = document.getElementById('i95hru');
    itemCompany.randomnumber ? addTransit.innerHTML = itemCompany.randomnumber : addTransit.innerHTML = '';
    
    //Contact
    console.log('depot', itemCompany.depot);
    
    var depot = document.getElementById('depot');
    itemCompany.depot ? depot.innerHTML = itemCompany.depot : depot.innerHTML = '';
    
    var company = document.getElementById('i1y0ow');
    itemCompany.company ? company.innerHTML = itemCompany.company : company.innerHTML = '';
    
    var street = document.getElementById('itpxb');
    itemCompany.street ? street.innerHTML = itemCompany.street : street.innerHTML = '';
    
    var zip = document.getElementById('in6sc');
    itemCompany.location ? zip.innerHTML = itemCompany.location : zip.innerHTML = '';
    
    var phone = document.getElementById('phone');
    itemCompany.phone ? phone.innerHTML = itemCompany.phone : phone.innerHTML = '';
}