import React from 'react';
class Footer extends React.Component<any,any> {

    render() {
        return(

            <footer className={'bg-teal-950 text-white p-5'}>
                <img   src="src/assets/logo t.png" title="logo" alt="logo" className={'w-[50px]'}/>
                <ul className={'mt-5'}>
                    <li>IJSE</li>
                    <li>GDSE</li>
                    <li>RAD</li>
                </ul>
                <div className={'mt-5 text-center'}>Copy @2023 Blog LK</div>
            </footer>
        );
    }
}
export default Footer;