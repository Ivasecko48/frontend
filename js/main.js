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
            socket: "LGA1700"
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
    const allProcessors = [...processors.highEndCPU, ...processors.midCPU, ...processors.lowEndCPU];

    const motherboards = [
        {
            name: "ASUS ROG Strix Z690-E Gaming",
            id:101,
            socket: "LGA1700",
            price: 389.99,
            currencySign: "€",
            currencyCode: "EUR"
        },
        {
            name: "GIGABYTE Z690 AORUS Master",
            id:102,
            socket: "LGA1700",
            price: 359.99,
            currencySign: "€",
            currencyCode: "EUR"
        },
        {
            name: "MSI MEG Z690 GODLIKE",
            id:103,
            socket: "LGA1700",
            price: 899.99,
            currencySign: "€",
            currencyCode: "EUR"
        },
        {
            name: "ASRock Z690 Taichi",
            id:104,
            socket: "LGA1700",
            price: 329.99,
            currencySign: "€",
            currencyCode: "EUR"
        },
        {
            name: "ASUS ROG Strix B550-F Gaming",
            id:105,
            socket: "AM4",
            price: 159.99,
            currencySign: "€",
            currencyCode: "EUR"
        },
        {
            name: "MSI MAG B550 TOMAHAWK",
            id:106,
            socket: "AM4",
            price: 179.99,
            currencySign: "€",
            currencyCode: "EUR"
        },
        {
            name: "GIGABYTE B550 AORUS PRO",
            id:107,
            socket: "AM4",
            price: 189.99,
            currencySign: "€",
            currencyCode: "EUR"
        }
    ];
const grafickeKartice = {
    NVIDIA: [
        {
            modelName: "RTX 4090",
            id: 19,
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
            id: 20,
            manufacturer: "NVIDIA",
            memory: "12 GB GDDR6",
            price: 499,
            currencySign: "€",
            currencyCode: "EUR",
            TDP: "180W"
        },
        {
            modelName: "RTX 3080",
            id: 21,
            manufacturer: "NVIDIA",
            memory: "10 GB GDDR6X",
            price: 569,
            currencySign: "€",
            currencyCode: "EUR",
            TDP: "320W"
        },
        {
            modelName: "RTX 3070",
            id: 22,
            manufacturer: "NVIDIA",
            memory: "8 GB GDDR6",
            price: 499,
            currencySign: "€",
            currencyCode: "EUR",
            TDP: "220W"
        },
        {
            modelName: "RTX 3060 Ti",
            id: 23,
            manufacturer: "NVIDIA",
            memory: "8 GB GDDR6",
            price: 399,
            currencySign: "€",
            currencyCode: "EUR",
            TDP: "200W"
        },
        {
            modelName: "RTX 3050",
            id: 24,
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
            id: 25,
            manufacturer: "AMD",
            memory: "16 GB GDDR6",
            price: 499,
            currencySign: "€",
            currencyCode: "EUR",
            TDP: "400W"
        },
        {
            modelName: "RX 7600",
            id: 26,
            manufacturer: "AMD",
            memory: "12 GB GDDR6",
            price: 349,
            currencySign: "€",
            currencyCode: "EUR",
            TDP: "250W"
        },
        {
            modelName: "RX 6900 XT",
            id: 27,
            manufacturer: "AMD",
            memory: "16 GB GDDR6",
            price: 699,
            currencySign: "€",
            currencyCode: "EUR",
            TDP: "300W"
        },
        {
            modelName: "RX 6800 XT",
            id: 28,
            manufacturer: "AMD",
            memory: "16 GB GDDR6",
            price: 649,
            currencySign: "€",
            currencyCode: "EUR",
            TDP: "300W"
        },
        {
            modelName: "RX 6700 XT",
            id: 29,
            manufacturer: "AMD",
            memory: "12 GB GDDR6",
            price: 479,
            currencySign: "€",
            currencyCode: "EUR",
            TDP: "230W"
        },
        {
            modelName: "RX 6600 XT",
            id: 30,
            manufacturer: "AMD",
            memory: "8 GB GDDR6",
            price: 379,
            currencySign: "€",
            currencyCode: "EUR",
            TDP: "160W"
        },
        {
            modelName: "RX 6500 XT",
            id: 31,
            manufacturer: "AMD",
            memory: "4 GB GDDR6",
            price: 199,
            currencySign: "€",
            currencyCode: "EUR",
            TDP: "90W"
        }
    ]
};
const allGPUs = [...grafickeKartice.NVIDIA, ...grafickeKartice.AMD];

const ramMemory = [
    {
        name: "Corsair Vengeance LPX 16GB (2x8GB) DDR4-3200",
        id:30,
        price: 89.99,
        currencySign: "€",
        currencyCode: "EUR",
        capacity: "16GB (2x8GB)",
        speed: "DDR4-3200"
    },
    {
        name: "G.Skill Ripjaws V 32GB (2x16GB) DDR4-3600",
        id:31,
        price: 149.99,
        currencySign: "€",
        currencyCode: "EUR",
        capacity: "32GB (2x16GB)",
        speed: "DDR4-3600"
    },
    {
        name: "Crucial Ballistix 32GB (2x16GB) DDR4-3200",
        id:32,
        price: 139.99,
        currencySign: "€",
        currencyCode: "EUR",
        capacity: "32GB (2x16GB)",
        speed: "DDR4-3200"
    },
    {
        name: "Team T-FORCE DARK Z 16GB (2x8GB) DDR4-3600",
        id:33,
        price: 99.99,
        currencySign: "€",
        currencyCode: "EUR",
        capacity: "16GB (2x8GB)",
        speed: "DDR4-3600"
    },
    {
        name: "Kingston HyperX Fury RGB 64GB (2x32GB) DDR4-3200",
        id:34,
        price: 299.99,
        currencySign: "€",
        currencyCode: "EUR",
        capacity: "64GB (2x32GB)",
        speed: "DDR4-3200"
    },
    {
        name: "Corsair Dominator Platinum RGB 32GB (2x16GB) DDR4-3600",
        id:35,
        price: 249.99,
        currencySign: "€",
        currencyCode: "EUR",
        capacity: "32GB (2x16GB)",
        speed: "DDR4-3600"
    },
    {
        name: "Corsair Vengeance LPX 8GB (1x8GB) DDR4-2666",
        id:36,
        price: 49.99,
        currencySign: "€",
        currencyCode: "EUR",
        capacity: "8GB (1x8GB)",
        speed: "DDR4-2666"
    },
    {
        name: "G.Skill Aegis 8GB (2x4GB) DDR4-3000",
        id:37,
        price: 39.99,
        currencySign: "€",
        currencyCode: "EUR",
        capacity: "8GB (2x4GB)",
        speed: "DDR4-3000"
    },
    {
        name: "Crucial Ballistix 16GB (2x8GB) DDR4-2400",
        id:38,
        price: 79.99,
        currencySign: "€",
        currencyCode: "EUR",
        capacity: "16GB (2x8GB)",
        speed: "DDR4-2400"
    }
];
const powerSupplies = [
    {
        name: "Corsair RM750x",
        id:39,
        price: 129.99,
        currencySign: "€",
        currencyCode: "EUR",
        wattage: 750
    },
    {
        name: "Seasonic Focus GX-650",
        id:40,
        price: 119.99,
        currencySign: "€",
        currencyCode: "EUR",
        wattage: 650
    },
    {
        name: "EVGA SuperNOVA 750 G5",
        id:41,
        price: 139.99,
        currencySign: "€",
        currencyCode: "EUR",
        wattage: 750
    },
    {
        name: "be quiet! Straight Power 11 650W",
        id:42,
        price: 124.99,
        currencySign: "€",
        currencyCode: "EUR",
        wattage: 650
    },
    {
        name: "Thermaltake Toughpower GF1 750W",
        id:43,
        price: 149.99,
        currencySign: "€",
        currencyCode: "EUR",
        wattage: 750
    },
    {
        name: "Corsair RM550x",
        id:44,
        price: 109.99,
        currencySign: "€",
        currencyCode: "EUR",
        wattage: 550
    },
    {
        name: "EVGA SuperNOVA 850 G5",
        id:45,
        price: 159.99,
        currencySign: "€",
        currencyCode: "EUR",
        wattage: 850
    }
];

const cases = [
    {
        name: "NZXT H510",
        id:46,
        price: 79.99,
        currencySign: "€",
        currencyCode: "EUR"
    },
    {
        name: "Corsair iCUE 220T RGB",
        id:47,
        price: 89.99,
        currencySign: "€",
        currencyCode: "EUR"
    },
    {
        name: "Fractal Design Meshify C",
        id:48,
        price: 99.99,
        currencySign: "€",
        currencyCode: "EUR"
    },
    {
        name: "Phanteks Eclipse P400A",
        id:49,
        price: 89.99,
        currencySign: "€",
        currencyCode: "EUR"
    },
    {
        name: "Cooler Master MasterBox Q300L",
        id:50,
        price: 49.99,
        currencySign: "€",
        currencyCode: "EUR"
    }
];

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

// function showCompatibleMotherboards(selectedProcessor) {
//     const selectedProcessorSocket = selectedProcessor.socket;
//     const compatibleMotherboards = motherboards.filter(motherboards => motherboards.socket === selectedProcessorSocket);

//     // Ovdje možete prikazati popis kompatibilnih matičnih ploča na stranici ili ih koristiti na drugi način.
//     console.log(compatibleMotherboards);
// }
function findProcessorById(id) {
    for (let processor of allProcessors) {
      if (processor.id === id) {
        return processor;
      }
    }
    return null;
  }
  function calculateTotalPrice() {
    // Dohvaćamo odabrane vrijednosti za svaki odabir
    const selectedProcessorId = parseInt(document.getElementById('processor').value);
    const selectedGpuId = parseInt(document.getElementById('gpu').value);
    const selectedMotherboardId = parseInt(document.getElementById('motherboard').value);
    const selectedRamId = parseInt(document.getElementById('ram').value);
    const selectedPsuId = parseInt(document.getElementById('psu').value);
    const selectedCaseId = parseInt(document.getElementById('case').value);

    // Pronalazimo odabrane opcije iz svakog odabira
    const selectedProcessor = findProcessorById(selectedProcessorId);
    const selectedGpu = allGPUs.find(gpu => gpu.id === selectedGpuId);
    const selectedMotherboard = motherboards.find(motherboard => motherboard.id === selectedMotherboardId);
    const selectedRam = ramMemory.find(ram => ram.id === selectedRamId);
    const selectedPsu = powerSupplies.find(psu => psu.id === selectedPsuId);
    const selectedCase = cases.find(PCcase => PCcase.id === selectedCaseId);

    // Sumiramo cijene odabranih opcija
    const totalPrice = selectedProcessor.price + selectedGpu.price + selectedMotherboard.price +
                       selectedRam.price + selectedPsu.price + selectedCase.price;

    return totalPrice;
}

document.addEventListener('DOMContentLoaded', function() {
   
      
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

        allGPUs.sort((c,d)=>{
          manufacturerComparison = c.manufacturer.localeCompare(d.manufacturer);
             if (manufacturerComparison !== 0) {
                 return manufacturerComparison;
             }
             // Ako su proizvođači isti, sortiramo po nazivu 
             return c.modelName.localeCompare(d.modelName);
         });
      const gpuSelect = document.getElementById('gpu');
      let currentManu= null;
      allGPUs.forEach(gpu => {
          if (gpu.manufacturer !== currentManu) {
              const optgroup = document.createElement('optgroup');
              optgroup.label = gpu.manufacturer;
              gpuSelect.appendChild(optgroup);
              currentManu = gpu.manufacturer;
          }
          const option = document.createElement('option');
                 option.value = gpu.id;
                 option.textContent = gpu.modelName;
                 gpuSelect.lastChild.appendChild(option);
        
      });
      const MOBOSelect = document.getElementById('motherboard');
      let currentSocket= null;
      motherboards.forEach(motherboard => {
          if (motherboard.socket !== currentSocket) {
              const optgroup = document.createElement('optgroup');
              optgroup.label = motherboard.socket;
              MOBOSelect.appendChild(optgroup);
              currentSocket = motherboard.socket;
          }
          const option = document.createElement('option');
                 option.value = motherboard.id;
                 option.textContent = motherboard.name;
                 MOBOSelect.lastChild.appendChild(option);
      });
      const memorySelect = document.getElementById('ram');
      ramMemory.forEach(ram => {
          const option = document.createElement('option');
                 option.value = ram.id;
                 option.textContent = ram.name;
                 memorySelect.appendChild(option);
      });
      const psuSelect = document.getElementById('psu');
      powerSupplies.forEach(psu => {
          const option = document.createElement('option');
                 option.value = psu.id;
                 option.textContent = psu.name;
                 psuSelect.appendChild(option);
      });
      const caseSelect = document.getElementById('case');
      cases.forEach(PCcase => {
          const option = document.createElement('option');
                 option.value = PCcase.id;
                 option.textContent = PCcase.name;
                 caseSelect.appendChild(option);
      });
    
      processorSelect.addEventListener('change', function() {
       const selectedProcessorId = parseInt(this.value);
        console.log("Selected processor ID:", selectedProcessorId); // Check the value of selectedProcessorId
        const selectedProcessor = findProcessorById(selectedProcessorId);
        console.log("Selected processor:", selectedProcessor); // Check the value of selectedProcessor
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


//mobile menu
document.addEventListener('DOMContentLoaded',()=>{
    const hamburgerButton= document.querySelector('.hamburger-button');
    const mobileMenu=document.querySelector('.mobile-menu');

hamburgerButton.addEventListener('click',()=>
mobileMenu.classList.toggle('active'));
})

});