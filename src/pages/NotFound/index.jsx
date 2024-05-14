import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div>
            <Header />
            <div className="max-w-4xl mx-auto text-center py-[100px]">
                <div>
                    <h2 className="text-[120px] font-semibold">404 Not Found</h2>
                    <p>Your visited page not found. You may go home page.</p>
                </div>

                <Link className="mt-[80px] block" to="/">
                    <Button>Back to home page</Button>
                </Link>
            </div>
            <Footer />
        </div>
    );
}

export default NotFound;
