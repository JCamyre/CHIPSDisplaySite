import React from 'react'
// Could split up into contributors, link, and title, but too much work. API call will just send the entire thing
function Publication({information}) {
    return (
        <div>
            <span>
                {information}
            </span>
        </div>
    )
}

export default Publication
