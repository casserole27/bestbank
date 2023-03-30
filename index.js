/****** VARIABLES ******/

import { accounts } from "./data.js"

const accountsList = document.getElementById("accounts-list");
const spendList = document.getElementById("spendings-list")

renderAccounts()

/****** FUNCTIONS ******/

function renderAccounts() {

    let listItems = "";

    accounts.forEach(function(account) {
        
        listItems += `
            <li 
                class = "list"
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


    const target = e.target.dataset.account;
    if (target) {
        renderSpendings(target);
    };
    
});
        



// const listItems = document.querySelectorAll("#accounts-list li")

// listItems.forEach(function(item) {
//     console.log(listItems)
//     item.addEventListener("click", function () {
//           renderOrange(item);
//     })
// })

// function renderOrange(item) {
//     console.log(item)
//     if (item.style.backgroundColor === "#FFD18C") {
//         item.style.backgroundColor = "#ffffff";
//     } else {
//         item.style.backgroundColor = "#FFD18C"
//     } 
    
// }






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



    
    // if (e.target.tagName === "LI") {
        
    //     const listItems = document.querySelectorAll(".pick")
    //     console.log(listItems);
    //     listItems.forEach(function(item) {
    //         console.log(item)
    //         item.classList.remove("orange")
    //     })
    
    //     e.target.classList.add("orange")
          

        // if (clickedListItem)
    // clickedListItem.classList.add("selected")
    // console.log(clickedListItem.classList)
   
    // // Remove the 'orange' class from the previously selected li element
    // if (selectedListItem && selectedListItem !== clickedListItem) {
    //     selectedListItem.classList.remove("orange");
    // }
    
    // // Add the 'orange' class to the clicked li element
    // clickedListItem.classList.toggle("orange");
    // selectedListItem = clickedListItem;