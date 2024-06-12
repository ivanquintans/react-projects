import { useState } from "react"

export function TwitterFollowCard ({username , name }) {
    const [isFollowing,setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='tw-followCard'> 
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt = "El avatar de Ivan Quintans" src={`https://unavatar.io/${username}`} />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUsername'>@{username}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text
                }</button>
            </aside>
        </article>
    )

}