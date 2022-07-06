import {useState}  from "react"

function Welcome(props) {
    const [language,setLanguage] = useState("Tamil")

    const switchLanguage = () => {
        setLanguage("English")
    }

    return (
    <div>
        <h1>Welcome to React training in {language}</h1>
        <button onClick={switchLanguage}>Switch Language</button>
    </div>)
}

export default Welcome