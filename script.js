document.getElementById('kontak').addEventListener('click', function() {
    var konten = document.getElementById('contactbox');
    konten.style.display = 'block';

    var tutupButton = document.getElementById('tutup');
    tutupButton.addEventListener('click', function() {
        konten.style.display = 'none';
    });
});