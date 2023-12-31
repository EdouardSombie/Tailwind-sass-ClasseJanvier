window.onload = () => {
	document.querySelectorAll("[data-component]").forEach((element) => {
		fetch(
			"./src/components/" + element.getAttribute("data-component") + ".html"
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`erreur HTTP! statut: ${reponse.status}`);
				}
				return response.text();
			})
			.then((text) => {
				element.innerHTML = text;
				if (element.getAttribute("data-addClass") != null) {
					let addedClass = element.getAttribute("data-addClass");
					element.firstChild.classList.add(addedClass);
				}
			});
	});
};
