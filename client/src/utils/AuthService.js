import Router from 'next/router'
import cookie from "react-cookie"
import classNames from 'classnames';

export const authenticate = async (req, res) => {
    const user = req ? req.user : getAuthUser();

    if (user) {
        return user;
    }
    //req ? res.redirect('/login') : Router.push('/login');
    if (req) {
        res.redirect('/login')
    } else {
        Router.push('/login');
        const classnames = classNames(
          { 'hold-transition': true },
          'login-page'
        );
        if (window) window.$('body').addClass(classnames);

    }
}

export const login = (token, user) => {
    cookie.save('token', token, { path: "/", maxAge: 24*60*60 });
    try {
        window.localStorage.setItem('user', JSON.stringify(user));
    } catch (err) {
        throw err;
    }
    Router.push('/');
    const classnames = classNames(
      { 'hold-transition': true },
      'skin-blue',
      { fixed: true },
      'sidebar-mini'
    );
    if (window) window.$('body').addClass(classnames);
}

export const logout = () => {
    window.localStorage.removeItem('user');
    cookie.remove('token', { path: "/" });
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.localStorage.setItem('logout', Date.now());
    Router.push('/');
}

export const getToken = () => {
    return cookie.load('token');
}

const getAuthUser = () => {
    try {
        return JSON.parse(window.localStorage.getItem('user'));
    } catch (err) {
        return null;
    }
}