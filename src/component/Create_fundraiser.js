import React from 'react'

export default function Create_fundraiser() {
    return (
        <div id="CreateFr">
            <div className="container my-4 shadow-lg p-3 mb-5 bg-body rounded">
                <hr  style={{marginTop:'20px'}}/>
                <h2 className="text-center animate-character"  style={{marginTop:'35px'}}>Create your Fundraiser</h2>
                <div className="container">
                    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                        <div className="col">
                            <div className="p-3 border bg-light">Orphanage</div>
                        </div>
                        <div className="col">
                            <div className="p-3 border bg-light">Animals</div>
                        </div>
                        <div className="col">
                            <div className="p-3 border bg-light">Patient</div>
                        </div>
                        <div className="col">
                            <div className="p-3 border bg-light">Old Age</div>
                        </div>
                        <div className="col">
                            <div className="p-3 border bg-light">Education</div>
                        </div>
                        <div className="col">
                            <div className="p-3 border bg-light">PHysically Challanged</div>
                        </div>
                        <div className="col">
                            <div className="p-3 border bg-light">Row column</div>
                        </div>
                        <div className="col">
                            <div className="p-3 border bg-light">Row column</div>
                        </div>
                        <div className="col">
                            <div className="p-3 border bg-light">Row column</div>
                        </div>
                        <div className="col">
                            <div className="p-3 border bg-light">Row column</div>
                        </div>
                    </div>
                    <div className="container my-3">
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button className="btn btn-dark" type="button">Create Fundraiser</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
