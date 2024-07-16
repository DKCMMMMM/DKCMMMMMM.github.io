document.addEventListener('DOMContentLoaded', function () {
    var boleta = JSON.parse(localStorage.getItem('boleta'));

    var boletaItemsContainer = document.getElementById('boleta-items');
    boleta.items.forEach(function (item) {
        var itemDiv = document.createElement('div');
        itemDiv.classList.add('boleta-item');
        itemDiv.innerHTML = `
            <span class="boleta-item-titulo">${item.titulo}</span>
            <span class="boleta-item-cantidad">Cantidad: ${item.cantidad}</span>
            <span class="boleta-item-precio">Precio: ${item.precio}</span>
        `;
        boletaItemsContainer.appendChild(itemDiv);
    });

    document.getElementById('boleta-total').innerText = 'Total: ' + boleta.total;
});

