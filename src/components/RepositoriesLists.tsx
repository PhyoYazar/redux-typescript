import React, { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

// import { useDispatch } from "react-redux";
// import { actionCreators } from "../store";

const RepositoriesLists: React.FC = () => {
  const [term, setTerm] = useState("");
  // const dispatch = useDispatch();
  // const { data, error, loading } = useTypedSelector(
  //   (state) => state.repositories
  // );

  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  // const onSubmitHanlder = (event: React.SyntheticEvent<HTMLFormElement>) => {
  const onSubmitHanlder = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //! This component isn't rerendering if click the 'Search' button

    //? This is data fetching with dispatch from hooks
    searchRepositories(term);
    // dispatch(actionCreators.searchRepositories(term));
  };

  return (
    <div>
      <form onSubmit={onSubmitHanlder}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>

      {error && <h3>{error}</h3>}
      {loading && <h3>Loading ...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesLists;
