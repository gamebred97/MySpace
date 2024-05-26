function vacation(fundsNeeded, initialFunds, actions) {
    let days = 0;
    let spendDays = 0;
    let currentFunds = initialFunds;

    for (let i = 0; i < actions.length; i++) {
        const [action, amount] = actions[i];
        days += 1;
        
        if (action === "spend") {
            spendDays += 1;
            currentFunds -= amount;
            if (currentFunds < 0) {
                currentFunds = 0;
            }
            if (spendDays === 5) {
                console.log("You can't save the money.");
                console.log(`${days}`);
                return;
            }
        } else if (action === "save") {
            spendDays = 0;
            currentFunds += amount;
        }

        if (currentFunds >= fundsNeeded) {
            console.log(`You saved the money for ${days} days.`);
            return;
        }
    }
    console.log("You can't save the money.");
    console.log(`${days}`);
}


const fundsNeeded = 2000.00;
const initialFunds = 1000.00;
const actions = [
    ["spend", 1200.00],
    ["save", 2000.00]
];

vacation(fundsNeeded, initialFunds, actions);
