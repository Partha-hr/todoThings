const leftSection = document.getElementById("left-lists");
const rightSection = document.getElementById("right-lists");
const moveleftBtn = document.getElementById("move-left");
const moverightBtn = document.getElementById("move-right");

moverightBtn.addEventListener("click", () => {
    if (!isChecked(leftSection)) {
        alert("Please select the item.");
        return;
    }
    else {
        transferItem(leftSection, rightSection)
    }

});

moveleftBtn.addEventListener("click", () => {
    if (!isChecked(rightSection)) {
        alert("Please select the item.");
        return;
    }
    else {
        transferItem(rightSection, leftSection)
    }


});

function isChecked(Item) {
    return Item.querySelector("input:checked") !== null;
}

//function to get selected item
const transferItem = (source, target) => {
    const SelectedItem = Array.from(source.querySelectorAll("input:checked"));

    SelectedItem.forEach(item => {
        const itemSelected = item.parentElement;
        item.checked = false;
        target.appendChild(itemSelected);

        const deleteItem = itemSelected.querySelector(".dlt-item");
        deleteItem.addEventListener("click", () => {
            alert("Are you sure");
            target.removeChild(itemSelected);
        });
    });


};



function AddtoList() {
    event.preventDefault();
    //get input field id and value.
    const addRoadmap = document.getElementById("addList");
    const inputValue = addRoadmap.value.trim();//remove extra spaces

    //checks the value is empty or not
    if (inputValue === "") {
        alert("enter Item to add");
        return;
    }
    //create list element 
    const newItem = document.createElement("li");
    newItem.innerHTML = ` <input type="checkbox" value="${inputValue}"> ${inputValue} <span class="dlt-item">🗑️<span>`;

    const leftSection = document.getElementById("left-lists");
    leftSection.appendChild(newItem);

    const deleteItem = newItem.querySelector(".dlt-item");
    deleteItem.addEventListener("click", () => {
        alert("Are you sure");
        leftSection.removeChild(newItem);

    })


    inputValue == "";
}

