// RecipeCard.js

class RecipeCard extends HTMLElement {
	// Called once when document.createElement('recipe-card') is called, or
	// the element is written into the DOM directly as <recipe-card>
	constructor() {
		super(); // Inherit everything from HTMLElement

		// EXPOSE - START (All expose numbers start with A)
		// A1. TODO - Attach the shadow DOM to this Web Component (leave the mode open)
		this.attachShadow({mode:'open'});
		// A2. TODO - Create an <article> element - This will hold our markup once our data is set
		const article = document.createElement('article');
		// A3. TODO - Create a style element - This will hold all of the styles for the Web Component
		const style = document.createElement('style');
		// A4. TODO - Insert all of the styles from cardTemplate.html into the <style> element you just made (copy everything INSIDE the <style> tag>)
		style.textContent = `
			* {
				font-family: 'Times New Roman', Times, serif;
			}
			
			a {
				color: black;
				text-decoration: none;
			}
			
			a:hover {
				text-decoration: underline;
			}
			
			article {
				align-items: center;
				border: 1px solid rgb(223, 223, 223);
				border-radius: 8px;
				display: grid;
				grid-template-rows: 220px 180px 30px;
				height: 100%;
				overflow: hidden;
				width: 280px;
			}
			
			div.rating {
				align-items: center;
				display: flex;
				gap: 5px;
			}
			
			div.ingredients {
				height: 100%;
				overflow: hidden;
			}
			
			div.metadata {
				display: flex;
				justify-content: space-between;
			}
			
			img {
				height: 100%;
				object-fit: cover;
				width: 100%;
			}
			
			section {
				display: grid;
				gap: 10px;
				height: 100%;
				padding: 0 15px 15px 15px;
			}
			
			section > * {
				margin: 0;
			}
		`;
		// A5. TODO - Append the <style> and <article> elements to the Shadow DOM
		this.shadowRoot.appendChild(style);
		this.shadowRoot.appendChild(article);
	}

	/**
	 * Called when the .data property is set on this element.
	 *
	 * For example:
	 * let recipeCard = document.createElement('recipe-card'); // Calls constructor()
	 * recipeCard.data = { foo: 'bar' } // Calls set data({ foo: 'bar' })
	 *
	 * @param {Object} data - The data to pass into the <recipe-card> must be of the
	 *                        following format:
	 *                        {
	 *                          "imgSrc": "string",
	 *                          "imgAlt": "string",
	 *                          "titleLnk": "string",
	 *                          "titleTxt": "string",
	 *                          "organization": "string",
	 *                          "rating": number,
	 *                          "numRatings": number,
	 *                          "lengthTime": "string",
	 *                          "ingredients": "string"
	 *                        }
	 */
	set data(data) {
		// If nothing was passed in, return
		if (!data) return;

		// A6. TODO - Select the <article> we added to the Shadow DOM in the constructor
		const article = this.shadowRoot.querySelector('article');
		
		// A7. TODO - Set the contents of the <article> with the <article> template given in
		article.innerHTML = `
			<img src="${data.imgSrc}" alt="${data.imgAlt}">
			<section>
				<h3><a href="${data.titleLnk}">${data.titleTxt}</a></h3>
				<p>${data.organization}</p>
				<div class="rating">
					<span>${data.rating}</span>
					<span>(${data.numRatings})</span>
				</div>
				<div class="metadata">
					<span>${data.lengthTime}</span>
				</div>
				<div class="ingredients">
					<p>${data.ingredients}</p>
				</div>
			</section>
		`;
	}
}

// A8. TODO - Define the Class as a customElement so that you can create
//           'recipe-card' elements
customElements.define('recipe-card', RecipeCard);
