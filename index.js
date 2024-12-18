function fetchDataWithCallback(callback) {
    const shouldFail = Math.random() < 0.5;
    if (shouldFail) {
        callback(); 
    } else {
        const data = { id: 1, name: "Sample Data" };
        callback(null, data); 
    }
}
function fetchDataWithCallback(callback) {
    const shouldFail = Math.random() < 0.5;
    if (shouldFail) {
        const error = new Error("Failed to fetch data"); 
        callback(error, null); 
    } else {
        const data = { id: 1, name: "Sample Data" };
        callback(null, data); 
    }
}
fetchDataWithCallback((error, data) => {
    if (error) {
        console.error("Error fetching data:", error.message);
    } else {
        console.log("Data fetched successfully:", data);
    }
});
