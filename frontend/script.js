document.getElementById("userForm").onsubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, email})
    });

    if (response.ok) {
        console.log("Data submitted successfully");
    } else {
        console.error("Failed to submit data");
    }
};
