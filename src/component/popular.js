import c1 from "../assest/Image/c1.jpg"
import c2 from "../assest/Image/c2.jpg"
import c3 from "../assest/Image/c3.jpg"
import c4 from "../assest/Image/c4.jpg"


function Popular() {
    return (
        <div class="Popular">
            <h2>Popular Topics</h2>
            <p>Pick the best fit</p>
            <div class="Popular__title">
                <div class="cor-card">
                    <img src={c1} alt="c1" />
                    <h4>2023 Python Data Visualization Masterclass</h4>
                    <p>Jose</p>
                    <p>4.3⭐⭐⭐⭐</p>
                    <p>999 <del>499</del></p>
                </div>

                <div class="cor-card">
                    <img src={c2} alt="c2" />
                    <h4>Web Development Bootstarp 2023 Advance</h4>
                    <p>Col</p>
                    <p>4.2⭐⭐⭐⭐</p>
                    <p>999 <del>499</del></p>
                </div>

                <div class="cor-card">
                    <img src={c3} alt="c3" />
                    <h4>Basic to Advance Java Core Training</h4>
                    <p>Todd</p>
                    <p>4.1⭐⭐⭐⭐</p>
                    <p>999 <del>499</del></p>
                </div>

                <div class="cor-card">
                    <img src={c4} alt="c4" />
                    <h4>Master UI/UX Designing with Figma</h4>
                    <p>Ben</p>
                    <p>4⭐⭐⭐⭐</p>
                    <p>999 <del>499</del></p>
                </div>
                <div class="cor-card">
                    <img src={c2} alt="c2" />
                    <h4>Ultimate AWS Certified Cloud Pratice</h4>
                    <p>Ben</p>
                    <p>4.3⭐⭐⭐⭐</p>
                    <p>999 <del>499</del></p>
                </div>
                <div class="cor-card">
                    <img src={c3} alt="c3" />
                    <h4>Basic to Advance Core Java, Spring Boot</h4>
                    <p>Ben</p>
                    <p>3⭐⭐⭐</p>
                    <p>999 <del>499</del></p>
                </div>
                <div class="cor-card">
                    <img src={c1} alt="c1" />
                    <h4>Full Stack Development-Basic to Advance</h4>
                    <p>Ben</p>
                    <p>4.6⭐⭐⭐⭐</p>
                    <p>999 <del>499</del></p>
                </div>
                <div class="cor-card">
                    <img src={c4} alt="c4" />
                    <h4>Master Python and Data Science 2023</h4>
                    <p>Ben</p>
                    <p>3⭐⭐⭐</p>
                    <p>999 <del>499</del></p>
                </div>
            </div>
        </div>
    )
}

export default Popular