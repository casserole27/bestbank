/****** VARIABLES ******/

import { accounts } from "./data.js"

const accountsList = document.getElementById("accounts-list");
const spendList = document.getElementById("spendings-list")

/****** FUNCTIONS ******/

function renderAccounts() {

    let listItems = "";

    accounts.forEach(function(account) {
        
        listItems += `
            <li 
                class = "list"
                data-account="${account.id}">
                ${account.title}
            <span 
                data-account="${account.id}">
                $${account.balance}
            </span>     
            </li>`        
        });

    accountsList.innerHTML = listItems;
};


function renderSpendings(accountId) {
    
    const targetAccount = accounts.filter(function(account) {
        return account.id === accountId;
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
        });       
        spendList.innerHTML = listItems;
    };
};
   

 
/****** EVENT LISTENERS ******/

accountsList.addEventListener("click", function(e) {
    
    if (e.target.tagName === "LI") {
    
        const listItems = document.querySelectorAll(".list")
        listItems.forEach(function (listItem) {
        listItem.style.backgroundColor = "#FFFFFF";
        });

        const clickedListItem = e.target;
        clickedListItem.style.backgroundColor = "#FFD18C";
    };    


    const accountsList = e.target.dataset.account;
    if (accountsList) {
        renderSpendings(accountsList);
    };
    
});
        
renderAccounts();


