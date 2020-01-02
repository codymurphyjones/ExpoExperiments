import React from 'react'


export function withPlaceholder(show: boolean, component, placeholder) {
	if(show) {
		console.log("Component")
	}
	else
		console.log("Placeholder")
	return show ? component : placeholder;
}
