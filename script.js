document.getElementById('loadGiftsButton').addEventListener('click', function() {
    let giftsContainer = document.getElementById('gifts');
    giftsContainer.innerHTML = '';  // Czyszczenie kontenera

    // Pętla do generowania prezentów
    for (let i = 1; i <= 12; i++) {
        let gift = document.createElement('div');
        gift.classList.add('gift');
        gift.innerHTML = `🎁 ${i}`;
        
        // Animacja: pokazanie prezentu
        setTimeout(function() {
            gift.classList.add('show');
        }, 200 * i); // Prezenty pokazują się stopniowo z opóźnieniem
        
        // Dodanie interakcji: otwarcie prezentu po kliknięciu
        gift.addEventListener('click', function() {
            // Jeśli prezent jest już "otwarty", wyświetl komunikat
            if (!gift.classList.contains('opened')) {
                gift.classList.add('opened');
                gift.innerHTML = `Otwarto 🎁 ${i}! `;
            } else {
                gift.classList.remove('opened');
                gift.innerHTML = `🎁 ${i}`;
            }
        });

        giftsContainer.appendChild(gift);
    }
});