import React from 'react'
import './FeaturedInfo.css'

//material ui
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";


function FeaturedInfo() {
    return (
        <div className="featured">

            {/*First Item*/}

            <div className="featured__item">

                <span className="featured__title">Revenue</span>

                <div className="featuredMoney__container">

                    <span className="featured__money">$2,415</span>
                    <span className="featuredMoney__rate">
                        -11.4 <ArrowDownward className="featuredIcon negative"/>
                    </span>

                </div>

                <span className="featuredSub">
                    Compared to Last Month
                </span>

            </div>

            {/*Second Item*/}

            <div className="featured__item">

                <span className="featured__title">Sales</span>

                <div className="featuredMoney__container">

                    <span className="featured__money">$4,415</span>
                    <span className="featuredMoney__rate">
                        -1.4 <ArrowDownward className="featuredIcon negative"/>
                    </span>

                </div>

                <span className="featuredSub">
                    Compared to Last Month
                </span>

            </div>            
            
            {/*Third Item*/}

            <div className="featured__item">

                <span className="featured__title">Cost</span>

                <div className="featuredMoney__container">

                    <span className="featured__money">$2,225</span>
                    <span className="featuredMoney__rate">
                        +2.4 <ArrowUpward className="featuredIcon"/>
                    </span>

                </div>

                <span className="featuredSub">
                    Compared to Last Month
                </span>

            </div>

        </div>
    )
}

export default FeaturedInfo
 