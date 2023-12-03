// index.js

async function generateSample() {
    // Generate a random latent vector (adjust as needed)
    const latentVector = Array.from({ length: 100 }, () => Math.random());

    try {
        // Send a POST request to the Flask backend
        const response = await fetch('/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ latent_vector: latentVector }),
        });

        // Parse the response JSON
        const result = await response.json();

        // Display or process the generated sample as needed
        console.log('Generated Sample:', result);
    } catch (error) {
        console.error('Error generating sample:', error);
    }
}
