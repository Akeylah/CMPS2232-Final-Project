CREATE TYPE Users_role_enum AS ENUM (
    'customer',
    'admin'
);

CREATE TYPE Orders_order_type_enum AS ENUM (
    'pickup',
    'delivery'
);

CREATE TYPE Orders_status_enum AS ENUM (
    'pending',
    'preparing',
    'ready',
    'completed',
    'cancelled'
);

CREATE TYPE Payments_method_enum AS ENUM (
    'cash_on_delivery',
    'pickup_payment'
);

CREATE TYPE Payments_payment_status_enum AS ENUM (
    'pending',
    'paid'
);


--tables
CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role Users_role_enum NOT NULL
);

CREATE TABLE MenuItems (
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(50),
    image_url VARCHAR(255)
);

CREATE TABLE Cart (
    cart_id SERIAL PRIMARY KEY,
    user_id INT UNIQUE,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

CREATE TABLE CartItems (
    cart_item_id SERIAL PRIMARY KEY,
    cart_id INT,
    item_id INT,
    quantity INT NOT NULL,
    FOREIGN KEY (cart_id) REFERENCES Cart(cart_id) ON DELETE CASCADE,
    FOREIGN KEY (item_id) REFERENCES MenuItems(item_id)
);

CREATE TABLE Orders (
    order_id SERIAL PRIMARY KEY,
    user_id INT,
    order_type Orders_order_type_enum NOT NULL,
    status Orders_status_enum DEFAULT 'pending',
    total_price DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE OrderItems (
    order_item_id SERIAL PRIMARY KEY,
    order_id INT,
    item_id INT,
    quantity INT,
    price DECIMAL(10,2),
    FOREIGN KEY (order_id) REFERENCES Orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (item_id) REFERENCES MenuItems(item_id)
);

CREATE TABLE DeliveryDetails (
    delivery_id SERIAL PRIMARY KEY,
    order_id INT UNIQUE,
    address VARCHAR(255),
    delivery_fee DECIMAL(10,2),
    FOREIGN KEY (order_id) REFERENCES Orders(order_id) ON DELETE CASCADE
);

CREATE TABLE Payments (
    payment_id SERIAL PRIMARY KEY,
    order_id INT,
    method Payments_method_enum NOT NULL,
    payment_status Payments_payment_status_enum DEFAULT 'pending',
    FOREIGN KEY (order_id) REFERENCES Orders(order_id) ON DELETE CASCADE
);