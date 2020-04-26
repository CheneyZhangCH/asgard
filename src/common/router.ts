import { history } from 'umi';
import hotkeys from 'hotkeys-js';

export interface MyRouteData extends RouteData {
  onEditContentFinish?: Function;
}

const push = (path: string) => {
  if (
    hotkeys.isPressed(224) ||
    hotkeys.isPressed(91) ||
    hotkeys.isPressed(17)
  ) {
    const w = window.open(path as string, '_blank');
    if (w) {
      w.focus();
    }
    return w;
  } else {
    return history.push(path);
  }
};

const replace = (path: string) => {
  return history.replace(path);
};

const go = (count: number) => {
  return history.go(count);
};

const goBack = () => {
  return history.goBack();
};

const gotoLogin = () => {
  if (location.pathname === '/login') {
    history.replace('/login');
  } else {
    const redirectPath = location.href.replace(
      `${location.protocol}//${location.host}`,
      '',
    );
    history.replace(`/login?redirect=${redirectPath}`);
  }
};

export default { push, replace, go, goBack, gotoLogin };
