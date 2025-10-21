export const SkillsBlock = ({
    isPortrait,
    handleOpenModal
}) => {
    return (
        <div className={'skills-block'} draggable="false">
        <h1 style={{ fontSize: isPortrait ? "52px" : "10vw"}}>Навыки</h1>
        <p style={{ fontSize: isPortrait ? "27px" : "6vw"}}> Пишу  
          <span style={{ color:"#4824ff" }}> чистый </span>
          и
          <span style={{ color:"#4824ff" }}> читаемый </span>
          код с применением технологий
        </p>
        <div style={{display: isPortrait ? "flex" : '', marginTop: "16px"}}> 
          <p className={ isPortrait ? 'tag' : 'tag mobile'}> <p className={isPortrait ? 'tag-icon' : 'tag-icon mobile'}/> NEXT.Js </p> <br/>
          <p className={ isPortrait ? 'tag' : 'tag mobile'}> <p className={isPortrait ? 'tag-icon' : 'tag-icon mobile'}/> React </p> <br/>
          <p className={ isPortrait ? 'tag' : 'tag mobile'}> <p className={isPortrait ? 'tag-icon' : 'tag-icon mobile'}/> TypeScript, JavaScript </p> <br/>
          <p className={ isPortrait ? 'tag' : 'tag mobile'}> <p className={isPortrait ? 'tag-icon' : 'tag-icon mobile'}/> PostgreSQL, Prisma </p> <br/>
          <p className={ isPortrait ? 'tag' : 'tag mobile'}> <p className={isPortrait ? 'tag-icon' : 'tag-icon mobile'}/> Andoid (Java, Kotlin) </p> <br/>  
          <p className={ isPortrait ? 'tag' : 'tag mobile'}> <p className={isPortrait ? 'tag-icon' : 'tag-icon mobile'}/> Git </p> <br/>
        </div>
        <div style={{display: isPortrait ? "flex" : ''}}> 
          <p className={ isPortrait ? 'tag' : 'tag mobile'}> <p className={isPortrait ? 'tag-icon' : 'tag-icon mobile'}/> WPF, ASP.Net, C# </p> <br/>
          <p className={ isPortrait ? 'tag' : 'tag mobile'}> <p className={isPortrait ? 'tag-icon' : 'tag-icon mobile'}/> EntityFramework </p> <br/>
          <p className={ isPortrait ? 'tag' : 'tag mobile'}> <p className={isPortrait ? 'tag-icon' : 'tag-icon mobile'}/> MS SQL Server </p> <br/>
          <p className={ isPortrait ? 'tag' : 'tag mobile'}> <p className={isPortrait ? 'tag-icon' : 'tag-icon mobile'}/> HTML, CSS </p> <br/>
          <p className={ isPortrait ? 'tag' : 'tag mobile'}> <p className={isPortrait ? 'tag-icon' : 'tag-icon mobile'}/> Паттерны MVC, MVVM </p> <br/>
        </div>
        <p style={{fontSize: isPortrait ? "27px" : "6vw"}}> Готов работать в команде, быстро адаптируюсь к процессам и куммуникации. <br/>
          Детальную информацию готов обсудить при
          <span style={{ color:"#4824ff", cursor: "pointer" }} onClick={isPortrait ? handleOpenModal : ()=>{window.open('https://t.me/nikitabakulin43')}}> личной переписке</span>.        
        </p>  
      </div>
    )
}