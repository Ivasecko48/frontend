const processors = {
    highEndCPU: [
        {
            procName: "Core i9 13900k",
            id: 1,
            manufacturer: "Intel",
            coresThreads: "24/32",
            baseBoostGHz: "3.0/5.8",
            price: 579,
            currencySign: "€",
            currencyCode: "EUR",
            socket: "LGA 1700"
        },
        {
            procName: "Core i7 13700k",
            id: 2,
            manufacturer: "Intel",
            coresThreads: "16/24",
            baseBoostGHz: "3.4/5.4",
            price: 399,
            currencySign: "€",
            currencyCode: "EUR",
            socket: "LGA 1700"
        },
        {
            procName: "Core i5 13600k",
            id: 3,
            manufacturer: "Intel",
            coresThreads: "14/20",
            baseBoostGHz: "3.5/5.1",
            price: 299,
            currencySign: "€",
            currencyCode: "EUR",
            socket: "LGA 1700"
        },
        {
            procName: "Ryzen 9 7950X",
            id: 4,
            manufacturer: "AMD",
            coresThreads: "16/32",
            baseBoostGHz: "4.5/5.7",
            price: 569,
            currencySign: "€",
            currencyCode: "EUR",
            socket: "AM4"
        },
        {
            procName: "Ryzen 7 7700X",
            id: 5,
            manufacturer: "AMD",
            coresThreads: "8/16",
            baseBoostGHz: "4.5/5.4",
            price: 349,
            currencySign: "€",
            currencyCode: "EUR",
            socket: "AM4"
        },
        {
            procName: "Ryzen 5 7600X",
            id: 6,
            manufacturer: "AMD",
            coresThreads: "6/12",
            baseBoostGHz: "4.7/5.3",
            price: 249,
            currencySign: "€",
            currencyCode: "EUR",
            socket: "AM4"
        },
    ],
    midCPU: [
        {
            procName: "Core i5 12600k",
            id: 7,
            manufacturer: "Intel",
            coresThreads: "10/16",
            baseBoostGHz: "3.7/4.9",
            price: 269,
            currencySign: "€",
            currencyCode: "EUR",
            socket: "LGA 1700"
        },
        {
            procName: "Core i5 13400",
            id: 8,
            manufacturer: "Intel",
            coresThreads: "10/16",
            baseBoostGHz: "2.5/4.6",
            price: 199,
            currencySign: "€",
            currencyCode: "EUR",
            socket: "LGA 1700"
        },
        {
            procName: "Core i5 12400",
            id: 9,
            manufacturer: "Intel",
            coresThreads: "6/0",
            baseBoostGHz: "2.5/4.4",
            price: 169,
            currencySign: "€",
            currencyCode: "EUR",
            socket: "LGA 1700"
        },
        {
            procName: "Ryzen 5 5600G",
            id: 10,
            manufacturer: "AMD",
            coresThreads: "6/12",
            baseBoostGHz: "3.9/4.4",
            price: 215,
            currencySign: "€",
            currencyCode: "EUR",
            socket: "AM4"
        },
        {
            procName: "Ryzen 5 5500",
            id: 11,
            manufacturer: "AMD",
            coresThreads: "6/12",
            baseBoostGHz: "3.6/4.2",
            price: 155,
            currencySign: "€",
            currencyCode: "EUR",
            socket: "AM4"
        },
        {
            procName: "Ryzen 5 4600G",
            id: 12,
            manufacturer: "AMD",
            coresThreads: "6/12",
            baseBoostGHz: "3.7/4.2",
            price: 149,
            currencySign: "€",
            currencyCode: "EUR",
            socket: "AM4"
        },
    ],
    lowEndCPU: [
        {
            procName: "Core i3 13100",
            id: 13,
            manufacturer: "Intel",
            coresThreads: "4/8",
            baseBoostGHz: "3.4/4.5",
            price: 133,
            currencySign: "€",
            currencyCode: "EUR",
            socket: "LGA 1700"
        },
        {
            procName: "Core i3 12100",
            id: 14,
            manufacturer: "Intel",
            coresThreads: "4/0",
            baseBoostGHz: "3.3/4.3",
            price: 99,
            currencySign: "€",
            currencyCode: "EUR",
            socket: "LGA 1700"
        },
        {
            procName: "Ryzen 5 4500",
            id: 15,
            manufacturer: "AMD",
            coresThreads: "6/12",
            baseBoostGHz: "3.6/4.1",
            price: 79,
            currencySign: "€",
            currencyCode: "EUR",
            socket: "AM4"
        },
        {
            procName: "Ryzen 5 4100",
            id: 16,
            manufacturer: "AMD",
            coresThreads: "4/8",
            baseBoostGHz: "3.8/4.0",
            price: 69,
            currencySign: "€",
            currencyCode: "EUR",
            socket: "AM4"
        }
    ]
};
const motherboards = [
    {
        name: "ASUS ROG Strix Z690-E Gaming",
        socket: "LGA1700",
        price: 2
        // Ostale informacije o matičnoj ploči...
    },
    // Ostale matične ploče...
];
const grafickeKartice = {
    NVIDIA: [
        {
            modelName: "RTX 4090",
            id: 2,
            manufacturer: "NVIDIA",
            memory: "24 GB GDDR6X",
            price: 1599,
            currencySign: "€",
            currencyCode: "EUR",
            TDP: "450W"
        },
        {
            modelName: "RTX 3090",
            id: 18,
            manufacturer: "NVIDIA",
            memory: "24 GB GDDR6X",
            price: 1499,
            currencySign: "€",
            currencyCode: "EUR",
            TDP: "350W"
        },
        {
            modelName: "RTX 4060",
            id: 1,
            manufacturer: "NVIDIA",
            memory: "12 GB GDDR6",
            price: 499,
            currencySign: "€",
            currencyCode: "EUR",
            TDP: "180W"
        },
        {
            modelName: "RTX 3080",
            id: 19,
            manufacturer: "NVIDIA",
            memory: "10 GB GDDR6X",
            price: 569,
            currencySign: "€",
            currencyCode: "EUR",
            TDP: "320W"
        },
        {
            modelName: "RTX 3070",
            id: 20,
            manufacturer: "NVIDIA",
            memory: "8 GB GDDR6",
            price: 499,
            currencySign: "€",
            currencyCode: "EUR",
            TDP: "220W"
        },
        {
            modelName: "RTX 3060 Ti",
            id: 21,
            manufacturer: "NVIDIA",
            memory: "8 GB GDDR6",
            price: 399,
            currencySign: "€",
            currencyCode: "EUR",
            TDP: "200W"
        },
        {
            modelName: "RTX 3050",
            id: 22,
            manufacturer: "NVIDIA",
            memory: "4 GB GDDR6",
            price: 249,
            currencySign: "€",
            currencyCode: "EUR",
            TDP: "130W"
        }
    ],
    AMD: [
        {
            modelName: "RX 7800 XT",
            id: 3,
            manufacturer: "AMD",
            memory: "16 GB GDDR6",
            price: 499,
            currencySign: "€",
            currencyCode: "EUR",
            TDP: "400W"
        },
        {
            modelName: "RX 7600",
            id: 4,
            manufacturer: "AMD",
            memory: "12 GB GDDR6",
            price: 349,
            currencySign: "€",
            currencyCode: "EUR",
            TDP: "250W"
        },
        {
            modelName: "RX 6900 XT",
            id: 25,
            manufacturer: "AMD",
            memory: "16 GB GDDR6",
            price: 699,
            currencySign: "€",
            currencyCode: "EUR",
            TDP: "300W"
        },
        {
            modelName: "RX 6800 XT",
            id: 26,
            manufacturer: "AMD",
            memory: "16 GB GDDR6",
            price: 649,
            currencySign: "€",
            currencyCode: "EUR",
            TDP: "300W"
        },
        {
            modelName: "RX 6700 XT",
            id: 27,
            manufacturer: "AMD",
            memory: "12 GB GDDR6",
            price: 479,
            currencySign: "€",
            currencyCode: "EUR",
            TDP: "230W"
        },
        {
            modelName: "RX 6600 XT",
            id: 28,
            manufacturer: "AMD",
            memory: "8 GB GDDR6",
            price: 379,
            currencySign: "€",
            currencyCode: "EUR",
            TDP: "160W"
        },
        {
            modelName: "RX 6500 XT",
            id: 29,
            manufacturer: "AMD",
            memory: "4 GB GDDR6",
            price: 199,
            currencySign: "€",
            currencyCode: "EUR",
            TDP: "90W"
        }
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

function generateGPUTableRows(graphicsCards, tableId){
    const table=document.getElementById(tableId);
    graphicsCards.forEach(gpu =>{
        const row=table.insertRow();
        row.insertCell().textContent = gpu.modelName;
        row.insertCell().textContent = gpu.memory;
        row.insertCell().textContent = gpu.TDP;
        row.insertCell().textContent = `${gpu.currencySign}${gpu.price}`;
    })
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

function showCompatibleMotherboards(selectedProcessor) {
    const selectedProcessorSocket = selectedProcessor.socket;
    const compatibleMotherboards = motherboards.filter(motherboard => motherboard.socket === selectedProcessorSocket);

    // Ovdje možete prikazati popis kompatibilnih matičnih ploča na stranici ili ih koristiti na drugi način.
    console.log(compatibleMotherboards);
}


document.addEventListener('DOMContentLoaded', function() {
       // Inicijaliziramo prazan niz koji će sadržavati sve procesore
       let allProcessors = [];

       // Iteriramo kroz svaku kategoriju procesora i dodajemo ih u niz allProcessors
       Object.values(processors).forEach(category => {
           allProcessors = allProcessors.concat(category);
       });
   
       // Sortiramo sve procesore po proizvođaču i nazivu
       allProcessors.sort((a, b) => {
           // Prvo sortiramo po proizvođaču
           const manufacturerComparison = a.manufacturer.localeCompare(b.manufacturer);
           if (manufacturerComparison !== 0) {
               return manufacturerComparison;
           }
           // Ako su proizvođači isti, sortiramo po nazivu procesora
           return a.procName.localeCompare(b.procName);
       });
   
       // Dobijamo referencu na select element za procesore
       const processorSelect = document.getElementById('processor');
   
       // Inicijaliziramo varijablu za trenutnog proizvođača
       let currentManufacturer = null;
   
       // Iteriramo kroz sve procesore i dodajemo ih u select element, s odgovarajućim optgrupama
       allProcessors.forEach(processor => {
           // Ako je trenutni proizvođač različit od proizvođača procesora, stvaramo novu optgrupu
           if (processor.manufacturer !== currentManufacturer) {
               const optgroup = document.createElement('optgroup');
               optgroup.label = processor.manufacturer;
               processorSelect.appendChild(optgroup);
               currentManufacturer = processor.manufacturer;
           }
   
           // Stvaramo novi option element i dodajemo ga u odgovarajuću optgrupu
           const option = document.createElement('option');
           option.value = processor.id;
           option.textContent = processor.procName;
           processorSelect.lastChild.appendChild(option);
       });
   
       processorSelect.addEventListener('change', function() {
        const selectedProcessorId = parseInt(this.value);
        const selectedProcessor = findProcessorById(selectedProcessorId);
        showCompatibleMotherboards(selectedProcessor);
    });

    // Generiranje tablica za visokoprocijenjene, srednje i niskoprocijenjene CPU-ove te graficke kartice
    generateTableRows(processors.highEndCPU, 'highEndCpuTable');
    generateTableRows(processors.midCPU, 'midCpuTable');
    generateTableRows(processors.lowEndCPU, 'lowEndCpuTable');
    generateGPUTableRows(grafickeKartice.NVIDIA, 'nvidiaGPU');
    generateGPUTableRows(grafickeKartice.AMD, 'amdGPU');
//spajanje redaka za cpu
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

