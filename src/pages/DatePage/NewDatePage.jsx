import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import CalendarDetail from "../../components/CalendarDetail/CalendarDetail";
import "./Calendar.css";
import * as datesAPI from '../../utilities/dates-api';
import * as incomeItemsAPI from '../../utilities/income-items-api';

export default function NewDatePage() {

    const [date, setDate] = useState([]);
    const navigate = useNavigate();



    useEffect(function() {
        async function getDate() {
          const date = await datesAPI.getDate();
          setDate(date);
        }
        getDate();
      }, []);

 /*--- Event Handlers ---*/

 async function handleAddIncomeToDate(incomeId) {
  // 1. Call the addItemToCart function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named cart.
  const updatedDate = await datesAPI.addIncomeToDate(incomeId);
  // 2. Update the cart state with the updatedCart received from the server
  setDate(updatedDate);
  }

  // async function handleChangeQty(itemId, newQty) {
  //   const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
  //   setCart(updatedCart);
  // }

  async function handleSaveDate() {
    await datesAPI.saveDate();
    navigate('/calendar');
  }

  return (
    <main className="NewDatePage">
      <aside>
        <IncomeForm
          handleAddIncomeToDate={handleAddIncomeToDate}
        />
      </aside>
      {/* <ExpenseForm /> */}
      <CalendarDetail
        date={date}
        handleSaveDate={handleSaveDate}
      />
    </main>
  );
}