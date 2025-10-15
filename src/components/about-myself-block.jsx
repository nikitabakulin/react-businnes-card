export const AboutMySelfBlock = ({ isPortrait }) => {
    return (
        <div className={"about-myself-block"}>
            <h1 style={{ fontSize: isPortrait ? "52px" : "10vw" }}>О себе</h1>
            <div className={ isPortrait ? 'text-container' : 'text-container mobile'} style={{ marginTop: isPortrait ? "-1.5vw" : "-6vw" }}>
                <p style={{ fontSize: isPortrait ? "27px" : "6vw", marginRight: isPortrait ? "1vw" : "2vw" }}> - </p>
                <p style={{ fontSize: isPortrait ? "27px" : "6vw" }} className={isPortrait ? 'tag' : 'tag mobile'}> Никита Бакулин - Backend и Full-Stack разработчик из города Кирова </p>
            </div>
            <div className={ isPortrait ? 'text-container' : 'text-container mobile'}>
                <p className={ isPortrait ? "" : ""} style={{ fontSize: isPortrait ? "27px" : "6vw", marginRight: isPortrait ? "1vw" : "2vw" }}> - </p>
                <p style={{ fontSize: isPortrait ? "27px" : "6vw" }} className={isPortrait ? 'tag' : 'tag mobile'}> Образование: Колледж, Информационные системы и программирование, специалист </p>
            </div>
            <div className={ isPortrait ? 'text-container' : 'text-container mobile'}>
                <p style={{ fontSize: isPortrait ? "27px" : "6vw", marginRight: isPortrait ? "1vw" : "2vw" }}> - </p>
                <p style={{ fontSize: isPortrait ? "27px" : "6vw" }} className={isPortrait ? 'tag' : 'tag mobile'}> Коммуникабельный, ответственный, умею работать в команде </p>
            </div>
            <div className={ isPortrait ? 'text-container' : 'text-container mobile'}>
                <p style={{ fontSize: isPortrait ? "27px" : "6vw", marginRight: isPortrait ? "1vw" : "2vw" }}> - </p>
                <p style={{ fontSize: isPortrait ? "27px" : "6vw" }} className={isPortrait ? 'tag' : 'tag mobile'}> Быстро осваиваю новые технологии и стеки </p>
            </div>
            <div className={ isPortrait ? 'text-container' : 'text-container mobile'}>
                <p style={{ fontSize: isPortrait ? "27px" : "6vw", marginRight: isPortrait ? "1vw" : "2vw" }}> - </p>
                <p style={{ fontSize: isPortrait ? "27px" : "6vw" }} className={isPortrait ? 'tag' : 'tag mobile'}> Изучаю английский для профессионального роста и работы с международной документацией </p>
            </div>
            <div className={ isPortrait ? 'text-container' : 'text-container mobile'}>
                <p style={{ fontSize: isPortrait ? "27px" : "6vw", marginRight: isPortrait ? "1vw" : "2vw" }}> - </p>
                <p style={{ fontSize: isPortrait ? "27px" : "6vw" }} className={isPortrait ? 'tag' : 'tag mobile'}> Есть водительское удостоверение и автомобиль </p>
            </div>
            <div className={ isPortrait ? 'text-container' : 'text-container mobile'} >
                <p style={{ fontSize: isPortrait ? "27px" : "6vw", marginRight: isPortrait ? "1vw" : "2vw" }}> - </p>
                <p style={{ fontSize: isPortrait ? "27px" : "6vw" }} className={isPortrait ? 'tag' : 'tag mobile'}> Не  пью, не курю </p>
            </div>
      </div>
    )
}