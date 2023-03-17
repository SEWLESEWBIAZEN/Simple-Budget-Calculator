import React, { useState, useEffect } from 'react';
import './App.css';
import uuid from 'react-uuid'
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import Alert from '../components/Alert';

const intialExpenses = localStorage.getItem("expenses")
    ? JSON.parse(localStorage.getItem("expenses")) : [];


function App()
{

    const [expenses, setExpenses] = useState(intialExpenses);
    const [charge, setCharge] = useState('');
    const [amount, setAmount] = useState("");
    const [alert, setAlert] = useState({ show: false });
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState(0);
    //useEffect
    useEffect(() =>
    {
        console.log('wecalled use effect');
        localStorage.setItem("expenses",
            JSON.stringify(expenses));
    }, [expenses]);

    //handle charge
    const handleCharge = e =>
    {

        setCharge(e.target.value);
    };
    //handle amount

    const handleAmount = e =>
    {

        setAmount(e.target.value);
    };
    //handle alert functionality

    const handleAlert = ({ type, text }) =>
    {
        setAlert({ show: true, type, text });
        setTimeout(() =>
        {
            setAlert({ show: false })
        }, 3000)

    }
    //handle submit button

    const handleSubmit = e =>
    {
        e.preventDefault();
        if (charge !== "" && amount > 0)
        {
            if (edit)
            {
                let tempExpenses = expenses.map((item) =>
                {
                    return item.id === id ? { ...item, charge, amount } : item;
                });
                setExpenses(tempExpenses);
                handleAlert({ type: 'success', text: "item Edited" });

                setEdit(false);

            }
            else
            {
                const singleExpense = { id: uuid(), charge, amount };
                setExpenses([...expenses, singleExpense]);
                handleAlert({ type: 'success', text: "item Added" });
            }
            setCharge("");
            setAmount("");

        }
        else
        {
            handleAlert({
                type: 'danger',
                text: `charge can not be empty value and
         amount value has to be greater than zero`
            });

        }
    };
    //clear all items

    const clearItems = () =>
    {
        console.log("cleared all items");
        setExpenses([]);
        setAlert({ show: true, type: 'success', text: 'All Items are cleared!' });
    }
    //handle delete
    const handleDelete = (id) =>
    {
        const remainingExpenses = expenses.filter((expense) =>
        {
            return expense.id !== id;
        })
        setExpenses(remainingExpenses);
        setAlert({
            show: true,
            type: 'danger',
            text: `Item with an id ${id} has been deleted`
        })

    }

    //handle edit
    const handleEdit = (id) =>
    {
        let expense = expenses.find((item) => item.id === id);
        let { charge, amount } = expense;
        setCharge(charge);
        setAmount(amount);
        setEdit(true);
        setId(id);
    }


    return (
        <div className='container1'>
            {alert.show && <Alert type={alert.type} text={alert.text} />}
            <Alert />
            <h1> Budget Calculator</h1>
            <main className="App">
                <ExpenseForm
                    charge={charge}
                    amount={amount}
                    handleCharge={handleCharge}
                    handleAmount={handleAmount}
                    handleSubmit={handleSubmit}
                    edit={edit} />
                <ExpenseList expenses={expenses}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    clearItems={clearItems} />
            </main>
            <h1>
                Total Spending:{" "}
                <span className="total" style={{ margin: '7px' }}>
                    $
                    {expenses.reduce((acc, curr) =>
                    {
                        return (acc += parseInt(curr.amount));
                    }, 0)}

                </span>
            </h1>





        </div>
    );
}

export default App;
