const storage = {
    tries: 0,
    started: false,
    number: 0
  };
  
  const write = (content) => {
    document.getElementById('result').innerHTML = content;
  }
  function startGame() {
    if (storage.started) return write("La partie est déjà commencée");
    storage.number = Math.floor(Math.random() * 100);
    storage.tries = document.getElementById('level')?.value || 7;
    storage.started = true;
  
    write("La partie vient de commencer");
  }
  function restartGame() {
    if (!storage.started) return alert("La partie n'a pas commencé");
    storage.started = false;
    storage.number = Math.floor(Math.random() * 100);
    storage.tries = document.getElementById('level')?.value || 7;
    storage.started = true;
    write('Partie recommencée avec succès')
  }
  function endGame() {
    storage.started = false;
  }
  function btnEndGame() {
    if (!storage.started) return alert("La partie n'a pas commencé");
    storage.started = false;
    storage.tries = 0;
    storage.number = 0;
    write('Partie arrêtée avec succès')
  }
  function win() {
    write(`Vous avez gagné avec ${storage.tries}  essaies restants !`);
    endGame()
  }
  function loose() {
    write(`Vous avez perdu, mon nombre était ${storage.number}`);
    endGame()
  }
  function guess() {
    if (!storage.started) return alert("La partie n'a pas commencé");
  
    const input = parseInt(document.getElementById('guesshere')?.value);
    if (!input || isNaN(input)) return write("Nombre invalide");
  
    if (input < 0 || input > 100) return write("Veuillez choisir un nombre entre 1 et 100");
    if (input < storage.number) {
      storage.tries--
      write(`Mon nombre est plus grand (${storage.tries})`);
    } else if (input > storage.number) {
      storage.tries--;
      write(`Mon nombre est plus petit  (${storage.tries})`);
    } else {
        win()
    }
    if (storage.tries === 0) {
        loose()
    }
  }
