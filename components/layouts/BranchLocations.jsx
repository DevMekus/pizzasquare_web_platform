"use client"

const BranchLocations = () => {
  return (
       <section id="branch-location">
            <div className="branch-locator" id="branches">
                <div className="locator-container">
                    <div className="locator-content">
                        <h2>FIND YOUR NEAREST BRANCH</h2>
                        <div className="locator-search">
                            <input type="text" placeholder="Enter your location or postal code..." id="locationInput"/>
                            <button onClick={() => alert("Searching branches...")}>Find</button>
                        </div>
                        <div className="branch-list" id="branchList">
                            <div className="branch-item">
                                <h4>📍 Victoria Island Branch</h4>
                                <p>123 Ahmadu Bello Way, VI, Lagos</p>
                                <p className="branch-distance">2.3 km away • Open now</p>
                            </div>
                            <div className="branch-item">
                                <h4>📍 Lekki Phase 1 Branch</h4>
                                <p>45 Admiralty Way, Lekki, Lagos</p>
                                <p className="branch-distance">3.7 km away • Open now</p>
                            </div>
                            <div className="branch-item">
                                <h4>📍 Ikeja GRA Branch</h4>
                                <p>78 Obafemi Awolowo Way, Ikeja, Lagos</p>
                                <p className="branch-distance">5.1 km away • Open now</p>
                            </div>
                        </div>
                    </div>
                    <div className="map-placeholder">
                        🗺️ Interactive Map View
                    </div>
                </div>
                </div>
       </section>

  )
}

export default BranchLocations
