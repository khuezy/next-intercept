## Repro

- `npm install`
- `npm run dev`
- go to localhost:3000/shop
- Click on `Go to cart`, route gets intercepted.
- Reload page, the `cart` page is loaded
- go back to localhost:3000/shop and click `Go to nested`, dynamic nested route works
- Reload page, see 404 page not found
