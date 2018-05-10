// config variables
const CP = 14;
const visions_sanguinus = 2;
const relic_spends = 2;
const opponent_strats = 8;
const execs = 40000;
const VERITAE = true;
const GRAND_STRATEGIST = true;
const KUROVS = true;
const STRATS = { 1: 1, 2: 1, 3: 1, 4: 2, 5: 2, 6: 3 };

const d6 = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const performStrat = (spend, hits) => {
  let result = 0 - spend;
  if(GRAND_STRATEGIST){
    for (let i = 0; i < spend; i++) {
      if (d6() >= 5) {
          hits.GRAND_STRATEGIST++;
        result++;
      }
    }
  }
  if (VERITAE) {
    if (d6() >= 5) {
        hits.VERITAE++;
      result++;
    }
  }
  return result;
};

const kurovs = (opponent_strats, hits) => {
   let result = 0;
  for (let i = 0; i < opponent_strats; i++) {
    if (d6() >= 5) {
    hits.KUROVS++;
      result++;
    }
  }
  return result;
};

const average = ary => {
  let sum = 0;
  ary.forEach(res => {
    sum += res;
  })
  return sum / ary.length;
}

const averageHits = ary => {
    let VERITAE_HITS  = 0;
    let KUROVS_HITS = 0;
    let GRAND_STRATEGIST_HITS  = 0;
  ary.forEach(res => {
    VERITAE_HITS += res.VERITAE
    KUROVS_HITS += res.KUROVS
    GRAND_STRATEGIST_HITS += res.GRAND_STRATEGIST
  })
  const len = ary.length
  return {
      VERITAE: VERITAE_HITS/len,
      KUROVS: KUROVS_HITS/len,
      GRAND_STRATEGIST: GRAND_STRATEGIST_HITS/len,
  };
}

const playGame = () => {
  const results = [];
  const hitResults = [];
  for (let i = 0; i < execs; i++) {
    let spent = 0;
    let current = CP - visions_sanguinus - relic_spends;
    const hits = {
        VERITAE: 0,
        KUROVS: 0,
        GRAND_STRATEGIST: 0,
    }
    if(KUROVS){
      current += kurovs(opponent_strats, hits);
    }

    while (current > 0) {
      const roll = STRATS[d6()];
      const strat = roll > current ? current : roll;
      current += performStrat(strat, hits);
      spent += strat;
    }
    results.push(spent);
    hitResults.push(hits);
  }

  console.log('average results:');
  console.log(average(results));
  console.log('average hits:');
  console.log(averageHits(hitResults));
};

playGame();

const checkRandom = () => {
  const results = [];
  for (let i = 0; i < execs; i++) {
    results.push(d6());
  }

  // console.log('Results:');
  // console.log(results);
  console.log('d6 avg:');
  console.log(average(results));
}

// checkRandom();
