const items = [];
for (let i = 1; i <= 100; i++) {
    items.push({  name: `Post${i}` });
}

let currentPage = 1;
const itemsPerPage = 10;

function renderItems() {
    const container = document.getElementById('container');
    container.innerHTML = '';
    const startIndex = (currentPage - 1) * itemsPerPage;
    const pageItems = items.slice(startIndex, startIndex + itemsPerPage);

    for (const item of pageItems) {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerText = `${item.name}`;
        container.appendChild(div);
    }
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderItems();
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentPage < items.length / itemsPerPage) {
        currentPage++;
        renderItems();
    }
});

renderItems();
