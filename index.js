/**
 * Function resolving a promise when an DOM element is found in the page
 * @param {string} selector - Attribute of the element we're looking for in the page
 * @example elementPresence('.element-class').then( ( element ) => { myOtherFunction() } );
 */
export const elementPresence = ( selector ) => {
	return new Promise( ( resolve ) => {
		let element = document.querySelector( selector );

		if ( element ) {
			resolve( element );
			return;
		}

		let observer = new MutationObserver( ( mutations ) => {
			mutations.forEach( ( mutation ) => {
				let nodes = Array.from( mutation.addedNodes );

				for ( let node of nodes ) {
					let subnodes = node.innerHTML || false;

					if ( node.matches && node.matches( selector ) ) {
						observer.disconnect();
						resolve( node );
						return;
					}

					if ( subnodes && node.querySelector( selector ) ) {
						observer.disconnect();
						resolve( node.querySelector( selector ) );
						return;
					}
				};
			});
		});

		observer.observe( document.documentElement, {
			childList: true,
			subtree: true
		});
	});
};
