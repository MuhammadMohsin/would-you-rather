import {
    _getUsers,
    _getQuestions,
    _saveQuestionAnswer,
    _saveQuestion,
} from '../utils/_DATA';

export async function getInitialData() {
    const users = await _getUsers();
    const questions = await _getQuestions();
    return {
        users,
        questions
    }
}

export function saveQuestionAnswer(info) {
    return _saveQuestionAnswer(info)
}

export function saveNewQuestion(question) {
    return _saveQuestion(question)
}