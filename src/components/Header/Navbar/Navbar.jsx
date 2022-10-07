import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../../styles/Navbar.css';

import React from 'react';
import { TabMenu } from 'primereact/tabmenu';

const Navbar = () => {

    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home' },
        { label: 'Deconneted', icon: 'pi pi-fw pi-cog' }
    ];

    return (
        <div>
            <div className="card">
                <h5>Default</h5>
                <TabMenu model={items} />
            </div>
        </div>
    );
}

export default Navbar