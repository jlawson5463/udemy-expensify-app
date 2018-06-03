export default (expenses = []) => {
    console.log('expenses =' + expenses)
    return expenses
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + value, 0); // gets sum of all amounts in expenses array
}

