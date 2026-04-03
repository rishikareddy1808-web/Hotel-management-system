function bookRoom() {
    let name = document.getElementById("name").value;
    let room = document.getElementById("room").value;
    let date = document.getElementById("date").value;

    if (name === "" || room === "" || date === "") {
        alert("Please fill all details!");
        return;
    }

    let booking = { name, room, date };

    // Get old data
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    // Add new booking
    bookings.push(booking);

    // Save again
    localStorage.setItem("bookings", JSON.stringify(bookings));

    displayBookings();
}

// Show bookings
function displayBookings() {
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    let output = "";

    bookings.forEach((b, index) => {
        output += `
            <p><b>Name:</b> ${b.name}</p>
            <p><b>Room:</b> ${b.room}</p>
            <p><b>Date:</b> ${b.date}</p>
            <hr>
        `;
    });

    document.getElementById("output").innerHTML = output;
}

// Load data when page opens
window.onload = displayBookings;