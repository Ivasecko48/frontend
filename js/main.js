const processors ={
    highEndCPU: [ {
        procName: "Core i9 13900k",
        id: 1,
        manufacturer: "Intel",
        coresThreads: "24/32(8+16)",
        baseBoostGHz: "3.0/5.8",
        price: 579, currencySign:"€", currencyCode: "EUR"
    },
    {
        procName: "Core i7 13700k",
        id: 2,
        manufacturer: "Intel",
        coresThreads: "16/24(8+8)",
        baseBoostGHz: "3.4/5.4",
        price: 399, currencySign:"€", currencyCode: "EUR"
    },
    {
        procName: "Core i5 13600k",
        id: 3,
        manufacturer: "Intel",
        coresThreads: "14/20(6+8)",
        baseBoostGHz: "3.5/5.1",
        price: 299, currencySign:"€", currencyCode: "EUR"
    },
    {
        procName: "Ryzen 9 7950X",
        id: 4,
        manufacturer: "AMD",
        coresThreads: "16/32",
        baseBoostGHz: "4.5/5.7",
        price: 569, currencySign:"€", currencyCode: "EUR"
    },
    {
        procName: "Ryzen 7 7700X",
        id: 5,
        manufacturer: "AMD",
        coresThreads: "8/16",
        baseBoostGHz: "4.5/5.4",
        price: 349, currencySign:"€", currencyCode: "EUR"
    },
    {
        procName: "Ryzen 5 7600X",
        id: 6,
        manufacturer: "AMD",
        
        coresThreads: "6/12",
        baseBoostGHz: "4.7/5.3",
        price: 249, currencySign:"€", currencyCode: "EUR"
    },
],
midCPU:
[{
    procName: "Core i9 13900k",
    id: 7,
    manufacturer: "Intel",
    coresThreads: "24/32(8+16)",
    baseBoostGHz: "3.0/5.8",
    price: 579, currencySign:"€", currencyCode: "EUR"
},
{
    procName: "Core i7 13700k",
    id: 8,
    manufacturer: "Intel",
    coresThreads: "16/24(8+8)",
    baseBoostGHz: "3.4/5.4",
    price: 399, currencySign:"€", currencyCode: "EUR"
},
{
    procName: "Core i5 13600k",
    id: 9,
    manufacturer: "Intel",
    coresThreads: "14/20(6+8)",
    baseBoostGHz: "3.5/5.1",
    price: 299, currencySign:"€", currencyCode: "EUR"
},
{
    procName: "Ryzen 9 7950X",
    id: 10,
    manufacturer: "AMD",
    coresThreads: "16/32",
    baseBoostGHz: "4.5/5.7",
    price: 569, currencySign:"€", currencyCode: "EUR"
},
{
    procName: "Ryzen 7 7700X",
    id: 11,
    manufacturer: "AMD",
    coresThreads: "8/16",
    baseBoostGHz: "4.5/5.4",
    price: 349, currencySign:"€", currencyCode: "EUR"
},
{
    procName: "Ryzen 5 7600X",
    id: 12,
    manufacturer: "AMD",
    
    coresThreads: "6/12",
    baseBoostGHz: "4.7/5.3",
    price: 249, currencySign:"€", currencyCode: "EUR"
},
],
lowEndCPU:
[{
    procName: "Core i9 13900k",
    id: 13,
    manufacturer: "Intel",
    coresThreads: "24/32(8+16)",
    baseBoostGHz: "3.0/5.8",
    price: 579, currencySign:"€", currencyCode: "EUR"
},
{
    procName: "Core i7 13700k",
    id: 14,
    manufacturer: "Intel",
    coresThreads: "16/24(8+8)",
    baseBoostGHz: "3.4/5.4",
    price: 399, currencySign:"€", currencyCode: "EUR"
},
{
    procName: "Core i5 13600k",
    id: 15,
    manufacturer: "Intel",
    coresThreads: "14/20(6+8)",
    baseBoostGHz: "3.5/5.1",
    price: 299, currencySign:"€", currencyCode: "EUR"
},
{
    procName: "Ryzen 9 7950X",
    id: 16,
    manufacturer: "AMD",
    coresThreads: "16/32",
    baseBoostGHz: "4.5/5.7",
    price: 569, currencySign:"€", currencyCode: "EUR"
},
{
    procName: "Ryzen 7 7700X",
    id: 17,
    manufacturer: "AMD",
    coresThreads: "8/16",
    baseBoostGHz: "4.5/5.4",
    price: 349, currencySign:"€", currencyCode: "EUR"
},
{
    procName: "Ryzen 5 7600X",
    id: 18,
    manufacturer: "AMD",
    
    coresThreads: "6/12",
    baseBoostGHz: "4.7/5.3",
    price: 249, currencySign:"€", currencyCode: "EUR"
},
]

};

function generateTableRows(processorsArray, tableId) {
    const table = document.getElementById(tableId);
    processorsArray.forEach(processor => {
        const row = table.insertRow();
        row.insertCell().textContent = processor.manufacturer;
        row.insertCell().textContent = processor.procName;
        row.insertCell().textContent = processor.coresThreads;
        row.insertCell().textContent = processor.baseBoostGHz;
        row.insertCell().textContent = `${processor.currencySign}${processor.price}`;
    });
}

function mergeRowsByColumn(tableId, columnIndex) {
    const table = document.getElementById(tableId);
    const rows = table.rows;
    let previousText = null;
    let rowspanCount = 0;

    for (let i = 0; i < rows.length; i++) {
        const currentText = rows[i].cells[columnIndex].textContent;
        
        if (currentText === previousText) {
            
            rowspanCount++;
            rows[i - rowspanCount].cells[columnIndex].rowSpan = rowspanCount + 1;
            rows[i].cells[columnIndex].style.display = 'none'; 
        } else {
            rowspanCount = 0;
            previousText = currentText;
        }
    }
    
}

document.addEventListener('DOMContentLoaded', function() {
generateTableRows(processors.highEndCPU, 'highEndCpuTable');
generateTableRows(processors.midCPU, 'midCpuTable');
generateTableRows(processors.lowEndCPU, 'lowEndCpuTable');
mergeRowsByColumn('highEndCpuTable', 0);
mergeRowsByColumn('midCpuTable', 0);
mergeRowsByColumn('lowEndCpuTable', 0);
});

//mobile menu
document.addEventListener('DOMContentLoaded',()=>{
    const hamburgerButton= document.querySelector('.hamburger-button');
    const mobileMenu=document.querySelector('.mobile-menu');

hamburgerButton.addEventListener('click',()=>
mobileMenu.classList.toggle('active'));
})
