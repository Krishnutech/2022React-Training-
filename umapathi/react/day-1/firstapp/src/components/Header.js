import React  from "react"
class Header extends React.Component {
constructor(){
    super()
    this.state = {
        websiteName:"My Website"
    }
}
    render() {
        return (
            <div>
                <img src="" alt="logo"/>
                <strong> {this.state.websiteName}</strong>  
            </div>
        )
    }
}

export default Header