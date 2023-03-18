function SchoolsSportsDay(callbackFnc) {
  let scores = {red: 0, yellow: 0, blue: 0, green: 0};

  function OpeningCeremony() {
    console.log("Let the games begin!");
    setTimeout(() => Race100M(scores, callbackFnc), 1000);
  }

  function Race100M(scores, callbackFnc) {
    console.log("Scores before Race100M:", scores);

    const minTime = 10;
    const maxTime = 15;
    const raceTimes = {
      red: Math.floor(Math.random() * (maxTime - minTime + 1) + minTime),
      yellow: Math.floor(Math.random() * (maxTime - minTime + 1) + minTime),
      blue: Math.floor(Math.random() * (maxTime - minTime + 1) + minTime),
      green: Math.floor(Math.random() * (maxTime - minTime + 1) + minTime),
    };

    console.log("Race Times:", raceTimes);

    const sortedColors = Object.keys(raceTimes).sort((a, b) => raceTimes[a] - raceTimes[b]);

    scores[sortedColors[0]] += 50;
    scores[sortedColors[1]] += 25;

    console.log("Scores after Race100M:", scores);

    callbackFnc(scores, LongJump);
  }

  function LongJump(scores, callbackFnc) {
    console.log("Scores before LongJump:", scores);

    const jumpColor = ['red', 'yellow', 'green', 'blue'][Math.floor(Math.random() * 4)];

    console.log(`${jumpColor} wins the Long Jump!`);

    scores[jumpColor] += 150;

    console.log("Scores after LongJump:", scores);

    callbackFnc(scores, HighJump);
  }

  function HighJump(scores, callbackFnc) {
    console.log("Scores before HighJump:", scores);

    const inputColor = prompt("What color secured the highest jump?");

    if (inputColor === null || inputColor === "" || !Object.keys(scores).includes(inputColor)) {
      console.log("Event was cancelled");
      callbackFnc(scores, AwardCeremony);
      return;
    }

    scores[inputColor] += 100;

    console.log(`${inputColor} wins the High Jump!`);

    console.log("Scores after HighJump:", scores);

    callbackFnc(scores, AwardCeremony);
  }

  function AwardCeremony(scores) {
    console.log("Final Scores:");

    const sortedColors = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);

    for (let i = 0; i < sortedColors.length; i++) {
      console.log(`${sortedColors[i]} came ${i+1} with ${scores[sortedColors[i]]} points.`);
    }
  }

  OpeningCeremony();
}

SchoolsSportsDay(function (scores, nextCallbackFnc) {
  console.log("==============================");
  nextCallbackFnc(scores, function (scores, nextCallbackFnc) {
    console.log("==============================");
    nextCallbackFnc(scores, function (scores, nextCallbackFnc) {
      console.log("==============================");
      nextCallbackFnc(scores, function (scores, nextCallbackFnc) {
        console.log("==============================");
        nextCallbackFnc(scores);
      });
    });
  });
});
