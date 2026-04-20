async function fetchWeatherAlerts() {
const alertsContainer = document.getElementById('alerts-container');
const errorContainer = document.getElementById('error-container');

//Clear previous results
    alertsContainer.innerHTML = '';
    errorContainer.innerHTML = '';

    const stateInput = document.getElementById('stateInput');
    const state = stateInput? stateInput.value.toUpperCase() : '';



if (state.length != 2) {
    errorContainer.innerHTML = 'Enter valid state abbreviation (e.g., NY, CA)';
    return;
}

const url = `https://api.weather.gov/alerts?area=${state}`;

try {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    if (data.features.length === 0) {
        alertsContainer.innerHTML = 'Alerts unavailable for this state.';
        return;
    }
    displayAlerts(data, alertsContainer);

} catch (error) {
        errorContainer.innerHTML = `There was an error fetching alerts.`;
        console.error( "Fetch Error:", error);
    }
}
   function displayAlerts(data, container) {
    // Implementation for displaying alerts
    data.features.forEach(alert => {
        const div = document.createElement('div');
        div.classList.add('alert-item')

        const title = alert.properties.headline || 'Weather Alert';
        const description = alert.properties.description || 'No description available.';

        div.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
        container.appendChild(div);
    });
   }



document.getElementById('fetch-alerts').addEventListener('click', fetchWeatherAlerts);