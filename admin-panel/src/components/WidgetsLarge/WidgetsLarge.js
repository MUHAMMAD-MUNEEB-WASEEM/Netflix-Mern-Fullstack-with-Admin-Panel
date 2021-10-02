import React from 'react'
import './WidgetsLarge.css'

function WidgetsLarge() {

    const Button = ({type}) => (
        <button className={"widgetsLarge__button " + type}>{type}</button>
    )

    return (
        <div className="widgetsLarge">

            <h3 className="widgetsLarge__title">Latest Transactions</h3>
            
            <table className="widgetsLarge__table">

                <tr className="widgetsLarge__tr">
                    <th className="widgetsLarge__th">Customer</th>
                    <th className="widgetsLarge__th">Date</th>
                    <th className="widgetsLarge__th">Amount</th>
                    <th className="widgetsLarge__th">Status</th>
                </tr>

                <tr className="widgetsLarge__tr">
                    <td className="widgetsLarge__user">
                        <img className="widgetsLarge__img" src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                        <span className="widgetsLarge__name">Daisy</span>
                    </td>
                    <td className="widgetsLarge__date">27 Sep 2021</td>
                    <td className="widgetsLarge__amount">$122.00</td>
                    <td className="widgetsLarge__status">
                        <Button type="Approved"/>
                    </td>
                </tr>

                <tr className="widgetsLarge__tr">
                    <td className="widgetsLarge__user">
                        <img className="widgetsLarge__img" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                        <span className="widgetsLarge__name">Maria</span>
                    </td>
                    <td className="widgetsLarge__date">27 Sep 2021</td>
                    <td className="widgetsLarge__amount">$122.00</td>
                    <td className="widgetsLarge__status">
                        <Button type="Declined"/>
                    </td>
                </tr>

                <tr className="widgetsLarge__tr">
                    <td className="widgetsLarge__user">
                        <img className="widgetsLarge__img" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                        <span className="widgetsLarge__name">katty</span>
                    </td>
                    <td className="widgetsLarge__date">27 Sep 2021</td>
                    <td className="widgetsLarge__amount">$122.00</td>
                    <td className="widgetsLarge__status">
                        <Button type="Pending"/>
                    </td>
                </tr>

                <tr className="widgetsLarge__tr">
                    <td className="widgetsLarge__user">
                        <img className="widgetsLarge__img" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                        <span className="widgetsLarge__name">Lauren</span>
                    </td>
                    <td className="widgetsLarge__date">27 Sep 2021</td>
                    <td className="widgetsLarge__amount">$122.00</td>
                    <td className="widgetsLarge__status">
                        <Button type="Approved"/>
                    </td>
                </tr>
            
            </table>


        </div>
    )
}

export default WidgetsLarge
