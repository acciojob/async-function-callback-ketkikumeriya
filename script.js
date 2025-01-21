const url = "https://jsonplaceholder.typicode.com/posts/1";

//your JS code here. If required.
async function fetchData() {
    try {
        // Fetch data from the API
        const response = await fetch(url);

        // Check if the response is okay
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();

        // Display the title in the div with ID 'output'
        const outputDiv = document.getElementById('output');
        outputDiv.textContent = data.title; // Assuming the API response contains a 'title' field
    } catch (error) {
        // Handle errors (e.g., network issues, invalid response)
        console.error('Error fetching data:', error);

        // Optionally display an error message to the user
        const outputDiv = document.getElementById('output');
        outputDiv.textContent = 'Failed to fetch data. Please try again.';
    }
}

// Add a click event listener to the button
const button = document.getElementById('btn');
button.addEventListener('click', fetchData);
