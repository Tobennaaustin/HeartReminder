// Request notification permission on page load
document.addEventListener('DOMContentLoaded', () => {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                startNotifications();
            } else {
                alert('Please allow notifications to receive love reminders.');
            }
        });
    } else {
        startNotifications();
    }
});

// Function to start sending notifications every 5 minutes
function startNotifications() {
    // Immediately send the first notification
    sendLoveNotification();

    // Set interval to send notification every 5 minutes
    setInterval(sendLoveNotification, 300000); // 300000 ms = 5 minutes
}

// Function to send a notification
function sendLoveNotification() {
    if (Notification.permission === 'granted') {
        new Notification('Love Reminder', {
            body: 'I love you! ❤️',
            icon: 'https://via.placeholder.com/100x100.png?text=❤️', // Optional: Add an icon URL here
        });
    }
}
