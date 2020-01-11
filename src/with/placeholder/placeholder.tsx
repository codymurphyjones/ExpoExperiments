import React from 'react'


export function withPlaceholder(show: boolean, component, placeholder) {

	
	return show ? component : placeholder;
}
