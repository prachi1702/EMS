import React from 'react';
import Content from './Content';

const Home =({handleLogout}) => {
    return(
        <div>
        <section className="hero">
            <nav>
                <h1>Wecome</h1>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            
        </section>
        <Content />
    </div>
        
    );
       
    }
export default Home;