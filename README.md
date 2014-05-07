socket.io-session-mobile
---

Express and Connect both use cookies to maintain session information. Unfortunately, mobile operating systems like Android and iOS don't handle cookies well. Even browser based mobile frameworks, like Cordova/PhoneGap [don't support cookies](http://community.phonegap.com/nitobi/topics/authentication_session_cookies_in_android).

This Node module allows a user to generate a fake cookie client side, and have it validate server side. The module will then merge the Express and Socket.IO session so it can be used in either place.

Usage instructions are forthcoming.

**This library is considered Alpha level and shouldn't be used in production.**

Author
---
Alan James: [alanjames1987@gmail.com](mailto:alanjames1987@gmail.com)

License
---
Licensed under [MIT](https://github.com/alanjames1987/marilynjs/blob/master/LICENSE).