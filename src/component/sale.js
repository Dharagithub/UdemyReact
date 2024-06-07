import udemy_final from "../assest/Image/udemy_final.jpg"

function Sale() {
    return (
        <div class="sale-img">
            <img src={udemy_final} alt="Sale-img"></img>
            <div class="sale-img__offer">
                <h2>Udemy flash Sale! 24 hours to save</h2>
                <p>Get the top Courses for just <strong>499</strong></p>
                <p>Just one day to save but lifetime to learn</p>
        </div>
    </div>
    )
}

export default Sale