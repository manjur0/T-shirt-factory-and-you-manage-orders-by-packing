function distributeShirtsEvenly(numShirts, numBags) {
  // Calculate the base number of shirts per bag
  const baseShirtsPerBag = Math.floor(numShirts / numBags);

  // Calculate the number of bags that will have an extra shirt
  const bagsWithExtraShirt = numShirts % numBags;

  // Initialize the array to store the number of shirts in each bag
  const shirtsInBags = new Array(numBags).fill(baseShirtsPerBag);

  // Distribute the extra shirts to the bags
  for (let i = 0; i < bagsWithExtraShirt; i++) {
    shirtsInBags[i]++;
  }

  return shirtsInBags;
}

// Test cases
console.log(distributeShirtsEvenly(100, 10)); // Example test case
console.log(distributeShirtsEvenly(85, 12)); // Another test case
