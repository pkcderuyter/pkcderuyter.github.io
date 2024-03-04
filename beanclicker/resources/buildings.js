class Building {
    constructor(id, name, basePrice, baseCps, className) {
        this.id = id;
        this.name = name;
        this.basePrice = basePrice;
        this.baseCps = baseCps;
        this.className = className;
        this.purchased = 0;
        this.totalGenerated = 0;
    }

    cps() {
        return this.purchased * this.baseCps;
    }

    price() {
        return this.purchased > 0 ? Math.floor(this.basePrice + this.purchased * 0.1 * this.basePrice) : this.basePrice;
    }

    purchase() {
        let price = this.price();
        if (price <= game.clicks) {
            game.clicks -= price;
            this.purchased += 1;
        } 
    }
}

class Game {
    constructor() {
        this.buildings = [];
        this.clickCount = 0;
    }

    // get clickCount() {
    //     return this._clickCount;
    // }

    // set clickCount(count) {
    //     this._clickCount = count;
    // }

}

function clickerClick() {
    clicks++;
    manualClicks++;
    if (manualClicks === 100) {
        alert("Achievement Unlocked: Bean There, Done That! You clicked the Bean 500 times!");
    }
    game.clickCount++;
    console.log(game.clickCount);
    renderDisplay();
}

let clicks = 0;
let manualClicks = 0;
const game = new Game
game.buildings.push(new Building(1, 'Dishwasher', 100, 1));
game.buildings.push(new Building(2,'Soap',1000,10));
game.buildings.push(new Building(3, 'BigDiv',10000, 100,'bigdiv'));
game.buildings.push(new Building(4, 'FooBar', 100000, 1000));
game.buildings.push(new Building(5,'Fucks to Give',1000000,10000));
game.buildings.push(new Building(6,'Do Teen Stuff',10000000,-100000));
game.buildings.push(new Building(7, 'Duke Nukedem', 100000000, 100000));
game.buildings.push(new Building(8, 'BitBean',1500000000, 1000000));

console.log(game.buildings);

const clicker = document.getElementById('clicker');
clicker.addEventListener("click", clickerClick);
const buildings = document.getElementById('buildings');
game.buildings.map((building) => {
    const button = document.createElement('button');
    button.id = `building${building.id}`;
    button.classList.add('building');
    if (building.className) { 
        button.classList.add(building.className) 
    };
    button.addEventListener("click", () => { buildingClick(building) });
    buildings.appendChild(button);
})

const clickCount = document.getElementById('clickCount');
function renderDisplay() {
    clickCount.innerHTML = clicks.toLocaleString();
    game.buildings.map(building => {
        const button = document.getElementById(`building${building.id}`);
        button.disabled = clicks < building.price();  
        button.innerHTML = `${Number(building.purchased.toLocaleString())} ${building.name}(s) (${building.price().toLocaleString()} beans)`;
        button.title = `You have ${Number(building.purchased.toLocaleString())} ${building.name}(s) producing ${building.cps().toLocaleString()} beans per second.`
    });
}

function buildingClick(building) {
    if (building.name === 'Fucks to Give') {
        if (Math.floor(Math.random() * 10) + 1 != 7) {
            alert('Error 404: Fucks not found');
            return;
        }
    }
    clicks -= building.price();
    building.purchased++; 
    renderDisplay();
    if (building.name === 'Dishwasher') {
        if (building.purchased === 1) {
            alert('Achievement Unlocked: Oh No! You forgot to add Soap!');
        } else if (building.purchased === 10) {
            alert("Achievement Unloacked: Beans! It's what's for dinner!");
        } else if (building.purchased === 88) {
            alert("Achievement Unlocked: Back to the Bean! Your dishwashers are now washing 88bps!");
        } else if (building.purchased === 100) {
            alert("Achievement Unloacked: Bean Salad! Your dishwashers are now washing 100 beans per second!");
        }
    }
    if (building.name === 'Soap') {
        if (building.purchased === 1) {
            alert('Achievement Unlocked: The dishes are finally clean!');
        }
    }
    if (building.name === 'BigDiv') {
        if (building.purchased === 1) {
            alert("Achievement Unlocked: You've got a BigDiv!");
        } else if (building.purchased === 10) {
            alert("Achivement Unlocked: BigDiv Energy!");
        } else if (building.purchased === 100) {
            alert("Achievement Unlocked: That's what she said!");
        }
    }
    if (building.name === 'FooBar') {
        if (building.purchased === 1) {
            alert("Achievement Unlocked: Fucked Up Beyond Recognition!")
        } else if (building.purchased === 10) {
            alert("Achievement Unlocked: You saved Private Ryan!")
        } else if (building.purchased === 100) {
            alert("Achievement Unlocked: These FooBars better be worth it. They'd better go home, cure some disease, or invent a longer-lasting light bulb or something.");
        }
    }
    if (building.name === 'Fucks to Give') {
        if (building.purchased === 1) {
            alert("Achievement Unlocked: Congrats you found a Fuck!");
        }
    }
    if (building.name === 'Do Teen Stuff') {
        if (building.purchased === 1) {
            alert("Achievement Unlocked: Oh no! Your teen is eating all your beans!");
        }
    }
    if (building.name === 'Duke Nukedem') {
        if (building.purchased === 1) {
            alert("It's time to eat beans and chew buble gum.. and I'm all outta gum.");            
        } else if (building.purchased === 10) {
            alert("Hail to the beans, baby!");
        } else if (building.purchased === 20) {
            alert("I've got beans of steel.");
        } else if (building.purchased === 30) {
            alert("Little pig, little pig let me in. Or I'll huff and I'll puff and I'll eat your beans!");
        } else if (building.purchased === 40) {
            alert("I’m an equal opportunity bean eater.")
        } else if (building.purchased === 50) {
            alert("My beans, your face; the perfect couple.");
        } else if (building.purchased === 60) {
            alert("You're an inspiration for bean control.");
        } else if (building.purchased === 70) {
            alert("Your beans are grass, and I’ve got the weed whacker.");
        } else if (building.purchased === 80) {
            alert("Now you see me, now you’re beans.");
        } else if (building.purchased === 90) {
            alert("Your face, your beans - what's the difference?.");
        } else if (building.purchased === 100) {
            alert("This is a very special microwave.  As you can see the number all go up to 11.  Most microwaves your nuking at 10 your all the way up where can you go from there? What we do if we need that extra push off the cliff we put it up to 11. 1 more powerful.");
        } else if (building.purchased === 110) {
            alert("And yet although bringing the surface temperature of the beans too a level that rivals the sun they were still frozen in the middle.");
        }
    }

    if (building.name === 'BitBean') {
        if (building.purchased === 1) {
            alert('I like ₿it₿eans and I cannot lie');
        }
    }
}

renderDisplay();

function autoClicks() {
    clicks += game.buildings.reduce(
        (accumulator, building) => accumulator + building.cps(), 0
    );

const teens = game.buildings[5];
if (clicks < 0 && teens.purchased > 0) {
    alert("Achievement Unlocked: Oh no! Your teen ate too many beans and exploded!");
    teens.purchased = 0;
    clicks = 0;
}

    renderDisplay();
}

function setCookie(cname, cvalue, exdays) {
     const d = new Date();
     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
     let expires = "expires="+d.toUTCString();
     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
   }

   function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }    

function saveProgress() {
    setCookie('clicks', clicks, 30);   
    setCookie('manualClicks', manualClicks, 30);
    game.buildings.map(building => {
        setCookie(`building${building.id}_purchased`,building.purchased, 30);
    })
    console.log('Progress saved');
}

function loadProgress() {
    clicks = Number(getCookie('clicks'));
    manualClicks = Number(getCookie('manualClicks'));
    game.buildings.map(building => {
        building.purchased = getCookie(`building${building.id}_purchased`);
    });    
    //clicks += game.buildings[6].purchased * game.buildings[6].price();
    //game.buildings[6].purchased = 0;
    renderDisplay();
}

setInterval(autoClicks, 1000);
setInterval(saveProgress, 10000);

loadProgress();