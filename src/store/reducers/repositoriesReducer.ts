import { Action } from "../actions";
import { ActionType } from "../action-types";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      //* 100% certain that 'action' is SearchRepositoriesAction
      return { loading: true, error: null, data: [] };

    case ActionType.SEARCH_REPOSITORIES_SUCCES:
      //* 100% certain that 'action' is SearchRepositoriesSuccessAction
      return { loading: false, error: null, data: action.payload };

    case ActionType.SEARCH_REPOSITORIES_ERROR:
      //* 100% certain that 'action' is SearchRepositoriesErrorAction
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default reducer;
