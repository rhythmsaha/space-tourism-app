import { useState } from "react";
import Header from "../Header";
import classes from "./TechnologyPage.module.scss";
import { technology } from "../../data";

const TechnologyPage = () => {
    const [active, setActive] = useState(0);

    const changeActiveHandler = (i) => setActive(i);

    return (
        <div className={classes.Main}>
            <Header />

            <div className={classes.container}>
                <h1 className={classes.heading}>
                    <b>03</b> SPACE LAUNCH 101
                </h1>

                <div className={classes.Tabgroup}>
                    <img
                        src={technology[active].images.landscape}
                        alt={technology[active].name}
                        className={classes.landscapeImg}
                    />

                    <div className={classes.tabs}>
                        {technology.map((t, i) => (
                            <span
                                className={
                                    active === i ? classes.active : undefined
                                }
                                onClick={changeActiveHandler.bind(null, i)}
                                key={i}
                            >
                                {i + 1}
                            </span>
                        ))}
                    </div>

                    <div className={classes.content}>
                        <h5 className={classes.contentHeading}>
                            THE TECHNOLOGY
                        </h5>
                        <h1 className={classes.name}>
                            {technology[active].name}
                        </h1>
                        <p className={classes.paragraph}>
                            {technology[active].description}
                        </p>
                    </div>

                    <img
                        src={technology[active].images.portrait}
                        alt={technology[active].name}
                        className={classes.portraitImg}
                    />
                </div>
            </div>
        </div>
    );
};

export default TechnologyPage;
