
function fromEntries(entries) {
    const result = {};
  
    for (const [key, value] of entries) {
      result[key] = value;
    }
  
    return result;
  }
  
  const itemsInUSD = {
    item1: 10,
    item2: 25,
    item3: 50,
  };
  
  const exchangeRate = 80;
  
  const itemsInINR = fromEntries(
    Object.entries(itemsInUSD).map(([item, priceUSD]) => [
      item,
      priceUSD * exchangeRate,
    ])
  );
  
  console.log("Prices in INR:");
  console.log(itemsInINR);
  
