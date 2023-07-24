 
import React from 'react';

const Details = ({
    show: {
        sno, 
        ordate, 
        clientname,
        clientct,
        product,
        rate,
        quantity,
        total
    }
}) => {
    const tableStyle = {
    
        width: '100%',
        textAlign: 'center',
        marginTop: '10px',
    };

    const thStyle = {
        backgroundColor: 'pink',
        padding: '2px',
    };

    const tdStyle = {
        padding: '2px',
        
    };

    return (
        <div>
            
            <table style={tableStyle} border="1">
                <thead>
                    <tr>
                        <th style={thStyle}>SNo</th>
                        <th style={thStyle}>Order Date</th>
                        <th style={thStyle}>Client Name</th>
                        <th style={thStyle}>Client Contact</th>
                        <th style={thStyle}>Product</th>
                        <th style={thStyle}>Rate</th>
                        <th style={thStyle}>Quantity</th>
                        <th style={thStyle}>Total</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={tdStyle}>{sno}</td>
                        <td style={tdStyle}>{ordate}</td>
                        <td style={tdStyle}>{clientname}</td>
                        <td style={tdStyle}>{clientct}</td>
                        <td style={tdStyle}>{product}</td>
                        <td style={tdStyle}>{rate}</td>
                        <td style={tdStyle}>{quantity}</td>
                        <td style={tdStyle}>{total}</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Details;

  