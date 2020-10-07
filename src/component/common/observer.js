import React from 'react'


const myObserver = (id) => {

    const counterSection = document.querySelector(id);
    const sectionObserver = new IntersectionObserver((entries) => {

        if(entries[0].isIntersecting){
            console.log('intersecting...');
        }
    })

    return sectionObserver.observe(counterSection)

}


export default myObserver;
