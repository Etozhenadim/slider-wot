import './Banner.scss'

export const Banner = () => {
    return (
        <div className='banner'>
            <div className="banner_wrapper">
                <div className="banner_content">
                    <h2 className='banner_content--title'>Germany</h2>
                    <img src="assets/banners/tanks.png" alt="tanks"/>

                    <div className='banner_extra'>
                        <h3 className='banner_extra--title'>128</h3>
                        <span className='banner_extra--text'>GERMAN VEHICLES IN THE GAME</span>
                    </div>
                </div>
                <ul className='banner_list'>
                    <li>StuG III,</li>
                    <li>Panther,</li>
                    <li>Maus,</li>
                    <li>Tiger,</li>
                    <li>Pz. III</li>
                </ul>
            </div>
        </div>
    )
}