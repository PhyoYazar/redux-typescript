enum ActionType {
  SEARCH_REPOSITORIES = "search_repositories",
  SEARCH_REPOSITORIES_SUCCES = "search_repositories_success",
  SEARCH_REPOSITORIES_ERROR = "search_repositories_error",
}

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCES;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;

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
