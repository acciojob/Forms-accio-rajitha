// App.js
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/form-link" id="form-link">Form Layout</Link>
            </li>
            <li>
              <Link to="/form-ref-link" id="form-ref-link">Form with useRef</Link>
            </li>
            <li>
              <Link to="/form-state-link" id="form-state-link">Form with useState</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/form-link" element={<Form />} />
          <Route path="/form-ref-link" element={<FormRef />} />
          <Route path="/form-state-link" element={<FormState />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

/*
import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/form-link">Form Layout</Link>
            </li>
            <li>
              <Link to="/form-ref-link">Form with useRef</Link>
            </li>
            <li>
              <Link to="/form-state-link">Form with useState</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/form-link" element={<Form />} />
          <Route path="/form-ref-link" element={<FormRef />} />
          <Route path="/form-state-link" element={<FormState />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;


/*
import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/form-link">Form Layout</Link>
            </li>
            <li>
              <Link to="/form-ref-link">Form with useRef</Link>
            </li>
            <li>
              <Link to="/form-state-link">Form with useState</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/form-link">
            <Form />
          </Route>
          <Route path="/form-ref-link">
            <FormRef />
          </Route>
          <Route path="/form-state-link">
            <FormState />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
*/