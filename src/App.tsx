import React from 'react';
import LoaderComponent from './components/Loader';
import ErrorComponent from './components/Error';
import SetsContainer from './containers/Sets';
import CardsContainer from './containers/Cards';
import CardContainer from './containers/Card';
import { selectErrorStatus, selectHasError, selectIsLoading } from './redux/selectors/app';

import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const hasError = useSelector(selectHasError);
  const errorStatus = useSelector(selectErrorStatus);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/sets" />} />
          <Route path="/sets" element={<SetsContainer />} />
          <Route path="/cards/:setCode" element={<CardsContainer />} />
          <Route path="/cards/card/:id" element={<CardContainer />} />
        </Routes>
      </BrowserRouter>
      {isLoading && <LoaderComponent />}
      {hasError && <ErrorComponent status={errorStatus} />}
    </div>
  );
};

export default App;
