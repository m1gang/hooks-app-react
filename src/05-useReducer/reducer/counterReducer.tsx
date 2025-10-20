export type MathAction =
    | { type: 'ADD' }
    | { type: 'RESET' }
    | { type: 'LESS' }

export const counterReducer = (state: number, action: MathAction): number => {
    switch (action.type) {
        case 'ADD':
            return state + 1;

        case 'RESET':
            return 0;

        case 'LESS':
            return state - 1;

        default:
            return state;
    }
}