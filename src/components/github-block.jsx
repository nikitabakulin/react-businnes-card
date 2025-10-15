export const GitHubBlock = ({ isPortrait }) => {
    return (
        <div className={'github-block'}>
            <h1 style={{ fontSize: isPortrait ? "52px" : "10vw"}}>GitHub проекты</h1>
            <p style={{ fontSize: isPortrait ? "27px" : "6vw"}}> Ознакомтесь с моими репозиториями на   
                <a style={{ color:"#4824ff", textDecoration:   "none" }} href='https://github.com/nikitabakulin'> GitHub </a>. <br/>
                <a style={{ color:"#4824ff", textDecoration:   "none" }} href='https://github.com/nikitabakulin'> Здесь </a>
                можно увидеть примеры API, веб-приложений, над которыми я работал.
            </p>
            <p style={{ fontSize: isPortrait ? "27px" : "6vw" }}> Активно развиваюсь как разработчик, и все свежие наработки, эксперементальные и pet-проекты, <br/>
                а также улучшения к существующим репозиториям будут регулярно появляться в моём  
                <a style={{ color:"#4824ff", textDecoration:   "none" }} href='https://github.com/nikitabakulin'> GitHub-профиле</a>.
            </p>
      </div>
    )
}