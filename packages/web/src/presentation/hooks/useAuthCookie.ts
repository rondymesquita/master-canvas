import { useState, useEffect } from 'react';
export default function () {
  const COOKIE_NAME = 'canvassessionid';

  const [cookie, setCookie] = useState<any>(null);

  const deleteCookie = () => {
    document.cookie = COOKIE_NAME + '=; Max-Age=-99999999;';
    setCookie('');
  };

  const fetchCookie = () => {
    const cookiesArray = document.cookie.split('; ');
    const cookieRegex = new RegExp(/(.*)=(.*)/);
    const record: Record<string, string> = {};
    cookiesArray.forEach((cookie: string) => {
      const key = cookieRegex.exec(cookie) ? cookieRegex.exec(cookie)![1] : '';
      const value = cookieRegex.exec(cookie)
        ? cookieRegex.exec(cookie)![2]
        : '';
      record[key] = value;
    });
    const rawCookie = record[COOKIE_NAME];
    if (rawCookie) {
      return JSON.parse(decodeURIComponent(rawCookie));
    }
    return null;
  };

  useEffect(() => {
    setCookie(fetchCookie());
  }, []);

  return { cookie, deleteCookie };
}
