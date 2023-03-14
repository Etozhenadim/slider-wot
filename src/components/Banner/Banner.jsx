import './Banner.scss'
export const Banner = ()=>{
    return(
        <div className='banner'>
            <div className="banner_wrapper">
                <h2 className='banner_title'>Germany</h2>
                <img src="assets/banners/tanks.png" alt="tanks"/>
                <div className='banner_additional'>
                    <h3 className='banner_additional--title'>128</h3>
                    <span className='banner_additional--text'>GERMAN VEHICLES IN THE GAME</span>
                </div>
                <ul className='banner_list'>
                    <li className='banner_list--item'>StuG III,</li>
                    <li className='banner_list--item'>Panther,</li>
                    <li className='banner_list--item'>Maus,</li>
                    <li className='banner_list--item'>Tiger,</li>
                    <li className='banner_list--item'>Pz. III</li>
                </ul>
            </div>

        </div>
    )
}