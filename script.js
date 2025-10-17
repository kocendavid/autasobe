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

function initWaitlistForms() {
    const apiKey = document.body.getAttribute('data-waitlo-key');
    const forms = document.querySelectorAll('.waitlist-form');
    if (!forms.length) return;

    forms.forEach(form => {
        const input = form.querySelector('.waitlist-input');
        const button = form.querySelector('.waitlist-button');
        const message = form.parentElement.querySelector('.waitlist-message');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = (input?.value || '').trim();
            if (!email) {
                if (message) message.textContent = 'Zadej e‑mail.';
                return;
            }
            if (!apiKey || apiKey === 'YOUR_API_KEY') {
                if (message) message.textContent = 'Chybí API klíč.';
                return;
            }

            button.disabled = true;
            if (message) message.textContent = 'Odesílám…';

            try {
                const res = await fetch(`https://api.waitlo.com/api/waitlist/subscribe?api_key=${encodeURIComponent(apiKey)}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email })
                });

                if (res.ok) {
                    if (message) message.textContent = 'Děkujeme! Jsi na čekačce.';
                    form.reset();
                } else {
                    const text = await res.text().catch(() => '');
                    if (message) message.textContent = text || 'Odeslání se nepodařilo. Zkus to prosím znovu.';
                }
            } catch (err) {
                if (message) message.textContent = 'Chyba sítě. Zkus to prosím znovu.';
            } finally {
                button.disabled = false;
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initWaitlistForms);

