document.getElementById('cadastroPessoaForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;

    const response = await fetch('http://localhost:3000/pessoas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, cpf, telefone })
    });

    const data = await response.json();
    
    if (response.ok) {
        alert('Pessoa cadastrada com sucesso!');
        document.getElementById('cadastroPessoaForm').reset();
    } else {
        alert('Erro: ' + data.error);
    }
});
