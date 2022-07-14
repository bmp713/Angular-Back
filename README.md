
PAIGE PRODUCTS DASHBOARD

Description:
Dashboard for editing and deleting product information

Technology:
Angular and Node Express

INSTRUCTIONS

1) To run App clone Paige-Front and Paige-Back repositories into separate directories
https://github.com/bmp713/Paige-Front.git
https://github.com/bmp713/Paige-Back.git

2) cd into root directory for both

3) run npm i for both

4) run npm start for Paige-back

5) run ng serve --open for Paige-front

Paige front end should open in browser displaying all products

FEATURES

- All content is mobile responsive for all devices

- Products are loaded from Paige-Back/products.json
- Products can be filtered without refresh by exact product name, type, and color with results displaying
- Filters can be cleared with Clear button
- Pagination for next 10 products

- Edit product routes to Product Details page where product name, type, color, price, and description can be updated
- Product page has form validation for each field character length, and if filled in
- Delete product button was moved to product details to prevent accidental deletes
