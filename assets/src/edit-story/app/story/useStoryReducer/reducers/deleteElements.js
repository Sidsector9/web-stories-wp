/**
 * Internal dependencies
 */
import { intersect } from './utils';

/**
 * Delete elements by the given list of ids.
 * If given list of ids is `null`, delete all currently selected elements.
 *
 * Elements will be deleted on the current page only.
 *
 * If an element id does not correspond do an element on the current page, id is ignored.
 *
 * If an empty list or a list of only unknown ids is given, state is unchanged.
 *
 * If any id to delete is in current selection, deleted ids are removed from selection.
 * Otherwise selection is unchanged.
 *
 * Current page is unchanged.
 *
 * @param {Object} state Current state
 * @param {Object} payload Action payload
 * @param {Array.<string>} payload.elementIds List of ids of elements to delete.
 * @return {Object} New state
 */
function deleteElements( state, { elementIds } ) {
	const idsToDelete = elementIds === null ? state.selection : elementIds;

	if ( idsToDelete.length === 0 ) {
		return state;
	}

	const pageIndex = state.pages.find( ( { id } ) => id === state.current );

	const oldPage = state.pages[ pageIndex ];
	const pageElementIds = oldPage.elements.map( ( { id } ) => id );

	// Nothing to delete?
	if ( ! intersect( pageElementIds, idsToDelete ) ) {
		return state;
	}

	const filteredElements = oldPage.elements.filter( ( element ) => ! idsToDelete.includes( element.id ) );

	const newPage = {
		...oldPage,
		elements: filteredElements,
	};

	const newPages = [
		...state.pages.slice( 0, pageIndex ),
		newPage,
		...state.pages.slice( pageIndex + 1 ),
	];

	// This check is to make sure not to modify the selection array if no update is necessary.
	const wasAnySelected = intersect( state.selection, idsToDelete );
	const newSelection = wasAnySelected ?
		state.selection.filter( ( id ) => ! idsToDelete.includes( id ) ) :
		state.selection;

	return {
		...state,
		pages: newPages,
		selection: newSelection,
	};
}

export default deleteElements;
