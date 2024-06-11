import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard isFollowing username="ivanquintans" name="Ivan Quintáns Gonzalez"/>
            <TwitterFollowCard isFollowing={false} username="SirMaza" name= "Heretics Sirmaza" />
            <TwitterFollowCard isFollowing username="SergioFFerra" name="Sergio Ferra Salcedo" />
            <TwitterFollowCard isFollowing username="HereticsVal" name="Heretics Valorant" />
            
        </section>

    )
}