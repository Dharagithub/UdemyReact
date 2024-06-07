import c1 from "../assest/Image/c1.jpg"
import c2 from "../assest/Image/c2.jpg"
import c3 from "../assest/Image/c3.jpg"
import c4 from "../assest/Image/c4.jpg"


function Recommended(){
    return(
        <div class="Recommended">
        <h2>Recommended for you</h2>
        <p>Pick the best fit</p>
        <div class="Recommended__container">
            <div class="course-card">
                <img src={c1} alt="c1"/>
                <h4>2023 Python Data Visualization Masterclass</h4>
                <p>Jose</p>
                <p>4.3⭐⭐⭐⭐</p>
                <p>999 <del>499</del></p>
            </div>

            <div class="course-card">
                <img src={c2} alt="c2"/>
                <h4>Web Development Bootstarp 2023 Advance</h4>
                <p>Col</p>
                <p>4.2⭐⭐⭐⭐</p>
                <p>999 <del>499</del></p>
            </div>

            <div class="course-card">
                <img src={c3} alt="c3"/>
                <h4>Basic to Advance Java Core Training</h4>
                <p>Todd</p>
                <p>4.1⭐⭐⭐⭐</p>
                <p>999 <del>499</del></p>
            </div>

            <div class="course-card">
                <img src={c4} alt="c4"/>
                <h4>Master UI/UX Designing with Figma</h4>
                <p>Ben</p>
                <p>4⭐⭐⭐⭐</p>
                <p>999 <del>499</del></p>
            </div>
        </div>
    </div>
    )
}

export default Recommended