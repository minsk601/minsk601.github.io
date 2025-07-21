
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.sidebar-toggle');

    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('is-hidden');
    });
});
