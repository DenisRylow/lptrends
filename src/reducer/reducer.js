
const addDeleteRecord = (state = {records: []}, action) => {
	switch (action.type) {
		case 'ADD_RECORD':
			return {
				records: state.records.concat([action.record])
			}
		case 'DELETE_RECORD':
			return {
				records: state.records.filter(function (item, index) {
						return index == action.id ? false : true;
					})
			}
		default:
			return state
	}
};

export default addDeleteRecord;