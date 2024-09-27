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

let consultantContainer = document.getElementById("consultantListContainer");
for (var i = 0; i < 6; i++) {
    consultantContainer.innerHTML += `<div class="cl-container">
    <img class="cl-img" src="img/consultant.png">
    <div class="cl-datas">
        <p>${consultantData[i].name}</p>
        <p>${consultantData[i].address}</p>
        <p>${consultantData[i].phone}</p>
    </div>
    <a onclick="chatConsultant(${i})" class="cl-button hoverElement">Chat</a>
</a>`
}

var c_sliderPos = 0;
const c_itemAmount = 6;
const c_desktopSliderSize = 150.0 / c_itemAmount;
const c_tabletSliderSize = 300.0 / c_itemAmount;
const c_desktopSliderCount = 4;
const c_tabletSliderCount = 2;
function updateConsultantSliderCount() {
    if (window.innerWidth >= 900) {
        return c_desktopSliderCount;
    }
    return c_tabletSliderCount;
}
function updateConsultantSliderSize() {
    if (window.innerWidth >= 900) {
        return c_desktopSliderSize;
    }
    return c_tabletSliderSize;
}
function resizeConsultantSlider() {
    var currentSliderCount = updateConsultantSliderCount();
    var currentSliderSize = updateConsultantSliderSize();
    if (c_sliderPos > c_itemAmount - currentSliderCount) c_sliderPos = c_itemAmount - currentSliderCount;
    if (c_sliderPos < 0) c_sliderPos = 0;
    document.getElementById("consultantListSlider").style.left = -parseFloat(c_sliderPos * currentSliderSize) + "%";
}
function slideRightConsultant() {
    c_sliderPos += 1;
    if (c_sliderPos > c_itemAmount - updateConsultantSliderCount()) c_sliderPos = 0;
    resizeConsultantSlider();
}
function slideLeftConsultant() {
    c_sliderPos -= 1;
    if (c_sliderPos < 0) c_sliderPos = c_itemAmount - updateConsultantSliderCount();
    resizeConsultantSlider();
}