const form = document.getElementById('form-atividade');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeAtividade = ducument.getElementById('nome-atividade');
    const inputNotaAtividade = ducument.getElementById('nota-atividade');

    alert(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value}`);
});