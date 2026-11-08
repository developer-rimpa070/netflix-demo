// Right arrow click করলে trending row scroll হবে
const trendingRow = document.getElementById('trendingRow');
const scrollBtn = document.getElementById('scrollRightBtn');

scrollBtn.addEventListener('click', function () {
    trendingRow.scrollBy({ left: 400, behavior: 'smooth' });
});

// একদম শেষে পৌঁছালে arrow লুকিয়ে দেবে (optional UX)
trendingRow.addEventListener('scroll', function () {
    const isAtEnd = trendingRow.scrollLeft + trendingRow.clientWidth >= trendingRow.scrollWidth - 5;
    scrollBtn.style.opacity = isAtEnd ? '0.3' : '1';
});