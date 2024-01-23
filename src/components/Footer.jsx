import "./FooterStyles.scss"

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>AK FITHUB</h1>
                    <p>Get fit with AK</p>
                </div>
                <div>
                    <a href="/working">
                        <i className="fa-brands fa-facebook-square"></i>

                    </a>
                    <a href="https://www.instagram.com/ashok_rxer?igsh=ODA1NTc5OTg5Nw==">
                        <i className="fa-brands fa-instagram-square"></i>

                    </a>
                    <a href="/working">
                        <i className="fa-brands fa-whatsapp-square"></i>

                    </a>
                    <a href="/working">
                        <i className="fa-brands fa-twitter-square"></i>

                    </a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Workouts</h4>
                    <a href="/working">Workout videos</a>
                    <a href="/working">Workout programs</a>
                    <a href="/wellness">Meal plans</a>
                    <a href="/working">Routines</a>
                    <a href="/fitness">Fitness</a>
                </div>
                <div>
                    <h4>Healthy Living</h4>
                    <a href="/working">Health</a>
                    <a href="/wellness">Nutrition</a>
                    <a href="/working">Healthy Recipes</a>
                    <a href="/working">Experts</a>
                </div>
                <div>
                    <h4>About</h4>
                    <a href="/working">Careers</a>
                    <a href="/working">Tutorials</a>
                    <a href="/working">Our Team</a>
                </div>
                <div>
                    <h4>Membership</h4>
                    <a href="/working">AK Plus</a>
                    <a href="/working">Community</a>
                    <a href="/working">Blog</a>
                    <a href="/contact">Contact us</a>
                    <a href="/working">FAQ</a>
                    <a href="/working">Store</a>
                </div>
                <br></br><br></br><br></br>
            </div>
        </div>
    )
}

export default Footer