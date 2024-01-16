# Project: online food

## Description : online food api is a simple express api to presenting in university

# 📁 Collection: authentication

## End-point: register

### Method: POST

> ```
> http://localhost:3000/api/v1/authentication/register
> ```

### Body (**raw**)

```json
{
  "username": "diamond",
  "fullname": "علی الماسی",
  "password": "123456",
  "confirmPassword": "123456",
  "address": "مشهد"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: login

### Method: POST

> ```
> http://localhost:3000/api/v1/authentication/login
> ```

### Body (**raw**)

```json
{
  "username": "diamond",
  "password": "123456"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get user information

### Method: GET

> ```
> http://localhost:3000/api/v1/authentication
> ```

### Headers

| Content-Type | Value                                                                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accesstoken  | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkFkbWluIiwiaWF0IjoxNzAyMDY4MTA3LCJleHAiOjE3MDIxNTQ1MDd9.s7MBkhvj5V87VT_nhz_86P8x9DY02I96JXfQE48y5gc |

### Body (**raw**)

```json

```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: food

## End-point: getFoods

### Method: GET

> ```
> http://localhost:3000/api/v1/food
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: addFood

### Method: POST

> ```
> http://localhost:3000/api/v1/food/admin
> ```

### Headers

| Content-Type | Value                                                                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accesstoken  | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkFkbWluIiwiaWF0IjoxNzAyMDQzOTM4LCJleHAiOjE3MDIxMzAzMzh9.tiSo01-nQLm4dCV_4M_NsX0ZRWpuMrk2t9wejXlVeU4 |

### Body (**raw**)

```json
{
  "name": "سالاد سزار",
  "price": 12000,
  "availableCount": 12,
  "description": "سالاد سزار با سبزیجات و مرغ تازه و سس مخصوص مجموعه"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: update price food

### Method: PATCH

> ```
> http://localhost:3000/api/v1/food/admin/price/2
> ```

### Headers

| Content-Type | Value                                                                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accesstoken  | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkFkbWluIiwiaWF0IjoxNzAwNjg3OTg5LCJleHAiOjE3MDA3NzQzODl9.NSqZaWdEkF9Wq-eKootFGiEdVSldU5LvYKep1_sTV2w |

### Body (**raw**)

```json
{
  "price": 1235
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: update available count

### Method: PATCH

> ```
> http://localhost:3000/api/v1/food/admin/available-count/2
> ```

### Headers

| Content-Type | Value                                                                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accesstoken  | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkFkbWluIiwiaWF0IjoxNzAwNjg3OTg5LCJleHAiOjE3MDA3NzQzODl9.NSqZaWdEkF9Wq-eKootFGiEdVSldU5LvYKep1_sTV2w |

### Body (**raw**)

```json
{
  "availableCount": 2
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: deleteFood

### Method: DELETE

> ```
> http://localhost:3000/api/v1/food/admin/1
> ```

### Headers

| Content-Type | Value                                                                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accesstoken  | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkFkbWluIiwiaWF0IjoxNzAwNzQxMTM3LCJleHAiOjE3MDA4Mjc1Mzd9.urmmY0sdDP8Dl9yDHcJEL_5p5Kj6DuWJ1xt6KSvvyIY |

### Body (**raw**)

```json

```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: order

## End-point: get orders by admin

### Method: GET

> ```
> http://localhost:3000/api/v1/order/admin
> ```

### Headers

| Content-Type | Value                                                                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accesstoken  | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkFkbWluIiwiaWF0IjoxNzAwODIzNDgyLCJleHAiOjE3MDA5MDk4ODJ9.fM6uF0OaxLQCA7gfJiwzZCZJxIm1gXxaYIQby9FuFoM |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: approve order by admin

### Method: POST

> ```
> http://localhost:3000/api/v1/order/admin/approve-order
> ```

### Headers

| Content-Type | Value                                                                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accesstoken  | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkFkbWluIiwiaWF0IjoxNzAwODIzNDgyLCJleHAiOjE3MDA5MDk4ODJ9.fM6uF0OaxLQCA7gfJiwzZCZJxIm1gXxaYIQby9FuFoM |

### Headers

| Content-Type | Value |
| ------------ | ----- |
| accesstoken  |       |

### Body (**raw**)

```json
{
  "orderId": 7
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get my order

### Method: GET

> ```
> http://localhost:3000/api/v1/order/my-order
> ```

### Headers

| Content-Type | Value                                                                                                                                                           |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accesstoken  | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6Ik5vcm1hbCIsImlhdCI6MTcwMDgwMjcwMiwiZXhwIjoxNzAwODg5MTAyfQ.ANiy1hNV92ycEPaq_iLbZ-6QyojrtGtlfJeelhJMRIw |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: pay order

### Method: POST

> ```
> http://localhost:3000/api/v1/order/pay-order
> ```

### Headers

| Content-Type | Value                                                                                                                                                           |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accesstoken  | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6Ik5vcm1hbCIsImlhdCI6MTcwMDgwMjcwMiwiZXhwIjoxNzAwODg5MTAyfQ.ANiy1hNV92ycEPaq_iLbZ-6QyojrtGtlfJeelhJMRIw |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get my cart

### Method: GET

> ```
> http://localhost:3000/api/v1/order/my-cart
> ```

### Headers

| Content-Type | Value                                                                                                                                                           |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accesstoken  | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6Ik5vcm1hbCIsImlhdCI6MTcwMDgwMjcwMiwiZXhwIjoxNzAwODg5MTAyfQ.ANiy1hNV92ycEPaq_iLbZ-6QyojrtGtlfJeelhJMRIw |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: add to cart

### Method: POST

> ```
> http://localhost:3000/api/v1/order/add-to-cart
> ```

### Headers

| Content-Type | Value                                                                                                                                                           |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accesstoken  | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6Ik5vcm1hbCIsImlhdCI6MTcwMDgwMjcwMiwiZXhwIjoxNzAwODg5MTAyfQ.ANiy1hNV92ycEPaq_iLbZ-6QyojrtGtlfJeelhJMRIw |

### Body (**raw**)

```json
{
  "foodId": 4
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: remove from cart

### Method: POST

> ```
> http://localhost:3000/api/v1/order/remove-from-cart
> ```

### Headers

| Content-Type | Value                                                                                                                                                           |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accesstoken  | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6Ik5vcm1hbCIsImlhdCI6MTcwMDgwMjcwMiwiZXhwIjoxNzAwODg5MTAyfQ.ANiy1hNV92ycEPaq_iLbZ-6QyojrtGtlfJeelhJMRIw |

### Body (**raw**)

```json
{
  "foodId": 3
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: upload

## End-point: upload food image

### Method: POST

> ```
> http://localhost:3000/api/v1/admin/upload/food-image
> ```

### Headers

| Content-Type | Value                                                                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accesstoken  | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkFkbWluIiwiaWF0IjoxNzAyMDYxMTA5LCJleHAiOjE3MDIxNDc1MDl9.GeO7IZtm6bvpjcfB_Y8BHB7Y7E_0lzO6NvoGMU5b_Xg |

### Body formdata

| Param     | value                               | Type |
| --------- | ----------------------------------- | ---- |
| foodId    | 1                                   | text |
| foodImage | /C:/Users/resas/Desktop/images.jpeg | file |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: upload default food image

### Method: POST

> ```
> http://localhost:3000/api/v1/admin/upload/default-food-image
> ```

### Headers

| Content-Type | Value                                                                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accesstoken  | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkFkbWluIiwiaWF0IjoxNzAyMDYxMTA5LCJleHAiOjE3MDIxNDc1MDl9.GeO7IZtm6bvpjcfB_Y8BHB7Y7E_0lzO6NvoGMU5b_Xg |

### Body formdata

| Param        | value                                | Type |
| ------------ | ------------------------------------ | ---- |
| defaultImage | /C:/Users/resas/Desktop/download.png | file |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

---

Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
