const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const card = document.getElementById('questionCard');
    const celebrate = document.getElementById('celebrateScreen');
    const song = document.getElementById('celebrateSong');

    // Move NO button away
    noBtn.addEventListener('mouseenter', () => {
      const parent = noBtn.parentElement;
      const maxX = parent.clientWidth - noBtn.offsetWidth;
      const maxY = parent.clientHeight - noBtn.offsetHeight;

      const x = Math.random() * maxX;
      const y = Math.random() * maxY;

      noBtn.style.left = `${x}px`;
      noBtn.style.top = `${y}px`;
    });

    // YES button click
    yesBtn.addEventListener('click', () => {
      card.style.display = 'none';
      celebrate.style.display = 'flex';
      song.play();
      createBalloons();
    });

    function createBalloons() {
      for (let i = 0; i < 25; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.background = `hsl(${Math.random() * 360}, 80%, 60%)`;
        balloon.style.animationDuration = 6 + Math.random() * 4 + 's';
        document.body.appendChild(balloon);
      }
    }