import React from 'react';
import Publication from '../Publication/Publication';   

function Publications() {
    return (
        <div>
            <h1>Recent Publications:</h1>
            <ol>
                <li><Publication information='K. Sahoo, B. Vinnakota, S. Ardalan and S. S. Iyer, "Co-optimizing signaling protocol with semiconductor and packaging technology," 2021 IEEE 30th Conference on Electrical Performance of Electronic Packaging and Systems (EPEPS), 2021, pp. 1-3, doi: 10.1109/EPEPS51341.2021.9609161.' /></li>
                <li><Publication information='Y.-T. Yang, C. Hu, P. Zhang, N. Shakoorzadeh, H. Ren, N. Ni, K. Wang, and S. S. Iyer, "Nb-Based Superconducting Silicon Interconnect Fabric for Cryogenic Computing Applications," 2021 IEEE 71st Electronic Components and Technology Conference (ECTC), 2021, pp. 1577-1582, doi: 10.1109/ECTC32696.2021.00250.' /></li>
            </ol>
        </div>
    )
}

export default Publications
