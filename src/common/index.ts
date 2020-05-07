import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import R from './fetch';
import router from './router';
import customValidator from './customValidator';
import store, { DispatchType, RootStateType, dispatch } from './store'

export { customValidator, Fragment, React, ReactDom, R, router, store, dispatch };
