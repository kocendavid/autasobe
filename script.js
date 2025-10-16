function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('toggle', function() {
            if (this.open) {
                faqItems.forEach(otherItem => {
                    if (otherItem !== this && otherItem.open) {
                        otherItem.open = false;
                    }
                });
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initFAQ);

window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        console.log('Page restored from bfcache');
    }
});

window.addEventListener('pagehide', function(event) {
    if (event.persisted) {
        console.log('Page added to bfcache');
    }
});

