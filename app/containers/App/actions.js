/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { SEARCH, CLOSE, SIGN_IN, CREATE_POST } from './constants';

export function search() {
  return {
    type: SEARCH,
  };
}

export function close() {
  return {
    type: CLOSE,
  };
}

export function signIn() {
  return {
    type: SIGN_IN,
  };
}

export function createPost() {
  return {
    type: CREATE_POST,
  }
}
