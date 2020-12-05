import React from 'react';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
            className="home_image"
            src="https://rb.gy/vzhwsg"
            alt="home__image"
            />

            <div className="home__row">
                <Product 
                    id="1234"
                    title="Migrations: A NovelMigrations: A Novel Charlotte McConaghyCharlotte McConaghy"
                    price={200}
                    rating={5}
                    image="https://rb.gy/c4atlk"
                />
                <Product 
                    id="12345"
                    title="Publication Manual of the American Psychological Association: 7th Edition, 2020 Copyright"
                    price={500}
                    rating={3}
                    image="https://rb.gy/z1ceu7"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="123467"
                    title="Publication Manual of the American Psychological Association: 7th Edition, 2020 Copyright"
                    price={200}
                    rating={5}
                    image="https://rb.gy/kfr1jh"
                />
                <Product 
                    id="123456"
                    title="Publication Manual of the American Psychological Association: 7th Edition, 2020 Copyright"
                    price={500}
                    rating={3}
                    image="https://rb.gy/atrf1u"
                />
                <Product 
                    id="1234578"
                    title='Samsung Galaxy A20S w/Triple Cameras, Snapdragon 450, 4000mAh Battery
                     (Black, 32GB + 64GB SD Bundle)'
                    price={500}
                    rating={3}
                    image="https://rb.gy/9v0lhv"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="1234678"
                    title="Dell UltraSharp U2720Q 27 Inch 4K UHD (3840 x 2160) LED Backlit LCD IPS USB-C Monitor 
                    (7GZ651)Dell UltraSharp U2720Q 27 Inch 4K UHD (3840 x 2160) LED Backlit LCD IPS USB-C Monitor (7GZ651)t"
                    price={1200}
                    rating={5}
                    image="https://rb.gy/bbs0bp"
                />
            </div>

        </div>
    )
}

export default Home;
