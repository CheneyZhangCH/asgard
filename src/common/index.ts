import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import R from './fetch'
import router from './router'
import customValidator from './customValidator'
import { store, dispatch } from './store'
import qs from 'qs'
import Cookies from 'js-cookie'
export { Cookies, customValidator, Fragment, qs, React, ReactDom, R, router, store, dispatch }
