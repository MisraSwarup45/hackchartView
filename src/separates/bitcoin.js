let xValues = ["Bitcoin", "Ethereum", "BNB", "Tether", "Solana"];
let yValues = [19826.72, 1550.94, 276.98, 1.001, 31.09];
let barColors = ["#f2a900", "#3c3c3d", "#F3BA2F", "#26a17b", "#00FFA3"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Crypto"
    }
  }
});