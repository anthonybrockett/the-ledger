// API modules are where the code lives to communicate
// with the server via AJAX
import sendRequest from './send-request';
const BASE_URL = '/api/dates';

// Retrieve an unsaved date for the logged in user
export function getDay() {
    return sendRequest(`${BASE_URL}/day`);
}

export function getAllForUser() {
    return sendRequest(`${BASE_URL}/user`);
}

// This function is never actually used in SEI CAFE,
// it's only provided as an example of RESTful routing, etc.
// For example, you had a <MoviesDetailPage> component
// export function getById(id) {
//   return sendRequest(`${BASE_URL}/${id}`);
// }

export function saveDay(selectedDate) {
    // Changing data on the server, so make it a POST request
    console.log(selectedDate, "Testing Selected Date");
    return sendRequest(`${BASE_URL}/day/createDay`, 'POST', selectedDate);
}

// Add income to the day
export function addIncomeToDay(date, incomeData) {
    return sendRequest(`${BASE_URL}/day/income/${date}`, 'POST', incomeData);
}

// Add expense to the day
export function addExpenseToDay(date, expenseData) {
    return sendRequest(`${BASE_URL}/day/expense/${date}`, 'POST', expenseData);
}

// Delete Income
export function deleteIncome(id, incomeDate) {
    return sendRequest(`${BASE_URL}/day/income/${id}`, "DELETE", incomeDate);
}

// Update Income
export function updateIncome(incomeFormData, id, incomeDate) {
    return sendRequest(`${BASE_URL}/day/income/update/${id}`, "POST", ({incomeFormData, incomeDate}));
}

// Delete Expense
export function deleteExpense(id, expenseDate) {
    return sendRequest(`${BASE_URL}/day/expense/${id}`, "DELETE", expenseDate);
}

// Update Expense
export function updateExpense(expenseFormData, id, expenseDate) {
    return sendRequest(`${BASE_URL}/day/expense/update/${id}`, "POST", ({expenseFormData, expenseDate}));
}