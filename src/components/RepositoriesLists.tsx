import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesLists: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state: any) => state.repositories
  );

  const onSubmitHanlder = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //* This is data fetching with dispatch from hooks
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmitHanlder}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesLists;
