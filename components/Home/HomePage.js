import router from "next/router";
import Header from "../Header";
import classes from "./Homepage.module.scss";

const Homepage = () => {
    return (
        <div className={classes.Main}>
            <Header />

            <div className={classes.body}>
                <div className={classes.content}>
                    <h3>So, you want to travel to</h3>
                    <h1>SPACE</h1>
                    <p>
                        Let’s face it; if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!
                    </p>
                </div>

                <div>
                    <div
                        onClick={() => router.push("/destination")}
                        className={classes.Explore}
                    >
                        Explore
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
