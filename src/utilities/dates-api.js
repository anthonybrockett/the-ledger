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
export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function saveDay() {
    // Changing data on the server, so make it a POST request
    return sendRequest(`${BASE_URL}/day/createDay`, 'POST');
}

// Add income to the day
export function addIncomeToDay(incomeId) {
    // Just send itemId for best security (no pricing)
    return sendRequest(`${BASE_URL}/day/income/${incomeId}`, 'POST');
}

// Add expense to the day
export function addExpenseToDay(expenseId) {
    // Just send itemId for best security (no pricing)
    return sendRequest(`${BASE_URL}/day/expense/${expenseId}`, 'POST');
}