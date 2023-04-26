from tkinter import *
import tkinter.messagebox as MessageBox
import mysql.connector as mysql

root = Tk()
root.geometry("1080x720")
root.title("Employee Management GUI")


def insert():
    id = e_id.get()
    firstname = e_firstname.get();
    lastname = e_lastname.get();
    dob = e_dob.get();
    address = e_address.get();
    phnno = e_phnno.get();
    email = e_email.get();

    if(id =="" or firstname =="" or lastname = "" dob =="" address =="" phnno =="" email ==""):
        MessageBox.showinfo("All Fields are Required")
    else:
        con = mysql.connect(host="localhost", user="root", password="", database="employees")
        cusrsor = con.cursor()
        cusror.execute("insert into employees values('"+id+"','"+id+"','"+id+"','"+id+"','"+id+"','"+id+"','"+id+"',)")
        cursor.execute("commit");

        MessageBox.showinfo("Inserted Successfully");
        con.close();


id = Label(root,text="Enter Employee ID", font=('bold', 10))
id.place(x=20,y=30)

firstname = Label(root,text="Enter First Name", font=('bold', 10))
firstname.place(x=20,y=70)

lastname = Label(root,text="Enter Last Name", font=('bold', 10))
lastname.place(x=20,y=110)

dob = Label(root,text="Enter DOB", font=('bold', 10))
dob.place(x=20,y=150)

address = Label(root,text="Enter Address", font=('bold', 10))
address.place(x=20,y=190)

phnno = Label(root,text="Enter Phone no", font=('bold', 10))
phnno.place(x=20,y=230)

email = Label(root,text="Enter Email id", font=('bold', 10))
email.place(x=20,y=270)


e_id = Entry()
e_id.place(x=120,y=30)

e_firstname = Entry()
e_firstname.place(x=120,y=70)

e_lastname = Entry()
e_lastname.place(x=120,y=110)

e_dob = Entry()
e_dob.place(x=120,y=150)

e_address = Entry()
e_address.place(x=120,y=190)

e_phnno = Entry()
e_phnno.place(x=120,y=230)

e_email = Entry()
e_email.place(x=120,y=270)


insert = Button(root, text="insert", font=("italic", 10), bg="white", command = insert)
insert.place(x=20, y=140)
read = Button(root, text="Get", font=("italic", 10), bg="white", command = insert)
read.place(x=70, y=140)
update = Button(root, text="Update", font=("italic", 10), bg="white", command = insert)
update.place(x=120, y=140)
delete = Button(root, text="Delete", font=("italic", 10), bg="white", command = insert)
delete.place(x=170, y=140)

