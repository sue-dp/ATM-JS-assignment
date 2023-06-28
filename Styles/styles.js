let currentBalance = 100;
class ATM {
  constructor(currentBalance) {
    this.currentBalance = currentBalance;
  }

  accountDeposit() {
    console.log(this.currentBalance);
    const deposit = parseFloat(
      document.getElementById("deposit-textbox").value
    );
    console.log(deposit);

    if (isNaN(deposit) || deposit <= 0) {
      return this.currentBalance;
    }

    this.currentBalance = deposit + this.currentBalance;
    console.log(this.currentBalance);
    return this.currentBalance;
  }

  accountWithdrawal() {
    let withdrawal = parseFloat(
      doument.getElementById("withdraw-textbox").value
    );
    // if (withdrawal < 0) {
    //   // console.log("Please enter an amount greater than $0.\n");
    //   return this.currentBalance;
    // }
    if (withdrawal > this.currentBalance) {
      const responses = document.querySelector(".responses");
      responses.textContent = "Insufficient Funds";
      // console.log("You have insufficient funds\n");
      let newWithdrawal = parseFloat(
        prompt(
          "Please enter an amount less than or equal to $" + currentBalance
        )
      );
      withdrawal = newWithdrawal;
    }
    if (withdrawal === 0) {
      return this.currentBalance;
    }
    // console.log(
    // "You have withdrawn $" + withdrawal + ". Please take your cash."
    // );
    this.currentBalance -= withdrawal;
    return this.currentBalance;
  }
}

// console.log("Welcome to B.O.S.S. ATM!");
// const account = new ATM(currentBalance);

// while (true) {
//   const responses = document.querySelector(".responses");
//   responses.textContent = "You deposited $500";
//   const newResponse = document.createElement(newResponse);
//   newResponse.type = "text";
//   newResponse.id = "myInput";
//   newResponse.placeholder = "Your current balance is: $" + currentBalance;

//   responses.appendChild(newResponse);
//   // const menu =
//   // "Please choose from the following options:\n1: Balance Check\n2: Deposit\n3: Withdrawal\n4: Quit\n>>>";
//   // const user_input = prompt(menu);

//   if (user_input === "1") {
//     // console.log("Your current balance is: $" + current_balance);
//   } else if (user_input === "2") {
//     currentBalance = ATM.accountDeposit();
//   } else if (user_input === "3") {
//     currentBalance = ATM.accountWithdrawal();
//   } else if (user_input === "4") {
//     // console.log("Thank you, See you next time!");
//     break;
//   } else if (user_input === null) {
//     // console.log("Thank you, See you next time!");
//     break;
//   }
// }
// // eventlistner for account currentBalance, depost, withdrawal, exit, back to mm from depost, back to mm from withdrawal
