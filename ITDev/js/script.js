document.addEventListener('DOMContentLoaded', () => {
    const itemsContainer = document.getElementById('items-container');

    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            data.products.forEach(item => {
                const itemCard = document.createElement('div');
                itemCard.className = 'item-card';
                
                itemCard.innerHTML = `
                    <img src="${item.thumbnail}" alt="${item.title}" class="item-image">
                    <div class="item-info">
                        <h3 class="item-title">${item.title}</h3>
                        <p class="item-price">$${item.price}</p>
                        <a href="detail.html?id=${item.id}" class="btn-secondary">View Details</a>
                    </div>
                `;
                
                itemsContainer.appendChild(itemCard);
            });
        })
        .catch(error => console.error('Error fetching items:', error));
});
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('id');
    
    if (itemId) {
        fetch(`https://dummyjson.com/products/${itemId}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('item-image').src = data.thumbnail;
                document.getElementById('item-title').textContent = data.title;
                document.getElementById('item-description').textContent = data.description;
                document.getElementById('item-price').textContent = `Price: $${data.price}`;
            })
            .catch(error => console.error('Error fetching item details:', error));
    }
});
