function Nav() {
    return (
        <div className="nav">
            <div className="nav-one">
                <h1 className="nav-one__title">Udemy</h1>
            </div>
            <div className="nav-two">
                {/* <i class="fa-solid fa-magnifying-glass" style="color: black;"></i> */}
                <input type="text" placeholder="Search for anything here" />
            </div>
            <div className="nav-three">
                <p>Courses</p>
                <div className="nav-three__learning">
                    <p>My Learning</p>
                    <div className="learning__popup">
                        <p>You did not purchase anything yet</p>
                    </div>
                </div>
                <i className="fa-solid fa-cart-shopping"></i>
                <i className="fa-solid fa-bell"></i>
                <i className="fa-solid fa-user"></i>
            </div>
            <div className="nav-four">
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    )
}

export default Nav