let varyingSize = {
    get size() {
      return Math.floor(Math.random() * 100);
    }
  };
  
  console.log(varyingSize.size);
  // → 73
  console.log(varyingSize.size);
  // → 49