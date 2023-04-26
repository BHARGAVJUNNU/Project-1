Create database Employees;


CREATE TABLE Department (
  Department_ID INT PRIMARY KEY,
  Department_Name VARCHAR(50)
);


CREATE TABLE Employee (
  Employee_ID INT PRIMARY KEY,
  First_Name VARCHAR(50),
  Last_Name VARCHAR(50),
  Date_of_Birth DATE,
  Address VARCHAR(100),
  Phone_Number VARCHAR(20),
  Email_Address VARCHAR(100),
  Department_ID INT,
  FOREIGN KEY (Department_ID) REFERENCES Department(Department_ID) ON DELETE CASCADE
);


CREATE TABLE Salary (
  Salary_ID INT PRIMARY KEY,
  Employee_ID INT,
  Salary DECIMAL(10,2),
  Start_Date DATE,
  End_Date DATE,
  FOREIGN KEY (Employee_ID) REFERENCES Employee(Employee_ID) ON DELETE CASCADE
);


CREATE TABLE Attendance (
  Attendance_ID INT PRIMARY KEY,
  Employee_ID INT,
  Date DATE,
  Hours_Worked DECIMAL(5,2),
  FOREIGN KEY (Employee_ID) REFERENCES Employee(Employee_ID) ON DELETE CASCADE
);


INSERT INTO Department VALUES (1, 'Sales');
INSERT INTO Department VALUES (2, 'Engineering');
INSERT INTO Department VALUES (3, 'Marketing');


INSERT INTO Employee VALUES (1, 'John', 'Doe', '1980-01-01', '123 Main St', '555-1234', 'john.doe@gmail.com', 1);
INSERT INTO Employee VALUES (2, 'Jane', 'Smith', '1985-02-02', '456 Oak St', '555-5678', 'jane.smith@gmail.com', 1);
INSERT INTO Employee VALUES (3, 'Bob', 'Johnson', '1990-03-03', '789 Pine St', '555-9012', 'bob.johnson@gmail.com', 2);
INSERT INTO Employee VALUES (4, 'Mary', 'Brown', '1995-04-04', '321 Maple St', '555-3456', 'mary.brown@gmail.com', 2);
INSERT INTO Employee VALUES (5, 'Alice', 'Davis', '2000-05-05', '654 Elm St', '555-7890', 'alice.davis@gmail.com', 3);


INSERT INTO Salary VALUES (1, 1, 50000.00, '2020-01-01', '2020-12-31');
INSERT INTO Salary VALUES (2, 2, 60000.00, '2020-01-01', '2020-12-31');
INSERT INTO Salary VALUES (3, 3, 70000.00, '2020-01-01', '2020-12-31');
INSERT INTO Salary VALUES (4, 4, 80000.00, '2020-01-01', '2020-12-31');
INSERT INTO Salary VALUES (5, 5, 90000.00, '2020-01-01', '2020-12-31');


INSERT INTO Attendance VALUES (1, 1, '2020-01-01', 8.0);
INSERT INTO Attendance VALUES (2, 1, '2020-01-02', 8.0);
INSERT INTO Attendance VALUES (3, 1, '2020-01-03', 8.0);
INSERT INTO Attendance VALUES (4, 2, '2020-01-01', 7.5);
INSERT INTO Attendance VALUES (5, 2, '2020-01-02', 7.5);


select * from Department;
select * from Employee;
select * from Salary;
select * from Attendance;