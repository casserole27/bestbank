/****** VARIABLES ******/

import { accounts } from "./data.js"

const accountsList = document.getElementById("accounts-list");
const spendList = document.getElementById("spendings-list")

renderAccounts()
// addListItemClickHandler()

/****** FUNCTIONS ******/

function renderAccounts() {

    let listItems = "";

    accounts.forEach(function(account) {
        listItems += `
            <li 
                class="account"
                data-account="${account.id}">
                ${account.title}
            <span data-account="${account.id}">
                    $${account.balance}
            </span>     
            </li>`        
        })

    accountsList.innerHTML = listItems;
};



function renderSpendings(accountId) {
    
    const targetAccount = accounts.filter(function(account) {
        return account.id === accountId
    })[0]

    if (targetAccount) {

        let listItems = "";
  
        targetAccount.spendings.forEach(function(spend){
        
        listItems += `
            <li>
                ${spend.category}
                <span>
                $${spend.spent}
                </span>`
        })
    spendList.innerHTML = listItems;
    
    }
};    
    

/****** EVENT LISTENERS ******/


// function addListItemClickHandler() {

accountsList.addEventListener("click", function(e) {
   
//    if (e.target.tagName === "LI") {
//     console.log(e.target.tagName)
//     console.log(e.target.classList)

//    e.target.classList.toggle("orange");

   const target = e.target.dataset.account;
        
        if(target) {
            renderSpendings(target);
        }

    })  


// addListItemClickHandler()

    
// accountsList.innerHTML = ""

// for (let i = 0; i < accounts.length; i++) {

//     const account = document.createElement("li");
//     account.textContent = accounts[i];
//     accountsList.appendChild(account);

//     account.addEventListener("click", function() {
//         let content = this.textContent;
//         this.classList.add("orange-bg");
//     })
// }
