import React from 'react';

const avatar = 'https://placehold.co/600x400/EEE/31343C';

export const PlanetComponent = ({ properties, image }) => {

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
                                            <p className="text-muted">{ properties[ 'name' ] }</p>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <h6>Population</h6>
                                            <p className="text-muted">{ properties[ 'population' ] }</p>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <h6>Diameter</h6>
                                            <p className="text-muted">{ properties[ 'diameter' ] }</p>
                                        </div>

                                        <div className="col-6 mb-3">
                                            <h6>Orbital Period</h6>
                                            <p className="text-muted">{ properties[ 'orbital_period' ] }</p>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <h6>Surface Water Percentage</h6>
                                            <p className="text-muted">{ properties[ 'surface_water' ] }</p>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <h6>Gravity</h6>
                                            <p className="text-muted">{ properties[ 'gravity' ] }</p>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <h6>Rotation Period</h6>
                                            <p className="text-muted">{ properties[ 'rotation_period' ] }</p>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <h6>Climate</h6>
                                            <p className="text-muted">{ properties[ 'climate' ] }</p>
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
