let cart = [];

  function toggleCategory(id) {
    document.querySelectorAll('.category-block').forEach(el => el.style.display = 'none');
    document.getElementById(id).style.display = 'block';
  }

  function toggleSub(id) {
    const sub = document.getElementById(id);
    sub.style.display = sub.style.display === 'none' ? 'grid' : 'none';
    if (sub.childElementCount === 0) {
      const [cat, type] = id.split('-');
      renderProducts(cat, type);
    }
  }

  function renderProducts(cat, type) {
    const container = document.getElementById(`${cat}-${type}`);
    const items = products[cat][type];
    items.forEach(p => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${p.img}" alt="${p.title}">
        <h4>${p.title}</h4>
        <p>${p.price}</p>
        <button onclick='addToCart("${p.title}", "${p.price}")'>В корзину</button>
      `;
      container.appendChild(div);
    });
  }

  function addToCart(title, price) {
    cart.push({ title, price });
    document.getElementById('cart-count').textContent = cart.length;
    renderCart();
  }

  function toggleCart() {
    const cartEl = document.getElementById('cart');
    cartEl.style.display = cartEl.style.display === 'none' ? 'block' : 'none';
  }

  function renderCart() {
    const list = document.getElementById('cart-items');
    list.innerHTML = '';
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.title} — ${item.price}`;
      list.appendChild(li);
    });
  }

  

