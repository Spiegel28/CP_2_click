let cheese = 0;
let clicks = 0;

let clickUpgrades = [
    {
      name: 'knife',
      price: 1,
      quantity: 0,
      multiplier: 2
    },

    {
        
        name: 'drill',
        price: 150,
        quantity: 0,
        multiplier: 10
    }
  ];
  
  let automaticUpgrades = [
    {
      name: 'wormhole',
      price: 600,
      quantity:0,
      multiplier: 20
    },

    {
      name: 'tomcruise',
      price: 1200,
      quantity: 0,
      multiplier: 50
    }
  ];

  function buyKnife() {
    const knife = clickUpgrades[0];
    if (cheese >= knife.price) {
      cheese -= knife.price;
      knife.quantity++;
      console.log("Purchased");
      update();
    }
      else {
        window.alert("NO CHEESE");
      }
    }
// const drill = clickUpgrades.find(drill => drill.name === 'drill')
function buyDrill() {
    const drill = clickUpgrades.find(drill => drill.name === 'drill')
    if (cheese >= drill.price) {
      cheese -= drill.price;
      drill.quantity++;
      console.log("Purchased");
      update();
    }
      else {
        window.alert("NO CHEESE");
      }
    }
function buyWormhole() {
    const wormhole = automaticUpgrades.find(wormhole => wormhole.name === 'wormhole')
    if (cheese >= wormhole.price) {
      cheese -= wormhole.price;
      wormhole.quantity++;
      console.log("Purchased");
      update();
    }
      else {
        window.alert("NO CHEESE");
      }
    }
function buyTomcruise() {
    const tomcruise = automaticUpgrades.find(tomcruise => tomcruise.name === 'tomcruise')
    if (cheese >= tomcruise.price) {
      cheese -= tomcruise.price;
      tomcruise.quantity++;
      console.log("Purchased");
      update();
    }
      else {
        window.alert("NO CHEESE");
      }
    }
  
function calculateTotalMultiplier() {
    const totalClickMultiplier = clickUpgrades.reduce((total, upgrade) => total + upgrade.quantity * upgrade.multiplier, 0);
    const totalAutoMultiplier = automaticUpgrades.reduce((total, upgrade) => total + upgrade.quantity * upgrade.multiplier, 0);
    return totalClickMultiplier + totalAutoMultiplier;
}
function applyClickUpgrades() {
    const knife = clickUpgrades.find(knife => knife.name === 'knife')
    cheese += knife.quantity * knife.multiplier;
    update();

}

function applyDrillUpgrade() {
    const drill = clickUpgrades.find(drill => drill.name === 'drill')
    cheese += drill.quantity * drill.multiplier
    update()
}

function collectAutoUpgrades() {
        const automaticUpgradesToCollect = automaticUpgrades.filter(upgrade => upgrade.quantity > 0);
      
        
        const totalAutoResources = automaticUpgradesToCollect.reduce((total, upgrade) => {
          return total + (upgrade.quantity * upgrade.multiplier);
        }, 0);
      
        
        cheese += totalAutoResources;
        update();
      }


function mine() {
    const totalMultiplier = calculateTotalMultiplier();
    cheese += totalMultiplier;
    cheese++ ;
    clickCount()
    applyClickUpgrades()
    applyDrillUpgrade()
    update()
} 
function clickCount() {
clicks++
// ANCHOR figure out why it starts at 2 clicks
}

function updateUpgradePrice(upgrade) {
  upgrade.basePrice += upgrade.basePrice * 0.2; // 20% increase
}

function update() {
    const cheeseCountElement = document.getElementById('cheeseCount');
    cheeseCountElement.textContent = `${cheese} 🧀`;

    const clickCountElement = document.getElementById('clickCount');
    clickCountElement.textContent = `${clicks} 👆🏼`;
    // const knifeCountElement = document.getElementById('knifeCount');
    // knifeCountElement.textContent = `${clickUpgrades[0].quantity} Knife`;
    const knifeCountElement = document.getElementById('knifeCount');
    knifeCountElement.textContent = `${clickUpgrades.find(knife => knife.name === 'knife').quantity} knife`;

    const drillCountElement = document.getElementById('drillCount');
    drillCountElement.textContent = `${clickUpgrades.find(drill => drill.name === 'drill').quantity} drill`;

    const wormholeCountElement = document.getElementById('wormholeCount');
    wormholeCountElement.textContent = `${automaticUpgrades.find(wormhole => wormhole.name === 'wormhole').quantity} wormhole`;

    const tomcruiseCountElement = document.getElementById('tomcruiseCount');
    tomcruiseCountElement.textContent = `${automaticUpgrades.find(tomcruise => tomcruise.name === 'tomcruise').quantity} tomcruise`;

  }
  
setInterval(collectAutoUpgrades, 3000);
clickCount()
mine()