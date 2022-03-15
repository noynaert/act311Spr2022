# Notes on web scraping in node.js

Reference: [https://dev.to/code_jedi/web-scraping-in-nodejs-2lkf](https://dev.to/code_jedi/web-scraping-in-nodejs-2lkf)

```bash
npm install puppeteer
```

## Post data

```bash
curl -d "course_numbr=&subject=ALL&department=HON&display_closed=yes&course-type=all" -X POST  https://aps4.missouriwestern.edu/schedule/Default.asp?tck=202220 > test.html
```

## jssoup??

Would JSSoup be a better alternative to puppeter?  [a href="https://www.npmjs.com/package/jssoup"](https://www.npmjs.com/package/jssoup)
