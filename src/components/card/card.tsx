import React from 'react';


class Card extends React.Component<any,any> {
    render() {
        return(
            <div className={'w-72 p-5 border-solid border-2 m-5'}>
                <h1 className={'text-2xl font-bold'}>Learn TypeScript(+React)</h1>
                <p className={'my-5'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum dicta dolore earum, fugiat labore molestias mollitia quod! Deserunt fugiat, harum illo maiores porro quasi quidem
                    recusandae voluptates voluptatibus. Dignissimos.
                </p>

                <button className={'bg-green-600 p-2 text-white'}>Read more...</button>
            </div>
        );
    }



}

export default Card;