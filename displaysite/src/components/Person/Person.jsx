import React from 'react'

function Person({name, title, primary_area, email, img, linkedin}) {
    return (
        <div>
            <div>
                <img src={img} alt='Profile Picture' />
            </div>
            <div>
                <h3>{name}</h3>
                {(title) && 
                    (<i>{title}</i>)
                }
                <h4>Primary area: {primary_area}</h4>
                <h4>Email: {email}</h4>
                {(linkedin) && (
                    <a href={linkedin}>LinkedIn Profile</a>
                )}
            </div>
        </div>
    )
}

export default Person
