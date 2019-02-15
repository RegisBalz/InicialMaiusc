function inicialMaiusc(nome) {
	var nomes = nome.split(' ');
	var atual;
	var excecoes = ['da', 'de', 'do', 'dos'];

	for (var i = 0; i < nomes.length; i++) {
		atual = nomes[i];

		if (excecoes.includes(atual)) {
			continue;
		}

		atual = atual.split('')[0].toUpperCase() + atual.substring(1);
		nomes[i] = atual;
	}

	return nomes.join(' ');
}

// Saída = Luís Inácio Lula da Silva
inicialMaiusc('luís inácio lula da silva');
