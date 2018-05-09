// config variables
const CP = 14;
const visions_sanguinus = 2;
const relic_spends = 3;
const opponent_strats = 8;
const execs = 40000;
const VERITAE = true;
const GRAND_STRATEGIST = true;
const KUROVS = true;
const STRATS = { 1: 1, 2: 1, 3: 1, 4: 2, 5: 2, 6: 3 };

const d6 = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const performStrat = spend => {
  let result = 0 - spend;
  if(GRAND_STRATEGIST){
    for (let i = 0; i < spend; i++) {
      if (d6() >= 5) {
        result++;
      }
    }
  }
  if (VERITAE) {
    if (d6() >= 5) {
      result++;
    }
  }
  return result;
};

const kurovs = opponent_strats => {
  let result = 0;
  for (let i = 0; i < opponent_strats; i++) {
    if (d6() >= 5) {
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

const playGame = () => {
  const results = [];
  for (let i = 0; i < execs; i++) {
    let spent = 0;
    let current = CP - visions_sanguinus - relic_spends;
    if(KUROVS){
      current += kurovs(opponent_strats);
    }
    while (current > 0) {
      const roll = STRATS[d6()];
      const strat = roll > current ? current : roll;
      current += performStrat(strat);
      spent += strat;
    }
    results.push(spent);
  }

  // console.log('Results:');
  // console.log(results);
  console.log('average:');
  console.log(average(results));
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

checkRandom();



