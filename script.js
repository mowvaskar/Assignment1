// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Add smooth scrolling behavior to links in the left sidebar
    const links = document.querySelectorAll(".left-bar a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        });
    });

    // Function to update the room count and price
    const updateRoomCount = (roomType, increment) => {
        const roomCountText = document.getElementById(`${roomType}-room-count-text`);
        const priceElement = document.getElementById(`${roomType}-price`);
        const thankYouText = document.querySelector(`#${roomType}-thank-you span`);

        let roomCount = parseInt(roomCountText.textContent.split(' ')[0]);
        let roomPrice = roomType === 'basic' ? 99 : 199;

        roomCount += increment;
        if (roomCount < 1) roomCount = 1;

        roomCountText.textContent = `${roomCount} room${roomCount > 1 ? 's' : ''}`;
        priceElement.textContent = `$${roomCount * roomPrice}`;
        thankYouText.textContent = `${roomCount} ${roomCount > 1 ? 'rooms' : 'room'}.`;
    };

    // Event listeners for plus buttons to increase room count
    document.querySelectorAll('.plus').forEach(button => {
        button.addEventListener('click', () => {
            const roomType = button.getAttribute('data-room');
            updateRoomCount(roomType, 1);
        });
    });

    // Event listeners for minus buttons to decrease room count
    document.querySelectorAll('.minus').forEach(button => {
        button.addEventListener('click', () => {
            const roomType = button.getAttribute('data-room');
            updateRoomCount(roomType, -1);
        });
    });

    // Event listener for signup button of basic room
    document.getElementById('signup1').addEventListener('click', () => {
         
        // Show the basic thank you message
        const thankYouMessage = document.getElementById('basic-thank-you');
        if (thankYouMessage) {
            thankYouMessage.style.display = 'block';
            
            // Update the room count text
            const roomCountElement = document.getElementById('basic-room-count-text');
            const roomCount = roomCountElement ? parseInt(roomCountElement.textContent) : 1; // Default to 1 if element not found
            thankYouMessage.querySelector('span').textContent = `${roomCount} ${roomCount > 1 ? 'rooms' : 'room'}.`;
        }
    });
    
    // Event listener for signup button of pro room
    document.getElementById('signup2').addEventListener('click', () => {
    
        // Show the pro thank you message
        const thankYouMessage2 = document.getElementById('pro-thank-you');
        if (thankYouMessage2) {
            thankYouMessage2.style.display = 'block';
            
            // Update the room count text
            const roomCountElement = document.getElementById('pro-room-count-text');
            const roomCount = roomCountElement ? parseInt(roomCountElement.textContent) : 1; // Default to 1 if element not found
            thankYouMessage2.querySelector('span').textContent = `${roomCount} ${roomCount > 1 ? 'rooms' : 'room'}.`;
        }
    });
    
     // Form validation for contact form
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            alert("Please fill in all fields.");
        }
    });
});