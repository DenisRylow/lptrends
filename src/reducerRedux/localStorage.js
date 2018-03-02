export function getRecordsFromLocal() {
	var savedRecords = JSON.parse(localStorage.getItem('lptrends_saved_state'));
	console.log('Getting records from localStorage', savedRecords)
	if (savedRecords === null) {
		savedRecords = [];
	};
	return savedRecords;
}

export function writeRecordsToLocal(state) {
	const savedState = JSON.stringify(state.records);
	localStorage.setItem('lptrends_saved_state', savedState);
}