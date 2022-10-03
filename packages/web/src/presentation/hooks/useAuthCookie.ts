import { useState, useEffect } from 'react';
export default function () {
  const COOKIE_NAME = 'canvasauth';
  // const [cookies, setCookies] = useState<any>(null);
  const cookiesArray = document.cookie.split('; ');
  const cookieRegex = new RegExp(/(.*)=(.*)/);
  const record: Record<string, string> = {};
  cookiesArray.forEach((cookie: string) => {
    const key = cookieRegex.exec(cookie)![1];
    const value = cookieRegex.exec(cookie)![2];
    record[key] = value;
  });

  const deleteCookie = () => {
    document.cookie = COOKIE_NAME + '=; Max-Age=-99999999;';
  };

  const authCookie = record[COOKIE_NAME];
  // setCookies(record);
  let cookie;
  if (authCookie) {
    cookie = JSON.parse(decodeURIComponent(authCookie));
  }
  return { cookie, deleteCookie };
}
