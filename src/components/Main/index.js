import './style.css'


const Main = () => {
    return (
        <main className="main">
            <div className="items">
                <div className="logo">
                    <div className="slogan">
                        <a href="/src/index/index.html"></a>
                            <img src="/assets/D.png" alt="D" />

                            <div className="school_title">
                                <span style={{letterSpacing:"0.25rem", fontSize:"1.8rem"}}>Centro Comunitário</span> <br />
                                <span style={{letterSpacing:"0.25rem", fontSize:"2rem"}}>Madre Anunciata Cocchetti</span>
                            </div>
                    </div>
                      
                        <div className="dorotheas">
                            <span style={{letterSpacing:"0.75rem", color:"#ffffff",fontSize:"9rem"}}>DOROTHEAS</span> <br />
                            <span style={{letterSpacing:"0.12rem", fontSize:"1.8rem",color:"#F25F5C"}}>MOLDANDO FUTUROS</span>
                        </div>
                        
                </div>

                <div className="mais_de">
                    <div className="mais_title">
                        <span style={{color:"#FCBF49"}}>MAIS DE</span>

                        <div className="bullet_curso">
                            <img src="/assets/dever-de-casa 1.png" alt=""/><span style={{fontSize: "1.5rem", marginLeft:"5px"}}> 100 CURSOS</span>
                        </div>

                    </div>

                    <div className="mais_title">
                        <span style={{color:"#FCBF49"}}>MAIS DE</span>

                        <div className="bullet_curso">
                            <img src="/assets/alunos 1.png" alt=""/><span style={{fontSize: "1.5rem", marginLeft:"5px"}}> 300 ALUNOS</span>
                        </div>

                    </div>
                </div>    
            </div>
            

        </main>
    );
}
export default Main
