// import Hello from '../components/Hello'
// import State from '../components/State'
import Index from '../components/Index'
// import News from '../components/News'
import Login from '../components/Login'
import Logout from '../components/Logout'
import Regist from '../components/Regist'
import Me from '../components/Me'
import Maps from '../components/Map'

import Contribute from '../components/Contribute'
import ContributeIndex from '../components/Contribute/indexComp'
import ContributeSignup from '../components/Contribute/signup'

import Activity from '../components/Activity'
import Signup from '../components/Activity/signup'
import IndexComp from '../components/Activity/indexComp'

import News from '../components/News'
import NewsSignup from '../components/News/signup'
import NewsIndexComp from '../components/News/indexComp'

export default [
  {
    path: '/',
    name: 'index',
    component: Index
  }, {
    path: '/map',
    name: 'map',
    component: Maps
  }, {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresAuth: false
    }
  }, {
    path: '/logout',
    name: 'logout',
    component: Logout,
    meta: {
      requiresAuth: true
    }
  }, {
    path: '/regist',
    name: 'regist',
    component: Regist
  }, {
    path: '/contribute',
    component: Contribute,
    children: [
      {
        path: '',
        component: ContributeIndex
      }, {
        path: 'signup',
        name: 'contributeSignup',
        component: ContributeSignup,
        meta: {
          requiresAuth: true
        }
      }
    ]
  }, {
    path: '/activity',
    component: Activity,
    children: [
      {
        path: '',
        component: IndexComp
      }, {
        path: 'signup',
        name: 'signup',
        component: Signup,
        meta: {
          requiresAuth: true
        }
      }
    ]
  }, {
    path: '/news',
    component: News,
    children: [
      {
        path: '',
        component: NewsIndexComp
      }, {
        path: 'signup',
        name: 'newsUpload',
        component: NewsSignup,
        meta: {
          requiresAuth: true
        }
      }
    ]
  }, {
    path: '/me',
    name: 'me',
    component: Me,
    meta: {
      requiresAuth: true
    }
  }
]
