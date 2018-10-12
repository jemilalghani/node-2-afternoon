UPDATE product SET description = ${description} WHERE product_id = ${product_id}
returning *;