const APIURL = "http://localhost:3000"

async function carregarProdutos(){
    const res = await fetch(`${APIURL}/livros`)
    const produtos = await res.json()
    const conteiner = document.getElementById("div_cards")

    conteiner.innerHTML = produtos.map(p =>`
        <div class="card_style">
            <p class="titulo">Título: Dom Casmurro</p>
            <p class="autor">Autor: Machado de Assis</p>
            <p class="valor">R$: 79.99</p>
        </div>
    `).join("")
}

carregarProdutos()


document.getElementById("id_form").addEventListener("submit", async e => {
    e.preventDefault();

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    await fetch($`{APIURL}/livro`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })

    e.target.reset();
})