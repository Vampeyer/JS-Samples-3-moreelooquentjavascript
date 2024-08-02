let bombTimer = setTimeout(() => {
    console.log("BOOM!");
  }, 500);
  
  if (Math.random() < 0.5) { // 50% chance
    console.log("Defused.");
    clearTimeout(bombTimer);
  }