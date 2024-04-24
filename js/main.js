function showHideOptions() {
    var processorType = document.getElementById("processor-type").value;
    var gpuOptions = document.getElementById("gpu-options");

    if (processorType === "Intel") {
        gpuOptions.style.display = "block"; // Prikazi opcije za GPU
    } else {
        gpuOptions.style.display = "none"; // Sakrij opcije za GPU
    }
}