import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import MenuConfig from './components/MenuConfig/MenuConfig';
import IndexPage from './routes/IndexPage';
import TableIndex from './routes/TableIndex/TableIndex';
import Products from './routes/Products';

export default function({ history }) {
  return (
    <Router history={history}>
        <Route path="/" component={MenuConfig}>
            <IndexRoute component={IndexPage}/>
            <Route path="/table" component={TableIndex} />
            <Route path="/products" component={Products} />
        </Route>       
    </Router>
  );
};
