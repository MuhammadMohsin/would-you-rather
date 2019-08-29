import React from 'react';
import Tabs from './Tabs';

const Home = () => {
    return (
        <div className="home-container container-spec">
            <Tabs>
                <div label="Unanswered Questions">
                    Unanswered Questions
                </div>
                <div label="Answered Questions">
                    Answered Questions
                </div>
            </Tabs>
        </div>
    )
}

export default Home;