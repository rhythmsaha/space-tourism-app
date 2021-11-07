import Header from "../Header";
import classes from "./DestinationPage.module.scss";

import { destination } from "../../data";
import { useState } from "react";

const DestinationPage = () => {
    const [activeTab, setActiveTab] = useState(0);

    const changeActive = (i) => {
        setActiveTab(i);
    };

    return (
        <div className={classes.Main}>
            <Header />

            <div className={classes.body}>
                <div className={classes.content}>
                    <div className={classes.Heading}>
                        <span>01</span> PICK YOUR DESTINATION
                    </div>

                    <div className={classes.TabContent}>
                        <img
                            src={destination[activeTab].images.webp}
                            alt={destination[activeTab].name}
                            className={classes.Image}
                        />

                        <div className={classes.Tab}>
                            <div className={classes.TABGroup}>
                                {destination.map((d, i) => (
                                    <span
                                        key={i}
                                        className={`${
                                            activeTab === i && classes.ActiveTab
                                        }`}
                                        onClick={changeActive.bind(null, i)}
                                    >
                                        {d.name}
                                    </span>
                                ))}
                            </div>

                            <div className={classes.Details}>
                                <h1 className={classes.Name}>
                                    {destination[activeTab].name}
                                </h1>

                                <div>
                                    <div className={classes.description}>
                                        {destination[activeTab].description}
                                    </div>

                                    <hr />

                                    <div className={classes.Travel}>
                                        <div>
                                            <h5>AVG. DISTANCE</h5>
                                            <p>
                                                {
                                                    destination[activeTab]
                                                        .distance
                                                }
                                            </p>
                                        </div>

                                        <div>
                                            <h5>EST. TRAVEL TIME</h5>
                                            <p>
                                                {destination[activeTab].travel}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationPage;
