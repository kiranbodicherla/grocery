var count = 0;
function calcTotal() {

    let t = document.querySelector('tbody');
    if (count > 0) {
        t.removeChild(t.children[t.children.length - 1]);
    }
    let lastrow = document.createElement("tr");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let price = document.querySelectorAll('[data-ns-test="price"]');
        let sum = 0;
        price.forEach(x => {
            sum = sum + Number(x.innerText);
        });
        col1.innerHTML = "Grand Total";
        col2.setAttribute("data-ns-test", "grandTotal");
        col2.innerHTML = sum;
        lastrow.appendChild(col1);
        lastrow.appendChild(col2);
        t.appendChild(lastrow);
        count++;
}