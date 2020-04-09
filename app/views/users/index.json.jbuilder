# json.array! @products, partial: "products/product", as: :product

json.array! @users do |user|
    json.id user.id
    json.name user.name
  end