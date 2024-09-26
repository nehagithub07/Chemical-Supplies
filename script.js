let chemi = [
    { id: 1, chemicalName: "Ammonium Persulfate", vendor: "LG Chem", density: 3525.92, viscosity: 60.63, packaging: "Bag", packSize: 100, unit: "kg", quantity: 6495.18 },
    { id: 2, chemicalName: "Caustic Potash", vendor: "Formosa", density: 3172.15, viscosity: 48.22, packaging: "Bag", packSize: 100, unit: "kg", quantity: 8751.90 },
    { id: 3, chemicalName: "Dimethylaminopropylamino", vendor: "LG Chem", density: 8435.37, viscosity: 12.62, packaging: "Barrel", packSize: 75, unit: "L", quantity: 5964.61 },
    { id: 4, chemicalName: "Mono Ammonium Phosphate", vendor: "Sinopec", density: 1597.65, viscosity: 76.51, packaging: "Bag", packSize: 105, unit: "kg", quantity: 8183.73 },
    { id: 5, chemicalName: "Ferric Nitrate", vendor: "DowDuPont", density: 364.04, viscosity: 14.90, packaging: "Bag", packSize: 105, unit: "kg", quantity: 4154.33 },
    { id: 6, chemicalName: "n-Pentane", vendor: "Sinopec", density: 4535.26, viscosity: 66.76, packaging: "N/A", packSize: 0, unit: "t", quantity: 6272.34 },
    { id: 7, chemicalName: "Glycol Ether PM", vendor: "LG Chem", density: 6495.18, viscosity: 72.12, packaging: "Bag", packSize: 250, unit: "kg", quantity: 8749.54 },
];

let sortOrd = { column: null, asc: true };
let selectrowIndx = -1;

function renderTbl() {
    const tblbdy = document.querySelector('#chemicalTable tbody');
    tblbdy.innerHTML = '';
    
    chemi.forEach((chemical, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${chemical.id}</td>
            <td>${chemical.chemicalName}</td>
            <td>${chemical.vendor}</td>
            <td>${chemical.density}</td>
            <td>${chemical.viscosity}</td>
            <td>${chemical.packaging}</td>
            <td>${chemical.packSize}</td>
            <td>${chemical.unit}</td>
            <td>${chemical.quantity}</td>
        `;
        row.setAttribute('data-index', index);
        row.onclick = () => selectRow(index);
        tblbdy.appendChild(row);
    });
}
function sortTbl(column) {
    const isAsc = sortOrd.column === column ? !sortOrd.asc : true;
    chemi.sort((a, b) => (a[column] > b[column] ? 1 : -1) * (isAsc ? 1 : -1));
    sortOrd = { column, asc: isAsc };
    renderTbl();
}
function selectRow(index) {
    selectrowIndx = index;
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => row.classList.remove('selected'));
    rows[selectrowIndx].classList.add('selected');
    const chemical = chemi[selectrowIndx];
    document.getElementById('editId').value = chemical.id;
    document.getElementById('editChemicalName').value = chemical.chemicalName;
    document.getElementById('editVendor').value = chemical.vendor;
    document.getElementById('editDensity').value = chemical.density;
    document.getElementById('editViscosity').value = chemical.viscosity;
    document.getElementById('editPackaging').value = chemical.packaging;
    document.getElementById('editPackSize').value = chemical.packSize;
    document.getElementById('editUnit').value = chemical.unit;
    document.getElementById('editQuantity').value = chemical.quantity;
    document.getElementById('editPanel').classList.remove('hidden');
}

function saveEdit() {
    const chemical = chemi[selectrowIndx];
    chemical.chemicalName = document.getElementById('editChemicalName').value;
    chemical.vendor = document.getElementById('editVendor').value;
    chemical.density = parseFloat(document.getElementById('editDensity').value);
    chemical.viscosity = parseFloat(document.getElementById('editViscosity').value);
    chemical.packaging = document.getElementById('editPackaging').value;
    chemical.packSize = parseFloat(document.getElementById('editPackSize').value);
    chemical.unit = document.getElementById('editUnit').value;
    chemical.quantity = parseFloat(document.getElementById('editQuantity').value);

    document.getElementById('editPanel').classList.add('hidden');
    renderTbl();
}

function cancelEdit() {
    document.getElementById('editPanel').classList.add('hidden');
}

function deleteRow() {
    if (selectrowIndx >= 0) {
        chemi.splice(selectrowIndx, 1);
        selectrowIndx = -1;
        document.getElementById('editPanel').classList.add('hidden');
        renderTbl();
    }
}
function addRow() {
    const newRow = { id: chemi.length + 1, chemicalName: "New Chemical", vendor: "", density: 0, viscosity: 0, packaging: "", packSize: 0, unit: "", quantity: 0 };
    chemi.push(newRow);
    renderTbl();
}
function moveRowUp() {
    if (selectrowIndx > 0) {
        [chemi[selectrowIndx], chemi[selectrowIndx - 1]] = [chemi[selectrowIndx - 1], chemi[selectrowIndx]];
        selectrowIndx--;
        renderTbl();
    }
}
function moveRowDown() {
    if (selectrowIndx < chemi.length - 1) {
        [chemi[selectrowIndx], chemi[selectrowIndx + 1]] = [chemi[selectrowIndx + 1], chemi[selectrowIndx]];
        selectrowIndx++;
        renderTbl();
    }
}

function refreshData() {
    selectrowIndx = -1;
    document.getElementById('editPanel').classList.add('hidden');
    renderTbl();
}

function saveData() {
    localStorage.setItem('chemicalSupplies', JSON.stringify(chemi));
    document.getElementById('saveconfirmation').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('saveconfirmation').classList.add('hidden');
    }, 2000);
}
window.onload = function() {
    const savedData = JSON.parse(localStorage.getItem('chemicalSupplies'));
    if (savedData) {
        chemi = savedData;
    }
    renderTbl();
};
