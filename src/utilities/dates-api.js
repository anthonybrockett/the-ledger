// API modules are where the code lives to communicate
// with the server via AJAX
import sendRequest from './send-request';
const BASE_URL = '/api/dates';

// Retrieve an unsaved date for the logged in user
export function getDate() {
    return sendRequest(`${BASE_URL}/date`);
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

export function createDate() {
    // Changing data on the server, so make it a POST request
    return sendRequest(`${BASE_URL}`, 'POST');
}