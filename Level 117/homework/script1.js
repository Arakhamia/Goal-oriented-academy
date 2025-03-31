function nbYear(p0, percent, aug, p) {
    let growthRate = 0.02;
    let newInhabitantsPerYear = 50;
  
    let years = 0;
    let currentPopulation = p0;
  
    while (currentPopulation < p) {
        currentPopulation += currentPopulation * growthRate + newInhabitantsPerYear;
        years++;
    }
  
    console.log(`The town will need ${years} years to reach or exceed a population of ${p} inhabitants.`);
  
  }