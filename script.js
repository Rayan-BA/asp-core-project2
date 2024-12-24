const banks = [
    {
        'bankCode': '55',
        'nameEn': 'Banque Saudi Fransi',
        'nameAr': 'البنك السعودي الفرنسي',
        'website': 'https://bsf.sa',
        'swiftCode': 'BSFRSARI',
    },
    {
        'bankCode': '80',
        'nameEn': 'Alrajhi Bank',
        'nameAr': 'بنك الراجحي',
        'website': 'https://alrajhibank.com.sa',
        'swiftCode': 'RJHISARI',
    },
    {
        'bankCode': '10',
        'nameEn': 'National Commertial Bank',
        'nameAr': 'البنك الأهلي التجاري',
        'website': 'https://alahli.com',
        'swiftCode': 'NCBKSAJE',
    },
    {
        'bankCode': '45',
        'nameEn': 'SABB',
        'nameAr': 'ساب',
        'website': 'https://sab.com',
        'swiftCode': 'SABBSARI',
    },
    {

        'bankCode': '20',
        'nameEn': 'Riyad Bank',
        'nameAr': 'بنك الرياض',
        'website': 'https://riyadbank.com',
        'swiftCode': 'RIBLSARI',
    },
    {

        'bankCode': '40',
        'nameEn': 'SAMBA',
        'nameAr': 'سامبا',
        'website': 'https://samba.com',
        'swiftCode': 'SAMBPKKA',
    },
    {
        'bankCode': '05',
        'nameEn': 'ALinma Bank',
        'nameAr': 'بنك الانماء',
        'website': 'https://alinma.com',
        'swiftCode': 'INMASARI',
    },
    {
        'bankCode': '50',
        'nameEn': 'AlAwwal Bank',
        'nameAr': 'البنك الأول',
        'website': 'https://alawwalbank.com',
        'swiftCode': 'AAALSARI',
    },
    {
        'bankCode': '60',
        'nameEn': 'Bank Aljazerah',
        'nameAr': 'بنك الجزيرة',
        'website': 'https://bankaljazira.com',
        'swiftCode': 'BSFRSARI',
    },
    {
        'bankCode': '65',
        'nameEn': 'Saudi Investment Bank',
        'nameAr': 'البنك السعودي للأستثمار',
        'website': 'https://saib.com.sa',
        'swiftCode': 'SIBCSARI',
    },
    {
        'bankCode': '15',
        'nameEn': 'BANK ALBELAD',
        'nameAr': 'بنك البلاد',
        'website': 'https://bankalbilad.com',
        'swiftCode': 'ALBISARI',
    },
    {
        'bankCode': '30',
        'nameEn': 'Arab National Bank',
        'nameAr': 'البنك العربي الوطني',
        'website': 'https://anb.com.sa',
        'swiftCode': 'ARNBSARI',
    },
    {
        'bankCode': '90',
        'nameEn': 'Gulf International Bank',
        'nameAr': 'بنك الخليج',
        'website': 'https://gib.com',
        'swiftCode': 'GULFSARI',
    },
    {
        'bankCode': '95',
        'nameEn': 'Emirates NBD Bank',
        'nameAr': 'بنك الامارات',
        'website': 'https://emiratesnbd.com.sa',
        'swiftCode': 'EBILAEAD',
    },
    {
        'bankCode': '76',
        'nameEn': 'Bank Muscat',
        'nameAr': 'بنك مسقط',
        'website': 'https://bankmuscat.com',
        'swiftCode': 'BMUSSARI',
    },
    {
        'bankCode': '71',
        'nameEn': 'National Bank Of Bahrain',
        'nameAr': 'بنك البحرين الوطني',
        'website': 'https://nbbonline.com',
        'swiftCode': 'NBOBBHBM',
    },
    {
        'bankCode': '75',
        'nameEn': 'National Bank of Kuwait',
        'nameAr': 'بنك الكويت الوطني',
        'website': 'https://nbk.com',
        'swiftCode': 'NBOKKWKW',
    },
    {
        'bankCode': '85',
        'nameEn': 'BNP PARIBAS SAUDI ARABIA',
        'nameAr': 'بي ان بي باريبوس',
        'website': 'https://mea.bnpparibas.com',
        'swiftCode': 'BNPAFRPP',
    },
]
function checkIban(iban) {
    if (iban.length != 24) {
        return false
    }

    if (!iban.startsWith("SA")) {
        return false
    }

    return true
}

function validate() {
    let msg = document.getElementById("msg")
    let table = document.getElementById("table")
    let thead = document.getElementById("thead")
    let tbody = document.getElementById("tbody")

    // clear previous results
    msg.innerHTML = ""
    msg.className = "fs-6"
    thead.innerHTML = ""
    tbody.innerHTML = ""

    const iban = document.getElementById("iban").value.replace(" ", "").toUpperCase()
    const bankCode = iban.substr(4, 2)
    const accNumber = String(Number(iban.substr(6))) // remove leading zeros
    const branch = accNumber.substr(0, 3)

    const bank = banks.find(e => e.bankCode == bankCode)

    if (checkIban(iban)) {
        msg.innerHTML = "Valid IBAN"
        msg.classList.add("badge")
        msg.classList.add("bg-success")

        let trHead = document.createElement("tr")
        let tdHead = document.createElement("td")

        let trCountry = document.createElement("tr")
        let tdCountry1 = document.createElement("td")
        let tdCountry2 = document.createElement("td")

        let trBank = document.createElement("tr")
        let tdBank1 = document.createElement("td")
        let tdBank2 = document.createElement("td")

        let trAccNum = document.createElement("tr")
        let tdAccNum1 = document.createElement("td")
        let tdAccNum2 = document.createElement("td")

        let trBranch = document.createElement("tr")
        let tdBranch1 = document.createElement("td")
        let tdBranch2 = document.createElement("td")

        let trSwift = document.createElement("tr")
        let tdSwift1 = document.createElement("td")
        let tdSwift2 = document.createElement("td")

        let trWebsite = document.createElement("tr")
        let tdWebsite1 = document.createElement("td")
        let tdWebsite2 = document.createElement("td")
        let aWebsite = document.createElement("a")

        tdHead.innerHTML = "IBAN Information"
        tdHead.colSpan = "2"
        tdHead.classList.add("text-center")

        tdCountry1.innerHTML = "Country"
        tdCountry2.innerHTML = "Saudi Arabia"

        tdBank1.innerHTML = "Bank Name"
        tdBank2.innerHTML = bank.nameEn

        tdAccNum1.innerHTML = "Account Number"
        tdAccNum2.innerHTML = accNumber

        tdBranch1.innerHTML = "Bank Branch"
        tdBranch2.innerHTML = branch

        tdSwift1.innerHTML = "Swift Code"
        tdSwift2.innerHTML = bank.swiftCode

        tdWebsite1.innerHTML = "Website"
        aWebsite.href = bank.website
        aWebsite.innerText = bank.website
        aWebsite.target = "_blank"
        tdWebsite2.appendChild(aWebsite)

        trHead.appendChild(tdHead)
        thead.appendChild(trHead)

        trCountry.appendChild(tdCountry1)
        trCountry.appendChild(tdCountry2)

        trBank.appendChild(tdBank1)
        trBank.appendChild(tdBank2)

        trAccNum.appendChild(tdAccNum1)
        trAccNum.appendChild(tdAccNum2)

        trBranch.appendChild(tdBranch1)
        trBranch.appendChild(tdBranch2)

        trSwift.appendChild(tdSwift1)
        trSwift.appendChild(tdSwift2)

        trWebsite.appendChild(tdWebsite1)
        trWebsite.appendChild(tdWebsite2)

        tbody.appendChild(trCountry)
        tbody.appendChild(trBank)
        tbody.appendChild(trAccNum)
        tbody.appendChild(trBranch)
        tbody.appendChild(trSwift)
        tbody.appendChild(trWebsite)

        table.style.display = "block"
    } else {
        msg.innerHTML = "Invalid IBAN"
        msg.classList.add("badge")
        msg.classList.add("bg-danger")

        table.style.display = "none"
    }
}