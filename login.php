<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Your database connection details
    $servername = "localhost";
    $username = "username";
    $password_db = "password";
    $dbname = "your_database";

    // Create connection
    $conn = new mysqli($servername, $username, $password_db, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Query the database to retrieve user information based on email
    $sql = "SELECT id, email, password_hash FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        // User found, verify password
        $row = $result->fetch_assoc();
        $hashed_password = $row['password_hash'];
        if (password_verify($password, $hashed_password)) {
            // Password is correct, redirect to dashboard
            header("Location: dashboard.php");
            exit();
        } else {
            // Password is incorrect, display error message
            $error_message = "Invalid email or password.";
        }
    } else {
        // User not found, display error message
        $error_message = "Invalid email or password.";
    }

    // Close database connection
    $stmt->close();
    $conn->close();
}
?>
