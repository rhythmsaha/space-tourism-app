import { useState } from "react";
import Header from "../Header";
import classes from "./CrewPage.module.scss";
import { crew } from "../../data";

const CrewPage = () => {
    const [activeTab, setActiveTab] = useState(0);

    const changeActiveHandler = (index) => {
        if (activeTab !== index) setActiveTab(index);
    };

    return (
        <div className={classes.Main}>
            <Header />

            <div className={classes.body}>
                <h1 className={classes.Heading}>
                    <span>02</span> MEET YOUR CREW
                </h1>

                <div className={classes.Crew}>
                    <div className={classes.Image}>
                        <img
                            src={crew[activeTab].images.webp}
                            alt={crew[activeTab].name}
                        />
                    </div>
                    <div className={classes.dots}>
                        {crew.map((c, i) => (
                            <span
                                key={i}
                                className={
                                    activeTab === i ? classes.active : undefined
                                }
                                onClick={changeActiveHandler.bind(null, i)}
                            />
                        ))}
                    </div>

                    <div className={classes.content}>
                        <div className={classes.role}>
                            {crew[activeTab].role}
                        </div>
                        <div className={classes.name}>
                            {crew[activeTab].name}
                        </div>
                        <div className={classes.bio}>{crew[activeTab].bio}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CrewPage;
