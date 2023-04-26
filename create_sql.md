CREATE TABLE Customers (
  customer_id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  phone_number VARCHAR(15) NOT NULL
);

CREATE TABLE Bikes (
  bike_id INT AUTO_INCREMENT PRIMARY KEY,
  bike_type VARCHAR(50) NOT NULL,
  rental_rate DECIMAL(5,2) NOT NULL,
  status ENUM('available', 'rented', 'maintenance') NOT NULL
);

CREATE TABLE Rentals (
  rental_id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT NOT NULL,
  rental_date DATE NOT NULL,
  return_date DATE,
  FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

CREATE TABLE Rental_Items (
  rental_item_id INT AUTO_INCREMENT PRIMARY KEY,
  rental_id INT NOT NULL,
  bike_id INT NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME,
  FOREIGN KEY (rental_id) REFERENCES Rentals(rental_id),
  FOREIGN KEY (bike_id) REFERENCES Bikes(bike_id)
);
