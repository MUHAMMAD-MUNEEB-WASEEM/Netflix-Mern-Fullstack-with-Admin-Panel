import React from 'react'
import './WidgetsSmall.css'

//material ui
import { Visibility } from "@material-ui/icons";

function WidgetsSmall() {
    return (
        <div className="widgetsSmall">
            <span className="widgetsSmall__title">New Join Members</span>
           
            <ul className="widgetsSmall__list">

                {/*First User*/}

                <li className="widgetsSmallList__item">
                    <img className="widgetSmall__img" src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />

                    <div className="widgetsSmall__user">
                        <span className="widgetsSmallList__username">John Smith</span>
                        <span className="widgetsSmallList__title">Electrical Engineer</span>   
                    </div>
                    <button className="widgetsSmall__button">
                        <Visibility className="widgetSmall__icon" />
                        Display
                    </button>
                                    
                </li>

                {/*Second user*/}
    
                <li className="widgetsSmallList__item">
                    <img className="widgetSmall__img" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />

                    <div className="widgetsSmall__user">
                        <span className="widgetsSmallList__username">John Smith</span>
                        <span className="widgetsSmallList__title">Electrical Engineer</span>   
                    </div>
                    <button className="widgetsSmall__button">
                        <Visibility className="widgetSmall__icon" />
                        Display
                    </button>
                                    
                </li>

                {/*Third User*/}

                <li className="widgetsSmallList__item">
                    <img className="widgetSmall__img" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />

                    <div className="widgetsSmall__user">
                        <span className="widgetsSmallList__username">John Smith</span>
                        <span className="widgetsSmallList__title">Electrical Engineer</span>   
                    </div>
                    <button className="widgetsSmall__button">
                        <Visibility className="widgetSmall__icon" />
                        Display
                    </button>
                                    
                </li>

                {/*Fourth User*/}

                <li className="widgetsSmallList__item">
                    <img className="widgetSmall__img" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />

                    <div className="widgetsSmall__user">
                        <span className="widgetsSmallList__username">John Smith</span>
                        <span className="widgetsSmallList__title">Electrical Engineer</span>   
                    </div>
                    <button className="widgetsSmall__button">
                        <Visibility className="widgetSmall__icon" />
                        Display
                    </button>
                                    
                </li>

                {/*Fifth User*/}

                <li className="widgetsSmallList__item">
                    <img className="widgetSmall__img" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />

                    <div className="widgetsSmall__user">
                        <span className="widgetsSmallList__username">John Smith</span>
                        <span className="widgetsSmallList__title">Electrical Engineer</span>   
                    </div>
                    <button className="widgetsSmall__button">
                        <Visibility className="widgetSmall__icon" />
                        Display
                    </button>
                                    
                </li>



            </ul>

        </div>
    )
}

export default WidgetsSmall
