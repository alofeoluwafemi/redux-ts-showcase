import { ActionType } from '../action-types';

export interface SearchRepositoryAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

export interface SearchRepositorySuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

export interface SearchRepositoryErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositoryAction
  | SearchRepositorySuccessAction
  | SearchRepositoryErrorAction;
