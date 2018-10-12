DELETE FROM product WHERE product_id = ${product_id}
returning *;