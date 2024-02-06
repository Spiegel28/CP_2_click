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
      knife.price++;
    //   TODO increase price of upgrade
      console.log("Purchased");
      update();
    }
      else {
        window.alert("NO CHEESE");
      }
    }

function buyDrill() {
    const drill = clickUpgrades.find(drill => drill.name === 'drill')
    if (cheese >= drill.price) {
      cheese -= drill.price;
      drill.quantity++;
      drill.price*=2;
    //   TODO increase price of upgrade

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
      wormhole.price*=1.5;
    //   TODO increase price of upgrade

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
      tomcruise.price*=1.5;
    //   TODO increase price of upgrade

      console.log("Purchased");
      update();
    }
      else {
        window.alert("NO CHEESE");
      }
    }
// FIXME maybe don't call this when mining
  
function calculateTotalMultiplier() {
    const totalClickMultiplier = clickUpgrades.reduce((total, upgrade) => total + upgrade.quantity * upgrade.multiplier, 0);
    console.log('click',totalClickMultiplier);
    // FIXME move auto logic  to its own function
}

function calculateAutoMultiplier() {
    const totalAutoMultiplier = automaticUpgrades.reduce((total, upgrade) => total + upgrade.quantity * upgrade.multiplier, 0);
    console.log('auto',totalAutoMultiplier);

    // TODO don't add these together, but it would be good to put these variables into your html, make you call this function appropriately
    // return totalClickMultiplier + totalAutoMultiplier;
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
    // FIXME try and comment these out and see if your numbers go up correctly
    // const totalMultiplier = calculateTotalMultiplier();
    // cheese += totalMultiplier;
    cheese++ ;
    clickCount()

    applyClickUpgrades()
    applyDrillUpgrade()
    update()
} 
function clickCount() {
clicks++
}



function update() {
    const cheeseCountElement = document.getElementById('cheeseCount');
    cheeseCountElement.textContent = `${cheese} 🧀`;

    const clickCountElement = document.getElementById('clickCount');
    clickCountElement.textContent = `${clicks} 👆🏼`;
    
    const knifeCountElement = document.getElementById('knifeCount');
    knifeCountElement.textContent = `${clickUpgrades.find(knife => knife.name === 'knife').quantity} Knife Count`;

    const drillCountElement = document.getElementById('drillCount');
    drillCountElement.textContent = `${clickUpgrades.find(drill => drill.name === 'drill').quantity} Drill Count`;

    const wormholeCountElement = document.getElementById('wormholeCount');
    wormholeCountElement.textContent = `${automaticUpgrades.find(wormhole => wormhole.name === 'wormhole').quantity} Wormhole Count`;

    const tomcruiseCountElement = document.getElementById('tomcruiseCount');
    tomcruiseCountElement.textContent = `${automaticUpgrades.find(tomcruise => tomcruise.name === 'tomcruise').quantity} Tom Cruise Count`;

}

setInterval(collectAutoUpgrades, 3000);
clickCount()
mine()