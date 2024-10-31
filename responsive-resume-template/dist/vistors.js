// GET API REQUEST

async function fetchVisitorCount() {
    try {
        const response = await fetch('');
        const data = await response.json();
        document.getElementById('visitor-count').innerText = data.count;
    } catch (error) {
        console.error('Error fetching visitor count:', error);
    }
}

fetchVisitorCount();
