class ATM {
  constructor(currentBalance) {
    this.currentBalance = currentBalance;
  }

  accountDeposit() {
    const deposit = parseFloat(document.getElementById("amount-textbox").value);

    if (isNaN(deposit) || deposit <= 0) {
      const responses = document.querySelector(".responses");
      responses.textContent = `Invalid entry, please try again. Your balance is: $${atm.currentBalance}`;
      return this.currentBalance;
    }

    this.currentBalance += deposit;
    const responses = document.querySelector(".responses");
    responses.textContent = `You have deposited $${deposit}. Your balance is: $${atm.currentBalance}`;
    // getBalance();
    return this.currentBalance;
  }

  accountWithdrawal() {
    let withdrawal = parseFloat(
      document.getElementById("amount-textbox").value
    );
    if (isNaN(withdrawal) || withdrawal <= 0) {
      const responses = document.querySelector(".responses");
      responses.textContent = `Invalid entry. Please try again. Your balance is: $${atm.currentBalance}`;
      return this.currentBalance;
    } else if (withdrawal > this.currentBalance) {
      const responses = document.querySelector(".responses");
      responses.textContent = `Insufficient Funds. Please try again. Your balance is: $${atm.currentBalance}`;
      return this.currentBalance;
    }

    this.currentBalance -= withdrawal;
    const responses = document.querySelector(".responses");
    responses.innerText = `You have withdrawn $${withdrawal}. Your balance is: $${atm.currentBalance}`;
    return this.currentBalance;
  }
}

const getBalance = () => {
  const responses = document.getElementById("responses");
  responses.innerText = `Your balance is: $${atm.currentBalance}`;
};

const goodbye = () => {
  const responses = document.getElementById("responses");
  const container = document.getElementById("container");
  const menu = document.getElementById("menu");
  const returnButton = document.createElement("button");
  responses.innerText = "Thank You - Goodbye!";
  container.removeChild(menu);
  returnButton.className = "return-button";
  container.appendChild(returnButton);
  returnButton.textContent = "HOME";
  returnButton.onclick = () => {
    location.reload("index.html");
  };
};

const atm = new ATM(100);
