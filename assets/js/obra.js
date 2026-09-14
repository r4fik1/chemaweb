(function () {
	var params = new URLSearchParams(window.location.search);
	var id = params.get('id');
	var obras = window.OBRAS || [];
	var index = obras.findIndex(function (obra) { return obra.id === id; });
	if (index < 0) index = 0;

	var obra = obras[index];
	var prev = obras[index - 1];
	var next = obras[index + 1];
	var titulo = obra.titulo || 'Obra';

	document.title = titulo + ' · Chema Martín';
	document.getElementById('obra-titulo').textContent = titulo;

	var img = document.getElementById('obra-imagen');
	img.src = obra.imagen;
	img.alt = titulo;

	var texto = document.getElementById('obra-texto');
	if (obra.texto) {
		texto.textContent = obra.texto;
	} else {
		texto.remove();
	}

	var nav = document.getElementById('obra-nav');
	nav.innerHTML =
		(prev
			? '<a href="obra.html?id=' + encodeURIComponent(prev.id) + '" class="button">' + (prev.titulo || 'Anterior') + '</a>'
			: '<span></span>') +
		(next
			? '<a href="obra.html?id=' + encodeURIComponent(next.id) + '" class="button primary">' + (next.titulo || 'Siguiente') + '</a>'
			: '<span></span>');
})();
