let consultantData = [
    {
        "name": "Andi Purwanto",
        "address": "Klinik A, Tangerang, Banten",
        "phone": "+6281234567890"
    },
    {
        "name": "Dwi Sakti",
        "address": "Klinik B, Tangerang, Banten",
        "phone": "+6281234567890"
    }, {
        "name": "Budi Junarto",
        "address": "Klinik C, Tangerang, Banten",
        "phone": "+6281234567890"
    },
    {
        "name": "Christian Jong",
        "address": "Klinik D, Tangerang, Banten",
        "phone": "+6281234567890"
    },
    {
        "name": "Lim Sang Putra",
        "address": "Klinik E, Tangerang, Banten",
        "phone": "+6281234567890"
    },
    {
        "name": "Junarto",
        "address": "Klinik F, Tangerang, Banten",
        "phone": "+6281234567890"
    }
]

let consultantName = document.getElementById("consultant-name");
function getIndexFromURL() {
    const url = window.location.href;
    const urlParamsStartIndex = url.indexOf('?');

    if (urlParamsStartIndex !== -1)
        return url.substring(urlParamsStartIndex + 1);
    return null;
}

consultantName.innerHTML = consultantData[getIndexFromURL()].name;