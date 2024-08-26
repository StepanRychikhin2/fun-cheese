import { React, Component } from 'react'
import sty from './loadPagecss.module.css'
import HhefHat from '../../../svg/LoadPage/chef-hat.svg'
class Header extends Component {
	render() {
		return (
			<div className={sty.GlawBox}>
				<ul className={sty.ListCont}>
					<li className={sty.componentList}>
						<img className={sty.PhotoShefHat} src={HhefHat} />
						<h1>FUN CHEESE</h1>
					</li>
					<li className={sty.componentList}>
						<p>Home</p>
					</li>
					<li className={sty.componentList}>
						<p>Contact</p>
					</li>
				</ul>
			</div>
		)
	}
}

export default Header
