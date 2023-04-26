INSERT INTO Customers (first_name, last_name, phone_number) VALUES
('John', 'Doe', '123-456-7890'),
('Jane', 'Smith', '234-567-8901'),
('Alice', 'Johnson', '345-678-9012'),
('Bob', 'Williams', '456-789-0123'),
('Charlie', 'Brown', '567-890-1234');

INSERT INTO Bikes (bike_type, rental_rate, status) VALUES
('Mountain', 10.00, 'available'),
('Road', 12.00, 'available'),
('Hybrid', 9.00, 'rented'),
('Electric', 15.00, 'available'),
('Cruiser', 8.00, 'maintenance');

INSERT INTO Rentals (customer_id, rental_date, return_date) VALUES
(1, '2023-04-21', NULL),
(2, '2023-04-20', '2023-04-22'),
(3, '2023-04-19', NULL),
(4, '2023-04-18', '2023-04-20'),
(5, '2023-04-17', NULL);

INSERT INTO Rental_Items (rental_id, bike_id, start_time, end_time) VALUES
(1, 1, '09:00:00', NULL),
(1, 2, '09:00:00', NULL),
(2, 3, '13:00:00', '16:00:00'),
(3, 4, '14:30:00', NULL),
(4, 5, '10:00:00', '12:00:00');

