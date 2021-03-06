import db from '../../config/database';
import {
  addTestCaseHelper,
  retrieveTestCaseHelper
} from './testCasesSQLHelpers';
import {
  success,
  error
} from '../../lib/log';

export const addTestCaseQuery = async (body) => {
  try {
    
    let data;
    for (let i = 0; i < body.content.length; i++) {
      const queryString = addTestCaseHelper({content: JSON.stringify(body.content[i]), challenge_id: body.challenge_id});
      data = await db.queryAsync(queryString);
    }
    success('addTestCaseQuery - successfully added test case ', data);
    return data;
  } catch (err) {
    error('addTestCaseQuery - error= ', err);
  }
};

export const retrieveTestCaseQuery = async (params) => {
  try {
    const queryString = retrieveTestCaseHelper(params);
    const data = await db.queryAsync(queryString);
    success('retrieveTestCaseQuery - successfully retrieved test cases ', data);
    return data;
  } catch (err) {
    error('retrieveTestCaseQuery - error= ', err)
  }
}