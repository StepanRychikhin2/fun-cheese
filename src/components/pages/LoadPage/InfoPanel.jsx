import sty from './loadPagecss.module.css'
import { React, Component } from 'react'
import img from '../../../img/LoadPageimg/LoadingPageFoodImg.png'
import imgYT from '../../../img/LoadPageimg/youTubeStart.png'

class InfoPanelLoadPage extends Component {
	render() {
		return (
			<div className={sty.boxInfoPanel}>
				<div>
					<div className={sty.boxTextFood}>
						<h1 className={sty.TitleFod}>Fast</h1>
						<p className={sty.TxtFod}>Food Delivery</p>
					</div>

					<p className={sty.TxtInfo}>
						Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
						doloremque laudantium
					</p>
					<div>
						<button className={sty.btnOrder}>Order Now</button>
						<button className={sty.btnVideo}>
							<img className={sty.imgYT} src={imgYT} /><p>Watch Video</p> 
						</button>
					</div>
				</div>

				<div>
					<img className={sty.imgLoadINfo} src={img} />
				</div>
			</div>
		)
	}
}

export default InfoPanelLoadPage
