const initState = {
	todos: [
		{id: 1, name: 'Render static UI', isComplete: true},
		{id: 2, name: 'Render initial state', isComplete: true},
		{id: 3, name: 'Render based on state', isComplete: false},
	],
	currentTodo: 'fuk'
};

const CURRENT_UPDATE = 'CURRENT_UPDATE';
const TODO_ADD = 'TODO_ADD';

export const updateCurrent = (value) => (
	{type: CURRENT_UPDATE, payload: value}
)

export default (state = initState, action) => {
	switch (action.type) {
		case TODO_ADD:
			return {...state, todos: state.todos.concat(action.payload)};
		case CURRENT_UPDATE:
			return {...state, currentTodo: action.payload};
		default: 
			return state;
	}
}