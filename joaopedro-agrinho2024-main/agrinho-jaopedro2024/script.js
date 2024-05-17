document.addEventListener("DOMContentLoaded", function() {
    const cartItems = []; // Array para armazenar os itens do carrinho

    // Função para adicionar um item ao carrinho
    function addItemToCart(item) {
        cartItems.push(item); // Adiciona o item ao array do carrinho
        renderCart(); // Atualiza a exibição do carrinho
    }

    // Função para renderizar o carrinho na página
    function renderCart() {
        const cartList = document.querySelector('.cart ul');
        const totalElement = document.getElementById('total');
        let total = 0;

        // Limpa o conteúdo atual do carrinho
        cartList.innerHTML = '';

        // Adiciona cada item do carrinho à lista
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
            cartList.appendChild(li);

            // Calcula o total
            total += item.price;
        });

        // Atualiza o total na página
        totalElement.textContent = `R$ ${total.toFixed(2)}`;
    }

    // Event listener para o botão "Adicionar ao Carrinho"
    const addToCartButtons = document.querySelectorAll('.product button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.parentNode;
            const productName = product.querySelector('h2').textContent;
            const productPrice = parseFloat(product.querySelector('p').textContent.replace('R$ ', ''));

            const item = {
                name: productName,
                price: productPrice
            };

            addItemToCart(item);
        });
    });

    // Event listener para o botão "Finalizar Compra"
    const checkoutButton = document.getElementById('checkout');
    checkoutButton.addEventListener('click', function() {
        alert('Compra finalizada! Obrigado por comprar conosco.');
    });
});
