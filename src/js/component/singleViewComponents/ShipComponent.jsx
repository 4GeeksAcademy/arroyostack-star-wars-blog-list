import React from 'react';

const avatar = 'https://placehold.co/600x400/EEE/31343C';

export const ShipComponent = ({ properties, image }) => {
    return (
        <section className="vh-100 mt-0">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-6 mb-4 mb-lg-0">
                    <div className="card" style={ { borderRadius: ".5rem" } }>
                        <div className="row g-0">
                            <div className="col-md-4 gradient-custom text-center text-white"
                                style={ { borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem" } }>
                                <img src={ image || avatar }
                                    alt="Avatar" className="my-5  rounded" style={ { width: "10rem" } } />
                                <h5>hello</h5>

                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h6>Information</h6>
                                    <hr className="mt-0 mb-4" />
                                    <div className="row pt-1">
                                        <div className="col-6 mb-3">
                                            <h6>Name</h6>
                                            <p className="text-muted">{ properties.name }</p>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <h6>Cargo Capacity</h6>
                                            <p className="text-muted">{ properties[ 'cargo_capacity' ] }</p>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <h6>Starship Type</h6>
                                            <p className="text-muted">{ properties[ 'starship_class' ] }</p>
                                        </div>

                                        <div className="col-6 mb-3">
                                            <h6>Manufacturer</h6>
                                            <p className="text-muted">{ properties[ 'manufacturer' ] }</p>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <h6>Price in Credits</h6>
                                            <p className="text-muted">{ properties[ 'cost_in_credits' ] }</p>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <h6>Crew</h6>
                                            <p className="text-muted">{ properties[ 'crew' ] }</p>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <h6>Passengers</h6>
                                            <p className="text-muted">{ properties[ 'passengers' ] }</p>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <h6>Duration Full Tank</h6>
                                            <p className="text-muted">{ properties[ 'consumables' ] }</p>
                                        </div>
                                        <hr />


                                    </div>
                                    <div className="d-flex justify-content-start">
                                        <a href="#"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                                        <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                                        <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
