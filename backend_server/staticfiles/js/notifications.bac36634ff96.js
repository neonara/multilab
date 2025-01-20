// static/js/notifications.js
function loadNotifications() {
    console.log('Loading notifications...'); // Debug log
    
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]');
    if (!csrfToken) {
        console.error('CSRF token not found!');
        return;
    }

    fetch('http://localhost:8000/api/notifications/', {
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRFToken': csrfToken.value,
        }
    })
    .then(response => {
        console.log('Response status:', response.status); // Debug log
        return response.json();
    })
    .then(data => {
        console.log('Notifications data:', data); // Debug log
        const counter = document.getElementById('notif-counter');
        const dropdown = document.getElementById('notifications-dropdown');
        
        if (!counter || !dropdown) {
            console.error('Counter or dropdown elements not found!');
            return;
        }

        // Update counter
        counter.textContent = data.count > 0 ? data.count : '';
        
        // Update notifications
        dropdown.innerHTML = data.notifications.map(notif => `
            <a class="dropdown-item d-flex align-items-center" href="#" 
               onclick="markAsRead(${notif.id}); return false;">
                <div class="mr-3">
                    <div class="icon-circle bg-primary">
                        <i class="fas fa-comment text-white"></i>
                    </div>
                </div>
                <div>
                    <div class="small text-gray-500">${notif.created_at}</div>
                    <span>${notif.message}</span>
                </div>
            </a>
        `).join('') || '<div class="dropdown-item text-center">Pas de nouvelles notifications</div>';
    })
    .catch(error => {
        console.error('Error:', error); // Debug log
    });
}

// Call loadNotifications immediately and every 30 seconds
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing notifications...'); // Debug log
    loadNotifications();
    setInterval(loadNotifications, 30000);
});