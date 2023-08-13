import { question } from "readline-sync";
import _ from "lodash";

const bankAccounts = {};

function addAccount(account) {
    bankAccounts[account.accountId] = account;
}

function addAccountToBank(account) {
    addAccount(account);
}

function createAccount(accountId, name, pin, accountBalance) {
    return { accountId, name, pin, accountBalance };
}

//Withdraw the money from the account
function withdraw(account) {
    console.log('----------account----------', account);
    const withdrawalAmount = question('How much would you like to withdraw today?: ')
    const accountBalance = _.get(account, 'accountBalance')

    if (withdrawalAmount > accountBalance) {
        console.log('withdrawal Amount cannot exceed account balance')
        return {
            message: 'withdrawal Amount cannot exceed account balance'
        };
    }

    const newAccountBalance = accountBalance - withdrawalAmount;
    return { withdrawalSuccessfull: true, newAccountBalance, withdrawalAmount };
}

//Deposit the money into the account
function deposit(account) {
    const depositAmount = question('How much would you like to deposit today?: ')
    const accountBalance = _.get(account, 'accountBalance')

    const newAccountBalance = accountBalance + depositAmount;
    return { depositSuccessfull: true, newAccountBalance };
}

//View the account summary
function viewAccountSummary(account) {
    const accountBalance = _.get(account, 'accountBalance')
    console.log(`Your balance is: ${accountBalance}`)
    return;
}

//Operations that are available
function operation(account) {
    let operationToPerform = question('What operation would you like to do today (Withdraw, Deposit, View Summary)?: ')

    //set the response to lowercase and take out any spaces
    operationToPerform = _.trim(_.toLower(operationToPerform));
    //replace any spaces that are inside the response
    operationToPerform = _.replace(operationToPerform, /\s+/g, '');

    switch (operationToPerform) {
        case 'withdraw':
            withdraw(account);
            break;
        case 'deposit':
            deposit(account);
            break;
        case 'viewsummary':
            console.log('we get here')
            viewAccountSummary(account);
            break;
        default:
            break;
    }

    atmOperation(account)
}

//Continue the use of the atm after initial operation
function atmOperation(account) {
    const continueOperations = question('Can we help you with anything else today?: ')
    switch (continueOperations) {
        case 'yes':
            operation(account);
            break;
        default:
            break;
    }
    return;
}

//authentication and start
function startATM(bank) {
    const pin = question('Enter your Pin: ')
    const account = _.find(bank.accounts, { pin });

    if(!account) {
        console.log('Could not find account')
        return {
            message: 'Could not find account'
        };
    }
    console.log(`Welcome ${_.get(account, 'name')}`)
    operation(account)
}

// Bank setup
addAccountToBank(createAccount('1', 'John Doe', '1234', 50));
addAccountToBank(createAccount('2', 'Jane Doe', '5678', 20));
addAccountToBank(createAccount('3', 'Alice Doe', '1123', 10));
addAccountToBank(createAccount('4', 'Bob Doe', '1360', 5));
addAccountToBank(createAccount('5', 'Eve Doe', '6174', 1));

startATM({ accounts: bankAccounts });