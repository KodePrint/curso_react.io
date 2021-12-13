import React from 'react';
import '../styles/NotFound.scss'

const NotFound = () => {
    return (
        <div className="container">
            <div className="error_title">
                <h2 data-text="Error">¡Error!</h2>
            </div>
            <div className="message_container">
                <div className="error">
                    <h3>404</h3>
                </div>
                <div className="container_ghost">
                    <a href="/" className='back_url'>Regresar a la pagina principal</a>

                    <div className='ghost'>
                        <div className="face">
                            <div className="eyes">
                                <span></span><span></span>
                            </div>
                            <div className="mouth">
                                <span></span><span></span><span></span><span></span>
                            </div>
                        </div>
                        <div className="hands">
                            <span></span><span></span>
                        </div>
                        <div className="feet">
                            <span></span><span></span><span></span><span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <h1>Pagina no Encontrada..! 😢</h1>
            </div>
        </div>
    );
}

export default NotFound;