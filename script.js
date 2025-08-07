// Menangani login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah halaman me-reload setelah submit

    // Ambil data dari form
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Debugging: Cek apakah data form berhasil diambil
    console.log("Username:", usernameInput);
    console.log("Password:", passwordInput);

    // Cek apakah ada user yang cocok
    const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

    if (user) {
        // Debugging: Cek apakah user ditemukan
        console.log("Login berhasil!");

        // Jika ada user yang cocok, redirect ke home.html
        window.location.href = "home.html";
    } else {
        // Debugging: Cek jika login gagal
        console.log("Login gagal!");

        // Jika tidak ada yang cocok, beri tahu pengguna
        alert("Username atau Password salah!");
    }
});
