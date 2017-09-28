# next-ololos-blog 

[![Greenkeeper badge](https://badges.greenkeeper.io/RIP21/next-ololos-blog.svg)](https://greenkeeper.io/)  

Ololos-blog is a travel blog I wrote for learning purposes, now it's mine sort of playground for learning and trying new tech.

If you have any questions about the code and tech, please ask in issues section :) 

The project made of `React`, `next.js`, `Redux`, `styled-components` and `react-semantic-ui`. 

From next.js part, it uses: 
- Custom express server with custom parameterized routes
- styled-components instead of original styled-jsx
- redux async fetching
- meta info injection for better CEO
- A few semantic HTML tags so it will be better parsable by bots
- `withAuth` high-order-component for providing auth redirects if not authorized
- Google analytics integration

Backend part: https://github.com/RIP21/ololos-blog-react-redux-universal/tree/master/backend


Dev tooling installed:
- Prettier
- ESlint
- Stylelint
- Jest

To build:
```
yarn build
```
Then to run in production:
```
yarn start
```

To run in develop:
```
yarn dev
```

