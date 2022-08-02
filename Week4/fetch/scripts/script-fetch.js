const URL_CARDS = "https://jsonplaceholder.typicode.com/todos";
fetch (URL_CARDS)
    .then((response) => response.json())
    .then((data) => showData(data));

function showData(data) {
    let body = ``;
    for (let i = 0; i < data.length; i++){
        body += `<div class = "card">
            <h2 class="cardsTitle">${data[i].title}</h2>
            <p>User ID: ${data[i].userId}</p>
            <p>ID: ${data[i].id}</p>
            <div class="showStatus">
            <div class="overlayStatus">Status: ${data[i].completed}
            </div>
            </div>
            </div>            
        `;
    }  
document.getElementById("fetch-petition").innerHTML = body;
}