import '../../styles/home.css';

import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

console.log(localStorage.getItem('connect'));
export default function Home() {

    const [posts, setPosts] = useState([]);
    const config = {
        method: 'GET',
        headers: new Headers({
            'Autorization': 'Bearer ' + localStorage.getItem('connect'),
            'Content-Type': 'application/x-www-form-urlencoded'
        })
    };

    useEffect(() => {
        fetch('http://localhost:3000/api/posts/', config)
            .then(res => res.json)
            .then((data) =>
                setPosts(data)
            )
            .catch(err => console.log(err))
    })


    const header = (
        <img alt="Card" src="images/usercard.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    );
    const footer = (
        <span>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary ml-2" />
        </span>
    );

    return (
        <section>
            <article>
                {
                    posts.map(posts => {

                        <Card key={posts.id} title={posts.title} style={{ width: '25em' }} footer={footer} header={header}>
                            <p className="m-0" style={{ lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                        </Card>
                    })
                }

            </article>
        </section>
    )
}


