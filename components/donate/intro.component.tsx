import {FaHandHoldingHeart, FaUniversity, FaMoneyCheck, FaCode, FaHandsHelping} from 'react-icons/fa'; // Importing icons

export function Intro() {
    return (
        <div>
            <section className="ftco-section">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-6 d-flex ftco-animate fadeInUp ftco-animated">
                            <div className="donation-section bg-light p-5 rounded shadow-lg">
                                <h3 className="mb-4 text-primary text-center">
                                    <FaHandHoldingHeart className="mr-2" /> Donate to Support Our Cause
                                </h3>
                                <p>Your generous contributions help us continue providing exceptional care for children with cerebral palsy. You can donate via bank transfer using the following details:</p>
                                <ul className="list-unstyled mt-4">
                                    <li className="mb-3">
                                        <FaUniversity className="text-primary mr-2" />
                                        <strong>Bank Name:</strong> XYZ Bank Nepal
                                    </li>
                                    <li className="mb-3">
                                        <FaMoneyCheck className="text-primary mr-2" />
                                        <strong>Account Number:</strong> 1234567891011
                                    </li>
                                    <li className="mb-3">
                                        <FaCode className="text-primary mr-2" />
                                        <strong>Account Code:</strong> 0123456789
                                    </li>
                                    <li className="mb-3">
                                        <FaCode className="text-primary mr-2" />
                                        <strong>SWIFT Code:</strong> XYZBNPKA
                                    </li>
                                </ul>
                                <p className="mt-4">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    For international donations, please ensure to use the correct SWIFT code and include your reference as <em>"Marloes Donation"</em> in the transfer note.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 pl-md-5 ftco-animate fadeInUp ftco-animated">
                            <h2 className="mb-4 d-flex align-items-center">
                                <FaHandsHelping className="mr-3 text-primary" style={{fontSize: '2rem'}}/>
                                <span style={{ fontWeight: 'bold', color: "black"}}>Donate Us</span>
                            </h2>
                            <p>Your support not only provides hope and assistance to individuals with cerebral palsy but
                                also helps us create a more inclusive world for those with disabilities.</p>
                            <p>Every donation counts, and every act of kindness brings us one step closer to our mission
                                to provide comprehensive care, support, and hope to individuals and families affected by
                                cerebral palsy.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
